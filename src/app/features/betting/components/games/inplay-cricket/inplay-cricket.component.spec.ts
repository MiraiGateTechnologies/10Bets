import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InplayCricketComponent } from './inplay-cricket.component';

describe('InplayCricketComponent', () => {
  let component: InplayCricketComponent;
  let fixture: ComponentFixture<InplayCricketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InplayCricketComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InplayCricketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
