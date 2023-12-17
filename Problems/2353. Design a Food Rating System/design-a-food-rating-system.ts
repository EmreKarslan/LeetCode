class Cuisine {
  highestRatedFood: string;
  highestRating: number;
}

class Food {
  rating: number;
  cuisine: string;
}

class FoodRatings {
  private cuisines: Map<string, Cuisine> = new Map<string, Cuisine>();
  private foods: Map<string, Food> = new Map<string, Food>();

  constructor(foods: string[], cuisines: string[], ratings: number[]) {
    for (let i = 0; i < foods.length; i++) {
      const food = foods[i];
      const cuisine = cuisines[i];
      const rating = ratings[i];

      if (this.cuisines.has(cuisine)) {
        const currentCuisineInfo = this.cuisines.get(cuisine);

        if (
          rating > currentCuisineInfo?.highestRating ||
          (rating === currentCuisineInfo?.highestRating &&
            food < currentCuisineInfo?.highestRatedFood)
        ) {
          this.cuisines.set(cuisine, {
            highestRating: rating,
            highestRatedFood: food,
          });
        }
      } else {
        this.cuisines.set(cuisine, {
          highestRating: rating,
          highestRatedFood: food,
        });
      }

      this.foods.set(food, { rating, cuisine });
    }
  }

  findHighestRatedFood(cuisine: string): string {
    let highestRatedFood: string = "";
    let highestRating: number = 0;

    for (const [food, foodInfo] of this.foods.entries()) {
      if (foodInfo.cuisine === cuisine) {
        if (
          foodInfo.rating > highestRating ||
          (foodInfo.rating === highestRating && food <= highestRatedFood)
        ) {
          highestRating = foodInfo.rating;
          highestRatedFood = food;
        }
      }
    }

    return highestRatedFood;
  }

  changeRating(food: string, newRating: number): void {
    const foodEntry = this.foods.get(food);
    foodEntry.rating = newRating;

    const cuisine = foodEntry.cuisine;
    const currentCuisineInfo = this.cuisines.get(cuisine);

    if (currentCuisineInfo) {
      const { highestRating, highestRatedFood } = currentCuisineInfo;

      if (
        newRating > highestRating ||
        (newRating === highestRating && food <= highestRatedFood)
      ) {
        this.cuisines.set(cuisine, {
          highestRating: newRating,
          highestRatedFood: food,
        });
      } else if (food === highestRatedFood) {
        const newHighestRatedFoodKey = this.findHighestRatedFood(cuisine);
        const newHighestRatedFood = this.foods.get(newHighestRatedFoodKey);

        this.cuisines.set(cuisine, {
          highestRating: newHighestRatedFood.rating,
          highestRatedFood: newHighestRatedFoodKey,
        });
      }
    }
  }

  highestRated(cuisine: string): string | null {
    const cuisineInfo = this.cuisines.get(cuisine);
    return cuisineInfo ? cuisineInfo.highestRatedFood : null;
  }
}
