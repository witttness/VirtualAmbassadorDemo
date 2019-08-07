(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n  <app-nav-menu></app-nav-menu>\n  <div [@routeAnimations]=\"prepareRoute(outlet)\" class=\"container\">\n    <router-outlet #outlet=\"outlet\"></router-outlet>\n  </div>\n</body>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/exhibit/decide/decide.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/exhibit/decide/decide.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col\">\n        <button type=\"button\" class=\"btn btn-info btn-block\" [routerLink]='[\"/map\"]'>Museum Map</button>\n    </div>\n    <div class=\"col\">\n        <button type=\"button\" class=\"btn btn-primary btn-block\" [routerLink]='[\"/scan\"]'>Scan Exhibit</button>\n    </div>\n</div>\n<div class=\"text-center\">\n    <h1 style=\"text-transform: capitalize;font-size: 90px\">DECIDE</h1>\n    <div>Like the exhibit? <star-rating [starType]=\"'svg'\" [rating]=\"0\" (ratingChange)=\"rateExhibit($event)\"></star-rating></div>\n    <p>Use the information on this page in addition to what you see at the exhibit.</p>\n    <iframe width=\"100%\" src=\"https://www.youtube.com/embed/0ddgrHehprk\" frameborder=\"0\"\n        allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n\n    <p class=\"mt-20\">Here are some games you might like...</p>\n    <button class=\"btn-danger btn-block btn-lg\">Credit 201</button>\n    <button class=\"btn-warning btn-block btn-lg\">Credit Post Doc</button>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/exhibit/exhibit.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/exhibit/exhibit.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n    exhibit works!\n    {{ exhibitId$ | async }}\n  </p>\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/exhibit/scarcity/scarcity.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/exhibit/scarcity/scarcity.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col\">\n        <button type=\"button\" class=\"btn btn-info btn-block\" [routerLink]='[\"/map\"]'>Museum Map</button>\n    </div>\n    <div class=\"col\">\n        <button type=\"button\" class=\"btn btn-primary btn-block\" [routerLink]='[\"/scan\"]'>Scan Exhibit</button>\n    </div>\n</div>\n<div class=\"text-center\">\n    <h1 style=\"text-transform: capitalize;font-size: 80px\">SCARCITY</h1>\n    <div>Like the exhibit? <star-rating [starType]=\"'svg'\" [rating]=\"0\" (ratingChange)=\"rateExhibit($event)\"></star-rating></div>\n    <p>Use the information on this page in addition to what you see at the exhibit.</p>\n    <iframe width=\"100%\" src=\"https://www.youtube.com/embed/1cYMW5d_bn4\" frameborder=\"0\"\n        allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n\n    <p class=\"mt-20\">Here are some games you might like...</p>\n    <button class=\"btn-danger btn-block btn-lg\">Play the SCARCITY Game</button>\n    <button class=\"btn-warning btn-block btn-lg\">Get Scarce!</button>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center\">\n    <img src=\"assets/EconMus_horiz_pos_e.png\" class=\"img-fluid\">\n    <hr>\n    <h1>Welcome!</h1>\n    <p>This is your <em>Virtual Ambassador</em> to escort you through the museum and ensure you have the best\n        experience possible.</p>\n    <p>Would you mind telling us a little about yourself?</p>\n    <p>\n        <a class=\"btn btn-primary btn-block\" [routerLink]='[\"/visitorInfo\"]'>Sure! I can tell you about me.</a>\n        <a class=\"btn btn-primary btn-block\" (click)=\"startAnonymous()\">No! Just Show Me a Map!</a>\n        <!-- <button class=\"btn btn-xs\" (click)=\"goToExhibitDemo()\">Demo</button> -->\n    </p>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/map/map.component.html":
/*!******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/map/map.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a class=\"btn btn-primary btn-block\" [routerLink]='[\"/scan\"]'>Scan Exhibit Code</a>\n<div class=\"text-center\">\n    <img src=\"assets/MuseumMap.JPG\" class=\"img-fluid\">\n</div>\n<a class=\"btn btn-primary btn-block\" [routerLink]='[\"/scan\"]'>Scan Exhibit Code</a>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/nav-menu/nav-menu.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/nav-menu/nav-menu.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n    <nav class='navbar navbar-expand-sm navbar-toggleable-sm navbar-dark bg-dark mb-3'>\n      <div class=\"container text-center\">\n        <a class=\"navbar-brand\" [routerLink]='[\"/\"]'><img src=\"assets/museum-icon-image.png\" style=\"width:50px;height:50px;\"> Inside the Economy Museum</a>\n        <!-- <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\".navbar-collapse\" aria-label=\"Toggle navigation\"\n          [attr.aria-expanded]=\"isExpanded\" (click)=\"toggle()\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <div class=\"navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse\" [ngClass]='{\"show\": isExpanded}'>\n          <ul class=\"navbar-nav flex-grow\">\n            <li class=\"nav-item\" [routerLinkActive]='[\"link-active\"]' [routerLinkActiveOptions]='{ exact: true }'>\n              <a class=\"nav-link text-dark\" [routerLink]='[\"/\"]'>Home</a>\n            </li>\n            <li class=\"nav-item\" [routerLinkActive]='[\"link-active\"]'>\n              <a class=\"nav-link text-dark\" [routerLink]='[\"/counter\"]'>Counter</a>\n            </li>\n            <li class=\"nav-item\" [routerLinkActive]='[\"link-active\"]'>\n              <a class=\"nav-link text-dark\" [routerLink]='[\"/fetch-data\"]'>Fetch data</a>\n            </li>\n          </ul>\n        </div> -->\n      </div>\n    </nav>\n  </header>\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/scan/scan.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/scan/scan.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <qr-scanner (onRead)=\"onRead($event)\"></qr-scanner> -->\n<zxing-scanner \n  [enable]=\"scannerOn\" \n  [formats]=\"allowedFormats\"\n  (scanSuccess)=\"scanSuccess($event)\"></zxing-scanner>\n  <a class=\"btn btn-primary btn-block\" [routerLink]='[\"/map\"]'>Cancel</a>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/visitor-info/get-age/get-age.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/visitor-info/get-age/get-age.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\">\n    <label for=\"exampleInputEmail1\">What age group are you in?</label>\n    <div class=\"form-check\">\n        <input class=\"form-check-input\" type=\"radio\" name=\"age\" id=\"ageGroup1\" value=\"17 or under\" [(ngModel)]=\"age\">\n        <label class=\"form-check-label\" for=\"ageGroup1\">\n            17 or under\n        </label>\n    </div>\n    <div class=\"form-check\">\n        <input class=\"form-check-input\" type=\"radio\" name=\"age\" id=\"ageGroup2\" value=\"18 to 24\" [(ngModel)]=\"age\">\n        <label class=\"form-check-label\" for=\"ageGroup2\">\n            18 to 24\n        </label>\n    </div>\n    <div class=\"form-check\">\n        <input class=\"form-check-input\" type=\"radio\" name=\"age\" id=\"ageGroup3\" value=\"25 to 34\" [(ngModel)]=\"age\">\n        <label class=\"form-check-label\" for=\"ageGroup3\">\n            25 to 34\n        </label>\n    </div>\n    <div class=\"form-check\">\n        <input class=\"form-check-input\" type=\"radio\" name=\"age\" id=\"ageGroup4\" value=\"35 to 44\" [(ngModel)]=\"age\">\n        <label class=\"form-check-label\" for=\"ageGroup4\">\n            35 to 44\n        </label>\n    </div>\n    <div class=\"form-check\">\n        <input class=\"form-check-input\" type=\"radio\" name=\"age\" id=\"ageGroup5\" value=\"45 to 54\" [(ngModel)]=\"age\">\n        <label class=\"form-check-label\" for=\"ageGroup5\">\n            45 to 54\n        </label>\n    </div>\n    <div class=\"form-check\">\n        <input class=\"form-check-input\" type=\"radio\" name=\"age\" id=\"ageGroup6\" value=\"55 to 64\" [(ngModel)]=\"age\">\n        <label class=\"form-check-label\" for=\"ageGroup6\">\n            55 to 64\n        </label>\n    </div>\n    <div class=\"form-check\">\n        <input class=\"form-check-input\" type=\"radio\" name=\"age\" id=\"ageGroup7\" value=\"65 or older\" [(ngModel)]=\"age\">\n        <label class=\"form-check-label\" for=\"ageGroup7\">\n            65 or older\n        </label>\n    </div>\n    <div class=\"form-check\">\n        <input class=\"form-check-input\" type=\"radio\" name=\"age\" id=\"ageGroup8\" value=\"No Response\" [(ngModel)]=\"age\">\n        <label class=\"form-check-label\" for=\"ageGroup8\">\n            I'd rather not say.\n        </label>\n    </div>\n    <!-- <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small> -->\n</div>\n<div class=\"row\">\n    <div class=\"col\">\n        <button type=\"button\" class=\"btn btn-default btn-block\" (click)=\"goBack()\">&larr; Back</button>\n    </div>\n    <div class=\"col\">\n        <button type=\"button\" class=\"btn btn-primary btn-block\" (click)=\"goNext()\">Next &rarr;</button>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/visitor-info/get-education/get-education.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/visitor-info/get-education/get-education.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\">\n    <label for=\"exampleInputEmail1\">What is your education level?</label>\n    <div class=\"form-check\">\n        <input class=\"form-check-input\" type=\"radio\" name=\"education\" id=\"education1\" value=\"High School\" [(ngModel)]=\"education\">\n        <label class=\"form-check-label\" for=\"education1\">\n            High school\n        </label>\n    </div>\n    <div class=\"form-check\">\n        <input class=\"form-check-input\" type=\"radio\" name=\"education\" id=\"education2\" value=\"Some College\" [(ngModel)]=\"education\">\n        <label class=\"form-check-label\" for=\"education2\">\n            Some college\n        </label>\n    </div>\n    <div class=\"form-check\">\n        <input class=\"form-check-input\" type=\"radio\" name=\"education\" id=\"education3\" value=\"College Grad\" [(ngModel)]=\"education\">\n        <label class=\"form-check-label\" for=\"education3\">\n            College graduate\n        </label>\n    </div>\n    <div class=\"form-check\">\n        <input class=\"form-check-input\" type=\"radio\" name=\"education\" id=\"education4\" value=\"Post Grad\" [(ngModel)]=\"education\">\n        <label class=\"form-check-label\" for=\"education4\">\n            Post-gradudate\n        </label>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col\">\n        <button type=\"button\" class=\"btn btn-default btn-block\" (click)=\"goBack()\">&larr; Back</button>\n    </div>\n    <div class=\"col\">\n        <button type=\"button\" class=\"btn btn-primary btn-block\" (click)=\"goNext()\">Next &rarr;</button>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/visitor-info/get-group/get-group.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/visitor-info/get-group/get-group.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\">\n    <label for=\"exampleInputEmail1\">Are you visiting with a group?</label>\n    <div class=\"form-check\">\n      <input class=\"form-check-input\" type=\"radio\" name=\"grouping\" id=\"grouping1\" value=\"Individual\" [(ngModel)]=\"group\">\n      <label class=\"form-check-label\" for=\"grouping1\">\n        It's just me!\n      </label>\n    </div>\n    <div class=\"form-check\">\n      <input class=\"form-check-input\" type=\"radio\" name=\"grouping\" id=\"grouping2\" value=\"School\" [(ngModel)]=\"group\">\n      <label class=\"form-check-label\" for=\"grouping2\">\n        I'm here with a school group.\n      </label>\n    </div>\n    <div class=\"form-check\">\n      <input class=\"form-check-input\" type=\"radio\" name=\"grouping\" id=\"grouping3\" value=\"Adults and Kids\" [(ngModel)]=\"group\">\n      <label class=\"form-check-label\" for=\"grouping3\">\n        We are one or more adults with one or more children.\n      </label>\n    </div>\n    <div class=\"form-check\">\n      <input class=\"form-check-input\" type=\"radio\" name=\"grouping\" id=\"grouping4\" value=\"Adults\" [(ngModel)]=\"group\">\n      <label class=\"form-check-label\" for=\"grouping4\">\n        We are two or more adults.\n      </label>\n    </div>\n    <div class=\"form-check\">\n      <input class=\"form-check-input\" type=\"radio\" name=\"grouping\" id=\"grouping5\" value=\"Other\" [(ngModel)]=\"group\">\n      <label class=\"form-check-label\" for=\"grouping5\">\n        We are something else.\n      </label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col\">\n        <button type=\"button\" class=\"btn btn-default btn-block\" (click)=\"goBack()\">&larr; Back</button>\n    </div>\n    <div class=\"col\">\n        <button type=\"button\" class=\"btn btn-primary btn-block\" (click)=\"goNext()\">Next &rarr;</button>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/visitor-info/get-zip/get-zip.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/visitor-info/get-zip/get-zip.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\">\n    <label for=\"exampleInputEmail1\">What zip code are you from?</label>\n    <input type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter zip\" [(ngModel)]=\"zip\">\n    <!-- <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small> -->\n  </div>\n<div class=\"row\">\n    <div class=\"col\">\n        <button type=\"button\" class=\"btn btn-default btn-block\" (click)=\"goBack()\">&larr; Back</button>\n    </div>\n    <div class=\"col\">\n        <button type=\"button\" class=\"btn btn-primary btn-block\" (click)=\"goNext()\">Next &rarr;</button>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/visitor-info/visitor-info.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/visitor-info/visitor-info.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>Tell Us About You</h4>\n<p>\n  All questions are optional, but your responses help us make the Museum a more awesome place to visit. :-)\n</p>\n<hr>\n<div [@routeAnimations]=\"prepareRoute(outlet)\" class=\"container\">\n  <router-outlet #outlet=\"outlet\"></router-outlet>\n</div>\n\n<!-- <form>\n  <div class=\"form-group\">\n    <label for=\"exampleInputEmail1\">What zip code are you from?</label>\n    <input type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter zip\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"exampleInputEmail1\">What age group are you in?</label>\n    <div class=\"form-check\">\n      <input class=\"form-check-input\" type=\"radio\" name=\"age\" id=\"ageGroup1\" value=\"17 or under\">\n      <label class=\"form-check-label\" for=\"ageGroup1\">\n        17 or under\n      </label>\n    </div>\n    <div class=\"form-check\">\n      <input class=\"form-check-input\" type=\"radio\" name=\"age\" id=\"ageGroup2\" value=\"18 to 24\">\n      <label class=\"form-check-label\" for=\"ageGroup2\">\n        18 to 24\n      </label>\n    </div>\n    <div class=\"form-check\">\n      <input class=\"form-check-input\" type=\"radio\" name=\"age\" id=\"ageGroup3\" value=\"25 to 34\">\n      <label class=\"form-check-label\" for=\"ageGroup3\">\n        25 to 34\n      </label>\n    </div>\n    <div class=\"form-check\">\n      <input class=\"form-check-input\" type=\"radio\" name=\"age\" id=\"ageGroup4\" value=\"35 to 44\">\n      <label class=\"form-check-label\" for=\"ageGroup4\">\n        35 to 44\n      </label>\n    </div>\n    <div class=\"form-check\">\n      <input class=\"form-check-input\" type=\"radio\" name=\"age\" id=\"ageGroup5\" value=\"45 to 54\">\n      <label class=\"form-check-label\" for=\"ageGroup5\">\n        45 to 54\n      </label>\n    </div>\n    <div class=\"form-check\">\n      <input class=\"form-check-input\" type=\"radio\" name=\"age\" id=\"ageGroup6\" value=\"55 to 64\">\n      <label class=\"form-check-label\" for=\"ageGroup6\">\n        55 to 64\n      </label>\n    </div>\n    <div class=\"form-check\">\n      <input class=\"form-check-input\" type=\"radio\" name=\"age\" id=\"ageGroup7\" value=\"65 or older\">\n      <label class=\"form-check-label\" for=\"ageGroup7\">\n        65 or older\n      </label>\n    </div>\n    <div class=\"form-check\">\n      <input class=\"form-check-input\" type=\"radio\" name=\"age\" id=\"ageGroup8\" value=\"No Response\">\n      <label class=\"form-check-label\" for=\"ageGroup8\">\n        I'd rather not say.\n      </label>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"exampleInputEmail1\">Are you visiting with a group?</label>\n    <div class=\"form-check\">\n      <input class=\"form-check-input\" type=\"radio\" name=\"grouping\" id=\"grouping1\" value=\"Individual\">\n      <label class=\"form-check-label\" for=\"grouping1\">\n        It's just me!\n      </label>\n    </div>\n    <div class=\"form-check\">\n      <input class=\"form-check-input\" type=\"radio\" name=\"grouping\" id=\"grouping2\" value=\"School\">\n      <label class=\"form-check-label\" for=\"grouping2\">\n        I'm here with a school group.\n      </label>\n    </div>\n    <div class=\"form-check\">\n      <input class=\"form-check-input\" type=\"radio\" name=\"grouping\" id=\"grouping3\" value=\"Adults and Kids\">\n      <label class=\"form-check-label\" for=\"grouping3\">\n        We ar one or more adults with one or more children.\n      </label>\n    </div>\n    <div class=\"form-check\">\n      <input class=\"form-check-input\" type=\"radio\" name=\"grouping\" id=\"grouping4\" value=\"Adults\">\n      <label class=\"form-check-label\" for=\"grouping4\">\n        We are two or more adults.\n      </label>\n    </div>\n    <div class=\"form-check\">\n      <input class=\"form-check-input\" type=\"radio\" name=\"age\" id=\"grouping5\" value=\"Other\">\n      <label class=\"form-check-label\" for=\"grouping5\">\n        We are something else.\n      </label>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"exampleInputEmail1\">What is your education level?</label>\n    <div class=\"form-check\">\n      <input class=\"form-check-input\" type=\"radio\" name=\"education\" id=\"education1\" value=\"High School\">\n      <label class=\"form-check-label\" for=\"education1\">\n        High school\n      </label>\n    </div>\n    <div class=\"form-check\">\n      <input class=\"form-check-input\" type=\"radio\" name=\"education\" id=\"education2\" value=\"Some College\">\n      <label class=\"form-check-label\" for=\"education2\">\n        Some college\n      </label>\n    </div>\n    <div class=\"form-check\">\n      <input class=\"form-check-input\" type=\"radio\" name=\"education\" id=\"education3\" value=\"College Grad\">\n      <label class=\"form-check-label\" for=\"education3\">\n        College graduate\n      </label>\n    </div>\n    <div class=\"form-check\">\n      <input class=\"form-check-input\" type=\"radio\" name=\"education\" id=\"education4\" value=\"Post Grad\">\n      <label class=\"form-check-label\" for=\"education4\">\n        Post-gradudate\n      </label>\n    </div>\n  </div>\n  <a class=\"btn btn-primary\" [routerLink]='[\"/map\"]'>Submit</a>\n</form> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/visitor-thanks/visitor-thanks.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/visitor-thanks/visitor-thanks.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center\">\n    <h1>Thanks!</h1>\n    A virtual slow clap be bestowed upon you!<br>\n    Here's what you told us:\n</div>\n<ol>\n    <li><strong>Your zip:</strong> {{ data.zip }}</li>\n    <li><strong>Your age:</strong> {{ data.age }}</li>\n    <li><strong>Your group:</strong> {{ data.group }}</li>\n    <li><strong>Your education level:</strong> {{ data.education }}</li>\n</ol>\n<div class=\"row\">\n    <div class=\"col\">\n        <a class=\"btn btn-block btn-default\" [routerLink]='[\"/visitorInfo/getEducation\"]'>&larr; Back</a>\n    </div>\n    <div class=\"col\">\n        <a class=\"btn btn-block btn-default\" [routerLink]='[\"/visitorInfo/getZip\"]'>&lArr; Way back</a>\n    </div>\n    <div class=\"col\">\n        <button class=\"btn btn-block btn-primary\" (click)=\"startVisit()\">I'm good. &rarr;</button>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/animations.ts":
/*!*******************************!*\
  !*** ./src/app/animations.ts ***!
  \*******************************/
/*! exports provided: slideInAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideInAnimation", function() { return slideInAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");

const slideInAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimations', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* <=> *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '-100%' })
        ], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])(), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '100%' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '0%' }))
            ], { optional: true })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])(), { optional: true }),
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* <=> FilterPage', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '-100%' })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '100%' }))
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '0%' }))
            ])
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
    ])
]);


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _visitor_info_visitor_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./visitor-info/visitor-info.component */ "./src/app/visitor-info/visitor-info.component.ts");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./map/map.component */ "./src/app/map/map.component.ts");
/* harmony import */ var _scan_scan_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scan/scan.component */ "./src/app/scan/scan.component.ts");
/* harmony import */ var _exhibit_scarcity_scarcity_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./exhibit/scarcity/scarcity.component */ "./src/app/exhibit/scarcity/scarcity.component.ts");
/* harmony import */ var _exhibit_decide_decide_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./exhibit/decide/decide.component */ "./src/app/exhibit/decide/decide.component.ts");
/* harmony import */ var _visitor_info_get_zip_get_zip_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./visitor-info/get-zip/get-zip.component */ "./src/app/visitor-info/get-zip/get-zip.component.ts");
/* harmony import */ var _visitor_info_get_age_get_age_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./visitor-info/get-age/get-age.component */ "./src/app/visitor-info/get-age/get-age.component.ts");
/* harmony import */ var _visitor_info_get_group_get_group_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./visitor-info/get-group/get-group.component */ "./src/app/visitor-info/get-group/get-group.component.ts");
/* harmony import */ var _visitor_info_get_education_get_education_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./visitor-info/get-education/get-education.component */ "./src/app/visitor-info/get-education/get-education.component.ts");
/* harmony import */ var _visitor_thanks_visitor_thanks_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./visitor-thanks/visitor-thanks.component */ "./src/app/visitor-thanks/visitor-thanks.component.ts");














