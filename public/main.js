(self["webpackChunkqyaho"] = self["webpackChunkqyaho"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/home/home.component */ 8263);
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/navbar/navbar.component */ 3252);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/login/login.component */ 7143);
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/register/register.component */ 3412);
/* harmony import */ var _components_generator_generator_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/generator/generator.component */ 6347);
/* harmony import */ var _components_customer_num_customer_num_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/customer-num/customer-num.component */ 9272);
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/profile/profile.component */ 7094);










const routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent },
    { path: 'navbar', component: _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__.NavbarComponent },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_3__.RegisterComponent },
    { path: 'qrgen', component: _components_generator_generator_component__WEBPACK_IMPORTED_MODULE_4__.GeneratorComponent },
    { path: 'Customer_Num', component: _components_customer_num_customer_num_component__WEBPACK_IMPORTED_MODULE_5__.CustomerNumComponent },
    { path: 'profile', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__.ProfileComponent },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forRoot(routes, { useHash: true })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule],
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _C_Users_user1_Desktop_qyaho1006_qrfront_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./app.component.html */ 5158);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 3040);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);




let AppComponent = class AppComponent {
    constructor() {
        this.title = 'qyaho';
    }
};
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-root',
        template: _C_Users_user1_Desktop_qyaho1006_qrfront_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @techiediaries/ngx-qrcode */ 7977);
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ 3403);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @auth0/angular-jwt */ 1055);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-mask */ 247);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/dialog */ 2213);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/platform-browser/animations */ 718);
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-owl-carousel */ 1111);
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/navbar/navbar.component */ 3252);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login/login.component */ 7143);
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/register/register.component */ 3412);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home/home.component */ 8263);
/* harmony import */ var _components_generator_generator_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/generator/generator.component */ 6347);
/* harmony import */ var _components_customer_num_customer_num_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/customer-num/customer-num.component */ 9272);
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/profile/profile.component */ 7094);
/* harmony import */ var _components_pic_slide_pic_slide_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/pic-slide/pic-slide.component */ 8828);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/footer/footer.component */ 4662);
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/validate.service */ 7698);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/auth.service */ 7556);



























const maskConfig = {
    validation: false,
};
let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.NgModule)({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent,
            _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__.NavbarComponent,
            _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__.LoginComponent,
            _components_register_register_component__WEBPACK_IMPORTED_MODULE_6__.RegisterComponent,
            _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__.HomeComponent,
            _components_generator_generator_component__WEBPACK_IMPORTED_MODULE_8__.GeneratorComponent,
            _components_customer_num_customer_num_component__WEBPACK_IMPORTED_MODULE_9__.CustomerNumComponent,
            _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__.ProfileComponent,
            _components_pic_slide_pic_slide_component__WEBPACK_IMPORTED_MODULE_11__.PicSlideComponent,
            _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__.FooterComponent,
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__.BrowserModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpClientModule,
            _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_20__.NgxQRCodeModule,
            ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_0__.TooltipModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_18__.ReactiveFormsModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__.MatIconModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__.MatDialogModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_23__.MatButtonModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__.BrowserAnimationsModule,
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_25__.JwtModule.forRoot({
                config: {
                    tokenGetter: () => {
                        return localStorage.getItem('id_token');
                    },
                },
            }),
            ngx_mask__WEBPACK_IMPORTED_MODULE_26__.NgxMaskModule.forRoot(maskConfig),
            ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_1__.OwlModule,
        ],
        providers: [_services_validate_service__WEBPACK_IMPORTED_MODULE_13__.ValidateService, _services_auth_service__WEBPACK_IMPORTED_MODULE_14__.AuthService],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 9272:
/*!*******************************************************************!*\
  !*** ./src/app/components/customer-num/customer-num.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerNumComponent": () => (/* binding */ CustomerNumComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _C_Users_user1_Desktop_qyaho1006_qrfront_node_modules_ngtools_webpack_src_loaders_direct_resource_js_customer_num_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./customer-num.component.html */ 7239);
