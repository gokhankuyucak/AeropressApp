import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
import { Recipe } from '../../providers/recipe/recipe.model';
import { UtilityProvider } from '../../providers/utility/utility';
/**
 * Generated class for the RecipeTimerPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-recipe-timer',
  templateUrl: 'recipe-timer.html',
  providers: [UtilityProvider],
})
export class RecipeTimerPage {
  recipe: Recipe;
  clockRunning: boolean;
  timeLeft;
  sessionTime: number;
  seconds: number;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.resetClock();
    this.recipe = Object.create(this.navParams.get('recipe'));
    console.log(this.recipe.name);
  }
  private resetClock() {
    this.sessionTime = Number(this.navParams.get('recipe').duration);
    this.seconds = this.sessionTime;
    this.clockRunning = false;
  }
  public renderBackground(): void {
    let color: string = "#E3E2CA";
    let timer = this.sessionTime;
    if (this.clockRunning) {
      color = "#E3E2CA";
    }
    let progress = (timer - this.seconds) * 100 / timer;
    let element = document.getElementById("stopWatch");

    if (element) {
      element.style.background = "linear-gradient(to top, " + color + " 0%," + color + " " + progress + "%,#6F6856 " + progress + "%,#6F6856 100%)";
    }
  }

  public filterTime(seconds): string {
    return UtilityProvider.filterTime(seconds);
  }
  public timer(): void {
    if (this.seconds > 0) {
      if (this.seconds<100 && this.recipe.steps.length>0){
        console.log(this.recipe);
        this.recipe.steps.shift();
      }
      this.seconds -= 1;
      if (this.seconds === 0) {
        // document.getElementById('alarm').play();
        clearInterval(this.timeLeft);
      }
    } else {

    }
    console.log(this.seconds);
    this.renderBackground();
    this.setElementTitle("time", this.filterTime(this.seconds));
  }
  public startTimer(): void {
    console.log("this.seconds" + this.seconds);
    if (this.seconds === 0) {
      this.resetClock();
    }
    if (!this.clockRunning) {
      this.timeLeft = setInterval(() => this.timer(), 1000);
      this.clockRunning = true;
      let element = document.getElementById("stopWatch");
      if (element != null) {
        element.className += " running";
      }
    } else {
      clearInterval(this.timeLeft);
      this.clockRunning = false;
      let element = document.getElementById("stopWatch");
      if (element != null) {
        element.className = "";
      }
    }
    this.renderBackground();
  }

  private setElementTitle(elementId, innerText) {
    let element = document.getElementById("time");
    if (element) {
      element.innerHTML = innerText;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecipeTimerPage');
  }
  ionViewDidLeave() {
    this.resetClock();
    }

}
