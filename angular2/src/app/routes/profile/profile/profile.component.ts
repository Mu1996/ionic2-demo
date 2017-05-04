import { Component, OnInit } from '@angular/core';
import {SystemService} from "../../../core/system/system.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user:any;
  constructor(private systemService: SystemService,private router: Router) { }

  ngOnInit() {
    this.user = this.systemService.getUser();
  }

  gohello() {
    this.router.navigate(["/profile/helloworld"]);
  }

}
