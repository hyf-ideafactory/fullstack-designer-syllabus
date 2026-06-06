import { useState } from "react";

// ─── RESOURCE SHOPPING LIST ──────────────────────────────────────────────────
// Buy BEFORE starting:
//   • Thinking with Type — Ellen Lupton · ~$25 · Amazon
//   • Grid Systems in Graphic Design — Müller-Brockmann · ~$50 · Amazon
// Buy at Week 4:
//   • Refactoring UI — $99 · refactoringui.com (PDF, Essentials package)
// Free:
//   • Atomic Design — bradfrost.com/atomic-design (free online)
//   • Design Systems Handbook — free PDF, search "InVision design systems handbook"
//   • Figma free tier, VS Code, The Odin Project, Flexbox Froggy, Grid Garden
// Already owned:
//   • The Design of Everyday Things — Don Norman ✓

const PHASES = [
  {
    id: 0,
    label: "Phase 1",
    title: "Foundations",
    subtitle: "~6 months part-time · Fri/Sat/Mon + 20 min daily",
    color: "#F0F7FF",
    accent: "#0066FF",
    darkAccent: "#0044CC",
    tagline: "Code and eye in parallel. Odin Foundations is a 6-month track — treat it that way. Design taste is built daily, not weekly.",
    weeks: [
      {
        week: 1,
        theme: "Setup, Community & Your First Real Look",
        goal: "Before you design anything, join the communities you'll learn from. Before you code anything, understand what you're looking at. Week 1 is about orientation — done right.",
        sessions: [
          {
            day: "Friday, June 6", label: "12:00 PM",
            track: "Code",
            duration: "90 min",
            title: "Odin: Prerequisites — Computer Basics & Command Line",
            completed: true,
            tasks: [
              { t: "✓ Introduction to Foundations — DONE last week.", m: 0, done: true },
              { t: "✓ 'How Does the Web Work?' — DONE today (~100 min). That is the real pace of Odin. Every section takes what it takes.", m: 0, done: true },
              { t: "Complete 'Computer Basics' lesson. Write: what is the difference between RAM, storage, and a CPU in plain language? If you can't explain it simply, re-read.", m: 30 },
              { t: "Complete 'Command Line Basics.' Open your VS Code terminal. Practice: pwd, ls, cd, mkdir, touch, rm. Run each 3 times until it feels like muscle memory.", m: 45 },
            ],
            anchor: "Rand: 'Design is the silent ambassador of your brand.' The command line is the foundation of everything you will build. 100 minutes on one section is not slow — it is the correct pace for material that will govern everything downstream.",
          },
          {
            day: "Saturday, June 7", label: "12:00 PM",
            track: "Design",
            duration: "75 min",
            title: "Start Your Swipe File + Go Somewhere Beautiful",
            tasks: [
              { t: "Create your Swipe File: a folder with 3 subfolders — Digital, Editorial/Print, Spatial/World. Save 5 things in each that genuinely stop you. Not things you think are good — things that make you feel something.", m: 20 },
              { t: "Create your Read.cv profile (read.cv — free). Write 2 sentences about what you're building toward. This is your first public commitment as a designer.", m: 15 },
              { t: "Go somewhere with intentional design today — a museum, a well-designed store, a restaurant, a gallery, a library. Spend 30 min there with full attention. Photograph it. Write: what 3 specific decisions made it feel the way it did?", m: 40 },
            ],
            anchor: "Brodovitch told his students: 'If you look at a page and it doesn't astonish you, throw it away.' Begin training your eye in the physical world — it is the fastest way to develop taste that shows up on screen.",
          },
          {
            day: "Monday, June 9", label: "12:00 PM",
            track: "Both",
            duration: "75 min",
            title: "Visual Hierarchy — See It Everywhere — Then Teach It Back",
            tasks: [
              { t: "Open Stripe.com, a magazine spread (photograph one or find one online), and a room you find beautiful (architecture or interior photograph). For each: number every element in the order your eye hits it. Write WHY — size, contrast, position, whitespace, color.", m: 35 },
              { t: "Sketch the hierarchy of one of those three compositions on paper — rectangles and lines only. No detail, just weight and position. Does the sketch capture what you felt looking at the real thing?", m: 20 },
              { t: "FEYNMAN CLOSE: Open a notes doc. Write: 'Visual hierarchy means...' Explain it using one digital example and one example from the space you visited Saturday. Where you get vague, you have a gap. Go fix it.", m: 20 },
            ],
            anchor: "Brodovitch told his students: 'If you look at a page and it doesn't astonish you, throw it away.' Begin training your eye to recognize — and demand — that astonishment.",
            feynman: true,
          },
        ],
        dailyHabit: "20 min/day: Add 1 thing to your Swipe File. Notice design everywhere — storefronts, menus, packaging, buildings. Photograph one piece of exceptional physical design per day this week.",
      },
      {
        week: 2,
        theme: "HTML Structure + Color as Feeling",
        goal: "HTML is the skeleton of every webpage. Color is the first thing a viewer feels before they read a word. Learn both this week with the same level of intentionality.",
        sessions: [
          {
            day: "Friday, June 13", label: "12:00 PM",
            track: "Code",
            duration: "90 min",
            title: "Odin: HTML Foundations — Elements, Tags & Boilerplate",
            tasks: [
              { t: "Complete 'Introduction to HTML and CSS' lesson. After each tag you learn: ask why it exists. Not what it does — why it exists.", m: 35 },
              { t: "Complete 'HTML Elements and Tags' and 'HTML Boilerplate' lessons.", m: 35 },
              { t: "Open your boilerplate in Chrome. Right-click → Inspect. Spend 10 min reading your own HTML in DevTools. This is your second screen from now on.", m: 20 },
            ],
            anchor: "Every HTML tag is a semantic decision — a statement about what something IS, not just how it looks. That is the same discipline as choosing the right word in a headline, or the right object for a set.",
          },
          {
            day: "Saturday, June 14", label: "12:00 PM",
            track: "Design",
            duration: "75 min",
            title: "Color Theory — Atmosphere, Emotion, System",
            tasks: [
              { t: "Watch 'Interaction of Color' intro on YouTube (search Josef Albers Interaction of Color — Yale has free excerpts). Write: what surprised you about how color behaves next to other colors?", m: 25 },
              { t: "Find one interior photograph, one film still, and one website with exceptional color. For each: identify the 3 dominant colors and write the emotional register they create together. Not 'warm' — specific. 'Quiet authority.' 'Anxious luxury.' 'Childhood memory.'", m: 30 },
              { t: "In Figma (free tier — figma.com): create a new file. Build a 5-shade scale for one color from scratch. Apply it to a simple rectangle layout. Does it feel like something or just look like something?", m: 20 },
            ],
            anchor: "Saul Leiter photographed New York in color when everyone else was shooting black and white — not for novelty but because color carried emotional information that monochrome couldn't. Use color for what it actually communicates, not for decoration.",
          },
          {
            day: "Monday, June 16", label: "12:00 PM",
            track: "Both",
            duration: "75 min",
            title: "HTML + Color Connected — Then Teach It Back",
            tasks: [
              { t: "Build a simple HTML page: your name as an H1, a short bio as a paragraph, and 3 things you're learning as a list. No CSS yet. Semantic and intentional.", m: 30 },
              { t: "Create a color palette for this page in Figma — 3 colors max. Apply it mentally: what atmosphere would these colors create if they were walls in a room? Write 2 sentences.", m: 20 },
              { t: "FEYNMAN CLOSE: Write 'HTML structure matters because...' and 'Color communicates before it is read because...' Post your Feynman Close in Design Buddies #critique or The Odin Project Discord. Ask for one piece of feedback.", m: 25 },
            ],
            anchor: "Knuth: 'Let us concentrate on explaining to humans what we want the computer to do.' HTML explains to the browser. Color explains to the human. Both require clarity of intention.",
            feynman: true,
          },
        ],
        dailyHabit: "20 min/day: Notice color everywhere in the physical world — storefronts, clothing, interiors, packaging. Write one sentence each day: what does this color combination communicate?",
      },
      {
        week: 3,
        theme: "Working with Text + Typography as Voice",
        goal: "HTML text elements and typographic principles are the same discipline. Both are about giving content the right voice. Learn them together this week.",
        sessions: [
          {
            day: "Friday, June 20", label: "12:00 PM",
            track: "Code",
            duration: "90 min",
            title: "Odin: HTML — Working with Text, Lists, Links & Images",
            tasks: [
              { t: "Complete 'Working with Text' lesson. For every text tag: what is its semantic meaning? What does it communicate to a screen reader, a search engine, a browser?", m: 30 },
              { t: "Complete 'Lists' lesson. Build a small HTML page using headings, paragraphs, and both ordered and unordered lists — about a topic you genuinely care about.", m: 30 },
              { t: "Complete 'Links and Images' lesson. Add a link and an image to your page. Inspect both in DevTools — understand what the browser is doing.", m: 30 },
            ],
            anchor: "Every heading level, every paragraph break is a typographic decision — even in raw HTML. Begin noticing that distinction. It will make you a better HTML writer and a better typographer simultaneously.",
          },
          {
            day: "Saturday, June 21", label: "12:00 PM",
            track: "Design",
            duration: "75 min",
            title: "Typography — The Architecture of Language",
            tasks: [
              { t: "Read Thinking with Type: Part 1 — Letters (pp. 1–50). You bought this book. Use it like a reference, not a novel — look at every diagram carefully. Write 5 principles that surprised you.", m: 30 },
              { t: "Go to Fonts In Use (fontsinuse.com) — free. Find 3 typographic pairings that feel right to you. For each: write the emotional personality of the pairing in one specific sentence. Then find the same pairing used in a physical context — a poster, a book, packaging.", m: 25 },
              { t: "In Figma: set the same 40-word paragraph in 3 typefaces. A geometric sans (Futura or similar), a humanist sans (Inter), a serif (Georgia or Playfair). Write one sentence per typeface: what does this voice sound like?", m: 20 },
            ],
            anchor: "Vignelli used only 6 typefaces his entire career. He knew them the way a musician knows their instrument — in every context, at every size, in every combination. Depth over breadth. Always.",
          },
          {
            day: "Monday, June 23", label: "12:00 PM",
            track: "Both",
            duration: "75 min",
            title: "Type on the Page + Commit Messages — Then Teach It Back",
            tasks: [
              { t: "Complete Odin 'Commit Messages' lesson. Make your first 3 meaningful Git commits on your HTML page project. Every commit message should describe the intention, not just the action.", m: 30 },
              { t: "In Figma: design a simple magazine-style header for your HTML page — headline, subhead, byline. Choose a typeface pairing. Apply your color palette from Week 2.", m: 25 },
              { t: "FEYNMAN CLOSE: Write 'A typeface communicates personality because...' and 'A Git commit message matters because...' Share both in community this week. The connections you make between concepts are worth sharing.", m: 20 },
            ],
            anchor: "Bringhurst: 'Typography exists to honor content.' So does a commit message. Both are acts of clarity on behalf of another reader — a human who will encounter your work later.",
            feynman: true,
          },
        ],
        dailyHabit: "20 min/day: Notice typography everywhere — your phone, a storefront, a cereal box. Photograph one piece of exceptional physical typography per day this week. Add to Swipe File.",
      },
      {
        week: 4,
        theme: "CSS Foundations + Refactoring UI — Buy It This Week",
        goal: "CSS is design logic in code. Refactoring UI is the most practical design book for where you are right now. Read them together and each will make the other clearer.",
        sessions: [
          {
            day: "Friday, June 27", label: "12:00 PM",
            track: "Code",
            duration: "90 min",
            title: "Odin: CSS Foundations — The Cascade, Selectors & Box Model",
            tasks: [
              { t: "Complete 'Intro to CSS' and 'The Cascade' lessons. Write in plain language: what is the cascade? How does CSS decide which rule wins?", m: 35 },
              { t: "Complete 'Inspecting HTML and CSS' lesson. Open 3 websites you admire in DevTools. Change one color, one font size, one spacing value on each. Observe what breaks.", m: 30 },
              { t: "Complete 'The Box Model' lesson. Draw the box model on paper — content, padding, border, margin. Every layout decision you ever make lives inside this diagram.", m: 25 },
            ],
            anchor: "The cascade is a hierarchy — the same logic that governs visual hierarchy in design. The browser resolves CSS conflicts the same way your eye resolves visual conflicts: by specificity, proximity, and weight.",
          },
          {
            day: "Saturday, June 28", label: "12:00 PM",
            track: "Design",
            duration: "75 min",
            title: "Refactoring UI — Chapter 1 + Design Instinct",
            tasks: [
              { t: "BUY THIS WEEK: Refactoring UI ($99 · refactoringui.com — Essentials package). If budget is a constraint, prioritize this over any other purchase this phase. It is the most practical design book for your current stage.", m: 0 },
              { t: "Read Refactoring UI: 'Starting from Scratch' chapter (Chapter 1, ~40 pages). Read with a pen. Circle every principle, not every tip. A principle generalizes. A tip is situational.", m: 35 },
              { t: "Apply one principle from Chapter 1 to your Figma design from Week 3. Implement the change. Screenshot before and after. Write: what specifically improved and why?", m: 25 },
              { t: "Post your before/after in Design Buddies #critique. Ask a specific question — not 'what do you think?' but 'does the hierarchy feel clearer in the second version?'", m: 15 },
            ],
            anchor: "Rand: 'Don't try to be original. Just try to be good.' Refactoring UI teaches you how to be good. Originality is earned — it comes after you've internalized the rules well enough to break them intentionally.",
          },
          {
            day: "Monday, June 30", label: "12:00 PM",
            track: "Both",
            duration: "75 min",
            title: "Style Your HTML Page + Teach It Back",
            tasks: [
              { t: "Add CSS to your HTML page from Week 2/3. Use what you learned from the box model and cascade. Apply your color palette as CSS custom properties (--color-primary, not #0066FF hardcoded).", m: 40 },
              { t: "Install Muzli as your Chrome new tab (free extension). Open it. Add one piece to each Swipe File section. You should be doing this daily but this session makes it a practice.", m: 15 },
              { t: "FEYNMAN CLOSE: Write 'CSS custom properties (variables) are better than hardcoded values because...' and 'The cascade in CSS and visual hierarchy in design are related because...' Post in community.", m: 20 },
            ],
            anchor: "Maeda: 'Simplicity is about subtracting the obvious and adding the meaningful.' CSS custom properties are that discipline in code — one source of truth. One decision, applied everywhere.",
            feynman: true,
          },
        ],
        dailyHabit: "20 min/day: Continue Odin at your own pace on non-session days — even 20 min moves the needle. The Foundations curriculum has 9 sections. Treat each section as a milestone, not each lesson.",
      },
      {
        week: 5,
        theme: "CSS Block & Inline + Composition Study",
        goal: "Understanding how elements flow in CSS is the foundation of every layout you will build. Pair it with studying how masters compose images and spaces.",
        sessions: [
          {
            day: "Friday, July 4", label: "12:00 PM",
            track: "Code",
            duration: "90 min",
            title: "Odin: CSS — Block, Inline & the Odin Recipes Project",
            tasks: [
              { t: "Complete 'Block and Inline' lesson. Write: what is the difference between a block and an inline element? Give 3 examples of each from memory — then verify.", m: 30 },
              { t: "Start the Odin Recipes Project (HTML only, no CSS). This is your first real project. Take it seriously — semantic HTML, proper structure, meaningful commit messages.", m: 50 },
              { t: "Push the project to GitHub. This is your first public code. It does not have to be perfect. It has to exist.", m: 10 },
            ],
            anchor: "Block vs. inline is the browser's version of the designer's choice between structure and flow. Every layout decision maps back to this distinction. Own it completely.",
          },
          {
            day: "Saturday, July 5", label: "12:00 PM",
            track: "Design",
            duration: "75 min",
            title: "Composition Study — Photography, Editorial, Space",
            tasks: [
              { t: "Choose one photographer to study this week: Irving Penn, Saul Leiter, Gordon Parks, or Viviane Sassen. Find 10 of their images online (free). For each: identify the single compositional decision that makes it work — leading line, negative space, depth of field, color relationship, subject placement.", m: 35 },
              { t: "Find the equivalent compositional intelligence in 2 editorial spreads and 2 interior photographs. Where does the same logic appear across different media?", m: 25 },
              { t: "Add the best 5 discoveries to your Swipe File (Spatial/World section). Post one to Design Buddies with your compositional analysis. See what others add.", m: 15 },
            ],
            anchor: "Irving Penn: 'A photograph is not an accident — it is a concept.' Every layout decision should be a concept, not an accident. Study photographers to develop the habit of intentional composition.",
          },
          {
            day: "Monday, July 7", label: "12:00 PM",
            track: "Both",
            duration: "75 min",
            title: "Apply Composition to Layout + Teach It Back",
            tasks: [
              { t: "Take one photograph from your composition study. Translate its spatial logic into a Figma layout — same proportional relationships, same balance of density and space, same light/dark ratio. Screenshot both side by side.", m: 35 },
              { t: "Read one post in r/learndesign or r/web_design that resonates. Write a thoughtful reply. This is how community works — contribution compounds.", m: 15 },
              { t: "FEYNMAN CLOSE: Write 'Compositional intelligence means...' using one photographic example and one layout example. Where are they identical? Where do they diverge?", m: 25 },
            ],
            anchor: "Feynman: 'What I cannot create, I do not understand.' You cannot yet build a beautiful layout from scratch — but you can trace the logic of one that exists. That tracing is your current level of understanding. It is enough for now.",
            feynman: true,
          },
        ],
        dailyHabit: "20 min/day: Continue Odin Recipes Project on non-session days. The project is the most important part of any Odin section — do not skip it to rush ahead.",
      },
      {
        week: 6,
        theme: "CSS Flexbox + Grid Systems — The Spatial Logic of Layout",
        goal: "Flexbox is how the browser thinks about space. Grid systems are how designers think about space. They are the same concept in different languages.",
        sessions: [
          {
            day: "Friday, July 11", label: "12:00 PM",
            track: "Code",
            duration: "90 min",
            title: "Odin: CSS Flexbox — Introduction & Growing/Shrinking",
            tasks: [
              { t: "Complete 'Introduction to Flexbox' and 'Growing and Shrinking' lessons. For every property: state in plain language what it controls and why that matters.", m: 40 },
              { t: "Start Flexbox Froggy (flexboxfroggy.com — free). Complete levels 1–12. Understand the answer before advancing. This is not a race.", m: 30 },
              { t: "Apply Flexbox to your Recipes Project: make the recipe list display in a row that wraps. Inspect it in DevTools to understand how the browser calculated the spacing.", m: 20 },
            ],
            anchor: "Flexbox thinks in one dimension at a time — row or column. That constraint produces clarity. Every design decision that produces clarity deserves to be understood deeply.",
          },
          {
            day: "Saturday, July 12", label: "12:00 PM",
            track: "Design",
            duration: "75 min",
            title: "Grid Systems — Read Müller-Brockmann, See Grids Everywhere",
            tasks: [
              { t: "Read Grid Systems in Graphic Design: Introduction + Chapter 1 (you bought this). Read every diagram as a spatial decision, not a graphic design rule.", m: 30 },
              { t: "Find the grid in 3 physical or editorial objects: a magazine spread, an interior photograph, a film still. Sketch the underlying column structure on paper or in Figma. Where are the margins? Where are the gutters? What does the grid enable?", m: 25 },
              { t: "Read Refactoring UI: 'Layout and Spacing' section. Compare its digital spacing principles to Müller-Brockmann's print spacing principles. Write: what is the same? What is different? Why?", m: 20 },
            ],
            anchor: "Müller-Brockmann: 'The grid system is an aid, not a guarantee.' Learn the system before you decide when to break it. Breaking a grid intentionally is a statement. Breaking it accidentally is a mistake.",
          },
          {
            day: "Monday, July 14", label: "12:00 PM",
            track: "Both",
            duration: "75 min",
            title: "Flexbox Layout + Sketch a Grid — Then Teach It Back",
            tasks: [
              { t: "Complete Flexbox Froggy levels 13–24. Then build a simple 3-card layout using only Flexbox — no frameworks.", m: 35 },
              { t: "Sketch a grid for your Figma design from Week 3: columns, gutters, margins on paper first. Then apply it in Figma (enable layout grid). What does imposing a grid reveal about your current layout?", m: 20 },
              { t: "FEYNMAN CLOSE: Write 'CSS Flexbox controls layout by...' and 'Grid systems in design work because...' Then: where are these two principles the same concept?", m: 20 },
            ],
            anchor: "Knuth: every layout should be provable. You should be able to state why every element occupies the space it does. The grid makes this possible — it gives you a reason for every decision.",
            feynman: true,
          },
        ],
        dailyHabit: "20 min/day: Odin Flexbox axes and alignment lessons on off-days. These are short — do them between other things if needed.",
      },
      {
        week: 7,
        theme: "Flexbox Alignment + Your First Real Design — Start It This Week",
        goal: "Master Flexbox alignment. Design your first real project this week — not an exercise, an actual designed thing with a point of view.",
        sessions: [
          {
            day: "Friday, July 18", label: "12:00 PM",
            track: "Code",
            duration: "90 min",
            title: "Odin: Flexbox — Axes, Alignment & the Landing Page Project",
            tasks: [
              { t: "Complete 'Axes' and 'Alignment' lessons. For alignment properties: draw what each one does before reading the explanation. Prediction forces understanding.", m: 30 },
              { t: "Start the Odin Landing Page Project. This is a real project — design it before you build it. Sketch it on paper first.", m: 50 },
              { t: "Push your first commit. Commit message: 'Initial structure — header and hero section.'", m: 10 },
            ],
            anchor: "Alignment is a design decision before it is a CSS property. Every alignment choice communicates relationship — this belongs with that. Learn to see alignment as meaning before you implement it as code.",
          },
          {
            day: "Saturday, July 19", label: "12:00 PM",
            track: "Design",
            duration: "75 min",
            title: "Design Your First Real Project — Find Your Reference Outside the Web",
            tasks: [
              { t: "Choose your concept for a personal landing page or a concept you care about. Before opening Figma: find 3 references OUTSIDE the web — a magazine spread, an interior photograph, a film still. The feeling you want the page to have must come from somewhere real.", m: 15 },
              { t: "Sketch 3 layout directions on paper. Each should feel like it comes from your physical reference — not like a generic website. 10 minutes per sketch.", m: 30 },
              { t: "Build the high-fidelity Figma design. Apply your grid, color palette, and type system from previous weeks. Every decision traceable back to your reference.", m: 30 },
            ],
            anchor: "The best set designers build rooms that feel like they could exist because every object was chosen with specificity. That specificity — knowing why this color, this typeface, this spacing — is what separates work with a point of view from work that merely functions.",
          },
          {
            day: "Monday, July 21", label: "12:00 PM",
            track: "Both",
            duration: "75 min",
            title: "Connect Figma Design to Landing Page Code — Then Teach It Back",
            tasks: [
              { t: "Continue building the Odin Landing Page. Use what you designed in Figma as your reference — not the Odin example. Your design, your code.", m: 40 },
              { t: "Post your Figma design in Design Buddies #critique or the Odin Discord. Ask: 'Does the visual hierarchy lead the eye correctly?' Read every response.", m: 15 },
              { t: "FEYNMAN CLOSE: Write 'Flexbox alignment communicates...' and 'The reason I chose these specific references for my landing page is...' The second question is taste articulated. Practice it.", m: 20 },
            ],
            anchor: "Vignelli: 'The life of a designer is a life of fight against the ugliness.' Shipping a landing page that has a genuine point of view — however imperfect — is an act of defiance against generic design. Finish it.",
            feynman: true,
          },
        ],
        dailyHabit: "20 min/day: Work on the Odin Landing Page project on non-session days. Projects are where Odin actually teaches — the lessons are preparation, the projects are the education.",
      },
      {
        week: 8,
        theme: "CSS Grid + Editorial & Cinematic Taste",
        goal: "CSS Grid gives you two-dimensional control of space. Editorial design and film give you the taste to use that control with intention.",
        sessions: [
          {
            day: "Friday, July 25", label: "12:00 PM",
            track: "Code",
            duration: "90 min",
            title: "Odin: CSS Grid — Introduction, Sizing & Positioning",
            tasks: [
              { t: "Complete 'Introduction to Grid' lesson. Before reading: write down your mental model of how Grid differs from Flexbox. After reading: write how that model changed.", m: 30 },
              { t: "Complete CSS Grid sizing and placement lessons. For each property: state what problem it solves.", m: 30 },
              { t: "Complete CSS Grid Garden (cssgridgarden.com) — all levels. Understand before advancing.", m: 30 },
            ],
            anchor: "Grid gives you control of both axes simultaneously. That is the power a magazine art director has over a spread. Learn it at this level of depth — it is one of the most important tools you will use.",
          },
          {
            day: "Saturday, July 26", label: "12:00 PM",
            track: "Design",
            duration: "75 min",
            title: "Editorial Taste + Cinematic Composition",
            tasks: [
              { t: "Study Art of the Title (artofthetitle.com — free). Find 2 film title sequences that move you. For each: write what the typography communicates about the world you're about to enter. How does the motion reinforce the type?", m: 30 },
              { t: "Find 3 magazine spreads (photograph physical ones or find editorial work online from Kinfolk, T Magazine, or Monocle). Map the grid of each spread on paper. Where are the columns? Where does the image break the grid intentionally?", m: 25 },
              { t: "Add the best 3 finds to your Swipe File. Post one editorial analysis in Design Buddies or Reddit — not 'I like this' but 'here's why this works.'", m: 20 },
            ],
            anchor: "Brodovitch at Harper's Bazaar treated every spread like a stage — with blocking, tension, rhythm, and rest. A magazine spread and a CSS Grid layout are the same choreographic challenge. Study the masters of one to get better at the other.",
          },
          {
            day: "Monday, July 28", label: "12:00 PM",
            track: "Both",
            duration: "75 min",
            title: "Apply Grid to Your Design + Teach It Back",
            tasks: [
              { t: "Revisit your Week 7 Figma design. Apply a proper CSS Grid structure to it — column count, gutters, alignment to grid. Then rebuild the layout section in code using CSS Grid.", m: 40 },
              { t: "Watch one short episode of Abstract: The Art of Design (Netflix) — any episode. Write: what did this designer's process reveal about how they make decisions?", m: 20 },
              { t: "FEYNMAN CLOSE: Write 'CSS Grid differs from Flexbox in that...' and 'The reason a grid makes breaking it more powerful is...'", m: 15 },
            ],
            anchor: "Rand: 'There is no such thing as a boring project. Only boring designers.' Every layout challenge — a grid exercise, a magazine spread, a room — is an opportunity to make a decision that matters.",
            feynman: true,
          },
        ],
        dailyHabit: "20 min/day: Read one post on Siteinspire.com or Awwwards.com. Practice identifying: what grid system is the designer using? Where do they break it?",
      },
      {
        week: 9,
        theme: "JavaScript Begins + Figma Mastery",
        goal: "JavaScript is the hardest section of Odin Foundations — it is also where most people quit. Don't quit. Run it alongside Figma mastery so the design track keeps feeding your motivation.",
        sessions: [
          {
            day: "Friday, Aug 1", label: "12:00 PM",
            track: "Code",
            duration: "90 min",
            title: "Odin: JavaScript Fundamentals Part 1 — Variables & Data Types",
            tasks: [
              { t: "Complete 'JavaScript Fundamentals Part 1.' For every concept: type it in your VS Code terminal, run it, change it, break it deliberately. Reading alone does not build understanding in JS.", m: 50 },
              { t: "Complete the exercises at the end of the lesson. Do not move on until every exercise works.", m: 30 },
              { t: "Write in plain language: what is a variable? What is a data type? Why does the distinction matter? If you can't answer without looking, you're not done.", m: 10 },
            ],
            anchor: "Knuth: 'Beware of bugs in the above code; I have only proved it correct, not tried it.' Run everything. Trust nothing you haven't executed.",
          },
          {
            day: "Saturday, Aug 2", label: "12:00 PM",
            track: "Design",
            duration: "75 min",
            title: "Figma Components — Building a Design Vocabulary",
            tasks: [
              { t: "Complete Figma's official Components tutorial (free on figma.com/resources). After each concept: build it immediately. Watching without building is not learning.", m: 30 },
              { t: "Build a button component with 4 states: default, hover, focus, disabled. Each state must be intentional — not just visible. Why does each state look the way it does?", m: 25 },
              { t: "Study one published Figma community file — search 'design system' in Figma Community (free). Find one decision in it that you don't understand. Post the question in Design Buddies.", m: 20 },
            ],
            anchor: "Vignelli: 'Styles come and go. Good design is a language, not a style.' Components are that language. The more precise your vocabulary, the faster and clearer you think.",
          },
          {
            day: "Monday, Aug 4", label: "12:00 PM",
            track: "Both",
            duration: "75 min",
            title: "JS + Figma Connection — Then Teach It Back",
            tasks: [
              { t: "Continue Odin JS Fundamentals Part 2 — operators and comparisons. Write a function that takes two numbers and returns the larger one. No tutorial. Figure it out.", m: 40 },
              { t: "In Figma: build one more component from your landing page design — a card or a navigation item. Apply your color system and type scale.", m: 15 },
              { t: "FEYNMAN CLOSE: Write 'A variable in JavaScript is...' and 'A component in Figma is...' Then: 'These two concepts are related because...' The connection is real — find it.", m: 20 },
            ],
            anchor: "Maeda: 'Technology-inspired design is at the intersection of humanity and technology.' JavaScript and Figma components are both tools for making human experience more considered. One executes. One proposes. You need both.",
            feynman: true,
          },
        ],
        dailyHabit: "20 min/day: JS is hard. On off-days, do 20 minutes of Odin JS lessons or exercises. Consistency beats intensity here. Missing a week of JS and coming back cold is worse than slow daily progress.",
      },
      {
        week: 10,
        theme: "JS Problem Solving + Design Psychology",
        goal: "Problem solving is the core of JavaScript. Understanding human psychology is the core of design. Learn both this week — they will inform each other more than you expect.",
        sessions: [
          {
            day: "Friday, Aug 8", label: "12:00 PM",
            track: "Code",
            duration: "90 min",
            title: "Odin: JavaScript — Developer Tools, Errors & Problem Solving",
            tasks: [
              { t: "Complete 'JavaScript Developer Tools' lesson. Your browser's DevTools is your debugging environment for life. Learn it now at depth.", m: 25 },
              { t: "Complete 'Understanding Errors' lesson. Write: what are the 3 most common JS error types and what does each tell you about what went wrong?", m: 25 },
              { t: "Complete 'Problem Solving' lesson. Apply the problem solving framework to one real bug you've hit in your own code — not a tutorial bug.", m: 40 },
            ],
            anchor: "Feynman: 'The first step to knowing something is to recognize that you don't know it.' Errors are not failures — they are precise statements about what you don't understand yet.",
          },
          {
            day: "Saturday, Aug 9", label: "12:00 PM",
            track: "Design",
            duration: "75 min",
            title: "Norman's Principles Applied — Digital and Physical",
            tasks: [
              { t: "Pull out The Design of Everyday Things and reread Chapter 1 with fresh eyes — you now have 9 weeks of design practice behind you. Write: what do you understand now that you didn't when you first read it?", m: 25 },
              { t: "Find 3 things near you — physical objects — that violate Norman's principles. Photograph them. For each: name the specific principle violated and sketch a redesign that fixes it.", m: 30 },
              { t: "Find the digital equivalent of each physical failure — a confusing form, a hidden action, a missing feedback state. Write: same principle, different medium.", m: 20 },
            ],
            anchor: "Norman: 'Good design fits our needs so well that the design is invisible.' This is equally true for a checkout flow and a corridor in a museum. The goal — make the experience feel inevitable — is the same in every medium.",
          },
          {
            day: "Monday, Aug 11", label: "12:00 PM",
            track: "Both",
            duration: "75 min",
            title: "Apply Psychology to Your Own Work — Then Teach It Back",
            tasks: [
              { t: "Audit your Figma landing page design with Norman's lens: affordances, signifiers, feedback, mapping. Find 3 violations. Fix them. Screenshot before and after.", m: 35 },
              { t: "Audit the Odin Landing Page code: are the HTML semantics as clear as they could be? Does the code communicate the design intention?", m: 20 },
              { t: "FEYNMAN CLOSE: Write 'An affordance is...' using one digital and one physical example. Then: 'The principle connecting good software design and good physical design is...'", m: 20 },
            ],
            anchor: "Rams on his own work: 'You cannot understand good design if you do not understand people.' People are the constant. Every medium is just a different way of designing for them.",
            feynman: true,
          },
        ],
        dailyHabit: "20 min/day: Odin JS Fundamentals Part 3 (clean code and functions) on off-days. This section is where JS starts to feel like a real language. Don't rush it.",
      },
      {
        week: 11,
        theme: "JS Functions + Building a Visual World",
        goal: "Functions are the building blocks of JavaScript logic. A visual world is the building block of everything you will ever design. Develop both this week with the same rigor.",
        sessions: [
          {
            day: "Friday, Aug 15", label: "12:00 PM",
            track: "Code",
            duration: "90 min",
            title: "Odin: JS Fundamentals — Clean Code & Functions",
            tasks: [
              { t: "Complete 'Clean Code' lesson. Refactor one piece of your own code using every principle named. Renaming a variable to something precise is a design decision.", m: 30 },
              { t: "Complete 'JavaScript Fundamentals Part 3' — functions. Write 5 functions from scratch that solve small, real problems. No tutorials. Your own problems.", m: 50 },
              { t: "Post your best function in the Odin Discord with a comment explaining what it does and why you wrote it that way. Ask for one suggestion.", m: 10 },
            ],
            anchor: "Knuth: 'Let us concentrate on explaining to humans what we want the computer to do.' A function is a named explanation. A well-named function reads like a sentence about intent.",
          },
          {
            day: "Saturday, Aug 16", label: "12:00 PM",
            track: "Design",
            duration: "75 min",
            title: "Building a Visual World — Study the Practitioners",
            tasks: [
              { t: "Choose one practitioner who creates a coherent visual world across media: Wes Anderson (film, sets, graphics), Aesop (retail, web, packaging, editorial), or Kinfolk magazine (photography, spatial, editorial). Write one page: what are the 5 decisions that make their world coherent? What are the atoms of their visual language?", m: 40 },
              { t: "Apply this lens to your own Figma work: what are the 3 core decisions that define your developing visual world? Type choice, color palette, spatial rhythm? Write them explicitly.", m: 20 },
              { t: "Add 5 pieces to your Swipe File that represent coherent visual worlds — not just beautiful individual pieces. There is a difference.", m: 15 },
            ],
            anchor: "Wes Anderson's films are production design, costume, typography, and color working as one intelligence. That is the standard for any cross-medium designer. Every touchpoint speaks the same language.",
          },
          {
            day: "Monday, Aug 18", label: "12:00 PM",
            track: "Both",
            duration: "75 min",
            title: "Functions + Brand Tokens — Then Teach It Back",
            tasks: [
              { t: "In Figma: define your core design tokens — 3-color palette, 2-font system, spacing scale. These are the atoms of your visual world. Export them as CSS custom properties.", m: 30 },
              { t: "Apply your tokens to your landing page CSS. Every color and spacing value should come from a variable. Prove the system works.", m: 25 },
              { t: "FEYNMAN CLOSE: Write 'A JavaScript function is...' and 'A design token is...' Then: 'These two concepts are expressions of the same idea, which is...' Post in community. The answer will surprise people.", m: 20 },
            ],
            anchor: "Vignelli: 'The life of a designer is a life of fight against the ugliness.' Your design tokens are your position statement. They say: I have thought about this, and these are my answers.",
            feynman: true,
          },
        ],
        dailyHabit: "20 min/day: Begin the Odin Rock Paper Scissors project on off-days. This is your first real JavaScript project. Plan it on paper before writing a line of code.",
      },
      {
        week: 12,
        theme: "Phase 1 Retrospective — What Have You Built? Who Are You Becoming?",
        goal: "Reflection is not optional. The designers and developers who grow fastest are the ones who review their own work with more rigor than anyone else will.",
        sessions: [
          {
            day: "Friday, Aug 22", label: "12:00 PM",
            track: "Code",
            duration: "90 min",
            title: "Odin: Continue JS Projects — Review What You've Built",
            tasks: [
              { t: "Continue or complete the Odin Rock Paper Scissors project. Push to GitHub with a descriptive README.", m: 50 },
              { t: "Open every project from Weeks 1–11 on GitHub. Review each as if you're seeing it for the first time. Write: what holds up? What would you rebuild? Be specific — not 'it's bad' but 'I would change the naming convention because...'", m: 30 },
              { t: "List the 3 Odin sections remaining in Foundations. Estimate how many sessions each will take at your pace. Build a realistic timeline.", m: 10 },
            ],
            anchor: "Knuth reviewed his own work for decades. The standard of review you apply to your own code is the ceiling of your eventual quality. Never skip the retrospective.",
          },
          {
            day: "Saturday, Aug 23", label: "12:00 PM",
            track: "Design",
            duration: "75 min",
            title: "Swipe File Retrospective — Name Your Visual World",
            tasks: [
              { t: "Scroll your entire Swipe File — all three sections. What patterns appear? What do you save regardless of medium? Write: 5 words that describe your developing aesthetic. Not aspirational — honest.", m: 25 },
              { t: "Write 400 words: 'My visual world at Week 12.' What do you now see that you couldn't see in Week 1? What confuses you still? What has become obvious? What kind of environments, images, and objects do you want to design?", m: 35 },
              { t: "Share this reflection in Design Buddies or Read.cv. Making your taste public sharpens it. Responses from others will reveal what they see in your choices that you can't see yourself.", m: 15 },
            ],
            anchor: "Rand: 'Art is an idea that has found its perfect visual expression.' Your idea is forming. You can feel it in what you save, what you notice, what makes you stop. Phase 2 is about giving that idea a more precise expression.",
          },
          {
            day: "Monday, Aug 25", label: "12:00 PM",
            track: "Both",
            duration: "75 min",
            title: "Set Phase 2 Intentions — The Phase 1 Feynman Close",
            tasks: [
              { t: "Write: 3 specific, behavioral things you will do differently in Phase 2. Not 'be more consistent' — 'I will post work in community before I feel it's ready, starting Week 13.'", m: 20 },
              { t: "Set up your portfolio: Vite project, deploy to Vercel. Your URL should exist before Phase 2 begins. Empty is fine. It must exist.", m: 30 },
              { t: "PHASE 1 FEYNMAN CLOSE: Write one page. Question: 'What kind of designer am I becoming — on screen, on page, and in the world? And what do I still not understand?' Be honest. Keep it. The answer will change.", m: 25 },
            ],
            anchor: "Feynman at the end of his life: 'What I cannot create, I do not understand.' Phase 1 taught you to create the foundations. Phase 2 is where you begin to understand what they make possible.",
            feynman: true,
          },
        ],
        dailyHabit: "20 min/day: This week — rest from new content. Finish any open Odin projects. Write in your design journal. Let Phase 1 settle before Phase 2 begins.",
      },
    ],
  },
  {
    id: 1,
    label: "Phase 2",
    title: "Integration",
    subtitle: "~4 months · React + Deep Taste Development",
    color: "#F0FFF6",
    accent: "#00B85C",
    darkAccent: "#008040",
    tagline: "React for screen. Spatial visits, editorial study, and photography for everything else. Both tracks, every week.",
    weeks: [
      {
        week: 13,
        theme: "React Foundations + Spatial & Editorial Deep Dive",
        goal: "React is your primary digital building material. Spatial thinking and editorial study are your analog building materials. Develop all of them in parallel.",
        sessions: [
          {
            day: "Friday", label: "12:00 PM",
            track: "Code",
            duration: "90 min",
            title: "React: Thinking in Components",
            tasks: [
              { t: "Read Odin React intro AND React's official 'Thinking in React' page (react.dev — free). Both together give you the complete mental model. Write: what is the difference between a React component and an HTML element?", m: 30 },
              { t: "Build your first component: a Card with props for title, description, and CTA. Make it look good. Ugly React practice is a bad habit — the same standard applies to every line of code.", m: 40 },
              { t: "Install Tailwind CSS in the project. Apply base styling. Note: how does utility-first CSS feel different from writing custom CSS?", m: 20 },
            ],
            anchor: "A React component is a reusable design decision. A recurring spatial element in a considered room — a window proportion, a material palette, a light fixture — is the same concept. Both are design languages built from intelligent repetition.",
          },
          {
            day: "Saturday", label: "12:00 PM",
            track: "Design",
            duration: "75 min",
            title: "Visit a Designed Space — Intentionally",
            tasks: [
              { t: "Visit a museum, gallery, boutique, hotel lobby, or restaurant you consider well-designed. Spend 30 min there with full attention. Photograph it. Write: what 5 specific design decisions define the experience? Light quality, material selection, spatial sequence, scale, sound, color?", m: 40 },
              { t: "Start DesignCode.io React course (designcode.io — paid, ~$99/year, worth it for Phase 2) — Lessons 1–2. Note every place a Figma decision maps directly to a React decision.", m: 20 },
              { t: "Post your spatial analysis in Design Buddies. Ask: has anyone else done this? What did they notice that you didn't?", m: 15 },
            ],
            anchor: "Ilse Crawford spends months observing a space before designing it. That depth of observation is what produces work that feels inevitable rather than imposed. Begin developing that habit now.",
          },
          {
            day: "Monday", label: "12:00 PM",
            track: "Both",
            duration: "75 min",
            title: "React + Spatial Translation — Then Teach It Back",
            tasks: [
              { t: "Scaffold Vite + React. Convert your Phase 1 landing page into components: Nav, Hero, Card, Footer. Each in its own file.", m: 40 },
              { t: "Take one observation from your spatial visit — a proportion, a color relationship, a spatial rhythm — and translate it into a design decision for your landing page.", m: 20 },
              { t: "FEYNMAN CLOSE: Write 'React components differ from HTML elements in that...' and 'Observing a designed space teaches a digital designer...' Post both in community.", m: 15 },
            ],
            anchor: "The designers who move fluidly between media never stop studying — in galleries, in restaurants, in books, in theaters. The screen is one surface. Let everything else sharpen your eye for it.",
            feynman: true,
          },
        ],
        dailyHabit: "20 min/day: Continue Odin JS on non-session days — Etch-a-Sketch and Calculator projects are ahead. Don't abandon Odin for React. Both are required.",
      },
    ],
  },
  {
    id: 2,
    label: "Phase 3",
    title: "Systems Thinking",
    subtitle: "~3 months · Design Systems + Visual World",
    color: "#FFF5FF",
    accent: "#9900FF",
    darkAccent: "#7700CC",
    tagline: "Build systems that scale: from token to typeface, from component to room, from favicon to magazine cover.",
    weeks: [
      {
        week: 29,
        theme: "Design Systems + Visual World Systems",
        goal: "A design system governs digital components. A visual world system governs everything. Build toward the larger thing — that's where cross-medium designers live.",
        sessions: [
          {
            day: "Friday", label: "12:00 PM",
            track: "Design",
            duration: "75 min",
            title: "Atomic Design — The Mental Model for Any System",
            tasks: [
              { t: "Read Brad Frost's Atomic Design: Chapters 1–2 (free at bradfrost.com). For each level — atom, molecule, organism — find the equivalent in a magazine's editorial system AND in a well-designed interior.", m: 35 },
              { t: "Audit your Figma work from Phases 1–2. And audit your Swipe File. What visual decisions appear consistently across digital, editorial, and spatial categories? Those are the atoms of your personal design language.", m: 25 },
              { t: "Write your one-page 'Visual World Document': typefaces, color palette, spatial references, photographic references, emotional register. This is your design system for every medium.", m: 15 },
            ],
            anchor: "Wes Anderson's visual world runs on a design system — specific palette, symmetrical grammar, precise typography, a particular material sensibility. It is as rigorous as any component library. More personal, probably.",
          },
          {
            day: "Saturday", label: "12:00 PM",
            track: "Code",
            duration: "75 min",
            title: "Storybook — Where Your System Lives in Code",
            tasks: [
              { t: "Install Storybook in your React project. Read the official intro docs before running a command.", m: 20 },
              { t: "Write stories for Button (4 states), Card (3 variants), Input (default, error, disabled). Each story is a design decision made explicit and testable.", m: 40 },
              { t: "Read Design Systems Handbook, Chapter 1 (free PDF — search 'InVision design systems handbook'). Note where the principles apply beyond digital.", m: 15 },
            ],
            anchor: "Storybook makes design system intentions visible in code. A well-documented component library is the closest thing code has to a published design manual.",
          },
          {
            day: "Monday", label: "12:00 PM",
            track: "Both",
            duration: "75 min",
            title: "Token Parity — Figma to CSS — Then Teach It Back",
            tasks: [
              { t: "Define your complete token set in Figma Variables AND CSS custom properties. Color, spacing, type scale. Every token semantically named. Mirror them exactly.", m: 40 },
              { t: "Verify: open Figma and your CSS file side by side. Every Figma token should have an exact CSS counterpart. Any mismatch is a system failure.", m: 20 },
              { t: "FEYNMAN CLOSE: Write 'Design tokens work across a system because...' and 'A visual world system differs from a mood board because...'", m: 15 },
            ],
            anchor: "Rams: 'Good design is thorough down to the last detail.' Token parity is that thoroughness — the spec and the code tell the same story.",
            feynman: true,
          },
        ],
        dailyHabit: "20 min/day: Study one component from a public design system (Material, Linear, Vercel). Write: what decision did they make and why does it make sense?",
      },
    ],
  },
  {
    id: 3,
    label: "Phase 4",
    title: "Ship & Specialize",
    subtitle: "Ongoing · Build publicly, develop a point of view",
    color: "#FFF8F0",
    accent: "#FF6600",
    darkAccent: "#CC4400",
    tagline: "Build publicly. Find your medium — or refuse to choose one. The best designers never did.",
    weeks: [
      {
        week: 41,
        theme: "Portfolio — Work That Exists in the World",
        goal: "Your portfolio must communicate a point of view before anyone reads a project title. The analog demand is growing. Show work that lives on screen AND in the world.",
        sessions: [
          {
            day: "Friday", label: "12:00 PM",
            track: "Design",
            duration: "75 min",
            title: "Portfolio as Visual World — Not a Project List",
            tasks: [
              { t: "Study three cross-medium portfolios: Pentagram (pentagram.com), 2x4 (2x4.org), or Sagmeister & Walsh. Write: how does each communicate a point of view before you read a single project description? What are the 3 decisions that make that possible?", m: 30 },
              { t: "Inventory your work: digital projects, editorial experiments, spatial studies, photographs. Map them. Your portfolio needs at least one project that shows your point of view across more than one medium.", m: 25 },
              { t: "Write your bio. Read it out loud. Does it sound like a person with something to say — or a resume? Rewrite until it sounds like you.", m: 20 },
            ],
            anchor: "Rand: 'Don't try to be original. Just try to be good.' Good means: a coherent point of view, expressed with precision and conviction, in every medium you choose to work in.",
          },
          {
            day: "Saturday", label: "12:00 PM",
            track: "Code",
            duration: "75 min",
            title: "Build in Next.js — Production Grade from Day One",
            tasks: [
              { t: "Scaffold Next.js portfolio. Read the 'Getting Started' docs before writing a component.", m: 20 },
              { t: "Build home page structure. Framer Motion transitions from the start — not added later.", m: 40 },
              { t: "Deploy to Vercel. Your portfolio must exist before it has content. Iterate in public.", m: 15 },
            ],
            anchor: "Every practitioner eventually has to ship. The film has to screen. The magazine has to print. The website has to deploy. Ship.",
          },
          {
            day: "Monday", label: "12:00 PM",
            track: "Both",
            duration: "75 min",
            title: "First Case Study + Name Your Direction",
            tasks: [
              { t: "Write your first case study — your strongest Phase 1 project. Structure: the visual world you were building toward, the 3 most important decisions, what you built, what the work taught you about your point of view. 400 words minimum.", m: 35 },
              { t: "Name your specialization direction: set design, interior design, editorial, photography, digital product, or the designer who refuses to specialize. Write: why this? What work points toward it?", m: 20 },
              { t: "FINAL FEYNMAN CLOSE: Write 'What kind of designer am I, and what do I have to say that no one else is saying — in any medium?' Answer honestly. This is not the last time you will answer it.", m: 20 },
            ],
            anchor: "Feynman: 'Study hard what interests you the most in the most undisciplined, irreverent and original manner possible.' You are not becoming a good designer. You are becoming someone who changes what good means.",
            feynman: true,
          },
        ],
        dailyHabit: "20 min/day: Post one piece of work, one observation, or one question publicly every week — Read.cv, Design Buddies, Reddit. Your public practice is your reputation being built in real time.",
      },
    ],
  },
];


