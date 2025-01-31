(function(){var P$=Clazz.newPackage("org.json"),p$1={},I$=[[0,'java.util.ArrayList','org.json.JSONPointer',['org.json.JSONPointer','.Builder'],'java.util.Collections','java.net.URLDecoder','StringBuilder','java.net.URLEncoder']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JSONPointer", function(){
Clazz.newInstance(this, arguments,0,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.refTokens=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'builder$', function () {
return Clazz.new_($I$(3));
}, 1);

Clazz.newMeth(C$, 'c$$S', function (pointer) {
C$.$init$.apply(this);
if (pointer == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["pointer cannot be null"]);
}if (pointer.isEmpty$() || pointer.equals$O("#") ) {
this.refTokens=$I$(4).emptyList$();
return;
}var refs;
if (pointer.startsWith$S("#/")) {
refs=pointer.substring$I(2);
try {
refs=$I$(5).decode$S$S(refs, "utf-8");
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.UnsupportedEncodingException")){
throw Clazz.new_(Clazz.load('RuntimeException').c$$Throwable,[e]);
} else {
throw e;
}
}
} else if (pointer.startsWith$S("/")) {
refs=pointer.substring$I(1);
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["a JSON pointer should start with \'/\' or \'#/\'"]);
}this.refTokens=Clazz.new_($I$(1));
var slashIdx=-1;
var prevSlashIdx=0;
do {
prevSlashIdx=slashIdx + 1;
slashIdx=refs.indexOf$I$I("/", prevSlashIdx);
if (prevSlashIdx == slashIdx || prevSlashIdx == refs.length$() ) {
this.refTokens.add$TE("");
} else if (slashIdx >= 0) {
var token=refs.substring$I$I(prevSlashIdx, slashIdx);
this.refTokens.add$TE(p$1.unescape$S.apply(this, [token]));
} else {
var token=refs.substring$I(prevSlashIdx);
this.refTokens.add$TE(p$1.unescape$S.apply(this, [token]));
}} while (slashIdx >= 0);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_List', function (refTokens) {
C$.$init$.apply(this);
this.refTokens=Clazz.new_($I$(1).c$$java_util_Collection,[refTokens]);
}, 1);

Clazz.newMeth(C$, 'unescape$S', function (token) {
return token.replace$CharSequence$CharSequence("~1", "/").replace$CharSequence$CharSequence("~0", "~").replace$CharSequence$CharSequence("\\\"", "\"").replace$CharSequence$CharSequence("\\\\", "\\");
}, p$1);

Clazz.newMeth(C$, 'queryFrom$O', function (document) {
if (this.refTokens.isEmpty$()) {
return document;
}var current=document;
for (var token, $token = this.refTokens.iterator$(); $token.hasNext$()&&((token=($token.next$())),1);) {
if (Clazz.instanceOf(current, "org.json.JSONObject")) {
current=(current).opt$S(p$1.unescape$S.apply(this, [token]));
} else if (Clazz.instanceOf(current, "org.json.JSONArray")) {
current=p$1.readByIndexToken$O$S.apply(this, [current, token]);
} else {
throw Clazz.new_(Clazz.load('org.json.JSONPointerException').c$$S,[String.format$S$OA("value [%s] is not an array or object therefore its key %s cannot be resolved", [current, token])]);
}}
return current;
});

Clazz.newMeth(C$, 'readByIndexToken$O$S', function (current, indexToken) {
try {
var index=Integer.parseInt$S(indexToken);
var currentArr=current;
if (index >= currentArr.length$()) {
throw Clazz.new_(Clazz.load('org.json.JSONPointerException').c$$S,[String.format$S$OA("index %d is out of bounds - the array has %d elements", [new Integer(index), new Integer(currentArr.length$())])]);
}try {
return currentArr.get$I(index);
} catch (e) {
if (Clazz.exceptionOf(e,"org.json.JSONException")){
throw Clazz.new_(Clazz.load('org.json.JSONPointerException').c$$S$Throwable,["Error reading value at index position " + index, e]);
} else {
throw e;
}
}
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
throw Clazz.new_(Clazz.load('org.json.JSONPointerException').c$$S$Throwable,[String.format$S$OA("%s is not an array index", [indexToken]), e]);
} else {
throw e;
}
}
}, p$1);

Clazz.newMeth(C$, 'toString', function () {
var rval=Clazz.new_($I$(6).c$$S,[""]);
for (var token, $token = this.refTokens.iterator$(); $token.hasNext$()&&((token=($token.next$())),1);) {
rval.append$C("/").append$S(p$1.escape$S.apply(this, [token]));
}
return rval.toString();
});

Clazz.newMeth(C$, 'escape$S', function (token) {
return token.replace$CharSequence$CharSequence("~", "~0").replace$CharSequence$CharSequence("/", "~1").replace$CharSequence$CharSequence("\\", "\\\\").replace$CharSequence$CharSequence("\"", "\\\"");
}, p$1);

Clazz.newMeth(C$, 'toURIFragment$', function () {
try {
var rval=Clazz.new_($I$(6).c$$S,["#"]);
for (var token, $token = this.refTokens.iterator$(); $token.hasNext$()&&((token=($token.next$())),1);) {
rval.append$C("/").append$S($I$(7).encode$S$S(token, "utf-8"));
}
return rval.toString();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.UnsupportedEncodingException")){
throw Clazz.new_(Clazz.load('RuntimeException').c$$Throwable,[e]);
} else {
throw e;
}
}
});
;
(function(){var C$=Clazz.newClass(P$.JSONPointer, "Builder", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.refTokens=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.refTokens=Clazz.new_($I$(1));
}, 1);

Clazz.newMeth(C$, 'build$', function () {
return Clazz.new_($I$(2).c$$java_util_List,[this.refTokens]);
});

Clazz.newMeth(C$, 'append$S', function (token) {
if (token == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["token cannot be null"]);
}this.refTokens.add$TE(token);
return this;
});

Clazz.newMeth(C$, 'append$I', function (arrayIndex) {
this.refTokens.add$TE(String.valueOf$I(arrayIndex));
return this;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:31 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
