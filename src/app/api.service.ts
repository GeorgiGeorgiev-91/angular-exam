import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { IRecipe } from './shared/interfaces';

const apiURL = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  loadRecipes(){
    return this.httpClient.get<IRecipe[]>(`${apiURL}/recipes`)
  }

  loadRecipe(id: number){
    return this.httpClient.get<IRecipe>(`${apiURL}/recipes/${id}`);
  }
}