import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroDependentePage } from './cadastro-dependente';

@NgModule({
  declarations: [
    CadastroDependentePage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroDependentePage),
  ],
})
export class CadastroDependentePageModule {}
