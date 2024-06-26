import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HookFormComponent } from './hook-form.component';

describe('HookFormComponent', () => {
  let component: HookFormComponent;
  let fixture: ComponentFixture<HookFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HookFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HookFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
