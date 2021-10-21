(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\user1\Desktop\qyaho1006\qrfront\src\main.ts */"zUnb");


/***/ }),

/***/ "6R5h":
/*!***************************************************************!*\
  !*** ./src/app/components/pic-slide/pic-slide.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwaWMtc2xpZGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "6y1P":
/*!*************************************************************!*\
  !*** ./src/app/components/generator/generator.component.ts ***!
  \*************************************************************/
/*! exports provided: GeneratorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneratorComponent", function() { return GeneratorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_generator_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./generator.component.html */ "Tysd");
/* harmony import */ var _generator_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./generator.component.css */ "Ac3q");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "lGQG");





let GeneratorComponent = class GeneratorComponent {
    constructor(authService) {
        this.authService = authService;
        this.user = Object;
        this.createdCode = null;
    }
    ngOnInit() {
        this.authService.getProfile().subscribe((profile) => {
            this.user = profile.user;
            const curr = new Date();
            const utc = profile.user.time + curr.getTimezoneOffset() * 60 * 1000;
            const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
            this.kr_curr = new Date(utc + KR_TIME_DIFF);
            setInterval(() => {
                this.kr_curr = new Date();
            }, 1000);
            this.Suser = JSON.stringify(profile.user);
            this.createdCode = this.Suser;
        }, (err) => {
            console.log(err);
            return false;
        });
    }
    onRefresh() {
        this.authService.getProfile().subscribe((profile) => {
            this.Suser = JSON.stringify(profile.user);
            this.createdCode = this.Suser;
        }, (err) => {
            console.log(err);
            return false;
        });
    }
};
GeneratorComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
GeneratorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-generator',
        template: _raw_loader_generator_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_generator_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], GeneratorComponent);



/***/ }),

/***/ "Ac3q":
/*!**************************************************************!*\
  !*** ./src/app/components/generator/generator.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnZW5lcmF0b3IuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "AytR":
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
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BuFo":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.component.html */ "tXZI");
/* harmony import */ var _home_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component.scss */ "zPH0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "lGQG");
/* harmony import */ var src_app_services_customers_num_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/customers_num.service */ "Zfc8");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);








let HomeComponent = class HomeComponent {
    constructor(authService, customer1Service, router) {
        this.authService = authService;
        this.customer1Service = customer1Service;
        this.router = router;
        this.customersQuantity = 0;
    }
    ngOnInit() {
        this.authService.getProfile().subscribe((profile) => {
            this.name = profile.user.name;
            this.username = profile.user.username;
            this.email = profile.user.email;
        });
        setInterval(() => {
            this.customer1Service.getCustomerNums().subscribe((data) => {
                this.customersQuantity = data.length;
            });
        }, 1000);
    }
    onLogoutClick() {
        this.authService.logout();
        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
            title: '로그아웃 성공! ',
            icon: 'success',
            confirmButtonText: '확인',
        });
        this.router.navigate(['/login']);
        return false;
    }
    checkLoggedIn() {
        return this.authService.loggedIn();
    }
};
HomeComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: src_app_services_customers_num_service__WEBPACK_IMPORTED_MODULE_5__["CustomerNumService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomeComponent);



/***/ }),

/***/ "DZ0t":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./profile.component.html */ "rJJk");
/* harmony import */ var _profile_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.component.scss */ "Pn+3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "lGQG");





let ProfileComponent = class ProfileComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
        this.authService.getProfile().subscribe((profile) => {
            this.name = profile.user.name;
            this.username = profile.user.username;
            this.email = profile.user.email;
            this.birth = profile.user.birth;
        }, (err) => {
            console.log(err);
            return false;
        });
    }
};
ProfileComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
ProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-profile',
        template: _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_profile_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProfileComponent);



/***/ }),

