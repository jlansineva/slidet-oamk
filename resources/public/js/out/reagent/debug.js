// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__14433__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__14433 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14434__i = 0, G__14434__a = new Array(arguments.length -  0);
while (G__14434__i < G__14434__a.length) {G__14434__a[G__14434__i] = arguments[G__14434__i + 0]; ++G__14434__i;}
  args = new cljs.core.IndexedSeq(G__14434__a,0,null);
} 
return G__14433__delegate.call(this,args);};
G__14433.cljs$lang$maxFixedArity = 0;
G__14433.cljs$lang$applyTo = (function (arglist__14435){
var args = cljs.core.seq(arglist__14435);
return G__14433__delegate(args);
});
G__14433.cljs$core$IFn$_invoke$arity$variadic = G__14433__delegate;
return G__14433;
})()
);

(o.error = (function() { 
var G__14436__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__14436 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14437__i = 0, G__14437__a = new Array(arguments.length -  0);
while (G__14437__i < G__14437__a.length) {G__14437__a[G__14437__i] = arguments[G__14437__i + 0]; ++G__14437__i;}
  args = new cljs.core.IndexedSeq(G__14437__a,0,null);
} 
return G__14436__delegate.call(this,args);};
G__14436.cljs$lang$maxFixedArity = 0;
G__14436.cljs$lang$applyTo = (function (arglist__14438){
var args = cljs.core.seq(arglist__14438);
return G__14436__delegate(args);
});
G__14436.cljs$core$IFn$_invoke$arity$variadic = G__14436__delegate;
return G__14436;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=debug.js.map
