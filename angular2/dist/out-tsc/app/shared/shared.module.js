var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from 'ng2-translate/ng2-translate';
import { ToasterModule } from 'angular2-toaster/angular2-toaster';
import { AccordionModule } from 'ng2-bootstrap/accordion';
import { AlertModule } from 'ng2-bootstrap/alert';
import { ButtonsModule } from 'ng2-bootstrap/buttons';
import { CarouselModule } from 'ng2-bootstrap/carousel';
import { CollapseModule } from 'ng2-bootstrap/collapse';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { ModalModule } from 'ng2-bootstrap/modal';
import { PaginationModule } from 'ng2-bootstrap/pagination';
import { ProgressbarModule } from 'ng2-bootstrap/progressbar';
import { RatingModule } from 'ng2-bootstrap/rating';
import { TabsModule } from 'ng2-bootstrap/tabs';
import { TimepickerModule } from 'ng2-bootstrap/timepicker';
import { TooltipModule } from 'ng2-bootstrap/tooltip';
import { TypeaheadModule } from 'ng2-bootstrap/typeahead';
import { DatepickerModule } from 'ng2-bootstrap/datepicker';
import { FlotDirective } from './directives/flot/flot.directive';
import { SparklineDirective } from './directives/sparkline/sparkline.directive';
import { EasypiechartDirective } from './directives/easypiechart/easypiechart.directive';
import { ColorsService } from './colors/colors.service';
import { CheckallDirective } from './directives/checkall/checkall.directive';
import { VectormapDirective } from './directives/vectormap/vectormap.directive';
import { NowDirective } from './directives/now/now.directive';
import { ScrollableDirective } from './directives/scrollable/scrollable.directive';
import { JqcloudDirective } from './directives/jqcloud/jqcloud.directive';
// https://angular.io/styleguide#!#04-10
var SharedModule = SharedModule_1 = (function () {
    // https://github.com/ocombe/ng2-translate/issues/209
    function SharedModule() {
    }
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule_1
        };
    };
    return SharedModule;
}());
SharedModule = SharedModule_1 = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            TranslateModule,
            AccordionModule.forRoot(),
            AlertModule.forRoot(),
            ButtonsModule.forRoot(),
            CarouselModule.forRoot(),
            CollapseModule.forRoot(),
            DatepickerModule.forRoot(),
            DropdownModule.forRoot(),
            ModalModule.forRoot(),
            PaginationModule.forRoot(),
            ProgressbarModule.forRoot(),
            RatingModule.forRoot(),
            TabsModule.forRoot(),
            TimepickerModule.forRoot(),
            TooltipModule.forRoot(),
            TypeaheadModule.forRoot(),
            ToasterModule
        ],
        providers: [
            ColorsService
        ],
        declarations: [
            FlotDirective,
            SparklineDirective,
            EasypiechartDirective,
            CheckallDirective,
            VectormapDirective,
            NowDirective,
            ScrollableDirective,
            JqcloudDirective
        ],
        exports: [
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            TranslateModule,
            RouterModule,
            AccordionModule,
            AlertModule,
            ButtonsModule,
            CarouselModule,
            CollapseModule,
            DatepickerModule,
            DropdownModule,
            ModalModule,
            PaginationModule,
            ProgressbarModule,
            RatingModule,
            TabsModule,
            TimepickerModule,
            TooltipModule,
            TypeaheadModule,
            ToasterModule,
            FlotDirective,
            SparklineDirective,
            EasypiechartDirective,
            CheckallDirective,
            VectormapDirective,
            NowDirective,
            ScrollableDirective,
            JqcloudDirective
        ]
    })
    // https://github.com/ocombe/ng2-translate/issues/209
], SharedModule);
export { SharedModule };
var SharedModule_1;
//# sourceMappingURL=/Users/muyonghui/ionic2-demo/angular2/src/app/shared/shared.module.js.map