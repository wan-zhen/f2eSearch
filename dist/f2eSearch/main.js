(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sign_search_sign_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sign-search/sign-search.component */ "./src/app/sign-search/sign-search.component.ts");
/* harmony import */ var _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo-list/todo-list.component */ "./src/app/todo-list/todo-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: 'signSearch', component: _sign_search_sign_search_component__WEBPACK_IMPORTED_MODULE_2__["SignSearchComponent"] },
    { path: 'todoList', component: _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_3__["TodoListComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _sign_search_sign_search_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sign-search/sign-search.component */ "./src/app/sign-search/sign-search.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./todo-list/todo-list.component */ "./src/app/todo-list/todo-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_4__["NavComponent"],
                _sign_search_sign_search_component__WEBPACK_IMPORTED_MODULE_8__["SignSearchComponent"],
                _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_11__["TodoListComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\n  height: 100%;\n}\n\n.sidenav {\n  width: 200px;\n  box-shadow: 3px 0 6px rgba(0, 0, 0, .24);\n}\n"

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav\n    #drawer\n    class=\"sidenav\"\n    fixedInViewport=\"true\"\n    [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n    [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n    [opened]=\"!(isHandset$ | async)\">\n    <mat-toolbar color=\"primary\">Menu</mat-toolbar>\n    <mat-nav-list>\n      <a mat-list-item routerLink=\"/signSearch\">報名查詢</a>\n      <a mat-list-item routerLink=\"/todoList\">待辦事項</a>\n      <a mat-list-item href=\"#\">Link 3</a>\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <mat-toolbar color=\"primary\">\n      <button\n        type=\"button\"\n        aria-label=\"Toggle sidenav\"\n        mat-icon-button\n        (click)=\"drawer.toggle()\"\n        *ngIf=\"isHandset$ | async\">\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n      </button>\n      <span>The F2E - 前端修練精神時光屋</span>\n    </mat-toolbar>\n    <div class=\"contain\">\n      <router-outlet></router-outlet>\n    </div>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavComponent = /** @class */ (function () {
    function NavComponent(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) { return result.matches; }));
    }
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/sign-search/sign-search.component.css":
/*!*******************************************************!*\
  !*** ./src/app/sign-search/sign-search.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sign-search/sign-search.component.html":
/*!********************************************************!*\
  !*** ./src/app/sign-search/sign-search.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #myForm=\"ngForm\" (ngSubmit)=\"submit()\">\n  <mat-form-field appearance=\"fill\">\n    <mat-label>\n      <mat-icon>email</mat-icon>\n      信箱\n    </mat-label>\n    <input type=\"email\"\n      name=\"信箱\"\n      matInput\n      required\n      [(ngModel)]=\"mailValue\"\n      #name=\"ngModel\"\n      email/>\n    <mat-hint>輸入信箱查詢報名狀態</mat-hint>\n    <mat-error>輸入信箱阿阿阿</mat-error>\n  </mat-form-field>\n  <br />  <br />\n  <button\n    mat-raised-button\n    color=\"primary\"\n    type=\"submit\"\n    [disabled]=\"!myForm.form.valid || progress\"\n    [innerHTML]=\"progress?'載入中':'送出'\"></button>\n  <p>{{result}}</p>\n</form>\n"

/***/ }),

/***/ "./src/app/sign-search/sign-search.component.ts":
/*!******************************************************!*\
  !*** ./src/app/sign-search/sign-search.component.ts ***!
  \******************************************************/
/*! exports provided: SignSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignSearchComponent", function() { return SignSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignSearchComponent = /** @class */ (function () {
    function SignSearchComponent(http) {
        this.http = http;
        this.result = '';
        this.mailValue = '';
        this.progress = false;
    }
    SignSearchComponent.prototype.ngOnInit = function () {
    };
    SignSearchComponent.prototype.submit = function () {
        var _this = this;
        this.progress = true;
        this.http.post('https://www.thef2e.com/api/isSignUp', { email: this.mailValue })
            .subscribe(function (result) {
            _this.progress = false;
            if (result.success === true) {
                _this.result = "" + result.nickName + result.message;
            }
            else {
                _this.result = "" + result.message;
            }
        });
    };
    SignSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-search',
            template: __webpack_require__(/*! ./sign-search.component.html */ "./src/app/sign-search/sign-search.component.html"),
            styles: [__webpack_require__(/*! ./sign-search.component.css */ "./src/app/sign-search/sign-search.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SignSearchComponent);
    return SignSearchComponent;
}());



/***/ }),

