import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientTestingModule, HttpTestingController  } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { By } from '@angular/platform-browser';
import {of} from 'rxjs';
import {delay} from 'rxjs/operators';
import { RequestService } from '../servicios/request.service';
import { User,LoginResponse } from 'src/types';
import { Data } from '@angular/router';

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

  it('login request should be called', fakeAsync(() => {
    const fixture = TestBed.createComponent(LoginComponent);
   spyOn(request, 'loginRequest').and.callThrough
    let loginElement = fixture.debugElement.query(By.css('form'));;
    loginElement.triggerEventHandler('ngSubmit', null);

    expect(request.loginRequest).toHaveBeenCalledTimes(1);

}));


});