/***/ "E8lZ":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<br />\n<h2 class=\"page-header\">Qyaho 회원가입</h2>\n<br />\n<form (ngSubmit)=\"onRegisterSubmit()\">\n  <div class=\"from-gruop\">\n    <label> * 이름 </label>\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\" />\n  </div>\n  <div class=\"form-gruop\">\n    <label> * 이메일 </label>\n    <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" />\n  </div>\n  <div class=\"form-gruop\">\n    <label> * 생년월일 </label>\n    <input type=\"date\" [(ngModel)]=\"birth\" name=\"birth\" class=\"form-control\" />\n  </div>\n  <div class=\"form-gruop\">\n    <label> * ID </label>\n    <input\n      type=\"text\"\n      [(ngModel)]=\"username\"\n      name=\"username\"\n      class=\"form-control\"\n    />\n  </div>\n  <div class=\"form-group\">\n    <label> * 비밀번호 </label>\n    <input\n      type=\"password\"\n      [(ngModel)]=\"password1\"\n      name=\"password1\"\n      class=\"form-control\"\n    />\n  </div>\n  <div class=\"form-group\">\n    <label> * 비밀번호 확인 </label>\n    <input\n      type=\"password\"\n      [(ngModel)]=\"password2\"\n      name=\"password2\"\n      class=\"form-control\"\n    />\n  </div>\n  <br />\n  <input type=\"submit\" class=\"btn btn-warning\" value=\"회원가입\" />\n</form>\n");

/***/ }),

/***/ "I+a1":
/*!*************************************************************!*\
  !*** ./src/app/components/pic-slide/pic-slide.component.ts ***!
  \*************************************************************/
/*! exports provided: PicSlideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PicSlideComponent", function() { return PicSlideComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_pic_slide_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./pic-slide.component.html */ "hv/c");
/* harmony import */ var _pic_slide_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pic-slide.component.scss */ "6R5h");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let PicSlideComponent = class PicSlideComponent {
    constructor() {
        this.homeSlider = { items: 1, dots: true, navigator: true };
    }
};
PicSlideComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-pic-slide',
        template: _raw_loader_pic_slide_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_pic_slide_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PicSlideComponent);



/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./footer.component.html */ "WwN9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let FooterComponent = class FooterComponent {
};
FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-footer',
        template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], FooterComponent);



/***/ }),

/***/ "Ls9r":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".navbar-logo i {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxuYXZiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0YiLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhci1sb2dvIGkge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufSJdfQ== */");

/***/ }),

/***/ "O5bD":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<br />\n<h2 class=\"page-header\">Qyaho 로그인</h2>\n<br />\n<form (ngSubmit)=\"onLoginSubmit()\">\n  <div class=\"form-group\">\n    <label>ID</label>\n    <input\n      type=\"text\"\n      class=\"form-control\"\n      name=\"username\"\n      [(ngModel)]=\"username\"\n    />\n  </div>\n  <br />\n  <div class=\"form-group\">\n    <label>비밀번호</label>\n    <input\n      type=\"password\"\n      class=\"form-control\"\n      name=\"password\"\n      [(ngModel)]=\"password\"\n    />\n  </div>\n  <br />\n  <input type=\"submit\" class=\"btn btn-warning\" value=\"로그인\" />\n</form>\n");

/***/ }),

