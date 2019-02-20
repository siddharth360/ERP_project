webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container\n{\n    margin-top: 50px;\n    padding-top: 10px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n \n  <router-outlet></router-outlet>\n  <flash-messages></flash-messages>\n    <app-footer></app-footer>\n  \n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular2_flash_messages_module__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular2_flash_messages_module___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_angular2_flash_messages_module__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__guards_auth_guard1__ = __webpack_require__("../../../../../src/app/guards/auth.guard1.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_forgotpassword_forgotpassword_component__ = __webpack_require__("../../../../../src/app/components/forgotpassword/forgotpassword.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_resetpassword_resetpassword_component__ = __webpack_require__("../../../../../src/app/components/resetpassword/resetpassword.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_addtask_addtask_component__ = __webpack_require__("../../../../../src/app/components/addtask/addtask.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_showtask_showtask_component__ = __webpack_require__("../../../../../src/app/components/showtask/showtask.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_edittask_edittask_component__ = __webpack_require__("../../../../../src/app/components/edittask/edittask.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_detailtask_detailtask_component__ = __webpack_require__("../../../../../src/app/components/detailtask/detailtask.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_aboutus_aboutus_component__ = __webpack_require__("../../../../../src/app/components/aboutus/aboutus.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var appRoutes = [
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_11__components_register_register_component__["a" /* RegisterComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__guards_auth_guard1__["a" /* AuthGuard1 */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_8__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_9__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'forgotpassword', component: __WEBPACK_IMPORTED_MODULE_17__components_forgotpassword_forgotpassword_component__["a" /* ForgotpasswordComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__guards_auth_guard1__["a" /* AuthGuard1 */]] },
    { path: 'resetpassword', component: __WEBPACK_IMPORTED_MODULE_18__components_resetpassword_resetpassword_component__["a" /* ResetpasswordComponent */] },
    { path: 'addtask', component: __WEBPACK_IMPORTED_MODULE_19__components_addtask_addtask_component__["a" /* AddtaskComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'showtask', component: __WEBPACK_IMPORTED_MODULE_20__components_showtask_showtask_component__["a" /* ShowtaskComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'edittask/:_id', component: __WEBPACK_IMPORTED_MODULE_21__components_edittask_edittask_component__["a" /* EdittaskComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'detailtask/:_id', component: __WEBPACK_IMPORTED_MODULE_22__components_detailtask_detailtask_component__["a" /* DetailtaskComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'aboutus', component: __WEBPACK_IMPORTED_MODULE_24__components_aboutus_aboutus_component__["a" /* AboutusComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__["a" /* HomeComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__["a" /* HomeComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_forgotpassword_forgotpassword_component__["a" /* ForgotpasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_resetpassword_resetpassword_component__["a" /* ResetpasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_addtask_addtask_component__["a" /* AddtaskComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_showtask_showtask_component__["a" /* ShowtaskComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_edittask_edittask_component__["a" /* EdittaskComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_detailtask_detailtask_component__["a" /* DetailtaskComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_aboutus_aboutus_component__["a" /* AboutusComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_13_angular2_flash_messages_module__["FlashMessagesModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_14__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_16__guards_auth_guard1__["a" /* AuthGuard1 */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/aboutus/aboutus.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.col-center {\n\tmargin: 0 auto;\n\tfloat: none !important;\n}\n.carousel {\n\tmargin: 50px auto;\n\tpadding: 0 70px;\n}\n.carousel .item {\n\tcolor: #999;\n\tfont-size: 14px;\n    text-align: center;\n\toverflow: hidden;\n    min-height: 290px;\n}\n.carousel .item .img-box {\n\twidth: 135px;\n\theight: 135px;\n\tmargin: 0 auto;\n\tpadding: 5px;\n\tborder: 1px solid #ddd;\n\tborder-radius: 50%;\n}\n.carousel .img-box img {\n\twidth: 100%;\n\theight: 100%;\n\tdisplay: block;\n\tborder-radius: 50%;\n}\n.carousel .testimonial {\n\tpadding: 30px 0 10px;\n}\n.carousel .overview {\t\n\tfont-style: italic;\n}\n.carousel .overview b {\n\ttext-transform: uppercase;\n\tcolor: #7AA641;\n}\n.carousel .carousel-control {\n\twidth: 40px;\n    height: 40px;\n    margin-top: -20px;\n    top: 50%;\n\tbackground: none;\n}\n.carousel-control  {\n    font-size: 68px;\n\tline-height: 42px;\n    position: absolute;\n    display: inline-block;\n\tcolor: rgba(0, 0, 0, 0.8);\n    text-shadow: 0 3px 3px #e6e6e6, 0 0 0 #000;\n}\n.carousel .carousel-indicators {\n\tbottom: -40px;\n}\n.carousel-indicators li, .carousel-indicators li.active {\n\twidth: 10px;\n    height: 0px;\n\tmargin: 1px 3px;\n\tborder-radius: 50%;\n}\n.carousel-indicators li {\t\n\tbackground: #999;\n\tborder-color: transparent;\n\tbox-shadow: inset 0 2px 1px rgba(0,0,0,0.2);\n}\n.carousel-indicators li.active {\t\n\tbackground: #555;\t\t\n\tbox-shadow: inset 0 2px 1px rgba(0,0,0,0.2);\n}\n\n.btn\n{\nwidth: 100px;\n}\n.padding{\n    padding-bottom:20px;\n    padding-top:5%;\n  }\n\n  .col-center h2 {\n\tcolor:black;\n\ttext-align: center;\n\ttext-transform: uppercase;\n\tfont-weight: bold;\n\tposition: relative;\n\tmargin: 30px 0 60px;\n}\n\n\n.text-muted{\n\tfont-size:2vw;\n}\n\nh2::after {\n\tcontent: \"\";\n\twidth: 100px;\n\tposition: absolute;\n\tmargin: 0 auto;\n\theight: 5px;\n\tbackground: #8fbc54;\n\tleft: 0;\n\tright: 0;\n\tbottom: -10px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/aboutus/aboutus.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-3 padding\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-8 col-center m-auto\">\n\t\t\t<h2>Developers</h2>\n\t\t\t<div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n\t\t\t\t<!-- Carousel indicators -->\n\t\t\t\t<ol class=\"carousel-indicators\">\n\t\t\t\t\t<li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n\t\t\t\t\t<li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n          <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\n          <li data-target=\"#myCarousel\" data-slide-to=\"3\"></li>\n\t\t\t\t</ol>   \n\t\t\t\t<!-- Wrapper for carousel items -->\n\t\t\t\t<div class=\"carousel-inner\">\n\t\t\t\t\t<div class=\"item carousel-item active\">\n\t\t\t\t\t\t<div class=\"img-box\"><img src=\"https://media.licdn.com/dms/image/C5103AQFtG4naRpEcBQ/profile-displayphoto-shrink_200_200/0?e=1555545600&v=beta&t=M_-M4t8b0n9nk-MJDR878-QcEMzdpPopQ9xMlgj1fb4\" alt=\"\"></div>\n            <p class=\"testimonial\">Life is a journey. You have to walk a million miles.</p>\n            <p class=\"overview\"><b>Shivam Manawat,<br></b>Mean Stack Developer</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item carousel-item\">\n\t\t\t\t\t\t<div class=\"img-box\"><img src=\"https://media.licdn.com/dms/image/C5103AQEg7rnV6sKT_g/profile-displayphoto-shrink_800_800/0?e=1556150400&v=beta&t=swfiRd6VsmDIuTIreTsXASjEKEAE_5VC4DjYAzxvWZA\" alt=\"\"></div>\n\t\t\t\t\t\t<p class=\"testimonial\">Success come to those who deserves it.</p>\n            <p class=\"overview\"><b>Varsha Singh,<br></b>Mean Stack Developer</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item carousel-item\">\n\t\t\t\t\t\t<div class=\"img-box\"><img src=\"https://media.licdn.com/dms/image/C5103AQE73MuVYTzGGQ/profile-displayphoto-shrink_800_800/0?e=1556150400&v=beta&t=UxmVQttQuQBKqt4uzNnh4wvhPSEv5U2TsLpC069dhOs\" alt=\"\"></div>\n            <p class=\"testimonial\">Where there is a will there is a way.</p>\n            <p class=\"overview\"><b>Siddarth,<br></b>Mean Stack Developer</p>\n          </div>\n          <div class=\"item carousel-item\">\n\t\t\t\t\t\t<div class=\"img-box\"><img src=\"https://media.licdn.com/dms/image/C5103AQE1k2LMJw5Qng/profile-displayphoto-shrink_800_800/0?e=1556150400&v=beta&t=VYDFKFAJbB-zaHKsDhgA1AKACpPZ1v3ncURkVQj3YMg\" alt=\"\"></div>\n            <p class=\"testimonial\">Hard work leads to success.</p>\n            <p class=\"overview\"><b>Pawan Singh,<br></b>Mean Stack Developer</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Carousel controls -->\n\t\t\t\t<a class=\"carousel-control left carousel-control-prev\" href=\"#myCarousel\" data-slide=\"prev\">\n\t\t\t\t<i class=\"fa fa-angle-left\"></i>\n\t\t\t\t</a>\n\t\t\t\t<a class=\"carousel-control right carousel-control-next\" href=\"#myCarousel\" data-slide=\"next\">\n\t\t\t<i class=\"fa fa-angle-right\"></i>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/aboutus/aboutus.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutusComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutusComponent = (function () {
    function AboutusComponent() {
    }
    AboutusComponent.prototype.ngOnInit = function () {
    };
    AboutusComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-aboutus',
            template: __webpack_require__("../../../../../src/app/components/aboutus/aboutus.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/aboutus/aboutus.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutusComponent);
    return AboutusComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/addtask/addtask.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn\n{\nwidth: 100px;\n}\n.padding{\n    padding-bottom:20px;\n    padding-top:5%;\n  }\n  .col-6\n  {\n    background-color:lightgrey;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/addtask/addtask.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container\">\n\n\n  <h2 class=\"page-header\">Addtask</h2>\n  <form (submit)=\"onaddtaskSubmit()\" >\n    <div class=\"form-group\">\n      <label for=\"taskId\">Task Id</label>\n      <input type=\"text\" [(ngModel)]=\"taskId\" name=\"taskId\" class=\"form-control\" id=\"taskId\" placeholder=\"Enter Task Id\">\n    </div>\n    <div class=\"form-group\">\n    <label for=\"taskName\">Task Name</label>\n      <input type=\"text\" [(ngModel)]=\"taskName\" name=\"taskName\" class=\"form-control\" id=\"taskName\" placeholder=\"Enter Task Name\">\n    </div>\n    \n    <div class=\"form-group\">\n      <label for=\"taskDesc\">Task Description</label>\n        <input type=\"text\" [(ngModel)]=\"taskDesc\" name=\"taskDesc\" class=\"form-control\" id=\"taskDesc\" placeholder=\"Enter Task Description\">\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"taskHandler\">Task Handler</label>\n          <input type=\"text\" [(ngModel)]=\"taskHandler\" name=\"taskHandler\" class=\"form-control\" id=\"taskHandler\" placeholder=\"Enter Task Handler\">\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"taskClientName\">Task Client Name</label>\n            <input type=\"text\" [(ngModel)]=\"taskClientName\" name=\"taskClientName\" class=\"form-control\" id=\"taskClientName\" placeholder=\"Enter Task Client Name\">\n          </div>\n    <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n  </form>\n</div>\n -->\n\n\n\n <div class=\"container mt-3 padding\" align=\"center\" >\n  <h1>ADD Task</h1>\n  <div class=\"col-6 col-offset-3\" >\n<div class=\"panel panel-default\">\n<br>\n  <div class=\"panel-body\">\n  <form class=\"form-horizontal\" (submit)=\"onaddtaskSubmit()\">\n\n  <div class=\"form-group\">\n    <label for=\"taskId\" class=\"col-sm-2 control-label\">TaskId </label>\n    <div class=\"col-sm-9\">\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"taskId\" name=\"taskId\" >\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"taskName\" class=\"col-sm-2 control-label\">TaskName </label>\n    <div class=\"col-sm-9\">\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"taskName\" name=\"taskName\">\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"taskDesc\" class=\"col-sm-2 control-label\">TaskDescription </label>\n    <div class=\"col-sm-9\">\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"taskDesc\" name=\"taskDesc\" >\n    </div>\n  </div>\n  \n  <div class=\"form-group\">\n    <label for=\"taskHandler\" class=\"col-sm-2 control-label\">TaskHandler </label>\n    <div class=\"col-sm-9\">\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"taskHandler\" name=\"taskHandler\" >\n    </div>\n  </div>\n  \n  <div class=\"form-group\">\n    <label for=\"taskClientName\" class=\"col-sm-2 control-label\">TaskClientName </label>\n    <div class=\"col-sm-9\">\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"taskClientName\" name=\"taskClientName\" >\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <div class=\"col-sm-offset-2 col-sm-8\">\n      <button type=\"submit\" class=\"btn btn-primary\">Add Task</button>\n      <a class=\"btn btn-dark\"  \t\trouterLink=\"/dashboard\">Go Back</a> \n    </div>\n   <br>\n   <br>\n  </div>\n</form>\n\n  </div>\n</div>\n</div>\n</div>    \n"

/***/ }),

/***/ "../../../../../src/app/components/addtask/addtask.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddtaskComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddtaskComponent = (function () {
    function AddtaskComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    AddtaskComponent.prototype.ngOnInit = function () {
    };
    AddtaskComponent.prototype.onaddtaskSubmit = function () {
        var _this = this;
        var task = {
            taskId: this.taskId,
            taskName: this.taskName,
            taskDesc: this.taskDesc,
            taskHandler: this.taskHandler,
            taskClientName: this.taskClientName
        };
        console.log("In add task" + task);
        this.authService.addtask(task).subscribe(function (data) {
            if (data.success) {
                console.log("success");
                _this.flashMessage.show('Added Task', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/showtask']);
            }
            else {
                _this.flashMessage.show('already exists', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/addtask']);
            }
        });
    };
    AddtaskComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-addtask',
            template: __webpack_require__("../../../../../src/app/components/addtask/addtask.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/addtask/addtask.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_app_services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]])
    ], AddtaskComponent);
    return AddtaskComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container\n{\n    background-color: whitesmoke;\n}\n.btn\n{\nwidth: 100px;\n}\n\n.padding\n{\n   \n    padding-top:10%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container mt-3 padding\" align=\"center\" >\n<h2 class=\"page-header\">Dashboard</h2>\n<p>Welcome to Dashboard, You can Add, Edit, Get and Delete any task.</p>\n<br>\n<div>\n    <a class=\"btn btn-primary\" routerLink=\"/addtask\">Addtask</a> \n    <a class=\"btn btn-dark\" routerLink=\"/showtask\">Showtask</a> \n</div>\n<br>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/detailtask/detailtask.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn\n{\nwidth: 100px;\n}\n.padding{\n    padding-bottom:20px;\n    padding-top:5%;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/detailtask/detailtask.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-3 padding\">\n\n  \n<br>\n<br>\n\n<div *ngIf=\"task\">\n  <h2>\n    Detail Task - {{task[0].taskName|uppercase}}\n  </h2>\n\n<ul class=\"list-group\">\n    <!-- <li class=\"list-group-item\">Name : {{task.taskId}}</li> -->\n    \n    <li class=\"list-group-item\">Task Id : {{task[0].taskId}}</li>\n    <li class=\"list-group-item\">Task Name : {{task[0].taskName}}</li>\n    <li class=\"list-group-item\">Task Client Name : {{task[0].taskClientName}}</li>\n    <li class=\"list-group-item\">Task Handler Name : {{task[0].taskHandler}}</li>\n    <li class=\"list-group-item\">Task Description : {{task[0].taskDesc}}</li>\n</ul>\n</div>\n<br>\n<a class=\"btn btn-dark\"  \t\trouterLink=\"/showtask\">Go Back</a> \n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/detailtask/detailtask.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailtaskComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DetailtaskComponent = (function () {
    function DetailtaskComponent(authService, route, router, flashMessage) {
        this.authService = authService;
        this.route = route;
        this.router = router;
        this.flashMessage = flashMessage;
        this.errorMessage = '';
    }
    // ngOnInit() {
    //   var id = this.route.snapshot.params['_id'];
    //   console.log(id);
    //   this.authService.detailtask(id).subscribe(tasks=> {
    //     this.task = tasks.task;
    //   },
    //    err => {
    //      console.log(err);
    //      return false;
    //    });
    // }
    DetailtaskComponent.prototype.ngOnInit = function () {
        var param = this.route.snapshot.params['_id'];
        if (param) {
            var id = param;
            this.detailtask(id);
        }
    };
    DetailtaskComponent.prototype.detailtask = function (id) {
        var _this = this;
        console.log("vars" + id);
        this.authService.detailtask(id).subscribe(function (tasks) {
            _this.task = tasks;
            // console.log("dgfggfg " +  JSON.stringify(tasks[0].taskName));
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    DetailtaskComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-detailtask',
            template: __webpack_require__("../../../../../src/app/components/detailtask/detailtask.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/detailtask/detailtask.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], DetailtaskComponent);
    return DetailtaskComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/edittask/edittask.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn\n{\nwidth: 100px;\n}\n.padding{\n    padding-bottom:20px;\n    padding-top:5%;\n  }\n  .col-6\n  {\n    background-color:lightgrey;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/edittask/edittask.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n<div class=\"container mt-3 padding\" align=\"center\" >\n\n  \n  <form class=\"form-horizontal\" (submit)=\"updateTask()\">\n      <div *ngIf=\"task\">\n          <h2>Edit Task - {{task[0].taskName | uppercase}}</h2>\n          <div class=\"col-6 col-offset-3\" >\n            <br>\n           <!-- <h2>{{task[0].taskName | uppercase}} Details</h2> -->\n          <!-- <div><span>id: </span>{{task[0].taskId}}</div> -->\n          <div class=\"panel panel-default\">\n          <div class=\"panel-body\">\n     \n  <div class=\"form-group\">\n    <label for=\"taskId\" class=\"col-sm-2 control-label\">taskId </label>\n    <div class=\"col-sm-9\">\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"task[0].taskId\"  name=\"taskId\" >\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"taskName\" class=\"col-sm-2 control-label\">taskName </label>\n    <div class=\"col-sm-9\">\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"task[0].taskName\" name=\"taskName\">\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"taskDesc\" class=\"col-sm-2 control-label\">taskDesc </label>\n    <div class=\"col-sm-9\">\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"task[0].taskDesc\" name=\"taskDesc\" >\n    </div>\n  </div>\n  \n  <div class=\"form-group\">\n    <label for=\"taskHandler\" class=\"col-sm-2 control-label\">taskHandler </label>\n    <div class=\"col-sm-9\">\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"task[0].taskHandler\" name=\"taskHandler\" >\n    </div>\n  </div>\n  \n  <div class=\"form-group\">\n    <label for=\"taskClientName\" class=\"col-sm-2 control-label\">taskClientName </label>\n    <div class=\"col-sm-9\">\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"task[0].taskClientName\" name=\"taskClientName\" >\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <div class=\"col-sm-offset-2 col-sm-8\">\n        <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n        <a class=\"btn btn-dark\"  \t\trouterLink=\"/showtask\">Go Back</a> \n    </div>\n   \n  </div>\n  </div>\n\n</div>\n</div>\n</div>\n</form>\n\n  \n\n\n</div>    \n\n"

/***/ }),

/***/ "../../../../../src/app/components/edittask/edittask.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EdittaskComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
// import { Component, OnInit } from '@angular/core';
// import { AuthService } from '../../services/auth.service';
// import { Router } from '@angular/router';
// import { FlashMessagesService } from 'angular2-flash-messages';
// import { ActivatedRoute} from '@angular/router';
// import { Task} from '../../taskmodel';
// @Component({
//   selector: 'app-edittask',
//   templateUrl: './edittask.component.html',
//   styleUrls: ['./edittask.component.css']
// })
// export class EdittaskComponent implements OnInit {
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// task=Task;
//   constructor(private authService:AuthService,  private route : ActivatedRoute,private router:Router,  private flashMessage: FlashMessagesService) {
//    }
//   ngOnInit() {}
//  model = new Task();
//     updateTask(id,info)
//     {
//       var id = this.route.snapshot.params['_id'];
//       this.authService.updateTask(id,this.model).subscribe( () => 
//       {
//         this.router.navigate(['/showtask']);
//       })
//     }
// }
//======================================================================





var EdittaskComponent = (function () {
    function EdittaskComponent(authService, route, router, flashMessage) {
        this.authService = authService;
        this.route = route;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    EdittaskComponent.prototype.ngOnInit = function () {
        this.getTask();
    };
    EdittaskComponent.prototype.getTask = function () {
        var _this = this;
        var id = this.route.snapshot.params['_id'];
        this.authService.detailtask(id).subscribe(function (tasks) {
            _this.task = tasks;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    EdittaskComponent.prototype.updateTask = function (id, info) {
        var _this = this;
        var id = this.route.snapshot.params['_id'];
        // console.log("Id of edit task" + id);
        console.log("In update task " + this.task);
        this.authService.updateTask(id, this.task).subscribe(function (tasks) {
            // this.task=tasks;
            // console.log("In update task in edit task " +  JSON.stringify(this.task));
            _this.router.navigate(['/showtask']);
        });
    };
    EdittaskComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edittask',
            template: __webpack_require__("../../../../../src/app/components/edittask/edittask.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/edittask/edittask.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], EdittaskComponent);
    return EdittaskComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html,body{\n    height:100%;\n    width:100%;\n    font-family: 'Poppins', sans-serif;\n    color:#222;\n  }\n  \n  .btn\n  {\n  width: 100px;\n  }\n  \n  \n  .padding{\n    padding-bottom:2rem;\n  }\n  \n \n  .zoom {\n      transition: transform .2s; /* Animation */\n     \n      \n  }\n  \n  .zoom:hover {\n      transform: scale(1.1); \n          \n  }\n  .zoomin {\n   animation:big 50s;\n  }\n  \n\n  footer\n  {\n  \n    background-color:#3f3f3f;\n    color:white;\n    padding-top:2rem;\n  }\n  .light{\n  border-top: 1px solid #d5d5d5;\n  width:75%;\n  margin-top: .8rem;\n  margin-bottom: 1rem;\n  }\n  \n  .colormylink{\n  color:white;\n  }\n  \n  #colormy{\n    color:red;\n  }\n  \n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n  <footer class=\"mybgcolor\">\n    <div class=\"container-fluid padding\">\n        <div class=\"row text-center\">\n        \n          <div class=\"col-md-4\">\n            <hr class=\"dark\">\n            <h5 class=\"zoom\"> Quick links</h5>\n            <hr class=\"dark\">\n          \n              <p><a class=\"colormylink\" [routerLink]=\"['/login']\">Login</a></p>\n              <p><a  class=\"colormylink\" [routerLink]=\"['/register']\">Sign Up</a></p>\n              <p><a class=\"colormylink\" [routerLink]=\"['/']\">Home</a></p>\n              <p><a class=\"colormylink\"[routerLink]=\"['/aboutus']\">Aboutus</a></p>\n    \n          </div>\n          \n          <div class=\"col-md-4\">\n            <hr class=\"light\">\n            <h5 class=\"zoom\">  Company Info</h5>\n            <hr class=\"light\">\n          \n            <p class=\"mb10\">MobiLyte, a well-established and fast growing IT services company, consistently strive to provide innovative solutions and business value.</p>\n            <p><i class=\"fa fa-location-arrow\"></i> E-40, Phase 8, Industrial Area, Sahibzada Ajit Singh Nagar, Punjab 160071 </p>\n            <p><i class=\"fa fa-phone\"></i>  0172 467 7163 </p>\n            <p><i class=\"fa fa fa-envelope\"></i> ERP@mobilte.com</p>\n          \n          </div>\n          \n          <div class=\"col-md-4\">\n            <hr class=\"light\">\n            <h5 class=\"zoom\"> Quick links</h5>\n            <hr class=\"light\">\n              <!-- <p ><a class=\"colormylink\" href=\"/alltaskpage\">Task</a></p>\n              <p><a class=\"colormylink\" href=\"/allprospectpage\">Prospect</a></p>\n              <p><a class=\"colormylink\" href=\"/leftnavigation\">Left Navigation</a></p> -->\n              <p><a class=\"colormylink\"[routerLink]=\"['/login']\">Login</a></p>\n              <p><a class=\"colormylink\" [routerLink]=\"['/register']\">Sign Up</a></p>\n              <p><a class=\"colormylink\"[routerLink]=\"['/']\">Home</a></p>\n              <p><a class=\"colormylink\"[routerLink]=\"['/aboutus']\">Aboutus</a></p>\n          </div>\n          \n        </div>\n          <hr class=\"light\">\n      </div>\n      <div class=\"container-fluid padding\">\n      \n        <div class=\"row text-center\">\n        <div class=\"col-12\">\n        \n        <h6 >Copyright @2018 | Designed With by </h6><h6><a href=\"/\">ERP</a></h6>\n        </div>\n        \n        </div>\n      </div>\n    \n  \n    </footer>"

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/forgotpassword/forgotpassword.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn\n{\nwidth: 100px;\n}\n.padding{\n    padding-bottom:20px;\n    padding-top:5%;\n  }\n  .mytext\n  {\n    color:white;\n  }\n  \n  .parallax { \n    /* The image used */\n    background-image: url(\"https://images.unsplash.com/photo-1489257900339-13e688fb85fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60\");\n  \n    /* Set a specific height */\n    height: 500px; \n  \n    /* Create the parallax scrolling effect */\n    background-attachment: fixed;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/forgotpassword/forgotpassword.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"parallax\">\n<div class=\"container mt-3 padding\">\n\n<br>\n<h2 class=\"page-header mytext\">forgotpassword</h2>\n <form (submit)=\"onforgotpasswordSubmit()\" >\n\n<div class=\"form-group\">\n  <label for=\"email\">Email</label>\n  <input type=\"email\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" id=\"email\" aria-describedby=\"emailHelp\" placeholder=\"Enter Email\">\n  <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n</div>\n<input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form>\n\n</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/forgotpassword/forgotpassword.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotpasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ForgotpasswordComponent = (function () {
    function ForgotpasswordComponent(router, authService, flashMessage) {
        this.router = router;
        this.authService = authService;
        this.flashMessage = flashMessage;
    }
    ForgotpasswordComponent.prototype.ngOnInit = function () {
    };
    ForgotpasswordComponent.prototype.onforgotpasswordSubmit = function () {
        var _this = this;
        var user = {
            email: this.email
        };
        this.authService.forgotpasswordUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 2000 });
                _this.router.navigate(['login']);
            }
            else {
                _this.flashMessage.show('fill your correct email first', { cssClass: 'alert-success', timeout: 2000 });
                _this.router.navigate(['forgotpassword']);
            }
        });
    };
    ForgotpasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-forgotpassword',
            template: __webpack_require__("../../../../../src/app/components/forgotpassword/forgotpassword.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/forgotpassword/forgotpassword.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], ForgotpasswordComponent);
    return ForgotpasswordComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html,body{\n  height:100%;\n  width:100%;\n  font-family: 'Poppins', sans-serif;\n  color:#222;\n}\n\n#nolist{\n  list-style-type:none;\n}\n\n.mypad\n{\n  padding-top:-1px;\n}\n\n.carousel-caption .btn{\n  font-size:60%;\n  \n  width: 70px;\n  }\n\n.carousel-inner img\n{\n  width:100%;\n  height:100%;\n}\n\n.carousel-caption\n{\n  position:absolute;\n   margin-top:40%;\n /* transform:translateY(-50%); */\n}\n\n.carousel-caption h1\n{\n  font-size:190%;\n  text-transform:uppercase;\n  text-shadow:1px 1px 10px #000;\n}\n\n.carousel-caption h3\n{\n  font-size:120%;\n  font-weight:500;\n  text-shadow:1px 1px 10px #000;\n  padding-bottom:1rem;\n  \n}\n\n.jumbotron{\n  padding:1rem;\n  border-radius:0px;\n}\n\n.padding{\n  padding-bottom:2rem;\n}\n\n.welcome\n{\n  width:75%;\n  margin:0 auto;\n  padding-top:2rem;\n  \n}\n\n.welcome h4\n{\n  border-top: 2px solid #b4b4b4;\n  width:95%;\n  margin-top:.3rem;\n  margin-bottom: 1rem;\n}\n\n.social a{\n  font-size:4.5rem;\n  padding:3rem;\n}\n\n.fa-facebook\n{\n  color:#3b5998;\n}\n.fa-twitter\n{\n  color:#00aced;\n}\n.fa-google-plus-g\n{\n  color:#dd4b39;\n}\n.fa-instagram\n{\n  color:#517fa4;\n}\n\n\n.fa-facebook:hover,\n.fa-twitter:hover,\n.fa-google-plus-g:hover,\n.fa-instagram:hover\n{\n  color:#d5d5d5;\n }\n\n\n@media (max-width: 992px)\n{\n  .carousel-inner img\n{\n  width:100%;\n  height:100%;\n}\n      /* .carousel-caption\n      {\n        position:absolute;\n        top:10%;\n      } */\n      \n      .carousel-caption h1\n      {\n        font-size:200%;\n      }\n       \n      .carousel-caption h3\n      {\n        font-size:90%;\n        font-weight:400px;\n        padding-bottom:.2rem;\n      }\n      .carousel-caption .btn{\n      font-size:40%;\n      padding: 8px 14px;\n      padding-top:0px;\n      }\n      \n      .display-4{\n      font-size:250%;\n      }\n      \n  .social a{\n    font-size: 4em;\n    padding:2rem;\n  }\n}\n\n\n@media (max-width: 778px)\n{\n    /* .carousel-caption\n      {\n        position:absolute;\n        top:30%\n      } */\n      \n      .carousel-caption h1\n      {\n        font-size:120%;\n      }\n      \n      .carousel-caption h3\n      {\n        font-size:90%;\n        font-weight:400;\n        padding-bottom:.2rem;\n      }\n      .carousel-caption .btn{\n      font-size:60%;\n      padding: 8px 14px;\n      }\n      \n      .display-4{\n      font-size:150%;\n      }\n      \n        .social a{\n        font-size: 2.5em;\n        padding:1.2rem;\n      }\n\n}\n@media (max-width: 576px)\n{\n\n      /* .carousel-caption\n      {\n        position:absolute;\n        top:20%\n      }    */\n      .carousel-caption h1\n      {\n        font-size:50%;\n      }\n      .carousel-caption h3\n      {\n        font-size:70%;\n      }\n      .carousel-caption .btn{\n      font-size:10%;\n      padding-top:0px;\n      padding: 4px 8px;\n      }\n      .carousel-indicators\n      {\n        display:none;\n      }\n      .display-4{\n      font-size:60%;\n      }\n      \n      .social a{\n        font-size: 2em;\n        padding: .7rem;\n      }\n\n}\n\n  \n.mynewpad\n{\n  padding-bottom: 300px;\n}\n\n\n.centered {\n    color:white;\n    position: absolute;\n    left:30%;\n    transform: translate(-20%, -150%);\n}\n  \n.img-responsive\n{\n  margin-top:0%;\n  width:50px;\n  transform: translate(0%,-20%);\n}\n \n\n.img-respo\n{\n  width:50%;\n  transform: translate(0%,20%);\n}\n \n\n\n#b{\n  animation-duration: 5s;\n  animation-name: slidein;\n  animation-iteration-count: infinite;\n  animation-direction: alternate;\n}\n\n@keyframes slidein {\n  from {\n    margin-left: -6%;\n    color:white;\n\n  }\n  to {\n    margin-left: 8%;\n   \n    color:black;\n  }\n}\n\n\n.zoom {\n    transition: transform .2s; /* Animation */\n   \n    \n}\n\n.zoom:hover {\n    transform: scale(1.1); \n        \n}\n.zoomin {\n animation:big 50s;\n}\n\n@keyframes big {\n0% { transform:scale(0.50) }\n100% { transform:scale(0.75) }\n}\n\n#my\n{\nanimation:rotater 20s infinite;\n}\n@keyframes rotater {\n0% { transform:rotate(0deg) scale(0.70) }\n50% { transform:rotate(90deg) scale(0.30) }\n100% { transform:rotate(0deg) scale(1) }\n}\n\n\n#id1{\n  animation-duration: 25s;\n  animation-name: slide;\n  animation-iteration-count: infinite;\n  animation-direction: alternate;\n}\n@keyframes slide {\n  from {\n    margin-left:-10%;\n    color:black;\n  }\n  to {\n    margin-left: 2%;\n   \n    color:black;\n  }\n}\n\n.left\n{\n  padding-left:120px;\n}\n\n#id2{\n  animation-duration: 254s;\n  animation-name: slide1;\n  animation-iteration-count: infinite;\n  animation-direction: alternate;\n}\n@keyframes slide1 {\n  from {\n    margin-left:2%;\n    color:black;\n\n  }\n  to {\n    margin-left: -8%;\n    color:black;\n  }\n}\n\n\n/* ================================== */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n      <div id=\"slides\" class=\"carousel slide mypad\" data-ride=\"carousel\">\n\n          <ul class=\"carousel-indicators\">\n            <li data-target=\"#slides\" data-slide-to=\"0\" class=\"active\"></li>\n      \n            <li data-target=\"#slides\" data-slide-to=\"1\" class=\"active\"></li>\n      \n            <li data-target=\"#slides\" data-slide-to=\"2\" class=\"active\"></li>\n          </ul>\n      \n          <div class=\"carousel-inner mytext\">\n            <div class=\"carousel-item active\">\n                  <img class=\"mySlides\" src=\"https://www.divalto.com/app/uploads/2016/09/slide1.jpg\" >\n                    <div class=\"carousel-caption\">\n                               <h1  class=\"display-4\">ERP powered by</h1><h1   id=\"b\"> Mobilyte Technologies </h1>\n                                    <h3 class=\"display-4\">Our ERP software can easily be adapted to your business</h3>\n                                    <a class=\"btn btn-success\" [routerLink]=\"['/register']\">Register</a>\n                                     <a class=\"btn btn-primary\" [routerLink]=\"['/login']\">Login</a>   \n                      </div> \n            </div>\n            <div class=\"carousel-item \"> \n                  <img class=\"mySlides\" src=\"https://www.divalto.com/app/uploads/2016/09/slide2.jpg\"  >\n                        \n                          <div class=\"carousel-caption\">\n                             <h1  class=\"display-4\">ERP powered by</h1><h1   id=\"b\"> Mobilyte Solutions </h1>\n                                  <h3 class=\"display-4\">Our ERP software can easily be adapted to your business</h3>\n                                    <a class=\"btn btn-success\" [routerLink]=\"['/register']\">Register</a> \n                                     <a class=\"btn btn-primary\" [routerLink]=\"['/login']\">Login</a>\n                        </div> \n            </div>\n            <div class=\"carousel-item \">\n                <img class=\"mySlides\" src=\"https://www.divalto.com/app/uploads/2016/09/mobilite-commerciaux.jpg\" >\n                        <div class=\"carousel-caption\">\n                                      <h1  class=\"display-4\">ERP powered by</h1><h1   id=\"b\"> Mobilyte Solutions</h1>\n                                  <h3 class=\"display-4\">Our ERP software can easily be adapted to your business\n                                     </h3>\n                                     <a class=\"btn btn-success\" [routerLink]=\"['/register']\">Register</a> \n                                     <a class=\"btn btn-primary\" [routerLink]=\"['/login']\">Login</a>\n                        </div> \n            </div>\n          </div>\n      \n      </div>\n      \n      \n      <div class=\"container-fluid jumbotron\">\n      <div class=\"row padding\">\n        <div class=\"col-12\">\n               <h4 class=\"display-4 text-center lead \"><strong>Our partnerships abroad are strategic </strong></h4>\n        </div>\n      </div>\n      \n      <div class=\"row padding\">\n        <div class=\"col-md-6 left\">\n          <p class=\"display\">MobiLyte also has knowledge and experience in other fields such as Mobile App Development, Web Development, Cloud Computing and so on.</p>\n              <p class=\"display\"> We are offering our customized and innovative solutions to suit the needs of various industries and segments.</p>         \n        </div>\n      \n      \n        <div class=\"col-md-6\">\n          <picture>\n                          <figure id=\"my\">\n                              <div>\n                                <img class=\"img-fluid\"  src=\"https://www.divalto.com/app/uploads/2014/06/2016-09-14-230x230.png\"/>\n                              </div>\n                          </figure>\n          </picture>\n        </div>\n      </div>\t\n      <div class=\"row padding \">\n        <div class=\"col-12\">\n               <h4 class=\"display-4 text-center\"><strong>Become a partner ! </strong></h4>\n        </div>\n      </div>\n      </div>\n      \n      \n      <div class=\"container-fluid padding\">\n        <div class=\"row welcome text-center padding\">\n          <div class=\"col-12\">\n            <h1 id=\"id1\"  class=\"display-3 zoom\">Mobility infinity – A powerful ERP system</h1>\n            <h1 id=\"id2\" class=\"display-4 zoom\">for mid - to large-sized companies</h1>\n          </div>\n          <hr>\n          <div class=\"col-12\">\n            <p class=\"lead\">\n            Mobility infinity is an innovative, simple and integrated ERP (Enterprise Resource Planning) software that helps you <strong>manage your business</strong> and <strong>accelerate your digital transformation</strong>. Completely adapted to your company, Divalto infinity is <strong>the best solution to boost your performance</strong> by simplifying and automating your processes.<br />\n                  <br>This ERP software includes all features required to cover your company’s needs :\n            </p>\n          </div>\n        </div>\n        \n      \n      \n        <div class=\"row container mt-3 welcome padding\">\n          <div class=\"col-md-6 col-sm-6 \" id=\"an\">\n          \n            <ul id=\"nolist\" class=\"h3 \">\n                                   <li class=\"zoom\"><i class=\"fas fa-chevron-right\"></i> TASK CREATION   </li>     \n                          \n                                             <li class=\"zoom\">  <i class=\"fas fa-chevron-right\"></i> TASK DELETION</li>\n                                             <li class=\"zoom\">  <i class=\"fas fa-chevron-right\"></i> TASK DETAILS UPDATION</li>\n                                             <li class=\"zoom\">  <i class=\"fas fa-chevron-right\"></i> IDENTIFYING CLIENT</li>\n                                             <li class=\"zoom\">  <i class=\"fas fa-chevron-right\"></i> TASK HANDLER </li>                               \n                </ul>\n          \n          \n          </div>\n          <div class=\"col-lg-6 col-sm-6 \" >\n           <picture>\n                                              <figure class=\"zoomin\">\n                                                <div ><img style=\"max-width:100%;height:auto;\" src=\"https://www.divalto.com/app/uploads/2014/06/infinity-dashboard.jpg\"  /></div>\n                                              </figure>\n              </picture>\n          </div>\n        </div>\n  \n      \n      \n      \n      </div>\n  \n  <div class=\"text-center padding\">\n  \n        \n      <a href=\"https://www.facebook.com/\"><i class=\"fab fa-5x fa-facebook\"></i></a>  &nbsp; &nbsp; &nbsp; &nbsp;\n      <a href=\"https://twitter.com/login?lang=en\"><i class=\"fab fa-5x fa-twitter\"></i></a> &nbsp; &nbsp; &nbsp; &nbsp;\n      <a href=\"https://plus.google.com/discover\"><i class=\"fab fa-5x fa-google-plus-g \"></i></a> &nbsp; &nbsp; &nbsp; &nbsp;\n      <a href=\"https://www.linkedin.com/checkpoint/lg/login\"><i class=\"fab fa-5x fa-linkedin \"></i></a> &nbsp; &nbsp; &nbsp; &nbsp;\n      <a href=\"https://www.instagram.com/accounts/login/?hl=en\"><i class=\"fab fa-5x fa-instagram\"></i></a>\n      \n    </div>\n      "

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn\n{\nwidth: 100px;\n}\n.padding{\n    padding-bottom:20px;\n    padding-top:5%;\n  }\n  /* .col-6\n  {\n    background-color:lightgrey;\n  } */\n\n      .parallax { \n    /* The image used */\n    background-image: url(\"https://images.unsplash.com/photo-1489257900339-13e688fb85fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60\");\n  \n    /* Set a specific height */\n    height: 550px; \n  \n    /* Create the parallax scrolling effect */\n    background-attachment: fixed;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    \n}\n.mytext\n{\n  color:white;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"parallax\">\n    <div class=\"container mt-3 padding mytext\" align=\"center\" >\n       \n      <div class=\"col-6 col-offset-3 padding\" >\n          <h2 class=\"page-header\">Login</h2>\n    \n          <form (submit)=\"onLoginSubmit()\">\n            <div class=\"form-group\">\n      \n                <div class=\"col-6 col-offset-3\" >\n                  <label>Email</label>\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\">\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <div class=\"col-6 col-offset-3\" >\n                  <label>Password</label>\n                  <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\n              </div>\n            </div>\n            <a  [routerLink]=\"['/forgotpassword']\">Forgot Password?</a>  <br><br>\n         <p>Create a New Account ! \n           <a  [routerLink]=\"['/register']\">Register Here</a><br><br>\n         </p>            \n           <input type=\"submit\" class=\"btn btn-primary\" value=\"Login\">\n          </form>\n          \n      </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.authService.loggedIn) {
            this.router.navigate(['/dashboard']);
        }
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            email: this.email,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show('You are login', { cssClass: 'alert-success', timeout: 2000 });
                _this.router.navigate(['dashboard']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['login']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n  .mypad\n  {\n    background-color:#3f3f3f;\n    padding-top:-1px;\n  }\n  .navbar\n  {\n    background-color:#3f3f3f;\n    padding: .5rem;\n  }\n  .navbar-nav li\n  {\n    background-color:#3f3f3f;\n    padding-right:10px;\n  }\n  .nav-link\n  {\n    background-color:#3f3f3f;\n    font-size:0.7em !important;\n  }\n  .navbar-nav li a\n  {\n    background-color:#3f3f3f;\n    color:white; \n  }\n  .navbar-dark\n  {\n    background-color:#3f3f3f;\n  }\n   .bg-dark {\n    background-color: #3f3f3f !important;\n}\n.navbar{\n  font-size:22px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark fixed-top\">\n    <a class=\"navbar-brand\" href=\"\">ERP</a>\n   \n\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n          <a class=\"nav-link\" [routerLink]=\"['/aboutus']\">Aboutus<span></span></a>\n        </li>\n\n      </ul>\n      <ul class=\"navbar-nav ml-auto\">\n          <li class=\"nav-item\"  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n              <a class=\"nav-link\" [routerLink]=\"['/']\">Home </a>\n            </li>\n        <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n          <a class=\"nav-link\" [routerLink]=\"['/dashboard']\">Dashboard </a>\n        </li>\n        <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n          <a class=\"nav-link\" [routerLink]=\"['/profile']\">Profile </a>\n        </li>\n        <li class=\"nav-item\" *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n          <a class=\"nav-link\" [routerLink]=\"['/login']\">Login </a>\n        </li>\n        <li class=\"nav-item\" *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n          <a class=\"nav-link\" [routerLink]=\"['/register']\">Register</a>\n        </li>\n        <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\"><a class=\"nav-link\" (click)=\"onLogoutClick()\" href=\"#\">Logout</a>\n        </li>\n    \n     \n      </ul>\n    </div>\n  </nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = (function () {
    function NavbarComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        // this.flashMessage.show('You are logged out', {
        //   cssClass: 'alert-success', timeout: 3000
        // });
        console.log("You are logged out");
        this.router.navigate(['/home']);
        return false;
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn\n{\nwidth: 100px;\n}\n.padding{\n    padding-bottom:20px;\n    padding-top:5%;\n  }\n.mytext\n{\n  color:white;\n}\n\n  .parallax { \n    /* The image used */\n    background-image: url(\"https://images.unsplash.com/photo-1489257900339-13e688fb85fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60\");\n  \n    /* Set a specific height */\n    height: 500px; \n  \n    /* Create the parallax scrolling effect */\n    background-attachment: fixed;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"parallax\">\n    <div class=\"container mt-3 padding\">\n    <br>\n    <br>\n        <div *ngIf=\"user\">\n        <ul class=\"list-group\">\n        <h2 class=\" mytext\">Your Profile - {{user.firstName|uppercase}} </h2>\n      \n     \n        <li class=\"list-group-item\">Firstname : {{user.firstName}}</li>\n        <li class=\"list-group-item\">Lastname : {{user.lastName}}</li>\n        <li class=\"list-group-item\">Email : {{user.email}}</li>\n      </ul>\n    </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = (function () {
    function ProfileComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('You are logged out', {
            cssClass: 'alert-success',
            timeout: 3000
        });
        this.router.navigate(['/login']);
        return false;
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn\n{\nwidth: 100px;\n}\n.padding{\n    padding-bottom:20px;\n    padding-top:5%;\n  }\n  /* .col-6\n  {\n    background-color:lightgrey;\n  } */\n\n\n  .parallax { \n    /* The image used */\n    background-image: url(\"https://images.unsplash.com/photo-1489257900339-13e688fb85fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60\");\n  \n    /* Set a specific height */\n    height: 700px; \n  \n    /* Create the parallax scrolling effect */\n    background-attachment: fixed;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n.mytext\n{\n  color:white;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"parallax\">\n      <div class=\"container mt-3 padding mytext\" align=\"center\" >\n       \n        <div class=\"col-6 col-offset-3 padding\"  >\n            <h2 class=\"page-header\">Register</h2>\n          <form   (submit)=\"onRegisterSubmit()\">\n              <div class=\"form-group\">\n                  <div class=\"col-6 col-offset-3\" >\n                      <label>First Name</label>\n                      <input type=\"text\" [(ngModel)]=\"firstName\" name=\"firstName\" class=\"form-control\">\n                  </div>\n              </div>\n              <div class=\"form-group\">\n                  <div class=\"col-6 col-offset-3\" >\n                      <label>Last Name</label>\n                      <input type=\"text\" [(ngModel)]=\"lastName\" name=\"lastName\" class=\"form-control\">\n                </div>\n              </div>\n              <div class=\"form-group\">\n                  <div class=\"col-6 col-offset-3\" >\n                      <label>Email</label>\n                      <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" >\n                </div>\n              </div>\n              <div class=\"form-group\">\n                  <div class=\"col-6 col-offset-3\" >\n                      <label>Password</label>\n                      <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n                </div>\n              </div>\n              <input type=\"submit\" class=\"btn btn-success\" value=\"Submit\">\n              <br>\n              <br>\n         <p>Already have a account ?  <a [routerLink]=\"['/login']\">Login Here</a><br><br>\n            \n         </p> \n            </form>\n        </div>\n      </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(validateService, authService, router, flashMessage) {
        this.validateService = validateService;
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            firstName: this.firstName,
            email: this.email,
            lastName: this.lastName,
            password: this.password
        };
        // Required Fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Validate Email
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show('Please use a valid email', { cssClass: 'alert-danger', timeout: 3000 });
            console.log("Please use a valid email");
            return false;
        }
        // Register user
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('Please verify your mail first', { cssClass: 'alert-success', timeout: 3000 });
                // this.router.navigate(['/login']);
            }
            else {
                //alert("username or email duplicate");
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                //
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_3_app_services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/resetpassword/resetpassword.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn1\n{\nwidth: 100px;\n}\n.padding{\n    padding-bottom:20px;\n    padding-top:5%;\n  }\n  .mytext\n{\n  color:white;\n}\n\n\n\n  .parallax { \n    /* The image used */\n    background-image: url(\"https://images.unsplash.com/photo-1489257900339-13e688fb85fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60\");\n  \n    /* Set a specific height */\n    height: 500px; \n  \n    /* Create the parallax scrolling effect */\n    background-attachment: fixed;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/resetpassword/resetpassword.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"parallax\">\n        <div class=\"container mt-3 padding\">\n        \n                <h2 class=\"page-header mytext\" >Reset Password</h2>\n                <form class=\"Reset Password\" (submit)=\"onresetSubmit()\">\n                        \n                        <div class=\"form-group\">\n                        <label class=\"mytext\" for=\"Password\">Password</label>\n                        <input type=\"password\" class=\"form-control\" placeholder=\" Enter the Password\" [(ngModel)]=\"password\" name=\"password\">\n                        </div>\n                        <input class=\"btn btn-lg btn-primary\" type=\"submit\" value=\"Confirm Password\">        \n                </form>\n                \n        </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/resetpassword/resetpassword.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetpasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResetpasswordComponent = (function () {
    function ResetpasswordComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ResetpasswordComponent.prototype.ngOnInit = function () {
    };
    ResetpasswordComponent.prototype.onresetSubmit = function () {
        var _this = this;
        var user = {
            password: this.password
        };
        this.authService.resetPasswordUser(user).subscribe(function (data) {
            if (data.success) {
                // this.authService.storeUserData(data.token, data.user);
                alert("Please login again");
                _this.router.navigate(['login']);
            }
            else {
                alert("Reset password again");
                _this.router.navigate(['reset-password']);
            }
        });
    };
    ResetpasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-resetpassword',
            template: __webpack_require__("../../../../../src/app/components/resetpassword/resetpassword.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/resetpassword/resetpassword.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], ResetpasswordComponent);
    return ResetpasswordComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/showtask/showtask.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn1\n{\nwidth: 100px;\n}\n.padding{\n    padding-bottom:20px;\n    padding-top:5%;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/showtask/showtask.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container mt-3 padding\">\n\n  <br>\n  <br>\n  <h2>\n    Show Task\n  </h2>\n  <br>\n  <br>\n<table class=\"table table-bordered\">\n  <thead>\n  <tr>\n    <td>TaskId</td>\n    <td>TaskName</td>\n    <td>TaskClientName</td>\n    <td>TaskDescription</td>\n    <td width=\"250\" align=\"center\">Action</td>\n  </tr>\n  </thead>\n  <tbody>\n   <tr  *ngFor=\"let task of tasks\">\n    <td>\t{{task.taskId}}\t </td>\n    <td>\t{{task.taskName}} </td>\n    <td>\t{{task.taskClientName}} </td>\n    <td>\t{{task.taskDesc}} </td>\n    <td width=\"250\"> \n      <a class=\"btn btn-info\" \trouterLink=\"/detailtask/{{task._id}}\">Detail</a> \n      <!-- <a class=\"btn btn-primary\"  \t\trouterLink=\"/edittask/{{task._id}}\">Edit</a> -->\n      <a class=\"btn btn-primary\"  \t\trouterLink=\"/edittask/{{task._id}}\">Edit</a>\n      <a class=\"btn btn-danger\" \t\trouterLink=\"/showtask\"\t\t(click)=\" ondeleteClick(task._id)\" >Delete</a>\n    </td>\n   </tr>\n  </tbody>\n</table>\n <a class=\"btn btn1 btn-primary\"  \t\trouterLink=\"/addtask\">AddTask</a>\n <a class=\"btn btn1 btn-dark\"  \t\trouterLink=\"/dashboard\">GoBack</a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/showtask/showtask.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowtaskComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { Task } from '../../task';
var ShowtaskComponent = (function () {
    function ShowtaskComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    ShowtaskComponent.prototype.ngOnInit = function () {
        this.getTask();
    };
    ShowtaskComponent.prototype.getTask = function () {
        var _this = this;
        this.authService.getTask().subscribe(function (tasks) {
            tasks.sort(function (leftSide, rightSide) {
                if (leftSide.taskId < rightSide.taskId)
                    return -1;
                if (leftSide.taskId > rightSide.taskId)
                    return 1;
                return 0;
            });
            _this.tasks = tasks;
        }, function (err) {
            console.log("data not received");
        });
    };
    ShowtaskComponent.prototype.ondeleteClick = function (task_id) {
        var _this = this;
        this.authService.deletetask(task_id).subscribe(function (data) {
            if (data.success) {
                _this.getTask();
            }
            else {
                _this.router.navigate(['/addtask']);
            }
        });
    };
    ShowtaskComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-showtask',
            template: __webpack_require__("../../../../../src/app/components/showtask/showtask.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/showtask/showtask.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], ShowtaskComponent);
    return ShowtaskComponent;
}());



/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/guards/auth.guard1.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard1; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard1 = (function () {
    function AuthGuard1(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard1.prototype.canActivate = function () {
        if (!this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/dashboard']);
            return false;
        }
    };
    AuthGuard1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuard1);
    return AuthGuard1;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.isDev = false; // Change to false before deployment
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('user/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(' user/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.forgotpasswordUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('user/forgotpassword', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.resetPasswordUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.put('user/updatePassword', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('user/profile');
        return this.http.get(ep, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.prepEndpoint = function (ep) {
        if (this.isDev) {
            return ep;
        }
        else {
            return '' + ep;
        }
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService.prototype.addtask = function (task) {
        console.log("add task auth service " + JSON.stringify(task));
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('user/addtask', task, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getTask = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('user/showtask');
        return this.http.get(ep, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.updateTask = function (id, info) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        console.log("update task auth service " + JSON.stringify(info));
        var infoo = info[0];
        return this.http.put('user/' + id, infoo, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.deletetask = function (task_id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.delete('user/' + task_id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.detailtask = function (task_id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('user/find/' + task_id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.firstName == undefined || user.email == undefined || user.lastName == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map