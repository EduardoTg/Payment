import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullLayoutComponent } from './layouts/full-layout.component';

export const routes: Routes = [

    {
        path: '',
        redirectTo: 'PaymentPlans',
        pathMatch: 'full'

    },
    {
        path: '',
        component: FullLayoutComponent,
        data: {
            title: 'Inicio'
        },
        children: [
            {
                path: 'PaymentPlans',
                loadChildren: './paymentPlans/paymentPlans.module#RequisicionesCapturistaModule'
            },
        ]

    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }