import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, delay, map, Observable, of, tap, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isUserLoggedIn: boolean = false;
  TOKEN_KEY:any;
  private url ='https://api.1exch.net/login';
  constructor(private http:HttpClient,private router:Router) { }


  login(data:any):Observable<any>{
    this.isUserLoggedIn = data.code == 'Patanahi@123' && data.password == 'Patanahi@123';
    localStorage.setItem('isUserLoggedIn', this.isUserLoggedIn ? "true" : "false"); 
    return of(this.isUserLoggedIn).pipe(
      delay(1000),
      tap((val:any) => { 
         console.log("Is User Authentication is successful: " + val); 
        
      })
   );
  }
//   login(data: any): Observable<any> {
//     return this.http.post<any>(this.url, data).pipe(
//       map((response) => {
//         let token = response.data.jwt.accessToken;
//         sessionStorage.setItem('token', token);
//         return response;
//       }),
//       catchError((error) => {
//         console.error('Error during login:', error);
//         return throwError(error);
//       })
//     );
// }

  // getToken(): string | null {
  //   if (typeof sessionStorage !== 'undefined') {
  //     return sessionStorage.getItem('token');
  //   }
  //   return null;
  // }

  getToken(): string | null {
      if (typeof localStorage !== 'undefined') {
        return localStorage.getItem('isUserLoggedIn');
      }
      return null;
    }

  logOut(){
    this.isUserLoggedIn = false;
    this.router.navigate(['/login']);
    localStorage.removeItem('isUserLoggedIn'); 
  }
  //  logOut() {
  //    sessionStorage.removeItem('token')
  //   this.router.navigate(['/login']);
  //   throw new Error('Method not implemented.');
  // }

}
