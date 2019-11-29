import {Injectable} from '@angular/core';
import {IAwesome} from './iawesome';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AwesomeService {

  url = 'http://localhost:3000/awesomes';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<IAwesome[]> {
    return this.http.get<IAwesome[]>(this.url);
  }

  findById(id: number): Observable<IAwesome> {
    return this.http.get<IAwesome>(this.url + '/' + id);
  }

  destroy(id: number): Observable<IAwesome> {
    return this.http.delete<IAwesome>(this.url + '/' + id);
  }

  update(id: number, value: IAwesome): Observable<IAwesome> {
    return this.http.put<IAwesome>(this.url + '/' + id, value);
  }

  create(awesome: IAwesome): Observable<IAwesome> {
    return this.http.post<IAwesome>(this.url + '/', awesome);
  }
}
