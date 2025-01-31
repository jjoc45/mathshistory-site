(function(){var P$=Clazz.newPackage("sun.nio.cs"),I$=[[0,'java.nio.charset.CoderResult']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Surrogate", function(){
Clazz.newInstance(this, arguments,0,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'isHigh$I', function (c) {
return (55296 <= c ) && (c <= 56319 ) ;
}, 1);

Clazz.newMeth(C$, 'isLow$I', function (c) {
return (56320 <= c ) && (c <= 57343 ) ;
}, 1);

Clazz.newMeth(C$, 'is$I', function (c) {
return (55296 <= c ) && (c <= 57343 ) ;
}, 1);

Clazz.newMeth(C$, 'neededFor$I', function (uc) {
return Character.isSupplementaryCodePoint$I(uc);
}, 1);

Clazz.newMeth(C$, 'high$I', function (uc) {
Clazz.assert(C$, this, function(){return Character.isSupplementaryCodePoint$I(uc)});
return Character.highSurrogate$I(uc);
}, 1);

Clazz.newMeth(C$, 'low$I', function (uc) {
Clazz.assert(C$, this, function(){return Character.isSupplementaryCodePoint$I(uc)});
return Character.lowSurrogate$I(uc);
}, 1);

Clazz.newMeth(C$, 'toUCS4$C$C', function (c, d) {
Clazz.assert(C$, this, function(){return Character.isHighSurrogate$C(c) && Character.isLowSurrogate$C(d) });
return Character.toCodePoint$C$C(c, d);
}, 1);
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
;
(function(){var C$=Clazz.newClass(P$.Surrogate, "Parser", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.character=0;
this.error=null;
this.isPair=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.error=$I$(1).UNDERFLOW;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'character$', function () {
Clazz.assert(C$, this, function(){return (this.error == null )});
return this.character;
});

Clazz.newMeth(C$, 'isPair$', function () {
Clazz.assert(C$, this, function(){return (this.error == null )});
return this.isPair;
});

Clazz.newMeth(C$, 'increment$', function () {
Clazz.assert(C$, this, function(){return (this.error == null )});
return this.isPair ? 2 : 1;
});

Clazz.newMeth(C$, 'error$', function () {
Clazz.assert(C$, this, function(){return (this.error != null )});
return this.error;
});

Clazz.newMeth(C$, 'unmappableResult$', function () {
Clazz.assert(C$, this, function(){return (this.error == null )});
return $I$(1).unmappableForLength$I(this.isPair ? 2 : 1);
});

Clazz.newMeth(C$, 'parse$C$java_nio_CharBuffer', function (c, $in) {
if (Character.isHighSurrogate$C(c)) {
if (!$in.hasRemaining$()) {
this.error=$I$(1).UNDERFLOW;
return -1;
}var d=$in.get$();
if (Character.isLowSurrogate$C(d)) {
this.character=Character.toCodePoint$C$C(c, d);
this.isPair=true;
this.error=null;
return this.character;
}this.error=$I$(1).malformedForLength$I(1);
return -1;
}if (Character.isLowSurrogate$C(c)) {
this.error=$I$(1).malformedForLength$I(1);
return -1;
}this.character=c.$c();
this.isPair=false;
this.error=null;
return this.character;
});

Clazz.newMeth(C$, 'parse$C$CA$I$I', function (c, ia, ip, il) {
Clazz.assert(C$, this, function(){return (ia[ip] == c)});
if (Character.isHighSurrogate$C(c)) {
if (il - ip < 2) {
this.error=$I$(1).UNDERFLOW;
return -1;
}var d=ia[ip + 1];
if (Character.isLowSurrogate$C(d)) {
this.character=Character.toCodePoint$C$C(c, d);
this.isPair=true;
this.error=null;
return this.character;
}this.error=$I$(1).malformedForLength$I(1);
return -1;
}if (Character.isLowSurrogate$C(c)) {
this.error=$I$(1).malformedForLength$I(1);
return -1;
}this.character=c.$c();
this.isPair=false;
this.error=null;
return this.character;
});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Surrogate, "Generator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.error=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.error=$I$(1).OVERFLOW;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'error$', function () {
Clazz.assert(C$, this, function(){return this.error != null });
return this.error;
});

Clazz.newMeth(C$, 'generate$I$I$java_nio_CharBuffer', function (uc, len, dst) {
if (Character.isBmpCodePoint$I(uc)) {
var c=String.fromCharCode(uc);
if (Character.isSurrogate$C(c)) {
this.error=$I$(1).malformedForLength$I(len);
return -1;
}if (dst.remaining$() < 1) {
this.error=$I$(1).OVERFLOW;
return -1;
}dst.put$C(c);
this.error=null;
return 1;
} else if (Character.isValidCodePoint$I(uc)) {
if (dst.remaining$() < 2) {
this.error=$I$(1).OVERFLOW;
return -1;
}dst.put$C(Character.highSurrogate$I(uc));
dst.put$C(Character.lowSurrogate$I(uc));
this.error=null;
return 2;
} else {
this.error=$I$(1).unmappableForLength$I(len);
return -1;
}});

Clazz.newMeth(C$, 'generate$I$I$CA$I$I', function (uc, len, da, dp, dl) {
if (Character.isBmpCodePoint$I(uc)) {
var c=String.fromCharCode(uc);
if (Character.isSurrogate$C(c)) {
this.error=$I$(1).malformedForLength$I(len);
return -1;
}if (dl - dp < 1) {
this.error=$I$(1).OVERFLOW;
return -1;
}da[dp]=c;
this.error=null;
return 1;
} else if (Character.isValidCodePoint$I(uc)) {
if (dl - dp < 2) {
this.error=$I$(1).OVERFLOW;
return -1;
}da[dp]=Character.highSurrogate$I(uc);
da[dp + 1]=Character.lowSurrogate$I(uc);
this.error=null;
return 2;
} else {
this.error=$I$(1).unmappableForLength$I(len);
return -1;
}});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:38 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
