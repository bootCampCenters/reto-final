import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { of, Observable } from "rxjs";
import { Oferta } from "./ofertas";


@Injectable({
    providedIn: 'root'
})
export class OfertasService {

    constructor(private httpClient: HttpClient) {

    }

    getOfertas(): Observable<Oferta[]> {
        return of<Oferta[]>([{
            id: 1,
            title: 'Oferta 2x1',
            description: 'Paga 1',
            discount: 50,
            expireDate: new Date()
        }]);
    }

}