/***/ "Pn+3":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "S6iF":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<link\n  rel=\"stylesheet\"\n  href=\"https://use.fontawesome.com/releases/v5.15.4/css/all.css\"\n  integrity=\"sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm\"\n  crossorigin=\"anonymous\"\n/>\n\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-warning\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-logo\">\n      <i class=\"fab fa-centercode\"></i>\n      <a class=\"navbar-brand\" routerLink=\"/\">Qyaho 은행</a>\n    </div>\n    <button\n      class=\"navbar-toggler\"\n      type=\"button\"\n      data-toggle=\"collapse\"\n      data-target=\"#navbarSupportedContent\"\n      aria-controls=\"navbarSupportedContent\"\n      aria-expanded=\"false\"\n      aria-label=\"Toggle navigation\"\n    >\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li *ngIf=\"!checkLoggedIn()\" class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/register\">회원가입</a>\n        </li>\n\n        <li *ngIf=\"!checkLoggedIn()\" class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/login\">로그인</a>\n        </li>\n\n        <li *ngIf=\"checkLoggedIn()\" class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/picslide\">대기 등록 메뉴얼</a>\n        </li>\n\n        <li *ngIf=\"checkLoggedIn()\" class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/qrgen\">대기 순번 QR코드</a>\n        </li>\n\n        <li *ngIf=\"checkLoggedIn()\" class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/profile\">프로필</a>\n        </li>\n\n        <li *ngIf=\"checkLoggedIn()\" class=\"nav-item\">\n          <a class=\"nav-link\" (click)=\"onLogoutClick()\" href=\"#\">로그아웃</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AppComponent = class AppComponent {
    constructor() {
        this.title = 'qyaho';
    }
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "Tqkw":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/customer-num/customer-num.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<br />\n  <table class=\"table table-bordered\">\n    <thead class=\"thead\">\n      <tr class=\"text-center bg-warning\">\n        <th scope=\"col\">순번</th>\n        <th scope=\"col\">이름</th>\n        <th scope=\"col\">대기 등록 시간</th>\n      </tr>\n    </thead>\n\n    <tbody>\n      <tr *ngFor=\"let customer of customers;\">\n        <td class=\"text-center\" style=\"width: 20%\">\n          <h5>{{ customer.no }}</h5>\n        </td>\n        <td class=\"text-center\" style=\"width: 40%\">\n          <h5>{{ customer.name }}</h5>\n        </td>\n        <td class=\"text-center\" style=\"width: 40%\">\n          <h5>{{ customer.time | date: \"MM/dd hh:mm:ss a\" }}</h5>\n        </td>\n      </tr>\n    </tbody>\n  </table>");

/***/ }),

/***/ "Tysd":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/generator/generator.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"user\">\n  <div id=\"container\">\n    <div id=\"block\">\n      <br />\n      <h2 class=\"page-header\">대기 순번 QR코드</h2>\n      <br />\n      <ul class=\"list-group\">\n        <h4>{{ user.name }}님의 QR코드</h4>\n        <li class=\"list-group-item\">이메일 : {{ user.email }}</li>\n        <li class=\"list-group-item\">생일 : {{ user.birth }}</li>\n        <li class=\"list-group-item\">\n          대기 등록 시간 : {{ this.kr_curr | date: \"hh:mm:ss a\" }}\n        </li>\n      </ul>\n      <br />\n      <div *ngIf=\"createdCode\" class=\"qrdata\" style=\"text-align: center\">\n        <ngx-qrcode [value]=\"createdCode\"></ngx-qrcode>\n      \n      <br />\n      <button type=\"button\" class=\"btn btn-warning\" (click)=\"onRefresh()\">\n        QR코드 재발급\n      </button></div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<html>\n  <header>\n    <app-navbar></app-navbar>\n  </header>\n\n  <body style=\"background-color: lightgoldenrodyellow\">\n    <div class=\"container\">\n      <router-outlet></router-outlet>\n    </div>\n  </body>\n\n  <footer>\n    <app-footer></app-footer>\n  </footer>\n</html>\n");

/***/ }),

/***/ "W3Zi":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.component.html */ "O5bD");
/* harmony import */ var _login_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component.scss */ "Yz0z");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);







let LoginComponent = class LoginComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() { }
    onLoginSubmit() {
        const login = {
            username: this.username,
            password: this.password,
        };
        this.authService.authenticateUser(login).subscribe((data) => {
            if (data.success) {
                this.authService.storeUserData(data.token, data.user);
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                    title: '로그인 성공! ',
                    icon: 'success',
                    confirmButtonText: '확인',
                });
                this.router.navigate(['']);
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                    title: '로그인 실패! ',
                    text: data.msg,
                    icon: 'error',
                    confirmButtonText: '확인',
                });
                this.router.navigate(['/login']);
            }
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoginComponent);



