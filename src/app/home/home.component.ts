import { Component, OnInit } from '@angular/core';
import {WebcamImage} from 'ngx-webcam'; 
import {Subject, Observable} from 'rxjs'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'gfgangularwebcam'; 
  
  public webcamImage: WebcamImage = null; 
  private trigger: Subject<void> = new Subject<void>(); 
 
  constructor() { }

  ngOnInit(): void {
  }
  triggerSnapshot(): void { 
    this.trigger.next(); 
   } 
   handleImage(webcamImage: WebcamImage): void { 
    console.info('Saved webcam image', webcamImage); 
    this.webcamImage = webcamImage; 
   } 
    
   public get triggerObservable(): Observable<void> { 
    return this.trigger.asObservable(); 
   } 
}
