(ns slidet-oamk.main
  (:require [reagent.core :as r]
            [reagent.dom :as dom]
            [ajax.core :as ajax]
            [clojure.spec.alpha :as s]
            [goog.events.KeyCodes :as keycodes]
            [goog.events :as gev])
  (:import [goog.events EventType KeyHandler]))

(def dynamic-actions (r/atom {keycodes/UP println
                             keycodes/DOWN println}))

(defn capture-key 
  [keymap]
  (let [key-handler (KeyHandler. js/document)
        press-fn (fn [key-press]
                   (when-let [f (or (get keymap (.. key-press -keyCode))
                                  (get @dynamic-actions (.. key-press -keyCode)))]
                     (f)))]
    (gev/listen key-handler
      (-> KeyHandler .-EventType .-KEY)
      press-fn)))

(def main-page
  [:div "Welcome to the main page"])

(def introduction-page
  [:div "Welcome to the introduction page"])

(s/def ::element-spec (s/cat :options (s/? map?) :content (s/* vector?)))

(defmulti slide-element (fn [params]
                          (first params)))

(defmethod slide-element :list
  [[_ & content]]
  [:ul
   (for [c content]
     ^{:key (gensym "list-element-")}
     [:li (str c)])])

(def expanding-list-state (r/atom {}))

(defn expanding-list
  [[_ & content]]
  (let [content (take (or  (:visible-count @expanding-list-state) 0) content)]
     [:div #_[:div (pr-str @expanding-list-state)] 
     [:ul     
      (for [c content]
        ^{:key (gensym "expanding-list-element-")}
        [:li (str c)])]]))

(defn register-up-down-keys
  [up-action down-action]
  (reset! expanding-list-state {:visible-count 1})
  (swap! dynamic-actions assoc 
    keycodes/UP up-action ;#(swap! expanding-list-state update :visible-count dec) 
    keycodes/DOWN down-action))

(defn unregister-up-down-keys
  []
  (reset! expanding-list-state {})
  (swap! dynamic-actions assoc keycodes/UP println keycodes/DOWN println))

(defn decrease-by-one!
  [state]
  (if (> (:visible-count state) 1)
    (update state :visible-count dec)
    state))

(defn increase-by-one!
  [state]
  ; just a guess
  (if (< (:visible-count state) 8)
    (update state :visible-count inc)
    state))

(defmethod slide-element :expanding-list
  [_]
  (r/create-class
    {:component-did-mount (r/partial register-up-down-keys
                            #(swap! expanding-list-state decrease-by-one!)
                            #(swap! expanding-list-state increase-by-one!))
     :component-will-unmount unregister-up-down-keys
     :reagent-render expanding-list}))

(defmethod slide-element :heading
  [[_ & text]]
;^{:key (gensym "header-element-")}
  [:h1 (first text)])

(defmethod slide-element :image
  [[_ image text & more]]
  [:div.image 
   [:img {:src (str "/img/" image)}]
   (when text [:div.image-alt text])])

(defmethod slide-element :section
  [[_ & sections]]
  [:div.sections 
   (for [s sections]
     ^{:key (gensym "section-element-")}
     [:div.section 
      [slide-element s]])])

(comment (slide-element [:list 
                         "Welcome" 
                         "To our" 
                         "Presentation"]))

(comment (slide-element [:heading "Main page"]))

(defn slide-renderer 
  [{:keys [background] :as _options} content]
  (let [{background-image :image} background]
    [:div.slide-container
     {:style  
      (merge {} 
        (when background-image {:background-image (str "url(\"img/" background-image "\")")}))}
     (for [elem content]
       ^{:key (gensym "slide-element-")}
       [slide-element elem])]))

(def slides
  (r/atom
    {}))

(defonce slide-state (r/atom {:current-slide :main-page :history []}))

(defn change-slide 
  [{:keys [current-slide] :as app} path]
  (let [nxt (get-in @slides [current-slide path])]
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
  (let [dereffed-slides @slides
        current-slide (:current-slide @app)
        content (get-in dereffed-slides [current-slide :content])
        options (get-in dereffed-slides [current-slide :options])]
    (if (some? content)
      [slide-renderer options content]
      [not-found])))

(defn update-slides
  [ss]
  (reset! slides (-> ss :slides :slides))
  (swap! slide-state assoc :current-slide (-> ss :slides :first-slide)
    :slide-order (-> ss :slides :slide-order)
    :slide-index 0))

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
      [:div.application
       [:div.menu 
        [:button {:on-click #(swap! local-state update :menu-open? not)}
         "#"]
        (when (:menu-open? @local-state)
          [:div.menu-open 
           [:button {:on-click #(swap! local-state update :show-debug? not)} "Debug?"]
           [:button {:on-click #(ajax/POST "http://localhost:3005/api/slide" {:params {:slide (:current-slide @slide-state)}})} "Refetch"]])]
       (when (:show-debug? @local-state) 
         [:div.debug 
          [:div (pr-str (get @slides (:current-slide @slide-state)))]
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