/* harmony import */ var _customer_num_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer-num.component.scss */ 6561);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_customers_num_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/customers_num.service */ 955);





let CustomerNumComponent = class CustomerNumComponent {
    constructor(customer1Service) {
        this.customer1Service = customer1Service;
        this.customers = [];
        this.customersQuantity = 0;
        this.customer1Service.getCustomerNums().subscribe((data) => {
            this.customers = data;
            this.customersQuantity = data.length;
        });
    }
};
CustomerNumComponent.ctorParameters = () => [
    { type: _services_customers_num_service__WEBPACK_IMPORTED_MODULE_2__.CustomerNumService }
];
CustomerNumComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-customer-num',
        template: _C_Users_user1_Desktop_qyaho1006_qrfront_node_modules_ngtools_webpack_src_loaders_direct_resource_js_customer_num_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_customer_num_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CustomerNumComponent);



/***/ }),

/***/ 4662:
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _C_Users_user1_Desktop_qyaho1006_qrfront_node_modules_ngtools_webpack_src_loaders_direct_resource_js_footer_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./footer.component.html */ 4488);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);



let FooterComponent = class FooterComponent {
};
FooterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-footer',
        template: _C_Users_user1_Desktop_qyaho1006_qrfront_node_modules_ngtools_webpack_src_loaders_direct_resource_js_footer_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
    })
], FooterComponent);



/***/ }),

/***/ 6347:
/*!*************************************************************!*\
  !*** ./src/app/components/generator/generator.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeneratorComponent": () => (/* binding */ GeneratorComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _C_Users_user1_Desktop_qyaho1006_qrfront_node_modules_ngtools_webpack_src_loaders_direct_resource_js_generator_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./generator.component.html */ 2731);
/* harmony import */ var _generator_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generator.component.css */ 4414);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ 7556);





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
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService }
];
GeneratorComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-generator',
        template: _C_Users_user1_Desktop_qyaho1006_qrfront_node_modules_ngtools_webpack_src_loaders_direct_resource_js_generator_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_generator_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], GeneratorComponent);



/***/ }),

/***/ 8263:
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _C_Users_user1_Desktop_qyaho1006_qrfront_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./home.component.html */ 5503);
/* harmony import */ var _home_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component.scss */ 3341);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ 7556);
/* harmony import */ var src_app_services_customers_num_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/customers_num.service */ 955);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ 8190);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);








let HomeComponent = class HomeComponent {
    constructor(authService, cusnumService, router) {
        this.authService = authService;
        this.cusnumService = cusnumService;
        this.router = router;
        this.customersQuantity = 0;
    }
    ngOnInit() {
        this.authService.getProfile().subscribe((profile) => {
            this.name = profile.user.name;
            this.username = profile.user.username;
            this.email = profile.user.email;
        });
        this.cusnumService.getCustomerNums().subscribe((data) => {
            this.customersQuantity = data.length;
        });
    }
    onLogoutClick() {
        this.authService.logout();
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
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
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: src_app_services_customers_num_service__WEBPACK_IMPORTED_MODULE_3__.CustomerNumService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
HomeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-home',
        template: _C_Users_user1_Desktop_qyaho1006_qrfront_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomeComponent);



/***/ }),

/***/ 7143:
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _C_Users_user1_Desktop_qyaho1006_qrfront_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./login.component.html */ 1081);
/* harmony import */ var _login_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component.scss */ 3675);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ 7556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ 8190);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);







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
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
                    title: '로그인 성공! ',
                    icon: 'success',
                    confirmButtonText: '확인',
                });
                this.router.navigate(['']);
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
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
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
LoginComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-login',
        template: _C_Users_user1_Desktop_qyaho1006_qrfront_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginComponent);



/***/ }),

/***/ 3252:
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarComponent": () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _C_Users_user1_Desktop_qyaho1006_qrfront_node_modules_ngtools_webpack_src_loaders_direct_resource_js_navbar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./navbar.component.html */ 7653);
/* harmony import */ var _navbar_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar.component.scss */ 2138);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ 7556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ 8190);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);







