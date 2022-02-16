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

(defn with-next-prev 
  [n p m]
  (assoc m :next-slide n :previous-slide p))

(def introduction
  (with-next-prev 
    :who-am-i
     nil
    {:content [[:heading "Functional Programmming is Awesome"] 
               [:list 
                "Some background" 
                "Some practice" 
                "Some tips"]]}))

(def who-am-i
  (with-next-prev
    :i-started
    :introduction
    {:content [[:heading "Who am I?"]
               [:list "Jukka Länsineva"
                "Been at Solita for ~3 years"
                "In the industry for some 6+ years now"
                "Bachelor of Science from Oulu University"]
               [:expanding-list "Full-stack Clojurist"
                "Also some Java, JS, what have you..."
                "...but mostly Clojure"]]}))

(def i-started
  (with-next-prev
    :so-what-is-programming
    :who-am-i
    {:options {:background {:image "ilikecats.jpeg"}}
     :content [[:heading "Games are fun"]
               [:list "Like many, got into programming by writing games"
                "...so like many, got started with imperative programming"
                "C / C++ / C# and the like"
                "Got into FP stuff via web stuff"]]}))

(def so-what-is-programming
  (with-next-prev
    :turing-machines
    :i-started
    {:content [[:heading "So what's programming?"]
               [:list "Computation to achieve some result"
                "Two ways about it"
                "Imperative & Declarative"
                "OOP falls into imperative, FP into declarative"
                "Based on models of Turing machines and Lambda Calculus respectively"]]}))

(def turing-machines
  (with-next-prev 
    :lambda-calculus
    :so-what-is-programming
    {:content [[:heading "Turing machines?"]
               [:list 
                "Model of computation that operates on a state"
                "The grandfather of imperative systems"
                "Can be used to model a CPU, languages, algorithms... "
                "Turing completeness in programming languages means the language can simulate a Turing machine"]]}))

(def lambda-calculus
  (with-next-prev 
    :you-dont-really-need-all-this
    :turing-machines
    {:content [[:heading "Lambda calculus"]
               [:expanding-list 
                "A notation system for computation made by Alonzo Church"
                "It has three things in it!"
                "Symbols, that present values"
                "Abstractions, that present function definitions"
                "Applications, that present ... well, applying a function to an argument"
                "And it can do EVERYTHING"
                "...it also equivalent with Turing machines"
                "So it does everything"]]}))

(def you-dont-really-need-all-this
  (with-next-prev
    :what-is-FP
    :lambda-calculus
    {:content [[:heading "It's fine!"]
               [:list "You don't really need to do this stuff in your daily life!"
                "It's good to know these things are based on concrete models"
                "The takeaway is that these models are equivalent"]]}))

(def what-is-FP
  (with-next-prev 
    :difference-between-FP-and-OOP
    :you-dont-really-need-all-this
    {:content [[:heading "So what is FP?"] 
               [:expanding-list 
                "FP is basically implementation of Lambda Calculus, just with more stuff defined" 
                "...but all programming languages have functions?" 
                "In FP it's not functions as in programming, but functions as in maths"
                "So what does it mean?"]]}))

(def difference-between-FP-and-OOP
  (with-next-prev 
    :difference-between-FP-and-OOP
    :what-is-FP
    {:content [[:heading ""]
               [:section
                [:expanding-list
                 "Functional programming"
                 "The what"
                 "I want a Mexicana"
                 "Data goes through a series of transformative operations"
                 "dough -> add-pepperoni -> add-jalapenos ... -> pizza"
                 "... we still have the dough"]
                [:expanding-list
                 "Imperative programming"
                 "The how"
                 "I want a pizza, put on dough pepperoni, jalapenos, pineapple and mexicana sauce"
                 "Data is operated on by code"
                 "dough <- add-pepperoni <- add-jalapenos ... = pizza"
                 "dough becomes a pizza"]]]}))

(def difference-between-FP-and-OOP-2
  (with-next-prev
    nil
    :difference-between-FP-and-OOP
    {:content [[:heading "2"]
               [:list "But wait there's more!"]]}))

(def what-do-I-actually-do?
  {:content [[:heading "So what do I actually do?"]
             [:expanding-list "I do Clojure"
              "In Solita, our FP language of choice"
              "You might've actually seen it on our career pages!"
              "I'm in a full-stack Clojure project called Harja"]]})

(def db 
  {:first-slide :introduction
   :slide-order [:introduction :who-am-i :i-started :so-what-is-programming :turing-machines 
                 :lambda-calculus :you-dont-really-need-all-this :what-is-FP 
                 :difference-between-FP-and-OOP :difference-between-FP-and-OOP-2
                 :what-do-I-actually-do?]
   :slides {:introduction introduction
            :who-am-i who-am-i
            :i-started i-started
            :so-what-is-programming so-what-is-programming
            :turing-machines turing-machines            
            :lambda-calculus lambda-calculus
            :you-dont-really-need-all-this you-dont-really-need-all-this
            :what-is-FP what-is-FP
            :difference-between-FP-and-OOP difference-between-FP-and-OOP
            :difference-between-FP-and-OOP-2 difference-between-FP-and-OOP-2
            
            :what-do-I-actually-do? what-do-I-actually-do?}})

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
