export type Recipe = {
  id: string;
  title: string;
  emoji: string;
  cuisine: string;
  description: string;
  time: string;
  difficulty: string;
  ingredients: string[];
  steps: string[];
};

export const recipes: Recipe[] = [
  {
    id: "margherita-pizza",
    title: "Margherita Pizza",
    emoji: "🍕",
    cuisine: "Italian",
    description: "Blistered crust, melty mozzarella, fresh basil.",
    time: "35 min",
    difficulty: "Medium",
    ingredients: ["1 pizza dough ball", "1/2 cup tomato sauce", "125g fresh mozzarella", "Fresh basil leaves", "Olive oil, salt"],
    steps: ["Heat the oven as hot as it goes.", "Stretch the dough and spread sauce.", "Tear mozzarella over the top.", "Bake 7 to 9 minutes until charred.", "Finish with basil and salt."],
  },
  {
    id: "paneer-tikka",
    title: "Paneer Tikka",
    emoji: "🧆",
    cuisine: "Indian",
    description: "Smoky, spiced paneer with a cool mint dip.",
    time: "30 min",
    difficulty: "Easy",
    ingredients: ["250g paneer, cubed", "1/2 cup thick yogurt", "1 tbsp tikka masala", "1 bell pepper", "Lemon and mint chutney"],
    steps: ["Mix yogurt, tikka masala, and salt.", "Coat paneer and pepper in the marinade.", "Thread onto skewers.", "Grill or roast until lightly charred.", "Serve hot with lemon and mint chutney."],
  },
  {
    id: "cold-brew-coffee",
    title: "Cold Brew Coffee",
    emoji: "☕",
    cuisine: "Drinks",
    description: "Smooth, slow-steeped coffee over ice.",
    time: "12 hr",
    difficulty: "Easy",
    ingredients: ["1 cup coarsely ground coffee", "4 cups cold water", "Ice", "Milk or syrup, optional"],
    steps: ["Stir coffee and cold water together.", "Cover and steep in the fridge for 12 hours.", "Strain through a fine filter.", "Pour over ice and dilute to taste.", "Add milk or syrup if you like."],
  },
  {
    id: "veg-burger",
    title: "Veg Burger",
    emoji: "🍔",
    cuisine: "American",
    description: "A crisp veggie patty stacked with all the fixings.",
    time: "25 min",
    difficulty: "Easy",
    ingredients: ["2 veggie patties", "2 burger buns", "Lettuce and tomato", "2 cheese slices", "Mayo and ketchup"],
    steps: ["Cook the patties until crisp and hot.", "Toast the buns cut-side down.", "Spread mayo and ketchup on each bun.", "Stack lettuce, patty, cheese, and tomato.", "Close the burgers and serve."],
  },
  {
    id: "masala-fries",
    title: "Masala Fries",
    emoji: "🍟",
    cuisine: "Snacks",
    description: "Golden fries tossed in a tangy Indian spice mix.",
    time: "30 min",
    difficulty: "Easy",
    ingredients: ["3 potatoes", "2 tbsp oil", "1/2 tsp chili powder", "1/2 tsp chaat masala", "Salt and coriander"],
    steps: ["Cut potatoes into thin fries and pat dry.", "Toss with oil and a pinch of salt.", "Bake or air-fry until golden and crisp.", "Toss with chili powder and chaat masala.", "Finish with coriander and serve hot."],
  },
  {
    id: "lemon-iced-tea",
    title: "Lemon Iced Tea",
    emoji: "🧋",
    cuisine: "Drinks",
    description: "Bright lemon, chilled tea, and just enough sweetness.",
    time: "15 min",
    difficulty: "Easy",
    ingredients: ["2 black tea bags", "2 cups hot water", "1 lemon", "2 tsp honey", "Ice and mint"],
    steps: ["Steep tea bags in hot water for 5 minutes.", "Remove the tea bags and stir in honey.", "Cool the tea, then chill.", "Add lemon juice and pour over ice.", "Garnish with lemon slices and mint."],
  },
];

export function getRecipe(id: string): Recipe | undefined {
  return recipes.find((recipe) => recipe.id === id);
}
