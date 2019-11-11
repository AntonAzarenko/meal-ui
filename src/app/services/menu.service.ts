import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Meal} from '../ui/common/domain/Meal';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Headers': 'json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private URL="http://localhost:8080/api/menu/"

  constructor(private http: HttpClient) { }

  save(meal: Meal) {
    return this.http.post<Meal>(this.URL + "save", meal, httpOptions)
  }
}
