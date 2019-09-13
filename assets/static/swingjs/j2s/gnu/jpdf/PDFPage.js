(function(){var P$=Clazz.newPackage("gnu.jpdf"),p$1={},I$=[[0,'java.util.Vector','gnu.jpdf.PDFStream','java.awt.print.PageFormat','gnu.jpdf.PDFGraphics','java.awt.Dimension','java.awt.Rectangle','gnu.jpdf.PDFAnnot','gnu.jpdf.PDFOutline','gnu.jpdf.PDFObject',['gnu.jpdf.PDFPage','.procset']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "PDFPage", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'gnu.jpdf.PDFObject', 'java.io.Serializable');
C$.DEF_FORMAT=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.DEF_FORMAT=Clazz.new_($I$(3));
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.pageFormat=null;
this.pdfPageList=null;
this.contents=null;
this.thumbnail=null;
this.annotations=null;
this.resources=null;
this.imageResources=null;
this.fonts=null;
this.hasImageB=false;
this.hasImageC=false;
this.hasImageI=false;
this.procset=null;
this.xobjects=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.xobjects=Clazz.new_($I$(1));
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$$S.apply(this, ["/Page"]);
C$.$init$.apply(this);
this.pageFormat=C$.DEF_FORMAT;
this.contents=Clazz.new_($I$(1));
this.thumbnail=null;
this.annotations=Clazz.new_($I$(1));
this.resources=Clazz.new_($I$(1));
this.imageResources=Clazz.new_($I$(1));
this.fonts=Clazz.new_($I$(1));
this.procset=null;
}, 1);

Clazz.newMeth(C$, 'c$$I', function (orientation) {
C$.c$.apply(this, []);
this.setOrientation$I(orientation);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_print_PageFormat', function (pageFormat) {
C$.c$.apply(this, []);
this.pageFormat=pageFormat;
}, 1);

Clazz.newMeth(C$, 'addToProcset$S', function (proc) {
if (this.procset == null ) {
p$1.addProcset.apply(this, []);
}this.procset.add$S(proc);
});

Clazz.newMeth(C$, 'getGraphics$', function () {
try {
var g=Clazz.new_($I$(4));
g.init$gnu_jpdf_PDFPage(this);
return g;
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
ex.printStackTrace$();
} else {
throw ex;
}
}
return null;
});

Clazz.newMeth(C$, 'getFont$S$S$I', function (type, font, style) {
for (var ft, $ft = this.fonts.iterator$(); $ft.hasNext$()&&((ft=($ft.next$())),1);) {
if (ft.equals$S$S$I(type, font, style)) return ft;
}
if (this.fonts.size$() == 0) {
p$1.addProcset.apply(this, []);
this.procset.add$S("/Text");
}var f=this.pdfDocument.getFont$S$S$I(type, font, style);
this.fonts.addElement$TE(f);
return f;
});

Clazz.newMeth(C$, 'getPageFormat$', function () {
return this.pageFormat;
});

Clazz.newMeth(C$, 'getDimension$', function () {
return Clazz.new_($I$(5).c$$I$I,[(this.pageFormat.getWidth$()|0), (this.pageFormat.getHeight$()|0)]);
});

Clazz.newMeth(C$, 'getImageableArea$', function () {
return Clazz.new_($I$(6).c$$I$I$I$I,[(this.pageFormat.getImageableX$()|0), (this.pageFormat.getImageableY$()|0), ((this.pageFormat.getImageableX$() + this.pageFormat.getImageableWidth$())|0), ((this.pageFormat.getImageableY$() + this.pageFormat.getImageableHeight$())|0)]);
});

Clazz.newMeth(C$, 'setOrientation$I', function (orientation) {
this.pageFormat.setOrientation$I(orientation);
});

Clazz.newMeth(C$, 'getOrientation$', function () {
return this.pageFormat.getOrientation$();
});

Clazz.newMeth(C$, 'add$gnu_jpdf_PDFObject', function (ob) {
this.contents.addElement$TE(ob);
});

Clazz.newMeth(C$, 'addAnnotation$gnu_jpdf_PDFObject', function (ob) {
this.annotations.addElement$TE(ob);
});

Clazz.newMeth(C$, 'addNote$S$I$I$I$I', function (note, x, y, w, h) {
var xy1=this.cxy$I$I(x, y + h);
var xy2=this.cxy$I$I(x + w, y);
var ob=Clazz.new_($I$(7).c$$I$I$I$I$S,[xy1[0], xy1[1], xy2[0], xy2[1], note]);
this.pdfDocument.add$gnu_jpdf_PDFObject(ob);
this.annotations.addElement$TE(ob);
return ob;
});

