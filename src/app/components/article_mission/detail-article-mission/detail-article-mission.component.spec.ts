import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailArticleMissionComponent } from './detail-article-mission.component';

describe('DetailArticleMissionComponent', () => {
  let component: DetailArticleMissionComponent;
  let fixture: ComponentFixture<DetailArticleMissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailArticleMissionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailArticleMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
