function Cylinder(radius,height){
    this.radius=radius;
    this.height=height;
    this.getVolume= () => console.log((Math.PI*radius*radius*height).toFixed(4));
    
}

function Sphere(radius){
    this.radius=radius;
    this.getVolume= () => console.log((Math.PI*4*Math.pow(radius,3)).toFixed(4));
}

function Cone(radius,height){
    this.radius=radius;
    this.height=height;
    this.getVolume= () => console.log((Math.PI*Math.pow(radius,2)*height/3).toFixed(4));
}

let cylinder1 = new Cylinder(3,4);
cylinder1.getVolume();
let cylinder2 = new Cylinder(4,5);
cylinder2.getVolume();
let s1 = new Sphere(3,4);
s1.getVolume();
let s2 = new Sphere(4,5);
s2.getVolume();
let c1 = new Cone(3,4);
c1.getVolume();
let c2 = new Cone(4,5);
c2.getVolume();