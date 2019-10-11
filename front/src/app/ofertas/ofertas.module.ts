import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormOfertasComponent } from './form-ofertas/form-ofertas.component';
import { ListOfertasComponent } from './list-ofertas/list-ofertas.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [
    FormOfertasComponent,
    ListOfertasComponent
  ],
  exports: [
    FormOfertasComponent,
    ListOfertasComponent
  ]

})
export class OfertasModule { }
