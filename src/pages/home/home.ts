import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { RecipeServiceProvider } from '../../providers/recipe/recipe.service';
import { Recipe } from '../../providers/recipe/recipe.model';
import {RecipeDetailPage} from '../recipe-detail/recipe-detail';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [HttpModule, RecipeServiceProvider]
})
export class HomePage {
  recipeList: Recipe[];
  recipe:any;

  constructor(public navCtrl: NavController, public recipeService: RecipeServiceProvider) {
    this.loadRecipes();
  }
  loadRecipes() {
    this.recipeService.loadRecipes().subscribe(recipe => this.recipeList = recipe);
  }
  viewItem(recipe:any)
  {
    this.recipe=recipe;
    console.log(this.recipe);
   this.navCtrl.push(RecipeDetailPage,{recipe:recipe});
  }

}
