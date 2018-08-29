import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PerfilPage } from '../pages/perfil/perfil';
import { GraficosPage } from '../pages/graficos/graficos';
import { FeedPage } from '../pages/feed/feed';
import { ReceitasPage } from '../pages/receitas/receitas';
import { AlimentacaoPage } from '../pages/alimentacao/alimentacao';
import { DuvidasPage } from '../pages/duvidas/duvidas';
import { LoginPage } from '../pages/login/login';
import { LoginProvider } from '../providers/login/login-provider';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { CadastroDependentePage } from '../pages/cadastro-dependente/cadastro-dependente';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PerfilPage,
    GraficosPage,
    FeedPage,
    ReceitasPage,
    AlimentacaoPage,
    DuvidasPage,
    LoginPage,
    CadastroPage,
    CadastroDependentePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PerfilPage,
    GraficosPage,
    FeedPage,
    ReceitasPage,
    AlimentacaoPage,
    DuvidasPage,
    LoginPage,
    CadastroPage,
    CadastroDependentePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    LoginProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
