// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('figwheel.core');
goog.require('cljs.core');
goog.require('figwheel.tools.heads_up');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('goog.log');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('goog.debug.Console');
goog.require('goog.async.Deferred');
goog.require('goog.Promise');
goog.require('goog.events.EventTarget');
goog.require('goog.events.Event');
goog.require('goog.object');
goog.scope(function(){
figwheel.core.goog$module$goog$object = goog.module.get('goog.object');
});
figwheel.core.distinct_by = (function figwheel$core$distinct_by(f,coll){
var seen = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);
return cljs.core.filter.call(null,(function (p1__20010_SHARP_){
var k = f.call(null,p1__20010_SHARP_);
var res = cljs.core.not.call(null,cljs.core.deref.call(null,seen).call(null,k));
cljs.core._vreset_BANG_.call(null,seen,cljs.core.conj.call(null,cljs.core._deref.call(null,seen),k));

return res;
}),coll);
});
figwheel.core.map_keys = (function figwheel$core$map_keys(f,coll){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__20011){
var vec__20012 = p__20011;
var k = cljs.core.nth.call(null,vec__20012,(0),null);
var v = cljs.core.nth.call(null,vec__20012,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null,k),v], null);
})),coll);
});
figwheel.core._STAR_inline_code_message_max_column_STAR_ = (80);
figwheel.core.wrap_line = (function figwheel$core$wrap_line(text,size){
return cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,[".{1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"}\\s|.{1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"}"].join('')),[clojure.string.replace.call(null,text,/\n/," ")," "].join(''));
});
figwheel.core.cross_format = (function figwheel$core$cross_format(var_args){
var args__4870__auto__ = [];
var len__4864__auto___20016 = arguments.length;
var i__4865__auto___20017 = (0);
while(true){
if((i__4865__auto___20017 < len__4864__auto___20016)){
args__4870__auto__.push((arguments[i__4865__auto___20017]));

var G__20018 = (i__4865__auto___20017 + (1));
i__4865__auto___20017 = G__20018;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return figwheel.core.cross_format.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(figwheel.core.cross_format.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,goog.string.format,args);
}));

(figwheel.core.cross_format.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.core.cross_format.cljs$lang$applyTo = (function (seq20015){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20015));
}));

