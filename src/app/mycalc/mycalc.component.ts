import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-mycalc',
  templateUrl: './mycalc.component.html',
  styleUrls: ['./mycalc.component.css']
})
export class MycalcComponent implements OnInit {

  inputStr: any;

  constructor() { }

  ngOnInit(): void {
    this.inputStr = new FormGroup({
      text: new FormControl()
    })
  }

  buttonClick(buttonElement: any) {
    let buttonText = buttonElement.textContent

    if (this.inputStr.controls.text.value != null) {
      this.inputStr.controls.text.setValue(this.inputStr.controls.text.value + buttonText)
    } else {
      this.inputStr.controls.text.setValue(buttonText)
    }
  }

  clearDisplay(){
    this.inputStr.controls.text.setValue("")
  }

  calculate(){
    let result = eval(this.inputStr.controls.text.value)
    this.inputStr.controls.text.setValue(result)
  }

  deleteLast(){
    let str = this.inputStr.controls.text.value
    str = str.slice(0, -1)
    this.inputStr.controls.text.setValue(str)
  }
}
