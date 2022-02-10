(ns slidet-oamk.core
  (:require [reitit.core :as r]
            [reitit.ring :as ring]
            [reitit.ring.middleware.muuntaja :as muuntaja]
            [reitit.ring.middleware.multipart :as multipart]
            [reitit.ring.middleware.exception :as exception]           
            [reitit.ring.middleware.parameters :as parameters]
            [muuntaja.core :as m]
            [clojure.java.io :as io]
            [org.httpkit.server :as http])
  (:gen-class))

(def db 
  {:main-page {:next-slide :introduction
               :previous-slide nil
               :content [[:heading "Main page"] 
                        [:list 
                         "Welcome" 
                         "To our" 
                         "Presentation"]]}
   :introduction {:next-slide :introduction
               :previous-slide :main-page
               :content [[:heading "About me"] 
                         [:section
                          [:list 
                           "Clojurist" 
                           "I love stuff" 
                           "Hello world"]
                          [:image "ilikecats.jpeg"]]]}})

(defn wrap-logger
  [handler]
  (fn [{:keys [body-params uri headers request-method] :as request}]
    (println (str "LOG: "request-method ": " uri " with " headers " payload " body-params))
    (println "-------")
    (handler request)))

(defn success 
  "Success"
  ([body]
   (success nil body))
  ([headers body]
   (merge  {:status 200 :body body} (when headers {:headers headers}))))

(defn ping 
  [_]
  (success {:ok "ok"}))

(defn slide-handler 
  [{:keys [body-params] :as req}]
  (success {:content (:slide body-params)}))

(defn all-slides-handler
  [req]
  (success {:slides db}))

(def routes
  ["/api" 
   ["/slide" {:post {:handler slide-handler}}]
   ["/slides" {:post {:handler all-slides-handler}}]
   ["/ping" ping]])

(def app
  (ring/ring-handler
   (ring/router
    routes
    {:data 
     {:muuntaja m/instance
      :middleware [parameters/parameters-middleware
                   muuntaja/format-negotiate-middleware
                   muuntaja/format-response-middleware
                                        ; exception/exception-middleware
                   muuntaja/format-request-middleware
                   multipart/multipart-middleware
                   wrap-logger]}})
   (ring/routes 
    (ring/create-resource-handler {:path "/"})
    (ring/create-default-handler))))

(defn handler [request]
(println "something")
  {:status 200
   :headers {"Content-Type" "text/html"}
   :body "Hello World"})

(defn -main [& params]
  (println params)
  (http/run-server #'app {:port 3005 :join? false}))
