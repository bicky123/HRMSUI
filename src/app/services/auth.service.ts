import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private helper: JwtHelperService;
  constructor() {
    this.helper = new JwtHelperService();
  }

  public login(token: string): boolean {
    if (token) {
      if (!this.helper.isTokenExpired(token)) {
        localStorage.setItem('token', token);
        return true;
      }
    }
    return false;
  }

  public getUserRoles(): string[] {
    const token: string | null = localStorage.getItem('token');
    let decodedToken = this.helper.decodeToken(token ? token.toString() : '');
    let role: string | null = decodedToken && decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'] ? decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'] : null;
    const roles: string[] = role && role.length > 0 ? role.toLowerCase().split(',') : [];
    return roles;
  }

  public getUserId(): string {
    const token: string | null = localStorage.getItem('token');
    let decodedToken = this.helper.decodeToken(token ? token.toString() : '');
    return decodedToken ? decodedToken['jti'] : '';
  }

  public getUserToken(): string | null {
    return localStorage.getItem('token');
  }

  public isUserLoggedIn(): boolean {
    const token: string | null = localStorage.getItem('token');
    return !this.helper.isTokenExpired(token ? token.toString() : '');
  }

  public logout(): boolean {
    localStorage.clear();
    return true;
  }

}