figwheel.core.pointer_message_lines = (function figwheel$core$pointer_message_lines(p__20021){
var map__20022 = p__20021;
var map__20022__$1 = cljs.core.__destructure_map.call(null,map__20022);
var message = cljs.core.get.call(null,map__20022__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var column = cljs.core.get.call(null,map__20022__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(((column + cljs.core.count.call(null,message)) > figwheel.core._STAR_inline_code_message_max_column_STAR_)){
return cljs.core.mapv.call(null,(function (p1__20020_SHARP_){
return cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),null], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20020_SHARP_], null)));
}),cljs.core.cons.call(null,figwheel.core.cross_format.call(null,(function (){var col = (column - (1));
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((col === (0)))?null:col)),"s%s"].join('');
})(),"","^---"),cljs.core.map.call(null,(function (p1__20019_SHARP_){
return figwheel.core.cross_format.call(null,["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.core._STAR_inline_code_message_max_column_STAR_),"s"].join(''),p1__20019_SHARP_);
}),figwheel.core.wrap_line.call(null,message,(figwheel.core._STAR_inline_code_message_max_column_STAR_ - (10))))));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),null,figwheel.core.cross_format.call(null,(function (){var col = (column - (1));
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((col === (0)))?null:col)),"s%s %s"].join('');
})(),"","^---",message)], null)], null);
}
});
figwheel.core.inline_message_display_data = (function figwheel$core$inline_message_display_data(p__20024){
var map__20025 = p__20024;
var map__20025__$1 = cljs.core.__destructure_map.call(null,map__20025);
var message_data = map__20025__$1;
var message = cljs.core.get.call(null,map__20025__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var line = cljs.core.get.call(null,map__20025__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__20025__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var file_excerpt = cljs.core.get.call(null,map__20025__$1,new cljs.core.Keyword(null,"file-excerpt","file-excerpt",-1132330744));
if(cljs.core.truth_(file_excerpt)){
var map__20026 = file_excerpt;
var map__20026__$1 = cljs.core.__destructure_map.call(null,map__20026);
var start_line = cljs.core.get.call(null,map__20026__$1,new cljs.core.Keyword(null,"start-line","start-line",-41746654));
var path = cljs.core.get.call(null,map__20026__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var excerpt = cljs.core.get.call(null,map__20026__$1,new cljs.core.Keyword(null,"excerpt","excerpt",219850763));
var lines = cljs.core.map_indexed.call(null,(function (i,l){
var ln = (i + start_line);
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[((cljs.core._EQ_.call(null,line,ln))?new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357):new cljs.core.Keyword(null,"code-line","code-line",-2138627853)),ln,l],null));
}),clojure.string.split_lines.call(null,excerpt));
var vec__20027 = cljs.core.split_with.call(null,(function (p1__20023_SHARP_){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),cljs.core.first.call(null,p1__20023_SHARP_));
}),lines);
var begin = cljs.core.nth.call(null,vec__20027,(0),null);
var end = cljs.core.nth.call(null,vec__20027,(1),null);
return cljs.core.concat.call(null,cljs.core.take_last.call(null,(5),begin),cljs.core.take.call(null,(1),end),figwheel.core.pointer_message_lines.call(null,message_data),cljs.core.take.call(null,(5),cljs.core.rest.call(null,end)));
} else {
return null;
}
});
figwheel.core.file_line_column = (function figwheel$core$file_line_column(p__20030){
var map__20031 = p__20030;
var map__20031__$1 = cljs.core.__destructure_map.call(null,map__20031);
var file = cljs.core.get.call(null,map__20031__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__20031__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__20031__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__20032 = "";
var G__20032__$1 = (cljs.core.truth_(file)?[G__20032,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__20032);
var G__20032__$2 = (cljs.core.truth_(line)?[G__20032__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__20032__$1);
if(cljs.core.truth_((function (){var and__4251__auto__ = line;
if(cljs.core.truth_(and__4251__auto__)){
return column;
} else {
return and__4251__auto__;
}
})())){
return [G__20032__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__20032__$2;
}
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.logger !== 'undefined')){
} else {
figwheel.core.logger = goog.log.getLogger.call(null,"Figwheel");
}

figwheel.core.glog_info = (function figwheel$core$glog_info(log,msg){
return goog.log.info.call(null,log,msg);
});

figwheel.core.glog_warning = (function figwheel$core$glog_warning(log,msg){
return goog.log.warning.call(null,log,msg);
});

figwheel.core.glog_error = (function figwheel$core$glog_error(log,msg){
return goog.log.error.call(null,log,msg);
});

figwheel.core.console_logging = (function figwheel$core$console_logging(){
if(cljs.core.truth_(figwheel.core.goog$module$goog$object.get.call(null,goog.debug.Console,"instance"))){
} else {
var c_20090 = (new goog.debug.Console());
var G__20039_20091 = c_20090.getFormatter();
figwheel.core.goog$module$goog$object.set.call(null,G__20039_20091,"showAbsoluteTime",false);

figwheel.core.goog$module$goog$object.set.call(null,G__20039_20091,"showRelativeTime",false);


figwheel.core.goog$module$goog$object.set.call(null,goog.debug.Console,"instance",c_20090);

}

var temp__5753__auto__ = figwheel.core.goog$module$goog$object.get.call(null,goog.debug.Console,"instance");
if(cljs.core.truth_(temp__5753__auto__)){
var console_instance = temp__5753__auto__;
console_instance.setCapturing(true);

return true;
} else {
return null;
}
});
goog.exportSymbol('figwheel.core.console_logging', figwheel.core.console_logging);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.log_console !== 'undefined')){
} else {
figwheel.core.log_console = figwheel.core.console_logging.call(null);
}

figwheel.core.event_target = (((typeof document !== 'undefined'))?document:(new goog.events.EventTarget()));
goog.exportSymbol('figwheel.core.event_target', figwheel.core.event_target);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.listener_key_map !== 'undefined')){
} else {
figwheel.core.listener_key_map = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}

