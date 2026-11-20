import Link from "next/link";
import { notFound } from "next/navigation";
import { getRecipe } from "../../data/recipes";

export default async function RecipePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const recipe = getRecipe(id);

  if (!recipe) notFound();

  return (
    <main className="site-main detail-main">
      <Link href="/" className="back-link"><span aria-hidden="true">←</span> All recipes</Link>
      <article className="detail-card">
        <div className="detail-hero">
          <span className="detail-emoji" aria-hidden="true">{recipe.emoji}</span>
          <div className="detail-title"><p className="eyebrow">{recipe.cuisine.toUpperCase()} · FROM THE NEXTBITES KITCHEN</p><h1>{recipe.title}</h1><p>{recipe.description}</p>
            <div className="detail-meta"><span>◷ &nbsp;{recipe.time}</span><span>✳ &nbsp;{recipe.difficulty}</span><span>♨ &nbsp;{recipe.cuisine}</span></div>
          </div>
        </div>
        <div className="detail-columns">
          <section className="detail-panel"><p className="eyebrow">GATHER THESE</p><h2>Ingredients</h2><ul className="ingredient-list">{recipe.ingredients.map((item) => <li key={item}><span className="ingredient-check">✓</span>{item}</li>)}</ul></section>
          <section className="detail-panel method-panel"><p className="eyebrow">LET’S MAKE IT</p><h2>Method</h2><ol className="step-list">{recipe.steps.map((step, index) => <li key={step}><span className="step-number">{String(index + 1).padStart(2, "0")}</span><span>{step}</span></li>)}</ol></section>
        </div>
      </article>
      <footer className="site-footer"><span>NextBites <span className="footer-mark">✳</span></span><span>MADE FOR THE LOVE OF FOOD</span></footer>
    </main>
  );
}