const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], pathMatch: 'full', data: { animation: 'HomePage' } },
    {
        path: 'visitorInfo', component: _visitor_info_visitor_info_component__WEBPACK_IMPORTED_MODULE_4__["VisitorInfoComponent"], data: { animation: 'VisitorPage' }, children: [
            { path: '', component: _visitor_info_get_zip_get_zip_component__WEBPACK_IMPORTED_MODULE_9__["GetZipComponent"], data: { animation: 'GetZipPage0' } },
            { path: 'getZip', component: _visitor_info_get_zip_get_zip_component__WEBPACK_IMPORTED_MODULE_9__["GetZipComponent"], data: { animation: 'GetZipPage' } },
            { path: 'getAge', component: _visitor_info_get_age_get_age_component__WEBPACK_IMPORTED_MODULE_10__["GetAgeComponent"], data: { animation: 'GetAgePage' } },
            { path: 'getGroup', component: _visitor_info_get_group_get_group_component__WEBPACK_IMPORTED_MODULE_11__["GetGroupComponent"], data: { animation: 'GetGroupPage' } },
            { path: 'getEducation', component: _visitor_info_get_education_get_education_component__WEBPACK_IMPORTED_MODULE_12__["GetEducationComponent"], data: { animation: 'GetEducationPage' } },
        ]
    },
    { path: 'thanks', component: _visitor_thanks_visitor_thanks_component__WEBPACK_IMPORTED_MODULE_13__["VisitorThanksComponent"], data: { animation: 'ThanksPage' } },
    { path: 'map', component: _map_map_component__WEBPACK_IMPORTED_MODULE_5__["MapComponent"], data: { animation: 'MapPage' } },
    { path: 'scan', component: _scan_scan_component__WEBPACK_IMPORTED_MODULE_6__["ScanComponent"], data: { animation: 'ScanPage' } },
    { path: 'exh-SCARCITY', component: _exhibit_scarcity_scarcity_component__WEBPACK_IMPORTED_MODULE_7__["SCARCITYComponent"], data: { animation: 'ScarcityExhibitPage' } },
    { path: 'exh-DECIDE', component: _exhibit_decide_decide_component__WEBPACK_IMPORTED_MODULE_8__["DECIDEComponent"], data: { animation: 'DecideExhibitPage' } }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animations */ "./src/app/animations.ts");



