import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StatisticPage } from './statistic.page';

const routes: Routes = [
  {
    path: '',
    component: StatisticPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    // RouterModule.forChild(routes)
    RouterModule.forChild([{ path: '', component: StatisticPage }])
  ],
  declarations: [StatisticPage]
})
export class StatisticPageModule {}
