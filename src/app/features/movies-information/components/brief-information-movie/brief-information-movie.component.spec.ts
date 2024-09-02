import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BriefInformationMovieComponent } from './brief-information-movie.component';

describe('BriefInformationMovieComponent', () => {
  let component: BriefInformationMovieComponent;
  let fixture: ComponentFixture<BriefInformationMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BriefInformationMovieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BriefInformationMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
