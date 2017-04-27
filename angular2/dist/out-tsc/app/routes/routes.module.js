var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuService } from '../core/menu/menu.service';
import { SharedModule } from '../shared/shared.module';
import { menu } from './menu';
import { routes } from './routes';
import { PagesModule } from "./pages/pages.module";
var RoutesModule = (function () {
    function RoutesModule(menuService) {
        this.menuService = menuService;
        menuService.addMenu(menu);
    }
    return RoutesModule;
}());
RoutesModule = __decorate([
    NgModule({
        imports: [
            SharedModule,
            RouterModule.forRoot(routes),
            PagesModule
        ],
        declarations: [],
        exports: [
            RouterModule
        ]
    }),
    __metadata("design:paramtypes", [MenuService])
], RoutesModule);
export { RoutesModule };
//# sourceMappingURL=/Users/muyonghui/ionic2-demo/angular2/src/app/routes/routes.module.js.map