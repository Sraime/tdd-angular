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

  describe("visualisation", () => {
    let btnModify;

    beforeEach(() => {
      btnModify = fixture.debugElement.query(By.css(".btn-modify"));
    });

    it('should display "default message" by default', () => {
      const message = fixture.debugElement.query(By.css(".message"));
      expect(message.nativeElement.textContent).toEqual("default message");
    });

    it('should display the "hello" message', async(() => {
      component.message = "hello";
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        const message = fixture.debugElement.query(By.css(".message"));
        expect(message.nativeElement.textContent).toEqual("hello");
      });
    }));

    it('should display the button "modify"', () => {
      expect(btnModify).toBeTruthy();
    });

    it("should switch to edit mode after clicking on the button", () => {
      btnModify.nativeElement.click();
      expect(component.isEditMode).toEqual(true);
    });
  });

  /*
    Visualisation :
    - message par défaut : "default message"
    - affichage du bouton de modification "modify"
    - affichage du text 
    - changement de mode au clique sur le bouton de modif

    Edition :
    - affiche de l'input
    - affiche du bouton de validation
    - maj du massage à la validation
  */
});