let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Virtual Ambassador Client';
    }
    prepareRoute(outlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        animations: [
            _animations__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]
        ],
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @zxing/ngx-scanner */ "./node_modules/@zxing/ngx-scanner/fesm2015/zxing-ngx-scanner.js");
/* harmony import */ var angular_star_rating__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-star-rating */ "./node_modules/angular-star-rating/esm2015/angular-star-rating.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./nav-menu/nav-menu.component */ "./src/app/nav-menu/nav-menu.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _visitor_info_visitor_info_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./visitor-info/visitor-info.component */ "./src/app/visitor-info/visitor-info.component.ts");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./map/map.component */ "./src/app/map/map.component.ts");
/* harmony import */ var _exhibit_exhibit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./exhibit/exhibit.component */ "./src/app/exhibit/exhibit.component.ts");
/* harmony import */ var _scan_scan_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./scan/scan.component */ "./src/app/scan/scan.component.ts");
/* harmony import */ var _exhibit_scarcity_scarcity_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./exhibit/scarcity/scarcity.component */ "./src/app/exhibit/scarcity/scarcity.component.ts");
/* harmony import */ var _exhibit_decide_decide_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./exhibit/decide/decide.component */ "./src/app/exhibit/decide/decide.component.ts");
/* harmony import */ var _my_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./my.service */ "./src/app/my.service.ts");
/* harmony import */ var _visitor_info_get_zip_get_zip_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./visitor-info/get-zip/get-zip.component */ "./src/app/visitor-info/get-zip/get-zip.component.ts");
/* harmony import */ var _visitor_info_get_age_get_age_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./visitor-info/get-age/get-age.component */ "./src/app/visitor-info/get-age/get-age.component.ts");
/* harmony import */ var _visitor_info_get_group_get_group_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./visitor-info/get-group/get-group.component */ "./src/app/visitor-info/get-group/get-group.component.ts");
/* harmony import */ var _visitor_info_get_education_get_education_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./visitor-info/get-education/get-education.component */ "./src/app/visitor-info/get-education/get-education.component.ts");
/* harmony import */ var _visitor_thanks_visitor_thanks_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./visitor-thanks/visitor-thanks.component */ "./src/app/visitor-thanks/visitor-thanks.component.ts");
























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
            _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_10__["NavMenuComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
            _visitor_info_visitor_info_component__WEBPACK_IMPORTED_MODULE_12__["VisitorInfoComponent"],
            _map_map_component__WEBPACK_IMPORTED_MODULE_13__["MapComponent"],
            _exhibit_exhibit_component__WEBPACK_IMPORTED_MODULE_14__["ExhibitComponent"],
            _scan_scan_component__WEBPACK_IMPORTED_MODULE_15__["ScanComponent"],
            _exhibit_scarcity_scarcity_component__WEBPACK_IMPORTED_MODULE_16__["SCARCITYComponent"],
            _exhibit_decide_decide_component__WEBPACK_IMPORTED_MODULE_17__["DECIDEComponent"],
            _visitor_info_get_zip_get_zip_component__WEBPACK_IMPORTED_MODULE_19__["GetZipComponent"],
            _visitor_info_get_age_get_age_component__WEBPACK_IMPORTED_MODULE_20__["GetAgeComponent"],
            _visitor_info_get_group_get_group_component__WEBPACK_IMPORTED_MODULE_21__["GetGroupComponent"],
            _visitor_info_get_education_get_education_component__WEBPACK_IMPORTED_MODULE_22__["GetEducationComponent"],
            _visitor_thanks_visitor_thanks_component__WEBPACK_IMPORTED_MODULE_23__["VisitorThanksComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_6__["ZXingScannerModule"],
            angular_star_rating__WEBPACK_IMPORTED_MODULE_7__["StarRatingModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"]
        ],
        providers: [_my_service__WEBPACK_IMPORTED_MODULE_18__["MyService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/exhibit/decide/decide.component.scss":
/*!******************************************************!*\
  !*** ./src/app/exhibit/decide/decide.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4aGliaXQvZGVjaWRlL2RlY2lkZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/exhibit/decide/decide.component.ts":
/*!****************************************************!*\
  !*** ./src/app/exhibit/decide/decide.component.ts ***!
  \****************************************************/
/*! exports provided: DECIDEComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DECIDEComponent", function() { return DECIDEComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_my_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/my.service */ "./src/app/my.service.ts");



let DECIDEComponent = class DECIDEComponent {
    constructor(svc) {
        this.svc = svc;
    }
    ngOnInit() {
    }
    rateExhibit(e) {
        console.info('rate exhibit', e);
        this.svc.saveRating('DECIDE', e.rating);
    }
};
DECIDEComponent.ctorParameters = () => [
    { type: src_app_my_service__WEBPACK_IMPORTED_MODULE_2__["MyService"] }
];
DECIDEComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-decide',
        template: __webpack_require__(/*! raw-loader!./decide.component.html */ "./node_modules/raw-loader/index.js!./src/app/exhibit/decide/decide.component.html"),
        styles: [__webpack_require__(/*! ./decide.component.scss */ "./src/app/exhibit/decide/decide.component.scss")]
    })
], DECIDEComponent);



