import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnpublishedNamesComponent } from './unpublished-names.component';

describe('UnpublishedNamesComponent', () => {
  let component: UnpublishedNamesComponent;
  let fixture: ComponentFixture<UnpublishedNamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnpublishedNamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnpublishedNamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
