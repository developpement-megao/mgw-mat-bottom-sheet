import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MgwMatBottomSheetComponent } from './mgw-mat-bottom-sheet.component';

describe('MgwMatBottomSheetComponent', () => {
  let component: MgwMatBottomSheetComponent;
  let fixture: ComponentFixture<MgwMatBottomSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MgwMatBottomSheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MgwMatBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