figwheel.core.unlisten = (function figwheel$core$unlisten(ky,event_name){
var temp__5753__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.core.listener_key_map),ky);
if(cljs.core.truth_(temp__5753__auto__)){
var f = temp__5753__auto__;
return figwheel.core.event_target.removeEventListener(cljs.core.name.call(null,event_name),f);
} else {
return null;
}
});

figwheel.core.listen = (function figwheel$core$listen(ky,event_name,f){
figwheel.core.unlisten.call(null,ky,event_name);

figwheel.core.event_target.addEventListener(cljs.core.name.call(null,event_name),f);

return cljs.core.swap_BANG_.call(null,figwheel.core.listener_key_map,cljs.core.assoc,ky,f);
});

figwheel.core.dispatch_event = (function figwheel$core$dispatch_event(event_name,data){
return figwheel.core.event_target.dispatchEvent((function (){var G__20040 = (((figwheel.core.event_target instanceof goog.events.EventTarget))?(new goog.events.Event(cljs.core.name.call(null,event_name),figwheel.core.event_target)):(new Event(cljs.core.name.call(null,event_name),figwheel.core.event_target)));
figwheel.core.goog$module$goog$object.add.call(null,G__20040,"data",(function (){var or__4253__auto__ = data;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());

return G__20040;
})());
});

figwheel.core.event_data = (function figwheel$core$event_data(e){
return figwheel.core.goog$module$goog$object.get.call(null,(function (){var temp__5751__auto__ = e.event_;
if(cljs.core.truth_(temp__5751__auto__)){
var e__$1 = temp__5751__auto__;
return e__$1;
} else {
return e;
}
})(),"data");
});


/**
 * @define {boolean}
 */
figwheel.core.load_warninged_code = goog.define("figwheel.core.load_warninged_code",false);


/**
 * @define {boolean}
 */
figwheel.core.heads_up_display = goog.define("figwheel.core.heads_up_display",true);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.state !== 'undefined')){
} else {
figwheel.core.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),cljs.core.PersistentArrayMap.EMPTY], null));
}

figwheel.core.heads_up_display_QMARK_ = (function figwheel$core$heads_up_display_QMARK_(){
var and__4251__auto__ = figwheel.core.heads_up_display;
if(cljs.core.truth_(and__4251__auto__)){
return (!((goog.global.document == null)));
} else {
return and__4251__auto__;
}
});

var last_reload_timestamp_20092 = cljs.core.atom.call(null,(0));
var promise_chain_20093 = (new goog.Promise((function (r,_){
return r.call(null,true);
})));
figwheel.core.render_watcher = (function figwheel$core$render_watcher(_,___$1,o,n){
if(cljs.core.truth_(figwheel.core.heads_up_display_QMARK_.call(null))){
var temp__5751__auto__ = (function (){var temp__5753__auto__ = cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null));
if(cljs.core.truth_(temp__5753__auto__)){
var ts = temp__5753__auto__;
var and__4251__auto__ = (cljs.core.deref.call(null,last_reload_timestamp_20092) < ts);
if(and__4251__auto__){
return ts;
} else {
return and__4251__auto__;
}
} else {
return null;
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var ts = temp__5751__auto__;
var warnings = cljs.core.not_empty.call(null,cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null)));
var exception = cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"exception","exception",-335277064)], null));
cljs.core.reset_BANG_.call(null,last_reload_timestamp_20092,ts);