/***/ }),

/***/ "./src/app/exhibit/exhibit.component.scss":
/*!************************************************!*\
  !*** ./src/app/exhibit/exhibit.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4aGliaXQvZXhoaWJpdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/exhibit/exhibit.component.ts":
/*!**********************************************!*\
  !*** ./src/app/exhibit/exhibit.component.ts ***!
  \**********************************************/
/*! exports provided: ExhibitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExhibitComponent", function() { return ExhibitComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let ExhibitComponent = class ExhibitComponent {
    constructor(route) {
        this.route = route;
        this.exhibitId$ = route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(p => p.exhibitId));
    }
    ngOnInit() {
    }
};
ExhibitComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
ExhibitComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-exhibit',
        template: __webpack_require__(/*! raw-loader!./exhibit.component.html */ "./node_modules/raw-loader/index.js!./src/app/exhibit/exhibit.component.html"),
        styles: [__webpack_require__(/*! ./exhibit.component.scss */ "./src/app/exhibit/exhibit.component.scss")]
    })
], ExhibitComponent);



/***/ }),

/***/ "./src/app/exhibit/scarcity/scarcity.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/exhibit/scarcity/scarcity.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4aGliaXQvc2NhcmNpdHkvc2NhcmNpdHkuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/exhibit/scarcity/scarcity.component.ts":
/*!********************************************************!*\
  !*** ./src/app/exhibit/scarcity/scarcity.component.ts ***!
  \********************************************************/
