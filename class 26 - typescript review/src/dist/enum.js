"use strict";
const lanscape = 0;
const portrait = 1;
const square = 2;
const panorama = 3;
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["lanscape"] = 0] = "lanscape";
    PhotoOrientation[PhotoOrientation["portrait"] = 1] = "portrait";
    PhotoOrientation[PhotoOrientation["square"] = 2] = "square";
    PhotoOrientation[PhotoOrientation["panorama"] = 3] = "panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
;
const photography = {
    url: "https://algo.com",
    type: 3,
    user: "user1"
};
if (photography.type === PhotoOrientation.panorama) {
    // make the validation
}
// without initializing
var PhotoOrientation2;
(function (PhotoOrientation2) {
    PhotoOrientation2[PhotoOrientation2["lanscape"] = 0] = "lanscape";
    PhotoOrientation2[PhotoOrientation2["portrait"] = 1] = "portrait";
    PhotoOrientation2[PhotoOrientation2["square"] = 2] = "square";
    PhotoOrientation2[PhotoOrientation2["panorama"] = 3] = "panorama";
})(PhotoOrientation2 || (PhotoOrientation2 = {}));
;
var PhotoOrientation3;
(function (PhotoOrientation3) {
    PhotoOrientation3[PhotoOrientation3["lanscape"] = 10] = "lanscape";
    PhotoOrientation3[PhotoOrientation3["portrait"] = 11] = "portrait";
    PhotoOrientation3[PhotoOrientation3["square"] = 12] = "square";
    PhotoOrientation3[PhotoOrientation3["panorama"] = 13] = "panorama";
})(PhotoOrientation3 || (PhotoOrientation3 = {}));
console.log(PhotoOrientation3);
var Country;
(function (Country) {
    Country["Bolivia"] = "bol";
    Country["Colombia"] = "col";
    Country["Mexico"] = "mex";
    Country["EEUU"] = "usa";
})(Country || (Country = {}));
const country = Country.Colombia;
console.log('country', country);
