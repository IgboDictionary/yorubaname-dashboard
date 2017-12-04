import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SimpleLayoutComponent } from './layouts/simple-layout.component';
import { LoginComponent } from './auth/login.component';
import { PageNotFoundComponent } from './page-not-found.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent
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
