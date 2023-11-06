import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Caja } from './caja.model';
@Component({
  selector: 'app-caja',
  templateUrl: './caja.component.html',
  styleUrls: ['./caja.component.css']
})
export class CajaComponent {
  /*numeroTropa: number = 0;
  fechaFaena!: string;
  fechaVencimiento!: string;
  procedencia!: string;
  tipoCorte!: string;
  pesoNeto!: number;
  codigoQR!: number;
  codigoBarras:number = 0;
  constructor(private authService: AuthService) { }

  guardarEnCaja() {
    const datos: Caja = {
      numeroTropa: 0,
      fechaFaena: '',
      fechaVencimiento: '',
      procedencia: '',
      tipoCorte: '',
      pesoNeto:0 ,
      codigoQR: 0,
      codigoBarras:0
    };

    this.authService.guardarEnCaja(datos).subscribe(response => {
      console.log('Datos guardados en Caja:', response);
    });
  }*/
}
