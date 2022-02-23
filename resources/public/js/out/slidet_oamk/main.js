// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('slidet_oamk.main');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('ajax.core');
goog.require('cljs.spec.alpha');
goog.require('goog.events.KeyCodes');
goog.require('goog.events');
goog.require('goog.events.EventType');
goog.require('goog.events.KeyHandler');
slidet_oamk.main.dynamic_actions = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([goog.events.KeyCodes.UP,cljs.core.println,goog.events.KeyCodes.DOWN,cljs.core.println]));
slidet_oamk.main.capture_key = (function slidet_oamk$main$capture_key(keymap){
var key_handler = (new goog.events.KeyHandler(document));
var press_fn = (function (key_press){
var temp__5753__auto__ = (function (){var or__4253__auto__ = cljs.core.get.call(null,keymap,key_press.keyCode);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,slidet_oamk.main.dynamic_actions),key_press.keyCode);
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var f = temp__5753__auto__;
return f.call(null);
} else {
return null;
}
});
return goog.events.listen(key_handler,goog.events.KeyHandler.EventType.KEY,press_fn);
});
slidet_oamk.main.main_page = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Welcome to the main page"], null);
slidet_oamk.main.introduction_page = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Welcome to the introduction page"], null);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("slidet-oamk.main","element-spec","slidet-oamk.main/element-spec",495619314),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)),new cljs.core.Keyword(null,"content","content",15833224),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),cljs.core.list(new cljs.core.Symbol("cljs.core","constantly","cljs.core/constantly",119002258,null),true))),cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"content","content",15833224)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.maybe_impl.call(null,cljs.core.map_QMARK_,new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)),cljs.spec.alpha.rep_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.core","constantly","cljs.core/constantly",119002258,null),true),cljs.core.constantly.call(null,true))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),cljs.core.list(new cljs.core.Symbol("cljs.core","constantly","cljs.core/constantly",119002258,null),true))], null)));
slidet_oamk.main.match_to_spec = (function slidet_oamk$main$match_to_spec(content){
return cljs.spec.alpha.conform.call(null,new cljs.core.Keyword("slidet-oamk.main","element-spec","slidet-oamk.main/element-spec",495619314),content);
});
if((typeof slidet_oamk !== 'undefined') && (typeof slidet_oamk.main !== 'undefined') && (typeof slidet_oamk.main.slide_element !== 'undefined')){
} else {
slidet_oamk.main.slide_element = (function (){var method_table__4747__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"slidet-oamk.main","slide-element"),(function (params){
return cljs.core.first.call(null,params);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
cljs.core._add_method.call(null,slidet_oamk.main.slide_element,new cljs.core.Keyword(null,"list","list",765357683),(function (p__19972){
var vec__19973 = p__19972;
var seq__19974 = cljs.core.seq.call(null,vec__19973);
var first__19975 = cljs.core.first.call(null,seq__19974);
var seq__19974__$1 = cljs.core.next.call(null,seq__19974);
var _ = first__19975;
var content = seq__19974__$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4652__auto__ = (function slidet_oamk$main$iter__19976(s__19977){
return (new cljs.core.LazySeq(null,(function (){
var s__19977__$1 = s__19977;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__19977__$1);
if(temp__5753__auto__){
var s__19977__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19977__$2)){
var c__4650__auto__ = cljs.core.chunk_first.call(null,s__19977__$2);
var size__4651__auto__ = cljs.core.count.call(null,c__4650__auto__);
var b__19979 = cljs.core.chunk_buffer.call(null,size__4651__auto__);
if((function (){var i__19978 = (0);
while(true){
if((i__19978 < size__4651__auto__)){
var c = cljs.core._nth.call(null,c__4650__auto__,i__19978);
cljs.core.chunk_append.call(null,b__19979,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.gensym.call(null,"list-element-")], null)));

var G__19980 = (i__19978 + (1));
i__19978 = G__19980;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19979),slidet_oamk$main$iter__19976.call(null,cljs.core.chunk_rest.call(null,s__19977__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19979),null);
}
} else {
var c = cljs.core.first.call(null,s__19977__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.gensym.call(null,"list-element-")], null)),slidet_oamk$main$iter__19976.call(null,cljs.core.rest.call(null,s__19977__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__.call(null,content);
})()], null);
}));
slidet_oamk.main.expanding_list_state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
slidet_oamk.main.expanding_list = (function slidet_oamk$main$expanding_list(p__19981){
var vec__19982 = p__19981;
var seq__19983 = cljs.core.seq.call(null,vec__19982);
var first__19984 = cljs.core.first.call(null,seq__19983);
var seq__19983__$1 = cljs.core.next.call(null,seq__19983);
var _ = first__19984;
var content = seq__19983__$1;
var content__$1 = cljs.core.take.call(null,(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"visible-count","visible-count",1890743263).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,slidet_oamk.main.expanding_list_state));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (0);
}
})(),content);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4652__auto__ = (function slidet_oamk$main$expanding_list_$_iter__19985(s__19986){
return (new cljs.core.LazySeq(null,(function (){
var s__19986__$1 = s__19986;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__19986__$1);
if(temp__5753__auto__){
var s__19986__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19986__$2)){
var c__4650__auto__ = cljs.core.chunk_first.call(null,s__19986__$2);
var size__4651__auto__ = cljs.core.count.call(null,c__4650__auto__);
var b__19988 = cljs.core.chunk_buffer.call(null,size__4651__auto__);
if((function (){var i__19987 = (0);
while(true){
if((i__19987 < size__4651__auto__)){
var c = cljs.core._nth.call(null,c__4650__auto__,i__19987);
cljs.core.chunk_append.call(null,b__19988,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.gensym.call(null,"expanding-list-element-")], null)));

var G__19989 = (i__19987 + (1));
i__19987 = G__19989;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19988),slidet_oamk$main$expanding_list_$_iter__19985.call(null,cljs.core.chunk_rest.call(null,s__19986__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19988),null);
}
} else {
var c = cljs.core.first.call(null,s__19986__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.gensym.call(null,"expanding-list-element-")], null)),slidet_oamk$main$expanding_list_$_iter__19985.call(null,cljs.core.rest.call(null,s__19986__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__.call(null,content__$1);
})()], null)], null);
});
slidet_oamk.main.register_up_down_keys = (function slidet_oamk$main$register_up_down_keys(up_action,down_action){
cljs.core.reset_BANG_.call(null,slidet_oamk.main.expanding_list_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visible-count","visible-count",1890743263),(1)], null));

return cljs.core.swap_BANG_.call(null,slidet_oamk.main.dynamic_actions,cljs.core.assoc,goog.events.KeyCodes.UP,up_action,goog.events.KeyCodes.DOWN,down_action);
});
slidet_oamk.main.unregister_up_down_keys = (function slidet_oamk$main$unregister_up_down_keys(){
cljs.core.reset_BANG_.call(null,slidet_oamk.main.expanding_list_state,cljs.core.PersistentArrayMap.EMPTY);

return cljs.core.swap_BANG_.call(null,slidet_oamk.main.dynamic_actions,cljs.core.assoc,goog.events.KeyCodes.UP,cljs.core.println,goog.events.KeyCodes.DOWN,cljs.core.println);
});
slidet_oamk.main.decrease_by_one_BANG_ = (function slidet_oamk$main$decrease_by_one_BANG_(state){
if((new cljs.core.Keyword(null,"visible-count","visible-count",1890743263).cljs$core$IFn$_invoke$arity$1(state) > (1))){
return cljs.core.update.call(null,state,new cljs.core.Keyword(null,"visible-count","visible-count",1890743263),cljs.core.dec);
} else {
return state;
}
});
slidet_oamk.main.increase_by_one_BANG_ = (function slidet_oamk$main$increase_by_one_BANG_(state){
if((new cljs.core.Keyword(null,"visible-count","visible-count",1890743263).cljs$core$IFn$_invoke$arity$1(state) < (8))){
return cljs.core.update.call(null,state,new cljs.core.Keyword(null,"visible-count","visible-count",1890743263),cljs.core.inc);
} else {
return state;
}
});
cljs.core._add_method.call(null,slidet_oamk.main.slide_element,new cljs.core.Keyword(null,"expanding-list","expanding-list",737458107),(function (_){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),reagent.core.partial.call(null,slidet_oamk.main.register_up_down_keys,(function (){
return cljs.core.swap_BANG_.call(null,slidet_oamk.main.expanding_list_state,slidet_oamk.main.decrease_by_one_BANG_);
}),(function (){
return cljs.core.swap_BANG_.call(null,slidet_oamk.main.expanding_list_state,slidet_oamk.main.increase_by_one_BANG_);
})),new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),slidet_oamk.main.unregister_up_down_keys,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),slidet_oamk.main.expanding_list], null));
}));
cljs.core._add_method.call(null,slidet_oamk.main.slide_element,new cljs.core.Keyword(null,"heading","heading",-1312171873),(function (p__19990){
var vec__19991 = p__19990;
var _ = cljs.core.nth.call(null,vec__19991,(0),null);
var text = cljs.core.nth.call(null,vec__19991,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),text], null);
}));
cljs.core._add_method.call(null,slidet_oamk.main.slide_element,new cljs.core.Keyword(null,"subheading","subheading",-805629940),(function (p__19994){
var vec__19995 = p__19994;
var _ = cljs.core.nth.call(null,vec__19995,(0),null);
var text = cljs.core.nth.call(null,vec__19995,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),text], null);
}));
cljs.core._add_method.call(null,slidet_oamk.main.slide_element,new cljs.core.Keyword(null,"text","text",-1790561697),(function (p__19998){
var vec__19999 = p__19998;
var _ = cljs.core.nth.call(null,vec__19999,(0),null);
var text = cljs.core.nth.call(null,vec__19999,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),text], null);
}));
cljs.core._add_method.call(null,slidet_oamk.main.slide_element,new cljs.core.Keyword(null,"image","image",-58725096),(function (p__20002){
var vec__20003 = p__20002;
var seq__20004 = cljs.core.seq.call(null,vec__20003);
var first__20005 = cljs.core.first.call(null,seq__20004);
var seq__20004__$1 = cljs.core.next.call(null,seq__20004);
var _ = first__20005;
var content = seq__20004__$1;
var map__20006 = slidet_oamk.main.match_to_spec.call(null,content);
var map__20006__$1 = cljs.core.__destructure_map.call(null,map__20006);
var options = cljs.core.get.call(null,map__20006__$1,new cljs.core.Keyword(null,"options","options",99638489));
var content__$1 = cljs.core.get.call(null,map__20006__$1,new cljs.core.Keyword(null,"content","content",15833224));
var vec__20007 = content__$1;
var image = cljs.core.nth.call(null,vec__20007,(0),null);
var text = cljs.core.nth.call(null,vec__20007,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.image","div.image",923573900),(function (){var G__20010 = cljs.core.PersistentArrayMap.EMPTY;
if(cljs.core.truth_(new cljs.core.Keyword(null,"centered?","centered?",-109742703).cljs$core$IFn$_invoke$arity$1(options))){
return cljs.core.assoc.call(null,G__20010,new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["centered",null], null), null));
} else {
return G__20010;
}
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),["/img/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(image)].join('')], null)], null),(cljs.core.truth_(text)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.image-alt","div.image-alt",1599719339),text], null):null)], null);
}));
cljs.core._add_method.call(null,slidet_oamk.main.slide_element,new cljs.core.Keyword(null,"sections","sections",-886710106),(function (p__20011){
var vec__20012 = p__20011;
var seq__20013 = cljs.core.seq.call(null,vec__20012);
var first__20014 = cljs.core.first.call(null,seq__20013);
var seq__20013__$1 = cljs.core.next.call(null,seq__20013);
var _ = first__20014;
var sections = seq__20013__$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sections","div.sections",848314575),(function (){var iter__4652__auto__ = (function slidet_oamk$main$iter__20015(s__20016){
return (new cljs.core.LazySeq(null,(function (){
var s__20016__$1 = s__20016;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__20016__$1);
if(temp__5753__auto__){
var s__20016__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20016__$2)){
var c__4650__auto__ = cljs.core.chunk_first.call(null,s__20016__$2);
var size__4651__auto__ = cljs.core.count.call(null,c__4650__auto__);
var b__20018 = cljs.core.chunk_buffer.call(null,size__4651__auto__);
if((function (){var i__20017 = (0);
while(true){
if((i__20017 < size__4651__auto__)){
var s = cljs.core._nth.call(null,c__4650__auto__,i__20017);
cljs.core.chunk_append.call(null,b__20018,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.section","div.section",-982365435),(function (){var iter__4652__auto__ = ((function (i__20017,s,c__4650__auto__,size__4651__auto__,b__20018,s__20016__$2,temp__5753__auto__,vec__20012,seq__20013,first__20014,seq__20013__$1,_,sections){
return (function slidet_oamk$main$iter__20015_$_iter__20019(s__20020){
return (new cljs.core.LazySeq(null,((function (i__20017,s,c__4650__auto__,size__4651__auto__,b__20018,s__20016__$2,temp__5753__auto__,vec__20012,seq__20013,first__20014,seq__20013__$1,_,sections){
return (function (){
var s__20020__$1 = s__20020;
while(true){
var temp__5753__auto____$1 = cljs.core.seq.call(null,s__20020__$1);
if(temp__5753__auto____$1){
var s__20020__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20020__$2)){
var c__4650__auto____$1 = cljs.core.chunk_first.call(null,s__20020__$2);
var size__4651__auto____$1 = cljs.core.count.call(null,c__4650__auto____$1);
var b__20022 = cljs.core.chunk_buffer.call(null,size__4651__auto____$1);
if((function (){var i__20021 = (0);
while(true){
if((i__20021 < size__4651__auto____$1)){
var e = cljs.core._nth.call(null,c__4650__auto____$1,i__20021);
cljs.core.chunk_append.call(null,b__20022,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slidet_oamk.main.slide_element,e], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.gensym.call(null,"section-element-")], null)));

var G__20027 = (i__20021 + (1));
i__20021 = G__20027;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20022),slidet_oamk$main$iter__20015_$_iter__20019.call(null,cljs.core.chunk_rest.call(null,s__20020__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20022),null);
}
} else {
var e = cljs.core.first.call(null,s__20020__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slidet_oamk.main.slide_element,e], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.gensym.call(null,"section-element-")], null)),slidet_oamk$main$iter__20015_$_iter__20019.call(null,cljs.core.rest.call(null,s__20020__$2)));
}
} else {
return null;
}
break;
}
});})(i__20017,s,c__4650__auto__,size__4651__auto__,b__20018,s__20016__$2,temp__5753__auto__,vec__20012,seq__20013,first__20014,seq__20013__$1,_,sections))
,null,null));
});})(i__20017,s,c__4650__auto__,size__4651__auto__,b__20018,s__20016__$2,temp__5753__auto__,vec__20012,seq__20013,first__20014,seq__20013__$1,_,sections))
;
return iter__4652__auto__.call(null,s);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.gensym.call(null,"section-")], null)));

