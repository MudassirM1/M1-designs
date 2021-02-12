import { Component } from '@angular/core';
import * as getApiService from './get-api.service'
import  { PostsService } from './posts.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'M1-designs -API';
  data: any;
  constructor(private postData:PostsService){}
  ngOnInit(){
    this.postData.getPosts().subscribe((result)=>{
    console.warn("result",result);
    this.data=result
    })
  }
}
