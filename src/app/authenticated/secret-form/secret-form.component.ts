import { Component, OnInit } from '@angular/core';
export class DummyForm {
  firstName: string;
  lastName: string;
  userName: string;
  city: string;
  province: string;
  postalCode: string;
  note: string;
  gender: string;
  quantitySlider: number;
  termsAndConditions: boolean;
}
@Component({
  selector: 'app-secret-form',
  templateUrl: './secret-form.component.html',
  styleUrls: ['./secret-form.component.scss']
})
export class SecretFormComponent implements OnInit {
  model: DummyForm;
  submitted = false;

  constructor() { }

  ngOnInit() {
    this.model = new DummyForm();
  }
  onSubmit() {
    this.submitted = true;
    alert('Submitted!');
  }
  dummyData() {
    // put some data back into the form
    let dummy = new DummyForm();
    dummy.firstName = 'Bob';
    dummy.lastName = 'Grant';
    dummy.userName = 'BG_The_Rockstar';
    dummy.city = 'Victoria';
    dummy.gender = 'M';
    dummy.note = 'Things are happening.';
    dummy.province = 'BC';
    dummy.quantitySlider = 111;
    dummy.termsAndConditions = true;
    dummy.postalCode = 'V8V3B3';
    this.model = { ...dummy };
  }
}