/***/ }),

/***/ "WwN9":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"py-10 bg-dark\">\n  <div class=\"container\" style=\"text-align: center\">\n    <p class=\"m-0 footer-text text-white\">Copyright &copy;2021 Qyaho</p>\n    <p class=\"m-0 footer-text text-white\">Gradudation project</p>\n  </div>\n</footer>\n");

/***/ }),

/***/ "XC3f":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./register.component.html */ "E8lZ");
/* harmony import */ var _register_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.component.scss */ "few2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/validate.service */ "hFt3");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);








let RegisterComponent = class RegisterComponent {
    constructor(validateService, authService, router) {
        this.validateService = validateService;
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() { }
    onRegisterSubmit() {
        if (this.password1 !== this.password2) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                title: '회원가입 실패! ',
                text: '패스워드가 다릅니다. 다시 입력하세요',
                icon: 'error',
                confirmButtonText: '확인',
            });
            return false;
        }
        const user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password1,
            birth: this.birth,
        };
        if (!this.validateService.validateRegister(user)) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                title: '회원가입 실패! ',
                text: '모두 입력해 주세요',
                icon: 'error',
                confirmButtonText: '확인',
            });
            return false;
        }
        if (!this.validateService.validateEmail(user.email)) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                title: '회원가입 실패! ',
                text: '이메일 주소가 올바르지 않습니다',
                icon: 'error',
                confirmButtonText: '확인',
            });
            return false;
        }
        this.authService.registerUser(user).subscribe((data) => {
            if (data.success) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                    title: '회원가입 성공! ',
                    icon: 'success',
                    text: data.msg,
                    confirmButtonText: '확인',
                });
                this.router.navigate(['/login']);
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                    title: '회원가입 실패! ',
                    text: data.msg,
                    icon: 'error',
                    confirmButtonText: '확인',
                });
                this.router.navigate(['/register']);
            }
        });
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _services_validate_service__WEBPACK_IMPORTED_MODULE_4__["ValidateService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
RegisterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-register',
        template: _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_register_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RegisterComponent);



/***/ }),

/***/ "Yz0z":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "Z5Py":
/*!*******************************************************************!*\
  !*** ./src/app/components/customer-num/customer-num.component.ts ***!
  \*******************************************************************/
/*! exports provided: CustomerNumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerNumComponent", function() { return CustomerNumComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_customer_num_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./customer-num.component.html */ "Tqkw");
/* harmony import */ var _customer_num_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer-num.component.scss */ "r3tT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_customers_num_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/customers_num.service */ "Zfc8");





let CustomerNumComponent = class CustomerNumComponent {
    constructor(customer1Service) {
        this.customer1Service = customer1Service;
        this.customers = [];
        this.customersQuantity = 0;
    }
    ngOnInit() {
        setInterval(() => {
            this.customer1Service.getCustomerNums().subscribe((data) => {
                this.customers = data;
                this.customersQuantity = data.length;
            });
        }, 1000);
    }
};
CustomerNumComponent.ctorParameters = () => [
    { type: _services_customers_num_service__WEBPACK_IMPORTED_MODULE_4__["CustomerNumService"] }
];
CustomerNumComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-customer-num',
        template: _raw_loader_customer_num_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_customer_num_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CustomerNumComponent);



/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @techiediaries/ngx-qrcode */ "hiuq");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "Mfq2");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @auth0/angular-jwt */ "Nm8O");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-mask */ "tmjD");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-owl-carousel */ "uxF4");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/login/login.component */ "W3Zi");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/register/register.component */ "XC3f");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_generator_generator_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/generator/generator.component */ "6y1P");
/* harmony import */ var _components_customer_num_customer_num_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/customer-num/customer-num.component */ "Z5Py");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/profile/profile.component */ "DZ0t");
/* harmony import */ var _components_pic_slide_pic_slide_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/pic-slide/pic-slide.component */ "I+a1");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/validate.service */ "hFt3");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/auth.service */ "lGQG");



