let NavbarComponent = class NavbarComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() { }
    onLogoutClick() {
        this.authService.logout();
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
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
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
NavbarComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-navbar',
        template: _C_Users_user1_Desktop_qyaho1006_qrfront_node_modules_ngtools_webpack_src_loaders_direct_resource_js_navbar_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_navbar_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], NavbarComponent);



/***/ }),

/***/ 8828:
/*!*************************************************************!*\
  !*** ./src/app/components/pic-slide/pic-slide.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PicSlideComponent": () => (/* binding */ PicSlideComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _C_Users_user1_Desktop_qyaho1006_qrfront_node_modules_ngtools_webpack_src_loaders_direct_resource_js_pic_slide_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./pic-slide.component.html */ 3164);
/* harmony import */ var _pic_slide_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pic-slide.component.scss */ 7250);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);




let PicSlideComponent = class PicSlideComponent {
    constructor() {
        this.homeSlider = { items: 1, dots: true, navigator: true };
    }
};
PicSlideComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-pic-slide',
        template: _C_Users_user1_Desktop_qyaho1006_qrfront_node_modules_ngtools_webpack_src_loaders_direct_resource_js_pic_slide_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_pic_slide_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], PicSlideComponent);



/***/ }),

/***/ 7094:
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileComponent": () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _C_Users_user1_Desktop_qyaho1006_qrfront_node_modules_ngtools_webpack_src_loaders_direct_resource_js_profile_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./profile.component.html */ 8999);
/* harmony import */ var _profile_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.component.scss */ 3116);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ 7556);





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
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService }
];
ProfileComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-profile',
        template: _C_Users_user1_Desktop_qyaho1006_qrfront_node_modules_ngtools_webpack_src_loaders_direct_resource_js_profile_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_profile_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProfileComponent);



/***/ }),

/***/ 3412:
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterComponent": () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _C_Users_user1_Desktop_qyaho1006_qrfront_node_modules_ngtools_webpack_src_loaders_direct_resource_js_register_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./register.component.html */ 8122);
/* harmony import */ var _register_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.component.scss */ 715);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/validate.service */ 7698);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ 7556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ 8190);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);








let RegisterComponent = class RegisterComponent {
    constructor(validateService, authService, router) {
        this.validateService = validateService;
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() { }
    onRegisterSubmit() {
        if (this.password1 !== this.password2) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
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
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
                title: '회원가입 실패! ',
                text: '모두 입력해 주세요',
                icon: 'error',
                confirmButtonText: '확인',
            });
            return false;
        }
        if (!this.validateService.validateEmail(user.email)) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
                title: '회원가입 실패! ',
                text: '이메일 주소가 올바르지 않습니다',
                icon: 'error',
                confirmButtonText: '확인',
            });
            return false;
        }
        this.authService.registerUser(user).subscribe((data) => {
            if (data.success) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
                    title: '회원가입 성공! ',
                    icon: 'success',
                    text: data.msg,
                    confirmButtonText: '확인',
                });
                this.router.navigate(['/login']);
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
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
    { type: _services_validate_service__WEBPACK_IMPORTED_MODULE_2__.ValidateService },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
RegisterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-register',
        template: _C_Users_user1_Desktop_qyaho1006_qrfront_node_modules_ngtools_webpack_src_loaders_direct_resource_js_register_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_register_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], RegisterComponent);



/***/ }),

/***/ 7556:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/angular-jwt */ 1055);




const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
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
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
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
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient },
    { type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__.JwtHelperService }
];
AuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root',
    })
], AuthService);



/***/ }),

/***/ 955:
/*!***************************************************!*\
  !*** ./src/app/services/customers_num.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerNumService": () => (/* binding */ CustomerNumService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 3882);



const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
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
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
CustomerNumService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root',
    })
], CustomerNumService);



/***/ }),

/***/ 7698:
/*!**********************************************!*\
  !*** ./src/app/services/validate.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ValidateService": () => (/* binding */ ValidateService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);


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
ValidateService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root',
    })
], ValidateService);



