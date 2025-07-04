import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DecideComponent } from './decide'; // Correct import path and name
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

describe('DecideComponent', () => { // Describe the correct component name
  let component: DecideComponent;
  let fixture: ComponentFixture<DecideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        FormsModule,
        RouterLink,
        DecideComponent // Import the standalone component directly
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DecideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});