import { Component, OnInit } from '@angular/core';
import { LibrosmodalService } from '../librosmodal.service';

@Component({
  selector: 'app-ficcion',
  templateUrl: './ficcion.component.html',
  styleUrls: ['./ficcion.component.css']
})
export class FiccionComponent implements OnInit {
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
    this.consulta.cargarLibrosFiccionCategoria(this.pagina)
      .subscribe(data => {
        this.libros.push(data);
        this.pagina += 16;
        this.loading = false;
      });
  }

}
