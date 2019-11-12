import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private baseUrl : String = environment.baseUrl
  public siteUrl = 'index.php/BookApi/';
  constructor(
    //instance for http client
    private http: HttpClient
  ) { }

  // for post request
  post(Url: String ,UserData: any){
    const header = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
    return this.http.post(this.baseUrl+this.siteUrl+Url,UserData,{headers: header})
  }
  // for get request
  get(Url: String){
    const header = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
    return this.http.get(this.baseUrl+this.siteUrl+Url,{headers: header})
  }
  // for put request
  put(Url: String ,UserData: any){
    const header = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
    return this.http.put(this.baseUrl+this.siteUrl+Url,UserData,{headers: header})
  }
  // for delete request
  delete(Url: String ,UserData: any){
    const header = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
    return this.http.delete(this.baseUrl+this.siteUrl+Url,{headers: header})
  }
}
