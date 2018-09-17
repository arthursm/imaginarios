import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen'; 
// import { ScreenOrientation } from '@ionic-native/screen-orientation'; 
 
import { LoginPage } from '../pages/login/login'; 

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage: any = LoginPage;  

  constructor(
    platform: Platform,
    // statusBar: StatusBar, 
    // splashScreen: SplashScreen 
    //private screenOrientation: ScreenOrientation, 
  ) {

    platform.ready().then(() => {
   //   this.screenOrientation.lock(screenOrientation.ORIENTATIONS.PORTRAIT);
   //   statusBar.styleDefault();
   //   splashScreen.hide(); 
    });

  }
}
