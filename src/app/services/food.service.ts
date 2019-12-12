import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Meal} from '../ui/common/domain/Meal';
import {environment} from '../../environments/environment';

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

  private URL= environment.URI + "/api/foods/";

  constructor(private http: HttpClient) { }

  public getAllFoods(){
      return this.http.get(this.URL);
  }
}
