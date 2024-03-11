import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar-side-b',
  templateUrl: './side-bar-side-b.component.html',
  styleUrls: ['./side-bar-side-b.component.scss']
})
export class SideBarSideBComponent implements OnInit{
  @Input() FormType: String | undefined;

  constructor() {}
  ngOnInit() {}

}
