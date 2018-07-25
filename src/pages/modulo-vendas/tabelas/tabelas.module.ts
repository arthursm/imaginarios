import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabelasPage } from './tabelas';

@NgModule({
  declarations: [
    TabelasPage,
  ],
  imports: [
    IonicPageModule.forChild(TabelasPage),
  ],
})
export class TabelasPageModule {}
