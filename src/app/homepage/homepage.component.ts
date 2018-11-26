import { Component, OnInit } from '@angular/core';
import { APIService } from '../service/api.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  panelOpenState = false;
  objKeys: any[];
  myIndusList: any[];
  mostCovList: any[];
  searchList: any[];
  searchForm: FormGroup;
  isSearch = false;

  constructor(private api: APIService, private router: Router, private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      searchCtrl: ['']
    });
  }

  my_indus = [
    {
    concept: 'trade'
  },
  {
    concept: 'acq'
  }
];

  ngOnInit() {

    this.get_myindus('trade', '2018-11-24');
    this.get_myindus('acq', '2018-11-24');
    this.get_mostCovered('2018-11-25');
  }
  get_myindus(concept, date) {
    this.api.get_conceptByNameDate(concept, date).subscribe(
      (res: any) => {
        this.myIndusList = res;
        this.objKeys = Object.keys(this.myIndusList).map(index => {
          const data = this.myIndusList[index];
          // console.log(data.url);
          return data;
        });
      }
    );
  }
  get_search() {
    this.isSearch = true;
    this.api.get_conceptByNameDate(this.searchForm.value.searchCtrl, '2018-11-25').subscribe(
      (res: any) => {
        this.searchList = res;
        this.objKeys = Object.keys(this.searchList).map(index => {
          const data = this.searchList[index];
          return data;
        });
        });
      }

  get_mostCovered(date) {
    this.api.get_bydate(date).subscribe(
      (res: any) => {
        // this.mostCovList = res;
        this.objKeys = Object.keys(res).map(index => {
          const data = res[index];
          // console.log(data);
          this.objKeys = Object.keys(data).map(index2 => {
            const data2 = data[index2];
            // console.log(data2.concpets);
            this.objKeys = Object.keys(data2.concpets).map(index3 => {
              const data3 = data2.concpets[index3];
              // console.log(data3.label);
            });
          });
        });
      }
    );
  }

}