/*! exports provided: SCARCITYComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCARCITYComponent", function() { return SCARCITYComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_my_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/my.service */ "./src/app/my.service.ts");



let SCARCITYComponent = class SCARCITYComponent {
    constructor(svc) {
        this.svc = svc;
    }
    ngOnInit() {
    }
    rateExhibit(e) {
        console.info('rate exhibit', e);
        this.svc.saveRating('SCARCITY', e.rating);
    }
};
SCARCITYComponent.ctorParameters = () => [
    { type: src_app_my_service__WEBPACK_IMPORTED_MODULE_2__["MyService"] }
];
SCARCITYComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-scarcity',
        template: __webpack_require__(/*! raw-loader!./scarcity.component.html */ "./node_modules/raw-loader/index.js!./src/app/exhibit/scarcity/scarcity.component.html"),
        styles: [__webpack_require__(/*! ./scarcity.component.scss */ "./src/app/exhibit/scarcity/scarcity.component.scss")]
    })
], SCARCITYComponent);



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _my_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../my.service */ "./src/app/my.service.ts");




let HomeComponent = class HomeComponent {
    constructor(router, svc) {
        this.router = router;
        this.svc = svc;
    }
    ngOnInit() {
    }
    goToExhibitDemo() {
        setTimeout(() => {
            this.router.navigateByUrl("exh-SCARCITY");
        }, 10000);
    }
    startAnonymous() {
        this.svc.startAnonymousVisit();
        this.router.navigateByUrl("map");
    }
};
HomeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _my_service__WEBPACK_IMPORTED_MODULE_3__["MyService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/map/map.component.scss":
/*!****************************************!*\
  !*** ./src/app/map/map.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hcC9tYXAuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/map/map.component.ts":
/*!**************************************!*\
  !*** ./src/app/map/map.component.ts ***!
  \**************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MapComponent = class MapComponent {
    constructor() { }
    ngOnInit() {
    }
};
MapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-map',
        template: __webpack_require__(/*! raw-loader!./map.component.html */ "./node_modules/raw-loader/index.js!./src/app/map/map.component.html"),
        styles: [__webpack_require__(/*! ./map.component.scss */ "./src/app/map/map.component.scss")]
    })
], MapComponent);



