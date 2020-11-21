import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private http: HttpClient) { }

  globalResult(): Observable<any> {
    const endpoint = 'https://api.covid19api.com/summary';
    return this.http.get(endpoint).pipe(map(res => {
      return res["Global"];
    }));
  }

  countriesResult(): Observable<any> {
    const endpoint = 'https://api.covid19api.com/summary';
    return this.http.get(endpoint).pipe(map(res => {
      return res["Countries"];
    }));
  }

  spainResult(): Observable<any> {
    const endpoint = 'https://api.covid19api.com/summary';
    return this.http.get(endpoint).pipe(map(res => {
      return res["Countries"].filter(spain => {
        return spain.Country === 'Spain';
      });
    }));
  }
}
