import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarshipsContainerComponent } from './starships-container.component';

describe('StarshipsContainerComponent', () => {
  let component: StarshipsContainerComponent;
  let fixture: ComponentFixture<StarshipsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarshipsContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarshipsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
