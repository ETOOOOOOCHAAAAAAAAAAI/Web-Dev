import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumItemComponentComponent } from './album-item-component.component';

describe('AlbumItemComponentComponent', () => {
  let component: AlbumItemComponentComponent;
  let fixture: ComponentFixture<AlbumItemComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlbumItemComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumItemComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
