import { Component, OnInit, Directive, HostListener, ElementRef } from '@angular/core';
import { APIService } from '../service/api.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  panelOpenState = false;

  constructor(private api: APIService, private el: ElementRef, private router: Router) { }

  objKeys: any[];
  lists: any[];

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
  }
  get_myindus(concept, date) {
    this.api.get_conceptByNameDate(concept, date).subscribe(
      (res: any) => {
        this.lists = res;
        this.objKeys = Object.keys(this.lists).map(index => {
          const data = this.lists[index];
          console.log(data.url);
          return data;
        });
      }
    );
  }

}
