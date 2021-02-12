import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  data: any;
  params : any;
  baseUrl: string = 'https://jsonplaceholder.typicode.com/comments';
  result: any;
  email: any;
  name: any;
  id: any;
  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.baseUrl , this.id).subscribe((result)=>{
      console.warn("result",result);
      this.data=result
      })
  }

}
