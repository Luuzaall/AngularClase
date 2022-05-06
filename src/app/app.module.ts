import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { ArticulosFamiliasComponent } from './articulo-familia/articulo-familia.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, InicioComponent, ArticulosFamiliasComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
