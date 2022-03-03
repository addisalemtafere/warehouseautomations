import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from "@angular/forms";
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      integrationTypeId: [],
      enabled:[],
      warehouseAutomationParameters: fb.array([])
    })
  }


  addNewAddressGroup() {
    const add = this.form.get('warehouseAutomationParameters') as FormArray;
    add.push(this.fb.group({
      name: [],
      value: []
    }))
  }

  deleteAddressGroup(index: number) {
    const add = this.form.get('warehouseAutomationParameters') as FormArray;
    add.removeAt(index)
  }
}



