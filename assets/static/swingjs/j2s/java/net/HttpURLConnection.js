(function(){var P$=Clazz.newPackage("java.net"),I$=[[0,'java.net.NetPermission']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "HttpURLConnection", null, 'java.net.URLConnection');
C$.followRedirects=false;
C$.methods=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.followRedirects=true;
C$.methods=Clazz.array(String, -1, ["GET", "POST", "HEAD", "OPTIONS", "PUT", "DELETE", "TRACE"]);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.method=null;
this.chunkLength=0;
this.fixedContentLength=0;
this.fixedContentLengthLong=0;
this.responseCode=0;
this.responseMessage=null;
this.instanceFollowRedirects=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.method="GET";
this.chunkLength=-1;
this.fixedContentLength=-1;
this.fixedContentLengthLong=-1;
this.responseCode=-1;
this.responseMessage=null;
this.instanceFollowRedirects=C$.followRedirects;
}, 1);

Clazz.newMeth(C$, 'getHeaderFieldKey$I', function (n) {
return null;
});

Clazz.newMeth(C$, 'setFixedLengthStreamingMode$I', function (contentLength) {
if (this.connected) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Already connected"]);
}if (this.chunkLength != -1) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Chunked encoding streaming mode set"]);
}if (contentLength < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["invalid content length"]);
}this.fixedContentLength=contentLength;
});

Clazz.newMeth(C$, 'setFixedLengthStreamingMode$J', function (contentLength) {
if (this.connected) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Already connected"]);
}if (this.chunkLength != -1) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Chunked encoding streaming mode set"]);
}if (contentLength < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["invalid content length"]);
}this.fixedContentLengthLong=contentLength;
});

Clazz.newMeth(C$, 'setChunkedStreamingMode$I', function (chunklen) {
if (this.connected) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Can\'t set streaming mode: already connected"]);
}if (this.fixedContentLength != -1 || this.fixedContentLengthLong != -1 ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Fixed length streaming mode set"]);
}this.chunkLength=chunklen <= 0 ? 4096 : chunklen;
});

Clazz.newMeth(C$, 'getHeaderField$I', function (n) {
return null;
});

Clazz.newMeth(C$, 'c$$java_net_URL', function (u) {
C$.superclazz.c$$java_net_URL.apply(this, [u]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setFollowRedirects$Z', function (set) {
var sec=System.getSecurityManager$();
if (sec != null ) {
sec.checkSetFactory$();
}C$.followRedirects=set;
}, 1);

Clazz.newMeth(C$, 'getFollowRedirects$', function () {
return C$.followRedirects;
}, 1);

Clazz.newMeth(C$, 'setInstanceFollowRedirects$Z', function (followRedirects) {
this.instanceFollowRedirects=followRedirects;
});

Clazz.newMeth(C$, 'getInstanceFollowRedirects$', function () {
return this.instanceFollowRedirects;
});

Clazz.newMeth(C$, 'setRequestMethod$S', function (method) {
if (this.connected) {
throw Clazz.new_(Clazz.load('java.net.ProtocolException').c$$S,["Can\'t reset method: already connected"]);
}for (var i=0; i < C$.methods.length; i++) {
if (C$.methods[i].equals$O(method)) {
if (method.equals$O("TRACE")) {
var s=System.getSecurityManager$();
if (s != null ) {
s.checkPermission$java_security_Permission(Clazz.new_($I$(1).c$$S,["allowHttpTrace"]));
}}this.method=method;
return;
}}
throw Clazz.new_(Clazz.load('java.net.ProtocolException').c$$S,["Invalid HTTP method: " + method]);
});

Clazz.newMeth(C$, 'getRequestMethod$', function () {
return this.method;
});

Clazz.newMeth(C$, 'getResponseCode$', function () {
if (this.responseCode != -1) {
return this.responseCode;
}var exc=null;
try {
this.getInputStream$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return this.responseCode=404;
} else {
throw e;
}
}
var statusLine=this.getHeaderField$I(0);
if (statusLine == null ) {
if (exc != null ) {
if (Clazz.instanceOf(exc, "java.lang.RuntimeException")) throw exc;
 else throw exc;
}return -1;
}if (statusLine.startsWith$S("HTTP/1.")) {
var codePos=statusLine.indexOf$I(" ");
if (codePos > 0) {
var phrasePos=statusLine.indexOf$I$I(" ", codePos + 1);
if (phrasePos > 0 && phrasePos < statusLine.length$() ) {
this.responseMessage=statusLine.substring$I(phrasePos + 1);
}if (phrasePos < 0) phrasePos=statusLine.length$();
try {
this.responseCode=Integer.parseInt$S(statusLine.substring$I$I(codePos + 1, phrasePos));
return this.responseCode;
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
} else {
throw e;
}
}
}}return -1;
});

Clazz.newMeth(C$, 'getResponseMessage$', function () {
this.getResponseCode$();
return this.responseMessage;
});

Clazz.newMeth(C$, 'getHeaderFieldDate$S$J', function (name, Default) {
return Default;
});

Clazz.newMeth(C$, 'getErrorStream$', function () {
return null;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:37 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
