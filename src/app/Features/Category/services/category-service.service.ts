import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  constructor(private http :  HttpClient) { }
  getCategory()
  {
    this.http.get("https://localhost:7093/api/v1/Categoria")
  }
}
