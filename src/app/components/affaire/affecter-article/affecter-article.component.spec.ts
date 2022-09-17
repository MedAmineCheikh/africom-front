import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffecterArticleComponent } from './affecter-article.component';

describe('AffecterArticleComponent', () => {
  let component: AffecterArticleComponent;
  let fixture: ComponentFixture<AffecterArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffecterArticleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffecterArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
