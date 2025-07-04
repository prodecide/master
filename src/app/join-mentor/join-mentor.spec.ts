import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinMentor } from './join-mentor';

describe('JoinMentor', () => {
  let component: JoinMentor;
  let fixture: ComponentFixture<JoinMentor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JoinMentor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoinMentor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
