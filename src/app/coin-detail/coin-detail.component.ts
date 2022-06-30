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

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    // Get id from route url
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      // Call api service with id from url
      this.apiService.getCoinById(id).subscribe(coin => {
        // Get coin necessary coin info for detail
        this.coin = {
          id: coin.id,
          name: coin.name,
          image: coin.image.thumb,
          price: coin.market_data.current_price.usd,
          rank: coin.coingecko_rank,
          score: coin.coingecko_score,
          link1: coin.links.homepage,
          link2: coin.links.blockchain_site[0],
          platform: coin.tickers[0].market.name
        };
      });
    };

  };

}
