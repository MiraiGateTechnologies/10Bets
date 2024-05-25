import { Component, Input, OnDestroy, OnInit, } from '@angular/core';
import {NgbActiveModal, NgbModal, NgbModule} from '@ng-bootstrap/ng-bootstrap'
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-place-bet',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './place-bet.component.html',
  styleUrl: './place-bet.component.css'
})

export class PlaceBetComponent implements OnInit, OnDestroy {
  @Input() data: any; // The data passed from the parent component
  buttonAmount=[500,1000,2000,3000,5000,10000,20000,30000,50000];
  amount: any;
  betForm!: FormGroup;
  isLoading:boolean=false;
   selectedAmount!: number;
  countDown: number = 6;
  private countdownInterval: any;
  errorMessage: string = '';
      constructor(
                    public modal: NgbActiveModal,
                    private toastr: ToastrService,
                    private formBuilder:FormBuilder,
                    private modalService: NgbModal
                  ){
  }
  ngOnInit(): void {
    this.betForm = this.formBuilder.group({
      amount: ['' , [Validators.required]], // Add other validators as needed
      match_code: [this.data.match_code],
      mode: [this.data.mode],
      rate: [this.data.rate],
      run: [this.data.run],
      sid: [this.data.sid],
      team: [this.data.team],
      type: [this.data.type]
    });
    this.startCountdown();
  }
  selectAmount(amount: number) {
    this.selectedAmount = amount;
    this.betForm.patchValue({
      amount: amount
    });
  }

  dismiss() {
    this.modal.dismiss('Cross click');
  }
  validateAmount(event: any): void {
    const value = event.target.value;
    if (value === '') {
      this.errorMessage = 'Amount is required';
    } else if (value < 0) {
      this.errorMessage = 'Amount cannot be negative';
    } else {
      this.errorMessage = '';
    }
    this.amount = value ? Number(value) : null;
  }

  startCountdown() {
    this.countdownInterval = setInterval(() => {
      // Decrease countdown by 1
      this.countDown -= 1;

      // Check if countdown has reached 0
      if (this.countDown === 0) {
        clearInterval(this.countdownInterval); // Clear interval to stop the countdown
        this.dismiss(); // Dismiss the modal
      }
    }, 1000); // Decrease every second
  }
  onSubmit(){
    // this.isLoading =true;
    // if(this.errorMessage == '' &&  this.betForm.valid){
    //   if(this.betForm.value.mode === 'K' ||this.betForm.value.mode === 'L'){
    //     this.amountBetService.placeBetPositionForK(this.betForm.value).subscribe({
    //       next:(res:any)=>{
    //         if (res.status == false){
    //           this.toastr.error('Bet Not Placed',res.msg,{
    //             timeOut:3000,
    //           })
    //           this.modal.dismiss('Cross click');
    //         }else{
    //           this.toastr.success('update successfully',res.msg)
    //           this.modal.dismiss('Cross click');
    //         }
    //       },
    //       error:(e:Error)=>{
    //         console.log(e)
    //         this.toastr.error('Error',e.message, {
    //           timeOut: 3000,
    //         });
    //         this.modal.dismiss('Cross click');
    //       }
    //     })
    //   }else{
    //     this.amountBetService.placeBetPosition(this.betForm.value).subscribe({
    //       next:(res:any)=>{
    //         if (res.status == false){
    //           this.toastr.error('Bet Not Placed',res.msg,{
    //             timeOut:3000,
    //           })
    //           this.modal.dismiss('Cross click');
    //         }else{
    //           this.toastr.success('update successfully',res.msg)
    //           this.modal.dismiss('Cross click');
    //         }
    //       },
    //       error:(e)=>{
    //         console.log(e)
    //         this.toastr.error('Error',e.message, {
    //           timeOut: 3000,
    //         });
    //         this.modal.dismiss('Cross click');
    //       }
    //     })
    //   }

    // }
    // console.log(this.selectedAmount)

  }

  ngOnDestroy(): void {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }
  }

}
