import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouteReuseStrategy } from '@angular/router';
import { HttpModule, Http, Response } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { TabsPage } from './tabs/tabs.page'

import { Globals } from './global';
import { FoodrecordComponent } from './foodrecord/foodrecord.component';

const resourceUrl = 'http://localhost:5000';

@NgModule({
  declarations: [AppComponent, FoodrecordComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    HttpClientModule,
    Globals
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
