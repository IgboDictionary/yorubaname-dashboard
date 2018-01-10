import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService } from '../services/auth-guard.service';
import { NameListComponent } from './name-list.component';
import { AddNameComponent } from './add-name.component';
import { PublishedNamesComponent } from './published-names.component';
import { UnpublishedNamesComponent } from './unpublished-names.component';
import { FeedbacksComponent } from './feedbacks.component';
import { SuggestionsComponent } from './suggestions.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'all-names',
        pathMatch: 'full'
    },
    {
        path: 'new',
        component: AddNameComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'all-names',
        component: NameListComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'published',
        component: PublishedNamesComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'unpublished',
        component: UnpublishedNamesComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'suggestions',
        component: SuggestionsComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'feedbacks',
        component: FeedbacksComponent,
        canActivate: [AuthGuardService]
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})

export class NamesRoutingModule {}
