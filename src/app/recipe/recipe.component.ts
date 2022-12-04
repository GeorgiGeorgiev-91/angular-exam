import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { IRecipe } from '../shared/interfaces';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  recipes: IRecipe[] | null = null;
  errorFetchingData = false;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {

    this.apiService.loadRecipes().subscribe({
      next: (value) => {
        this.recipes = value;
      },
      error: (err) => {
        this.errorFetchingData = true;
        console.log(err);
        throw ("Error loading recipes");
      }
    })
  }

}
