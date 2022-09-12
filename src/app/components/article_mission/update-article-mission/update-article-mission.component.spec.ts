import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateArticleMissionComponent } from './update-article-mission.component';

describe('UpdateArticleMissionComponent', () => {
  let component: UpdateArticleMissionComponent;
  let fixture: ComponentFixture<UpdateArticleMissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateArticleMissionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateArticleMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
