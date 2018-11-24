import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { FrequencyBySource } from '../interface';

@Injectable({
  providedIn: 'root'
})
export class CallAPIService {


  constructor(private http: HttpClient) { }

  getFrequencyBySource() {
    const frequencyUrl = 'https://t5y198i1zi.execute-api.ap-southeast-1.amazonaws.com/prod/getfrequency';
    const params = new HttpParams().set('keywords', 'bangkok')
    .set('fromDate', '2018-02-22').set('toDate', '2018-02-24');
    return this.http.get(frequencyUrl, {params});
    // return of({too: 'bar'});
  }
  getTrend() {
    const trendUrl = 'https://t5y198i1zi.execute-api.ap-southeast-1.amazonaws.com/prod/trendfrequency';
    const params = new HttpParams().set('keywords', 'bangkokpost').set('fromDate', '2018-02-22')
    .set('mvavg', '3').set('toDate', '2018-02-24');
    return this.http.get(trendUrl, {params});
  }
  getAssociationFrequency() {
    const assoFreqUrl = 'https://t5y198i1zi.execute-api.ap-southeast-1.amazonaws.com/prod/associationfrequency';
    const params = new HttpParams().set('keywords', 'bangkok').set('fromDate', '2018-02-22')
    .set('mvavg', '3').set('toDate', '2018-02-24');
    return this.http.get(assoFreqUrl, {params});
  }
  getAssociationDaily() {
    const assoDailyUrl = 'https://t5y198i1zi.execute-api.ap-southeast-1.amazonaws.com/prod/association-daily';
    const params = new HttpParams().set('keywords', 'bangkok').set('fromDate', '2018-02-22')
    .set('toDate', '2018-02-24');
    return this.http.get(assoDailyUrl, {params});
  }
  getAssociationRank() {
    const assoRankUrl = 'https://t5y198i1zi.execute-api.ap-southeast-1.amazonaws.com/prod/association-rank';
    const params = new HttpParams().set('keywords', 'keyword').set('fromDate', '2018-04-23')
    .set('toDate', '2018-04-30').set('r', '5');
    return this.http.get(assoRankUrl, {params});
  }
  getTopRank() {
    const topRankUrl = 'https://t5y198i1zi.execute-api.ap-southeast-1.amazonaws.com/prod/top-rank';
    const params = new HttpParams().set('r', '5');
    return this.http.get(topRankUrl, {params});
  }
}
