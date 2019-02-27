import { Component, OnInit } from '@angular/core';
import { LibrosmodalService } from '../librosmodal.service';

@Component({
  selector: 'app-comedia',
  templateUrl: './comedia.component.html',
  styleUrls: ['./comedia.component.css']
})
export class ComediaComponent implements OnInit {
  libros = [];
  pagina = 1;
  public loading: boolean;
  constructor(private consulta: LibrosmodalService) {
    this.loading = true;
    this.mostrarLibros();
  }

  ngOnInit() {
  }

  mostrarLibros() {
    this.loading = true;
    this.consulta.cargarLibrosComediaCategoria(this.pagina)
      .subscribe(data => {
        this.libros.push(data);
        console.log(this.libros);
        this.pagina += 16;
        this.loading = false;
      });
  }


}
