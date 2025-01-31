(function(){var P$=Clazz.newPackage("javax.swing.colorchooser"),p$1={},p$2={},I$=[[0,'java.awt.GridBagLayout','java.awt.GridBagConstraints','javax.swing.JPanel','javax.swing.colorchooser.MainSwatchPanel','javax.swing.colorchooser.RecentSwatchPanel',['javax.swing.colorchooser.DefaultSwatchChooserPanel','.MainSwatchListener'],['javax.swing.colorchooser.DefaultSwatchChooserPanel','.RecentSwatchListener'],'java.awt.BorderLayout','javax.swing.border.CompoundBorder','javax.swing.border.LineBorder','java.awt.Color','java.awt.Insets','javax.swing.JLabel','java.awt.Dimension','javax.swing.UIManager']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "SwatchPanel", null, 'javax.swing.JPanel');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.colors=null;
this.swatchSize=null;
this.numSwatches=null;
this.gap=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
this.initValues$();
this.initColors$();
this.setToolTipText$S("");
this.setOpaque$Z(true);
this.setBackground$java_awt_Color($I$(11).white);
this.setRequestFocusEnabled$Z(false);
this.setInheritsPopupMenu$Z(true);
}, 1);

Clazz.newMeth(C$, 'isFocusTraversable$', function () {
return false;
});

Clazz.newMeth(C$, 'initValues$', function () {
});

Clazz.newMeth(C$, 'paintComponent$java_awt_Graphics', function (g) {
g.setColor$java_awt_Color(this.getBackground$());
g.fillRect$I$I$I$I(0, 0, this.getWidth$(), this.getHeight$());
for (var row=0; row < this.numSwatches.height; row++) {
var y=row * (this.swatchSize.height + this.gap.height);
for (var column=0; column < this.numSwatches.width; column++) {
g.setColor$java_awt_Color(p$1.getColorForCell$I$I.apply(this, [column, row]));
var x;
if ((!this.getComponentOrientation$().isLeftToRight$()) && (Clazz.instanceOf(this, "javax.swing.colorchooser.RecentSwatchPanel")) ) {
x=(this.numSwatches.width - column - 1 ) * (this.swatchSize.width + this.gap.width);
} else {
x=column * (this.swatchSize.width + this.gap.width);
}g.fillRect$I$I$I$I(x, y, this.swatchSize.width, this.swatchSize.height);
g.setColor$java_awt_Color($I$(11).black);
g.drawLine$I$I$I$I(x + this.swatchSize.width - 1, y, x + this.swatchSize.width - 1, y + this.swatchSize.height - 1);
g.drawLine$I$I$I$I(x, y + this.swatchSize.height - 1, x + this.swatchSize.width - 1, y + this.swatchSize.height - 1);
}
}
});

Clazz.newMeth(C$, 'getPreferredSize$', function () {
var x=this.numSwatches.width * (this.swatchSize.width + this.gap.width) - 1;
var y=this.numSwatches.height * (this.swatchSize.height + this.gap.height) - 1;
return Clazz.new_($I$(14).c$$I$I,[x, y]);
});

Clazz.newMeth(C$, 'initColors$', function () {
});

Clazz.newMeth(C$, 'getToolTipText$java_awt_event_MouseEvent', function (e) {
var color=this.getColorForLocation$I$I(e.getX$(), e.getY$());
return color.getRed$() + ", " + color.getGreen$() + ", " + color.getBlue$() ;
});

Clazz.newMeth(C$, 'getColorForLocation$I$I', function (x, y) {
var column;
if ((!this.getComponentOrientation$().isLeftToRight$()) && (Clazz.instanceOf(this, "javax.swing.colorchooser.RecentSwatchPanel")) ) {
column=this.numSwatches.width - (x/(this.swatchSize.width + this.gap.width)|0) - 1;
} else {
column=(x/(this.swatchSize.width + this.gap.width)|0);
}var row=(y/(this.swatchSize.height + this.gap.height)|0);
return p$1.getColorForCell$I$I.apply(this, [column, row]);
});

Clazz.newMeth(C$, 'getColorForCell$I$I', function (column, row) {
return this.colors[(row * this.numSwatches.width) + column];
}, p$1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:17 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
