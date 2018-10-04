import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FoodrecordPage } from './foodrecord.page';

const routes: Routes = [
  {
    path: '',
    component: FoodrecordPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FoodrecordPage],
  schemas:[ CUSTOM_ELEMENTS_SCHEMA ]
})
export class FoodrecordPageModule {}
