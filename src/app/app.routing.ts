import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullLayoutComponent } from './layouts/full-layout.component';

export const routes: Routes = [

    {
        path: '',
        component: FullLayoutComponent,
        children: [
            {
                path: 'PaymentPlans',
                loadChildren: './paymentPlans/paymentPlans.module#PaymentsModule'
            },
        ]

    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }