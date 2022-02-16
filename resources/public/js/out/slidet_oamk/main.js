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
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("slidet-oamk.main","element-spec","slidet-oamk.main/element-spec",495619314),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)),new cljs.core.Keyword(null,"content","content",15833224),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null))),cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"content","content",15833224)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.maybe_impl.call(null,cljs.core.map_QMARK_,new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)),cljs.spec.alpha.rep_impl.call(null,new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.vector_QMARK_)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null))], null)));
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
cljs.core._add_method.call(null,slidet_oamk.main.slide_element,new cljs.core.Keyword(null,"list","list",765357683),(function (p__75903){
var vec__75904 = p__75903;
var seq__75905 = cljs.core.seq.call(null,vec__75904);
var first__75906 = cljs.core.first.call(null,seq__75905);
var seq__75905__$1 = cljs.core.next.call(null,seq__75905);
var _ = first__75906;
var content = seq__75905__$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4652__auto__ = (function slidet_oamk$main$iter__75907(s__75908){
return (new cljs.core.LazySeq(null,(function (){
var s__75908__$1 = s__75908;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__75908__$1);
if(temp__5753__auto__){
var s__75908__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__75908__$2)){
var c__4650__auto__ = cljs.core.chunk_first.call(null,s__75908__$2);
var size__4651__auto__ = cljs.core.count.call(null,c__4650__auto__);
var b__75910 = cljs.core.chunk_buffer.call(null,size__4651__auto__);
if((function (){var i__75909 = (0);
while(true){
if((i__75909 < size__4651__auto__)){
var c = cljs.core._nth.call(null,c__4650__auto__,i__75909);
cljs.core.chunk_append.call(null,b__75910,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.gensym.call(null,"list-element-")], null)));

var G__75911 = (i__75909 + (1));
i__75909 = G__75911;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__75910),slidet_oamk$main$iter__75907.call(null,cljs.core.chunk_rest.call(null,s__75908__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__75910),null);
}
} else {
var c = cljs.core.first.call(null,s__75908__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.gensym.call(null,"list-element-")], null)),slidet_oamk$main$iter__75907.call(null,cljs.core.rest.call(null,s__75908__$2)));
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
slidet_oamk.main.expanding_list = (function slidet_oamk$main$expanding_list(p__75912){
var vec__75913 = p__75912;
var seq__75914 = cljs.core.seq.call(null,vec__75913);
var first__75915 = cljs.core.first.call(null,seq__75914);
var seq__75914__$1 = cljs.core.next.call(null,seq__75914);
var _ = first__75915;
var content = seq__75914__$1;
var content__$1 = cljs.core.take.call(null,(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"visible-count","visible-count",1890743263).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,slidet_oamk.main.expanding_list_state));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (0);
}
})(),content);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4652__auto__ = (function slidet_oamk$main$expanding_list_$_iter__75916(s__75917){
return (new cljs.core.LazySeq(null,(function (){
var s__75917__$1 = s__75917;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__75917__$1);
if(temp__5753__auto__){
var s__75917__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__75917__$2)){
var c__4650__auto__ = cljs.core.chunk_first.call(null,s__75917__$2);
var size__4651__auto__ = cljs.core.count.call(null,c__4650__auto__);
var b__75919 = cljs.core.chunk_buffer.call(null,size__4651__auto__);
if((function (){var i__75918 = (0);
while(true){
if((i__75918 < size__4651__auto__)){
var c = cljs.core._nth.call(null,c__4650__auto__,i__75918);
cljs.core.chunk_append.call(null,b__75919,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.gensym.call(null,"expanding-list-element-")], null)));

var G__75920 = (i__75918 + (1));
i__75918 = G__75920;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__75919),slidet_oamk$main$expanding_list_$_iter__75916.call(null,cljs.core.chunk_rest.call(null,s__75917__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__75919),null);
}
} else {
var c = cljs.core.first.call(null,s__75917__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.gensym.call(null,"expanding-list-element-")], null)),slidet_oamk$main$expanding_list_$_iter__75916.call(null,cljs.core.rest.call(null,s__75917__$2)));
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
cljs.core._add_method.call(null,slidet_oamk.main.slide_element,new cljs.core.Keyword(null,"heading","heading",-1312171873),(function (p__75921){
var vec__75922 = p__75921;
var seq__75923 = cljs.core.seq.call(null,vec__75922);
var first__75924 = cljs.core.first.call(null,seq__75923);
var seq__75923__$1 = cljs.core.next.call(null,seq__75923);
var _ = first__75924;
var text = seq__75923__$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),cljs.core.first.call(null,text)], null);
}));
cljs.core._add_method.call(null,slidet_oamk.main.slide_element,new cljs.core.Keyword(null,"image","image",-58725096),(function (p__75925){
var vec__75926 = p__75925;
var seq__75927 = cljs.core.seq.call(null,vec__75926);
var first__75928 = cljs.core.first.call(null,seq__75927);
var seq__75927__$1 = cljs.core.next.call(null,seq__75927);
var _ = first__75928;
var first__75928__$1 = cljs.core.first.call(null,seq__75927__$1);
var seq__75927__$2 = cljs.core.next.call(null,seq__75927__$1);
var image = first__75928__$1;
var first__75928__$2 = cljs.core.first.call(null,seq__75927__$2);
var seq__75927__$3 = cljs.core.next.call(null,seq__75927__$2);
var text = first__75928__$2;
var more = seq__75927__$3;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.image","div.image",923573900),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),["/img/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(image)].join('')], null)], null),(cljs.core.truth_(text)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.image-alt","div.image-alt",1599719339),text], null):null)], null);
}));
cljs.core._add_method.call(null,slidet_oamk.main.slide_element,new cljs.core.Keyword(null,"section","section",-300141526),(function (p__75929){
var vec__75930 = p__75929;
var seq__75931 = cljs.core.seq.call(null,vec__75930);
var first__75932 = cljs.core.first.call(null,seq__75931);
var seq__75931__$1 = cljs.core.next.call(null,seq__75931);
var _ = first__75932;
var sections = seq__75931__$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sections","div.sections",848314575),(function (){var iter__4652__auto__ = (function slidet_oamk$main$iter__75933(s__75934){
return (new cljs.core.LazySeq(null,(function (){
var s__75934__$1 = s__75934;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__75934__$1);
if(temp__5753__auto__){
var s__75934__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__75934__$2)){
var c__4650__auto__ = cljs.core.chunk_first.call(null,s__75934__$2);
var size__4651__auto__ = cljs.core.count.call(null,c__4650__auto__);
var b__75936 = cljs.core.chunk_buffer.call(null,size__4651__auto__);
if((function (){var i__75935 = (0);
while(true){
if((i__75935 < size__4651__auto__)){
var s = cljs.core._nth.call(null,c__4650__auto__,i__75935);
cljs.core.chunk_append.call(null,b__75936,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.section","div.section",-982365435),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slidet_oamk.main.slide_element,s], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.gensym.call(null,"section-element-")], null)));

var G__75937 = (i__75935 + (1));
i__75935 = G__75937;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__75936),slidet_oamk$main$iter__75933.call(null,cljs.core.chunk_rest.call(null,s__75934__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__75936),null);
}
} else {
var s = cljs.core.first.call(null,s__75934__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.section","div.section",-982365435),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slidet_oamk.main.slide_element,s], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.gensym.call(null,"section-element-")], null)),slidet_oamk$main$iter__75933.call(null,cljs.core.rest.call(null,s__75934__$2)));
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
slidet_oamk.main.slide_renderer = (function slidet_oamk$main$slide_renderer(p__75938,content){
var map__75939 = p__75938;
var map__75939__$1 = cljs.core.__destructure_map.call(null,map__75939);
var _options = map__75939__$1;
var background = cljs.core.get.call(null,map__75939__$1,new cljs.core.Keyword(null,"background","background",-863952629));
var map__75940 = background;
var map__75940__$1 = cljs.core.__destructure_map.call(null,map__75940);
var background_image = cljs.core.get.call(null,map__75940__$1,new cljs.core.Keyword(null,"image","image",-58725096));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.slide-container","div.slide-container",2008610906),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,(cljs.core.truth_(background_image)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-image","background-image",-1142314704),["url(\"img/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(background_image),"\")"].join('')], null):null))], null),(function (){var iter__4652__auto__ = (function slidet_oamk$main$slide_renderer_$_iter__75941(s__75942){
return (new cljs.core.LazySeq(null,(function (){
var s__75942__$1 = s__75942;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__75942__$1);
if(temp__5753__auto__){
var s__75942__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__75942__$2)){
var c__4650__auto__ = cljs.core.chunk_first.call(null,s__75942__$2);
var size__4651__auto__ = cljs.core.count.call(null,c__4650__auto__);
var b__75944 = cljs.core.chunk_buffer.call(null,size__4651__auto__);
if((function (){var i__75943 = (0);
while(true){
if((i__75943 < size__4651__auto__)){
var elem = cljs.core._nth.call(null,c__4650__auto__,i__75943);
cljs.core.chunk_append.call(null,b__75944,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slidet_oamk.main.slide_element,elem], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.gensym.call(null,"slide-element-")], null)));

var G__75945 = (i__75943 + (1));
i__75943 = G__75945;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__75944),slidet_oamk$main$slide_renderer_$_iter__75941.call(null,cljs.core.chunk_rest.call(null,s__75942__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__75944),null);
}
} else {
var elem = cljs.core.first.call(null,s__75942__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slidet_oamk.main.slide_element,elem], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.gensym.call(null,"slide-element-")], null)),slidet_oamk$main$slide_renderer_$_iter__75941.call(null,cljs.core.rest.call(null,s__75942__$2)));
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
slidet_oamk.main.slide_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-slide","current-slide",105536463),new cljs.core.Keyword(null,"main-page","main-page",165237388),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.PersistentVector.EMPTY], null));
}
slidet_oamk.main.change_slide = (function slidet_oamk$main$change_slide(p__75946,path){
var map__75947 = p__75946;
var map__75947__$1 = cljs.core.__destructure_map.call(null,map__75947);
var app = map__75947__$1;
var current_slide = cljs.core.get.call(null,map__75947__$1,new cljs.core.Keyword(null,"current-slide","current-slide",105536463));
var nxt = cljs.core.get_in.call(null,cljs.core.deref.call(null,slidet_oamk.main.slides),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_slide,path], null));
if(cljs.core.truth_(nxt)){
return cljs.core.assoc.call(null,cljs.core.update.call(null,app,new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.conj,current_slide),new cljs.core.Keyword(null,"current-slide","current-slide",105536463),nxt);
} else {
return app;
}
});
slidet_oamk.main.next_slide = (function slidet_oamk$main$next_slide(app){
return slidet_oamk.main.change_slide.call(null,app,new cljs.core.Keyword(null,"next-slide","next-slide",-773168937));
});
slidet_oamk.main.previous_slide = (function slidet_oamk$main$previous_slide(app){
return slidet_oamk.main.change_slide.call(null,app,new cljs.core.Keyword(null,"previous-slide","previous-slide",-1546697875));
});
slidet_oamk.main.not_found = (function slidet_oamk$main$not_found(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Not found"], null);
});
slidet_oamk.main.presenter = (function slidet_oamk$main$presenter(app,slides){
var dereffed_slides = cljs.core.deref.call(null,slides);
var current_slide = new cljs.core.Keyword(null,"current-slide","current-slide",105536463).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app));
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

return cljs.core.swap_BANG_.call(null,slidet_oamk.main.slide_state,cljs.core.assoc,new cljs.core.Keyword(null,"current-slide","current-slide",105536463),new cljs.core.Keyword(null,"first-slide","first-slide",1509244843).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"slides","slides",-1933049910).cljs$core$IFn$_invoke$arity$1(ss)),new cljs.core.Keyword(null,"slide-order","slide-order",398208726),new cljs.core.Keyword(null,"slide-order","slide-order",398208726).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"slides","slides",-1933049910).cljs$core$IFn$_invoke$arity$1(ss)),new cljs.core.Keyword(null,"slide-index","slide-index",-1911636060),(0));
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
return ajax.core.POST.call(null,"http://localhost:3005/api/slide",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"slide","slide",142491892),new cljs.core.Keyword(null,"current-slide","current-slide",105536463).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,slidet_oamk.main.slide_state))], null)], null));
})], null),"Refetch"], null)], null):null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"show-debug?","show-debug?",-1274088080).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,local_state)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.debug","div.debug",-1545042863),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.pr_str.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,slidet_oamk.main.slides),new cljs.core.Keyword(null,"current-slide","current-slide",105536463).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,slidet_oamk.main.slide_state))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.pr_str.call(null,cljs.core.deref.call(null,slidet_oamk.main.slides))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,slidet_oamk.main.slide_state)))], null)], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [slidet_oamk.main.presenter,slidet_oamk.main.slide_state,slidet_oamk.main.slides], null)], null);
});
});
slidet_oamk.main.slidet_main = (function slidet_oamk$main$slidet_main(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"slidet-main",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),slidet_oamk.main.get_all_slides,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),slidet_oamk.main.slide_container], null));
});
reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [slidet_oamk.main.slidet_main], null),document.getElementById("app"));

//# sourceMappingURL=main.js.map