const ODIN_SECTIONS = [
  { id:"intro",    title:"Introduction",     accent:"#00A896", lessons:[
    { id:"i1", title:"How This Course Will Work",       done:true,  date:"" },
    { id:"i2", title:"Introduction to Web Development", done:true,  date:"" },
    { id:"i3", title:"Motivation and Mindset",          done:true,  date:"" },
    { id:"i4", title:"Asking For Help",                 done:true,  date:"" },
    { id:"i5", title:"Join the Odin Community",         done:true,  date:"" },
  ]},
  { id:"prereqs", title:"Prerequisites",    accent:"#E07B39", lessons:[
    { id:"p1", title:"How Does the Web Work?", done:true,  date:"" },
    { id:"p2", title:"Installations",          done:false, date:"" },
    { id:"p3", title:"Text Editors",           done:false, date:"" },
    { id:"p4", title:"Command Line Basics",    done:false, date:"" },
    { id:"p5", title:"Setting up Git",         done:false, date:"" },
  ]},
  { id:"git",  title:"Git Basics",          accent:"#0B7A75", lessons:[
    { id:"g1", title:"Introduction to Git", done:false, date:"" },
    { id:"g2", title:"Git Basics",          done:false, date:"" },
  ]},
  { id:"html", title:"HTML Foundations",    accent:"#C1440E", lessons:[
    { id:"h1", title:"Introduction to HTML and CSS", done:false, date:"" },
    { id:"h2", title:"Elements and Tags",             done:false, date:"" },
    { id:"h3", title:"HTML Boilerplate",              done:false, date:"" },
    { id:"h4", title:"Working with Text",             done:false, date:"" },
    { id:"h5", title:"Lists",                         done:false, date:"" },
    { id:"h6", title:"Links and Images",              done:false, date:"" },
    { id:"h7", title:"Commit Messages",               done:false, date:"" },
    { id:"h8", title:"Project: Recipes",              done:false, date:"", isProject:true },
  ]},
  { id:"css",  title:"CSS Foundations",     accent:"#1A5C8A", lessons:[
    { id:"c1", title:"Intro to CSS",            done:false, date:"" },
    { id:"c2", title:"The Cascade",             done:false, date:"" },
    { id:"c3", title:"Inspecting HTML and CSS", done:false, date:"" },
    { id:"c4", title:"The Box Model",           done:false, date:"" },
    { id:"c5", title:"Block and Inline",        done:false, date:"" },
  ]},
  { id:"flex", title:"Flexbox",             accent:"#D4622A", lessons:[
    { id:"f1", title:"Introduction to Flexbox", done:false, date:"" },
    { id:"f2", title:"Growing and Shrinking",   done:false, date:"" },
    { id:"f3", title:"Axes",                    done:false, date:"" },
    { id:"f4", title:"Alignment",               done:false, date:"" },
    { id:"f5", title:"Project: Landing Page",   done:false, date:"", isProject:true },
  ]},
  { id:"js",   title:"JavaScript Basics",   accent:"#1B7F5E", lessons:[
    { id:"j1",  title:"Variables and Operators",        done:false, date:"" },
    { id:"j2",  title:"Installing Node.js",             done:false, date:"" },
    { id:"j3",  title:"Data Types and Conditionals",    done:false, date:"" },
    { id:"j4",  title:"JavaScript Developer Tools",     done:false, date:"" },
    { id:"j5",  title:"Function Basics",                done:false, date:"" },
    { id:"j6",  title:"Problem Solving",                done:false, date:"" },
    { id:"j7",  title:"Understanding Errors",           done:false, date:"" },
    { id:"j8",  title:"Project: Rock Paper Scissors",   done:false, date:"", isProject:true },
    { id:"j9",  title:"Clean Code",                     done:false, date:"" },
    { id:"j10", title:"Loops and Arrays",               done:false, date:"" },
    { id:"j11", title:"DOM Manipulation and Events",    done:false, date:"" },
    { id:"j12", title:"Revisiting Rock Paper Scissors", done:false, date:"" },
    { id:"j13", title:"Project: Etch-a-Sketch",         done:false, date:"", isProject:true },
    { id:"j14", title:"Object Basics",                  done:false, date:"" },
    { id:"j15", title:"Project: Calculator",            done:false, date:"", isProject:true },
  ]},
  { id:"end",  title:"Conclusion",          accent:"#5A6E78", lessons:[
    { id:"cl1", title:"Choose Your Path Forward", done:false, date:"" },
  ]},
];

