import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { environment } from '../../../../assets/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class TenBettsService {
  apiUrl = environment.exchApiUrl;
  // apiUrl = 'https://api.betguru247.net/game/inPlay';
  constructor(private http: HttpClient) { }
  // getCricketBet():Observable<any>{
  //   const url = this.apiUrl+'/game/inPlay';
  //   return this.http.get(url).pipe(
  //     catchError(this.handleError))
  // }


  // jsonData
  getCricketBettingData(): Observable<any> {
    return this.http.get('/assets/json/cricketListData.json');
  }
  getCricketBet(){
    return this.http.get('/assets/json/cricketListData.json');
  }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof HttpErrorResponse) {
      console.error('Network error:', error.error.message);
      return throwError('Network error: Please check your internet connection.');
    } else {
      // The backend returned an unsuccessful response code.
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
      return throwError('Server error: Please try again later.');
    }
  }
}
