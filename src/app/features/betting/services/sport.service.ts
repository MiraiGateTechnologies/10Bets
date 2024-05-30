
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { MatchData } from '../../../shared/interface/sport.interface';
import { environment } from '../../../../assets/environment/environment';
import { EventData } from '../../../shared/interface/match-details.interface';

@Injectable({
  providedIn: 'root'
})
export class SportService {
  private url = 'https://api.1exch.net/game/inPlay';
  private baseUrl = environment.oddApiUrl;
  private oddBaseUrl = environment.apiUrl;
  private exchApi = environment.exchApiUrl;
  constructor(private http:HttpClient) { }
  //older one
  // getSportDetails(matchcode:string):Observable<any>{
  //   const url = `${this.baseUrl}/api/v2/get/${matchcode}`;
  //   return this.http.get(url)
  // }

  getSportDetails(matchcode:string):Observable<any>{
    const url = `${this.exchApi}/game/cricket/${matchcode}`;
    return this.http.get(url)
  }
  getPlaceCricketDetails(matchcode:string):Observable<MatchData>{
    const url = `${this.oddBaseUrl}/game/cricket/${matchcode}`
    return this.http.get<MatchData>(url);
  }
  getplusMinuData(matchcode:string):Observable<MatchData>{
    const url =`${this.baseUrl}/game/cricket/${matchcode}`;
    return this.http.get<MatchData>(url);
  }

  // jsonData


  getBettingData(): Observable<any> {
    return this.http.get('/assets/json/bettingData.json');
  }

  
}
