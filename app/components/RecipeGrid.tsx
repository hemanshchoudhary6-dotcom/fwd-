"use client";

import { useState } from "react";
import RecipeCard from "./RecipeCard";
import type { Recipe } from "../data/recipes";

export default function RecipeGrid({ recipes }: { recipes: Recipe[] }) {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();
  const visible = recipes.filter((recipe) =>
    `${recipe.title} ${recipe.cuisine}`.toLowerCase().includes(normalizedQuery),
  );

  return (
    <section className="recipe-section" aria-label="Recipes">
      <div className="search-row">
        <label className="search-box">
          <span aria-hidden="true">⌕</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search dishes or cuisines..."
            aria-label="Search recipes by dish or cuisine"
          />
          <kbd>/</kbd>
        </label>
        <p className="result-count">Showing <strong>{visible.length}</strong> of {recipes.length} recipes</p>
      </div>

      {visible.length === 0 ? (
        <p className="empty-state">No recipes match “{query}”. Try another search.</p>
      ) : (
        <div className="recipe-grid">
          {visible.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />)}
        </div>
      )}
    </section>
  );
}