/***/ }),

/***/ "./src/app/my.service.ts":
/*!*******************************!*\
  !*** ./src/app/my.service.ts ***!
  \*******************************/
/*! exports provided: MyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyService", function() { return MyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let MyService = class MyService {
    constructor(http) {
        this.http = http;
        this.visitorId = -1;
        this.VIS_ID_KEY = 'VISITOR-ID';
        this.visitorData = {};
        this.loadVisitorId();
    }
    startVisit() {
        let data = {
            "AgeRange": this.visitorData.age,
            "ZipCode": this.visitorData.zip,
            "GroupType": this.visitorData.group,
            "EducationLevel": this.visitorData.education
        };
        this.http.post(`https://ec2-52-87-186-251.compute-1.amazonaws.com/VAmbassadorService/api/visit/Start`, data)
            .toPromise()
            .then(id => {
            this.storeVisitorId(id);
        });
    }
    startAnonymousVisit() {
        this.http.post(`https://ec2-52-87-186-251.compute-1.amazonaws.com/VAmbassadorService/api/visit/StartAnonymous`, null)
            .toPromise()
            .then(id => {
            this.storeVisitorId(id);
        });
    }
    visitExhibit(stationId) {
        let data = {
            "VisitorId": this.visitorId,
            "StationId": stationId,
            "Description": "",
        };
        this.http.post(`https://ec2-52-87-186-251.compute-1.amazonaws.com/VAmbassadorService/api/visit/SaveStats`, data)
            .toPromise()
            .then(id => {
            console.info('saveStats id', id);
        });
    }
    saveRating(stationId, rating) {
        let data = {
            "VisitorId": this.visitorId,
            "StationId": stationId,
            "Rate": rating
        };
        this.http.post(`https://ec2-52-87-186-251.compute-1.amazonaws.com/VAmbassadorService/api/visit/SaveRating`, data)
            .toPromise()
            .then(id => {
            console.info('saveRating id', id);
        });
    }
    storeVisitorId(id) {
        this.visitorId = id;
        sessionStorage.setItem(this.VIS_ID_KEY, `${id}`);
    }
    loadVisitorId() {
        let visIdStr = sessionStorage.getItem(this.VIS_ID_KEY);
        let visId = parseInt(visIdStr);
        if (visId)
            this.visitorId = visId;
        return visId;
    }
    setVisitorZip(zip) {
        this.visitorData.zip = zip;
    }
    setVisitorAge(age) {
        this.visitorData.age = age;
    }
    setVisitorGroup(group) {
        this.visitorData.group = group;
    }
    setVisitorEducation(education) {
        this.visitorData.education = education;
    }
};
MyService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
MyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MyService);



/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.scss":
/*!**************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a.navbar-brand {\n  white-space: normal;\n  text-align: center;\n  word-break: break-all;\n}\n\nhtml {\n  font-size: 14px;\n}\n\n@media (min-width: 768px) {\n  html {\n    font-size: 16px;\n  }\n}\n\n.box-shadow {\n  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.05);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LW1lbnUvQzpcXGRldlxcVkFDbGllbnQvc3JjXFxhcHBcXG5hdi1tZW51XFxuYXYtbWVudS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUNDSjs7QURFRTtFQUNFLGVBQUE7QUNDSjs7QURDRTtFQUNFO0lBQ0UsZUFBQTtFQ0VKO0FBQ0Y7O0FEQ0U7RUFDRSxpREFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhLm5hdmJhci1icmFuZCB7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG4gIH1cclxuICBcclxuICBodG1sIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICBodG1sIHtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuYm94LXNoYWRvdyB7XHJcbiAgICBib3gtc2hhZG93OiAwIC4yNXJlbSAuNzVyZW0gcmdiYSgwLCAwLCAwLCAuMDUpO1xyXG4gIH1cclxuICAiLCJhLm5hdmJhci1icmFuZCB7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xufVxuXG5odG1sIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgaHRtbCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG59XG4uYm94LXNoYWRvdyB7XG4gIGJveC1zaGFkb3c6IDAgMC4yNXJlbSAwLjc1cmVtIHJnYmEoMCwgMCwgMCwgMC4wNSk7XG59Il19 */"