if(cljs.core.truth_(warnings)){
return promise_chain_20093.then((function (){
var warn = cljs.core.first.call(null,warnings);
var _STAR_inline_code_message_max_column_STAR__orig_val__20041 = figwheel.core._STAR_inline_code_message_max_column_STAR_;
var _STAR_inline_code_message_max_column_STAR__temp_val__20042 = (132);
(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__temp_val__20042);

try{return figwheel.tools.heads_up.display_warning.call(null,cljs.core.assoc.call(null,warn,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185),figwheel.core.inline_message_display_data.call(null,warn))).then((function (){
var seq__20043 = cljs.core.seq.call(null,cljs.core.rest.call(null,warnings));
var chunk__20044 = null;
var count__20045 = (0);
var i__20046 = (0);
while(true){
if((i__20046 < count__20045)){
var w = cljs.core._nth.call(null,chunk__20044,i__20046);
figwheel.tools.heads_up.append_warning_message.call(null,w);


var G__20094 = seq__20043;
var G__20095 = chunk__20044;
var G__20096 = count__20045;
var G__20097 = (i__20046 + (1));
seq__20043 = G__20094;
chunk__20044 = G__20095;
count__20045 = G__20096;
i__20046 = G__20097;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__20043);
if(temp__5753__auto__){
var seq__20043__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20043__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__20043__$1);
var G__20098 = cljs.core.chunk_rest.call(null,seq__20043__$1);
var G__20099 = c__4679__auto__;
var G__20100 = cljs.core.count.call(null,c__4679__auto__);
var G__20101 = (0);
seq__20043 = G__20098;
chunk__20044 = G__20099;
count__20045 = G__20100;
i__20046 = G__20101;
continue;
} else {
var w = cljs.core.first.call(null,seq__20043__$1);
figwheel.tools.heads_up.append_warning_message.call(null,w);


var G__20102 = cljs.core.next.call(null,seq__20043__$1);
var G__20103 = null;
var G__20104 = (0);
var G__20105 = (0);
seq__20043 = G__20102;
chunk__20044 = G__20103;
count__20045 = G__20104;
i__20046 = G__20105;
continue;
}
} else {
return null;
}
}
break;
}
}));
}finally {(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__orig_val__20041);
}}));
} else {
if(cljs.core.truth_(exception)){
return promise_chain_20093.then((function (){
var _STAR_inline_code_message_max_column_STAR__orig_val__20047 = figwheel.core._STAR_inline_code_message_max_column_STAR_;
var _STAR_inline_code_message_max_column_STAR__temp_val__20048 = (132);
(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__temp_val__20048);

try{return figwheel.tools.heads_up.display_exception.call(null,cljs.core.assoc.call(null,exception,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185),figwheel.core.inline_message_display_data.call(null,exception)));
}finally {(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__orig_val__20047);
}}));
} else {
return promise_chain_20093.then((function (){
return figwheel.tools.heads_up.flash_loaded.call(null);
}));

}
}
} else {
return null;
}
} else {
return null;
}
});

cljs.core.add_watch.call(null,figwheel.core.state,new cljs.core.Keyword("figwheel.core","render-watcher","figwheel.core/render-watcher",2046135910),figwheel.core.render_watcher);

figwheel.core.immutable_ns_QMARK_ = (function figwheel$core$immutable_ns_QMARK_(ns){
var ns__$1 = cljs.core.name.call(null,ns);
var or__4253__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, ["cljs.nodejs",null,"goog",null,"figwheel.connect",null,"cljs.core",null,"figwheel.preload",null], null), null).call(null,ns__$1);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return ((goog.string.startsWith("clojure.",ns__$1)) || (goog.string.startsWith("goog.",ns__$1)));
}
});

figwheel.core.ns_exists_QMARK_ = (function figwheel$core$ns_exists_QMARK_(ns){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,figwheel.core.goog$module$goog$object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,ns),".")) == null)));
});

figwheel.core.reload_ns_QMARK_ = (function figwheel$core$reload_ns_QMARK_(namespace){
var meta_data = cljs.core.meta.call(null,namespace);
var and__4251__auto__ = cljs.core.not.call(null,figwheel.core.immutable_ns_QMARK_.call(null,namespace));
if(and__4251__auto__){
var and__4251__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data));
if(and__4251__auto____$1){
var or__4253__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
return figwheel.core.ns_exists_QMARK_.call(null,namespace);
}
}
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
});