Clazz.newMeth(C$, 'addLink$I$I$I$I$gnu_jpdf_PDFObject', function (x, y, w, h, dest) {
var xy1=this.cxy$I$I(x, y + h);
var xy2=this.cxy$I$I(x + w, y);
var ob=Clazz.new_($I$(7).c$$I$I$I$I$gnu_jpdf_PDFObject,[xy1[0], xy1[1], xy2[0], xy2[1], dest]);
this.pdfDocument.add$gnu_jpdf_PDFObject(ob);
this.annotations.addElement$TE(ob);
return ob;
});

Clazz.newMeth(C$, 'addLink$I$I$I$I$gnu_jpdf_PDFObject$I$I$I$I', function (x, y, w, h, dest, vx, vy, vw, vh) {
var xy1=this.cxy$I$I(x, y + h);
var xy2=this.cxy$I$I(x + w, y);
var xy3=this.cxy$I$I(vx, vy + vh);
var xy4=this.cxy$I$I(vx + vw, vy);
var ob=Clazz.new_($I$(7).c$$I$I$I$I$gnu_jpdf_PDFObject$I$I$I$I,[xy1[0], xy1[1], xy2[0], xy2[1], dest, xy3[0], xy3[1], xy4[0], xy4[1]]);
this.pdfDocument.add$gnu_jpdf_PDFObject(ob);
this.annotations.addElement$TE(ob);
return ob;
});

Clazz.newMeth(C$, 'addXObject$S', function (inxobject) {
this.xobjects.addElement$TE(inxobject);
});

Clazz.newMeth(C$, 'addResource$S', function (resource) {
this.resources.addElement$TE(resource);
});

Clazz.newMeth(C$, 'addImageResource$S', function (resource) {
this.imageResources.addElement$TE(resource);
});

Clazz.newMeth(C$, 'setThumbnail$gnu_jpdf_PDFObject', function (thumbnail) {
this.thumbnail=thumbnail;
});

Clazz.newMeth(C$, 'addOutline$S', function (title) {
var outline=Clazz.new_($I$(8).c$$S$gnu_jpdf_PDFPage,[title, this]);
this.pdfDocument.add$gnu_jpdf_PDFObject(outline);
this.pdfDocument.getOutline$().add$gnu_jpdf_PDFOutline(outline);
return outline;
});

Clazz.newMeth(C$, 'addOutline$S$I$I$I$I', function (title, x, y, w, h) {
var xy1=this.cxy$I$I(x, y + h);
var xy2=this.cxy$I$I(x + w, y);
var outline=Clazz.new_($I$(8).c$$S$gnu_jpdf_PDFPage$I$I$I$I,[title, this, xy1[0], xy1[1], xy2[0], xy2[1]]);
this.pdfDocument.add$gnu_jpdf_PDFObject(outline);
this.pdfDocument.getOutline$().add$gnu_jpdf_PDFOutline(outline);
return outline;
});

