import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css'],
})
export class PorPaisComponent implements OnInit {
  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) {}

  ngOnInit(): void {}

  buscar() {
    this.hayError = false;

    this.paisService.buscarPais(this.termino).subscribe(
      (paiess) => {
        this.paises = paiess;
        console.log(this.paises);
      },
      (err) => {
        this.hayError = true;
        this.paises = [];
      }
    );
  }
}
