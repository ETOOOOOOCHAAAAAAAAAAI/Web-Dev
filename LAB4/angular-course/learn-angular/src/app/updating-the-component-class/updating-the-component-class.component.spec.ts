import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatingTheComponentClassComponent } from './updating-the-component-class.component';

describe('UpdatingTheComponentClassComponent', () => {
  let component: UpdatingTheComponentClassComponent;
  let fixture: ComponentFixture<UpdatingTheComponentClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatingTheComponentClassComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatingTheComponentClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
