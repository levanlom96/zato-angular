import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ListingComponent } from './pages/listing/listing.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'listing',
        component: ListingComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
