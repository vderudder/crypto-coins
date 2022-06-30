import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient
  ) { }


  getCoinsList() {
    return this.httpClient.get("https://api.coingecko.com/api/v3/coins/list");
  }

  getCoinById(id: string) {
    return this.httpClient.get(`https://api.coingecko.com/api/v3/coins/${id}`);
  }


}
