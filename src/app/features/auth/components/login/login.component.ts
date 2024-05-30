import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { AuthService } from '../../../betting/services/auth.service';
import { LoadingOverlayComponent } from '../../../../shared/components/loading-overlay/loading-overlay.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule,MdbFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup;
  showPassword = false;
  errorMessage: string = '';
   constructor(private authservice:AuthService,private formBuilder:FormBuilder,private toastr:ToastrService,private router:Router) { }
   ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      code: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]], 
    });
  }
  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
  onSubmit() {
  if (this.loginForm.valid) {
    let data = this.loginForm.value
   this.authservice.login(data).subscribe({
     next:(res)=>{
      console.log(res)
       if(res == false){
         this.toastr.error(res.message,'Username Not exists',{
           timeOut:3000
         });
       }
       if(res == true){
         this.toastr.success(`Login success`);
         this.router.navigate(['/']);
       }

     },
     error:(e)=>{
       console.log(e)
       this.toastr.error('Issue in Loin',e.message,{
         timeOut:300
       });
     }
   })
 }
}
}
