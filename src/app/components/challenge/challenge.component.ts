import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.css']
})
export class ChallengeComponent {

  sortNumbers!: Number[]

  constructor(private fb: FormBuilder) { }

  formChallenge = this.fb.group({
    numbersArray: [''],
    valuesChallenge: this.fb.array([
      this.fb.control('')
    ])
  })

  get valuesChallenge() {
    return this.formChallenge.get('valuesChallenge') as FormArray
  }

  addValuesChallenge() {
      let value = this.formChallenge.get('numbersArray')?.value - 1

      if(value > 0) {
        for (let i = 0; i < value; i++) {
          this.valuesChallenge.push(this.fb.control(''));
          console.log(value)
        }
      } else {
        this.limparFormChallenge()
      }

  }

  valuesChallengeInputs() {
    let values: Number[] = this.valuesChallenge.value
    let valuesUnrepeated = values.filter((value,index) => values.indexOf(value) === index)
    this.sortNumbers = valuesUnrepeated.sort()
  }

  limparFormChallenge() {
    this.valuesChallenge.controls = []
  }

}
