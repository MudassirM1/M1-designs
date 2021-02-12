import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-envirnment',
  templateUrl: './envirnment.component.html',
  styleUrls: ['./envirnment.component.css']
})
export class EnvirnmentComponent implements OnInit {
  value = '';
  constructor() { }

  ngOnInit(): void {
  }

  update(value: string) { 
    this.value = value; 
  }
}
