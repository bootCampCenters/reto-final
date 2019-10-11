import { Component, OnInit } from '@angular/core';
import { OfertasService } from 'app/ofertas/ofertas.service';
import { Oferta } from '../ofertas';

@Component({
  selector: 'app-list-ofertas',
  templateUrl: './list-ofertas.component.html',
  styleUrls: ['./list-ofertas.component.css']
})
export class ListOfertasComponent implements OnInit {

  private ofertas: Array<Oferta>;

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {

    this.ofertasService.getOfertas().subscribe(
      data => this.ofertas = data
      );
  }

  delete(id: string){
    this.ofertasService.deleteOferta(id).subscribe(
      
    );
  }
}
