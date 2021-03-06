import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { PerfilPage } from '../pages/perfil/perfil';
import { GraficosPage } from '../pages/graficos/graficos';
import { FeedPage } from '../pages/feed/feed';
import { ReceitasPage } from '../pages/receitas/receitas';
import { AlimentacaoPage } from '../pages/alimentacao/alimentacao';
import { DuvidasPage } from '../pages/duvidas/duvidas';
import { LoginPage } from '../pages/login/login';
import { LoginProvider } from '../providers/login/login-provider';
import { NativeStorage } from '@ionic-native/native-storage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;
  username = '';
  email = '';

  constructor(
    public platform: Platform,
		public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public auth: LoginProvider,
		public events: Events,
    private nativeStorage: NativeStorage
  ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Perfil', component: PerfilPage },
      { title: 'Gráficos', component: GraficosPage },
      { title: 'Feed', component: FeedPage },
      { title: 'Receitas', component: ReceitasPage },
      { title: 'Alimentação', component: AlimentacaoPage },
      { title: 'Tire suas dúvidas', component: DuvidasPage }
    ];

    this.nativeStorage.getItem('usrLogado')
    .then(data => {
      console.log(data);
       this.username = data.usrNome;
       this.email = data.usrEmail;
    },
    error => console.error(error)
  );
  
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

	public logout() {
		this.auth.logout().subscribe(succ => {
      this.nativeStorage.remove('usrLogado');
			this.nav.setRoot(LoginPage);

		});
	}
}
