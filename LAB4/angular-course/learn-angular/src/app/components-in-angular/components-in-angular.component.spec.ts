import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsInAngularComponent } from './components-in-angular.component';

describe('ComponentsInAngularComponent', () => {
  let component: ComponentsInAngularComponent;
  let fixture: ComponentFixture<ComponentsInAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentsInAngularComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentsInAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