/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
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

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 1882);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 5158:
/*!***************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/app.component.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<html>\n  <header>\n    <app-navbar></app-navbar>\n  </header>\n\n  <body style=\"background-color: lightgoldenrodyellow;\">\n    <div class=\"container\">\n      <router-outlet></router-outlet>\n    </div>\n  </body>\n  \n  <footer>\n    <app-footer></app-footer>\n  </footer>\n</html>\n");

/***/ }),

/***/ 7239:
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/customer-num/customer-num.component.html ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<br />\n<div>\n  <table class=\"table table-bordered\" >\n    <thead class=\"thead\">\n      <tr class=\"text-center bg-warning\">\n        <th scope=\"col\">순번</th>\n        <th scope=\"col\">이름</th>\n        <th scope=\"col\">대기 등록 시간</th>\n      </tr>\n    </thead>\n\n    <tbody>\n      <tr *ngFor=\"let customer of customers; let i = index\">\n        <td class=\"text-center\" style=\"width: 20%\">\n          <h5>{{ i + 1 }}</h5>\n        </td>\n        <td class=\"text-center\" style=\"width: 40%\">\n          <h5>{{ customer.name }}</h5>\n        </td>\n        <td class=\"text-center\" style=\"width: 40%\">\n          <h5>{{ customer.time | date: \"MM/dd hh:mm:ss a\" }}</h5>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n");

/***/ }),

/***/ 4488:
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/footer/footer.component.html ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<footer class=\"py-10 bg-dark\">\n  <div class=\"container\" style=\"text-align: center\">\n    <p class=\"m-0 footer-text text-white\">Copyright &copy;2021 Qyaho</p>\n    <p class=\"m-0 footer-text text-white\">Gradudation project</p>\n  </div>\n</footer>\n");

/***/ }),

/***/ 2731:
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/generator/generator.component.html ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div *ngIf=\"user\">\n  <div id=\"container\">\n    <div id=\"block\">\n      <br />\n      <h2 class=\"page-header\">대기 순번 QR코드</h2>\n      <br />\n      <ul class=\"list-group\">\n        <h4>{{ user.name }}님의 QR코드</h4>\n        <li class=\"list-group-item\">이메일 : {{ user.email }}</li>\n        <li class=\"list-group-item\">생일 : {{ user.birth }}</li>\n        <li class=\"list-group-item\">\n          대기 등록 시간 : {{ this.kr_curr | date: \"hh:mm:ss a\" }}\n        </li>\n      </ul>\n      <br />\n      <div *ngIf=\"createdCode\" class=\"qrdata\">\n        <ngx-qrcode [value]=\"createdCode\"></ngx-qrcode>\n      </div>\n      <button mat-icon-button (click)=\"onRefresh()\">\n        <mat-icon>QR코드 재발급</mat-icon>\n      </button>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ 5503:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/home/home.component.html ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<style type=\"text/css\">\n  .blank {\n    height: 150px;\n  }\n</style>\n<div *ngIf=\"!checkLoggedIn()\" style=\"text-align: center; vertical-align: top\">\n  <div style=\"padding-top: 40px\">\n    <h1>아직 계정이 없으신가요?</h1>\n    <h4>계정이 있으시면 로그인하세요!</h4>\n    <br />\n    <button\n      *ngIf=\"!checkLoggedIn()\"\n      type=\"button\"\n      class=\"btn btn-primary\"\n      routerLink=\"/register\"\n    >\n      회원가입\n    </button>\n    &nbsp;\n    <button\n      *ngIf=\"!checkLoggedIn()\"\n      type=\"button\"\n      style=\"text-align: center; vertical-align: top\"\n      class=\"btn btn-primary\"\n      type=\"button\"\n      class=\"btn btn-primary\"\n      routerLink=\"/login\"\n    >\n      로그인\n    </button>\n  </div>\n</div>\n<br />\n  <div\n    *ngIf=\"checkLoggedIn()\"\n    style=\"\n      text-align: center;\n      vertical-align: top;\n      border: 1px solid peachpuff;\n      border-radius: 60px;\n      padding-top: 10px;\n      background-color: peachpuff;\n    \"\n  >\n    <h1 style=\"padding-top: 10px; padding-bottom: 10px\">\n      어서오세요! Qyaho 은행입니다.\n    </h1>\n  </div>\n  <br />\n\n  <div\n    *ngIf=\"checkLoggedIn()\"\n    style=\"\n      text-align: center;\n      vertical-align: top;\n      border: 1px solid black;\n      border-radius: 5px;\n      padding: 10px;\n      background-color: rgb(255, 255, 227);\n    \"\n  >\n    <div *ngIf=\"name\">\n      <h2 class=\"page-header\">\n        {{ name }}님 환영합니다! 현재 대기 상황은 다음과 같습니다.\n      </h2>\n      <h2 class=\"waitpeople\">\n        현재 대기자 수는 {{ customersQuantity }}명 입니다.\n      </h2>\n      <h2 class=\"waitpeople\">\n        예상 대기 시간은 {{ customersQuantity * 5 }}분 입니다.\n      </h2>\n      <app-customer-num></app-customer-num>\n    </div>\n  </div>\n  <br />\n  <div *ngIf=\"checkLoggedIn()\"\n    style=\"\n      text-align: center;\n      vertical-align: top;\n      border-radius: 5px;\n      padding: 10px;\n    \">\n  <app-pic-slide></app-pic-slide>\n</div>");

