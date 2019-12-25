import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Meal} from '../ui/common/domain/Meal';
import {Booker} from '../ui/common/domain/Booker';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Headers': 'json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class BookerService {

  private bookerUrl = environment.URI + '/api/booker/';

  constructor(private http: HttpClient) {
  }

  save(booker: Booker) {
    console.log(booker); //TODO remove
    return this.http.post<Meal>(this.bookerUrl, booker, httpOptions);
  }

  getPrice(category: string) {
    return this.http.get(this.bookerUrl + category);
  }

  getReport(year: number, month: number) {
    return this.http.get(this.bookerUrl + 'report/' + year + '/' + month);
  }

  getCurrentReport(){
    return this.http.get(this.bookerUrl + 'report/');
  }
}
