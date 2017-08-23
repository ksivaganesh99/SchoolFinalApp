import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegistrationPage } from '../pages/registration/registration';
import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';
import { SubjectsPage } from '../pages/subjects/subjects';
import { MenuPage } from '../pages/menus/menu';
import { TabsPage } from '../pages/tabs/tabs';
import { FindyourselfPage } from '../pages/findyourself/findyourself';
import { MinddiversionPage } from '../pages/minddiversion/minddiversion';
import { SciencePage } from '../pages/science/science';
import { MathschaptersPage } from '../pages/mathschapters/mathschapters';
import { MathsvideostestsPage } from '../pages/mathsvideostests/mathsvideostests';
import { SocialchaptersPage } from '../pages/socialchapters/socialchapters';
import { EnglishchaptersPage } from '../pages/englishchapters/englishchapters';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegistrationPage,
    LoginPage,
    ProfilePage,
    SubjectsPage,
    MenuPage,
    TabsPage,
    FindyourselfPage,
    MinddiversionPage,
    SciencePage,
    MathschaptersPage,
    MathsvideostestsPage,
    SocialchaptersPage,
    EnglishchaptersPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegistrationPage,
    LoginPage,
    ProfilePage,
    SubjectsPage,
    MenuPage,
    TabsPage,
    FindyourselfPage,
    MinddiversionPage,
    SciencePage,
    MathschaptersPage,
    MathsvideostestsPage,
    SocialchaptersPage,
    EnglishchaptersPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},SplashScreen,StatusBar]
})
export class AppModule {}
