import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  baseUrl: string = 'https://jsonplaceholder.typicode.com/users';
  data : any;
  id : any;
  object : any;
  zipcode: any;
  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.baseUrl , this.id).subscribe((result)=>{
      // this.zipcode = this.data.Table[0];
      console.warn("result",result);
      this.data=result
      })
  }

}
