import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { ArticuloFamilia } from '../models/articulo-familia';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MockArticulosFamiliasService {
  resourceUrl: string;
  constructor(private httpClient: HttpClient) {
    this.resourceUrl = 'https://pav2.azurewebsites.net/api/ArticulosFamilias/';
  }

  get() {
    return this.httpClient.get<ArticuloFamilia[]>(this.resourceUrl);
  }
}
