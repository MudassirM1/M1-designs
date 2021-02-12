import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loop',
  templateUrl: './loop.component.html',
  styleUrls: ['./loop.component.css']
})
export class LoopComponent implements OnInit {
  mx: any;

  constructor() {

    this.mx = {
      myname : 'mudassir',
      list : [
      'm1',
      'm2',
      'm3',
      'm4',
      'm5',
      'm6',
      'm7',
      'm8',
      'm9',
      'm70',
      'm10',
      'm',
      'asa',
      'sex',
      'ascasd',
      "khkas  "
    
     ]
    };
    
   }

  ngOnInit(): void {
  }

}
