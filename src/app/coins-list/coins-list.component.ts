import { Component, OnInit } from '@angular/core';
import { ICoinLight } from '../interfaces/coin-light';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-coins-list',
  templateUrl: './coins-list.component.html',
  styleUrls: ['./coins-list.component.scss']
})
export class CoinsListComponent implements OnInit {

  public coins: ICoinLight[] = [];

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    // Get coins list from service
    this.apiService.getCoinsList().subscribe(list => {
      this.coins = list;
    });
  }


}
