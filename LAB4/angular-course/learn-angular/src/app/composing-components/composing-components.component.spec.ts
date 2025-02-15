import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposingComponentsComponent } from './composing-components.component';

describe('ComposingComponentsComponent', () => {
  let component: ComposingComponentsComponent;
  let fixture: ComponentFixture<ComposingComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComposingComponentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComposingComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
