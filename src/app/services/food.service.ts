import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  
  private URL="http://localhost:8080/api/food/findallfood"

  constructor(private http: HttpClient) { }

  public getAllFoods(){
      return this.http.get(this.URL);
  }
}
