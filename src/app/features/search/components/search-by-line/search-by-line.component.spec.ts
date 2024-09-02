import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByLineComponent } from './search-by-line.component';

describe('SearchByLineComponent', () => {
  let component: SearchByLineComponent;
  let fixture: ComponentFixture<SearchByLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchByLineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchByLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
