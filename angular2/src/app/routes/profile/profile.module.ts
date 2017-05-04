import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile/profile.component';
import { Routes, RouterModule } from '@angular/router';
import { HelloWorldComponent } from './hello-world/hello-world.component';

const routes: Routes = [
  { path: '', component: ProfileComponent },
  { path: 'helloworld', component: HelloWorldComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [
    ProfileComponent,
    HelloWorldComponent
  ],
  exports: [
    RouterModule,
  ]
})
export class ProfileModule { }
