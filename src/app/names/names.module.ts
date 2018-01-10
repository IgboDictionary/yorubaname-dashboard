import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { NamesRoutingModule } from './names-routing.module';
import { AddNameComponent } from './add-name.component';
import { NameListComponent } from './name-list.component';
import { PublishedNamesComponent } from './published-names.component';
import { UnpublishedNamesComponent } from './unpublished-names.component';
import { FeedbacksComponent } from './feedbacks.component';
import { SuggestionsComponent } from './suggestions.component';

@NgModule({
  imports: [
    SharedModule,
    NamesRoutingModule
  ],
  declarations: [
    AddNameComponent,
    NameListComponent,
    PublishedNamesComponent,
    UnpublishedNamesComponent,
    FeedbacksComponent,
    SuggestionsComponent
  ]
})
export class NamesModule { }
