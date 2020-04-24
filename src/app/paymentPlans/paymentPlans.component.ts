import { Component, OnInit } from '@angular/core';
import { RequisicionService } from '../servicios/payment.service'
import { Router, NavigationExtras } from '@angular/router'
import { NgxSpinnerService } from "ngx-spinner"
import swal from 'sweetalert2';

@Component({
  selector: 'app-requisiciones',
  templateUrl: './paymentPlans.component.html',
  styleUrls: ['./style.scss']
})
export class PaymentPlanComponent implements OnInit {
  listPayment: any = []
  searchTerm: any

  constructor(private router: Router, private requisicionService: RequisicionService, private spinner: NgxSpinnerService) {

  }

  ngOnInit() {
    this.getData()
  }

  getData() {
    this.spinner.show()
    this.requisicionService.get()
      .subscribe(res => {
        this.listPayment = res
      })

      setTimeout(()=>{    
        this.spinner.hide()
   }, 1500);
  }

}