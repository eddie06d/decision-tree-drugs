import { PredictedService } from './../../services/predicted.service';
import { predictedDrug } from './../../helpers/predicted.validator';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})

export class InputComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private predictedService: PredictedService) {
    this.form = this.fb.group({
      age: ['', [
        Validators.required,
        Validators.pattern('^[0-9]+$')
      ]],
      sex: ['', [ Validators.required ]],
      bloodPressure: ['', [ Validators.required ]],
      cholesterol: ['', [ Validators.required ]],
      level_Na_K: ['', [
        Validators.required,
        Validators.pattern('^[0-9]+(.[0-9]+)?$')
      ]]
    });
  }

  get age() {
    return this.form.get('age');
  }

  get sex() {
    return this.form.get('sex');
  }

  get bloodPressure() {
    return this.form.get('bloodPressure');
  }

  get cholesterol() {
    return this.form.get('cholesterol');
  }

  get level_Na_K() {
    return this.form.get('level_Na_K');
  }

  isRequiredControl(control: any): boolean {
    return control?.hasError('required') && (control.dirty || control.touched);
  }

  isPatternControl(control: any): boolean {
    return control?.hasError('pattern') && (control.dirty || control.touched);
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.form.value);
    this.predictedService.value = predictedDrug(this.form.value);
    this.form.reset();
  }

}
