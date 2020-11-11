import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-global-message',
  templateUrl: './global-message.component.html',
  styleUrls: ['./global-message.component.css']
})
export class GlobalMessageComponent implements OnInit {

  public message: string;
  public isEditMode: boolean;

  constructor() { }

  ngOnInit() {
    this.message = ""
    this.isEditMode = false;
  }

  changeModeAction() {
    this.isEditMode = !this.isEditMode;
  }

}
