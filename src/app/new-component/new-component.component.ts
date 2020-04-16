import { Component } from '@angular/core';

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css']
})
export class NewComponentComponent {

  data = [];

  constructor() { }

  addToDo(val) {
    if (val.value.length > 0) {
      this.data.unshift(val.value);
      val.value = '';
    }
  }

  ShowEditForm(idx, inp, dv) {
    inp.value = this.data[idx];
    dv.style.display = 'block';
  }

  saveItemToDo(idx, inp, dv) {
    this.data[idx] = inp.value;
    dv.style.display = 'none';
  }

  DelItem(idx) {
    console.log(idx);
    this.data = this.data.filter((x, y) => {
      return (y !== idx);
    });
  }
}
