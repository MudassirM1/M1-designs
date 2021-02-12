import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WebcamModule } from 'ngx-webcam';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScrollComponent } from './scroll/scroll.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectComponent } from './project/project.component';
import { EnvirnmentComponent } from './envirnment/envirnment.component';
import { HomeComponent } from './home/home.component';
import { LoopComponent } from './loop/loop.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { GlassEffectComponent } from './glass-effect/glass-effect.component';
import { NewThingsComponent } from './new-things/new-things.component';
@NgModule({
  declarations: [
    AppComponent,
    ScrollComponent,
    FooterComponent,
    HeaderComponent,
    DashboardComponent,
    ProjectComponent,
    EnvirnmentComponent,
    HomeComponent,
    LoopComponent,
    ImageUploadComponent,
    GlassEffectComponent,
    NewThingsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    WebcamModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
