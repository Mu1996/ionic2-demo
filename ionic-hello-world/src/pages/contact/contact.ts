import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HelloWorldPage } from '../helloWorld/helloWorld';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }

  goHello() {
    this.navCtrl.push(HelloWorldPage, {

    });
  }
}