/***/ "./src/app/todo-list/todo-list.component.css":
/*!***************************************************!*\
  !*** ./src/app/todo-list/todo-list.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".add {\r\n  background: #3c3c3c;\r\n}\r\n\r\n.add .colms {\r\n  padding: 25px;\r\n}\r\n\r\n.list {\r\n  margin: 10px 0;\r\n  background: #3c3c3c;\r\n}\r\n\r\n.list .list-title {\r\n  border-bottom: 1px solid #303030;\r\n}\r\n\r\n.icon-group {\r\n  margin: 10px 0 10px 37px;\r\n}\r\n\r\n.icon-group mat-icon {\r\n  margin: 0 5px;\r\n  font-size: 18px;\r\n}\r\n\r\n.list-edit .colms {\r\n  padding: 25px;\r\n}\r\n\r\n.del-status {\r\n  color: #737373;\r\n  text-decoration: line-through;\r\n}\r\n"

/***/ }),

/***/ "./src/app/todo-list/todo-list.component.html":
/*!****************************************************!*\
  !*** ./src/app/todo-list/todo-list.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group>\n  <mat-tab *ngFor=\"let tab of tabs;let tabIndex = index;\">\n    <ng-template mat-tab-label>\n      {{tab.title}}\n    </ng-template>\n\n    <mat-nav-list *ngIf=\"tabIndex===0\">\n      <mat-list-item [ngStyle]=\"{background: adding?'#525252':''}\" (click)=\"adding=true\">\n        <mat-icon>add</mat-icon>\n        <span *ngIf=\"!adding\">Add Task</span>\n        <mat-form-field *ngIf=\"adding\">\n            <input name=\"title\" type=\"text\" required matInput [(ngModel)]=\"addTitle\" />\n          </mat-form-field>\n      </mat-list-item>\n    </mat-nav-list>\n    <form #addForm=\"ngForm\" (ngSubmit)=\"add();\" *ngIf=\"adding\" class=\"add\">\n      <div class=\"colms\">\n        <!-- 到期日 -->\n        <p>\n          <mat-icon>date_range</mat-icon> Deadline\n        </p>\n        <mat-form-field>\n          <input name=\"date\" type=\"date\" matInput [(ngModel)]=\"addDate\" />\n        </mat-form-field>\n        <!-- 附檔 -->\n        <p>\n          <mat-icon>insert_drive_file</mat-icon> File\n        </p>\n        <button mat-raised-button mat-icon-button color=\"accent\">\n          <mat-icon>add</mat-icon>\n        </button>\n        <!-- 說明 -->\n        <p>\n          <mat-icon>chat</mat-icon> Comments\n        </p>\n        <mat-form-field>\n          <textarea name=\"memo\" matInput placeholder=\"Type your memo here...\" [(ngModel)]=\"addMemo\"></textarea>\n        </mat-form-field>\n      </div>\n      <div>\n        <button type=\"button\" (click)=\"adding=false\" style=\"width: 50%\" mat-raised-button color=\"warning\">\n          <mat-icon>close</mat-icon> Cancel\n        </button>\n        <button style=\"width: 50%\" mat-raised-button color=\"primary\">\n          <mat-icon>add</mat-icon> Add Task\n        </button>\n      </div>\n    </form>\n\n    <div class=\"list\" *ngFor=\"let item of getTasks(tabIndex);let taskIndex=index;\">\n      <div class=\"list-title\" [ngStyle]=\"{background: item.important ? '#c2185b':'#3c3c3c'}\">\n        <button color=\"{{item.edit?'primary':''}}\" (click)=\"item.edit=true;edit(taskIndex)\" mat-icon-button style=\"float: right;\">\n          <mat-icon>create</mat-icon>\n        </button>\n        <button (click)=\"item.important=!item.important\" mat-icon-button style=\"float: right;\">\n          <mat-icon [innerHTML]=\"item.important ? 'star' : 'star_border'\"></mat-icon>\n        </button>\n        <h2 style=\"padding-left: 16px\" [class]=\"item.selected?'del-status':''\">\n          <mat-checkbox [(ngModel)]=\"item.selected\">{{item.title}}</mat-checkbox>\n        </h2>\n        <div class=\"icon-group\">\n          <span *ngIf=\"item.date\">\n            <mat-icon color=\"accent\">date_range</mat-icon>\n            {{item.date}}\n          </span>\n          <mat-icon *ngIf=\"item.file\" color=\"accent\">insert_drive_file</mat-icon>\n          <mat-icon *ngIf=\"item.memo\" color=\"accent\">chat</mat-icon>\n        </div>\n      </div>\n      <!-- start編輯區 -->\n      <form #editForm=\"ngForm\" (ngSubmit)=\"save(taskIndex);item.edit=false;\" *ngIf=\"item.edit\" class=\"list-edit\">\n        <div class=\"colms\">\n          <!-- 到期日 -->\n          <p>\n            <mat-icon>date_range</mat-icon> Deadline\n          </p>\n          <mat-form-field>\n            <input name=\"date\" type=\"date\" matInput [(ngModel)]=\"newDate\" />\n          </mat-form-field>\n          <!-- 附檔 -->\n          <p>\n            <mat-icon>insert_drive_file</mat-icon> File\n          </p>\n          <button mat-raised-button mat-icon-button color=\"accent\">\n            <mat-icon>add</mat-icon>\n          </button>\n          <!-- 說明 -->\n          <p>\n            <mat-icon>chat</mat-icon> Comments\n          </p>\n          <mat-form-field>\n            <textarea name=\"memo\" matInput placeholder=\"Type your memo here...\" [(ngModel)]=\"newMemo\"></textarea>\n          </mat-form-field>\n        </div>\n        <div>\n          <button type=\"button\" (click)=\"item.edit=false\" style=\"width: 50%\" mat-raised-button color=\"warning\">\n            <mat-icon>close</mat-icon> Cancel\n          </button>\n          <button style=\"width: 50%\" mat-raised-button color=\"primary\">\n            <mat-icon>add</mat-icon> Save\n          </button>\n        </div>\n      </form>\n    </div>\n  </mat-tab>\n</mat-tab-group>\n"

/***/ }),

