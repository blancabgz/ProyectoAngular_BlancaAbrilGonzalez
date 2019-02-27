import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LibrosmodalService {
  
  nombre : string;
  constructor(private http: HttpClient) {}

  cargarLibros(id){
    return this.http.get('https://www.googleapis.com/books/v1/volumes/'+id);
  }
  
  cargarLibrosComedia(pagina){
    return this.http.get('https://www.googleapis.com/books/v1/volumes?q=subject:comedy&startIndex=' + pagina + '&maxResults=4&key=AIzaSyDrxOkARLoEKobZKGNUVa3wh718V_k1D8Y');
  }

  cargarLibrosRomance(pagina){
    return this.http.get('https://www.googleapis.com/books/v1/volumes?q=subject:romance&startIndex=' + pagina + '&maxResults=4&key=AIzaSyDrxOkARLoEKobZKGNUVa3wh718V_k1D8Y');
  }

  cargarLibrosFiccion(pagina){
    return this.http.get('https://www.googleapis.com/books/v1/volumes?q=subject:comedy&startIndex=' + pagina + '&maxResults=4&key=AIzaSyDrxOkARLoEKobZKGNUVa3wh718V_k1D8Y');
  }

  cargarLibrosFiccionCategoria(pagina){
    return this.http.get('https://www.googleapis.com/books/v1/volumes?q=subject:comedy&startIndex=' + pagina + '&maxResults=16&key=AIzaSyDrxOkARLoEKobZKGNUVa3wh718V_k1D8Y');
  }

  cargarLibrosRomanceCategoria(pagina){
    return this.http.get('https://www.googleapis.com/books/v1/volumes?q=subject:romance&startIndex=' + pagina + '&maxResults=16&key=AIzaSyDrxOkARLoEKobZKGNUVa3wh718V_k1D8Y');
  }

  cargarLibrosComediaCategoria(pagina){
    return this.http.get('https://www.googleapis.com/books/v1/volumes?q=subject:comedy&startIndex=' + pagina + '&maxResults=16&key=AIzaSyDrxOkARLoEKobZKGNUVa3wh718V_k1D8Y');
  }
  
}
