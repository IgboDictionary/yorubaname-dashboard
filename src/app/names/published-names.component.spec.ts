import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishedNamesComponent } from './published-names.component';

describe('PublishedNamesComponent', () => {
  let component: PublishedNamesComponent;
  let fixture: ComponentFixture<PublishedNamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublishedNamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishedNamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
