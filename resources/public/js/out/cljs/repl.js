// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__16418){
var map__16419 = p__16418;
var map__16419__$1 = cljs.core.__destructure_map.call(null,map__16419);
var m = map__16419__$1;
var n = cljs.core.get.call(null,map__16419__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__16419__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__16420_16448 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__16421_16449 = null;
var count__16422_16450 = (0);
var i__16423_16451 = (0);
while(true){
if((i__16423_16451 < count__16422_16450)){
var f_16452 = cljs.core._nth.call(null,chunk__16421_16449,i__16423_16451);
cljs.core.println.call(null,"  ",f_16452);


var G__16453 = seq__16420_16448;
var G__16454 = chunk__16421_16449;
var G__16455 = count__16422_16450;
var G__16456 = (i__16423_16451 + (1));
seq__16420_16448 = G__16453;
chunk__16421_16449 = G__16454;
count__16422_16450 = G__16455;
i__16423_16451 = G__16456;
continue;
} else {
var temp__5753__auto___16457 = cljs.core.seq.call(null,seq__16420_16448);
if(temp__5753__auto___16457){
var seq__16420_16458__$1 = temp__5753__auto___16457;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16420_16458__$1)){
var c__4679__auto___16459 = cljs.core.chunk_first.call(null,seq__16420_16458__$1);
var G__16460 = cljs.core.chunk_rest.call(null,seq__16420_16458__$1);
var G__16461 = c__4679__auto___16459;
var G__16462 = cljs.core.count.call(null,c__4679__auto___16459);
var G__16463 = (0);
seq__16420_16448 = G__16460;
chunk__16421_16449 = G__16461;
count__16422_16450 = G__16462;
i__16423_16451 = G__16463;
continue;
} else {
var f_16464 = cljs.core.first.call(null,seq__16420_16458__$1);
cljs.core.println.call(null,"  ",f_16464);


var G__16465 = cljs.core.next.call(null,seq__16420_16458__$1);
var G__16466 = null;
var G__16467 = (0);
var G__16468 = (0);
seq__16420_16448 = G__16465;
chunk__16421_16449 = G__16466;
count__16422_16450 = G__16467;
i__16423_16451 = G__16468;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_16469 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_16469);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_16469)))?cljs.core.second.call(null,arglists_16469):arglists_16469));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__16424_16470 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__16425_16471 = null;
var count__16426_16472 = (0);
var i__16427_16473 = (0);
while(true){
if((i__16427_16473 < count__16426_16472)){
var vec__16436_16474 = cljs.core._nth.call(null,chunk__16425_16471,i__16427_16473);
var name_16475 = cljs.core.nth.call(null,vec__16436_16474,(0),null);
var map__16439_16476 = cljs.core.nth.call(null,vec__16436_16474,(1),null);
var map__16439_16477__$1 = cljs.core.__destructure_map.call(null,map__16439_16476);
var doc_16478 = cljs.core.get.call(null,map__16439_16477__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_16479 = cljs.core.get.call(null,map__16439_16477__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_16475);

cljs.core.println.call(null," ",arglists_16479);

if(cljs.core.truth_(doc_16478)){
cljs.core.println.call(null," ",doc_16478);
} else {
}


var G__16480 = seq__16424_16470;
var G__16481 = chunk__16425_16471;
var G__16482 = count__16426_16472;
var G__16483 = (i__16427_16473 + (1));
seq__16424_16470 = G__16480;
chunk__16425_16471 = G__16481;
count__16426_16472 = G__16482;
i__16427_16473 = G__16483;
continue;
} else {
var temp__5753__auto___16484 = cljs.core.seq.call(null,seq__16424_16470);
if(temp__5753__auto___16484){
var seq__16424_16485__$1 = temp__5753__auto___16484;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16424_16485__$1)){
var c__4679__auto___16486 = cljs.core.chunk_first.call(null,seq__16424_16485__$1);
var G__16487 = cljs.core.chunk_rest.call(null,seq__16424_16485__$1);
var G__16488 = c__4679__auto___16486;
var G__16489 = cljs.core.count.call(null,c__4679__auto___16486);
var G__16490 = (0);
seq__16424_16470 = G__16487;
chunk__16425_16471 = G__16488;
count__16426_16472 = G__16489;
i__16427_16473 = G__16490;
continue;
} else {
var vec__16440_16491 = cljs.core.first.call(null,seq__16424_16485__$1);
var name_16492 = cljs.core.nth.call(null,vec__16440_16491,(0),null);
var map__16443_16493 = cljs.core.nth.call(null,vec__16440_16491,(1),null);
var map__16443_16494__$1 = cljs.core.__destructure_map.call(null,map__16443_16493);
var doc_16495 = cljs.core.get.call(null,map__16443_16494__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_16496 = cljs.core.get.call(null,map__16443_16494__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_16492);

cljs.core.println.call(null," ",arglists_16496);

if(cljs.core.truth_(doc_16495)){
cljs.core.println.call(null," ",doc_16495);
} else {
}


var G__16497 = cljs.core.next.call(null,seq__16424_16485__$1);
var G__16498 = null;
var G__16499 = (0);
var G__16500 = (0);
seq__16424_16470 = G__16497;
chunk__16425_16471 = G__16498;
count__16426_16472 = G__16499;
i__16427_16473 = G__16500;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.call(null,"Spec");

var seq__16444 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__16445 = null;
var count__16446 = (0);
var i__16447 = (0);
while(true){
if((i__16447 < count__16446)){
var role = cljs.core._nth.call(null,chunk__16445,i__16447);
var temp__5753__auto___16501__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5753__auto___16501__$1)){
var spec_16502 = temp__5753__auto___16501__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_16502));
} else {
}


var G__16503 = seq__16444;
var G__16504 = chunk__16445;
var G__16505 = count__16446;
var G__16506 = (i__16447 + (1));
seq__16444 = G__16503;
chunk__16445 = G__16504;
count__16446 = G__16505;
i__16447 = G__16506;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq.call(null,seq__16444);
if(temp__5753__auto____$1){
var seq__16444__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16444__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__16444__$1);
var G__16507 = cljs.core.chunk_rest.call(null,seq__16444__$1);
var G__16508 = c__4679__auto__;
var G__16509 = cljs.core.count.call(null,c__4679__auto__);
var G__16510 = (0);
seq__16444 = G__16507;
chunk__16445 = G__16508;
count__16446 = G__16509;
i__16447 = G__16510;
continue;
} else {
var role = cljs.core.first.call(null,seq__16444__$1);
var temp__5753__auto___16511__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5753__auto___16511__$2)){
var spec_16512 = temp__5753__auto___16511__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_16512));
} else {
}


