export interface BlogPost {
  title: string;
  date: string;
  slug: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: "The Rise of Vibe Coding: How PMs are Building Products with AI",
    date: "April 2026",
    slug: "rise-of-vibe-coding",
    content: `The landscape of product development is shifting dramatically. As a Product Manager, I've spent years writing PRDs and user stories, but in the last year, something changed — I started building the products myself.

Vibe Coding is a term I use to describe the workflow of using AI-assisted tools to go from idea to deployed product in hours, not weeks. It's not about replacing engineers. It's about PMs gaining the technical literacy to prototype, validate, and ship faster than ever before.

The implications are massive. When a PM can build a working prototype during a stakeholder meeting, the feedback loop shrinks from weeks to minutes. When you can test three different user flows before lunch, you make better product decisions.

This isn't about writing perfect code. It's about understanding systems, APIs, and user flows well enough to leverage AI tools effectively. The PMs who embrace this shift will have an unfair advantage in the market.

The future of product management isn't just about strategy — it's about execution speed.`,
  },
  {
    title: "Scaling a Food Brand with Minimalist Tech",
    date: "March 2026",
    slug: "scaling-food-brand-minimalist-tech",
    content: `When I started Lasuko, I made a conscious decision: no fancy e-commerce platform, no complex inventory system, no over-engineered tech stack. Just a landing page and WhatsApp.

Here's why that was the right call.

In the Indonesian food market, WhatsApp is the payment gateway. It's the CRM. It's the customer support channel. Building a Shopify store would have been solving the wrong problem. My customers don't want to create accounts and enter credit card details — they want to send a message and get dimsum delivered.

The "Web-to-WhatsApp" flow we built is dead simple: Customer sees the product, clicks the button, lands in a WhatsApp chat with a pre-filled message. From there, it's a human conversation. Trust is built through personal interaction, not through a checkout page.

The results speak for themselves. Our conversion rate from landing page visit to WhatsApp message is significantly higher than industry average for traditional e-commerce. Why? Because we removed every single point of friction.

The lesson for PMs: Sometimes the most sophisticated product decision is choosing to stay simple.`,
  },
  {
    title: "Why Every PM Should Understand GitHub (Even if they can't code)",
    date: "February 2026",
    slug: "pm-should-understand-github",
    content: `I used to think GitHub was exclusively for engineers. I was wrong, and that misconception cost me months of productivity.

Understanding GitHub doesn't mean you need to write code. It means understanding version control as a concept — how changes are tracked, how teams collaborate on the same codebase, and how deployments work.

Here's what changed when I learned the basics:

First, I stopped being afraid of technical conversations. When an engineer says "we need to refactor this module," I understand the implications for our sprint timeline. When someone mentions a merge conflict, I know it's not a catastrophe — it's a normal part of development.

Second, I started reading pull requests. Not the code itself, but the descriptions, the comments, the discussions. This is where the real product decisions happen. Engineers debate trade-offs in PRs that never make it to a Jira ticket.

Third, I gained credibility with my engineering team. When a PM can navigate a repository, read a README, and understand a deployment pipeline, engineers trust that PM more. It's not about doing their job — it's about respecting their craft enough to understand it.

My advice: spend one weekend learning Git basics. It will pay dividends for the rest of your PM career.`,
  },
];
