import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { DashboardPage } from '../dashboard/dashboard.page';
import { ReportPage } from '../report/report.page';
import { SettingsPage } from '../settings/settings.page';

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
      }
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