var G__20028 = (i__20017 + (1));
i__20017 = G__20028;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20018),slidet_oamk$main$iter__20015.call(null,cljs.core.chunk_rest.call(null,s__20016__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20018),null);
}
} else {
var s = cljs.core.first.call(null,s__20016__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.section","div.section",-982365435),(function (){var iter__4652__auto__ = ((function (s,s__20016__$2,temp__5753__auto__,vec__20012,seq__20013,first__20014,seq__20013__$1,_,sections){
return (function slidet_oamk$main$iter__20015_$_iter__20023(s__20024){
return (new cljs.core.LazySeq(null,(function (){
var s__20024__$1 = s__20024;
while(true){
var temp__5753__auto____$1 = cljs.core.seq.call(null,s__20024__$1);
if(temp__5753__auto____$1){
var s__20024__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20024__$2)){
var c__4650__auto__ = cljs.core.chunk_first.call(null,s__20024__$2);
var size__4651__auto__ = cljs.core.count.call(null,c__4650__auto__);
var b__20026 = cljs.core.chunk_buffer.call(null,size__4651__auto__);
if((function (){var i__20025 = (0);
while(true){
if((i__20025 < size__4651__auto__)){
var e = cljs.core._nth.call(null,c__4650__auto__,i__20025);
cljs.core.chunk_append.call(null,b__20026,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slidet_oamk.main.slide_element,e], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.gensym.call(null,"section-element-")], null)));

var G__20029 = (i__20025 + (1));
i__20025 = G__20029;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20026),slidet_oamk$main$iter__20015_$_iter__20023.call(null,cljs.core.chunk_rest.call(null,s__20024__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20026),null);
}
} else {
var e = cljs.core.first.call(null,s__20024__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slidet_oamk.main.slide_element,e], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.gensym.call(null,"section-element-")], null)),slidet_oamk$main$iter__20015_$_iter__20023.call(null,cljs.core.rest.call(null,s__20024__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(s,s__20016__$2,temp__5753__auto__,vec__20012,seq__20013,first__20014,seq__20013__$1,_,sections))
;
return iter__4652__auto__.call(null,s);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.gensym.call(null,"section-")], null)),slidet_oamk$main$iter__20015.call(null,cljs.core.rest.call(null,s__20016__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__.call(null,sections);
})()], null);
}));
slidet_oamk.main.slide_renderer = (function slidet_oamk$main$slide_renderer(p__20030,content){
var map__20031 = p__20030;
var map__20031__$1 = cljs.core.__destructure_map.call(null,map__20031);
var _options = map__20031__$1;
var background = cljs.core.get.call(null,map__20031__$1,new cljs.core.Keyword(null,"background","background",-863952629));
var map__20032 = background;
var map__20032__$1 = cljs.core.__destructure_map.call(null,map__20032);
var background_image = cljs.core.get.call(null,map__20032__$1,new cljs.core.Keyword(null,"image","image",-58725096));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.slide-container","div.slide-container",2008610906),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,(cljs.core.truth_(background_image)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-image","background-image",-1142314704),["url(\"img/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(background_image),"\")"].join('')], null):null))], null),(function (){var iter__4652__auto__ = (function slidet_oamk$main$slide_renderer_$_iter__20033(s__20034){
return (new cljs.core.LazySeq(null,(function (){
var s__20034__$1 = s__20034;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__20034__$1);
if(temp__5753__auto__){
var s__20034__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20034__$2)){
var c__4650__auto__ = cljs.core.chunk_first.call(null,s__20034__$2);
var size__4651__auto__ = cljs.core.count.call(null,c__4650__auto__);
var b__20036 = cljs.core.chunk_buffer.call(null,size__4651__auto__);
if((function (){var i__20035 = (0);
while(true){
if((i__20035 < size__4651__auto__)){
var elem = cljs.core._nth.call(null,c__4650__auto__,i__20035);
cljs.core.chunk_append.call(null,b__20036,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slidet_oamk.main.slide_element,elem], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.gensym.call(null,"slide-element-")], null)));

var G__20037 = (i__20035 + (1));
i__20035 = G__20037;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20036),slidet_oamk$main$slide_renderer_$_iter__20033.call(null,cljs.core.chunk_rest.call(null,s__20034__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20036),null);
}
} else {
var elem = cljs.core.first.call(null,s__20034__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slidet_oamk.main.slide_element,elem], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.gensym.call(null,"slide-element-")], null)),slidet_oamk$main$slide_renderer_$_iter__20033.call(null,cljs.core.rest.call(null,s__20034__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__.call(null,content);
})()], null);
});
slidet_oamk.main.slides = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
if((typeof slidet_oamk !== 'undefined') && (typeof slidet_oamk.main !== 'undefined') && (typeof slidet_oamk.main.slide_state !== 'undefined')){
} else {
slidet_oamk.main.slide_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-index","current-index",821935409),(0),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.PersistentVector.EMPTY], null));
}
slidet_oamk.main.change_slide = (function slidet_oamk$main$change_slide(p__20038,condition){
var map__20039 = p__20038;
var map__20039__$1 = cljs.core.__destructure_map.call(null,map__20039);
var app = map__20039__$1;
var current_index = cljs.core.get.call(null,map__20039__$1,new cljs.core.Keyword(null,"current-index","current-index",821935409));
var slide_order = cljs.core.get.call(null,map__20039__$1,new cljs.core.Keyword(null,"slide-order","slide-order",398208726));
var nxt = (((((current_index < (cljs.core.count.call(null,slide_order) - (1)))) && (cljs.core._EQ_.call(null,condition,new cljs.core.Keyword(null,"next","next",-117701485)))))?(current_index + (1)):(((((current_index > (0))) && (cljs.core._EQ_.call(null,condition,new cljs.core.Keyword(null,"prev","prev",-1597069226)))))?(current_index - (1)):false
));
if(cljs.core.truth_(nxt)){
return cljs.core.assoc.call(null,cljs.core.update.call(null,app,new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.conj,current_index),new cljs.core.Keyword(null,"current-index","current-index",821935409),nxt);
} else {
return app;
}
});
slidet_oamk.main.next_slide = (function slidet_oamk$main$next_slide(app){
return slidet_oamk.main.change_slide.call(null,app,new cljs.core.Keyword(null,"next","next",-117701485));
});
slidet_oamk.main.previous_slide = (function slidet_oamk$main$previous_slide(app){
return slidet_oamk.main.change_slide.call(null,app,new cljs.core.Keyword(null,"prev","prev",-1597069226));
});
slidet_oamk.main.not_found = (function slidet_oamk$main$not_found(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Not found"], null);
});
slidet_oamk.main.presenter = (function slidet_oamk$main$presenter(app,slides){
var dereffed_slides = cljs.core.deref.call(null,slides);
var app__$1 = cljs.core.deref.call(null,app);
var current_slide = cljs.core.get.call(null,new cljs.core.Keyword(null,"slide-order","slide-order",398208726).cljs$core$IFn$_invoke$arity$1(app__$1),new cljs.core.Keyword(null,"current-index","current-index",821935409).cljs$core$IFn$_invoke$arity$1(app__$1));
var content = cljs.core.get_in.call(null,dereffed_slides,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_slide,new cljs.core.Keyword(null,"content","content",15833224)], null));
var options = cljs.core.get_in.call(null,dereffed_slides,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_slide,new cljs.core.Keyword(null,"options","options",99638489)], null));
if((!((content == null)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [slidet_oamk.main.slide_renderer,options,content], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [slidet_oamk.main.not_found], null);
}
});
slidet_oamk.main.update_slides = (function slidet_oamk$main$update_slides(ss){
cljs.core.reset_BANG_.call(null,slidet_oamk.main.slides,new cljs.core.Keyword(null,"slides","slides",-1933049910).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"slides","slides",-1933049910).cljs$core$IFn$_invoke$arity$1(ss)));

