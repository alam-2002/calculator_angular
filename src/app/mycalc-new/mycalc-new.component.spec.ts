import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MycalcNewComponent } from './mycalc-new.component';

describe('MycalcNewComponent', () => {
  let component: MycalcNewComponent;
  let fixture: ComponentFixture<MycalcNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MycalcNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MycalcNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
