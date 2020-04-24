import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentRoutingModule } from './paymentPlans.routing';
import { FormsModule } from '@angular/forms';
import { PaymentPlanComponent } from './paymentPlans.component';
import { DataTableModule } from 'ng-angular8-datatable';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxSpinnerModule } from "ngx-spinner";
@NgModule({
  imports: [
    CommonModule,
    PaymentRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxSpinnerModule,
    DataTableModule
  ],
  declarations: [
    PaymentPlanComponent,
  ]
})
export class PaymentsModule { }
