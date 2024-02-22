import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('mfShopping/ProductModule').then(m => m.ProductsModule),
    },
    {
        path: 'payment',
        loadComponent: () =>
            import('mfPayment/PaymentComponent').then((c) => c.PaymentComponent), // Assuming PaymentComponent is located here
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes), HttpClientModule], // Import HttpClientModule here
    exports: [RouterModule],
})
export class AppRoutingModule { }
