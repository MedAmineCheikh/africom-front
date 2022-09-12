import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddArticleMissionComponent } from './add-article-mission.component';

describe('AddArticleMissionComponent', () => {
  let component: AddArticleMissionComponent;
  let fixture: ComponentFixture<AddArticleMissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddArticleMissionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddArticleMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
