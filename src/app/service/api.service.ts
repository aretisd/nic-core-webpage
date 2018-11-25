import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class APIService {


  constructor(private http: HttpClient) { }

  // private extractData(res: Response) {
  //   const body = <any[]>res.json().alum;
  //   return body || [];       // here you are return an object
  // }

  get_conceptByDate(): Observable<any[]> {
    // const getConceptByDateUrl = 'https://api-dot-nic-core-2018.appspot.com/concepts/' + date;
    return this.http.get<any[]>('https://api-dot-nic-core-2018.appspot.com/concepts/').pipe(map(res => res));
  }
  get_conceptByNameDate(name, date): Observable<any[]> {
    const getConceptByNameDateUrl = 'https://api-dot-nic-core-2018.appspot.com/concept/' + name + '/' + date;
    return this.http.get<any[]>(getConceptByNameDateUrl).pipe(map(res => res));
  }

  // getFrequencyBySource() {
  //   const frequencyUrl = 'https://t5y198i1zi.execute-api.ap-southeast-1.amazonaws.com/prod/getfrequency';
  //   const params = new HttpParams().set('keywords', 'bangkok')
  //   .set('fromDate', '2018-02-22').set('toDate', '2018-02-24');
  //   return this.http.get(frequencyUrl, {params});
  //   // return of({too: 'bar'});
  // }
  // getTrend() {
  //   const trendUrl = 'https://t5y198i1zi.execute-api.ap-southeast-1.amazonaws.com/prod/trendfrequency';
  //   const params = new HttpParams().set('keywords', 'bangkokpost').set('fromDate', '2018-02-22')
  //   .set('mvavg', '3').set('toDate', '2018-02-24');
  //   return this.http.get(trendUrl, {params});
  // }
  // getAssociationFrequency() {
  //   const assoFreqUrl = 'https://t5y198i1zi.execute-api.ap-southeast-1.amazonaws.com/prod/associationfrequency';
  //   const params = new HttpParams().set('keywords', 'bangkok').set('fromDate', '2018-02-22')
  //   .set('mvavg', '3').set('toDate', '2018-02-24');
  //   return this.http.get(assoFreqUrl, {params});
  // }
  // getAssociationDaily() {
  //   const assoDailyUrl = 'https://t5y198i1zi.execute-api.ap-southeast-1.amazonaws.com/prod/association-daily';
  //   const params = new HttpParams().set('keywords', 'bangkok').set('fromDate', '2018-02-22')
  //   .set('toDate', '2018-02-24');
  //   return this.http.get(assoDailyUrl, {params});
  // }
  // getAssociationRank() {
  //   const assoRankUrl = 'https://t5y198i1zi.execute-api.ap-southeast-1.amazonaws.com/prod/association-rank';
  //   const params = new HttpParams().set('keywords', 'keyword').set('fromDate', '2018-04-23')
  //   .set('toDate', '2018-04-30').set('r', '5');
  //   return this.http.get(assoRankUrl, {params});
  // }
  // getTopRank() {
  //   const topRankUrl = 'https://t5y198i1zi.execute-api.ap-southeast-1.amazonaws.com/prod/top-rank';
  //   const params = new HttpParams().set('r', '5');
  //   return this.http.get(topRankUrl, {params});
  // }
  // get_today() {
  //   const getTodayUrl = 'https://api-dot-nic-core-2018.appspot.com/gettoday/';
  //   return this.http.get(getTodayUrl);
  // }
  // get_bydate(date) {
  //   const getByDateUrl = 'https://api-dot-nic-core-2018.appspot.com/bydate/' + date;
  //   // const params = new HttpParams().set(date);
  //   return this.http.get(getByDateUrl);
  // }
  // get_predict(data) {
  //   const getPredictUrl = 'https://api-dot-nic-core-2018.appspot.com/predict/';
  //   const params = new HttpParams().set('data', data);
  //   return this.http.get(getPredictUrl, {params});
  // }
  // get_allConcept() {
  //   const getAllConceptUrl = 'https://api-dot-nic-core-2018.appspot.com/concepts/';
  //   return this.http.get(getAllConceptUrl);
  // }
  // get_conceptByName(name) {
  //   const getConceptbyNameUrl = 'https://api-dot-nic-core-2018.appspot.com/concepts/' + name;
  //   return this.http.get(getConceptbyNameUrl);
  // }

}
