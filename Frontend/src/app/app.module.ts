import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { VacancyComponent } from './vacancy/vacancy.component';
import { InternshipComponent } from './internship/internship.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import {SignupService} from './signup.service';
import {AuthService} from './auth.service';
import {AuthGuard} from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';
import { VacancyService } from './vacancy.service';
import { InternshipService } from './internship.service';
import { NewvacancyComponent } from './newvacancy/newvacancy.component';
import { NewinternshipComponent } from './newinternship/newinternship.component';
import { UpdatevacancyComponent } from './updatevacancy/updatevacancy.component';
import { UpdateinternshipComponent } from './updateinternship/updateinternship.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ExpertComponent } from './expert/expert.component';
import { StudentComponent } from './student/student.component';
import { NewstudentComponent } from './newstudent/newstudent.component';
import { StudentloginComponent } from './studentlogin/studentlogin.component';
import { FeebackComponent } from './feeback/feeback.component';
import { AddfeedbackComponent } from './addfeedback/addfeedback.component';
import { SingleinternshipComponent } from './singleinternship/singleinternship.component';
import { SinglevacancyComponent } from './singlevacancy/singlevacancy.component';
import { InternapplyComponent } from './internapply/internapply.component';
import { InternstudentComponent } from './internstudent/internstudent.component';
import { MailComponent } from './mail/mail.component';
import { StudentService } from './student.service';
import { StudentinternService } from './studentintern.service';
import { MailinternComponent } from './mailintern/mailintern.component';


@NgModule({
  declarations: [
    AppComponent,
    
    HomeComponent,
    
    VacancyComponent,
    
    InternshipComponent,
    
    SignupComponent,
    
    LoginComponent,
    
    NewvacancyComponent,
    
    NewinternshipComponent,
    
    UpdatevacancyComponent,
    
    UpdateinternshipComponent,
    
    ExpertComponent,
    
    StudentComponent,
    
    NewstudentComponent,
    
    StudentloginComponent,
    
    FeebackComponent,
    
    AddfeedbackComponent,
    
    SingleinternshipComponent,
    
    SinglevacancyComponent,
    
    InternapplyComponent,
    
    InternstudentComponent,
    
    MailComponent,
    
    MailinternComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
    
  ],
  providers: [AuthService,AuthGuard,VacancyService,InternshipService,SignupService,StudentService,StudentinternService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
