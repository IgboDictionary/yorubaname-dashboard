import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SimpleLayoutComponent } from './layouts/simple-layout.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { DashboardComponent } from './dashboard.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'auth',
        component: SimpleLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: 'app/auth/auth.module#AuthModule'
            }
        ]
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(
        routes,
        { enableTracing: true }) // For debugging only
    ],
    exports: [ RouterModule ]
})

export class AppRouting {}
