import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NavController } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
 a: number = 0.12345;
 b: number = 1.09876;
 pi: number = 3.1415927;
 today = new Date();
 obj: Object = { name: {fName: "Paul", lName:"Shan"}, site:"VoidCanvas", luckyNumbers:[7,13,69] };
 myString: any;
 enteredText:any;
 enteredNumber:number;
  promise : Promise <string> = null;
	clickMe() {
		this.promise = new Promise<string>((resolve, reject) => {
			setTimeout(function () {
				resolve("resolved");
			},500);
		});
	}
  constructor(public navCtrl: NavController) {
   this.myString = "Angular Pipes";
  }
}
