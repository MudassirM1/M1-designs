import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
@Component({
  selector: 'app-new-things',
  templateUrl: './new-things.component.html',
  styleUrls: ['./new-things.component.css']
})
export class NewThingsComponent implements OnInit {

  constructor() { }

  options = {
    options : false,
  }

    
  ngOnInit(): void {
  }

}
