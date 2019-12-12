import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  GET_API ='https://www.googleapis.com/books/v1/volumes?q=';
  GET_1 ='https://www.googleapis.com/books/v1/volumes/';
  
  private messageSource = new BehaviorSubject('');
  currentMessage = this.messageSource.asObservable()

  constructor(private _http: HttpClient) { }
  changeMessage(message: string) {
    this.messageSource.next(message)
  }
  GET_ALL(value) {
    return this._http.get<any>(this.GET_API+value+'&maxResults=20')
  }
  GET_ONE(value) {
    return this._http.get<any>(this.GET_1+value)
  }

}