var G__16513 = cljs.core.next.call(null,seq__16444__$1);
var G__16514 = null;
var G__16515 = (0);
var G__16516 = (0);
seq__16444 = G__16513;
chunk__16445 = G__16514;
count__16446 = G__16515;
i__16447 = G__16516;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__16517 = cljs.core.conj.call(null,via,t);
var G__16518 = cljs.core.ex_cause.call(null,t);
via = G__16517;
t = G__16518;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__16521 = datafied_throwable;
var map__16521__$1 = cljs.core.__destructure_map.call(null,map__16521);
var via = cljs.core.get.call(null,map__16521__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__16521__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__16521__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__16522 = cljs.core.last.call(null,via);
var map__16522__$1 = cljs.core.__destructure_map.call(null,map__16522);
var type = cljs.core.get.call(null,map__16522__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__16522__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__16522__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__16523 = data;
var map__16523__$1 = cljs.core.__destructure_map.call(null,map__16523);
var problems = cljs.core.get.call(null,map__16523__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__16523__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__16523__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__16524 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__16524__$1 = cljs.core.__destructure_map.call(null,map__16524);
var top_data = map__16524__$1;
var source = cljs.core.get.call(null,map__16524__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__16525 = phase;
var G__16525__$1 = (((G__16525 instanceof cljs.core.Keyword))?G__16525.fqn:null);
switch (G__16525__$1) {
case "read-source":
var map__16526 = data;
var map__16526__$1 = cljs.core.__destructure_map.call(null,map__16526);
var line = cljs.core.get.call(null,map__16526__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__16526__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__16527 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__16527__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__16527,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__16527);
var G__16527__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__16527__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__16527__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__16527__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__16527__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__16528 = top_data;
var G__16528__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__16528,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__16528);
var G__16528__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__16528__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__16528__$1);
var G__16528__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__16528__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__16528__$2);
var G__16528__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__16528__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__16528__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__16528__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__16528__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__16529 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__16529,(0),null);
var method = cljs.core.nth.call(null,vec__16529,(1),null);
var file = cljs.core.nth.call(null,vec__16529,(2),null);
var line = cljs.core.nth.call(null,vec__16529,(3),null);
var G__16532 = top_data;
var G__16532__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__16532,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__16532);
var G__16532__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__16532__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__16532__$1);
var G__16532__$3 = (cljs.core.truth_((function (){var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
})())?cljs.core.assoc.call(null,G__16532__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__16532__$2);
var G__16532__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__16532__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__16532__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__16532__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__16532__$4;
}

break;
case "execution":
var vec__16533 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__16533,(0),null);
var method = cljs.core.nth.call(null,vec__16533,(1),null);
var file = cljs.core.nth.call(null,vec__16533,(2),null);
var line = cljs.core.nth.call(null,vec__16533,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__16520_SHARP_){
var or__4253__auto__ = (p1__16520_SHARP_ == null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__16520_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return line;
}
})();
var G__16536 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__16536__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__16536,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__16536);
var G__16536__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__16536__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__16536__$1);
var G__16536__$3 = (cljs.core.truth_((function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
}
})())?cljs.core.assoc.call(null,G__16536__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__16536__$2);
var G__16536__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__16536__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__16536__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__16536__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__16536__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16525__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__16540){
var map__16541 = p__16540;
var map__16541__$1 = cljs.core.__destructure_map.call(null,map__16541);
var triage_data = map__16541__$1;
var phase = cljs.core.get.call(null,map__16541__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__16541__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__16541__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__16541__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__16541__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__16541__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__16541__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__16541__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = source;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = line;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4253__auto__ = class$;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__16542 = phase;
var G__16542__$1 = (((G__16542 instanceof cljs.core.Keyword))?G__16542.fqn:null);
switch (G__16542__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__16543_16552 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__16544_16553 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__16545_16554 = true;
var _STAR_print_fn_STAR__temp_val__16546_16555 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__16545_16554);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__16546_16555);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__16538_SHARP_){
return cljs.core.dissoc.call(null,p1__16538_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__16544_16553);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__16543_16552);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__16547_16556 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__16548_16557 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__16549_16558 = true;
var _STAR_print_fn_STAR__temp_val__16550_16559 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__16549_16558);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__16550_16559);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__16539_SHARP_){
return cljs.core.dissoc.call(null,p1__16539_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__16548_16557);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__16547_16556);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16542__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
