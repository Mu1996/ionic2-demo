import {Component, OnInit} from '@angular/core';
import {SettingsService} from '../../../core/settings/settings.service';
import {SystemService} from '../../../core/system/system.service';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {CustomValidators} from 'ng2-validation';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  valForm: FormGroup;
  test: any;
  errorMessage: any;

  constructor(public settings: SettingsService, fb: FormBuilder, private system: SystemService) {

    this.valForm = fb.group({
      'email': [null, Validators.compose([Validators.required, CustomValidators.email])],
      'password': [null, Validators.required]
    });

  }

  submitForm($ev, value: any) {
    $ev.preventDefault();
    for (let c in this.valForm.controls) {
      this.valForm.controls[c].markAsTouched();
    }
    if (this.valForm.valid) {
      console.log('Valid!');
      console.log(value);
    }
  }

  ngOnInit() {


    this.system.postTest()
      .subscribe(
        success => {
          let result:any;
          result = <any>success;
          if (result.code == 0){
            this.test = result.returnValue;
          }else{
            this.errorMessage = result.errorReason;
          }
        },
        error => this.errorMessage = <any>error,
      );
  }

}
