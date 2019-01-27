import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

import { map, catchError, tap } from 'rxjs/operators';

import {MatSnackBar} from '@angular/material';


const endpointCuentas = '/ServicioCuenta/api/cuenta';
const endpointPrestamos = '/ServicioPrestamo/api/prestamo';
const endpointUsuarioKYC = '/KYC-mongo-rest-web/api/cliente/cedula/1007785605';
const transfDirecta = '/Banca-web/api/usuario/1';
const endpointObtCuentas = 'Modulo-Cuentas-Pll-web/api/cuenta/1004456891';
const endpointObtTransfe = '/Modulo-Cuentas-Pll-web/api/transferencia/directa/';

@Injectable({
  providedIn: 'root'
})
export class CuentasService {

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  getObtCuentas(): Observable<any> {
    return this.http.get(endpointObtCuentas).pipe(
      map(this.extractData));
  }

  getTransferencia(origen: String, destino: String, monto: String) {
    return this.http.get(endpointObtTransfe + origen + "&" + destino + "&" + monto).pipe(
      map(this.extractData) );
      /* tap(
        resp => {
          console.log("CORRECTITO", resp.headers.get('ReturnStatus'));
          this.snackBar.open("Transferencia realizada con éxito", "ACEPTAR", {
            duration: 3000,
          });
        }, err => {
          console.log("ERRORSITO", err);
          this.snackBar.open("Error, Verifique los datos porfavor", "ACEPTAR", {
            duration: 3000,
          });
        }
      ) */
  }

  getUnUsuario(): Observable<any> {
    return this.http.get(endpointUsuarioKYC).pipe(
      map(this.extractData));
  }

  getListaCuentas(): Observable<any> {
    return this.http.get(endpointCuentas).pipe(
      map(this.extractData));
  }

  getListaPrestamos(): Observable<any> {
    return this.http.get(endpointPrestamos).pipe(
      map(this.extractData));
  }

}
export class transfDir {
  origen: String;
  destino: String;
  monto: String;
}