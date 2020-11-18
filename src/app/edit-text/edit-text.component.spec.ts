import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { By } from "@angular/platform-browser";

import { EditTextComponent } from "./edit-text.component";
describe("TestMessageComponent", () => {
  let component: EditTextComponent;
  let fixture: ComponentFixture<EditTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditTextComponent],
      imports: [FormsModule],
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

  describe("ngOnInit()", () => {
    it("should have a message initilized default message", () => {
      component.ngOnInit();
      expect(component.message).toEqual("default message");
    });

    it("should be in visualisation mode by default", () => {
      component.ngOnInit();
      expect(component.isEditMode).toEqual(false);
    });
  });

  describe("visualisation", () => {
    beforeEach(() => {
      fixture.detectChanges();
    });

    it("should not display an empty message", async(() => {
      component.message = "";
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        const message = fixture.debugElement.query(By.css(".message"));
        expect(message).toBeFalsy();
      });
    }));

    it('should display "hello" message', async(() => {
      component.message = "hello";
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        const message = fixture.debugElement.query(By.css(".message"));
        expect(message.nativeElement.textContent).toEqual("hello");
      });
    }));

    it('should display "world" message', async(() => {
      component.message = "world";
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        const message = fixture.debugElement.query(By.css(".message"));
        expect(message.nativeElement.textContent).toEqual("world");
      });
    }));

    it("should have an edit button", async(() => {
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        const btn = fixture.debugElement.query(By.css(".btn-mode"));
        expect(btn.nativeElement.textContent.includes("modify")).toBeTruthy();
      });
    }));

    it("should not have the input displayed", async(() => {
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        const input = fixture.debugElement.query(By.css(".input-msg"));
        expect(input).toBeFalsy();
      });
    }));

    it("should switch to edit mode after clicking on button", async(() => {
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        const btn = fixture.debugElement.query(By.css(".btn-mode"));
        btn.nativeElement.click();
        expect(component.isEditMode).toEqual(true);
      });
    }));
  });

  describe("edition", () => {
    beforeEach(() => {
      fixture.detectChanges();
      component.isEditMode = true;
    });

    it("should have a save button", async(() => {
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        const btn = fixture.debugElement.query(By.css(".btn-mode"));
        expect(btn.nativeElement.textContent.includes("save")).toBeTruthy();
      });
    }));

    it('should have an input with filled with "hello"', async(() => {
      component.message = "hello";
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        const input = fixture.debugElement.query(By.css(".input-msg"));
        expect(input.nativeElement.value).toEqual("hello");
      });
    }));

    it('should have an input with filled with "world"', async(() => {
      component.message = "world";
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        const input = fixture.debugElement.query(By.css(".input-msg"));
        expect(input.nativeElement.value).toEqual("world");
      });
    }));

    it("should not have the message displayed", async(() => {
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        const input = fixture.debugElement.query(By.css(".message"));
        expect(input).toBeFalsy();
      });
    }));

    it("should switch to visualisation mode after clicking on button", async(() => {
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        const btn = fixture.debugElement.query(By.css(".btn-mode"));
        btn.nativeElement.click();
        expect(component.isEditMode).toEqual(false);
      });
    }));

    it("should save the message after clicking on save button", async(() => {
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        const btn = fixture.debugElement.query(By.css(".btn-mode"));
        const input = fixture.debugElement.query(By.css(".input-msg"));
        input.nativeElement.value = "hello";
        input.nativeElement.dispatchEvent(new Event("input"));
        btn.nativeElement.click();
        expect(component.message).toEqual("hello");
      });
    }));
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
