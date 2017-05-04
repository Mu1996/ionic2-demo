import { NgModule, Optional, SkipSelf } from '@angular/core';

import { SettingsService } from './settings/settings.service';
import { ThemesService } from './themes/themes.service';
import { TranslatorService } from './translator/translator.service';
import { MenuService } from './menu/menu.service';
import { SystemService } from './system/system.service';

import { throwIfAlreadyLoaded } from './module-import-guard';
import { HttpModule, JsonpModule } from '@angular/http';
import { hostip, handleError, extractData } from './config';
import {HelloworldService} from "./helloworld/helloworld.service";

@NgModule({
    imports: [
      HttpModule,
      JsonpModule,

    ],
    providers: [
      SettingsService,
      ThemesService,
      TranslatorService,
      MenuService,
      SystemService,
      HelloworldService

    ],
    declarations: [

    ],
    exports: [
    ]
})
export class CoreModule {
    constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
}
