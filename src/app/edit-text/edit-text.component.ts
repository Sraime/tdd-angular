import { Component, OnInit } from "@angular/core";

@Component({
  selector: "edit-text",
  templateUrl: "./edit-text.component.html",
  styleUrls: ["./edit-text.component.scss"],
})
export class EditTextComponent implements OnInit {
  public message: string;
  public isEditMode: boolean;

  constructor() {}

  ngOnInit() {
    this.message = "default message";
    this.isEditMode = false;
  }

  changeModeAction() {
    this.isEditMode = !this.isEditMode;
  }
}