/***/ }),

/***/ 1081:
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/login/login.component.html ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<br />\n<h2 class=\"page-header\">Qyaho 로그인</h2>\n<br />\n<form (ngSubmit)=\"onLoginSubmit()\">\n  <div class=\"form-group\">\n    <label>ID</label>\n    <input\n      type=\"text\"\n      class=\"form-control\"\n      name=\"username\"\n      [(ngModel)]=\"username\"\n    />\n  </div>\n  <br />\n  <div class=\"form-group\">\n    <label>비밀번호</label>\n    <input\n      type=\"password\"\n      class=\"form-control\"\n      name=\"password\"\n      [(ngModel)]=\"password\"\n    />\n  </div>\n  <br />\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"로그인\" />\n</form>\n");

/***/ }),

/***/ 7653:
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/navbar/navbar.component.html ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<link\n  rel=\"stylesheet\"\n  href=\"https://use.fontawesome.com/releases/v5.15.4/css/all.css\"\n  integrity=\"sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm\"\n  crossorigin=\"anonymous\"\n/>\n\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-warning\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-logo\">\n      <i class=\"fab fa-centercode\"></i>\n      <a class=\"navbar-brand\" routerLink=\"/\">Qyaho 은행</a>\n    </div>\n    <button\n      class=\"navbar-toggler\"\n      type=\"button\"\n      data-toggle=\"collapse\"\n      data-target=\"#navbarSupportedContent\"\n      aria-controls=\"navbarSupportedContent\"\n      aria-expanded=\"false\"\n      aria-label=\"Toggle navigation\"\n    >\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li *ngIf=\"!checkLoggedIn()\" class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/register\">회원가입</a>\n        </li>\n\n        <li *ngIf=\"!checkLoggedIn()\" class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/login\">로그인</a>\n        </li>\n\n        <ul class=\"navbar-nav mr-auto\">\n\n          <li *ngIf=\"checkLoggedIn()\" class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/qrgen\">대기 순번 QR코드</a>\n          </li>\n\n          <li *ngIf=\"checkLoggedIn()\" class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/profile\">프로필</a>\n          </li>\n        </ul>\n        <ul class=\"navbar-nav mr-right\">\n          <li *ngIf=\"checkLoggedIn()\" class=\"nav-item\">\n            <a class=\"nav-link\" (click)=\"onLogoutClick()\" href=\"#\">로그아웃</a>\n          </li>\n        </ul>\n      </ul>\n    </div>\n  </div>\n</nav>\n");

/***/ }),

