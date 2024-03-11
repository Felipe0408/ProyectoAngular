import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarSideAComponent } from './side-bar-side-a.component';

describe('SideBarSideAComponent', () => {
  let component: SideBarSideAComponent;
  let fixture: ComponentFixture<SideBarSideAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideBarSideAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideBarSideAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
