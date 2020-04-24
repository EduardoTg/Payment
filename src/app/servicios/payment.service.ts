import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { of } from 'rxjs';
@Injectable()
export class RequisicionService {

  constructor(public http: Http) {

  }

  paymentList: Array<object> = [
    { title: 'Plan A', deposit: 9, plans: 7,install :8, payors : 56, createdBy : 'Kelly', createdOn : '09/16/2019' },
    { title: 'Plan B', deposit: 15, plans: 6,install :2, payors : 40, createdBy : 'Scott', createdOn : '09/16/2019' },
    { title: 'Plan C', deposit: 20, plans: 12,install :12, payors : 24, createdBy : 'Chris', createdOn : '09/16/2019' },
    { title: 'Plan D', deposit: 300, plans: 3,install :4, payors : 1, createdBy : 'Emily', createdOn : '09/16/2019' },
  ];


  get() {
    return of(this.paymentList);
  }
}