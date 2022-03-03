import { Component } from '@angular/core';
import { Log } from '@angular/core/testing/src/logger';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { forEach } from '@angular/router/src/utils/collection';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  form: FormGroup;
  auto: any[] = [];
  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      integrationTypeId: [],
      enabled: [],
      warehouseAutomationParameters: fb.array([]),
    });
  }

  addNewAddressGroup() {
    const add = this.form.get('warehouseAutomationParameters') as FormArray;
    add.push(
      this.fb.group({
        name: [],
        value: [],
      })
    );
  }

  deleteAddressGroup(index: number) {
    const add = this.form.get('warehouseAutomationParameters') as FormArray;
    add.removeAt(index);
  }

  save() {
    this.auto.push(this.form.value);
    this.form.reset();
  }

  edit(index: any) {
    console.log(this.auto);
    console.log(this.auto[index]);

    for (let i = 0; i < this.auto[index].warehouseAutomationParameters.length; i++) {
      this.addNewAddressGroup();
    }
    this.form.patchValue(this.auto[index]);
  }
}