figwheel.core.call_hooks = (function figwheel$core$call_hooks(var_args){
var args__4870__auto__ = [];
var len__4864__auto___20106 = arguments.length;
var i__4865__auto___20107 = (0);
while(true){
if((i__4865__auto___20107 < len__4864__auto___20106)){
args__4870__auto__.push((arguments[i__4865__auto___20107]));

var G__20108 = (i__4865__auto___20107 + (1));
i__4865__auto___20107 = G__20108;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return figwheel.core.call_hooks.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(figwheel.core.call_hooks.cljs$core$IFn$_invoke$arity$variadic = (function (hook_key,args){
var hooks = cljs.core.keep.call(null,(function (p__20051){
var vec__20052 = p__20051;
var n = cljs.core.nth.call(null,vec__20052,(0),null);
var mdata = cljs.core.nth.call(null,vec__20052,(1),null);
var temp__5753__auto__ = cljs.core.get_in.call(null,mdata,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),hook_key], null));
if(cljs.core.truth_(temp__5753__auto__)){
var f = temp__5753__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,f], null);
} else {
return null;
}
}),new cljs.core.Keyword("figwheel.core","metadata","figwheel.core/metadata",-720139885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,figwheel.core.state)));
var seq__20055 = cljs.core.seq.call(null,hooks);
var chunk__20056 = null;
var count__20057 = (0);
var i__20058 = (0);
while(true){
if((i__20058 < count__20057)){
var vec__20067 = cljs.core._nth.call(null,chunk__20056,i__20058);
var n = cljs.core.nth.call(null,vec__20067,(0),null);
var f = cljs.core.nth.call(null,vec__20067,(1),null);
var temp__5751__auto___20109 = cljs.core.reduce.call(null,((function (seq__20055,chunk__20056,count__20057,i__20058,vec__20067,n,f,hooks){
return (function (p1__20033_SHARP_,p2__20034_SHARP_){
if(cljs.core.truth_(p1__20033_SHARP_)){
return figwheel.core.goog$module$goog$object.get.call(null,p1__20033_SHARP_,p2__20034_SHARP_);
} else {
return null;
}
});})(seq__20055,chunk__20056,count__20057,i__20058,vec__20067,n,f,hooks))
,goog.global,cljs.core.map.call(null,cljs.core.str,cljs.core.concat.call(null,clojure.string.split.call(null,n,/\./),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))));
if(cljs.core.truth_(temp__5751__auto___20109)){
var hook_20110 = temp__5751__auto___20109;
figwheel.core.glog_info.call(null,figwheel.core.logger,["Calling ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

try{cljs.core.apply.call(null,hook_20110,args);
}catch (e20070){if((e20070 instanceof Error)){
var e_20111 = e20070;
figwheel.core.glog_error.call(null,figwheel.core.logger,e_20111);
} else {
throw e20070;

}
}} else {
figwheel.core.glog_warning.call(null,figwheel.core.logger,["Unable to find ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}


var G__20112 = seq__20055;
var G__20113 = chunk__20056;
var G__20114 = count__20057;
var G__20115 = (i__20058 + (1));
seq__20055 = G__20112;
chunk__20056 = G__20113;
count__20057 = G__20114;
i__20058 = G__20115;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__20055);
if(temp__5753__auto__){
var seq__20055__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20055__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__20055__$1);
var G__20116 = cljs.core.chunk_rest.call(null,seq__20055__$1);
var G__20117 = c__4679__auto__;
var G__20118 = cljs.core.count.call(null,c__4679__auto__);
var G__20119 = (0);
seq__20055 = G__20116;
chunk__20056 = G__20117;
count__20057 = G__20118;
i__20058 = G__20119;
continue;
} else {
var vec__20071 = cljs.core.first.call(null,seq__20055__$1);
var n = cljs.core.nth.call(null,vec__20071,(0),null);
var f = cljs.core.nth.call(null,vec__20071,(1),null);
var temp__5751__auto___20120 = cljs.core.reduce.call(null,((function (seq__20055,chunk__20056,count__20057,i__20058,vec__20071,n,f,seq__20055__$1,temp__5753__auto__,hooks){
return (function (p1__20033_SHARP_,p2__20034_SHARP_){
if(cljs.core.truth_(p1__20033_SHARP_)){
return figwheel.core.goog$module$goog$object.get.call(null,p1__20033_SHARP_,p2__20034_SHARP_);
} else {
return null;
}
});})(seq__20055,chunk__20056,count__20057,i__20058,vec__20071,n,f,seq__20055__$1,temp__5753__auto__,hooks))
,goog.global,cljs.core.map.call(null,cljs.core.str,cljs.core.concat.call(null,clojure.string.split.call(null,n,/\./),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))));
if(cljs.core.truth_(temp__5751__auto___20120)){
var hook_20121 = temp__5751__auto___20120;
figwheel.core.glog_info.call(null,figwheel.core.logger,["Calling ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

try{cljs.core.apply.call(null,hook_20121,args);
}catch (e20074){if((e20074 instanceof Error)){
var e_20122 = e20074;
figwheel.core.glog_error.call(null,figwheel.core.logger,e_20122);
} else {
throw e20074;

}
}} else {
figwheel.core.glog_warning.call(null,figwheel.core.logger,["Unable to find ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}


var G__20123 = cljs.core.next.call(null,seq__20055__$1);
var G__20124 = null;
var G__20125 = (0);
var G__20126 = (0);
seq__20055 = G__20123;
chunk__20056 = G__20124;
count__20057 = G__20125;
i__20058 = G__20126;
continue;
}
} else {
return null;
}
}
break;
}
}));

(figwheel.core.call_hooks.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(figwheel.core.call_hooks.cljs$lang$applyTo = (function (seq20049){
var G__20050 = cljs.core.first.call(null,seq20049);
var seq20049__$1 = cljs.core.next.call(null,seq20049);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20050,seq20049__$1);
}));


figwheel.core.reload_namespaces = (function figwheel$core$reload_namespaces(namespaces,figwheel_meta){
var figwheel_meta__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__20075){
var vec__20076 = p__20075;
var k = cljs.core.nth.call(null,vec__20076,(0),null);
var v = cljs.core.nth.call(null,vec__20076,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k),v], null);
})),cljs.core.js__GT_clj.call(null,figwheel_meta,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
var namespaces__$1 = cljs.core.map.call(null,(function (p1__20035_SHARP_){
return cljs.core.with_meta.call(null,cljs.core.symbol.call(null,p1__20035_SHARP_),cljs.core.get.call(null,figwheel_meta__$1,p1__20035_SHARP_));
}),namespaces);
cljs.core.swap_BANG_.call(null,figwheel.core.state,(function (p1__20036_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,p1__20036_SHARP_,new cljs.core.Keyword("figwheel.core","metadata","figwheel.core/metadata",-720139885),figwheel_meta__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null),(new Date()).getTime());
}));

