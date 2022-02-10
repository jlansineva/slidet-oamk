(ns slidet-oamk.main
  (:require [reagent.core :as r]
            [reagent.dom :as dom]
            [ajax.core :as ajax]
            [goog.events.KeyCodes :as keycodes]
            [goog.events :as gev])
  (:import [goog.events EventType KeyHandler]))

(defn capture-key 
  [keymap]
  (let [key-handler (KeyHandler. js/document)
        press-fn (fn [key-press]
                   (when-let [f (get keymap (.. key-press -keyCode))]
                     (f)))]
    (gev/listen key-handler
      (-> KeyHandler .-EventType .-KEY)
      press-fn)))

(def main-page
  [:div "Welcome to the main page"])

(def introduction-page
  [:div "Welcome to the introduction page"])

(defmulti slide-element (fn [params]
                          (first params)))

(defmethod slide-element :list
  [[_ & content]]
  [:ul
   (for [c content]
     [:li (str c)])])

(defmethod slide-element :heading
  [[_ & text]]
  [:h1 (first text)])

(defmethod slide-element :image
  [[_ image text & more]]
  [:div 
   [:img {:src (str "/img/" image)}]
   (when text [:div.image-alt text])])

(defmethod slide-element :section
  [[_ & sections]]
  [:div.sections 
   (for [s sections]
     [:div.section 
      [slide-element s]])])

(comment (slide-element [:list 
                         "Welcome" 
                         "To our" 
                         "Presentation"]))

(comment (slide-element [:heading "Main page"]))

(defn slide-renderer 
  [content]
  [:div.slide-container
   (for [elem content]
     
     [slide-element elem])])

(def slides
  (r/atom
    {}))

(defonce slide-state (r/atom {:current-slide :main-page :history []}))

(defn change-slide 
  [{:keys [current-slide] :as app} path]
  (let [nxt (get-in @slides [current-slide path])]
(println nxt)
    (if nxt
      (-> app
        (update :history conj current-slide)
        (assoc :current-slide nxt))
      app)))

(defn next-slide
  [app]
  (change-slide app :next-slide))

(defn previous-slide
  [app]
  (change-slide app :previous-slide))

(defn not-found 
  []
  [:div "Not found"])

(comment (ajax/POST "http://localhost:3005/api/slide" {:params {:slide (:current-slide @slide-state)}}))

(defn presenter 
  [app slides]
  (let [content (get-in @slides [(:current-slide @app) :content])]
    (if (some? content)
      [slide-renderer content]
      [not-found])))

(defn update-slides
  [ss]
  (reset! slides (:slides ss)))

(defn get-all-slides
  [this]
  (capture-key {keycodes/LEFT #(swap! slide-state previous-slide)
                keycodes/RIGHT #(swap! slide-state next-slide)})
  (ajax/POST "http://localhost:3005/api/slides" {:handler update-slides
                                                 :error-handler println}))

(defn slide-container
  []
  (let [local-state (r/atom {:menu-open? false :show-debug false})] 
    (fn []
      [:div
       [:div.menu 
        [:button {:on-click #(swap! local-state update :menu-open? not)}
         "#"]
        (when (:menu-open? @local-state)
          [:div.menu-open 
           [:button {:on-click #(swap! local-state update :show-debug? not)} "Debug?"]
           [:button {:on-click #(ajax/POST "http://localhost:3005/api/slide" {:params {:slide (:current-slide @slide-state)}})} "Refetch"]])]
       (when (:show-debug? @local-state) 
         [:div.debug 
          [:div (pr-str @slides)]
          [:div
           (str (:history @slide-state))]])
       [presenter slide-state slides]])))

(defn slidet-main 
  []
  (r/create-class
    {:display-name "slidet-main"
     :component-did-mount get-all-slides
     :reagent-render slide-container}))

#_(defn ^:export run
  [])
(dom/render [slidet-main] (js/document.getElementById "app"))
