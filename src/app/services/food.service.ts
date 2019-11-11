import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
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
export class FoodService {

  private URL="http://localhost:8080/api/food/"

  constructor(private http: HttpClient) { }

  public getAllFoods(){
      return this.http.get(this.URL + "findallfood");
  }
}
