import { Component } from '@angular/core';
import { AddCategoryRequest } from '../models/add-category-resquest.models';

@Component({
  selector: 'app-add-category',
  standalone: true,
  imports: [],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent {
  model!: AddCategoryRequest;
  contructor(){
    this.model = {
      description: ''
    };
  }
  onFormSubmit(){
    console.log(this.model)
  }
  
}