const maskConfig = {
    validation: false,
};
let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"],
            _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_16__["NavbarComponent"],
            _components_login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"],
            _components_register_register_component__WEBPACK_IMPORTED_MODULE_18__["RegisterComponent"],
            _components_home_home_component__WEBPACK_IMPORTED_MODULE_19__["HomeComponent"],
            _components_generator_generator_component__WEBPACK_IMPORTED_MODULE_20__["GeneratorComponent"],
            _components_customer_num_customer_num_component__WEBPACK_IMPORTED_MODULE_21__["CustomerNumComponent"],
            _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_22__["ProfileComponent"],
            _components_pic_slide_pic_slide_component__WEBPACK_IMPORTED_MODULE_23__["PicSlideComponent"],
            _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_24__["FooterComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_14__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_5__["NgxQRCodeModule"],
            ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__["TooltipModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_7__["JwtModule"].forRoot({
                config: {
                    tokenGetter: () => {
                        return localStorage.getItem('id_token');
                    },
                },
            }),
            ngx_mask__WEBPACK_IMPORTED_MODULE_8__["NgxMaskModule"].forRoot(maskConfig),
            ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_13__["OwlModule"],
        ],
        providers: [_services_validate_service__WEBPACK_IMPORTED_MODULE_25__["ValidateService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_26__["AuthService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "Zfc8":
/*!***************************************************!*\
  !*** ./src/app/services/customers_num.service.ts ***!
  \***************************************************/
/*! exports provided: CustomerNumService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerNumService", function() { return CustomerNumService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json',
    }),
};
//대기 순번
let CustomerNumService = class CustomerNumService {
    constructor(http) {
        this.http = http;
        this.API_URL = this.prepEndpoint('cusnum/cus_nums/');
    }
    prepEndpoint(ep) {
        // 1. localhost에 포팅시
        // return 'http://localhost:3000/' + ep;
        // 2. Heroku 클라우드 서버에 포팅시
        return ep;
    }
    getCustomerNums() {
        return this.http.get(this.API_URL, httpOptions);
    }
};
CustomerNumService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CustomerNumService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], CustomerNumService);



/***/ }),

/***/ "few2":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "hFt3":
/*!**********************************************!*\
  !*** ./src/app/services/validate.service.ts ***!
  \**********************************************/
/*! exports provided: ValidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateService", function() { return ValidateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let ValidateService = class ValidateService {
    constructor() { }
    validateRegister(user) {
        if (user.name == '' ||
            user.name == undefined ||
            user.email == undefined ||
            user.username == undefined ||
            user.password == undefined ||
            user.birth == undefined) {
            return false;
        }
        else {
            return true;
        }
    }
    validatebusiness(businessuser) {
        if (businessuser.name == '' ||
            businessuser.name == undefined ||
            businessuser.email == undefined ||
            businessuser.username == undefined ||
            businessuser.password == undefined ||
            businessuser.licenseNum == undefined ||
            businessuser.birth == undefined) {
            return false;
        }
        else {
            return true;
        }
    }
    validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    licensecheck(licenseNum) {
        const stlicense = licenseNum;
        const sl = stlicense.length;
        if (licenseNum <= 9999999999 && licenseNum >= 0 && sl == 10) {
            return true;
        }
        else {
            return false;
        }
    }
};
ValidateService.ctorParameters = () => [];
ValidateService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], ValidateService);



/***/ }),

/***/ "hrlM":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./navbar.component.html */ "S6iF");
/* harmony import */ var _navbar_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar.component.scss */ "Ls9r");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);







let NavbarComponent = class NavbarComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() { }
    onLogoutClick() {
        this.authService.logout();
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
            title: '로그아웃 성공! ',
            icon: 'success',
            confirmButtonText: '확인',
        });
        this.router.navigate(['']);
        return false;
    }
    checkLoggedIn() {
        return this.authService.loggedIn();
    }
};
NavbarComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
NavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-navbar',
        template: _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_navbar_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NavbarComponent);



