import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Recipe, Step } from '../../providers/recipe/recipe.model';
import { Insomnia } from '@ionic-native/insomnia';
import { SmartAudioProvider } from '../../providers/smart-audio/smart-audio';
import { RecipeTimerPage } from '../recipe-timer/recipe-timer';
import { UtilityProvider } from '../../providers/utility/utility';

/**
 * Generated class for the RecipeDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-recipe-detail',
  templateUrl: 'recipe-detail.html',
  providers: [UtilityProvider],
})
export class RecipeDetailPage {
  recipe: Recipe;
  isPageActive: boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams,private insomnia: Insomnia,public smartAudio: SmartAudioProvider) {
    this.recipe = this.navParams.get('recipe');
    this.isPageActive=true;
  }

  startTimer(step: Step) {

    this.navCtrl.push(RecipeTimerPage, { recipe: this.recipe });
/*
    this.insomnia.keepAwake();
    if (step.hasTimer == "true") {
      let element = document.getElementById(step.id);
      element.className += " recipe-transitionAnimate";
      element.style.webkitTransition = "all " + step.duration + "s linear";
      console.log("start Timer invoked " + step.hasTimer + "-" + step.id + step.description);
      let button = document.getElementById('btn_'+step.id);
      button.setAttribute("disabled","disabled");
      setTimeout(()=>{if (this.isPageActive) {this.smartAudio.play('notify');}}, Number(step.duration)*1000);
      console.log( this.navCtrl.getActive().name);
    }
*/

  }

  filterTime(seconds:string){
    return UtilityProvider.filterTime(seconds);
  }
  ionViewWillLeave() {
    this.isPageActive=false;

  }
}
