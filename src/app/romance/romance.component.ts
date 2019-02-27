import { Component, OnInit } from '@angular/core';
import { LibrosmodalService } from '../librosmodal.service';


@Component({
  selector: 'app-romance',
  templateUrl: './romance.component.html',
  styleUrls: ['./romance.component.css']
})
export class RomanceComponent implements OnInit {
  libros= [];
  pagina = 1;
  public loading: boolean;
  constructor(private consulta: LibrosmodalService) {
    this.loading = true;
    this.mostrarLibros();
  }

  ngOnInit() {
  }

  mostrarLibros() {
    console.log(this.pagina);
    this.loading = true;
    this.consulta.cargarLibrosRomanceCategoria(this.pagina)
      .subscribe(data => {
        this.libros.push(data);
        console.log(this.libros);
        this.pagina += 17;
        this.loading = false;
      });
  }

}
