import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {
    component:AboutComponent,
    path:'about'
  },
  {
    component:HomeComponent,
    path:''
  },
  {
    component:ContactComponent,
    path:'contact'
  },
  {
    component:GalleryComponent,
    path:'gallery'
  },
  {
    component:ServicesComponent,
    path:'services'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
