import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Meal} from '../ui/common/domain/Meal';
import {environment} from 'src/environments/environment';

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
  private URL = environment.URI + '/api/menu/';

  constructor(private http: HttpClient) {
  }

  save(meal: Meal[]) {
    return this.http.post<Meal>(this.URL + 'save', meal, httpOptions);
  }

  getMenu(name: string) {
    return this.http.get(this.URL + name);
  }

  getAllMenus() {
    return this.http.get(this.URL + 'findallMenu');
  }

  getAllFoodOfMenuAndDay(day: string, time: string, menuTitle: string) {
    return this.http.get(this.URL + menuTitle + '/' + day + '/' + time);
  }

  getTodayMenu() {
    return this.http.get(this.URL);
  }
  getTitleOfCurrentMenu(){
    return this.http.get(this.URL + "title");
  }
}
