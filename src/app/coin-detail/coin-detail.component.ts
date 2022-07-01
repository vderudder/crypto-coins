import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICoin } from '../interfaces/coin';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-coin-detail',
  templateUrl: './coin-detail.component.html',
  styleUrls: ['./coin-detail.component.scss']
})
export class CoinDetailComponent implements OnInit {

  public coin?: ICoin;
  public isError: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    // Get id from route url
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      // Call api service with id from url
      this.apiService.getCoinById(id).subscribe({
        // Success call, get data
        next: (coin) => {
          this.coin = {
            id: coin.id,
            name: coin.name,
            image: coin.image.thumb,
            price: coin.market_data.current_price.usd,
            rank: coin.coingecko_rank,
            score: coin.coingecko_score,
            description: coin.description.en,
            link1: coin.links.homepage[0],
            link2: coin.links.blockchain_site[0],
            platform: coin.asset_platform_id
          }

        },
        error: () => {
          // Set error to true to show Error State template 
          this.isError = true;
        }
      });

    };

  };

}
