import { Component, OnInit } from '@angular/core';
import { CovidService } from './services/covid.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  show: boolean;
  global: any;
  countries: any[];
  spain: any;

  constructor(private covidService: CovidService) {}

  ngOnInit(): void {
    this.covidService.globalResult().subscribe( response => {
      this.global = response;
    });

    this.covidService.countriesResult().subscribe( response => {
      this.countries = response;
    });

    this.covidService.spainResult().subscribe( response => {
      this.spain = response;
    });
  }
}
