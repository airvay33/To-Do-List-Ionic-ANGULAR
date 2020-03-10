import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

export const firebaseConfig = {
  apiKey: "AIzaSyCrDU5ysZnzQ4dlh-8TZFqGOeKCL7e-6VY",
  authDomain: "monassmat33.firebaseapp.com",
  databaseURL: "https://monassmat33.firebaseio.com",
  projectId: "monassmat33",
  storageBucket: "monassmat33.appspot.com",
  messagingSenderId: "985228298455",
  appId: "1:985228298455:web:56373b1b8e45ce22dac892",
  measurementId: "G-SNQ21H5NQW"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), 
  AppRoutingModule, AppRoutingModule,
  AngularFireModule.initializeApp(firebaseConfig),
  AngularFireDatabaseModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
