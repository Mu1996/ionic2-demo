var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { SystemService } from '../../../core/system/system.service';
var HomeComponent = (function () {
    function HomeComponent(systemService) {
        this.systemService = systemService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.systemService.getUser().then(function (user) { return _this.str = user; });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Component({
        selector: 'app-home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.scss']
    }),
    __metadata("design:paramtypes", [SystemService])
], HomeComponent);
export { HomeComponent };
//# sourceMappingURL=/Users/muyonghui/ionic2-demo/angular2/src/app/routes/home/home/home.component.js.map