import { Component, OnInit, ViewChild, AfterViewInit  } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit, AfterViewInit {

  @ViewChild(ChildComponent) child!: ChildComponent;
  message: string = ''
  constructor() {  }
  ngAfterViewInit(): void {
    this.message = this.child.message
  }

  ngOnInit(): void {

  }

}
