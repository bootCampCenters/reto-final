import { Component, OnInit } from '@angular/core';
import { OfertasService } from 'app/ofertas/ofertas.service';

@Component({
  selector: 'app-list-ofertas',
  templateUrl: './list-ofertas.component.html',
  styleUrls: ['./list-ofertas.component.css']
})
export class ListOfertasComponent implements OnInit {

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {

    this.ofertasService.getOfertas().subscribe(console.log);
  }

}
