import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Platform } from 'ionic-angular';
import 'rxjs/add/operator/map';

@Injectable()
export class RecipeServiceProvider {
    constructor(private http: Http, private platform: Platform) {
    }
    loadRecipes() {
        console.log('Loading recipes');
        var url = 'assets/recipe/recipes.json';

        if (this.platform.is('cordova') && this.platform.is('android')) {
            url = "/android_asset/www/" + url;
        }
        return this.http.get(url)
            .map((res) => res.json());
    }


}