import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RedditService {

  url = "https://www.reddit.com/r/aww/.json";
  redditposts: redditpost[] = [];
  favorites: Recipe[] = []; // Kim


  constructor(private http: HttpClient) {}




interface Recipe {
  label: string;
  image: string;
  source: string;
  bookmarked: boolean; // Kim - using for favorites
  url: string;
  yield: number;
  calories: number;
};

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  


  getRecipes(searchTerm) {
    const requestURL = this.getUrlWithAPIKey() + "&q=" + searchTerm; // add whatever params you want from https://developer.edamam.com/edamam-docs-recipe-api
  console.log("Searching for:", searchTerm); // STACEY won't be needed in the long run

    this.http.get(requestURL).subscribe(
      (response: any) => {
        this.recipes = response.hits;
        console.log(this.recipes); // STACEY won't be needed in the long run

      },
      (error) => {
        console.error(error);
      }
    );
  }

  getUrlWithAPIKey() { // DON'T CHANGE ME
    return `${this.url}?app_id=${this.appID}&app_key=${this.apiKey}`;
  }

  ngOnInit() {}