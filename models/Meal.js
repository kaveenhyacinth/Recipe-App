class Meals {
  constructor(
    id,
    catIds,
    title,
    affordability,
    complexity,
    imageUrl,
    duration,
    ingreds,
    steps,
    isGlutenFree,
    isVegan,
    isVegetarian,
    isLactoseFree
  ) {
    this.id = id;
    this.catIds = catIds;
    this.title = title;
    this.affordability = affordability;
    this.complexity = complexity;
    this.imageUrl = imageUrl;
    this.duration = duration;
    this.ingreds = ingreds;
    this.steps = steps;
    (this.isGlutenFree = isGlutenFree),
      (this.isVegan = isVegan),
      (this.isVegetarian = isVegetarian),
      (this.isLactoseFree = isLactoseFree);
  }
}

export default Meals;
