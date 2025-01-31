(function(){var P$=Clazz.newPackage("sun.nio.fs"),p$1={},I$=[[0,'Thread','java.util.LinkedList','java.security.AccessController','java.util.HashSet','java.nio.file.StandardWatchEventKinds',['sun.nio.fs.AbstractPoller','.RequestType'],'AssertionError',['sun.nio.fs.AbstractPoller','.Request']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "AbstractPoller", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'Runnable');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.requestList=null;
this.shutdown=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
this.requestList=Clazz.new_($I$(2));
this.shutdown=false;
}, 1);

Clazz.newMeth(C$, 'start$', function () {
var thisRunnable=this;
$I$(3).doPrivileged$java_security_PrivilegedAction(((P$.AbstractPoller$1||
(function(){var C$=Clazz.newClass(P$, "AbstractPoller$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
var thr=Clazz.new_($I$(1).c$$Runnable,[this.$finals$.thisRunnable]);
thr.setDaemon$Z(true);
thr.start$();
return null;
});
})()
), Clazz.new_(P$.AbstractPoller$1.$init$, [this, {thisRunnable: thisRunnable}])));
});

Clazz.newMeth(C$, 'register$java_nio_file_Path$java_nio_file_WatchEvent_KindA$java_nio_file_WatchEvent_ModifierA', function (dir, events, modifiers) {
if (dir == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var eventSet=Clazz.new_($I$(4).c$$I,[events.length]);
for (var event, $event = 0, $$event = events; $event<$$event.length&&((event=($$event[$event])),1);$event++) {
if (event === $I$(5).ENTRY_CREATE  || event === $I$(5).ENTRY_MODIFY   || event === $I$(5).ENTRY_DELETE  ) {
eventSet.add$TE(event);
continue;
}if (event === $I$(5).OVERFLOW ) continue;
if (event == null ) throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["An element in event set is \'null\'"]);
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,[event.name$()]);
}
if (eventSet.isEmpty$()) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["No events to register"]);
return p$1.invoke$sun_nio_fs_AbstractPoller_RequestType$OA.apply(this, [$I$(6).REGISTER, [dir, eventSet, modifiers]]);
});

Clazz.newMeth(C$, 'cancel$java_nio_file_WatchKey', function (key) {
try {
p$1.invoke$sun_nio_fs_AbstractPoller_RequestType$OA.apply(this, [$I$(6).CANCEL, [key]]);
} catch (x) {
if (Clazz.exceptionOf(x,"java.io.IOException")){
throw Clazz.new_($I$(7).c$$O,[x.getMessage$()]);
} else {
throw x;
}
}
});

Clazz.newMeth(C$, 'close$', function () {
p$1.invoke$sun_nio_fs_AbstractPoller_RequestType$OA.apply(this, [$I$(6).CLOSE, []]);
});

Clazz.newMeth(C$, 'invoke$sun_nio_fs_AbstractPoller_RequestType$OA', function (type, params) {
var req=Clazz.new_($I$(8).c$$sun_nio_fs_AbstractPoller_RequestType$OA,[type, params]);
{
if (this.shutdown) {
throw Clazz.new_(Clazz.load('java.nio.file.ClosedWatchServiceException'));
}this.requestList.add$TE(req);
}this.wakeup$();
var result=req.awaitResult$();
if (Clazz.instanceOf(result, "java.lang.RuntimeException")) throw result;
if (Clazz.instanceOf(result, "java.io.IOException")) throw result;
return result;
}, p$1);

Clazz.newMeth(C$, 'processRequests$', function () {
{
var req;
while ((req=this.requestList.poll$()) != null ){
if (this.shutdown) {
req.release$O(Clazz.new_(Clazz.load('java.nio.file.ClosedWatchServiceException')));
}switch (req.type$()) {
case $I$(6).REGISTER:
{
var params=req.parameters$();
var path=params[0];
var events=params[1];
var modifiers=params[2];
req.release$O(this.implRegister$java_nio_file_Path$java_util_Set$java_nio_file_WatchEvent_ModifierA(path, events, modifiers));
break;
}case $I$(6).CANCEL:
{
var params=req.parameters$();
var key=params[0];
this.implCancelKey$java_nio_file_WatchKey(key);
req.release$O(null);
break;
}case $I$(6).CLOSE:
{
this.implCloseAll$();
req.release$O(null);
this.shutdown=true;
break;
}default:
req.release$O(Clazz.new_(Clazz.load('java.io.IOException').c$$S,["request not recognized"]));
}
}
}return this.shutdown;
});
;
(function(){var C$=Clazz.newClass(P$.AbstractPoller, "RequestType", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$ = function() {Clazz.load(C$, 1);
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "REGISTER", 0, []);
Clazz.newEnumConst($vals, C$.c$, "CANCEL", 1, []);
Clazz.newEnumConst($vals, C$.c$, "CLOSE", 2, []);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
;
(function(){var C$=Clazz.newClass(P$.AbstractPoller, "Request", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.type=null;
this.params=null;
this.completed=false;
this.result=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.completed=false;
this.result=null;
}, 1);

Clazz.newMeth(C$, 'c$$sun_nio_fs_AbstractPoller_RequestType$OA', function (type, params) {
C$.$init$.apply(this);
this.type=type;
this.params=params;
}, 1);

Clazz.newMeth(C$, 'type$', function () {
return this.type;
});

Clazz.newMeth(C$, 'parameters$', function () {
return this.params;
});

Clazz.newMeth(C$, 'release$O', function (result) {
{
this.completed=true;
this.result=result;
this.notifyAll$();
}});

Clazz.newMeth(C$, 'awaitResult$', function () {
var interrupted=false;
{
while (!this.completed){
try {
this.wait$();
} catch (x) {
if (Clazz.exceptionOf(x,"InterruptedException")){
interrupted=true;
} else {
throw x;
}
}
}
if (interrupted) $I$(1).currentThread$().interrupt$();
return this.result;
}});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:39 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
