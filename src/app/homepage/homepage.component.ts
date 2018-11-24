import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CallAPIService } from '../service/call-api.service';
// import 'rxjs/add/observable/forkJoin';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/concatMap';
// import 'rxjs/add/operator/toPromise';
// import 'rxjs/Rx';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  public temp = [];

  constructor(private api: CallAPIService) { }

  ngOnInit() {
    // const params = new HttpParams().set('keywords', 'bangkokpost')
    // .set('fromDate', '2018-02-22').set('toDate', '2018-02-23');

    // this.http.get<Data[]>(this.getFrequency, {params})
    // console.log(this.getResult);
    console.log('Init');
    this.api.getAssociationRank().subscribe( data => console.log(data));
  }

}
