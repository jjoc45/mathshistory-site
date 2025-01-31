(function(){var P$=Clazz.newPackage("sun.nio.cs"),p$1={},p$2={},I$=[[0,'java.nio.charset.CoderResult',['sun.nio.cs.Surrogate','.Parser'],'sun.nio.cs.StandardCharsets',['sun.nio.cs.US_ASCII','.Decoder'],['sun.nio.cs.US_ASCII','.Encoder']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "US_ASCII", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.nio.charset.Charset', 'sun.nio.cs.HistoricallyNamedCharset');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$$S$SA.apply(this, ["US-ASCII", $I$(3).aliases_US_ASCII]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'historicalName$', function () {
return "ASCII";
});

Clazz.newMeth(C$, 'contains$java_nio_charset_Charset', function (cs) {
return (Clazz.instanceOf(cs, "sun.nio.cs.US_ASCII"));
});

Clazz.newMeth(C$, 'newDecoder$', function () {
return Clazz.new_($I$(4).c$$java_nio_charset_Charset,[this]);
});

Clazz.newMeth(C$, 'newEncoder$', function () {
return Clazz.new_($I$(5).c$$java_nio_charset_Charset,[this]);
});
;
(function(){var C$=Clazz.newClass(P$.US_ASCII, "Decoder", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.nio.charset.CharsetDecoder', 'sun.nio.cs.ArrayDecoder');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.repl='\0';
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.repl="\ufffd";
}, 1);

Clazz.newMeth(C$, 'c$$java_nio_charset_Charset', function (cs) {
C$.superclazz.c$$java_nio_charset_Charset$F$F.apply(this, [cs, 1.0, 1.0]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'decodeArrayLoop$java_nio_ByteBuffer$java_nio_CharBuffer', function (src, dst) {
var sa=src.array$();
var sp=src.arrayOffset$() + src.position$();
var sl=src.arrayOffset$() + src.limit$();
Clazz.assert(C$, this, function(){return (sp <= sl)});
sp=(sp <= sl ? sp : sl);
var da=dst.array$();
var dp=dst.arrayOffset$() + dst.position$();
var dl=dst.arrayOffset$() + dst.limit$();
Clazz.assert(C$, this, function(){return (dp <= dl)});
dp=(dp <= dl ? dp : dl);
try {
while (sp < sl){
var b=($b$[0] = sa[sp], $b$[0]);
if (b >= 0) {
if (dp >= dl) return $I$(1).OVERFLOW;
da[dp++]=String.fromCharCode(b);
sp++;
continue;
}return $I$(1).malformedForLength$I(1);
}
return $I$(1).UNDERFLOW;
} finally {
src.position$I(sp - src.arrayOffset$());
dst.position$I(dp - dst.arrayOffset$());
}
}, p$1);

Clazz.newMeth(C$, 'decodeBufferLoop$java_nio_ByteBuffer$java_nio_CharBuffer', function (src, dst) {
var mark=src.position$();
try {
while (src.hasRemaining$()){
var b=($b$[0] = src.get$(), $b$[0]);
if (b >= 0) {
if (!dst.hasRemaining$()) return $I$(1).OVERFLOW;
dst.put$C(String.fromCharCode(b));
mark++;
continue;
}return $I$(1).malformedForLength$I(1);
}
return $I$(1).UNDERFLOW;
} finally {
src.position$I(mark);
}
}, p$1);

Clazz.newMeth(C$, 'decodeLoop$java_nio_ByteBuffer$java_nio_CharBuffer', function (src, dst) {
if (src.hasArray$() && dst.hasArray$() ) return p$1.decodeArrayLoop$java_nio_ByteBuffer$java_nio_CharBuffer.apply(this, [src, dst]);
 else return p$1.decodeBufferLoop$java_nio_ByteBuffer$java_nio_CharBuffer.apply(this, [src, dst]);
});

Clazz.newMeth(C$, 'implReplaceWith$S', function (newReplacement) {
this.repl=newReplacement.charAt$I(0);
});

Clazz.newMeth(C$, ['decode$BA$I$I$CA','decode$'], function (src, sp, len, dst) {
var dp=0;
len=Math.min(len, dst.length);
while (dp < len){
var b=($b$[0] = src[sp++], $b$[0]);
if (b >= 0) dst[dp++]=String.fromCharCode(b);
 else dst[dp++]=this.repl;
}
return dp;
});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.US_ASCII, "Encoder", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.nio.charset.CharsetEncoder', 'sun.nio.cs.ArrayEncoder');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.sgp=null;
this.repl=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.sgp=Clazz.new_($I$(2));
this.repl=($b$[0] = 63, $b$[0]);
}, 1);

Clazz.newMeth(C$, 'c$$java_nio_charset_Charset', function (cs) {
C$.superclazz.c$$java_nio_charset_Charset$F$F.apply(this, [cs, 1.0, 1.0]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'canEncode$C', function (c) {
return c.$c() < 128 ;
});

Clazz.newMeth(C$, 'isLegalReplacement$BA', function (repl) {
return (repl.length == 1 && repl[0] >= 0 ) || C$.superclazz.prototype.isLegalReplacement$BA.apply(this, [repl]) ;
});

Clazz.newMeth(C$, 'encodeArrayLoop$java_nio_CharBuffer$java_nio_ByteBuffer', function (src, dst) {
var sa=src.array$();
var sp=src.arrayOffset$() + src.position$();
var sl=src.arrayOffset$() + src.limit$();
Clazz.assert(C$, this, function(){return (sp <= sl)});
sp=(sp <= sl ? sp : sl);
var da=dst.array$();
var dp=dst.arrayOffset$() + dst.position$();
var dl=dst.arrayOffset$() + dst.limit$();
Clazz.assert(C$, this, function(){return (dp <= dl)});
dp=(dp <= dl ? dp : dl);
try {
while (sp < sl){
var c=sa[sp];
if (c.$c() < 128 ) {
if (dp >= dl) return $I$(1).OVERFLOW;
da[dp]=((c.$c()|0)|0);
sp++;
dp++;
continue;
}if (this.sgp.parse$C$CA$I$I(c, sa, sp, sl) < 0) return this.sgp.error$();
return this.sgp.unmappableResult$();
}
return $I$(1).UNDERFLOW;
} finally {
src.position$I(sp - src.arrayOffset$());
dst.position$I(dp - dst.arrayOffset$());
}
}, p$2);

Clazz.newMeth(C$, 'encodeBufferLoop$java_nio_CharBuffer$java_nio_ByteBuffer', function (src, dst) {
var mark=src.position$();
try {
while (src.hasRemaining$()){
var c=src.get$();
if (c.$c() < 128 ) {
if (!dst.hasRemaining$()) return $I$(1).OVERFLOW;
dst.put$B(($b$[0] = (c.$c()|0), $b$[0]));
mark++;
continue;
}if (this.sgp.parse$C$java_nio_CharBuffer(c, src) < 0) return this.sgp.error$();
return this.sgp.unmappableResult$();
}
return $I$(1).UNDERFLOW;
} finally {
src.position$I(mark);
}
}, p$2);

Clazz.newMeth(C$, 'encodeLoop$java_nio_CharBuffer$java_nio_ByteBuffer', function (src, dst) {
if (src.hasArray$() && dst.hasArray$() ) return p$2.encodeArrayLoop$java_nio_CharBuffer$java_nio_ByteBuffer.apply(this, [src, dst]);
 else return p$2.encodeBufferLoop$java_nio_CharBuffer$java_nio_ByteBuffer.apply(this, [src, dst]);
});

Clazz.newMeth(C$, 'implReplaceWith$BA', function (newReplacement) {
this.repl=($b$[0] = newReplacement[0], $b$[0]);
});

Clazz.newMeth(C$, ['encode$CA$I$I$BA','encode$'], function (src, sp, len, dst) {
var dp=0;
var sl=sp + Math.min(len, dst.length);
while (sp < sl){
var c=src[sp++];
if (c.$c() < 128 ) {
dst[dp++]=((c.$c()|0)|0);
continue;
}if (Character.isHighSurrogate$C(c) && sp < sl  && Character.isLowSurrogate$C(src[sp]) ) {
if (len > dst.length) {
sl++;
len--;
}sp++;
}dst[dp++]=(this.repl|0);
}
return dp;
});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:38 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
