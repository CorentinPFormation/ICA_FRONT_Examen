import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHookComponent } from './list-hook.component';

describe('ListHookComponent', () => {
  let component: ListHookComponent;
  let fixture: ComponentFixture<ListHookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListHookComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListHookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
