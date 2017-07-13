
import {} from 'jasmine';
import { async,inject, TestBed } from '@angular/core/testing';
import { Platform } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { RecipeServiceProvider } from './recipe.service';
import {Recipe} from './recipe.model';

class MockPlatform extends Platform { }
describe('Recipe Service Provider', () => {
 let recipeList: Recipe[];
 let  recipe: any;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        Platform, RecipeServiceProvider
      ],
      imports:[
          HttpModule
      ]
    });

    TestBed.compileComponents();
  });

   
 it('should be defined', inject([RecipeServiceProvider], (api) => {
   
    expect(api).toBeDefined();
    api.loadRecipes().subscribe(recipe => recipeList = recipe);
    expect(recipeList).toBeDefined();
    expect(Array.isArray(recipeList)).toBeTruthy;
   
    expect(recipeList.length).toBeGreaterThan(0);
    // expect(api.getData()).toBe('Angular 2');
  }));


});