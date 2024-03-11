import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar-side-a',
  templateUrl: './side-bar-side-a.component.html',
  styleUrls: ['./side-bar-side-a.component.scss']
})
export class SideBarSideAComponent implements OnInit{
  @Input() ShowRegisterTextchild:any;
  @Input() ShowLoginTextchild:any;

  constructor() {}
  ngOnInit() {}
}
