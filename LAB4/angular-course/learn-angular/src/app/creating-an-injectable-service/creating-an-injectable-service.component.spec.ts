import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatingAnInjectableServiceComponent } from './creating-an-injectable-service.component';

describe('CreatingAnInjectableServiceComponent', () => {
  let component: CreatingAnInjectableServiceComponent;
  let fixture: ComponentFixture<CreatingAnInjectableServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatingAnInjectableServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatingAnInjectableServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
