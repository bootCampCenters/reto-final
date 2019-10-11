import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { of, Observable } from "rxjs";
import { Oferta } from "./ofertas";
import {catchError} from 'rxjs/operators';
import {HttpErrorHandler, HandleError} from '../error.service';


@Injectable({
    providedIn: 'root'
})
export class OfertasService {

    //entity_url = environment.REST_API_URL + 'owners';

  private handlerError: HandleError;

    constructor(private httpClient: HttpClient, private httpErrorHandler: HttpErrorHandler) {
        this.handlerError = httpErrorHandler.createHandleError('OfertasService');

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

    addOferta(oferta: Oferta): Observable<Oferta> {
        return this.httpClient.post<Oferta>('servidor', oferta)
      .pipe(
        catchError(this.handlerError('addOferta', oferta))
      );
    }

    deleteOferta(oferta_id: string): Observable<{}> {
        return this.httpClient.delete<Oferta>('servidor' + '/' + oferta_id)
          .pipe(
             catchError(this.handlerError('deleteOwner', [oferta_id]))
          );
      }

}