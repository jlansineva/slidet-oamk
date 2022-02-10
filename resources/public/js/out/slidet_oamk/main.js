// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('slidet_oamk.main');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('ajax.core');
goog.require('goog.events.KeyCodes');
goog.require('goog.events');
goog.require('goog.events.EventType');
goog.require('goog.events.KeyHandler');
slidet_oamk.main.capture_key = (function slidet_oamk$main$capture_key(keymap){
var key_handler = (new goog.events.KeyHandler(document));
var press_fn = (function (key_press){
var temp__5753__auto__ = cljs.core.get.call(null,keymap,key_press.keyCode);
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
cljs.core._add_method.call(null,slidet_oamk.main.slide_element,new cljs.core.Keyword(null,"list","list",765357683),(function (p__45787){
var vec__45788 = p__45787;
var seq__45789 = cljs.core.seq.call(null,vec__45788);
var first__45790 = cljs.core.first.call(null,seq__45789);
var seq__45789__$1 = cljs.core.next.call(null,seq__45789);
var _ = first__45790;
var content = seq__45789__$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4652__auto__ = (function slidet_oamk$main$iter__45791(s__45792){
return (new cljs.core.LazySeq(null,(function (){
var s__45792__$1 = s__45792;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__45792__$1);
if(temp__5753__auto__){
var s__45792__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__45792__$2)){
var c__4650__auto__ = cljs.core.chunk_first.call(null,s__45792__$2);
var size__4651__auto__ = cljs.core.count.call(null,c__4650__auto__);
var b__45794 = cljs.core.chunk_buffer.call(null,size__4651__auto__);
if((function (){var i__45793 = (0);
while(true){
if((i__45793 < size__4651__auto__)){
var c = cljs.core._nth.call(null,c__4650__auto__,i__45793);
cljs.core.chunk_append.call(null,b__45794,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)], null));

var G__45795 = (i__45793 + (1));
i__45793 = G__45795;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45794),slidet_oamk$main$iter__45791.call(null,cljs.core.chunk_rest.call(null,s__45792__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45794),null);
}
} else {
var c = cljs.core.first.call(null,s__45792__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)], null),slidet_oamk$main$iter__45791.call(null,cljs.core.rest.call(null,s__45792__$2)));
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
cljs.core._add_method.call(null,slidet_oamk.main.slide_element,new cljs.core.Keyword(null,"heading","heading",-1312171873),(function (p__45796){
var vec__45797 = p__45796;
var seq__45798 = cljs.core.seq.call(null,vec__45797);
var first__45799 = cljs.core.first.call(null,seq__45798);
var seq__45798__$1 = cljs.core.next.call(null,seq__45798);
var _ = first__45799;
var text = seq__45798__$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),cljs.core.first.call(null,text)], null);
}));
cljs.core._add_method.call(null,slidet_oamk.main.slide_element,new cljs.core.Keyword(null,"image","image",-58725096),(function (p__45800){
var vec__45801 = p__45800;
var seq__45802 = cljs.core.seq.call(null,vec__45801);
var first__45803 = cljs.core.first.call(null,seq__45802);
var seq__45802__$1 = cljs.core.next.call(null,seq__45802);
var _ = first__45803;
var first__45803__$1 = cljs.core.first.call(null,seq__45802__$1);
var seq__45802__$2 = cljs.core.next.call(null,seq__45802__$1);
var image = first__45803__$1;
var first__45803__$2 = cljs.core.first.call(null,seq__45802__$2);
var seq__45802__$3 = cljs.core.next.call(null,seq__45802__$2);
var text = first__45803__$2;
var more = seq__45802__$3;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),["/img/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(image)].join('')], null)], null),(cljs.core.truth_(text)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.image-alt","div.image-alt",1599719339),text], null):null)], null);
}));
cljs.core._add_method.call(null,slidet_oamk.main.slide_element,new cljs.core.Keyword(null,"section","section",-300141526),(function (p__45804){
var vec__45805 = p__45804;
var seq__45806 = cljs.core.seq.call(null,vec__45805);
var first__45807 = cljs.core.first.call(null,seq__45806);
var seq__45806__$1 = cljs.core.next.call(null,seq__45806);
var _ = first__45807;
var sections = seq__45806__$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sections","div.sections",848314575),(function (){var iter__4652__auto__ = (function slidet_oamk$main$iter__45808(s__45809){
return (new cljs.core.LazySeq(null,(function (){
var s__45809__$1 = s__45809;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__45809__$1);
if(temp__5753__auto__){
var s__45809__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__45809__$2)){
var c__4650__auto__ = cljs.core.chunk_first.call(null,s__45809__$2);
var size__4651__auto__ = cljs.core.count.call(null,c__4650__auto__);
var b__45811 = cljs.core.chunk_buffer.call(null,size__4651__auto__);
if((function (){var i__45810 = (0);
while(true){
if((i__45810 < size__4651__auto__)){
var s = cljs.core._nth.call(null,c__4650__auto__,i__45810);
cljs.core.chunk_append.call(null,b__45811,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.section","div.section",-982365435),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slidet_oamk.main.slide_element,s], null)], null));

var G__45812 = (i__45810 + (1));
i__45810 = G__45812;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45811),slidet_oamk$main$iter__45808.call(null,cljs.core.chunk_rest.call(null,s__45809__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45811),null);
}
} else {
var s = cljs.core.first.call(null,s__45809__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.section","div.section",-982365435),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slidet_oamk.main.slide_element,s], null)], null),slidet_oamk$main$iter__45808.call(null,cljs.core.rest.call(null,s__45809__$2)));
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
slidet_oamk.main.slide_renderer = (function slidet_oamk$main$slide_renderer(content){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.slide-container","div.slide-container",2008610906),(function (){var iter__4652__auto__ = (function slidet_oamk$main$slide_renderer_$_iter__45813(s__45814){
return (new cljs.core.LazySeq(null,(function (){
var s__45814__$1 = s__45814;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__45814__$1);
if(temp__5753__auto__){
var s__45814__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__45814__$2)){
var c__4650__auto__ = cljs.core.chunk_first.call(null,s__45814__$2);
var size__4651__auto__ = cljs.core.count.call(null,c__4650__auto__);
var b__45816 = cljs.core.chunk_buffer.call(null,size__4651__auto__);
if((function (){var i__45815 = (0);
while(true){
if((i__45815 < size__4651__auto__)){
var elem = cljs.core._nth.call(null,c__4650__auto__,i__45815);
cljs.core.chunk_append.call(null,b__45816,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slidet_oamk.main.slide_element,elem], null));

var G__45817 = (i__45815 + (1));
i__45815 = G__45817;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45816),slidet_oamk$main$slide_renderer_$_iter__45813.call(null,cljs.core.chunk_rest.call(null,s__45814__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45816),null);
}
} else {
var elem = cljs.core.first.call(null,s__45814__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slidet_oamk.main.slide_element,elem], null),slidet_oamk$main$slide_renderer_$_iter__45813.call(null,cljs.core.rest.call(null,s__45814__$2)));
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
slidet_oamk.main.change_slide = (function slidet_oamk$main$change_slide(p__45818,path){
var map__45819 = p__45818;
var map__45819__$1 = cljs.core.__destructure_map.call(null,map__45819);
var app = map__45819__$1;
var current_slide = cljs.core.get.call(null,map__45819__$1,new cljs.core.Keyword(null,"current-slide","current-slide",105536463));
var nxt = cljs.core.get_in.call(null,cljs.core.deref.call(null,slidet_oamk.main.slides),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_slide,path], null));
cljs.core.println.call(null,nxt);

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
var content = cljs.core.get_in.call(null,cljs.core.deref.call(null,slides),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-slide","current-slide",105536463).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app)),new cljs.core.Keyword(null,"content","content",15833224)], null));
if((!((content == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slidet_oamk.main.slide_renderer,content], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [slidet_oamk.main.not_found], null);
}
});
slidet_oamk.main.update_slides = (function slidet_oamk$main$update_slides(ss){
return cljs.core.reset_BANG_.call(null,slidet_oamk.main.slides,new cljs.core.Keyword(null,"slides","slides",-1933049910).cljs$core$IFn$_invoke$arity$1(ss));
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
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.menu","div.menu",-175336694),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,local_state,cljs.core.update,new cljs.core.Keyword(null,"menu-open?","menu-open?",-1909849203),cljs.core.not);
})], null),"#"], null),(cljs.core.truth_(new cljs.core.Keyword(null,"menu-open?","menu-open?",-1909849203).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,local_state)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.menu-open","div.menu-open",1091880922),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,local_state,cljs.core.update,new cljs.core.Keyword(null,"show-debug?","show-debug?",-1274088080),cljs.core.not);
})], null),"Debug?"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return ajax.core.POST.call(null,"http://localhost:3005/api/slide",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"slide","slide",142491892),new cljs.core.Keyword(null,"current-slide","current-slide",105536463).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,slidet_oamk.main.slide_state))], null)], null));
})], null),"Refetch"], null)], null):null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"show-debug?","show-debug?",-1274088080).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,local_state)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.debug","div.debug",-1545042863),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.pr_str.call(null,cljs.core.deref.call(null,slidet_oamk.main.slides))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,slidet_oamk.main.slide_state)))], null)], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [slidet_oamk.main.presenter,slidet_oamk.main.slide_state,slidet_oamk.main.slides], null)], null);
});
});
slidet_oamk.main.slidet_main = (function slidet_oamk$main$slidet_main(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"slidet-main",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),slidet_oamk.main.get_all_slides,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),slidet_oamk.main.slide_container], null));
});
reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [slidet_oamk.main.slidet_main], null),document.getElementById("app"));

//# sourceMappingURL=main.js.map
