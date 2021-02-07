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
  paisesSugeridos: Country[] = [];
  constructor(private paisService: PaisService) {}

  ngOnInit(): void {}

  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarPais(this.termino).subscribe(
      (paiess) => {
        this.paises = paiess;
      },
      (err) => {
        this.hayError = true;
        this.paises = [];
      }
    );
  }

  sugerencias(termino: string) {
    this.hayError = false;
    this.paisService.buscarPais(termino).subscribe(
      (paises) => (this.paisesSugeridos = paises.slice(0, 5)),
      (err) => (this.paisesSugeridos = [])
    );
  }
}
