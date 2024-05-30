import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, map, throwError } from 'rxjs';
import { environment } from '../../../../assets/environment/environment';
import { GameDetails } from '../../../shared/interface/game-details.model';
import { EventData } from '../../../shared/interface/match-details.interface';

@Injectable({
  providedIn: 'root'
})
export class TenBettsService {
  apiUrls =environment.apiUrlIP;
  oddsApiUrls =environment.oddApiUrl;

    private dataSubject = new BehaviorSubject<any>(null);
    public data$ = this.dataSubject.asObservable();

  constructor(private http: HttpClient) { }

  // Fetch cricket game list from the API
   getGamesBet(): Observable<GameDetails> {
    const url = `${this.apiUrls}/api/v1/gameList`;
    return this.http.get<GameDetails>(url);
  }

    // Method to update the data
    updateData(data: any): void {
      this.dataSubject.next(data);
    }

  getDataByMatchCode(matchCode: string): Observable<EventData> {
    const url = `${this.oddsApiUrls}/api/v2/odds/fetch/${matchCode}`
    return this.http.get<EventData>(url).pipe(
      catchError(this.handleError)
    );
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
