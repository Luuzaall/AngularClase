import { Component, OnInit } from '@angular/core';
import { ArticuloFamilia } from '../models/articulo-familia';
import { MockArticulosFamiliasService } from '../services/mock-articulos-familias.service';

@Component({
  selector: 'app-articulos-familias',
  templateUrl: './articulo-familia.component.html',
  styleUrls: ['./articulo-familia.component.css'],
})
export class ArticulosFamiliasComponent implements OnInit {
  Titulo = 'Articulos Familias';
  Items: ArticuloFamilia[] = [];

  constructor(private servicio: MockArticulosFamiliasService) {}

  ngOnInit() {
    this.GetFamiliasArticulos();
  }

  GetFamiliasArticulos() {
    this.servicio.get().subscribe((datos: ArticuloFamilia[]) => {
      this.Items = datos;
    });
  }
}
