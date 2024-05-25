import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-stack',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './stack.component.html',
  styleUrl: './stack.component.css'
})
export class StackComponent {
  form!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      chipName1: '1000',
      chipName2: '2000',
      chipName3: '3000',
      chipName4: '4000',
      chipName5: '5000',
      chipName6: '6000',
      chipName7: '7000',
      chipValue1: '1000',
      chipValue2: '2000',
      chipValue3: '3000',
      chipValue4: '4000',
      chipValue5: '5000',
      chipValue6: '6000',
      chipValue7: '7000',
    });
  }
  onSubmit() {
      // Iterate through each chip object and access the inputValue
      console.log('Form Value:', this.form.value);
    }
}