/***/ }),

/***/ "hv/c":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/pic-slide/pic-slide.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<br />\n<div class=\"container\" style=\"text-align: center\">\n  <owl-carousel [options]=\"homeSlider\" [carouselClasses]=\"['owl-theme']\">\n    <div class=\"item\">\n      <br />\n      <h1>1. QR코드 생성</h1>\n      <h1>대기 순번 QR코드 페이지로 이동하거나 QR코드 재발급 버튼 클릭</h1>\n      <br />\n      <img src=\"../../../assets/images/example.png\" />\n    </div>\n    <div class=\"item\">\n      <br />\n      <h1>2. 대기 등록 시</h1>\n      <h1>생성된 QR코드를 비치된 대기 등록 스캐너를 통해 스캔</h1>\n      <br />\n      <img src=\"../../../assets/images/example1.png\" />\n    </div>\n    <div class=\"item\">\n      <br />\n      <h1>3. 대기 등록 후 등록 취소를 원할 시</h1>\n      <h1>다시 QR코드를 생성하여 대기 등록 스캐너에 스캔</h1>\n      <br />\n      <img src=\"../../../assets/images/example2.png\" />\n    </div>\n    <div class=\"item\">\n      <br />\n      <h1>4. 대기 순번 차례 시</h1>\n      <h1>QR코드를 생성하여 대기 서비스 제공 스캐너에 스캔</h1>\n      <br />\n      <img src=\"../../../assets/images/example3.png\" />\n    </div>\n  </owl-carousel>\n</div>\n<br />\n");

/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "Nm8O");




const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json',
    }),
};
let AuthService = class AuthService {
    constructor(http, jwtHelper) {
        this.http = http;
        this.jwtHelper = jwtHelper;
    }
    prepEndpoint(ep) {
        // 1. localhost에 포팅시
        // return 'http://localhost:3000/' + ep;
        // 2. Heroku 클라우드 서버에 포팅시
        return ep;
    }
    registerUser(user) {
        const registerUrl = this.prepEndpoint('users/register');
        return this.http.post(registerUrl, user, httpOptions);
    }
    authenticateUser(login) {
        const loginUrl = this.prepEndpoint('users/authenticate');
        return this.http.post(loginUrl, login, httpOptions);
    }
    storeUserData(token, userNoPW) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(userNoPW));
        this.authToken = token;
        this.userNoPW = userNoPW;
    }
    getProfile() {
        this.authToken = localStorage.getItem('id_token');
        const httpOptions1 = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + this.authToken,
            }),
        };
        // const profileUrl = 'users/profile';
        const profileUrl = this.prepEndpoint('users/profile');
        return this.http.get(profileUrl, httpOptions1);
    }
    logout() {
        this.authToken = null;
        this.userNoPW = null;
        localStorage.clear();
    }
    loggedIn() {
        return !this.jwtHelper.isTokenExpired(this.authToken);
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"] }
];
AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], AuthService);



/***/ }),

/***/ "r3tT":
/*!*********************************************************************!*\
  !*** ./src/app/components/customer-num/customer-num.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXN0b21lci1udW0uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "rJJk":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/profile/profile.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"name\">\n  <br />\n  <h2 class=\"page-header\">{{ name }}님의 현재 프로필입니다.</h2>\n  <br />\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">아이디 : {{ username }}</li>\n    <li class=\"list-group-item\">이메일 : {{ email }}</li>\n    <li class=\"list-group-item\">생일 : {{ birth }}</li>\n  </ul>\n</div>\n");

/***/ }),

