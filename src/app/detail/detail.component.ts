import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LibrosmodalService } from '../librosmodal.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  datos: any ={volumeInfo:{title:'',authors:'',publisher:'',imageLinks:{small:''}}};
  constructor(private route: ActivatedRoute, private consulta: LibrosmodalService) { }

  ngOnInit() {
    this.cargarDetalleLibro();
  }

  cargarDetalleLibro() {
    const libroID = this.route.snapshot.paramMap.get('id');
    this.consulta.cargarLibros(libroID).subscribe(data => {
      this.datos = data;
    });
  }
}
