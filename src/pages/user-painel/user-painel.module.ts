import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserPainelPage } from './user-painel';

@NgModule({
  declarations: [
    UserPainelPage,
  ],
  imports: [
    IonicPageModule.forChild(UserPainelPage),
  ],
})
export class UserPainelPageModule {}
