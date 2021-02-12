import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.css']
})
export class ScrollComponent implements OnInit {

  constructor() { }
  
  public greaterThanValue = 0;
  public lessThanValue = 1;
  public isInvalid: boolean = false;

  public onChange(event: any): void {
    this.isInvalid = this.lessThanValue > this.greaterThanValue;
       
  }
  ngOnInit(): void {
  }

}
