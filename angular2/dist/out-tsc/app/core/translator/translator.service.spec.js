/* tslint:disable:no-unused-variable */
import { TestBed, inject } from '@angular/core/testing';
import { TranslateModule, TranslateLoader } from 'ng2-translate/ng2-translate';
import { Http } from '@angular/http';
import { TranslatorService } from './translator.service';
import { createTranslateLoader } from '../../app.module';
describe('Service: Translator', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            imports: [
                TranslateModule.forRoot({
                    provide: TranslateLoader,
                    useFactory: (createTranslateLoader),
                    deps: [Http]
                })
            ],
            providers: [TranslatorService]
        });
    });
    it('should ...', inject([TranslatorService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=/Users/muyonghui/ionic2-demo/angular2/src/app/core/translator/translator.service.spec.js.map