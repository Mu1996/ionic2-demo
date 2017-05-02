import { Component, OnInit } from '@angular/core';
import { SystemService } from '../../../core/system/system.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    str: String;

    constructor(private systemService: SystemService) { }

    ngOnInit() {
      this.systemService.getUser().then(user => this.str = user);
    }

}