/***/ 3164:
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/pic-slide/pic-slide.component.html ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"container\">\n  <owl-carousel [options]=\"homeSlider\" [carouselClasses]=\"['owl-theme']\">\n    <div class=\"item\">\n      <img src=\"../../../assets/images/enha.jpg\" />\n    </div>\n    <div class=\"item\">\n      <img src=\"../../../assets/images/home.jpg\" />\n    </div>\n  </owl-carousel>\n</div>\n");

/***/ }),

/***/ 8999:
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/profile/profile.component.html ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div *ngIf=\"name\">\n  <br />\n  <h2 class=\"page-header\">{{ name }}님의 현재 프로필입니다.</h2>\n  <br />\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">아이디 : {{ username }}</li>\n    <li class=\"list-group-item\">이메일 : {{ email }}</li>\n    <li class=\"list-group-item\">생일 : {{ birth }}</li>\n  </ul>\n</div>\n");

/***/ }),

/***/ 8122:
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/register/register.component.html ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<br />\n<h2 class=\"page-header\">Qyaho 회원가입</h2>\n<br />\n<form (ngSubmit)=\"onRegisterSubmit()\">\n  <div class=\"from-gruop\">\n    <label> * 이름 </label>\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\" />\n  </div>\n  <div class=\"form-gruop\">\n    <label> * 이메일 </label>\n    <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" />\n  </div>\n  <div class=\"form-gruop\">\n    <label> * 생년월일 </label>\n    <input type=\"date\" [(ngModel)]=\"birth\" name=\"birth\" class=\"form-control\" />\n  </div>\n  <div class=\"form-gruop\">\n    <label> * ID </label>\n    <input\n      type=\"text\"\n      [(ngModel)]=\"username\"\n      name=\"username\"\n      class=\"form-control\"\n    />\n  </div>\n  <div class=\"form-group\">\n    <label> * 비밀번호 </label>\n    <input\n      type=\"password\"\n      [(ngModel)]=\"password1\"\n      name=\"password1\"\n      class=\"form-control\"\n    />\n  </div>\n  <div class=\"form-group\">\n    <label> * 비밀번호 확인 </label>\n    <input\n      type=\"password\"\n      [(ngModel)]=\"password2\"\n      name=\"password2\"\n      class=\"form-control\"\n    />\n  </div>\n  <br />\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"회원가입\" />\n</form>\n");

/***/ }),

/***/ 4414:
/*!**************************************************************!*\
  !*** ./src/app/components/generator/generator.component.css ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnZW5lcmF0b3IuY29tcG9uZW50LmNzcyJ9 */";

/***/ }),

/***/ 3040:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = "html {\n  height: 100%;\n}\n\nbody {\n  margin: 0;\n  font-family: basic-sans, sans-serif;\n  line-height: 1.6;\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n}\n\nfooter {\n  margin-top: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUFDSjs7QUFFQTtFQUNJLFNBQUE7RUFDQSxtQ0FBQTtFQUNBLGdCQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0VBRUEsZ0JBQUE7QUFESjs7QUFJQTtFQUNJLGdCQUFBO0FBREoiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuYm9keXtcclxuICAgIG1hcmdpbjowO1xyXG4gICAgZm9udC1mYW1pbHk6IGJhc2ljLXNhbnMsIHNhbnMtc2VyaWY7XHJcbiAgICBsaW5lLWhlaWdodDogMS42O1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmZvb3RlcntcclxuICAgIG1hcmdpbi10b3A6IGF1dG87XHJcbn0iXX0= */";

/***/ }),

/***/ 6561:
/*!*********************************************************************!*\
  !*** ./src/app/components/customer-num/customer-num.component.scss ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXN0b21lci1udW0uY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 3341:
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 3675:
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.scss ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 2138:
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.scss ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".navbar-logo i {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUFDRiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyLWxvZ28gaSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59Il19 */";

/***/ }),

/***/ 7250:
/*!***************************************************************!*\
  !*** ./src/app/components/pic-slide/pic-slide.component.scss ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwaWMtc2xpZGUuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 3116:
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.scss ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 715:
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.scss ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuc2NzcyJ9 */";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map