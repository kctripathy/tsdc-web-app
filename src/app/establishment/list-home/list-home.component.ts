import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { fetchEstablishments } from 'src/app/store/icas.actions';
import { selectEstablishments } from 'src/app/store/icas.selectors';

@Component({
  selector: 'app-estb-list-home',
  templateUrl: './list-home.component.html',
  styleUrls: ['./list-home.component.css']
})

export class EstablishmentListHomeComponent implements OnInit {
  isLoading: boolean =  true;
  establishments: any;
  countNotice: number = 0;
  countCircular: number = 0;
  countActivities: number = 0;
  countTenders: number = 0;
  
  constructor(private store: Store) {
  }
   

  ngOnInit(): void {
    this.store.select(selectEstablishments)
              .subscribe((data)=> {
                  if (data && data.length > 0) {
                    this.establishments = data.filter((row: any)=> row.EstbStatusFlag !== 'P');
                    this.countNotice = this.establishments.filter((row: any)=> row.EstbTypeCode === 'N').length;
                    this.countCircular = this.establishments.filter((row: any)=> row.EstbTypeCode === 'C').length;
                    this.countActivities = this.establishments.filter((row: any)=> row.EstbTypeCode === 'I').length;
                    this.countTenders = this.establishments.filter((row: any)=> row.EstbTypeCode === 'T').length;
                    this.isLoading = false;
                  }
                  else {
                    console.log('EstablishmentListHomeComponent > fetchEstablishments dispatch');
                    this.isLoading = true;
                    this.store.dispatch(fetchEstablishments());
                  }
                })
  }
}
