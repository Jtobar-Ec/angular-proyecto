import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Datos } from '../data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = "http://localhost:3000/api";
  private dataUrl: string = "assets/data/inf.json";
  private URL_us= "http://localhost:3000/api/api";


  constructor(private http: HttpClient, private router: Router) { }

  signUp(user: any) {
    return this.http.post<any>(this.URL+'/signup', user);
  }

  signIn(user: any) {
    return this.http.post<any>(this.URL+'/signin', user);
  }

  loggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/signin']);
  }

  getTasks(): Observable<Datos[]> {
    return this.http.get<Datos[]>(this.dataUrl);
  }


  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.URL_us);
  }

  getUser(userId: string): Observable<any> {
    return this.http.get<any>(`${this.URL_us}/${userId}`);
  }

  updateUser(userId: string, userData: any): Observable<any> {
    return this.http.put(`${this.URL_us}/${userId}`, userData);
  }
}