const BG      = "#F0EDE5";
const SURFACE = "#FFFFFF";
const HERO    = "#0D3B47";
const BORDER  = "#DDD7CC";
const TEXT    = "#181614";
const MUTED   = "#6B6259";
const GOLD    = "#E8A630";

const PHASE_ACCENTS = ["#00A896","#E07B39","#1A5C8A","#1B7F5E"];
const TRACK_ACCENTS = { Code:"#1A5C8A", Design:"#D4622A", Both:"#00A896" };

export default function App() {
  const [tab, setTab] = useState("syllabus");
  const [activePhase, setActivePhase] = useState(0);
  const [activeWeekIdx, setActiveWeekIdx] = useState(0);

  const buildInitial = () => {
    const init = {};
    PHASES.forEach((ph,pi) => ph.weeks.forEach((w,wi) => w.sessions.forEach((s,si) =>
      s.tasks.forEach((t,ti) => { if(t.done) init[`p${pi}-w${wi}-s${si}-t${ti}`]=true; })
    )));
    return init;
  };
  const [completed, setCompleted] = useState(buildInitial);

  const initOdin = () => Object.fromEntries(
    ODIN_SECTIONS.flatMap(s => s.lessons).map(l => [l.id,{ done:l.done, date:l.date }])
  );
  const [odin, setOdin] = useState(initOdin);

  const toggleOdin = id => setOdin(p => ({ ...p, [id]:{ ...p[id], done:!p[id].done } }));
  const setOdinDate = (id,v) => setOdin(p => ({ ...p, [id]:{ ...p[id], date:v } }));

  const odinFlat = ODIN_SECTIONS.flatMap(s => s.lessons.map(l => ({ ...l,...(odin[l.id]||{}) })));
  const odinDone = odinFlat.filter(l=>l.done).length;
  const odinTotal = odinFlat.length;
  const pct = Math.round((odinDone/odinTotal)*100);

  const phase = PHASES[activePhase];
  const week = phase.weeks[activeWeekIdx] || phase.weeks[0];
  const accent = PHASE_ACCENTS[activePhase];

  const toggleTask = (si,ti) => {
    const k = `p${activePhase}-w${activeWeekIdx}-s${si}-t${ti}`;
    setCompleted(p => ({ ...p, [k]:!p[k] }));
  };
  const getDone = (si,ti) => !!completed[`p${activePhase}-w${activeWeekIdx}-s${si}-t${ti}`];

  return (
    <div style={{ minHeight:"100vh", background:BG, fontFamily:"'Inter','Helvetica Neue',sans-serif", color:TEXT }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');
        @import url('https://api.fontshare.com/v2/css?f[]=clash-display@600,700&display=swap');
        * { box-sizing:border-box; margin:0; padding:0; }
        ::-webkit-scrollbar { width:3px; }
        ::-webkit-scrollbar-thumb { background:${BORDER}; border-radius:2px; }
        input[type=text]:focus { outline:none; }
        button { cursor:pointer; font-family:inherit; }
      `}</style>

      {/* NAV */}
      <div style={{ background:SURFACE, borderBottom:`1px solid ${BORDER}`, padding:"0 36px", display:"flex", alignItems:"stretch", position:"sticky", top:0, zIndex:20, boxShadow:"0 1px 3px rgba(0,0,0,0.06)" }}>
        <div style={{ display:"flex", alignItems:"center", gap:"10px", paddingRight:"28px", marginRight:"4px", borderRight:`1px solid ${BORDER}` }}>
          <div style={{ width:"8px", height:"8px", borderRadius:"50%", background:accent, boxShadow:`0 0 0 3px ${accent}33` }} />
          <span style={{ fontFamily:"'Clash Display',sans-serif", fontSize:"13px", fontWeight:700, color:TEXT, letterSpacing:"0.05em", textTransform:"uppercase" }}>Full Stack Designer</span>
        </div>
        {[{ key:"syllabus", label:"Syllabus" },{ key:"odin", label:`Odin — ${odinDone}/${odinTotal}` }].map(({key,label}) => (
          <button key={key} onClick={() => setTab(key)} style={{
            background:"none", border:"none", padding:"0 20px", height:"49px",
            fontSize:"12px", fontWeight: tab===key ? 600 : 400,
            color: tab===key ? TEXT : MUTED,
            borderBottom: tab===key ? `2px solid ${accent}` : "2px solid transparent",
            letterSpacing:"0.05em", textTransform:"uppercase", transition:"all 0.15s",
          }}>{label}</button>
        ))}
      </div>

      {tab === "odin" ? (
        <div style={{ maxWidth:"680px", margin:"0 auto", padding:"48px 24px" }}>

          {/* Hero stat */}
          <div style={{ background:HERO, borderRadius:"16px", padding:"36px 40px", marginBottom:"36px", display:"flex", alignItems:"center", gap:"40px", position:"relative", overflow:"hidden" }}>
            {/* decorative circle */}
            <div style={{ position:"absolute", right:"-40px", top:"-40px", width:"180px", height:"180px", borderRadius:"50%", background:"#00A89620", pointerEvents:"none" }} />
            <div>
              <div style={{ fontFamily:"'Clash Display',sans-serif", fontSize:"72px", fontWeight:700, color:"#fff", letterSpacing:"-0.04em", lineHeight:1 }}>
                {pct}<span style={{ color:GOLD }}>%</span>
              </div>
              <p style={{ fontSize:"12px", color:"#5B8A96", marginTop:"10px", letterSpacing:"0.07em", textTransform:"uppercase" }}>
                {odinDone} of {odinTotal} · Foundations
              </p>
            </div>
            <div style={{ flex:1 }}>
              <div style={{ height:"6px", background:"#0A2A33", borderRadius:"3px", overflow:"hidden", marginBottom:"10px" }}>
                <div style={{ height:"100%", width:`${pct}%`, background:GOLD, borderRadius:"3px", transition:"width 0.4s ease" }} />
              </div>
              <p style={{ fontSize:"11px", color:"#3D6874", letterSpacing:"0.06em", textTransform:"uppercase" }}>{odinTotal-odinDone} lessons remaining</p>
            </div>
          </div>

          {ODIN_SECTIONS.map(section => {
            const sl = section.lessons.map(l => ({ ...l,...(odin[l.id]||{}) }));
            const sd = sl.filter(l=>l.done).length;
            const sp = Math.round((sd/sl.length)*100);
            const done = sd===sl.length;
            return (
              <div key={section.id} style={{ background:SURFACE, borderRadius:"12px", border:`1px solid ${BORDER}`, marginBottom:"10px", overflow:"hidden" }}>
                <div style={{ padding:"14px 20px", display:"flex", alignItems:"center", gap:"12px", borderBottom:`1px solid #F0EBE2` }}>
                  <div style={{ width:"10px", height:"10px", borderRadius:"50%", background:section.accent, flexShrink:0, boxShadow:`0 0 0 3px ${section.accent}22` }} />
                  <span style={{ fontFamily:"'Clash Display',sans-serif", fontSize:"14px", fontWeight:700, color:TEXT, flex:1, letterSpacing:"-0.01em" }}>{section.title}</span>
                  <div style={{ display:"flex", alignItems:"center", gap:"10px" }}>
                    <div style={{ width:"80px", height:"3px", background:"#EDE8DF", borderRadius:"2px", overflow:"hidden" }}>
                      <div style={{ height:"100%", width:`${sp}%`, background:section.accent, borderRadius:"2px", transition:"width 0.3s" }} />
                    </div>
                    <span style={{ fontSize:"11px", fontWeight:600, color:done ? section.accent : MUTED, whiteSpace:"nowrap", letterSpacing:"0.03em" }}>
                      {done ? "✓ Done" : `${sd}/${sl.length}`}
                    </span>
                  </div>
                </div>
                {sl.map((lesson,idx) => (
                  <div key={lesson.id} style={{
                    display:"flex", alignItems:"center", gap:"14px", padding:"11px 20px",
                    borderBottom: idx<sl.length-1 ? "1px solid #F7F4EF" : "none",
                    background: lesson.done ? `${section.accent}09` : "transparent",
                    transition:"background 0.15s",
                  }}>
                    <button onClick={() => toggleOdin(lesson.id)} style={{
                      width:"20px", height:"20px", borderRadius:"50%", flexShrink:0, border:"none",
                      background: lesson.done ? section.accent : "transparent",
                      outline: lesson.done ? "none" : `1.5px solid ${BORDER}`,
                      display:"flex", alignItems:"center", justifyContent:"center", transition:"all 0.2s",
                      boxShadow: lesson.done ? `0 0 0 3px ${section.accent}22` : "none",
                    }}>
                      {lesson.done && <svg width="9" height="7" viewBox="0 0 9 7" fill="none"><path d="M1 3.5L3.5 6L8 1" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                    </button>
                    <span style={{
                      flex:1, fontSize:"13px", lineHeight:1.5,
                      color: lesson.done ? MUTED : TEXT,
                      textDecoration: lesson.done ? "line-through" : "none",
                      textDecorationColor:"#C4BBB0",
                      fontStyle: lesson.isProject ? "italic" : "normal",
                      fontWeight: lesson.isProject ? 500 : 400,
                    }}>
                      {lesson.isProject && <span style={{ color:section.accent, marginRight:"6px", fontStyle:"normal", fontSize:"10px" }}>◆</span>}
                      {lesson.title}
                    </span>
                    <input type="text" value={lesson.date} onChange={e => setOdinDate(lesson.id,e.target.value)}
                      placeholder="MM/DD"
                      style={{
                        width:"62px", fontSize:"12px", textAlign:"center", background:"transparent",
                        border: lesson.date ? `1px solid ${section.accent}` : `1px solid ${BORDER}`,
                        borderRadius:"6px", padding:"4px 6px",
                        color: lesson.date ? section.accent : MUTED,
                        transition:"border 0.15s, color 0.15s",
                      }}
                    />
                  </div>
                ))}
              </div>
            );
          })}
        </div>

      ) : (
        <div style={{ display:"flex", height:"calc(100vh - 49px)" }}>

          {/* Sidebar */}
          <div style={{ width:"224px", flexShrink:0, background:SURFACE, borderRight:`1px solid ${BORDER}`, overflowY:"auto", padding:"20px 0" }}>
            {PHASES.map((p,pi) => {
              const ac = PHASE_ACCENTS[pi];
              return (
                <div key={pi} style={{ marginBottom:"20px" }}>
                  <div style={{ fontSize:"10px", fontWeight:600, letterSpacing:"0.12em", textTransform:"uppercase", color:"#BDB5AA", padding:"0 20px", marginBottom:"6px" }}>
                    {p.label}
                  </div>
                  {p.weeks.map((w,wi) => {
                    const isActive = pi===activePhase && wi===activeWeekIdx;
                    return (
                      <button key={wi} onClick={() => { setActivePhase(pi); setActiveWeekIdx(wi); }} style={{
                        width:"100%", textAlign:"left", border:"none",
                        background: isActive ? `${ac}14` : "transparent",
                        borderLeft: isActive ? `3px solid ${ac}` : "3px solid transparent",
                        padding:"9px 20px", marginBottom:"1px", transition:"all 0.12s",
                      }}>
                        <div style={{ fontSize:"10px", fontWeight:600, letterSpacing:"0.06em", textTransform:"uppercase", color: isActive ? ac : "#BDB5AA", marginBottom:"3px" }}>Wk {w.week}</div>
                        <div style={{ fontSize:"12px", color: isActive ? TEXT : MUTED, lineHeight:1.4, fontWeight: isActive ? 600 : 400 }}>{w.theme}</div>
                      </button>
                    );
                  })}
                </div>
              );
            })}
          </div>

          {/* Main */}
          <div style={{ flex:1, overflowY:"auto", background:BG }}>

            {/* Week hero — deep ocean teal, not black */}
            <div style={{ background:HERO, padding:"36px 48px", position:"relative", overflow:"hidden" }}>
              <div style={{ position:"absolute", right:"-60px", bottom:"-60px", width:"240px", height:"240px", borderRadius:"50%", background:`${accent}18`, pointerEvents:"none" }} />
              <div style={{ display:"flex", alignItems:"center", gap:"8px", marginBottom:"14px" }}>
                <div style={{ width:"7px", height:"7px", borderRadius:"50%", background:GOLD, boxShadow:`0 0 0 3px ${GOLD}33` }} />
                <span style={{ fontSize:"11px", fontWeight:600, letterSpacing:"0.1em", textTransform:"uppercase", color:"#4E8494" }}>
                  {phase.label} · Week {week.week}
                </span>
              </div>
              <h2 style={{ fontFamily:"'Clash Display',sans-serif", fontSize:"clamp(26px,3.5vw,42px)", fontWeight:700, color:"#fff", letterSpacing:"-0.03em", lineHeight:1.1, marginBottom:"14px" }}>
                {week.theme}
              </h2>
              <p style={{ fontSize:"14px", color:"#4E8494", lineHeight:1.8, maxWidth:"520px", fontWeight:300 }}>
                {week.goal}
              </p>
            </div>

            <div style={{ padding:"28px 48px", display:"flex", flexDirection:"column", gap:"12px" }}>

              {week.dailyHabit && (
                <div style={{ background:SURFACE, border:`1px solid ${BORDER}`, borderLeft:`4px solid ${GOLD}`, borderRadius:"0 10px 10px 0", padding:"14px 18px" }}>
                  <div style={{ fontSize:"10px", fontWeight:600, letterSpacing:"0.1em", textTransform:"uppercase", color:GOLD, marginBottom:"5px" }}>Daily · 20 min</div>
                  <p style={{ fontSize:"13px", color:MUTED, lineHeight:1.7, fontWeight:300 }}>{week.dailyHabit}</p>
                </div>
              )}

              {week.sessions.map((session,si) => {
                const tc = TRACK_ACCENTS[session.track] || accent;
                const checkable = session.tasks.filter(t=>t.m>0);
                const doneN = checkable.filter((_,i) => getDone(si,session.tasks.indexOf(checkable[i]))).length;
                const allDone = checkable.length>0 && doneN===checkable.length;
                const pctS = checkable.length ? Math.round((doneN/checkable.length)*100) : 0;
                return (
                  <div key={si} style={{ background:SURFACE, border:`1px solid ${BORDER}`, borderRadius:"12px", overflow:"hidden" }}>
                    <div style={{ height:"3px", background:"#EDE8DF" }}>
                      <div style={{ height:"100%", width:`${pctS}%`, background:tc, transition:"width 0.3s", borderRadius:"0 2px 2px 0" }} />
                    </div>
                    <div style={{ padding:"16px 20px 12px", borderBottom:"1px solid #F5F0E8" }}>
                      <div style={{ display:"flex", alignItems:"center", gap:"8px", marginBottom:"8px", flexWrap:"wrap" }}>
                        <span style={{ fontSize:"10px", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", color:tc }}>{session.track}</span>
                        {checkable.reduce((a,t)=>a+t.m,0)>0 &&
                          <span style={{ fontSize:"11px", color:"#C4BBB0" }}>· {checkable.reduce((a,t)=>a+t.m,0)} min</span>}
                        {session.feynman && (
                          <span style={{ background:`${GOLD}1A`, color:"#A06A10", fontSize:"10px", fontWeight:600, padding:"2px 9px", borderRadius:"20px", letterSpacing:"0.04em" }}>✎ Feynman close</span>
                        )}
                        {allDone && (
                          <span style={{ marginLeft:"auto", background:tc, color:"#fff", fontSize:"10px", fontWeight:700, padding:"2px 10px", borderRadius:"20px", letterSpacing:"0.06em", textTransform:"uppercase" }}>Done ✓</span>
                        )}
                      </div>
                      <p style={{ fontFamily:"'Clash Display',sans-serif", fontSize:"16px", fontWeight:700, color:TEXT, letterSpacing:"-0.02em", lineHeight:1.3 }}>{session.title}</p>
                    </div>
                    <div style={{ padding:"2px 20px" }}>
                      {session.tasks.map((task,ti) => {
                        const isLabel = task.m===0;
                        const done = getDone(si,ti);
                        return (
                          <div key={ti} onClick={() => !isLabel && toggleTask(si,ti)} style={{
                            display:"flex", alignItems:"flex-start", gap:"12px", padding:"10px 0",
                            borderBottom: ti<session.tasks.length-1 ? "1px solid #F7F4EF" : "none",
                            cursor: isLabel ? "default" : "pointer",
                            opacity: (!isLabel && done) ? 0.38 : 1, transition:"opacity 0.15s",
                          }}>
                            {!isLabel && (
                              <div style={{
                                width:"17px", height:"17px", borderRadius:"4px", flexShrink:0, marginTop:"2px",
                                border: done ? "none" : `1.5px solid ${BORDER}`,
                                background: done ? tc : "transparent",
                                display:"flex", alignItems:"center", justifyContent:"center", transition:"all 0.15s",
                              }}>
                                {done && <svg width="8" height="6" viewBox="0 0 8 6" fill="none"><path d="M1 3L3 5L7 1" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                              </div>
                            )}
                            <span style={{
                              flex:1, fontSize:"13px", lineHeight:1.65, fontWeight: isLabel ? 600 : 300,
                              color: isLabel ? tc : done ? MUTED : TEXT,
                              textDecoration: (!isLabel && done) ? "line-through" : "none",
                              textDecorationColor:"#C4BBB0",
                            }}>{task.t}</span>
                            {task.m>0 && <span style={{ fontSize:"11px", color:"#C4BBB0", flexShrink:0, paddingTop:"2px" }}>{task.m}m</span>}
                          </div>
                        );
                      })}
                    </div>
                    {session.anchor && (
                      <div style={{ padding:"12px 20px 16px", borderTop:"1px solid #F5F0E8", background:"#FAFAF7" }}>
                        <p style={{ fontSize:"12px", color:MUTED, lineHeight:1.8, fontStyle:"italic", fontWeight:300, paddingLeft:"12px", borderLeft:`2px solid ${tc}55` }}>
                          {session.anchor}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}

              <div style={{ display:"flex", justifyContent:"space-between", paddingTop:"20px", marginTop:"4px", borderTop:`1px solid ${BORDER}` }}>
                <button onClick={() => {
                  if(activeWeekIdx>0) setActiveWeekIdx(activeWeekIdx-1);
                  else if(activePhase>0){ setActivePhase(activePhase-1); setActiveWeekIdx(PHASES[activePhase-1].weeks.length-1); }
                }} disabled={activePhase===0&&activeWeekIdx===0} style={{
                  background:SURFACE, border:`1px solid ${BORDER}`, borderRadius:"8px", padding:"9px 20px",
                  fontSize:"12px", fontWeight:500, color: activePhase===0&&activeWeekIdx===0 ? BORDER : MUTED,
                  letterSpacing:"0.04em", textTransform:"uppercase",
                }}>← Prev</button>
                <button onClick={() => {
                  if(activeWeekIdx<phase.weeks.length-1) setActiveWeekIdx(activeWeekIdx+1);
                  else if(activePhase<PHASES.length-1){ setActivePhase(activePhase+1); setActiveWeekIdx(0); }
                }} disabled={activePhase===PHASES.length-1&&activeWeekIdx===phase.weeks.length-1} style={{
                  background:accent, border:"none", borderRadius:"8px", padding:"9px 20px",
                  fontSize:"12px", fontWeight:600, color:"#fff",
                  letterSpacing:"0.04em", textTransform:"uppercase",
                }}>Next →</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}