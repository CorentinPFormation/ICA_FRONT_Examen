import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSpecPopUpComponent } from './home-spec-pop-up.component';

describe('HomeSpecPopUpComponent', () => {
  let component: HomeSpecPopUpComponent;
  let fixture: ComponentFixture<HomeSpecPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeSpecPopUpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeSpecPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
