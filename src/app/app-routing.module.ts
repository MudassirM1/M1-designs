import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EnvirnmentComponent } from './envirnment/envirnment.component';
import { FooterComponent } from './footer/footer.component';
import { GlassEffectComponent } from './glass-effect/glass-effect.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { LoopComponent } from './loop/loop.component';
import { NewThingsComponent } from './new-things/new-things.component';
import { ProjectComponent } from './project/project.component';
import { ScrollComponent } from './scroll/scroll.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dash', component: DashboardComponent },
  { path: 'eni', component: EnvirnmentComponent },
  { path: 'header', component: HeaderComponent},
  { path: 'footer', component: FooterComponent },
  { path: 'pro', component: ProjectComponent },
  { path: 'scroll', component: ScrollComponent},
  { path: 'scroll', component: ScrollComponent},
  { path: 'image', component: ImageUploadComponent},
  { path: 'glass', component: GlassEffectComponent},
  { path: 'new', component: NewThingsComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
