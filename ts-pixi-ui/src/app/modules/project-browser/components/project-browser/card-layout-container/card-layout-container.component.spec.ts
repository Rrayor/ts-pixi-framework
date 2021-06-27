import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLayoutContainerComponent } from './card-layout-container.component';

describe('CardLayoutContainerComponent', () => {
  let component: CardLayoutContainerComponent;
  let fixture: ComponentFixture<CardLayoutContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardLayoutContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardLayoutContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
