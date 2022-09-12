import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAffaireComponent } from './detail-affaire.component';

describe('DetailAffaireComponent', () => {
  let component: DetailAffaireComponent;
  let fixture: ComponentFixture<DetailAffaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailAffaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailAffaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
