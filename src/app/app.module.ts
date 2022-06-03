import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//Para llamadas al servidor.
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './components/app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ArticulosFamiliasComponent } from './components/articulos-familias/articulos-familias.component';
import { MenuComponent } from './components/menu/menu.component';
import { ArticulosComponent } from './components/articulos/articulos.component';

// Router
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

// ng bootstrap!
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

// Para Reactive Forms.
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbPaginationModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/inicio', pathMatch: 'full' },
      { path: 'inicio', component: InicioComponent },
      { path: 'articulosfamilias', component: ArticulosFamiliasComponent },
      { path: 'articulos', component: ArticulosComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    InicioComponent,
    ArticulosFamiliasComponent,
    MenuComponent,
    ArticulosComponent,
  ],
  bootstrap: [AppComponent],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
})
export class AppModule {}
