
import { Component, OnInit } from '@angular/core';
import { LibrosmodalService } from '../librosmodal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {
  romances = [];
  comedias = [];
  ficcion = [];

  pagina = 1;
  public loading: boolean;
  constructor(private consulta:LibrosmodalService) {
    this.loading = true;
    this.mostrarLibrosRomance();
    this.mostrarLibrosComedia();
    this.mostrarLibrosFiccion();
  }


  ngOnInit() {

  }

  mostrarLibrosComedia() {
    this.loading = true;
    this.consulta.cargarLibrosComedia(this.pagina)
      .subscribe(data => {
        this.comedias.push(data);
        console.log(this.comedias);
        this.pagina += 4;
        this.loading = false;
      });
  }

  mostrarLibrosRomance() {
    this.loading = true;
    this.consulta.cargarLibrosRomance(this.pagina)
      .subscribe(data => {
        this.romances.push(data);
        console.log(this.romances);
        this.pagina += 4;
        this.loading = false;
      });
  }

  mostrarLibrosFiccion() {
    this.loading = true;
    this.consulta.cargarLibrosFiccion(this.pagina)
      .subscribe(data => {
        this.ficcion.push(data);
        console.log(this.ficcion);
        this.pagina += 4;
        this.loading = false;
      });
  }


}
