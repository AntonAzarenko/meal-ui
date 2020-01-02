import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Filter} from '../ui/common/domain/Filter';

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

  private URL = environment.URI + '/api/foods/';

  constructor(private http: HttpClient) {
  }

  public getAllFoods() {
    return this.http.get(this.URL);
  }

  getFoodsByFilter(filter: Filter) {
    return this.http.post(this.URL + 'filter/', filter);
  }
}
