import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { ComediaComponent } from './comedia/comedia.component';
import { FiccionComponent } from './ficcion/ficcion.component';
import { RomanceComponent } from './romance/romance.component';
import { FooterComponent } from './footer/footer.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  {path: 'libros',component:HomeComponent},
  {path: 'cabecera',component:CabeceraComponent},
  {path: 'romance',component:RomanceComponent},
  {path: 'comedia',component:ComediaComponent},
  {path: 'ficcion',component:FiccionComponent},
  {path: 'footer',component:FooterComponent},
  {path: 'detail/:id',component:DetailComponent},
  {path: '**', redirectTo:'/libros', pathMatch: 'full'},
  {path: '', redirectTo:'/libros', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{}
