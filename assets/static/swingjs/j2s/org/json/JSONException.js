(function(){var P$=Clazz.newPackage("org.json"),I$=[];
var C$=Clazz.newClass(P$, "JSONException", null, 'RuntimeException');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S', function (message) {
C$.superclazz.c$$S.apply(this, [message]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S$Throwable', function (message, cause) {
C$.superclazz.c$$S$Throwable.apply(this, [message, cause]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$Throwable', function (cause) {
C$.superclazz.c$$S$Throwable.apply(this, [cause.getMessage$(), cause]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:31 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
