import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient, private router: Router) { }

  login(email: string, password: string): Observable<Object> {
    return this.http.post(`${this.apiUrl}/login`, { email, password }, { withCredentials: true });
  }

  logout() {
    document.cookie = 'ICA Json Web Token=; Expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=localhost; path=/;';
    this.router.navigate(['/connexion']);
  }

  getToken(): string | null {
    const token = document.cookie.split(';').find(row => row.startsWith('ICA Json Web Token='))?.split('=')[1];
    return token || null;
  }
}
