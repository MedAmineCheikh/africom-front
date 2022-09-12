import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListArticleMissionComponent } from './list-article-mission.component';

describe('ListArticleMissionComponent', () => {
  let component: ListArticleMissionComponent;
  let fixture: ComponentFixture<ListArticleMissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListArticleMissionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListArticleMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
