import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarSideBComponent } from './side-bar-side-b.component';

describe('SideBarSideBComponent', () => {
  let component: SideBarSideBComponent;
  let fixture: ComponentFixture<SideBarSideBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideBarSideBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideBarSideBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
