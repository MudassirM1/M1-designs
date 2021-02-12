import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class GetApiService {
url="https://jsonplaceholder.typicode.com/comments"
  constructor(private http:HttpClient) { }

  getPosts(){
    return this.http.get(this.url);
  }
}
