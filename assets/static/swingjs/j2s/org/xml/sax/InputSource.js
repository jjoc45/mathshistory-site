(function(){var P$=Clazz.newPackage("org.xml.sax"),I$=[];
var C$=Clazz.newClass(P$, "InputSource");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.publicId=null;
this.systemId=null;
this.byteStream=null;
this.encoding=null;
this.characterStream=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S', function (systemId) {
C$.$init$.apply(this);
this.setSystemId$S(systemId);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_InputStream', function (byteStream) {
C$.$init$.apply(this);
this.setByteStream$java_io_InputStream(byteStream);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_Reader', function (characterStream) {
C$.$init$.apply(this);
this.setCharacterStream$java_io_Reader(characterStream);
}, 1);

Clazz.newMeth(C$, 'setPublicId$S', function (publicId) {
this.publicId=publicId;
});

Clazz.newMeth(C$, 'getPublicId$', function () {
return this.publicId;
});

Clazz.newMeth(C$, 'setSystemId$S', function (systemId) {
this.systemId=systemId;
});

Clazz.newMeth(C$, 'getSystemId$', function () {
return this.systemId;
});

Clazz.newMeth(C$, 'setByteStream$java_io_InputStream', function (byteStream) {
this.byteStream=byteStream;
});

Clazz.newMeth(C$, 'getByteStream$', function () {
return this.byteStream;
});

Clazz.newMeth(C$, 'setEncoding$S', function (encoding) {
this.encoding=encoding;
});

Clazz.newMeth(C$, 'getEncoding$', function () {
return this.encoding;
});

Clazz.newMeth(C$, 'setCharacterStream$java_io_Reader', function (characterStream) {
this.characterStream=characterStream;
});

Clazz.newMeth(C$, 'getCharacterStream$', function () {
return this.characterStream;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:32 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
