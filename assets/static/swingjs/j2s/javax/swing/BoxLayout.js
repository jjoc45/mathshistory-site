(function(){var P$=Clazz.newPackage("javax.swing"),p$1={},I$=[[0,'java.awt.AWTError','java.awt.Dimension','javax.swing.SizeRequirements']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "BoxLayout", null, null, 'java.awt.LayoutManager2');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.axis=0;
this.target=null;
this.xChildren=null;
this.yChildren=null;
this.xTotal=null;
this.yTotal=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Container$I$java_io_PrintStream', function (target, axis, dbg) {
C$.c$$java_awt_Container$I.apply(this, [target, axis]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Container$I', function (target, axis) {
C$.$init$.apply(this);
if (axis != 0 && axis != 1  && axis != 2  && axis != 3 ) {
throw Clazz.new_($I$(1).c$$S,["Invalid axis"]);
}this.axis=axis;
this.target=target;
}, 1);

Clazz.newMeth(C$, 'getTarget$', function () {
return this.target;
});

Clazz.newMeth(C$, 'getAxis$', function () {
return this.axis;
});

Clazz.newMeth(C$, 'invalidateLayout$java_awt_Container', function (target) {
this.checkContainer$java_awt_Container(target);
this.xChildren=null;
this.yChildren=null;
this.xTotal=null;
this.yTotal=null;
});

Clazz.newMeth(C$, 'addLayoutComponent$S$java_awt_Component', function (name, comp) {
this.invalidateLayout$java_awt_Container(comp.getParent$());
});

Clazz.newMeth(C$, 'removeLayoutComponent$java_awt_Component', function (comp) {
this.invalidateLayout$java_awt_Container(comp.getParent$());
});

Clazz.newMeth(C$, 'addLayoutComponent$java_awt_Component$O', function (comp, constraints) {
this.invalidateLayout$java_awt_Container(comp.getParent$());
});

Clazz.newMeth(C$, 'preferredLayoutSize$java_awt_Container', function (target) {
var size;
{
this.checkContainer$java_awt_Container(target);
this.checkRequests$();
size=Clazz.new_($I$(2).c$$I$I,[this.xTotal.preferred, this.yTotal.preferred]);
}var insets=target.getInsets$();
size.width=(Math.min(size.width + insets.left + insets.right , 2147483647)|0);
size.height=(Math.min(size.height + insets.top + insets.bottom , 2147483647)|0);
return size;
});

Clazz.newMeth(C$, 'minimumLayoutSize$java_awt_Container', function (target) {
var size;
{
this.checkContainer$java_awt_Container(target);
this.checkRequests$();
size=Clazz.new_($I$(2).c$$I$I,[this.xTotal.minimum, this.yTotal.minimum]);
}var insets=target.getInsets$();
size.width=(Math.min(size.width + insets.left + insets.right , 2147483647)|0);
size.height=(Math.min(size.height + insets.top + insets.bottom , 2147483647)|0);
return size;
});

Clazz.newMeth(C$, 'maximumLayoutSize$java_awt_Container', function (target) {
var size;
{
this.checkContainer$java_awt_Container(target);
this.checkRequests$();
size=Clazz.new_($I$(2).c$$I$I,[this.xTotal.maximum, this.yTotal.maximum]);
}var insets=target.getInsets$();
size.width=(Math.min(size.width + insets.left + insets.right , 2147483647)|0);
size.height=(Math.min(size.height + insets.top + insets.bottom , 2147483647)|0);
return size;
});

Clazz.newMeth(C$, 'getLayoutAlignmentX$java_awt_Container', function (target) {
this.checkContainer$java_awt_Container(target);
this.checkRequests$();
return this.xTotal.alignment;
});

Clazz.newMeth(C$, 'getLayoutAlignmentY$java_awt_Container', function (target) {
this.checkContainer$java_awt_Container(target);
this.checkRequests$();
return this.yTotal.alignment;
});

Clazz.newMeth(C$, 'layoutContainer$java_awt_Container', function (target) {
this.checkContainer$java_awt_Container(target);
var nChildren=target.getComponentCount$();
var xOffsets=Clazz.array(Integer.TYPE, [nChildren]);
var xSpans=Clazz.array(Integer.TYPE, [nChildren]);
var yOffsets=Clazz.array(Integer.TYPE, [nChildren]);
var ySpans=Clazz.array(Integer.TYPE, [nChildren]);
var alloc=target.getSize$();
var $in=target.getInsets$();
alloc.width-=$in.left + $in.right;
alloc.height-=$in.top + $in.bottom;
var o=target.getComponentOrientation$();
var absoluteAxis=p$1.resolveAxis$I$java_awt_ComponentOrientation.apply(this, [this.axis, o]);
var ltr=(absoluteAxis != this.axis) ? o.isLeftToRight$() : true;
{
this.checkRequests$();
if (absoluteAxis == 0) {
$I$(3).calcTiled$I$javax_swing_SizeRequirements$javax_swing_SizeRequirementsA$IA$IA$Z(alloc.width, this.xTotal, this.xChildren, xOffsets, xSpans, ltr);
$I$(3).calcAligned$I$javax_swing_SizeRequirements$javax_swing_SizeRequirementsA$IA$IA$Z(alloc.height, this.yTotal, this.yChildren, yOffsets, ySpans, true);
} else {
$I$(3).calcAligned$I$javax_swing_SizeRequirements$javax_swing_SizeRequirementsA$IA$IA$Z(alloc.width, this.xTotal, this.xChildren, xOffsets, xSpans, ltr);
$I$(3).calcTiled$I$javax_swing_SizeRequirements$javax_swing_SizeRequirementsA$IA$IA$Z(alloc.height, this.yTotal, this.yChildren, yOffsets, ySpans, true);
}}for (var i=0; i < nChildren; i++) {
var c=target.getComponent$I(i);
c.setBounds$I$I$I$I((Math.min($in.left + xOffsets[i], 2147483647)|0), (Math.min($in.top + yOffsets[i], 2147483647)|0), xSpans[i], ySpans[i]);
}
});

Clazz.newMeth(C$, 'checkContainer$java_awt_Container', function (target) {
if (this.target !== target ) {
throw Clazz.new_($I$(1).c$$S,["BoxLayout can\'t be shared"]);
}});

Clazz.newMeth(C$, 'checkRequests$', function () {
if (this.xChildren == null  || this.yChildren == null  ) {
var n=this.target.getComponentCount$();
this.xChildren=Clazz.array($I$(3), [n]);
this.yChildren=Clazz.array($I$(3), [n]);
for (var i=0; i < n; i++) {
var c=this.target.getComponent$I(i);
if (!c.isVisible$()) {
this.xChildren[i]=Clazz.new_($I$(3).c$$I$I$I$F,[0, 0, 0, c.getAlignmentX$()]);
this.yChildren[i]=Clazz.new_($I$(3).c$$I$I$I$F,[0, 0, 0, c.getAlignmentY$()]);
continue;
}var min=c.getMinimumSize$();
var typ=c.getPreferredSize$();
var max=c.getMaximumSize$();
this.xChildren[i]=Clazz.new_($I$(3).c$$I$I$I$F,[min.width, typ.width, max.width, c.getAlignmentX$()]);
this.yChildren[i]=Clazz.new_($I$(3).c$$I$I$I$F,[min.height, typ.height, max.height, c.getAlignmentY$()]);
}
var absoluteAxis=p$1.resolveAxis$I$java_awt_ComponentOrientation.apply(this, [this.axis, this.target.getComponentOrientation$()]);
if (absoluteAxis == 0) {
this.xTotal=$I$(3).getTiledSizeRequirements$javax_swing_SizeRequirementsA(this.xChildren);
this.yTotal=$I$(3).getAlignedSizeRequirements$javax_swing_SizeRequirementsA(this.yChildren);
} else {
this.xTotal=$I$(3).getAlignedSizeRequirements$javax_swing_SizeRequirementsA(this.xChildren);
this.yTotal=$I$(3).getTiledSizeRequirements$javax_swing_SizeRequirementsA(this.yChildren);
}}});

Clazz.newMeth(C$, 'resolveAxis$I$java_awt_ComponentOrientation', function (axis, o) {
var absoluteAxis;
if (axis == 2) {
absoluteAxis=o.isHorizontal$() ? 0 : 1;
} else if (axis == 3) {
absoluteAxis=o.isHorizontal$() ? 1 : 0;
} else {
absoluteAxis=axis;
}return absoluteAxis;
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:03 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
