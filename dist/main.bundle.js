webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: "<router-outlet></router-outlet>",
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_schedule_service_client__ = __webpack_require__("../../../../../src/app/services/schedule.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_day_service_client__ = __webpack_require__("../../../../../src/app/services/day.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_match_service_client__ = __webpack_require__("../../../../../src/app/services/match.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_message_service_client__ = __webpack_require__("../../../../../src/app/services/message.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_swipe_swipe_component__ = __webpack_require__("../../../../../src/app/components/swipe/swipe.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_settings_settings_component__ = __webpack_require__("../../../../../src/app/components/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_matches_matches_component__ = __webpack_require__("../../../../../src/app/components/matches/matches.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_convo_convo_component__ = __webpack_require__("../../../../../src/app/components/convo/convo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_schedule_schedule_component__ = __webpack_require__("../../../../../src/app/components/schedule/schedule.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        // Declare components here
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_swipe_swipe_component__["a" /* SwipeComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_settings_settings_component__["a" /* SettingsComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_matches_matches_component__["a" /* MatchesComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_convo_convo_component__["a" /* ConvoComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_schedule_schedule_component__["a" /* ScheduleComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__app_routing__["a" /* Routing */]
        ],
        // Client Side services here
        providers: [__WEBPACK_IMPORTED_MODULE_6__services_user_service_client__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_7__services_schedule_service_client__["a" /* ScheduleService */], __WEBPACK_IMPORTED_MODULE_8__services_day_service_client__["a" /* DayService */], __WEBPACK_IMPORTED_MODULE_9__services_match_service_client__["a" /* MatchService */], __WEBPACK_IMPORTED_MODULE_10__services_message_service_client__["a" /* MessageService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_swipe_swipe_component__ = __webpack_require__("../../../../../src/app/components/swipe/swipe.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_settings_settings_component__ = __webpack_require__("../../../../../src/app/components/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_matches_matches_component__ = __webpack_require__("../../../../../src/app/components/matches/matches.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_convo_convo_component__ = __webpack_require__("../../../../../src/app/components/convo/convo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_schedule_schedule_component__ = __webpack_require__("../../../../../src/app/components/schedule/schedule.component.ts");








var APP_ROUTES = [
    // Home
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_2__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'user/:userId', component: __WEBPACK_IMPORTED_MODULE_3__components_swipe_swipe_component__["a" /* SwipeComponent */] },
    { path: 'user/:userId/schedule', component: __WEBPACK_IMPORTED_MODULE_7__components_schedule_schedule_component__["a" /* ScheduleComponent */] },
    { path: 'user/:userId/settings', component: __WEBPACK_IMPORTED_MODULE_4__components_settings_settings_component__["a" /* SettingsComponent */] },
    { path: 'user/:userId/matches', component: __WEBPACK_IMPORTED_MODULE_5__components_matches_matches_component__["a" /* MatchesComponent */] },
    { path: 'user/:userId/matches/:matchId', component: __WEBPACK_IMPORTED_MODULE_6__components_convo_convo_component__["a" /* ConvoComponent */] }
];
// Export the routes as module providers
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/components/convo/convo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/convo/convo.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-convo navbar-dark bg-primary mb-3\">\n  <div class=\"container\">\n    <a class=\"pull-left\" [routerLink]=\"['/user', userId, 'matches']\"><i class=\"fa fa-chevron-left\" aria-hidden=\"true\"></i></a>\n    <a class=\"navbar-brand mx-auto\" href=\"#\">{{otherUser?.firstName}} , {{otherUser?.age}}</a><br>\n  </div>\n  <div class=\"container\">\n    <img class=\"mx-auto convo--image\" src={{otherUser?.photo}}>\n  </div>\n</nav>\n  <div class=\"convo__date\">\n    <div class=\"container text-center\">\n      <p>Upcoming Date: 3pm on Friday @ The Bar</p>\n    </div>\n  </div>\n<div class=\"convo__messages\">\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-8\">\n      <div class=\"convo__text convo__text--left\">\n        <div class=\"convo__text--body\">\n      <p>Yo.</p>\n    </div>\n    </div>\n    </div>\n    <div class=\"col-4\"></div>\n  </div>\n</div>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-4\"></div>\n    <div class=\"col-8\">\n      <div class=\"convo__text convo__text--right\">\n          <div class=\"convo__text--body\">\n      <p>Hello my name is Emily. I enjoy long walks on the beach and I can't wait for ours.</p>\n    </div>\n    </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-4\"></div>\n    <div class=\"col-8\">\n      <div class=\"convo__text convo__text--right\">\n          <div class=\"convo__text--body\">\n      <p>Hello my name is Emily. I enjoy long walks on the beach and I can't wait for ours.</p>\n    </div>\n    </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-4\"></div>\n    <div class=\"col-8\">\n      <div class=\"convo__text convo__text--right\">\n          <div class=\"convo__text--body\">\n      <p>Hello my name is Emily. I enjoy long walks on the beach and I can't wait for ours.</p>\n    </div>\n    </div>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-8\">\n      <div class=\"convo__text convo__text--left\">\n        <div class=\"convo__text--body\">\n      <p>Hello my name is Emily. I enjoy long walks on the beach and I can't wait for ours..</p>\n    </div>\n    </div>\n    </div>\n    <div class=\"col-4\"></div>\n  </div>\n</div>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-4\"></div>\n    <div class=\"col-8\">\n      <div class=\"convo__text convo__text--right\">\n          <div class=\"convo__text--body\">\n      <p>Hello my name is Emily. I enjoy long walks on the beach and I can't wait for ours.</p>\n    </div>\n    </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-4\"></div>\n    <div class=\"col-8\">\n      <div class=\"convo__text convo__text--right\">\n          <div class=\"convo__text--body\">\n      <p>Hello my name is Emily. I enjoy long walks on the beach and I can't wait for ours.</p>\n    </div>\n    </div>\n    </div>\n  </div>\n</div>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-4\"></div>\n    <div class=\"col-8\">\n      <div class=\"convo__text convo__text--right\">\n          <div class=\"convo__text--body\">\n      <p>Hello my name is Emily. I enjoy long walks on the beach and I can't wait for ours.</p>\n    </div>\n    </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-4\"></div>\n    <div class=\"col-8\">\n      <div class=\"convo__text convo__text--right\">\n          <div class=\"convo__text--body\">\n      <p>Hello my name is Emily. I enjoy long walks on the beach and I can't wait for ours.</p>\n    </div>\n    </div>\n    </div>\n  </div>\n</div>\n\n\n</div>\n<div class=\"convo__input\">\n  <div class=\"container\">\n  <form (ngSubmit)='createMessage()' #f='ngForm'>\n  <fieldset>\n      <div class=\"row\">\n        <div class=\"col-8\">\n          <input [(ngModel)]='message' name='message' type='text' class='form-control' placeholder='Message'>\n        </div>\n    <div class=\"col-4\">\n    <button type='submit' class='btn btn-primary'>Send</button>\n    </div>\n    </div>\n  </fieldset>\n</form>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/convo/convo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConvoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_match_service_client__ = __webpack_require__("../../../../../src/app/services/match.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_message_service_client__ = __webpack_require__("../../../../../src/app/services/message.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ConvoComponent = (function () {
    function ConvoComponent(userService, matchService, messageService, router, activatedRoute) {
        this.userService = userService;
        this.matchService = matchService;
        this.messageService = messageService;
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    ConvoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['userId'];
            _this.matchId = params['matchId'];
            _this.userService.findUserById(_this.userId).subscribe(function (user) {
                _this.user = user;
                _this.matchService.getMatchById(_this.matchId).subscribe(function (match) {
                    _this.match = match;
                    if (match.user1 == match.user) {
                        _this.userService.findUserById(match.user2).subscribe(function (user1) {
                            _this.otherUser = user1;
                        });
                    }
                    else {
                        _this.userService.findUserById(match.user1).subscribe(function (user2) {
                            _this.otherUser = user2;
                        });
                    }
                });
            });
            _this.messageService.findMessagesById(_this.matchId).subscribe(function (messages) {
                _this.messages = messages;
                console.log(_this.messages);
            });
        });
    };
    ConvoComponent.prototype.createMessage = function () {
        var _this = this;
        var new_message = {
            match: this.matchId,
            sender: this.userId,
            body: this.message,
        };
        console.log('creating message from component');
        this.messageService.createMessage(new_message).subscribe(function (message) {
            console.log(message);
            _this.messages.push(message);
        });
    };
    return ConvoComponent;
}());
ConvoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-convo',
        template: __webpack_require__("../../../../../src/app/components/convo/convo.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/convo/convo.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_match_service_client__["a" /* MatchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_match_service_client__["a" /* MatchService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_message_service_client__["a" /* MessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_message_service_client__["a" /* MessageService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _e || Object])
], ConvoComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=convo.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"hp-background\">\n<nav class=\"navbar navbar-dark bg-primary mb-3\">\n  <div class=\"container\">\n    <a class=\"navbar-brand mx-auto\" [routerLink]=\"['']\">Database Project</a>\n  </div>\n</nav>\n<div class='container'>\n  <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">\n    Username or password did not match\n  </div>\n  <h1>Login</h1>\n  <form (ngSubmit)='login()' #f='ngForm'>\n    <fieldset class=\"form-group\">\n      <p>Username</p>\n      <input name='email' [(ngModel)]='email' type='text' class='form-control' placeholder='Email'>\n    </fieldset>\n    <fieldset class=\"form-group\">\n      <p>Password</p>\n      <input name='password' [(ngModel)]='password' type='password' class='form-control' placeholder='Password'>\n    </fieldset>\n    <button type='submit' class='btn btn-primary btn-block'>Login</button>\n    <p class=\"text-center\">Not a member? <a [routerLink]=\"['/register']\"> Register here.</a></p>\n  </form>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
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
    //@ViewChild('f') loginForm: NgForm;
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.errorFlag = false;
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        var user = this.userService.findUserByCredentials(this.email, this.password).subscribe(function (user) {
            if (user != null && _this.email === user.email && _this.password === user.password) {
                _this.router.navigate(['user/' + user._id]);
            }
            else {
                _this.errorFlag = true;
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/matches/matches.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/matches/matches.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-primary mb-3\">\n  <div class=\"container\">\n    <a class=\"pull-left\" [routerLink]=\"['/user', this.userId]\"><i class=\"fa fa-chevron-left\" aria-hidden=\"true\"></i></a>\n    <a class=\"navbar-brand mx-auto\">Matches</a>\n  </div>\n</nav>\n<div class=\"container\">\n  <div *ngFor=\"let matchedUser of matchedUsers\" class=\"row match\">\n    <div class=\"col-4 match--image\">\n      <img src=\"{{matchedUser?.photo}}\">\n    </div>\n    <a [routerLink]=\"['/user', this.userId, 'matches', getMatchIdFromUser(matchedUser)]\">\n      <div class=\"col-8 match--info\">\n        <p>{{matchedUser?.firstName}}</p>\n      </div>\n    </a>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/matches/matches.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_match_service_client__ = __webpack_require__("../../../../../src/app/services/match.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MatchesComponent = (function () {
    function MatchesComponent(userService, matchService, router, activatedRoute) {
        this.userService = userService;
        this.matchService = matchService;
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    MatchesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['userId'];
            _this.userService.findUserById(_this.userId).subscribe(function (user) {
                _this.user = user;
                _this.matchesIds = user.matches;
                _this.matchService.getMatchListByIds(_this.matchesIds).subscribe(function (matches) {
                    _this.matches = matches;
                    _this.matchedUsers = _this.matchService.getUserListFromMatches(_this.userId, _this.matchesIds).subscribe(function (userList) {
                        _this.matchedUsers = userList;
                    });
                });
            });
        });
    };
    MatchesComponent.prototype.getMatchIdFromUser = function (otherUser) {
        for (var i = 0; i < otherUser.matches.length; i++) {
            for (var j = 0; j < this.user.matches.length; j++) {
                if (otherUser.matches[i] == this.user.matches[j]) {
                    return otherUser.matches[i];
                }
            }
        }
    };
    return MatchesComponent;
}());
MatchesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-matches',
        template: __webpack_require__("../../../../../src/app/components/matches/matches.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/matches/matches.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_match_service_client__["a" /* MatchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_match_service_client__["a" /* MatchService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object])
], MatchesComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=matches.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-primary mb-3\">\n  <div class=\"container\">\n    <a class=\"navbar-brand mx-auto\" [routerLink]=\"['']\">Database Project</a>\n  </div>\n</nav>\n<div class='container'>\n  <h1>Register</h1>\n  <form (ngSubmit)='register()' #f='ngForm'>\n    <fieldset class=\"form-group\">\n      <p>Email</p>\n      <input name='email' [(ngModel)]='email' type='text' class='form-control' placeholder='Email'>\n    </fieldset>\n    <fieldset class=\"form-group\">\n      <p>Password</p>\n      <input name='password' [(ngModel)]='password' type='password' class='form-control' placeholder='Password'>\n    </fieldset>\n    <fieldset class=\"form-group\">\n      <p>First Name</p>\n      <input name='firstName' [(ngModel)]='firstName' type='text' class='form-control' placeholder='First Name'>\n    </fieldset>\n    <fieldset class=\"form-group\">\n      <p>Age</p>\n      <input name='age' [(ngModel)]='age' type='number' class='form-control' placeholder='Age'>\n    </fieldset>\n    <fieldset class=\"form-group\">\n    <p>Photo</p>\n    <div [hidden]=\"photo == null\" class=\"user--image\">\n      <img src=\"{{photo}}\"/>\n    </div>\n    <input name='photo' [(ngModel)]='photo' type='text' class='form-control' placeholder='Photo URL'>\n    </fieldset>\n    <fieldset class=\"form-group\">\n      <p>Bio</p>\n      <textarea name='bio' [(ngModel)]='bio' type='text' class='form-control' placeholder='Bio'></textarea>\n    </fieldset>\n    <fieldset class=\"form-group\">\n      <p>Gender</p>\n      <select name='gender' class=\"custom-select w-100\" [(ngModel)]='gender'>\n        <option disabled [ngValue]=\"null\">Select a gender</option>\n        <option *ngFor=\"let gender of genders\" [ngValue]=\"gender\">{{gender}}</option>\n      </select>\n    </fieldset>\n    <fieldset class=\"form-group\">\n      <p>Looking For</p>\n      <select name='lookingFor' class=\"custom-select w-100\" [(ngModel)]='lookingFor'>\n        <option disabled [ngValue]=\"null\">Select a gender</option>\n        <option *ngFor=\"let lookingFor of lookingFors\" [ngValue]=\"lookingFor\">{{lookingFor}}</option>\n      </select>\n    </fieldset>\n    <button type='submit' class='btn btn-primary btn-block'>Register</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_schedule_service_client__ = __webpack_require__("../../../../../src/app/services/schedule.service.client.ts");
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
    function RegisterComponent(scheduleService, userService, router) {
        this.scheduleService = scheduleService;
        this.userService = userService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.gender = null;
        this.lookingFor = null;
        this.genders = ['Female', 'Male'];
        this.lookingFors = ['Female', 'Male'];
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        var new_user = {
            email: this.email,
            password: this.password,
            firstName: this.firstName,
            age: this.age,
            photo: this.photo,
            bio: this.bio,
            gender: this.gender,
            lookingFor: this.lookingFor,
            schedule: null,
            matches: null,
            likedBy: null,
            likes: null,
            rating: null,
            timesRated: 0,
        };
        console.log('creating user from component');
        this.userService.createUser(new_user).subscribe(function (user) {
            _this.router.navigate(['user/' + user._id + '/schedule']);
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_schedule_service_client__["a" /* ScheduleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_schedule_service_client__["a" /* ScheduleService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], RegisterComponent);

var _a, _b, _c;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/schedule/schedule.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/schedule/schedule.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-primary mb-3\">\n  <div class=\"container\">\n    <p class=\"navbar-brand mx-auto\">Schedule</p>\n  </div>\n</nav>\n<div class='container'>\n  <!-- {{userId}}\n  {{scheduleId}} -->\n  <div class=\"schedule__day\">\n  <h3>Monday</h3>\n  <div class=\"row\">\n    <div (click)=\"monday._9 = !monday._9\" [ngClass]=\"{'schedule__hour--active' : monday?._9}\" class=\"col-4 schedule__hour\"><p>9AM</p></div>\n    <div (click)=\"monday._10 = !monday._10\" [ngClass]=\"{'schedule__hour--active' : monday?._10}\" class=\"col-4 schedule__hour\"><p>10AM</p></div>\n    <div (click)=\"monday._11 = !monday._11\" [ngClass]=\"{'schedule__hour--active' : monday?._11}\" class=\"col-4 schedule__hour\"><p>11AM</p></div>\n    <div (click)=\"monday._12 = !monday._12\" [ngClass]=\"{'schedule__hour--active' : monday?._12}\" class=\"col-4 schedule__hour\"><p>12PM</p></div>\n    <div (click)=\"monday._13 = !monday._13\" [ngClass]=\"{'schedule__hour--active' : monday?._13}\" class=\"col-4 schedule__hour\"><p>1PM</p></div>\n    <div (click)=\"monday._14 = !monday._14\" [ngClass]=\"{'schedule__hour--active' : monday?._14}\" class=\"col-4 schedule__hour\"><p>2PM</p></div>\n    <div (click)=\"monday._15 = !monday._15\" [ngClass]=\"{'schedule__hour--active' : monday?._15}\" class=\"col-4 schedule__hour\"><p>3PM</p></div>\n    <div (click)=\"monday._16 = !monday._16\" [ngClass]=\"{'schedule__hour--active' : monday?._16}\" class=\"col-4 schedule__hour\"><p>4PM</p></div>\n    <div (click)=\"monday._17 = !monday._17\" [ngClass]=\"{'schedule__hour--active' : monday?._17}\" class=\"col-4 schedule__hour\"><p>5PM</p></div>\n    <div (click)=\"monday._18 = !monday._18\" [ngClass]=\"{'schedule__hour--active' : monday?._18}\" class=\"col-4 schedule__hour\"><p>6PM</p></div>\n    <div (click)=\"monday._19 = !monday._19\" [ngClass]=\"{'schedule__hour--active' : monday?._19}\" class=\"col-4 schedule__hour\"><p>7PM</p></div>\n    <div (click)=\"monday._20 = !monday._20\" [ngClass]=\"{'schedule__hour--active' : monday?._20}\" class=\"col-4 schedule__hour\"><p>8PM</p></div>\n    <div (click)=\"monday._21 = !monday._21\" [ngClass]=\"{'schedule__hour--active' : monday?._21}\" class=\"col-4 schedule__hour\"><p>9PM</p></div>\n  </div>\n</div>\n\n  <div class=\"schedule__day\">\n  <h3>Tuesday</h3>\n  <div class=\"row\">\n    <div (click)=\"tuesday._9 = !tuesday._9\" [ngClass]=\"{'schedule__hour--active' : tuesday?._9}\" class=\"col-4 schedule__hour\"><p>9AM</p></div>\n    <div (click)=\"tuesday._10 = !tuesday._10\" [ngClass]=\"{'schedule__hour--active' : tuesday?._10}\" class=\"col-4 schedule__hour\"><p>10AM</p></div>\n    <div (click)=\"tuesday._11 = !tuesday._11\" [ngClass]=\"{'schedule__hour--active' : tuesday?._11}\" class=\"col-4 schedule__hour\"><p>11AM</p></div>\n    <div (click)=\"tuesday._12 = !tuesday._12\" [ngClass]=\"{'schedule__hour--active' : tuesday?._12}\" class=\"col-4 schedule__hour\"><p>12PM</p></div>\n    <div (click)=\"tuesday._13 = !tuesday._13\" [ngClass]=\"{'schedule__hour--active' : tuesday?._13}\" class=\"col-4 schedule__hour\"><p>1PM</p></div>\n    <div (click)=\"tuesday._14 = !tuesday._14\" [ngClass]=\"{'schedule__hour--active' : tuesday?._14}\" class=\"col-4 schedule__hour\"><p>2PM</p></div>\n    <div (click)=\"tuesday._15 = !tuesday._15\" [ngClass]=\"{'schedule__hour--active' : tuesday?._15}\" class=\"col-4 schedule__hour\"><p>3PM</p></div>\n    <div (click)=\"tuesday._16 = !tuesday._16\" [ngClass]=\"{'schedule__hour--active' : tuesday?._16}\" class=\"col-4 schedule__hour\"><p>4PM</p></div>\n    <div (click)=\"tuesday._17 = !tuesday._17\" [ngClass]=\"{'schedule__hour--active' : tuesday?._17}\" class=\"col-4 schedule__hour\"><p>5PM</p></div>\n    <div (click)=\"tuesday._18 = !tuesday._18\" [ngClass]=\"{'schedule__hour--active' : tuesday?._18}\" class=\"col-4 schedule__hour\"><p>6PM</p></div>\n    <div (click)=\"tuesday._19 = !tuesday._19\" [ngClass]=\"{'schedule__hour--active' : tuesday?._19}\" class=\"col-4 schedule__hour\"><p>7PM</p></div>\n    <div (click)=\"tuesday._20 = !tuesday._20\" [ngClass]=\"{'schedule__hour--active' : tuesday?._20}\" class=\"col-4 schedule__hour\"><p>8PM</p></div>\n    <div (click)=\"tuesday._21 = !tuesday._21\" [ngClass]=\"{'schedule__hour--active' : tuesday?._21}\" class=\"col-4 schedule__hour\"><p>9PM</p></div>\n  </div>\n</div>\n\n  <div class=\"schedule__day\">\n  <h3>Wednesday</h3>\n  <div class=\"row\">\n    <div (click)=\"wednesday._9 = !wednesday._9\" [ngClass]=\"{'schedule__hour--active' : wednesday?._9}\" class=\"col-4 schedule__hour\"><p>9AM</p></div>\n    <div (click)=\"wednesday._10 = !wednesday._10\" [ngClass]=\"{'schedule__hour--active' : wednesday?._10}\" class=\"col-4 schedule__hour\"><p>10AM</p></div>\n    <div (click)=\"wednesday._11 = !wednesday._11\" [ngClass]=\"{'schedule__hour--active' : wednesday?._11}\" class=\"col-4 schedule__hour\"><p>11AM</p></div>\n    <div (click)=\"wednesday._12 = !wednesday._12\" [ngClass]=\"{'schedule__hour--active' : wednesday?._12}\" class=\"col-4 schedule__hour\"><p>12PM</p></div>\n    <div (click)=\"wednesday._13 = !wednesday._13\" [ngClass]=\"{'schedule__hour--active' : wednesday?._13}\" class=\"col-4 schedule__hour\"><p>1PM</p></div>\n    <div (click)=\"wednesday._14 = !wednesday._14\" [ngClass]=\"{'schedule__hour--active' : wednesday?._14}\" class=\"col-4 schedule__hour\"><p>2PM</p></div>\n    <div (click)=\"wednesday._15 = !wednesday._15\" [ngClass]=\"{'schedule__hour--active' : wednesday?._15}\" class=\"col-4 schedule__hour\"><p>3PM</p></div>\n    <div (click)=\"wednesday._16 = !wednesday._16\" [ngClass]=\"{'schedule__hour--active' : wednesday?._16}\" class=\"col-4 schedule__hour\"><p>4PM</p></div>\n    <div (click)=\"wednesday._17 = !wednesday._17\" [ngClass]=\"{'schedule__hour--active' : wednesday?._17}\" class=\"col-4 schedule__hour\"><p>5PM</p></div>\n    <div (click)=\"wednesday._18 = !wednesday._18\" [ngClass]=\"{'schedule__hour--active' : wednesday?._18}\" class=\"col-4 schedule__hour\"><p>6PM</p></div>\n    <div (click)=\"wednesday._19 = !wednesday._19\" [ngClass]=\"{'schedule__hour--active' : wednesday?._19}\" class=\"col-4 schedule__hour\"><p>7PM</p></div>\n    <div (click)=\"wednesday._20 = !wednesday._20\" [ngClass]=\"{'schedule__hour--active' : wednesday?._20}\" class=\"col-4 schedule__hour\"><p>8PM</p></div>\n    <div (click)=\"wednesday._21 = !wednesday._21\" [ngClass]=\"{'schedule__hour--active' : wednesday?._21}\" class=\"col-4 schedule__hour\"><p>9PM</p></div>\n  </div>\n</div>\n\n  <div class=\"schedule__day\">\n  <h3>Thursday</h3>\n  <div class=\"row\">\n    <div (click)=\"thursday._9 = !thursday._9\" [ngClass]=\"{'schedule__hour--active' : thursday?._9}\" class=\"col-4 schedule__hour\"><p>9AM</p></div>\n    <div (click)=\"thursday._10 = !thursday._10\" [ngClass]=\"{'schedule__hour--active' : thursday?._10}\" class=\"col-4 schedule__hour\"><p>10AM</p></div>\n    <div (click)=\"thursday._11 = !thursday._11\" [ngClass]=\"{'schedule__hour--active' : thursday?._11}\" class=\"col-4 schedule__hour\"><p>11AM</p></div>\n    <div (click)=\"thursday._12 = !thursday._12\" [ngClass]=\"{'schedule__hour--active' : thursday?._12}\" class=\"col-4 schedule__hour\"><p>12PM</p></div>\n    <div (click)=\"thursday._13 = !thursday._13\" [ngClass]=\"{'schedule__hour--active' : thursday?._13}\" class=\"col-4 schedule__hour\"><p>1PM</p></div>\n    <div (click)=\"thursday._14 = !thursday._14\" [ngClass]=\"{'schedule__hour--active' : thursday?._14}\" class=\"col-4 schedule__hour\"><p>2PM</p></div>\n    <div (click)=\"thursday._15 = !thursday._15\" [ngClass]=\"{'schedule__hour--active' : thursday?._15}\" class=\"col-4 schedule__hour\"><p>3PM</p></div>\n    <div (click)=\"thursday._16 = !thursday._16\" [ngClass]=\"{'schedule__hour--active' : thursday?._16}\" class=\"col-4 schedule__hour\"><p>4PM</p></div>\n    <div (click)=\"thursday._17 = !thursday._17\" [ngClass]=\"{'schedule__hour--active' : thursday?._17}\" class=\"col-4 schedule__hour\"><p>5PM</p></div>\n    <div (click)=\"thursday._18 = !thursday._18\" [ngClass]=\"{'schedule__hour--active' : thursday?._18}\" class=\"col-4 schedule__hour\"><p>6PM</p></div>\n    <div (click)=\"thursday._19 = !thursday._19\" [ngClass]=\"{'schedule__hour--active' : thursday?._19}\" class=\"col-4 schedule__hour\"><p>7PM</p></div>\n    <div (click)=\"thursday._20 = !thursday._20\" [ngClass]=\"{'schedule__hour--active' : thursday?._20}\" class=\"col-4 schedule__hour\"><p>8PM</p></div>\n    <div (click)=\"thursday._21 = !thursday._21\" [ngClass]=\"{'schedule__hour--active' : thursday?._21}\" class=\"col-4 schedule__hour\"><p>9PM</p></div>\n  </div>\n</div>\n\n  <div class=\"schedule__day\">\n  <h3>Friday</h3>\n  <div class=\"row\">\n    <div (click)=\"friday._9 = !friday._9\" [ngClass]=\"{'schedule__hour--active' : friday?._9}\" class=\"col-4 schedule__hour\"><p>9AM</p></div>\n    <div (click)=\"friday._10 = !friday._10\" [ngClass]=\"{'schedule__hour--active' : friday?._10}\" class=\"col-4 schedule__hour\"><p>10AM</p></div>\n    <div (click)=\"friday._11 = !friday._11\" [ngClass]=\"{'schedule__hour--active' : friday?._11}\" class=\"col-4 schedule__hour\"><p>11AM</p></div>\n    <div (click)=\"friday._12 = !friday._12\" [ngClass]=\"{'schedule__hour--active' : friday?._12}\" class=\"col-4 schedule__hour\"><p>12PM</p></div>\n    <div (click)=\"friday._13 = !friday._13\" [ngClass]=\"{'schedule__hour--active' : friday?._13}\" class=\"col-4 schedule__hour\"><p>1PM</p></div>\n    <div (click)=\"friday._14 = !friday._14\" [ngClass]=\"{'schedule__hour--active' : friday?._14}\" class=\"col-4 schedule__hour\"><p>2PM</p></div>\n    <div (click)=\"friday._15 = !friday._15\" [ngClass]=\"{'schedule__hour--active' : friday?._15}\" class=\"col-4 schedule__hour\"><p>3PM</p></div>\n    <div (click)=\"friday._16 = !friday._16\" [ngClass]=\"{'schedule__hour--active' : friday?._16}\" class=\"col-4 schedule__hour\"><p>4PM</p></div>\n    <div (click)=\"friday._17 = !friday._17\" [ngClass]=\"{'schedule__hour--active' : friday?._17}\" class=\"col-4 schedule__hour\"><p>5PM</p></div>\n    <div (click)=\"friday._18 = !friday._18\" [ngClass]=\"{'schedule__hour--active' : friday?._18}\" class=\"col-4 schedule__hour\"><p>6PM</p></div>\n    <div (click)=\"friday._19 = !friday._19\" [ngClass]=\"{'schedule__hour--active' : friday?._19}\" class=\"col-4 schedule__hour\"><p>7PM</p></div>\n    <div (click)=\"friday._20 = !friday._20\" [ngClass]=\"{'schedule__hour--active' : friday?._20}\" class=\"col-4 schedule__hour\"><p>8PM</p></div>\n    <div (click)=\"friday._21 = !friday._21\" [ngClass]=\"{'schedule__hour--active' : friday?._21}\" class=\"col-4 schedule__hour\"><p>9PM</p></div>\n  </div>\n</div>\n\n  <div class=\"schedule__day\">\n  <h3>Saturday</h3>\n  <div class=\"row\">\n    <div (click)=\"saturday._9 = !saturday._9\" [ngClass]=\"{'schedule__hour--active' : saturday?._9}\" class=\"col-4 schedule__hour\"><p>9AM</p></div>\n    <div (click)=\"saturday._10 = !saturday._10\" [ngClass]=\"{'schedule__hour--active' : saturday?._10}\" class=\"col-4 schedule__hour\"><p>10AM</p></div>\n    <div (click)=\"saturday._11 = !saturday._11\" [ngClass]=\"{'schedule__hour--active' : saturday?._11}\" class=\"col-4 schedule__hour\"><p>11AM</p></div>\n    <div (click)=\"saturday._12 = !saturday._12\" [ngClass]=\"{'schedule__hour--active' : saturday?._12}\" class=\"col-4 schedule__hour\"><p>12PM</p></div>\n    <div (click)=\"saturday._13 = !saturday._13\" [ngClass]=\"{'schedule__hour--active' : saturday?._13}\" class=\"col-4 schedule__hour\"><p>1PM</p></div>\n    <div (click)=\"saturday._14 = !saturday._14\" [ngClass]=\"{'schedule__hour--active' : saturday?._14}\" class=\"col-4 schedule__hour\"><p>2PM</p></div>\n    <div (click)=\"saturday._15 = !saturday._15\" [ngClass]=\"{'schedule__hour--active' : saturday?._15}\" class=\"col-4 schedule__hour\"><p>3PM</p></div>\n    <div (click)=\"saturday._16 = !saturday._16\" [ngClass]=\"{'schedule__hour--active' : saturday?._16}\" class=\"col-4 schedule__hour\"><p>4PM</p></div>\n    <div (click)=\"saturday._17 = !saturday._17\" [ngClass]=\"{'schedule__hour--active' : saturday?._17}\" class=\"col-4 schedule__hour\"><p>5PM</p></div>\n    <div (click)=\"saturday._18 = !saturday._18\" [ngClass]=\"{'schedule__hour--active' : saturday?._18}\" class=\"col-4 schedule__hour\"><p>6PM</p></div>\n    <div (click)=\"saturday._19 = !saturday._19\" [ngClass]=\"{'schedule__hour--active' : saturday?._19}\" class=\"col-4 schedule__hour\"><p>7PM</p></div>\n    <div (click)=\"saturday._20 = !saturday._20\" [ngClass]=\"{'schedule__hour--active' : saturday?._20}\" class=\"col-4 schedule__hour\"><p>8PM</p></div>\n    <div (click)=\"saturday._21 = !saturday._21\" [ngClass]=\"{'schedule__hour--active' : saturday?._21}\" class=\"col-4 schedule__hour\"><p>9PM</p></div>\n  </div>\n</div>\n\n  <div class=\"schedule__day\">\n  <h3>Sunday</h3>\n  <div class=\"row\">\n    <div (click)=\"sunday._9 = !sunday._9\" [ngClass]=\"{'schedule__hour--active' : sunday?._9}\" class=\"col-4 schedule__hour\"><p>9AM</p></div>\n    <div (click)=\"sunday._10 = !sunday._10\" [ngClass]=\"{'schedule__hour--active' : sunday?._10}\" class=\"col-4 schedule__hour\"><p>10AM</p></div>\n    <div (click)=\"sunday._11 = !sunday._11\" [ngClass]=\"{'schedule__hour--active' : sunday?._11}\" class=\"col-4 schedule__hour\"><p>11AM</p></div>\n    <div (click)=\"sunday._12 = !sunday._12\" [ngClass]=\"{'schedule__hour--active' : sunday?._12}\" class=\"col-4 schedule__hour\"><p>12PM</p></div>\n    <div (click)=\"sunday._13 = !sunday._13\" [ngClass]=\"{'schedule__hour--active' : sunday?._13}\" class=\"col-4 schedule__hour\"><p>1PM</p></div>\n    <div (click)=\"sunday._14 = !sunday._14\" [ngClass]=\"{'schedule__hour--active' : sunday?._14}\" class=\"col-4 schedule__hour\"><p>2PM</p></div>\n    <div (click)=\"sunday._15 = !sunday._15\" [ngClass]=\"{'schedule__hour--active' : sunday?._15}\" class=\"col-4 schedule__hour\"><p>3PM</p></div>\n    <div (click)=\"sunday._16 = !sunday._16\" [ngClass]=\"{'schedule__hour--active' : sunday?._16}\" class=\"col-4 schedule__hour\"><p>4PM</p></div>\n    <div (click)=\"sunday._17 = !sunday._17\" [ngClass]=\"{'schedule__hour--active' : sunday?._17}\" class=\"col-4 schedule__hour\"><p>5PM</p></div>\n    <div (click)=\"sunday._18 = !sunday._18\" [ngClass]=\"{'schedule__hour--active' : sunday?._18}\" class=\"col-4 schedule__hour\"><p>6PM</p></div>\n    <div (click)=\"sunday._19 = !sunday._19\" [ngClass]=\"{'schedule__hour--active' : sunday?._19}\" class=\"col-4 schedule__hour\"><p>7PM</p></div>\n    <div (click)=\"sunday._20 = !sunday._20\" [ngClass]=\"{'schedule__hour--active' : sunday?._20}\" class=\"col-4 schedule__hour\"><p>8PM</p></div>\n    <div (click)=\"sunday._21 = !sunday._21\" [ngClass]=\"{'schedule__hour--active' : sunday?._21}\" class=\"col-4 schedule__hour\"><p>9PM</p></div>\n  </div>\n</div>\n\n  <button (click)=\"saveSchedule()\" type='submit' class='btn btn-primary btn-block'>Save Schedule</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/schedule/schedule.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_schedule_service_client__ = __webpack_require__("../../../../../src/app/services/schedule.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_day_service_client__ = __webpack_require__("../../../../../src/app/services/day.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ScheduleComponent = (function () {
    function ScheduleComponent(dayService, userService, scheduleService, router, activatedRoute) {
        this.dayService = dayService;
        this.userService = userService;
        this.scheduleService = scheduleService;
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    ScheduleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['userId'];
            _this.userService.findUserById(_this.userId).subscribe(function (user) {
                _this.user = user;
                _this.scheduleId = user.schedule;
                _this.scheduleService.getScheduleById(user.schedule).subscribe(function (schedule) {
                    _this.schedule = schedule;
                    _this.mondayId = _this.schedule.mon;
                    _this.tuesdayId = _this.schedule.tue;
                    _this.wednesdayId = _this.schedule.wed;
                    _this.thursdayId = _this.schedule.thu;
                    _this.fridayId = _this.schedule.fri;
                    _this.saturdayId = _this.schedule.sat;
                    _this.sundayId = _this.schedule.sun;
                    _this.dayService.getDayById(_this.mondayId).subscribe(function (mon) {
                        _this.monday = mon;
                    });
                    _this.dayService.getDayById(_this.tuesdayId).subscribe(function (tue) {
                        _this.tuesday = tue;
                    });
                    _this.dayService.getDayById(_this.wednesdayId).subscribe(function (wed) {
                        _this.wednesday = wed;
                    });
                    _this.dayService.getDayById(_this.thursdayId).subscribe(function (thu) {
                        _this.thursday = thu;
                    });
                    _this.dayService.getDayById(_this.fridayId).subscribe(function (fri) {
                        _this.friday = fri;
                    });
                    _this.dayService.getDayById(_this.saturdayId).subscribe(function (sat) {
                        _this.saturday = sat;
                    });
                    _this.dayService.getDayById(_this.sundayId).subscribe(function (sun) {
                        _this.sunday = sun;
                    });
                });
            });
        });
    };
    ScheduleComponent.prototype.saveSchedule = function () {
        var _this = this;
        this.dayService.updateDay(this.mondayId, this.monday).subscribe(function (mon) {
            _this.dayService.updateDay(_this.tuesdayId, _this.tuesday).subscribe(function (tue) {
                _this.dayService.updateDay(_this.wednesdayId, _this.wednesday).subscribe(function (wed) {
                    _this.dayService.updateDay(_this.thursdayId, _this.thursday).subscribe(function (thu) {
                        _this.dayService.updateDay(_this.fridayId, _this.friday).subscribe(function (fri) {
                            _this.dayService.updateDay(_this.saturdayId, _this.saturday).subscribe(function (sat) {
                                _this.dayService.updateDay(_this.sundayId, _this.sunday).subscribe(function (sun) {
                                    _this.router.navigate(['user/' + _this.user._id]);
                                });
                            });
                        });
                    });
                });
            });
        });
    };
    return ScheduleComponent;
}());
ScheduleComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-schedule',
        template: __webpack_require__("../../../../../src/app/components/schedule/schedule.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/schedule/schedule.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_day_service_client__["a" /* DayService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_day_service_client__["a" /* DayService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_schedule_service_client__["a" /* ScheduleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_schedule_service_client__["a" /* ScheduleService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _e || Object])
], ScheduleComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=schedule.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/settings/settings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-primary mb-3\">\n  <div class=\"container\">\n    <a class=\"pull-left\" [routerLink]=\"['/user', this.userId]\"><i class=\"fa fa-chevron-left\" aria-hidden=\"true\"></i></a>\n    <a class=\"navbar-brand mx-auto\" href=\"#\">Account Settings</a>\n  </div>\n</nav>\n<div class='container'>\n  <form (ngSubmit)='updateUser()' #f='ngForm'>\n    <fieldset class=\"form-group\">\n    <p>Photo</p>\n    <div class=\"user--image\">\n      <img src=\"{{user?.photo}}\"/>\n    </div>\n    <input name='photo' [(ngModel)]='photo' type='text' class='form-control' placeholder='Photo URL' value=\"{{user?.photo}}\">\n    </fieldset>\n    <fieldset class=\"form-group\">\n    <p>Email</p>\n    <input name='email' [(ngModel)]='email' type='text' class='form-control' placeholder='Email' value=\"{{user?.email}}\">\n    </fieldset>\n    <fieldset class=\"form-group\">\n    <p>First Name</p>\n    <input name='firstName' [(ngModel)]='firstName' type='text' class='form-control' placeholder='First Name' value=\"{{user?.firstName}}\">\n    </fieldset>\n    <fieldset class=\"form-group\">\n    <p>Age</p>\n    <input name='age' [(ngModel)]='age' type='number' class='form-control' placeholder='Age' value=\"{{user?.age}}\">\n    </fieldset>\n    <fieldset class=\"form-group\">\n    <p>Bio</p>\n    <textarea name='bio' [(ngModel)]='bio' type='text' class='form-control' placeholder='Bio' value=\"{{user?.bio}}\"></textarea>\n    </fieldset>\n    <fieldset class=\"form-group\">\n      <p>Gender</p>\n      <select name='gender' class=\"custom-select w-100\" [(ngModel)]='gender'>\n        <option disabled [ngValue]=\"null\">Select a gender</option>\n        <option *ngFor=\"let gender of genders\" [ngValue]=\"gender\">{{gender}}</option>\n      </select>\n    </fieldset>\n    <fieldset class=\"form-group\">\n      <p>Looking For</p>\n      <select name='lookingFor' class=\"custom-select w-100\" [(ngModel)]='lookingFor'>\n        <option disabled [ngValue]=\"null\">Select a gender</option>\n        <option *ngFor=\"let lookingFor of lookingFors\" [ngValue]=\"lookingFor\">{{lookingFor}}</option>\n      </select>\n    </fieldset>\n    <button type=\"button\" (click)='editSchedule()' class='btn btn-seconday btn-block'>Edit Schedule</button>\n    <button type='submit' class='btn btn-primary btn-block'>Update</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SettingsComponent = (function () {
    function SettingsComponent(userService, router, activatedRoute) {
        this.userService = userService;
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    SettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['userId'];
            _this.userService.findUserById(_this.userId).subscribe(function (user) {
                _this.user = user;
                _this.updateGenders();
                _this.firstName = user.firstName;
            });
        });
    };
    SettingsComponent.prototype.updateGenders = function () {
        this.gender = this.user.gender;
        this.lookingFor = this.user.lookingFor;
        this.genders = ['Female', 'Male'];
        this.lookingFors = ['Female', 'Male'];
    };
    SettingsComponent.prototype.saveChanges = function () {
        this.user.email = this.email;
        this.user.firstName = this.firstName;
        this.user.age = this.age;
        this.user.bio = this.bio;
        this.user.gender = this.gender;
        this.user.lookingFor = this.lookingFor;
    };
    SettingsComponent.prototype.updateUser = function () {
        var _this = this;
        this.saveChanges();
        this.userService.updateUser(this.userId, this.user).subscribe(function () {
            _this.router.navigate(['user/' + _this.user._id]);
        });
    };
    SettingsComponent.prototype.editSchedule = function () {
        var _this = this;
        this.saveChanges();
        this.userService.updateUser(this.userId, this.user).subscribe(function () {
            _this.router.navigate(['user/' + _this.user._id + '/schedule']);
        });
    };
    return SettingsComponent;
}());
SettingsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-settings',
        template: __webpack_require__("../../../../../src/app/components/settings/settings.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/settings/settings.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], SettingsComponent);

var _a, _b, _c;
//# sourceMappingURL=settings.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/swipe/swipe.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/swipe/swipe.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-primary mb-3\">\n  <div class=\"container\">\n    <a class=\"pull-left\" [routerLink]=\"['/user', this.userId, 'settings']\"><i class=\"fa fa-user-circle\" aria-hidden=\"true\"></i></a>\n    <a class=\"navbar-brand mx-auto\" href=\"#\">Database Project</a>\n    <a class=\"pull-right\" [routerLink]=\"['/user', this.userId, 'matches']\"><i class=\"fa fa-comments-o\" aria-hidden=\"true\"></i></a>\n  </div>\n</nav>\n<div class=\"container\">\n  <div *ngIf=\"potentialMatch?.user != null;else empty_content\" class=\"user\">\n    <div class=\"user--image\">\n      <img src=\"{{potentialMatch?.user?.photo}}\"/>\n    </div>\n    <div class=\"user--info\">\n      <h3>{{potentialMatch?.user?.firstName}}, {{potentialMatch?.user?.age}}</h3>\n      <p>{{potentialMatch?.user?.bio}}</p>\n        <div class=\"swipe--buttons row\">\n          <div class=\"col-6\"><button (click)=\"skip()\" class='btn btn-danger btn-user'>Skip</button></div>\n          <div class=\"col-6\"><button (click)=\"like()\" class='btn btn-success btn-user'>Like</button></div>\n        </div>\n    </div>\n  </div>\n  <ng-template #empty_content><div class=\"container\"><p class=\"text-center\">No more users to show.<br><span class=\"emoji--crying text-center\">😭</span></p></div></ng-template>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/swipe/swipe.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwipeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SwipeComponent = (function () {
    function SwipeComponent(userService, router, activatedRoute) {
        this.userService = userService;
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    SwipeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pmIndex = 0;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['userId'];
            _this.userService.findUserById(_this.userId).subscribe(function (user) {
                _this.user = user;
                _this.userService.getPotentialMatches(_this.userId).subscribe(function (users) {
                    _this.currentListOfUsersWithTimes = users;
                    _this.potentialMatch = _this.currentListOfUsersWithTimes[_this.pmIndex];
                });
            });
        });
    };
    SwipeComponent.prototype.like = function () {
        var _this = this;
        console.log(this.potentialMatch.user);
        this.userService.like(this.userId, this.potentialMatch.user).subscribe(function () {
            _this.pmIndex += 1;
            _this.potentialMatch = _this.currentListOfUsersWithTimes[_this.pmIndex];
        });
    };
    SwipeComponent.prototype.skip = function () {
        this.pmIndex += 1;
        this.potentialMatch = this.currentListOfUsersWithTimes[this.pmIndex];
    };
    return SwipeComponent;
}());
SwipeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-swipe',
        template: __webpack_require__("../../../../../src/app/components/swipe/swipe.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/swipe/swipe.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], SwipeComponent);

var _a, _b, _c;
//# sourceMappingURL=swipe.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/day.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DayService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// injecting the service into module
var DayService = (function () {
    function DayService(http) {
        this.http = http;
    }
    DayService.prototype.getDayById = function (dayId) {
        var url = 'http://localhost:3100/api/day/' + dayId;
        return this.http.get(url).map(function (response) {
            return response.json();
        });
    };
    DayService.prototype.updateDay = function (dayId, day) {
        var url = 'http://localhost:3100/api/day/' + dayId;
        return this.http.put(url, day).map(function (response) {
            return response.json();
        });
    };
    return DayService;
}());
DayService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], DayService);

var _a;
//# sourceMappingURL=day.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/match.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// injecting the service into module
var MatchService = (function () {
    function MatchService(http) {
        this.http = http;
    }
    // this has to be a post method to have a body payload
    MatchService.prototype.getMatchListByIds = function (matchIds) {
        var url = 'http://localhost:3100/api/match/getList';
        return this.http.post(url, matchIds).map(function (response) {
            return response.json();
        });
    };
    MatchService.prototype.getMatchById = function (matchId) {
        var url = 'http://localhost:3100/api/match/' + matchId;
        return this.http.get(url).map(function (response) {
            return response.json();
        });
    };
    MatchService.prototype.getUserListFromMatches = function (userId, matchIds) {
        var url = 'http://localhost:3100/api/match/users/' + userId;
        return this.http.post(url, matchIds).map(function (response) {
            return response.json();
        });
    };
    return MatchService;
}());
MatchService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], MatchService);

var _a;
//# sourceMappingURL=match.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/message.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// injecting the service into module
var MessageService = (function () {
    function MessageService(http) {
        this.http = http;
    }
    MessageService.prototype.createMessage = function (message) {
        console.log('client service print: ');
        var url = 'http://localhost:3100/api/message';
        return this.http.post(url, message).map(function (response) {
            return response.json();
        });
    };
    MessageService.prototype.findMessagesById = function (matchId) {
        var url = 'http://localhost:3100/api/message/' + matchId;
        console.log(matchId);
        return this.http.get(url).map(function (response) {
            return response.json();
        });
    };
    return MessageService;
}());
MessageService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], MessageService);

var _a;
//# sourceMappingURL=message.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/schedule.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// injecting the service into module
var ScheduleService = (function () {
    function ScheduleService(http) {
        this.http = http;
    }
    ScheduleService.prototype.createSchedule = function (schedule) {
        var url = 'http://localhost:3100/api/schedule';
        return this.http.post(url, schedule).map(function (response) {
            return response.json();
        });
    };
    ScheduleService.prototype.getScheduleById = function (scheduleId) {
        var url = 'http://localhost:3100/api/schedule/' + scheduleId;
        return this.http.get(url).map(function (response) {
            return response.json();
        });
    };
    return ScheduleService;
}());
ScheduleService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], ScheduleService);

var _a;
//# sourceMappingURL=schedule.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// injecting the service into module
var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.like = function (userId, _match) {
        var url = 'http://localhost:3100/api/user/like/' + userId;
        return this.http.put(url, _match).map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.getPotentialMatches = function (userId) {
        var url = 'http://localhost:3100/api/user/suitors/' + userId;
        return this.http.get(url).map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.findUserById = function (userId) {
        var url = 'http://localhost:3100/api/user/' + userId;
        return this.http.get(url).map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.updateUser = function (userId, user) {
        var url = 'http://localhost:3100/api/user/' + userId;
        return this.http.put(url, user).map(function (response) {
            return response.json();
        });
    };
    // returns the user in local users array whose email matches the parameter email
    UserService.prototype.findUserByEmail = function (email) {
        var url = 'http://localhost:3100/api/user?email=' + email;
        return this.http.get(url).map(function (response) {
            return response.json();
        });
    };
    //returns the user whose email and password match the email and password parameters
    UserService.prototype.findUserByCredentials = function (email, password) {
        var url = 'http://localhost:3100/api/user?email=' + email + '&password=' + password;
        return this.http.get(url).map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.createUser = function (user) {
        console.log('client service print: ');
        var url = 'http://localhost:3100/api/user';
        return this.http.post(url, user).map(function (response) {
            return response.json();
        });
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.client.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    baseUrl: 'http://localhost:3100'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map