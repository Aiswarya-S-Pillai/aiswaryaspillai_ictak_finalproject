import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
//import { AuthGuard } from './auth.guard';
import { VacancyComponent } from './vacancy/vacancy.component';
import { InternshipComponent } from './internship/internship.component';
import { LoginComponent} from './login/login.component';
import { HomeComponent } from './home/home.component';
import {SignupComponent} from './signup/signup.component';
import {NewvacancyComponent} from './newvacancy/newvacancy.component';
import {NewinternshipComponent} from './newinternship/newinternship.component';
import {UpdatevacancyComponent} from './updatevacancy/updatevacancy.component';
import { StudentComponent } from './student/student.component';
import { NewstudentComponent } from './newstudent/newstudent.component';
import { StudentloginComponent } from './studentlogin/studentlogin.component';
import {UpdateinternshipComponent} from './updateinternship/updateinternship.component'
import { ExpertComponent } from './expert/expert.component';
import { FeebackComponent } from './feeback/feeback.component';
import { AddfeedbackComponent } from './addfeedback/addfeedback.component';
import { SingleinternshipComponent } from './singleinternship/singleinternship.component';
import { SinglevacancyComponent } from './singlevacancy/singlevacancy.component';
import { InternstudentComponent } from './internstudent/internstudent.component';
import { InternapplyComponent } from './internapply/internapply.component';
import { MailComponent } from './mail/mail.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'student',
    component: StudentComponent
  },
  {
    path: 'intern',
    component: InternstudentComponent
  },
  {
    path: 'email',
    component: MailComponent
  },
  {
    path: 'feedback',
    component: FeebackComponent
  },
  {
    path: 'products',
    component: VacancyComponent
  },
  {
      path: 'home',
      component:HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'product',
    component:SinglevacancyComponent,
  },
  {
    path:'author',
    component:SingleinternshipComponent,
  },
  {
    path:'expertlogin',
    component:ExpertComponent
  },
  {
    path:'studentlogin',
    component:StudentloginComponent
  },
  {path:'add', 
 // canActivate: [AuthGuard],
  component: NewvacancyComponent,
},
{
  path:'update',
  component:UpdatevacancyComponent
},


{
  path: 'authors',
  component: InternshipComponent
},
{
  path:'updateauthor',
  component:UpdateinternshipComponent
},
{path:'addauthor', 
 //  canActivate: [AuthGuard],
  component: NewinternshipComponent,
},
{path:'addstudent', 
  // canActivate: [AuthGuard],
  component: NewstudentComponent,
},
{path:'addintern', 
  // canActivate: [AuthGuard],
  component: InternapplyComponent,
},
{path:'addfeedback', 
  // canActivate: [AuthGuard],
  component: AddfeedbackComponent ,
},
{
  path:'signup',
 // canActivate:[AuthGuard],
  component:SignupComponent
}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