/***/ "tXZI":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<style type=\"text/css\">\n  .blank {\n    height: 150px;\n  }\n</style>\n<div *ngIf=\"!checkLoggedIn()\" style=\"text-align: center; vertical-align: top\">\n  <div style=\"padding-top: 40px\">\n    <h1>아직 계정이 없으신가요?</h1>\n    <h4>계정이 있으시면 로그인하세요!</h4>\n    <br />\n    <button\n      *ngIf=\"!checkLoggedIn()\"\n      type=\"button\"\n      class=\"btn btn-warning\"\n      routerLink=\"/register\"\n    >\n      회원가입\n    </button>\n    &nbsp;\n    <button\n      *ngIf=\"!checkLoggedIn()\"\n      type=\"button\"\n      style=\"text-align: center; vertical-align: top\"\n      class=\"btn btn-warning\"\n      routerLink=\"/login\"\n    >\n      로그인\n    </button>\n  </div>\n</div>\n<br />\n<div\n  *ngIf=\"checkLoggedIn()\"\n  style=\"\n    text-align: center;\n    vertical-align: top;\n    border: 1px solid peachpuff;\n    border-radius: 60px;\n    padding-top: 10px;\n    background-color: peachpuff;\n  \"\n>\n  <h1 style=\"padding-top: 10px; padding-bottom: 10px\">\n    어서오세요! Qyaho 은행입니다.\n  </h1>\n</div>\n<br />\n\n<div\n  *ngIf=\"checkLoggedIn()\"\n  style=\"\n    text-align: center;\n    vertical-align: top;\n    border: 1px solid black;\n    border-radius: 5px;\n    padding: 10px;\n    background-color: rgb(255, 255, 227);\n  \"\n>\n  <div *ngIf=\"name\">\n    <h2 class=\"page-header\">\n      {{ name }}님 환영합니다! 현재 대기 상황은 다음과 같습니다.\n    </h2>\n    <h2 class=\"waitpeople\">\n      현재 대기자 수는 {{ customersQuantity }}명 입니다.\n    </h2>\n    <h2 class=\"waitpeople\">\n      예상 대기 시간은 {{ customersQuantity * 5 }}분 입니다.\n    </h2>\n    <app-customer-num></app-customer-num>\n  </div>\n</div>\n<br />");

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login/login.component */ "W3Zi");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/register/register.component */ "XC3f");
/* harmony import */ var _components_generator_generator_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/generator/generator.component */ "6y1P");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/profile/profile.component */ "DZ0t");
/* harmony import */ var _components_customer_num_customer_num_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/customer-num/customer-num.component */ "Z5Py");
/* harmony import */ var _components_pic_slide_pic_slide_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/pic-slide/pic-slide.component */ "I+a1");











const routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'navbar', component: _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"] },
    { path: 'qrgen', component: _components_generator_generator_component__WEBPACK_IMPORTED_MODULE_7__["GeneratorComponent"] },
    { path: 'profile', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"] },
    { path: 'customerNum', component: _components_customer_num_customer_num_component__WEBPACK_IMPORTED_MODULE_9__["CustomerNumComponent"] },
    { path: 'picslide', component: _components_pic_slide_pic_slide_component__WEBPACK_IMPORTED_MODULE_10__["PicSlideComponent"] },
    { path: '**', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AppRoutingModule);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("html {\n  height: 100%;\n}\n\nbody {\n  margin: 0;\n  font-family: basic-sans, sans-serif;\n  line-height: 1.6;\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n}\n\nfooter {\n  margin-top: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBQ0ksU0FBQTtFQUNBLG1DQUFBO0VBQ0EsZ0JBQUE7RUFFQSxhQUFBO0VBQ0Esc0JBQUE7RUFFQSxnQkFBQTtBQURKOztBQUlBO0VBQ0ksZ0JBQUE7QUFESiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1se1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5ib2R5e1xyXG4gICAgbWFyZ2luOjA7XHJcbiAgICBmb250LWZhbWlseTogYmFzaWMtc2Fucywgc2Fucy1zZXJpZjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxufVxyXG5cclxuZm9vdGVye1xyXG4gICAgbWFyZ2luLXRvcDogYXV0bztcclxufSJdfQ== */");

/***/ }),

/***/ "zPH0":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map