Clazz.newMeth(C$, 'write$java_io_OutputStream', function (os) {
this.writeStart$java_io_OutputStream(os);
$I$(2).write$java_io_OutputStream$S(os, "/Parent ");
$I$(2).write$java_io_OutputStream$S(os, this.pdfPageList.toString());
$I$(2).write$java_io_OutputStream$S(os, "\n");
$I$(2).write$java_io_OutputStream$S(os, "/MediaBox [");
$I$(2).write$java_io_OutputStream$S(os, Integer.toString$I(0));
$I$(2).write$java_io_OutputStream$S(os, " ");
$I$(2).write$java_io_OutputStream$S(os, Integer.toString$I(0));
$I$(2).write$java_io_OutputStream$S(os, " ");
$I$(2).write$java_io_OutputStream$S(os, Integer.toString$I((this.pageFormat.getWidth$()|0)));
$I$(2).write$java_io_OutputStream$S(os, " ");
$I$(2).write$java_io_OutputStream$S(os, Integer.toString$I((this.pageFormat.getHeight$()|0)));
$I$(2).write$java_io_OutputStream$S(os, "]\n");
$I$(2).write$java_io_OutputStream$S(os, "/Resources << ");
if (this.fonts.size$() > 0) {
$I$(2).write$java_io_OutputStream$S(os, "\n/Font << ");
for (var font, $font = this.fonts.iterator$(); $font.hasNext$()&&((font=($font.next$())),1);) {
$I$(2).write$java_io_OutputStream$S(os, font.getName$());
$I$(2).write$java_io_OutputStream$S(os, " ");
$I$(2).write$java_io_OutputStream$S(os, font.toString());
$I$(2).write$java_io_OutputStream$S(os, " ");
}
$I$(2).write$java_io_OutputStream$S(os, ">> ");
}if (this.xobjects.size$() > 0) {
$I$(2).write$java_io_OutputStream$S(os, "\n/XObject << ");
for (var str, $str = this.xobjects.iterator$(); $str.hasNext$()&&((str=($str.next$())),1);) {
$I$(2).write$java_io_OutputStream$S(os, str);
$I$(2).write$java_io_OutputStream$S(os, " ");
}
$I$(2).write$java_io_OutputStream$S(os, ">> ");
}for (var str, $str = this.resources.iterator$(); $str.hasNext$()&&((str=($str.next$())),1);) {
$I$(2).write$java_io_OutputStream$S(os, str);
$I$(2).write$java_io_OutputStream$S(os, " ");
}
if (this.imageResources.size$() > 0) {
$I$(2).write$java_io_OutputStream$S(os, "/XObject << ");
for (var str, $str = this.imageResources.iterator$(); $str.hasNext$()&&((str=($str.next$())),1);) {
$I$(2).write$java_io_OutputStream$S(os, str);
$I$(2).write$java_io_OutputStream$S(os, " ");
}
$I$(2).write$java_io_OutputStream$S(os, " >> ");
}$I$(2).write$java_io_OutputStream$S(os, ">>\n");
if (this.thumbnail != null ) {
$I$(2).write$java_io_OutputStream$S(os, "/Thumb ");
$I$(2).write$java_io_OutputStream$S(os, this.thumbnail.toString());
$I$(2).write$java_io_OutputStream$S(os, "\n");
}if (this.contents.size$() > 0) {
if (this.contents.size$() == 1) {
var ob=this.contents.elementAt$I(0);
$I$(2).write$java_io_OutputStream$S(os, "/Contents ");
$I$(2).write$java_io_OutputStream$S(os, ob.toString());
$I$(2).write$java_io_OutputStream$S(os, "\n");
} else {
$I$(2).write$java_io_OutputStream$S(os, "/Contents [");
$I$(2).write$java_io_OutputStream$S(os, $I$(9).toArray$java_util_Vector(this.contents));
$I$(2).write$java_io_OutputStream$S(os, "\n");
}}if (this.annotations.size$() > 0) {
$I$(2).write$java_io_OutputStream$S(os, "/Annots ");
$I$(2).write$java_io_OutputStream$S(os, $I$(9).toArray$java_util_Vector(this.annotations));
$I$(2).write$java_io_OutputStream$S(os, "\n");
}this.writeEnd$java_io_OutputStream(os);
});

Clazz.newMeth(C$, 'addProcset', function () {
if (this.procset == null ) {
this.pdfDocument.add$gnu_jpdf_PDFObject(this.procset=Clazz.new_($I$(10), [this, null]));
this.resources.addElement$TE("/ProcSet " + this.procset);
}}, p$1);

Clazz.newMeth(C$, 'cy$I$I', function (x, y) {
return this.cxy$I$I(x, y)[1];
});

Clazz.newMeth(C$, 'cx$I$I', function (x, y) {
return this.cxy$I$I(x, y)[0];
});

Clazz.newMeth(C$, 'cxy$I$I', function (x, y) {
var r=Clazz.array(Integer.TYPE, [2]);
r[0]=x;
r[1]=(this.pageFormat.getHeight$()|0) - y;
return r;
});
;
(function(){var C$=Clazz.newClass(P$.PDFPage, "procset", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'gnu.jpdf.PDFObject');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.set=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$$S.apply(this, [null]);
C$.$init$.apply(this);
this.set=Clazz.new_($I$(1));
this.set.addElement$TE("/PDF");
}, 1);

Clazz.newMeth(C$, 'add$S', function (proc) {
this.set.addElement$TE(" " + proc);
});

Clazz.newMeth(C$, 'write$java_io_OutputStream', function (os) {
$I$(2).write$java_io_OutputStream$S(os, Integer.toString$I(this.objser));
$I$(2).write$java_io_OutputStream$S(os, " 0 obj\n");
$I$(2).write$java_io_OutputStream$S(os, "[");
for (var str, $str = this.set.iterator$(); $str.hasNext$()&&((str=($str.next$())),1);) $I$(2).write$java_io_OutputStream$S(os, str);

$I$(2).write$java_io_OutputStream$S(os, "]\n");
$I$(2).write$java_io_OutputStream$S(os, "endobj\n");
});
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:16 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