return cljs.core.swap_BANG_.call(null,slidet_oamk.main.slide_state,cljs.core.assoc,new cljs.core.Keyword(null,"slide-order","slide-order",398208726),new cljs.core.Keyword(null,"slide-order","slide-order",398208726).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"slides","slides",-1933049910).cljs$core$IFn$_invoke$arity$1(ss)),new cljs.core.Keyword(null,"slide-index","slide-index",-1911636060),(0));
});
slidet_oamk.main.get_all_slides = (function slidet_oamk$main$get_all_slides(this$){
slidet_oamk.main.capture_key.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([goog.events.KeyCodes.LEFT,(function (){
return cljs.core.swap_BANG_.call(null,slidet_oamk.main.slide_state,slidet_oamk.main.previous_slide);
}),goog.events.KeyCodes.RIGHT,(function (){
return cljs.core.swap_BANG_.call(null,slidet_oamk.main.slide_state,slidet_oamk.main.next_slide);
})]));

return ajax.core.POST.call(null,"http://localhost:3005/api/slides",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),slidet_oamk.main.update_slides,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),cljs.core.println], null));
});
slidet_oamk.main.slide_container = (function slidet_oamk$main$slide_container(){
var local_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"menu-open?","menu-open?",-1909849203),false,new cljs.core.Keyword(null,"show-debug","show-debug",267843982),false], null));
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.application","div.application",841854112),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.menu","div.menu",-175336694),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,local_state,cljs.core.update,new cljs.core.Keyword(null,"menu-open?","menu-open?",-1909849203),cljs.core.not);
})], null),"#"], null),(cljs.core.truth_(new cljs.core.Keyword(null,"menu-open?","menu-open?",-1909849203).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,local_state)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.menu-open","div.menu-open",1091880922),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,local_state,cljs.core.update,new cljs.core.Keyword(null,"show-debug?","show-debug?",-1274088080),cljs.core.not);
})], null),"Debug?"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return ajax.core.POST.call(null,"http://localhost:3005/api/slides",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),slidet_oamk.main.update_slides,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),cljs.core.println], null));
})], null),"Refetch"], null)], null):null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"show-debug?","show-debug?",-1274088080).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,local_state)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.debug","div.debug",-1545042863),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.pr_str.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,slidet_oamk.main.slides),cljs.core.get.call(null,new cljs.core.Keyword(null,"slide-order","slide-order",398208726).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,slidet_oamk.main.slide_state)),new cljs.core.Keyword(null,"current-index","current-index",821935409).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,slidet_oamk.main.slide_state)))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,slidet_oamk.main.slide_state)))], null)], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [slidet_oamk.main.presenter,slidet_oamk.main.slide_state,slidet_oamk.main.slides], null)], null);
});
});
slidet_oamk.main.slidet_main = (function slidet_oamk$main$slidet_main(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"slidet-main",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),slidet_oamk.main.get_all_slides,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),slidet_oamk.main.slide_container], null));
});
reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [slidet_oamk.main.slidet_main], null),document.getElementById("app"));

//# sourceMappingURL=main.js.map