/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.ts":
/*!************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.ts ***!
  \************************************************/
/*! exports provided: NavMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavMenuComponent", function() { return NavMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavMenuComponent = class NavMenuComponent {
    constructor() {
        this.isExpanded = false;
    }
    collapse() {
        this.isExpanded = false;
    }
    toggle() {
        this.isExpanded = !this.isExpanded;
    }
    ngOnInit() {
    }
};
NavMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav-menu',
        template: __webpack_require__(/*! raw-loader!./nav-menu.component.html */ "./node_modules/raw-loader/index.js!./src/app/nav-menu/nav-menu.component.html"),
        styles: [__webpack_require__(/*! ./nav-menu.component.scss */ "./src/app/nav-menu/nav-menu.component.scss")]
    })
], NavMenuComponent);



/***/ }),

/***/ "./src/app/scan/scan.component.scss":
/*!******************************************!*\
  !*** ./src/app/scan/scan.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NjYW4vc2Nhbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/scan/scan.component.ts":
/*!****************************************!*\
  !*** ./src/app/scan/scan.component.ts ***!
  \****************************************/
/*! exports provided: ScanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScanComponent", function() { return ScanComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _zxing_library__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @zxing/library */ "./node_modules/@zxing/library/esm5/index.js");
/* harmony import */ var _zxing_library__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_zxing_library__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _my_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../my.service */ "./src/app/my.service.ts");





let ScanComponent = class ScanComponent {
    constructor(router, svc) {
        this.router = router;
        this.svc = svc;
        this.scannerOn = true;
        this.lightOn = false;
        this.allowedFormats = [
            _zxing_library__WEBPACK_IMPORTED_MODULE_3__["BarcodeFormat"].QR_CODE,
            _zxing_library__WEBPACK_IMPORTED_MODULE_3__["BarcodeFormat"].EAN_13,
            _zxing_library__WEBPACK_IMPORTED_MODULE_3__["BarcodeFormat"].CODE_128,
            _zxing_library__WEBPACK_IMPORTED_MODULE_3__["BarcodeFormat"].DATA_MATRIX
        ];
    }
    ngOnInit() {
        //this.scannerOn = true;
    }
    ngOnDestroy() {
        //this.lightOn = false;
        this.scannerOn = false;
    }
    onTorchCompatible(e) {
        console.info("torchCompatible", e);
        setTimeout(() => {
            if (this.scannerOn)
                this.lightOn = true;
        }, 500);
    }
    scanSuccess(data) {
        console.info("SCAN", data);
        if (data == 'SCARCITY' || data == 'DECIDE') {
            this.svc.visitExhibit(data);
            this.router.navigateByUrl(`/exh-${data}`);
        }
        else {
            console.error(`Unexpected scan data: ${data}`);
            //REMOVE THIS:
            //this.router.navigateByUrl(`/exhibit/ex1`);
        }
    }
    onRead(data) {
        console.info(data);
    }
};
ScanComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _my_service__WEBPACK_IMPORTED_MODULE_4__["MyService"] }
];
ScanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-scan',
        template: __webpack_require__(/*! raw-loader!./scan.component.html */ "./node_modules/raw-loader/index.js!./src/app/scan/scan.component.html"),
        styles: [__webpack_require__(/*! ./scan.component.scss */ "./src/app/scan/scan.component.scss")]
    })
], ScanComponent);



/***/ }),

/***/ "./src/app/visitor-info/get-age/get-age.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/visitor-info/get-age/get-age.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Zpc2l0b3ItaW5mby9nZXQtYWdlL2dldC1hZ2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/visitor-info/get-age/get-age.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/visitor-info/get-age/get-age.component.ts ***!
  \***********************************************************/
/*! exports provided: GetAgeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAgeComponent", function() { return GetAgeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_my_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/my.service */ "./src/app/my.service.ts");




let GetAgeComponent = class GetAgeComponent {
    constructor(router, svc) {
        this.router = router;
        this.svc = svc;
        this.age = svc.visitorData.age;
    }
    ngOnInit() {
    }
    goBack() {
        this.router.navigateByUrl('visitorInfo/getZip');
    }
    goNext() {
        this.svc.setVisitorAge(this.age);
        this.router.navigateByUrl('visitorInfo/getGroup');
    }
};
GetAgeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_my_service__WEBPACK_IMPORTED_MODULE_3__["MyService"] }
];
GetAgeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-get-age',
        template: __webpack_require__(/*! raw-loader!./get-age.component.html */ "./node_modules/raw-loader/index.js!./src/app/visitor-info/get-age/get-age.component.html"),
        styles: [__webpack_require__(/*! ./get-age.component.scss */ "./src/app/visitor-info/get-age/get-age.component.scss")]
    })
], GetAgeComponent);



/***/ }),

/***/ "./src/app/visitor-info/get-education/get-education.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/visitor-info/get-education/get-education.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Zpc2l0b3ItaW5mby9nZXQtZWR1Y2F0aW9uL2dldC1lZHVjYXRpb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/visitor-info/get-education/get-education.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/visitor-info/get-education/get-education.component.ts ***!
  \***********************************************************************/
/*! exports provided: GetEducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetEducationComponent", function() { return GetEducationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_my_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/my.service */ "./src/app/my.service.ts");




