(function(){var P$=java.lang,I$=[];
var C$=Clazz.newClass(P$, "ArrayIndexOutOfBoundsException", null, 'IndexOutOfBoundsException');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$.apply(this, []);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$I', function (index) {
C$.superclazz.c$$S.apply(this, ["Array index out of range: " + index]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S', function (detailMessage) {
C$.superclazz.c$$S.apply(this, [detailMessage]);
C$.$init$.apply(this);
}, 1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:34 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
