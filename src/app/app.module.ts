import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Insomnia } from '@ionic-native/insomnia';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {RecipeDetailPage} from '../pages/recipe-detail/recipe-detail';
import {RecipeTimerPage} from '../pages/recipe-timer/recipe-timer';
import { HttpModule } from '@angular/http';
import { SmartAudioProvider } from '../providers/smart-audio/smart-audio';
import { NativeAudio } from '@ionic-native/native-audio';
import { UtilityProvider } from '../providers/utility/utility';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RecipeDetailPage,
    RecipeTimerPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RecipeDetailPage,
    RecipeTimerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Insomnia,
    NativeAudio,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SmartAudioProvider,
    UtilityProvider
  ]
})
export class AppModule {}
