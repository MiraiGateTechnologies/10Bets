import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InplayFootballComponent } from './inplay-football.component';

describe('InplayFootballComponent', () => {
  let component: InplayFootballComponent;
  let fixture: ComponentFixture<InplayFootballComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InplayFootballComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InplayFootballComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
