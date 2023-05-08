import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';
import {of} from 'rxjs';
import {delay} from 'rxjs/operators';
import { RequestService } from '../servicios/request.service';
import { User,LoginResponse } from 'src/types';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let request: RequestService;
  let user: User;
  let accessToken:string;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
        HttpClientTestingModule
      ],
      declarations: [ LoginComponent ],
      providers: [ RequestService ]
    })
    
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    request = TestBed.get(RequestService);
    // user = new User();
  });

  it('should exist login component', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('It should return invalid form', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();

    const email = component.formUser.controls['email'];
    email.setValue('grace.hopper@systers.xyz')
    expect(component.formUser.invalid).toBeTrue();
  });

  it('It should return valid form', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();

    const email = component.formUser.controls['email'];
    const password = component.formUser.controls['password']
    email.setValue('grace.hopper@systers.xyz');
    password.setValue('123456');
    expect(component.formUser.invalid).toBeFalse();
  });

  it('On init users should be loaded', fakeAsync(() => {
    // spyOn(request, 'loginRequest').and.returnValue(of([user]).pipe(delay(1)));

    // Trigger ngOnInit()
    fixture.detectChanges();

    // expect(userService.getUsers).toHaveBeenCalledWith();

    // Simulates the asynchronous passage of time
    tick(1);

    // expect(component.loading).toBeFalsy();
    // expect(component.users).toEqual([user]);
}));


// it('should emit an event when the button is clicked', fakeAsync(() => {
//   spyOn(component, 'createPostos');
//   const button = fixture.debugElement.query(By.css('button')).nativeElement;
//   const email = component.formUser.controls['email'];
//   const password = component.formUser.controls['password']
//   email.setValue('grace.hopper@systers.xyz');
//   password.setValue('123456');
//   tick();
//   button.click();
//   fixture.detectChanges();
//   expect(component.createPostos).toHaveBeenCalled();
// }));

// it('should disable the button when the form is invalid or loading', () => {
//   component.isFormLoading = true;
//   fixture.detectChanges();
//   const button = fixture.debugElement.query(By.css('button')).nativeElement;
//   expect(button.disabled).toBe(true);

//   component.isFormLoading = false;
//   component.formUser.get('email').setValue('test');
//   component.formUser.get('password').setValue('test123');
//   fixture.detectChanges();
//   expect(button.disabled).toBe(false);
// });

  // it('It should return valid form', () => {
  //   const fixture = TestBed.createComponent(LoginComponent);
  //   const component = fixture.componentInstance;
  //   fixture.detectChanges();

  //   const email = component.formUser.controls['email'];
  //   const password = component.formUser.controls['password']
  //   email.setValue('grace.hopper@systers.xyz');
  //   password.setValue('123456');

  //   const loginButton = fixture.debugElement.query(By.css('button'))
  //   loginButton.nativeElement.click();
  //   const testData = {  }
  //   expect(component.createPostos()).toEqual(testData);
  // })
});