var to_reload = (cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.not.call(null,figwheel.core.load_warninged_code);
if(and__4251__auto__){
return cljs.core.not_empty.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.core.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null)));
} else {
return and__4251__auto__;
}
})())?null:cljs.core.filter.call(null,(function (p1__20037_SHARP_){
return figwheel.core.reload_ns_QMARK_.call(null,p1__20037_SHARP_);
}),namespaces__$1));
if(cljs.core.empty_QMARK_.call(null,to_reload)){
} else {
figwheel.core.call_hooks.call(null,new cljs.core.Keyword(null,"before-load","before-load",-2060117064),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1], null));

setTimeout((function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.before-load","figwheel.before-load",58978771),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1], null));
}),(0));
}

var seq__20079_20127 = cljs.core.seq.call(null,to_reload);
var chunk__20080_20128 = null;
var count__20081_20129 = (0);
var i__20082_20130 = (0);
while(true){
if((i__20082_20130 < count__20081_20129)){
var ns_20131 = cljs.core._nth.call(null,chunk__20080_20128,i__20082_20130);
goog.require(cljs.core.name.call(null,ns_20131),true);


var G__20132 = seq__20079_20127;
var G__20133 = chunk__20080_20128;
var G__20134 = count__20081_20129;
var G__20135 = (i__20082_20130 + (1));
seq__20079_20127 = G__20132;
chunk__20080_20128 = G__20133;
count__20081_20129 = G__20134;
i__20082_20130 = G__20135;
continue;
} else {
var temp__5753__auto___20136 = cljs.core.seq.call(null,seq__20079_20127);
if(temp__5753__auto___20136){
var seq__20079_20137__$1 = temp__5753__auto___20136;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20079_20137__$1)){
var c__4679__auto___20138 = cljs.core.chunk_first.call(null,seq__20079_20137__$1);
var G__20139 = cljs.core.chunk_rest.call(null,seq__20079_20137__$1);
var G__20140 = c__4679__auto___20138;
var G__20141 = cljs.core.count.call(null,c__4679__auto___20138);
var G__20142 = (0);
seq__20079_20127 = G__20139;
chunk__20080_20128 = G__20140;
count__20081_20129 = G__20141;
i__20082_20130 = G__20142;
continue;
} else {
var ns_20143 = cljs.core.first.call(null,seq__20079_20137__$1);
goog.require(cljs.core.name.call(null,ns_20143),true);


var G__20144 = cljs.core.next.call(null,seq__20079_20137__$1);
var G__20145 = null;
var G__20146 = (0);
var G__20147 = (0);
seq__20079_20127 = G__20144;
chunk__20080_20128 = G__20145;
count__20081_20129 = G__20146;
i__20082_20130 = G__20147;
continue;
}
} else {
}
}
break;
}

