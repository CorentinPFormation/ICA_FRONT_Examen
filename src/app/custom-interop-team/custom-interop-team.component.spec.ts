import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomInteropTeamComponent } from './custom-interop-team.component';

describe('CustomInteropTeamComponent', () => {
  let component: CustomInteropTeamComponent;
  let fixture: ComponentFixture<CustomInteropTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomInteropTeamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomInteropTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
