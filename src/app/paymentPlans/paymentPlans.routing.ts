import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PaymentPlanComponent} from './paymentPlans.component';
export const routes: Routes = [
    
    {
        path:'',
        component:PaymentPlanComponent,
        data:{
            title:'Requisiciones'
        },
    }
    
    ];
    
    @NgModule({
        imports:[RouterModule.forChild(routes)],
        exports:[RouterModule]
    })
    export class RequisicionesCapturistaRoutingModule{}