(function(){var P$=Clazz.newPackage("javajs.util"),p$1={},I$=[[0,'javajs.util.T3']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "M4", null, 'javajs.util.M34');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.m03=0;
this.m13=0;
this.m23=0;
this.m30=0;
this.m31=0;
this.m32=0;
this.m33=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.m33=0;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, 'newA16$FA', function (v) {
var m=Clazz.new_(C$);
m.m00=v[0];
m.m01=v[1];
m.m02=v[2];
m.m03=v[3];
m.m10=v[4];
m.m11=v[5];
m.m12=v[6];
m.m13=v[7];
m.m20=v[8];
m.m21=v[9];
m.m22=v[10];
m.m23=v[11];
m.m30=v[12];
m.m31=v[13];
m.m32=v[14];
m.m33=v[15];
return m;
}, 1);

Clazz.newMeth(C$, 'newM4$javajs_util_M4', function (m1) {
var m=Clazz.new_(C$);
if (m1 == null ) {
m.setIdentity$();
return m;
}m.setToM3$javajs_util_M34(m1);
m.m03=m1.m03;
m.m13=m1.m13;
m.m23=m1.m23;
m.m30=m1.m30;
m.m31=m1.m31;
m.m32=m1.m32;
m.m33=m1.m33;
return m;
}, 1);

Clazz.newMeth(C$, 'newMV$javajs_util_M3$javajs_util_T3', function (m1, t) {
var m=Clazz.new_(C$);
m.setMV$javajs_util_M3$javajs_util_T3(m1, t);
return m;
}, 1);

Clazz.newMeth(C$, 'setZero$', function () {
this.clear33$();
this.m03=this.m13=this.m23=this.m30=this.m31=this.m32=this.m33=0.0;
});

Clazz.newMeth(C$, 'setIdentity$', function () {
this.setZero$();
this.m00=this.m11=this.m22=this.m33=1.0;
});

Clazz.newMeth(C$, 'setM4$javajs_util_M4', function (m1) {
this.setM33$javajs_util_M34(m1);
this.m03=m1.m03;
this.m13=m1.m13;
this.m23=m1.m23;
this.m30=m1.m30;
this.m31=m1.m31;
this.m32=m1.m32;
this.m33=m1.m33;
return this;
});

Clazz.newMeth(C$, 'setMV$javajs_util_M3$javajs_util_T3', function (m1, t) {
this.setM33$javajs_util_M34(m1);
this.setTranslation$javajs_util_T3(t);
this.m33=1;
});

Clazz.newMeth(C$, 'setToM3$javajs_util_M34', function (m1) {
this.setM33$javajs_util_M34(m1);
this.m03=this.m13=this.m23=this.m30=this.m31=this.m32=0.0;
this.m33=1.0;
});

Clazz.newMeth(C$, 'setToAA$javajs_util_A4', function (a) {
this.setIdentity$();
this.setAA33$javajs_util_A4(a);
});

Clazz.newMeth(C$, 'setA$FA', function (m) {
this.m00=m[0];
this.m01=m[1];
this.m02=m[2];
this.m03=m[3];
this.m10=m[4];
this.m11=m[5];
this.m12=m[6];
this.m13=m[7];
this.m20=m[8];
this.m21=m[9];
this.m22=m[10];
this.m23=m[11];
this.m30=m[12];
this.m31=m[13];
this.m32=m[14];
this.m33=m[15];
});

Clazz.newMeth(C$, 'setTranslation$javajs_util_T3', function (trans) {
this.m03=trans.x;
this.m13=trans.y;
this.m23=trans.z;
});

Clazz.newMeth(C$, 'setElement$I$I$F', function (row, col, v) {
if (row < 3 && col < 3 ) {
this.set33$I$I$F(row, col, v);
return;
}if (row > 3 || col > 3 ) this.err$();
switch (row) {
case 0:
this.m03=v;
return;
case 1:
this.m13=v;
return;
case 2:
this.m23=v;
return;
}
switch (col) {
case 0:
this.m30=v;
return;
case 1:
this.m31=v;
return;
case 2:
this.m32=v;
return;
case 3:
this.m33=v;
return;
}
});

Clazz.newMeth(C$, 'getElement$I$I', function (row, col) {
if (row < 3 && col < 3 ) return this.get33$I$I(row, col);
if (row > 3 || col > 3 ) {
this.err$();
return 0;
}switch (row) {
case 0:
return this.m03;
case 1:
return this.m13;
case 2:
return this.m23;
default:
switch (col) {
case 0:
return this.m30;
case 1:
return this.m31;
case 2:
return this.m32;
default:
return this.m33;
}
}
});

Clazz.newMeth(C$, 'getTranslation$javajs_util_T3', function (trans) {
trans.x=this.m03;
trans.y=this.m13;
trans.z=this.m23;
});

Clazz.newMeth(C$, 'getRotationScale$javajs_util_M3', function (m1) {
m1.m00=this.m00;
m1.m01=this.m01;
m1.m02=this.m02;
m1.m10=this.m10;
m1.m11=this.m11;
m1.m12=this.m12;
m1.m20=this.m20;
m1.m21=this.m21;
m1.m22=this.m22;
});

Clazz.newMeth(C$, 'setRotationScale$javajs_util_M3', function (m1) {
this.m00=m1.m00;
this.m01=m1.m01;
this.m02=m1.m02;
this.m10=m1.m10;
this.m11=m1.m11;
this.m12=m1.m12;
this.m20=m1.m20;
this.m21=m1.m21;
this.m22=m1.m22;
});

Clazz.newMeth(C$, 'setRowA$I$FA', function (row, v) {
if (row < 3) this.setRow33$I$FA(row, v);
switch (row) {
case 0:
this.m03=v[3];
return;
case 1:
this.m13=v[3];
return;
case 2:
this.m23=v[3];
return;
case 3:
this.m30=v[0];
this.m31=v[1];
this.m32=v[2];
this.m33=v[3];
return;
}
this.err$();
});

Clazz.newMeth(C$, 'getRow$I$FA', function (row, v) {
if (row < 3) this.getRow33$I$FA(row, v);
switch (row) {
case 0:
v[3]=this.m03;
return;
case 1:
v[3]=this.m13;
return;
case 2:
v[3]=this.m23;
return;
case 3:
v[0]=this.m30;
v[1]=this.m31;
v[2]=this.m32;
v[3]=this.m33;
return;
}
this.err$();
});

Clazz.newMeth(C$, 'setColumn4$I$F$F$F$F', function (column, x, y, z, w) {
if (column == 0) {
this.m00=x;
this.m10=y;
this.m20=z;
this.m30=w;
} else if (column == 1) {
this.m01=x;
this.m11=y;
this.m21=z;
this.m31=w;
} else if (column == 2) {
this.m02=x;
this.m12=y;
this.m22=z;
this.m32=w;
} else if (column == 3) {
this.m03=x;
this.m13=y;
this.m23=z;
this.m33=w;
} else {
this.err$();
}});

Clazz.newMeth(C$, 'setColumnA$I$FA', function (column, v) {
if (column < 3) this.setColumn33$I$FA(column, v);
switch (column) {
case 0:
this.m30=v[3];
return;
case 1:
this.m31=v[3];
return;
case 2:
this.m32=v[3];
return;
case 3:
this.m03=v[0];
this.m13=v[1];
this.m23=v[2];
this.m33=v[3];
return;
default:
this.err$();
}
});

Clazz.newMeth(C$, 'getColumn$I$FA', function (column, v) {
if (column < 3) this.getColumn33$I$FA(column, v);
switch (column) {
case 0:
v[3]=this.m30;
return;
case 1:
v[3]=this.m31;
return;
case 2:
v[3]=this.m32;
return;
case 3:
v[0]=this.m03;
v[1]=this.m13;
v[2]=this.m23;
v[3]=this.m33;
return;
default:
this.err$();
}
});

Clazz.newMeth(C$, 'sub$javajs_util_M4', function (m1) {
this.sub33$javajs_util_M34(m1);
this.m03 -= m1.m03;
this.m13 -= m1.m13;
this.m23 -= m1.m23;
this.m30 -= m1.m30;
this.m31 -= m1.m31;
this.m32 -= m1.m32;
this.m33 -= m1.m33;
});

Clazz.newMeth(C$, 'transpose$', function () {
this.transpose33$();
var tmp=this.m03;
this.m03=this.m30;
this.m30=tmp;
tmp=this.m13;
this.m13=this.m31;
this.m31=tmp;
tmp=this.m23;
this.m23=this.m32;
this.m32=tmp;
});

Clazz.newMeth(C$, 'invert$', function () {
var s=this.determinant4$();
if (s == 0.0 ) return this;
s=1 / s;
p$1.set$F$F$F$F$F$F$F$F$F$F$F$F$F$F$F$F.apply(this, [this.m11 * (this.m22 * this.m33 - this.m23 * this.m32) + this.m12 * (this.m23 * this.m31 - this.m21 * this.m33) + this.m13 * (this.m21 * this.m32 - this.m22 * this.m31), this.m21 * (this.m02 * this.m33 - this.m03 * this.m32) + this.m22 * (this.m03 * this.m31 - this.m01 * this.m33) + this.m23 * (this.m01 * this.m32 - this.m02 * this.m31), this.m31 * (this.m02 * this.m13 - this.m03 * this.m12) + this.m32 * (this.m03 * this.m11 - this.m01 * this.m13) + this.m33 * (this.m01 * this.m12 - this.m02 * this.m11), this.m01 * (this.m13 * this.m22 - this.m12 * this.m23) + this.m02 * (this.m11 * this.m23 - this.m13 * this.m21) + this.m03 * (this.m12 * this.m21 - this.m11 * this.m22), this.m12 * (this.m20 * this.m33 - this.m23 * this.m30) + this.m13 * (this.m22 * this.m30 - this.m20 * this.m32) + this.m10 * (this.m23 * this.m32 - this.m22 * this.m33), this.m22 * (this.m00 * this.m33 - this.m03 * this.m30) + this.m23 * (this.m02 * this.m30 - this.m00 * this.m32) + this.m20 * (this.m03 * this.m32 - this.m02 * this.m33), this.m32 * (this.m00 * this.m13 - this.m03 * this.m10) + this.m33 * (this.m02 * this.m10 - this.m00 * this.m12) + this.m30 * (this.m03 * this.m12 - this.m02 * this.m13), this.m02 * (this.m13 * this.m20 - this.m10 * this.m23) + this.m03 * (this.m10 * this.m22 - this.m12 * this.m20) + this.m00 * (this.m12 * this.m23 - this.m13 * this.m22), this.m13 * (this.m20 * this.m31 - this.m21 * this.m30) + this.m10 * (this.m21 * this.m33 - this.m23 * this.m31) + this.m11 * (this.m23 * this.m30 - this.m20 * this.m33), this.m23 * (this.m00 * this.m31 - this.m01 * this.m30) + this.m20 * (this.m01 * this.m33 - this.m03 * this.m31) + this.m21 * (this.m03 * this.m30 - this.m00 * this.m33), this.m33 * (this.m00 * this.m11 - this.m01 * this.m10) + this.m30 * (this.m01 * this.m13 - this.m03 * this.m11) + this.m31 * (this.m03 * this.m10 - this.m00 * this.m13), this.m03 * (this.m11 * this.m20 - this.m10 * this.m21) + this.m00 * (this.m13 * this.m21 - this.m11 * this.m23) + this.m01 * (this.m10 * this.m23 - this.m13 * this.m20), this.m10 * (this.m22 * this.m31 - this.m21 * this.m32) + this.m11 * (this.m20 * this.m32 - this.m22 * this.m30) + this.m12 * (this.m21 * this.m30 - this.m20 * this.m31), this.m20 * (this.m02 * this.m31 - this.m01 * this.m32) + this.m21 * (this.m00 * this.m32 - this.m02 * this.m30) + this.m22 * (this.m01 * this.m30 - this.m00 * this.m31), this.m30 * (this.m02 * this.m11 - this.m01 * this.m12) + this.m31 * (this.m00 * this.m12 - this.m02 * this.m10) + this.m32 * (this.m01 * this.m10 - this.m00 * this.m11), this.m00 * (this.m11 * this.m22 - this.m12 * this.m21) + this.m01 * (this.m12 * this.m20 - this.m10 * this.m22) + this.m02 * (this.m10 * this.m21 - this.m11 * this.m20)]);
this.scale$F(s);
return this;
});

Clazz.newMeth(C$, 'set$F$F$F$F$F$F$F$F$F$F$F$F$F$F$F$F', function (m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
this.m00=m00;
this.m01=m01;
this.m02=m02;
this.m03=m03;
this.m10=m10;
this.m11=m11;
this.m12=m12;
this.m13=m13;
this.m20=m20;
this.m21=m21;
this.m22=m22;
this.m23=m23;
this.m30=m30;
this.m31=m31;
this.m32=m32;
this.m33=m33;
}, p$1);

Clazz.newMeth(C$, 'determinant4$', function () {
return (this.m00 * this.m11 - this.m01 * this.m10) * (this.m22 * this.m33 - this.m23 * this.m32) - (this.m00 * this.m12 - this.m02 * this.m10) * (this.m21 * this.m33 - this.m23 * this.m31) + (this.m00 * this.m13 - this.m03 * this.m10) * (this.m21 * this.m32 - this.m22 * this.m31) + (this.m01 * this.m12 - this.m02 * this.m11) * (this.m20 * this.m33 - this.m23 * this.m30) - (this.m01 * this.m13 - this.m03 * this.m11) * (this.m20 * this.m32 - this.m22 * this.m30) + (this.m02 * this.m13 - this.m03 * this.m12) * (this.m20 * this.m31 - this.m21 * this.m30);
});

Clazz.newMeth(C$, 'scale$F', function (scalar) {
this.mul33$F(scalar);
this.m03 *= scalar;
this.m13 *= scalar;
this.m23 *= scalar;
this.m30 *= scalar;
this.m31 *= scalar;
this.m32 *= scalar;
this.m33 *= scalar;
});

Clazz.newMeth(C$, 'mul$javajs_util_M4', function (m1) {
this.mul2$javajs_util_M4$javajs_util_M4(this, m1);
});

Clazz.newMeth(C$, 'mul2$javajs_util_M4$javajs_util_M4', function (m1, m2) {
p$1.set$F$F$F$F$F$F$F$F$F$F$F$F$F$F$F$F.apply(this, [m1.m00 * m2.m00 + m1.m01 * m2.m10 + m1.m02 * m2.m20 + m1.m03 * m2.m30, m1.m00 * m2.m01 + m1.m01 * m2.m11 + m1.m02 * m2.m21 + m1.m03 * m2.m31, m1.m00 * m2.m02 + m1.m01 * m2.m12 + m1.m02 * m2.m22 + m1.m03 * m2.m32, m1.m00 * m2.m03 + m1.m01 * m2.m13 + m1.m02 * m2.m23 + m1.m03 * m2.m33, m1.m10 * m2.m00 + m1.m11 * m2.m10 + m1.m12 * m2.m20 + m1.m13 * m2.m30, m1.m10 * m2.m01 + m1.m11 * m2.m11 + m1.m12 * m2.m21 + m1.m13 * m2.m31, m1.m10 * m2.m02 + m1.m11 * m2.m12 + m1.m12 * m2.m22 + m1.m13 * m2.m32, m1.m10 * m2.m03 + m1.m11 * m2.m13 + m1.m12 * m2.m23 + m1.m13 * m2.m33, m1.m20 * m2.m00 + m1.m21 * m2.m10 + m1.m22 * m2.m20 + m1.m23 * m2.m30, m1.m20 * m2.m01 + m1.m21 * m2.m11 + m1.m22 * m2.m21 + m1.m23 * m2.m31, m1.m20 * m2.m02 + m1.m21 * m2.m12 + m1.m22 * m2.m22 + m1.m23 * m2.m32, m1.m20 * m2.m03 + m1.m21 * m2.m13 + m1.m22 * m2.m23 + m1.m23 * m2.m33, m1.m30 * m2.m00 + m1.m31 * m2.m10 + m1.m32 * m2.m20 + m1.m33 * m2.m30, m1.m30 * m2.m01 + m1.m31 * m2.m11 + m1.m32 * m2.m21 + m1.m33 * m2.m31, m1.m30 * m2.m02 + m1.m31 * m2.m12 + m1.m32 * m2.m22 + m1.m33 * m2.m32, m1.m30 * m2.m03 + m1.m31 * m2.m13 + m1.m32 * m2.m23 + m1.m33 * m2.m33]);
});

Clazz.newMeth(C$, 'transform$javajs_util_T4', function (vec) {
this.transform2$javajs_util_T4$javajs_util_T4(vec, vec);
});

Clazz.newMeth(C$, 'transform2$javajs_util_T4$javajs_util_T4', function (vec, vecOut) {
vecOut.set4$F$F$F$F(this.m00 * vec.x + this.m01 * vec.y + this.m02 * vec.z + this.m03 * vec.w, this.m10 * vec.x + this.m11 * vec.y + this.m12 * vec.z + this.m13 * vec.w, this.m20 * vec.x + this.m21 * vec.y + this.m22 * vec.z + this.m23 * vec.w, this.m30 * vec.x + this.m31 * vec.y + this.m32 * vec.z + this.m33 * vec.w);
});

Clazz.newMeth(C$, 'rotTrans$javajs_util_T3', function (point) {
this.rotTrans2$javajs_util_T3$javajs_util_T3(point, point);
});

Clazz.newMeth(C$, 'rotTrans2$javajs_util_T3$javajs_util_T3', function (point, pointOut) {
pointOut.set$F$F$F(this.m00 * point.x + this.m01 * point.y + this.m02 * point.z + this.m03, this.m10 * point.x + this.m11 * point.y + this.m12 * point.z + this.m13, this.m20 * point.x + this.m21 * point.y + this.m22 * point.z + this.m23);
return pointOut;
});

Clazz.newMeth(C$, 'setAsXYRotation$F', function (angle) {
this.setIdentity$();
var c=Math.cos(angle);
var s=Math.sin(angle);
this.m22=c;
this.m23=-s;
this.m32=s;
this.m33=c;
return this;
});

Clazz.newMeth(C$, 'setAsYZRotation$F', function (angle) {
this.setIdentity$();
var c=Math.cos(angle);
var s=Math.sin(angle);
this.m00=c;
this.m03=-s;
this.m30=s;
this.m33=c;
return this;
});

Clazz.newMeth(C$, 'setAsXZRotation$F', function (angle) {
this.setIdentity$();
var c=Math.cos(angle);
var s=Math.sin(angle);
this.m11=c;
this.m13=-s;
this.m31=s;
this.m33=c;
return this;
});

Clazz.newMeth(C$, 'equals$O', function (o) {
if (!(Clazz.instanceOf(o, "javajs.util.M4"))) return false;
var m=o;
return (this.m00 == m.m00  && this.m01 == m.m01   && this.m02 == m.m02   && this.m03 == m.m03   && this.m10 == m.m10   && this.m11 == m.m11   && this.m12 == m.m12   && this.m13 == m.m13   && this.m20 == m.m20   && this.m21 == m.m21   && this.m22 == m.m22   && this.m23 == m.m23   && this.m30 == m.m30   && this.m31 == m.m31   && this.m32 == m.m32   && this.m33 == m.m33  );
});

Clazz.newMeth(C$, 'hashCode$', function () {
return $I$(1).floatToIntBits$F(this.m00) ^ $I$(1).floatToIntBits$F(this.m01) ^ $I$(1).floatToIntBits$F(this.m02) ^ $I$(1).floatToIntBits$F(this.m03) ^ $I$(1).floatToIntBits$F(this.m10) ^ $I$(1).floatToIntBits$F(this.m11) ^ $I$(1).floatToIntBits$F(this.m12) ^ $I$(1).floatToIntBits$F(this.m13) ^ $I$(1).floatToIntBits$F(this.m20) ^ $I$(1).floatToIntBits$F(this.m21) ^ $I$(1).floatToIntBits$F(this.m22) ^ $I$(1).floatToIntBits$F(this.m23) ^ $I$(1).floatToIntBits$F(this.m30) ^ $I$(1).floatToIntBits$F(this.m31) ^ $I$(1).floatToIntBits$F(this.m32) ^ $I$(1).floatToIntBits$F(this.m33) ;
});

Clazz.newMeth(C$, 'toString', function () {
return "[\n  [" + new Float(this.m00).toString() + "\t" + new Float(this.m01).toString() + "\t" + new Float(this.m02).toString() + "\t" + new Float(this.m03).toString() + "]" + "\n  [" + new Float(this.m10).toString() + "\t" + new Float(this.m11).toString() + "\t" + new Float(this.m12).toString() + "\t" + new Float(this.m13).toString() + "]" + "\n  [" + new Float(this.m20).toString() + "\t" + new Float(this.m21).toString() + "\t" + new Float(this.m22).toString() + "\t" + new Float(this.m23).toString() + "]" + "\n  [" + new Float(this.m30).toString() + "\t" + new Float(this.m31).toString() + "\t" + new Float(this.m32).toString() + "\t" + new Float(this.m33).toString() + "] ]" ;
});

Clazz.newMeth(C$, 'round$F', function (f) {
this.m00=p$1.rnd$F$F.apply(this, [this.m00, f]);
this.m01=p$1.rnd$F$F.apply(this, [this.m01, f]);
this.m02=p$1.rnd$F$F.apply(this, [this.m02, f]);
this.m03=p$1.rnd$F$F.apply(this, [this.m03, f]);
this.m10=p$1.rnd$F$F.apply(this, [this.m10, f]);
this.m11=p$1.rnd$F$F.apply(this, [this.m11, f]);
this.m12=p$1.rnd$F$F.apply(this, [this.m12, f]);
this.m13=p$1.rnd$F$F.apply(this, [this.m13, f]);
this.m20=p$1.rnd$F$F.apply(this, [this.m20, f]);
this.m21=p$1.rnd$F$F.apply(this, [this.m21, f]);
this.m22=p$1.rnd$F$F.apply(this, [this.m22, f]);
this.m23=p$1.rnd$F$F.apply(this, [this.m23, f]);
this.m30=p$1.rnd$F$F.apply(this, [this.m30, f]);
this.m31=p$1.rnd$F$F.apply(this, [this.m31, f]);
this.m32=p$1.rnd$F$F.apply(this, [this.m32, f]);
this.m33=p$1.rnd$F$F.apply(this, [this.m33, f]);
return this;
});

Clazz.newMeth(C$, 'rnd$F$F', function (n, f) {
return (Math.abs(n) < f  ? 0 : n);
}, p$1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:01 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
