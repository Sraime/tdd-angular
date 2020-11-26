import { Output } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";

import { EditTextComponent } from "./edit-text.component";

describe("EditTextComponent", () => {
  let component: EditTextComponent;
  let fixture: ComponentFixture<EditTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditTextComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  describe("Visualisation", () => {
    it('should have the default message "default message" displayed', () => {
      const message = fixture.debugElement.query(By.css(".message"));
      expect(message.nativeElement.textContent).toEqual("default message");
    });

    it("should have the configured message displayed", async(() => {
      component.message = "hello";
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        const message = fixture.debugElement.query(By.css(".message"));
        expect(message.nativeElement.textContent).toEqual("hello");
      });
    }));

    it('should have the button "modify" displayed', () => {
      const btn = fixture.debugElement.query(By.css(".btn-modify"));
      expect(btn).toBeTruthy();
    });

    it("should switch to edit mode after clicking on the button modify", async(() => {
      const btn = fixture.debugElement.query(By.css(".btn-modify"));
      btn.nativeElement.click();
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        expect(component.isEditMode).toEqual(true);
      });
    }));
  });

  /*
    # Visualisation
      - affichage du message
      - affichage du bouton de modification
      - changement de mode au sur bouton modifier =>  edition(mode edition affiché)
      - initialisation du message par defaut à "default message"

    # Edition
      - affichage de l'input
      - affichage du bouton de sauvegarde
      - changement de mode au sur bouton modifier => visualisation (mode visu avec nouveau message)

  */
});
