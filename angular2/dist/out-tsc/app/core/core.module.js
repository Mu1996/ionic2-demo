var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { SettingsService } from './settings/settings.service';
import { ThemesService } from './themes/themes.service';
import { TranslatorService } from './translator/translator.service';
import { MenuService } from './menu/menu.service';
import { SystemService } from './system/system.service';
import { throwIfAlreadyLoaded } from './module-import-guard';
var CoreModule = (function () {
    function CoreModule(parentModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
    return CoreModule;
}());
CoreModule = __decorate([
    NgModule({
        imports: [],
        providers: [
            SettingsService,
            ThemesService,
            TranslatorService,
            MenuService,
            SystemService
        ],
        declarations: [],
        exports: []
    }),
    __param(0, Optional()), __param(0, SkipSelf()),
    __metadata("design:paramtypes", [CoreModule])
], CoreModule);
export { CoreModule };
//# sourceMappingURL=/Users/muyonghui/ionic2-demo/angular2/src/app/core/core.module.js.map