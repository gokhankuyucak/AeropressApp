import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Recipe, Step } from '../../providers/recipe/recipe.model';
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
})
export class RecipeDetailPage {
  recipe: Recipe;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.recipe = this.navParams.get('recipe');

  }

  startTimer(step: Step) {


    if (step.hasTimer == "true") {
      let element = document.getElementById(step.id);
      element.className += " recipe-transitionAnimate";
      element.style.webkitTransition = "all " + step.duration + "s linear";
      console.log("start Timer invoked " + step.hasTimer + "-" + step.id + step.description);
    }

  }
}
