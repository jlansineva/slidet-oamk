(defproject slidet-oamk "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "EPL-2.0 OR GPL-2.0-or-later WITH Classpath-exception-2.0"
            :url "https://www.eclipse.org/legal/epl-2.0/"}
  :dependencies [[org.clojure/clojure "1.10.3"]
                 [org.clojure/clojurescript "1.11.4"]
                 ;[ring "1.9.5"]
                 [metosin/reitit "0.5.13"]
                 [metosin/muuntaja "0.6.8"]
                 ;[org.postgresql/postgresql "42.2.23"]
                 ;[com.mchange/c3p0 "0.9.5.2"] 
                 ;[webjure/jeesql "0.4.7"]
                 [hiccup "1.0.5"]
                 [http-kit "2.5.3"] 
                 [reagent "1.1.0"]
                 [cljsjs/react "17.0.2-0"]
                 [cljsjs/react-dom "17.0.2-0"]
                 [cljs-ajax "0.8.4"]
                 ;[com.taoensso/timbre "5.1.2"]
                 ;[com.fzakaria/slf4j-timbre "0.3.21"]
                 ;[org.slf4j/slf4j-api "1.7.30"]
                 ]
  :main ^:skip-aot slidet-oamk.core
  :target-path "target/%s"
  :source-paths ["src/clj" "src/cljc" "src/cljs"]
  :profiles {:uberjar {:aot :all}
             :dev {:resource-paths ["target"]
                   :dependencies [[cider/piggieback "0.5.3"]
                                  [com.bhauman/figwheel-main "0.2.16"]]
                   :repl-options {:nrepl-middleware [cider.piggieback/wrap-cljs-repl]}
                   :clean-targets ^{:protect false} ["target"]}})

