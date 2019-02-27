import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { FiccionComponent } from './ficcion/ficcion.component';
import { RomanceComponent } from './romance/romance.component';
import { ComediaComponent } from './comedia/comedia.component';
import { FooterComponent } from './footer/footer.component';
import { DetailComponent } from './detail/detail.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {LibrosmodalService} from './librosmodal.service';
import { TruncatePipe } from '../truncate.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CabeceraComponent,
    FiccionComponent,
    RomanceComponent,
    ComediaComponent,
    FooterComponent,
    DetailComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  
  ],
  providers: [LibrosmodalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
