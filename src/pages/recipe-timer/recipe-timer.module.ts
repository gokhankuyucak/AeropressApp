import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecipeTimerPage } from './recipe-timer';

@NgModule({
  declarations: [
    RecipeTimerPage,
  ],
  imports: [
    IonicPageModule.forChild(RecipeTimerPage),
  ],
  exports: [
    RecipeTimerPage
  ]
})
export class RecipeTimerPageModule {}
