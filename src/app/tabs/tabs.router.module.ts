import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { DashboardPage } from '../dashboard/dashboard.page';
import { ReportPage } from '../report/report.page';
import { SettingsPage } from '../settings/settings.page';
import { StatisticPage } from '../statistic/statistic.page'
import { FoodrecordPage } from '../foodrecord/foodrecord.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'dashboard',
        outlet: 'dashboard',
        component: DashboardPage
      },
      {
        path: 'report',
        outlet: 'report',
        component: ReportPage
      },
      {
        path: 'settings',
        outlet: 'settings',
        component: SettingsPage
      },
      {
        path: 'statistic',
        outlet: 'statistic',
        component: StatisticPage
      },
      // {
      //   path: 'foodrecord/:mealType',
      //   outlet: 'foodrecord',
      //   component: FoodrecordPage
      // }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/(dashboard:dashboard)',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
