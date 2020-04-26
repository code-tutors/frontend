import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name="leo";
  buttonDisabled=false;

  onChangeName(){
    this.buttonDisabled= this.buttonDisabled === true ? false:true;
    this.name = "Code Tutors" 
  }

  onInput(event : any){
    this.name= event.target.value;
    console.log(event);
  }
}
