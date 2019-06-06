import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ComplexMessageComponent } from './complex-message.component';
import { MessageService } from '../message.service'
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

describe('GlobalMessageComponent', () => {
  let component: ComplexMessageComponent;
  let fixture: ComponentFixture<ComplexMessageComponent>;
  let messageService: MessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplexMessageComponent ],
      providers: [MessageService],
      imports: [FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplexMessageComponent);
    component = fixture.componentInstance;
    messageService = TestBed.get(MessageService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a message', () => {
    expect(component.message).toBeDefined;
  });

  it('should have an empty default message', () => {
    expect(component.message).toEqual('');
  });

  it('should have an modify mode option', () => {
    expect(component.isChangeModeActive).toBeDefined;
  });

  describe('ngOnInit', () => {
    
    let spyGetMessage;
    let msg: string;

    beforeEach(() => {
      spyGetMessage = spyOn(messageService, 'getMessage');
      msg = "My message !";
      spyGetMessage.and.returnValue(msg);
    });

    it('should take the message from the service', () => {
      component.ngOnInit();
      expect(component.message).toEqual(msg);
    });


    it('should have change mode to false by default', () => {
      component.ngOnInit();
      expect(component.isChangeModeActive).toEqual(false);
    });

    it('should have a change mode option', async(() => {
      component.ngOnInit();
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        let button = fixture.debugElement.queryAll(By.css('#btn-change-mode'));
        expect(button[0].nativeElement.textContent).toEqual("modify");
      })
    }));
  });

  describe('changeModeAction', () => {

    it('should change mode to active after using clicking mode button', () => {
      component.isChangeModeActive = false;
      component.changeModeAction();
      expect(component.isChangeModeActive).toEqual(true);
    });

    it('should change mode to display after using clicking mode button when it is active', () => {
      component.isChangeModeActive = true;
      component.changeModeAction();
      expect(component.isChangeModeActive).toEqual(false);
    });
  });

  describe('edit mode disabled', () => {
    
    let msg: string;

    beforeEach(() => {
      msg = "My message !";
    });

    it('should display the message if it is not empty)',async(() => {
      fixture.detectChanges();
      component.message = msg;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        let msgDialog = fixture.debugElement.queryAll(By.css('#msg-dialog'));
        expect(msgDialog[0].nativeElement.textContent).toEqual(msg);
      })
    }));

    it('should not display edit input', async(() => {
      fixture.whenStable().then(() => {
        let input = fixture.debugElement.queryAll(By.css('#tbx-message'));
        expect(input.length).toEqual(0);
      })
    }));
  });

  describe('edit mode active', () => {

    let spyGetMessage;
    let msg: string;

    beforeEach(() => {
      msg = "My message !";
      fixture.detectChanges(); // si un detectChange n'est pas fait au début de chaque test, le ngIf ne marche pas
      component.isChangeModeActive = true;
    });

    it('should display an input and change text of the button', async(() => {
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        let button = fixture.debugElement.queryAll(By.css('#btn-change-mode'));
        let input = fixture.debugElement.queryAll(By.css('#tbx-message'));
        expect(button[0].nativeElement.textContent).toEqual('save');
        expect(input.length).toEqual(1);
      })
    }));
    
    it('should have the input filled with the globale message', async(() => {
      component.message = msg;// si le detectChanges est dans le whenStable ça ne fonctionne pas
      fixture.detectChanges(); 
      fixture.whenStable().then(() => {
        let input = fixture.debugElement.query(By.css('#tbx-message'));
        expect(input.nativeElement.value).toEqual(msg);
      })
    }));
    
    it('should save the message when editing', async(() => { // attention à bien utiliser la FONCTION async() => @angular/core/testing'
                                                              // !! ce n'est pas la même chose que le keyword async !!
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        let input = fixture.debugElement.query(By.css('#tbx-message'));
        input.nativeElement.value = msg;
        input.nativeElement.dispatchEvent(new Event('input')); // permet de mettre à jour la var du component associée au ngModel
                                                              // template => component
                                                              // à faire pour n'importe quel type event (blur, focus, ...)
        expect(component.message).toEqual(msg);
      })
    }));

    it('should not display the message', async(() => {
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        let message = fixture.debugElement.queryAll(By.css('#msg-dialog'));
        expect(message.length).toEqual(0);
      })
    }));
  });
});
