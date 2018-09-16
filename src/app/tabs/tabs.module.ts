import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { DashboardPageModule } from '../dashboard/dashboard.module';
import { ReportPageModule } from '../report/report.module';
import { SettingsPageModule } from '../settings/settings.module';
import { StatisticPageModule } from '../statistic/statistic.module'

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    ReportPageModule,
    SettingsPageModule,
    DashboardPageModule,
    StatisticPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {
  
}
