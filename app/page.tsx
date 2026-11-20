import RecipeGrid from "./components/RecipeGrid";
import { recipes } from "./data/recipes";

export default function Home() {
  return (
    <main className="site-main">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> YOUR NEXT FAVORITE MEAL STARTS HERE</p>
          <h1>Find your<br />next <span className="accent-word">bite.</span></h1>
          <p className="hero-description">Good food, no guesswork. Pick a recipe, grab your ingredients, and make something worth sharing.</p>
          <a className="explore-link" href="#recipes">Explore recipes <span aria-hidden="true">↓</span></a>
        </div>
        <div className="hero-art" aria-label="A bowl of fresh pasta">
          <div className="hero-art-orbit orbit-one" /><div className="hero-art-orbit orbit-two" />
          <div className="hero-art-card"><span>🍝</span></div>
          <div className="floating-note note-top"><span>✦</span> MADE WITH LOVE</div>
          <div className="floating-note note-bottom">SIMPLE. FRESH. DELICIOUS.</div>
          <span className="hero-spark spark-one">✳</span><span className="hero-spark spark-two">✦</span>
        </div>
      </section>

      <section id="recipes" className="browse-heading">
        <div><p className="eyebrow">THE GOOD STUFF</p><h2>What sounds <span>good?</span></h2></div>
        <p className="browse-hint">Six feel-good recipes, ready when you are.</p>
      </section>
      <RecipeGrid recipes={recipes} />
      <footer className="site-footer"><span>NextBites <span className="footer-mark">✳</span></span><span>MADE FOR THE LOVE OF FOOD</span></footer>
    </main>
  );
}