/***/ "./src/app/todo-list/todo-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/todo-list/todo-list.component.ts ***!
  \**************************************************/
/*! exports provided: TodoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListComponent", function() { return TodoListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TodoListComponent = /** @class */ (function () {
    function TodoListComponent() {
    }
    TodoListComponent.prototype.ngOnInit = function () {
        this.tabs = [
            { type: 0, title: 'My Tasks' },
            { type: 1, title: 'In Progress' },
            { type: 2, title: 'Completed' }
        ];
        this.tasks = [
            { selected: false, title: 'test', important: false, edit: false, date: '2018/6/21' },
            { selected: true, title: 'demo', important: false, edit: false, memo: '去買菜' },
            { selected: false, title: 'test', important: true, edit: false }
        ];
    };
    TodoListComponent.prototype.getTasks = function (index) {
        return this.tasks
            .filter(function (i) {
            switch (index) {
                case 1:
                    return i.selected === false;
                case 2:
                    return i.selected === true;
                default:
                    return i;
            }
        });
    };
    TodoListComponent.prototype.edit = function (index) {
        this.newDate = this.tasks[index].date;
        this.newMemo = this.tasks[index].memo;
    };
    TodoListComponent.prototype.save = function (index) {
        this.tasks[index].date = this.newDate;
        this.tasks[index].memo = this.newMemo;
    };
    TodoListComponent.prototype.add = function () {
        if (!this.addTitle) {
            alert('請填寫 task 名稱');
            return;
        }
        this.adding = false;
        this.tasks.push({
            selected: false,
            title: this.addTitle,
            important: false,
            edit: false,
            date: this.addDate,
            memo: this.addMemo
        });
        this.addTitle = '';
        this.addDate = '';
        this.addMemo = '';
    };
    TodoListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-todo-list',
            template: __webpack_require__(/*! ./todo-list.component.html */ "./src/app/todo-list/todo-list.component.html"),
            styles: [__webpack_require__(/*! ./todo-list.component.css */ "./src/app/todo-list/todo-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TodoListComponent);
    return TodoListComponent;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Projectes\f2eSearch\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map