let GetEducationComponent = class GetEducationComponent {
    constructor(router, svc) {
        this.router = router;
        this.svc = svc;
        this.education = svc.visitorData.education;
    }
    ngOnInit() {
    }
    goBack() {
        this.router.navigateByUrl('visitorInfo/getGroup');
    }
    goNext() {
        this.svc.setVisitorEducation(this.education);
        this.router.navigateByUrl('thanks');
    }
};
GetEducationComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_my_service__WEBPACK_IMPORTED_MODULE_3__["MyService"] }
];
GetEducationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-get-education',
        template: __webpack_require__(/*! raw-loader!./get-education.component.html */ "./node_modules/raw-loader/index.js!./src/app/visitor-info/get-education/get-education.component.html"),
        styles: [__webpack_require__(/*! ./get-education.component.scss */ "./src/app/visitor-info/get-education/get-education.component.scss")]
    })
], GetEducationComponent);



/***/ }),

/***/ "./src/app/visitor-info/get-group/get-group.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/visitor-info/get-group/get-group.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Zpc2l0b3ItaW5mby9nZXQtZ3JvdXAvZ2V0LWdyb3VwLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/visitor-info/get-group/get-group.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/visitor-info/get-group/get-group.component.ts ***!
  \***************************************************************/
/*! exports provided: GetGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetGroupComponent", function() { return GetGroupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_my_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/my.service */ "./src/app/my.service.ts");




let GetGroupComponent = class GetGroupComponent {
    constructor(router, svc) {
        this.router = router;
        this.svc = svc;
        this.group = svc.visitorData.group;
    }
    ngOnInit() {
    }
    goBack() {
        this.router.navigateByUrl('visitorInfo/getAge');
    }
    goNext() {
        this.svc.setVisitorGroup(this.group);
        this.router.navigateByUrl('visitorInfo/getEducation');
    }
};
GetGroupComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_my_service__WEBPACK_IMPORTED_MODULE_3__["MyService"] }
];
GetGroupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-get-group',
        template: __webpack_require__(/*! raw-loader!./get-group.component.html */ "./node_modules/raw-loader/index.js!./src/app/visitor-info/get-group/get-group.component.html"),
        styles: [__webpack_require__(/*! ./get-group.component.scss */ "./src/app/visitor-info/get-group/get-group.component.scss")]
    })
], GetGroupComponent);



/***/ }),

/***/ "./src/app/visitor-info/get-zip/get-zip.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/visitor-info/get-zip/get-zip.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Zpc2l0b3ItaW5mby9nZXQtemlwL2dldC16aXAuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/visitor-info/get-zip/get-zip.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/visitor-info/get-zip/get-zip.component.ts ***!
  \***********************************************************/
/*! exports provided: GetZipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetZipComponent", function() { return GetZipComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_my_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/my.service */ "./src/app/my.service.ts");




let GetZipComponent = class GetZipComponent {
    constructor(router, svc) {
        this.router = router;
        this.svc = svc;
        this.zip = svc.visitorData.zip;
    }
    ngOnInit() {
    }
    goBack() {
        this.router.navigateByUrl('/');
    }
    goNext() {
        this.svc.setVisitorZip(this.zip);
        this.router.navigateByUrl('visitorInfo/getAge');
    }
};
GetZipComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_my_service__WEBPACK_IMPORTED_MODULE_3__["MyService"] }
];
GetZipComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-get-zip',
        template: __webpack_require__(/*! raw-loader!./get-zip.component.html */ "./node_modules/raw-loader/index.js!./src/app/visitor-info/get-zip/get-zip.component.html"),
        styles: [__webpack_require__(/*! ./get-zip.component.scss */ "./src/app/visitor-info/get-zip/get-zip.component.scss")]
    })
], GetZipComponent);



/***/ }),

/***/ "./src/app/visitor-info/visitor-info.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/visitor-info/visitor-info.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Zpc2l0b3ItaW5mby92aXNpdG9yLWluZm8uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/visitor-info/visitor-info.component.ts":
/*!********************************************************!*\
  !*** ./src/app/visitor-info/visitor-info.component.ts ***!
  \********************************************************/
/*! exports provided: VisitorInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorInfoComponent", function() { return VisitorInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animations */ "./src/app/animations.ts");



let VisitorInfoComponent = class VisitorInfoComponent {
    constructor() { }
    ngOnInit() {
    }
    prepareRoute(outlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    }
};
VisitorInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-visitor-info',
        template: __webpack_require__(/*! raw-loader!./visitor-info.component.html */ "./node_modules/raw-loader/index.js!./src/app/visitor-info/visitor-info.component.html"),
        animations: [
            _animations__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]
        ],
        styles: [__webpack_require__(/*! ./visitor-info.component.scss */ "./src/app/visitor-info/visitor-info.component.scss")]
    })
], VisitorInfoComponent);



/***/ }),

/***/ "./src/app/visitor-thanks/visitor-thanks.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/visitor-thanks/visitor-thanks.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Zpc2l0b3ItdGhhbmtzL3Zpc2l0b3ItdGhhbmtzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/visitor-thanks/visitor-thanks.component.ts":
/*!************************************************************!*\
  !*** ./src/app/visitor-thanks/visitor-thanks.component.ts ***!
  \************************************************************/
/*! exports provided: VisitorThanksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorThanksComponent", function() { return VisitorThanksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _my_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../my.service */ "./src/app/my.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let VisitorThanksComponent = class VisitorThanksComponent {
    constructor(svc, router) {
        this.svc = svc;
        this.router = router;
        this.data = svc.visitorData;
    }
    ngOnInit() {
    }
    startVisit() {
        this.svc.startVisit();
        this.router.navigateByUrl('map');
    }
};
VisitorThanksComponent.ctorParameters = () => [
    { type: _my_service__WEBPACK_IMPORTED_MODULE_2__["MyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
VisitorThanksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-visitor-thanks',
        template: __webpack_require__(/*! raw-loader!./visitor-thanks.component.html */ "./node_modules/raw-loader/index.js!./src/app/visitor-thanks/visitor-thanks.component.html"),
        styles: [__webpack_require__(/*! ./visitor-thanks.component.scss */ "./src/app/visitor-thanks/visitor-thanks.component.scss")]
    })
], VisitorThanksComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\dev\VAClient\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map