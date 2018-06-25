var Plane = function () { }
Plane.prototype.fire = function () {
	console.log('发射普通子弹');
}
var MissileDecorator = function (plane) {
this.plane = plane;
}
MissileDecorator.prototype.fire = function () {
	// this.plane.fire();
	console.log('发射导弹');
}
var AtomDecorator = function (plane) {
this.plane = plane;
}
AtomDecorator.prototype.fire = function () {
	// this.plane.fire();
	console.log('发射原子弹');
}
var plane1 = new Plane();
var plane2 = new MissileDecorator(plane1);
var plane3 = new AtomDecorator(plane2);
plane1.fire();
plane2.fire();
plane3.fire();