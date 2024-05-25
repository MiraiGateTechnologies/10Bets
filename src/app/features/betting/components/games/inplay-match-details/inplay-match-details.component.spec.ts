import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InplayMatchDetailsComponent } from './inplay-match-details.component';

describe('InplayMatchDetailsComponent', () => {
  let component: InplayMatchDetailsComponent;
  let fixture: ComponentFixture<InplayMatchDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InplayMatchDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InplayMatchDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
