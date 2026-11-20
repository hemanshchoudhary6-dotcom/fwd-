import Link from "next/link";
import type { Recipe } from "../data/recipes";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <Link href={`/recipe/${recipe.id}`} className="recipe-card">
      <span className="recipe-emoji" aria-hidden="true">{recipe.emoji}</span>
      <div className="recipe-card-copy">
        <h2>{recipe.title}</h2>
        <p>{recipe.description}</p>
        <div className="recipe-meta"><span>{recipe.cuisine}</span><span>{recipe.time}</span></div>
      </div>
      <span className="card-arrow" aria-hidden="true">↗</span>
    </Link>
  );
}
