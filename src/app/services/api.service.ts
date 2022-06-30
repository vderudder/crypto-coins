import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICoinLight } from '../interfaces/coin-light';
import { ICoin } from '../interfaces/coin';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient
  ) { }


  /**
   * Calls api to get coins list
   * @returns Coins list
   */
  getCoinsList() {
    return this.httpClient.get<ICoinLight[]>("https://api.coingecko.com/api/v3/coins/list");
  }

  /**
   * Calls api to get coin by id
   * @param id Coin identifier
   * @returns Coin detail info
   */
  getCoinById(id: string) {
    return this.httpClient.get<any>(`https://api.coingecko.com/api/v3/coins/${id}`);
  }


}
