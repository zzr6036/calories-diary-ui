import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodrecordPage } from './foodrecord.page';

describe('FoodrecordPage', () => {
  let component: FoodrecordPage;
  let fixture: ComponentFixture<FoodrecordPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodrecordPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodrecordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
