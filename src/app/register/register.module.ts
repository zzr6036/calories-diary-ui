import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { RegisterPage } from './register.page';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from  '@angular/common/http';
// import { map } from 'rxjs/operators/';
// import 'rxjs/Rx';
// import 'rxjs/add/operator/map'

const routes: Routes = [
  {
    path: '',
    component: RegisterPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    HttpModule,
    HttpClientModule
  ],
  declarations: [RegisterPage],
  schemas:[ CUSTOM_ELEMENTS_SCHEMA ]
})
export class RegisterPageModule {}
