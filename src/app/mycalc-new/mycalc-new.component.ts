import { Component, OnInit } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-mycalc-new',
  templateUrl: './mycalc-new.component.html',
  styleUrls: ['./mycalc-new.component.css']
})
export class MycalcNewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  stringToEvaluate: String = "";

  takeInput(num: String) {
    this.stringToEvaluate = this.stringToEvaluate.toString() + num;
    console.log(this.stringToEvaluate); 
  }

  evaluateResult(){
    if(this.stringToEvaluate != ""){
      this.stringToEvaluate = eval(this.stringToEvaluate.toString());
    }
    console.log(this.stringToEvaluate);
  }

  resetInput(){
    this.stringToEvaluate = "";
  }

}
