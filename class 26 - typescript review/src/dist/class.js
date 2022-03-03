"use strict";
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
;
class Picture {
    constructor(id, title, orientation) {
        this.id = id;
        this.title = title;
        this.orientation = orientation;
    }
    ;
    kindOfOrientation() {
        console.log("the orientation is: ", this.orientation);
    }
    ;
}
;
const picture = new Picture(1, "es un lindo paisaje", PhotoOrientation.Landscape);
console.log(picture.id);
//console.log(picture.orientation) //Error por que es private
