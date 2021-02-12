import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  data: any;
  tata: any;
  params : any;
  baseUrl: string = 'https://jsonplaceholder.typicode.com/posts';
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
