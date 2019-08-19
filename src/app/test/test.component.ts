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
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

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
  get diagnostic() { return JSON.stringify(this.model); }
}
