(function(){var P$=java.io,I$=[];
var C$=Clazz.newClass(P$, "PipedOutputStream", null, 'java.io.OutputStream');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.sink=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_io_PipedInputStream', function (snk) {
Clazz.super_(C$, this,1);
this.connect$java_io_PipedInputStream(snk);
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, 'connect$java_io_PipedInputStream', function (snk) {
if (snk == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
} else if (this.sink != null  || snk.connected ) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Already connected"]);
}this.sink=snk;
snk.$in=-1;
snk.out=0;
snk.connected=true;
});

Clazz.newMeth(C$, 'write$I', function (b) {
if (this.sink == null ) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Pipe not connected"]);
}this.sink.receive$I(b);
});

Clazz.newMeth(C$, 'write$BA$I$I', function (b, off, len) {
if (this.sink == null ) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Pipe not connected"]);
} else if (b == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
} else if ((off < 0) || (off > b.length) || (len < 0) || ((off + len) > b.length) || ((off + len) < 0)  ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException'));
} else if (len == 0) {
return;
}this.sink.receive$BA$I$I(b, off, len);
});

Clazz.newMeth(C$, 'flush$', function () {
if (this.sink != null ) {
{
this.sink.notifyAll$();
}}});

Clazz.newMeth(C$, 'close$', function () {
if (this.sink != null ) {
this.sink.receivedLast$();
}});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:34 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
