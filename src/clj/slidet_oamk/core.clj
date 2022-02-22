(ns slidet-oamk.core
  (:require [reitit.core :as r]
            [reitit.ring :as ring]
            [reitit.ring.middleware.muuntaja :as muuntaja]
            [reitit.ring.middleware.multipart :as multipart]
            [reitit.ring.middleware.exception :as exception]           
            [reitit.ring.middleware.parameters :as parameters]
            [muuntaja.core :as m]
            [clojure.java.io :as io]
            [org.httpkit.server :as http]
            [slidet-oamk.slides :as slides])
  (:gen-class))

(defn with-next-prev 
  [n p m]
  (assoc m :next-slide n :previous-slide p))


(def db 
  {:first-slide :introduction
   :slide-order [:introduction :who-am-i :i-started :so-what-is-programming :turing-machines 
                 :lambda-calculus :lambda-examples #_:lambda-examples-2 :you-dont-really-need-all-this  
                 :what-is-FP :difference-between-FP-and-OOP :in-the-end-we-have-pizza 
                 :in-the-end-we-have-pizza-2 :key-functional-concepts 
                 :difference-between-FP-and-OOP-2 :benefits-of-both :multi-paradigms
                 :what-do-I-actually-do? :what-is-clojure :lisp-cycles
                 :full-stack-clojure :what-does-clojure-look-like? :in-fact-this-is-clojure 
                 :repl-rocks :how-would-we-write-web-in-clojure? 
                 :why-clojure?
                 :use-functional-patterns-elsewhere
                 :get-into-clojure :who-uses-clojure
                 :thanks]
   :slides {:introduction slides/introduction
            :who-am-i slides/who-am-i
            :i-started slides/i-started
            :so-what-is-programming slides/so-what-is-programming
            :turing-machines slides/turing-machines            
            :lambda-calculus slides/lambda-calculus
            :lambda-examples slides/lambda-examples
            :lambda-examples-2 slides/lambda-examples-2
            :you-dont-really-need-all-this slides/you-dont-really-need-all-this
            :what-is-FP slides/what-is-FP
            :key-functional-concepts slides/key-functional-concepts
            :difference-between-FP-and-OOP slides/difference-between-FP-and-OOP
            :in-the-end-we-have-pizza slides/in-the-end-we-have-pizza
            :in-the-end-we-have-pizza-2 slides/in-the-end-we-have-pizza-2
            :difference-between-FP-and-OOP-2 slides/difference-between-FP-and-OOP-2
            :benefits-of-both slides/benefits-of-both
            :multi-paradigms slides/multi-paradigms
            :what-do-I-actually-do? slides/what-do-I-actually-do?
            :what-is-clojure slides/what-is-clojure
            :lisp-cycles slides/lisp-cycles
            :full-stack-clojure slides/full-stack-clojure
            :in-fact-this-is-clojure slides/in-fact-this-is-clojure
            :what-does-clojure-look-like? slides/what-does-clojure-look-like?
            :repl-rocks slides/repl-rocks
            :how-would-we-write-web-in-clojure? slides/how-would-we-write-web-in-clojure?
            :why-clojure? slides/why-clojure?
            :who-uses-clojure slides/who-uses-clojure
            :use-functional-patterns-elsewhere slides/use-functional-patterns-elsewhere
            :get-into-clojure slides/get-into-clojure
            :thanks slides/thanks}})

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