var after_reload_fn_20148 = (function (){
try{if(cljs.core.truth_(cljs.core.not_empty.call(null,to_reload))){
figwheel.core.glog_info.call(null,figwheel.core.logger,["loaded ",cljs.core.pr_str.call(null,to_reload)].join(''));

figwheel.core.call_hooks.call(null,new cljs.core.Keyword(null,"after-load","after-load",-1278503285),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reloaded-namespaces","reloaded-namespaces",1589557425),to_reload], null));

figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.after-load","figwheel.after-load",-1913099389),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reloaded-namespaces","reloaded-namespaces",1589557425),to_reload], null));
} else {
}

var temp__5753__auto__ = cljs.core.not_empty.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.set.call(null,to_reload)),namespaces__$1));
if(cljs.core.truth_(temp__5753__auto__)){
var not_loaded = temp__5753__auto__;
return figwheel.core.glog_info.call(null,figwheel.core.logger,["did not load ",cljs.core.pr_str.call(null,not_loaded)].join(''));
} else {
return null;
}
}finally {cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.assoc,new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),cljs.core.PersistentArrayMap.EMPTY);
}});
if((((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined')) && ((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.after_reloads !== 'undefined')))){
figwheel.repl.after_reloads(after_reload_fn_20148);
} else {
setTimeout(after_reload_fn_20148,(100));
}

return null;
});
goog.exportSymbol('figwheel.core.reload_namespaces', figwheel.core.reload_namespaces);

figwheel.core.compile_warnings = (function figwheel$core$compile_warnings(warnings){
if(cljs.core.empty_QMARK_.call(null,warnings)){
} else {
setTimeout((function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.compile-warnings","figwheel.compile-warnings",-2015032448),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"warnings","warnings",-735437651),warnings], null));
}),(0));
}

cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null),cljs.core.concat,warnings);

