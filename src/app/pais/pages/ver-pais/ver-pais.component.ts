import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css'],
})
export class VerPaisComponent implements OnInit {
  pais!: Country;
  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) {
    this.activatedRoute.params
      .pipe(
        switchMap((params) => this.paisService.buscarCodigo(params.id)),
        tap(console.log)
      )
      .subscribe((pais) => (this.pais = pais));
    // this.activatedRoute.params.subscribe((params) => {
    //   this.paisService.buscarCodigo(params.id).subscribe((pais) => {
    //     console.log(pais);
    //   });
    // });
  }

  ngOnInit(): void {}
}
