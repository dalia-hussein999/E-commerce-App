import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingcardComponent } from './shoppingcard.component';

describe('ShoppingcardComponent', () => {
  let component: ShoppingcardComponent;
  let fixture: ComponentFixture<ShoppingcardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShoppingcardComponent]
    });
    fixture = TestBed.createComponent(ShoppingcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