var seq__20083 = cljs.core.seq.call(null,warnings);
var chunk__20084 = null;
var count__20085 = (0);
var i__20086 = (0);
while(true){
if((i__20086 < count__20085)){
var warning = cljs.core._nth.call(null,chunk__20084,i__20086);
figwheel.core.glog_warning.call(null,figwheel.core.logger,["Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(warning))," in ",figwheel.core.file_line_column.call(null,warning)].join(''));


var G__20149 = seq__20083;
var G__20150 = chunk__20084;
var G__20151 = count__20085;
var G__20152 = (i__20086 + (1));
seq__20083 = G__20149;
chunk__20084 = G__20150;
count__20085 = G__20151;
i__20086 = G__20152;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__20083);
if(temp__5753__auto__){
var seq__20083__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20083__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__20083__$1);
var G__20153 = cljs.core.chunk_rest.call(null,seq__20083__$1);
var G__20154 = c__4679__auto__;
var G__20155 = cljs.core.count.call(null,c__4679__auto__);
var G__20156 = (0);
seq__20083 = G__20153;
chunk__20084 = G__20154;
count__20085 = G__20155;
i__20086 = G__20156;
continue;
} else {
var warning = cljs.core.first.call(null,seq__20083__$1);
figwheel.core.glog_warning.call(null,figwheel.core.logger,["Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(warning))," in ",figwheel.core.file_line_column.call(null,warning)].join(''));


var G__20157 = cljs.core.next.call(null,seq__20083__$1);
var G__20158 = null;
var G__20159 = (0);
var G__20160 = (0);
seq__20083 = G__20157;
chunk__20084 = G__20158;
count__20085 = G__20159;
i__20086 = G__20160;
continue;
}
} else {
return null;
}
}
break;
}
});
goog.exportSymbol('figwheel.core.compile_warnings', figwheel.core.compile_warnings);

figwheel.core.compile_warnings_remote = (function figwheel$core$compile_warnings_remote(warnings_json){
return figwheel.core.compile_warnings.call(null,cljs.core.js__GT_clj.call(null,warnings_json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});
goog.exportSymbol('figwheel.core.compile_warnings_remote', figwheel.core.compile_warnings_remote);

figwheel.core.handle_exception = (function figwheel$core$handle_exception(p__20087){
var map__20088 = p__20087;
var map__20088__$1 = cljs.core.__destructure_map.call(null,map__20088);
var exception_data = map__20088__$1;
var file = cljs.core.get.call(null,map__20088__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var type = cljs.core.get.call(null,map__20088__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__20088__$1,new cljs.core.Keyword(null,"message","message",-406056002));
try{setTimeout((function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.compile-exception","figwheel.compile-exception",1092880746),exception_data);
}),(0));

cljs.core.swap_BANG_.call(null,figwheel.core.state,(function (p1__20038_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,p1__20038_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null),(new Date()).getTime()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"exception","exception",-335277064)], null),exception_data);
}));

return figwheel.core.glog_warning.call(null,figwheel.core.logger,(function (){var G__20089 = "Compile Exception - ";
var G__20089__$1 = (cljs.core.truth_((function (){var or__4253__auto__ = type;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return message;
}
})())?[G__20089,clojure.string.join.call(null," : ",cljs.core.filter.call(null,cljs.core.some_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,message], null)))].join(''):G__20089);
if(cljs.core.truth_(file)){
return [G__20089__$1," in ",figwheel.core.file_line_column.call(null,exception_data)].join('');
} else {
return G__20089__$1;
}
})());
}finally {cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715)], null),cljs.core.PersistentArrayMap.EMPTY);
}});
goog.exportSymbol('figwheel.core.handle_exception', figwheel.core.handle_exception);

figwheel.core.handle_exception_remote = (function figwheel$core$handle_exception_remote(exception_data){
return figwheel.core.handle_exception.call(null,cljs.core.js__GT_clj.call(null,exception_data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});
goog.exportSymbol('figwheel.core.handle_exception_remote', figwheel.core.handle_exception_remote);

//# sourceMappingURL=core.js.map
