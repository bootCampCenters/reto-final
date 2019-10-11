import { Component, OnInit } from '@angular/core';
import { Oferta } from '../ofertas';
import { DatePipe } from '@angular/common';
import { OfertasService } from '../ofertas.service';

@Component({
  selector: 'app-form-ofertas',
  templateUrl: './form-ofertas.component.html',
  styleUrls: ['./form-ofertas.component.css']
})
export class FormOfertasComponent implements OnInit {

  public ofertaForm;
  public oferta: Oferta;
  errorMessage: string;

  constructor(private ofertaService: OfertasService) { }

  ngOnInit() {
    this.oferta = {
      title: '',
      description: '',
      discount: 0,
      expireDate: new Date,
      id: null
    }
  }

  onSubmit(oferta: Oferta){
    oferta.id = null;
    this.ofertaService.addOferta(oferta).subscribe(
      new_oferta => {
        this.oferta = new_oferta;
      },
      error => this.errorMessage = <any>error
    );
  }

}
