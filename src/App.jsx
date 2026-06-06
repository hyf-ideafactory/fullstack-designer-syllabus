import { useState, useEffect } from "react";

const PHASES = [
  {
    id: 0, label: "Phase 1", title: "Foundations",
    subtitle: "~6 months part-time · Daily progress",
    color: "#F0F7FF", accent: "#0066FF", darkAccent: "#0044CC",
    tagline: "Code and eye in parallel. Design taste is built daily, not weekly.",
    weeks: [
      {
        week: 1,
        theme: "Cultivating My Taste Before Anything Else",
        goal: "Week 1 is about orienting my whole way of seeing. I'm not starting a curriculum — I'm starting to notice the world like a designer.",
        sessions: [
          {
            track: "Design", duration: "75 min",
            title: "Establishing My Swipe File",
            tasks: [
              { t: "Create Swipe File — three folders: Digital, Editorial/Print, Spatial/World. Save 5 pieces in each that genuinely stop you. Not things you think are good. Things that make you feel something.", m: 20 },
              { t: "Set up Read.cv profile. Two sentences about what you're building toward. First public commitment as a designer.", m: 15 },
              { t: "Go somewhere designed with intention — a museum, gallery, well-designed store or restaurant. Spend 30 minutes with full attention. Photograph it. Write: what 3 specific decisions made it feel the way it did?", m: 40 },
            ],
            anchor: "Brodovitch told his students: 'If you look at a page and it doesn't astonish you, throw it away.' Training my eye in the physical world is the fastest way to develop taste that shows up on screen.",
          },
          {
            track: "Both", duration: "75 min",
            title: "Visual Hierarchy — Seeing It Everywhere",
            tasks: [
              { t: "Open Stripe.com, find a magazine spread, find a room you find beautiful. For each: number every element in the order your eye hits it. Write WHY — size, contrast, position, whitespace, color.", m: 35 },
              { t: "Sketch the hierarchy of one of those three compositions on paper — rectangles and lines only. No detail, just weight and position.", m: 20 },
              { t: "FEYNMAN CLOSE: Write 'Visual hierarchy means...' using one digital example and one from the space you visited. Where you get vague, there's a gap. Fix it.", m: 20 },
            ],
            anchor: "Brodovitch: 'If you look at a page and it doesn't astonish you, throw it away.' Training my eye to recognize — and demand — that astonishment.",
            feynman: true,
          },
        ],
        dailyHabit: "Add 1 thing to the Swipe File every day. Notice design everywhere — storefronts, menus, packaging, buildings. Photograph one piece of exceptional physical design per day.",
      },
      {
        week: 2,
        theme: "Color as Feeling, Not Decoration",
        goal: "Color is the first thing a viewer feels before they read a word. This week I stop treating it as decoration and start treating it as information.",
        sessions: [
          {
            track: "Design", duration: "75 min",
            title: "Color as Atmosphere — The Real Lesson",
            tasks: [
              { t: "Watch Josef Albers 'Interaction of Color' intro on YouTube (Yale free excerpts). Write: what surprised you about how color behaves next to other colors?", m: 25 },
              { t: "Find one interior photograph, one film still, one website with exceptional color. For each: name the 3 dominant colors and the emotional register they create together. Not 'warm' — specific. 'Quiet authority.' 'Anxious luxury.' 'Childhood memory.'", m: 30 },
              { t: "In Figma, build a 5-shade scale for one color from scratch. Apply it to a simple rectangle layout. Does it feel like something or just look like something?", m: 20 },
            ],
            anchor: "Saul Leiter photographed New York in color when everyone else shot black and white — not for novelty, but because color carried emotional information monochrome couldn't. Color communicates. Use it that way.",
          },
          {
            track: "Both", duration: "75 min",
            title: "Connecting Color to Structure — Then Teaching It Back",
            tasks: [
              { t: "Build a simple HTML page: name as H1, short bio as a paragraph, 3 things you're learning as a list. No CSS yet. Semantic and intentional.", m: 30 },
              { t: "Create a color palette for this page in Figma — 3 colors max. Ask: what atmosphere would these colors create if they were walls in a room? Write 2 sentences.", m: 20 },
              { t: "FEYNMAN CLOSE: Write 'HTML structure matters because...' and 'Color communicates before it is read because...' Ask for one piece of feedback from someone in the Odin Discord.", m: 25 },
            ],
            anchor: "Knuth: 'Let us concentrate on explaining to humans what we want the computer to do.' HTML explains to the browser. Color explains to the human. Both require the same clarity of intention.",
            feynman: true,
          },
        ],
        dailyHabit: "Notice color in the physical world every day — storefronts, clothing, interiors, packaging. One sentence per day: what does this color combination communicate?",
      },
      {
        week: 3,
        theme: "Type Is a Voice, Not a Style Choice",
        goal: "Typography is 95% of design and most designers treat it like decoration. That ends this week.",
        sessions: [
          {
            track: "Design", duration: "75 min",
            title: "Typography as Architecture",
            tasks: [
              { t: "Read Thinking with Type: Part 1 — Letters (pp. 1–50). Use it like a reference, not a novel — study every diagram. Write 5 principles that surprised you.", m: 30 },
              { t: "Go to Fonts In Use (fontsinuse.com). Find 3 typographic pairings that feel right. For each: write the emotional personality in one specific sentence. Then find the same pairing used physically — a poster, book, packaging.", m: 25 },
              { t: "In Figma, set the same 40-word paragraph in 3 typefaces: geometric sans, humanist sans, serif. One sentence per typeface: what does this voice sound like?", m: 20 },
            ],
            anchor: "Vignelli used only 6 typefaces his entire career. He knew them the way a musician knows their instrument — in every context, at every size, in every combination. Depth over breadth. Always.",
          },
          {
            track: "Both", duration: "75 min",
            title: "Bringing Type Into My Work — Then Teaching It Back",
            tasks: [
              { t: "In Figma, design a magazine-style header for your HTML page — headline, subhead, byline. Choose a typeface pairing intentionally. Apply the color palette from Week 2.", m: 35 },
              { t: "Photograph one piece of exceptional physical typography this week. Add to Swipe File. Write one sentence: what does it communicate before you read it?", m: 15 },
              { t: "FEYNMAN CLOSE: Write 'A typeface communicates personality because...' in plain language. Where you get vague, you don't understand it yet.", m: 25 },
            ],
            anchor: "Bringhurst: 'Typography exists to honor content.' That obligation is the same on a screen, a magazine page, a film title card, a book spine in a set designer's room.",
            feynman: true,
          },
        ],
        dailyHabit: "Photograph one piece of exceptional physical typography every day. Add it to the Swipe File. One sentence: what does it communicate before you read it?",
      },
      {
        week: 4,
        theme: "Refactoring UI — Buying It and Using It Immediately",
        goal: "Refactoring UI is the most practical design book for where I am right now. I buy it this week and use it the same day.",
        sessions: [
          {
            track: "Design", duration: "75 min",
            title: "Refactoring UI — Reading and Applying Chapter 1",
            tasks: [
              { t: "Buy Refactoring UI — $99 at refactoringui.com, Essentials package. Most important purchase of Phase 1.", m: 0 },
              { t: "Read Chapter 1: 'Starting from Scratch.' Read with a pen. Circle every principle, not every tip. A principle generalizes. A tip is situational.", m: 35 },
              { t: "Apply one principle from Chapter 1 to your Figma design from Week 3. Screenshot before and after. Write: what specifically improved and why?", m: 25 },
              { t: "Install Muzli as your Chrome new tab. Design inspiration becomes part of your daily environment.", m: 15 },
            ],
            anchor: "Rand: 'Don't try to be original. Just try to be good.' Refactoring UI teaches you how to be good. Originality is earned after you've internalized the rules well enough to break them intentionally.",
          },
          {
            track: "Both", duration: "75 min",
            title: "Styling My First HTML Page — Then Teaching It Back",
            tasks: [
              { t: "Add CSS to the HTML page from Weeks 2–3. Apply your color palette as CSS custom properties (--color-primary, not hardcoded hex). One source of truth.", m: 40 },
              { t: "Add one piece to each Swipe File section. Write one sentence per piece: what principle from Refactoring UI does this demonstrate?", m: 15 },
              { t: "FEYNMAN CLOSE: Write 'CSS custom properties are better than hardcoded values because...' and 'The cascade in CSS and visual hierarchy in design are related because...'", m: 20 },
            ],
            anchor: "Maeda: 'Simplicity is about subtracting the obvious and adding the meaningful.' CSS custom properties are that discipline in code — one decision, applied everywhere.",
            feynman: true,
          },
        ],
        dailyHabit: "Keep working through Odin daily — even 20 minutes on non-session days moves the needle. Nine sections total. Treat each section as a milestone.",
      },
      {
        week: 5,
        theme: "Stealing Compositional Logic From the Masters",
        goal: "Composition lives under every great photograph, editorial spread, and layout. This week I reverse-engineer it.",
        sessions: [
          {
            track: "Design", duration: "75 min",
            title: "Studying Composition Across Photography, Editorial, and Space",
            tasks: [
              { t: "Choose one photographer to study: Irving Penn, Saul Leiter, Gordon Parks, or Viviane Sassen. Find 10 images. For each: identify the single compositional decision that makes it work — leading line, negative space, depth of field, color relationship, subject placement.", m: 35 },
              { t: "Find the same compositional intelligence in 2 editorial spreads and 2 interior photographs. Where does the same logic appear across different media?", m: 25 },
              { t: "Add the best 5 to the Swipe File (Spatial/World section). One sentence per piece: what is the compositional decision?", m: 15 },
            ],
            anchor: "Irving Penn: 'A photograph is not an accident — it is a concept.' Every layout decision should be a concept, not an accident. I study photographers to build that habit.",
          },
          {
            track: "Both", duration: "75 min",
            title: "Translating a Photograph's Composition Into a Layout — Then Teaching It Back",
            tasks: [
              { t: "Take one photograph from the composition study and translate its spatial logic into a Figma layout — same proportional relationships, same balance of density and space, same light/dark ratio. Screenshot both side by side.", m: 40 },
              { t: "Push the Odin Recipes Project to GitHub. First public code doesn't have to be perfect. It has to exist.", m: 10 },
              { t: "FEYNMAN CLOSE: Write 'Compositional intelligence means...' using one photographic example and one layout example. Where are they identical? Where do they diverge?", m: 25 },
            ],
            anchor: "Feynman: 'What I cannot create, I do not understand.' I can't yet build a beautiful layout from scratch — but I can trace the logic of one that exists. That tracing is my current level of understanding. It is enough.",
            feynman: true,
          },
        ],
        dailyHabit: "Keep working on the Odin Recipes Project on non-session days. The project is where Odin actually teaches — the lessons are preparation.",
      },
      {
        week: 6,
        theme: "The Grid — Invisible Architecture of Everything",
        goal: "The grid was invented for print. It migrated to screen. It lives in space. Learn it once and you can lay out anything.",
        sessions: [
          {
            track: "Design", duration: "75 min",
            title: "Reading Müller-Brockmann and Finding Grids Everywhere",
            tasks: [
              { t: "Read Grid Systems in Graphic Design: Introduction + Chapter 1. Read every diagram as a spatial decision, not a graphic design rule.", m: 30 },
              { t: "Find the grid in 3 physical or editorial objects: a magazine spread, an interior photograph, a film still. Sketch the underlying column structure on paper. Where are the margins? The gutters? What does the grid enable?", m: 25 },
              { t: "Read Refactoring UI 'Layout and Spacing' section. Compare its digital spacing principles to Müller-Brockmann's print principles. What's the same? What's different? Why?", m: 20 },
            ],
            anchor: "Müller-Brockmann: 'The grid system is an aid, not a guarantee.' Learn the system before deciding when to break it. Breaking a grid intentionally is a statement. Breaking it accidentally is a mistake.",
          },
          {
            track: "Both", duration: "75 min",
            title: "Applying a Grid to My Figma Design — Then Teaching It Back",
            tasks: [
              { t: "Apply a grid to your Figma design from Week 3: columns, gutters, margins — on paper first, then in Figma. What does imposing a grid reveal about your current layout?", m: 30 },
              { t: "Sketch the same compositional logic as a room layout — same proportional relationships. What furniture arrangement would create the same visual rhythm as your digital layout?", m: 20 },
              { t: "FEYNMAN CLOSE: Write 'Grid systems in design work because...' and 'The spatial logic that connects a layout, a room, and a photograph is...'", m: 25 },
            ],
            anchor: "Knuth: every layout decision should be provable. You should be able to state why every element occupies the space it does. The grid makes this possible.",
            feynman: true,
          },
        ],
        dailyHabit: "Complete Flexbox Froggy on off-days — all 24 levels. Understand every answer before advancing.",
      },
      {
        week: 7,
        theme: "My First Real Design — With a Point of View",
        goal: "This week I ship a landing page with the visual conviction of a great magazine cover. Not a site that looks like a site — a designed thing.",
        sessions: [
          {
            track: "Design", duration: "75 min",
            title: "Designing With Conviction — Reference From Outside the Web",
            tasks: [
              { t: "Choose your concept. Before opening Figma: find your reference in the physical world — a magazine spread, a film still, a room, a photograph. The feeling you want your landing page to have must come from somewhere real.", m: 15 },
              { t: "Sketch 3 layout directions informed by that reference. Each should feel like it comes from the same world as the reference material — not a generic website.", m: 30 },
              { t: "Build the full high-fidelity Figma design. Every decision — type, color, spacing — traceable back to the feeling of your physical reference.", m: 30 },
            ],
            anchor: "The best set designers build rooms that feel like they could exist because every object was chosen with specificity. That specificity is what separates work with a point of view from work that merely functions.",
          },
          {
            track: "Both", duration: "75 min",
            title: "Building It, Pushing It, Documenting It — Then Teaching It Back",
            tasks: [
              { t: "Build the landing page in HTML and CSS. Semantic structure first, CSS custom properties, then styling. Screenshot Figma design and built version side by side.", m: 45 },
              { t: "Push to GitHub. Write a README describing the concept and physical reference used. This is the first portfolio entry.", m: 15 },
              { t: "FEYNMAN CLOSE — Case Study: Write 200 words: the physical reference chosen, the 3 most important design decisions it inspired, what worked, what didn't, what you'd change.", m: 20 },
            ],
            anchor: "Vignelli: 'The public is more familiar with bad design than good design. It is, in effect, conditioned to prefer bad design.' Shipping something with a genuine point of view is an act of defiance.",
            feynman: true,
          },
        ],
        dailyHabit: "Add hover states, responsive behavior, mobile-first polish on non-session days. Every breakpoint feels designed, not just functional.",
      },
      {
        week: 8,
        theme: "Developing My Photographic Eye",
        goal: "Photography teaches intentional framing. That discipline is the same as intentional layout. This week I study both.",
        sessions: [
          {
            track: "Design", duration: "75 min",
            title: "Studying a Photographer Whose Compositional Instinct I Want to Absorb",
            tasks: [
              { t: "Study one photographer in depth: Saul Leiter, Irving Penn, Gordon Parks, Viviane Sassen, or Alec Soth. Find 10 images. For each: identify the one compositional decision that defines it — leading lines, negative space, depth of field, color relationship.", m: 35 },
              { t: "Find the equivalent compositional intelligence in 2 editorial spreads and 2 interior photographs. Same logic, different medium.", m: 25 },
              { t: "Go to Art of the Title (artofthetitle.com). Find 2 film title sequences that move you. Write: what does the typography communicate about the world you're about to enter?", m: 15 },
            ],
            anchor: "Irving Penn: 'A photograph is not an accident — it is a concept.' Building the habit of treating every frame — every layout — as a concept, not a default.",
          },
          {
            track: "Both", duration: "75 min",
            title: "Translating Cinematic Thinking Into Layout — Then Teaching It Back",
            tasks: [
              { t: "Take one photograph from the composition study and translate its spatial logic into a new Figma layout. Screenshot both side by side. What holds across the translation? What gets lost?", m: 35 },
              { t: "Watch the opening 5 minutes of a film by Wes Anderson, Wong Kar-wai, or Barry Jenkins. Write: how does camera movement and editing pace create an emotional state before any dialogue?", m: 20 },
              { t: "FEYNMAN CLOSE: Write 'Compositional intelligence means...' using one photographic example, one editorial example, and one spatial example.", m: 20 },
            ],
            anchor: "Brodovitch at Harper's Bazaar treated every spread like a stage — with blocking, tension, rhythm, and rest. A magazine spread and a CSS layout are the same choreographic challenge.",
            feynman: true,
          },
        ],
        dailyHabit: "Take or find 10 photographs this week — compose, don't document. Add the best 3 to the Swipe File with one sentence each.",
      },
      {
        week: 9,
        theme: "Mastering Figma and Studying Who Built Real Visual Worlds",
        goal: "Figma fluency means thinking speed. This week I also study one practitioner who built a world — not just a style.",
        sessions: [
          {
            track: "Design", duration: "75 min",
            title: "Building Components and Studying a Practitioner Who Built a Visual World",
            tasks: [
              { t: "Complete Figma's official Components tutorial. Build each concept immediately — watching without building is not learning.", m: 30 },
              { t: "Build a button component with 4 states: default, hover, focus, disabled. Write why each state looks the way it does.", m: 25 },
              { t: "Choose one practitioner who creates a coherent visual world: Wes Anderson, Aesop, or Kinfolk. Write one page: what are the 5 decisions that make their world coherent?", m: 20 },
            ],
            anchor: "Vignelli: 'Styles come and go. Good design is a language, not a style.' Components are that language. The more precise the vocabulary, the faster and clearer the thinking.",
          },
          {
            track: "Both", duration: "75 min",
            title: "Applying What I Studied to My Own Work — Then Teaching It Back",
            tasks: [
              { t: "Apply the practitioner's lens to your own Figma work: what are the 3 core decisions that define your developing visual world? Type choice, color palette, spatial rhythm — write them explicitly.", m: 30 },
              { t: "Add 5 pieces to the Swipe File that represent coherent visual worlds — not just beautiful individual pieces. There is a difference.", m: 15 },
              { t: "FEYNMAN CLOSE: Write 'A Figma component is...' and 'A coherent visual world differs from a visual style because...' Then: what is the one decision in your practitioner's work you want to internalize?", m: 30 },
            ],
            anchor: "Wes Anderson's films are production design, costume, typography, and color working as one intelligence. Every touchpoint speaks the same language. That is my standard.",
            feynman: true,
          },
        ],
        dailyHabit: "Work through Odin JS daily. JS is hard. Consistency beats intensity — 20 minutes on off-days is better than missing a week cold.",
      },
      {
        week: 10,
        theme: "Design Psychology — Why Humans Do What They Do",
        goal: "Exceptional designers are applied psychologists. You can't design for humans without understanding how humans perceive, decide, and err.",
        sessions: [
          {
            track: "Design", duration: "75 min",
            title: "Revisiting Norman With Fresh Eyes and More Experience",
            tasks: [
              { t: "Reread The Design of Everyday Things: Chapter 1 — you now have 9 weeks of practice behind you. Write: what do you understand now that you didn't the first time?", m: 25 },
              { t: "Find 3 physical objects nearby that violate Norman's principles. Photograph them. For each: name the specific principle violated and sketch a redesign that fixes it.", m: 30 },
              { t: "Find the digital equivalent of each physical failure — a confusing form, a hidden action, a missing feedback state. Same principle, different medium.", m: 20 },
            ],
            anchor: "Norman: 'Good design fits our needs so well that the design is invisible.' This is equally true for a checkout flow and a museum corridor. The goal — making experience feel inevitable — never changes.",
          },
          {
            track: "Both", duration: "75 min",
            title: "Auditing My Own Work Through Norman's Lens — Then Teaching It Back",
            tasks: [
              { t: "Audit the Week 7 landing page with Norman's lens: affordances, signifiers, feedback, mapping. Find 3 violations and fix them. Screenshot before and after.", m: 35 },
              { t: "Visit a designed space — museum, gallery, boutique, restaurant. Apply Norman's lens. Write: what one change would most improve the experience?", m: 25 },
              { t: "FEYNMAN CLOSE: Write 'An affordance is...' using one digital and one physical example. Then: 'The principle connecting good digital and good physical design is...'", m: 15 },
            ],
            anchor: "Rams: 'You cannot understand good design if you do not understand people.' People are the constant. Every medium is just a different way of designing for them.",
            feynman: true,
          },
        ],
        dailyHabit: "Keep pushing through Odin JS on non-session days. This is where JS starts to feel like a real language. Don't rush it.",
      },
      {
        week: 11,
        theme: "Building My Visual World — Not Just a Visual Style",
        goal: "A style is a collection of aesthetic choices. A visual world is a complete point of view. This week I start articulating mine.",
        sessions: [
          {
            track: "Design", duration: "75 min",
            title: "Defining My Design Tokens and My Visual World",
            tasks: [
              { t: "In Figma, define core design tokens: 3-color palette, 2-font system, spacing scale. Name every token semantically. These are the atoms of your visual world.", m: 30 },
              { t: "Write a one-page 'Visual World Document': typefaces, color palette, spatial references, photographic references, emotional register. What does this world sound like? Smell like?", m: 30 },
              { t: "Add 5 pieces to the Swipe File that represent coherent visual worlds. For each: what is the single decision that holds the entire thing together?", m: 15 },
            ],
            anchor: "Vignelli: 'The life of a designer is a life of fight against the ugliness.' My design tokens are my position statement. They say: I have thought about this, and these are my answers.",
          },
          {
            track: "Both", duration: "75 min",
            title: "Applying My Tokens to Real Code — Then Teaching It Back",
            tasks: [
              { t: "Export Figma tokens as CSS custom properties. Apply them to the landing page CSS. Every color and spacing value comes from a variable. Prove the system works.", m: 35 },
              { t: "Write: what are the 3 core visual decisions that define your developing aesthetic? Type choice, color, spatial rhythm — explicitly and specifically.", m: 20 },
              { t: "FEYNMAN CLOSE: Write 'A design token is...' and 'A visual world differs from a visual style because...'", m: 20 },
            ],
            anchor: "Rand: 'Art is an idea that has found its perfect visual expression.' My idea is forming. I can feel it in what I save, what I notice, what makes me stop. Phase 2 is where I give it more precise expression.",
            feynman: true,
          },
        ],
        dailyHabit: "Start the Odin Rock Paper Scissors project on off-days. Plan it on paper before writing a line of code.",
      },
      {
        week: 12,
        theme: "My Phase 1 Retrospective — Honest, Specific, Without Ego",
        goal: "Reflection is not optional. The designers who grow fastest review their own work with more rigor than anyone else will.",
        sessions: [
          {
            track: "Design", duration: "75 min",
            title: "Scrolling My Swipe File and Naming My Aesthetic",
            tasks: [
              { t: "Scroll the entire Swipe File — all three sections. What patterns appear? What do you save regardless of medium? Write 5 words that describe your developing aesthetic. Not aspirational — honest.", m: 25 },
              { t: "Write 400 words: 'My visual world at Week 12.' What do you see now that you couldn't in Week 1? What still confuses you? What has become obvious? What kind of environments and images do you want to design?", m: 35 },
              { t: "Identify one practitioner whose career trajectory you want to study in depth in Phase 2. Write: why them?", m: 15 },
            ],
            anchor: "Rand: 'Art is an idea that has found its perfect visual expression.' My idea is forming. Phase 2 is where I begin to find its perfect expression — on screen, on page, in space.",
          },
          {
            track: "Both", duration: "75 min",
            title: "Setting Phase 2 Intentions — The Phase 1 Feynman Close",
            tasks: [
              { t: "Write 3 specific, behavioral things you'll do differently in Phase 2. Not 'be more consistent' — 'Post work publicly before it feels ready, starting Week 13.'", m: 20 },
              { t: "Set up portfolio: Vite project, deploy to Vercel. URL exists before Phase 2 begins. Empty is fine. It must exist.", m: 30 },
              { t: "PHASE 1 FEYNMAN CLOSE: Write one page. 'What kind of designer am I becoming — on screen, on page, in the world? And what do I still not understand?' Honest. Keep it. The answer will change.", m: 25 },
            ],
            anchor: "Feynman at the end of his life: 'What I cannot create, I do not understand.' Phase 1 taught me to create the foundations. Phase 2 is where I begin to understand what they make possible.",
            feynman: true,
          },
        ],
        dailyHabit: "Rest from new content. Finish any open Odin projects. Write in the design journal. Let Phase 1 settle before Phase 2 begins.",
      },
    ],
  },
  {
    id: 1, label: "Phase 2", title: "Integration",
    subtitle: "~4 months · React + Deep Taste Development",
    color: "#F0FFF6", accent: "#00B85C", darkAccent: "#008040",
    tagline: "React for screen. Spatial visits, editorial study, photography for everything else. Both tracks, every week.",
    weeks: [
      {
        week: 13,
        theme: "React and Going Somewhere Beautiful — Every Single Week",
        goal: "React is my primary digital building material. Spatial thinking and editorial study are my analog building materials. I develop both in parallel — they sharpen each other.",
        sessions: [
          {
            track: "Design", duration: "75 min",
            title: "A Designed Space, Visited With Full Intention",
            tasks: [
              { t: "Visit a museum, gallery, boutique, hotel lobby, or restaurant you consider well-designed. Spend 30 min with full attention. Photograph it. Write: what 5 specific design decisions define the experience? Light, material, spatial sequence, scale, color?", m: 40 },
              { t: "Start DesignCode.io React course (designcode.io, ~$99/year) — Lessons 1–2. Note every place a Figma decision maps directly to a React decision.", m: 20 },
              { t: "Post your spatial analysis somewhere — Read.cv or your design journal. Making observations public sharpens them.", m: 15 },
            ],
            anchor: "Ilse Crawford spends months observing a space before designing it — watching how people move, where they linger, what light does at different hours. That depth of observation produces work that feels inevitable rather than imposed.",
          },
          {
            track: "Both", duration: "75 min",
            title: "Building React and Connecting It to What I Observed — Then Teaching It Back",
            tasks: [
              { t: "Scaffold a Vite + React project. Convert the Phase 1 landing page into React components: Nav, Hero, Card, Footer. Each in its own file.", m: 40 },
              { t: "Take one observation from the spatial visit — a proportion, a color relationship, a spatial rhythm — and translate it into a design decision for the landing page.", m: 20 },
              { t: "FEYNMAN CLOSE: Write 'React components differ from HTML elements in that...' and 'Observing a designed space teaches a digital designer...'", m: 15 },
            ],
            anchor: "The designers who move fluidly between media never stop studying — in galleries, restaurants, books, theaters. The screen is one surface. Everything else sharpens the eye for it.",
            feynman: true,
          },
        ],
        dailyHabit: "Keep working through Odin JS on non-session days. Don't abandon Odin for React — both are required.",
      },
    ],
  },
  {
    id: 2, label: "Phase 3", title: "Systems Thinking",
    subtitle: "~3 months · Design Systems + Visual World",
    color: "#FFF5FF", accent: "#9900FF", darkAccent: "#7700CC",
    tagline: "Building systems that scale: from token to typeface, from component to room, from favicon to magazine cover.",
    weeks: [
      {
        week: 29,
        theme: "A Design System — Not Just a Component Library",
        goal: "A design system is a set of decisions, made once, that scale across every surface a product touches. I build toward that.",
        sessions: [
          {
            track: "Design", duration: "75 min",
            title: "Thinking in Atoms, Molecules, and Organisms — Across Every Medium",
            tasks: [
              { t: "Read Brad Frost's Atomic Design: Chapters 1–2 (free at bradfrost.com). For each level — atom, molecule, organism — find examples in a digital product AND a physical design system (modular furniture line, packaging family, wayfinding system).", m: 35 },
              { t: "Audit Figma files AND the Swipe File. What visual decisions appear consistently across digital, editorial, and spatial categories? Those are the atoms of your personal design language.", m: 25 },
              { t: "Write the one-page 'Visual World Document': typefaces, color palette, spatial references, photographic references, emotional register. Design system for every medium.", m: 15 },
            ],
            anchor: "Müller-Brockmann's grid system worked for a poster, a book, and an exhibition stand. Brad Frost's atomic design works for a component, a page, and an entire product. The scale changes. The logic holds.",
          },
          {
            track: "Both", duration: "75 min",
            title: "Token Parity Between Figma and CSS — Then Teaching It Back",
            tasks: [
              { t: "Define the complete token set in Figma Variables AND CSS custom properties. Color, spacing, type scale. Every token named semantically. Open both side by side — every Figma token has an exact CSS counterpart.", m: 40 },
              { t: "Install Storybook in the React project. Write stories for Button (4 states), Card (3 variants), Input (default, error, disabled).", m: 20 },
              { t: "FEYNMAN CLOSE: Write 'Design tokens work across a system because...' and 'A design system differs from a stylesheet because...'", m: 15 },
            ],
            anchor: "Rams: 'Good design is thorough down to the last detail.' Token parity is that thoroughness — the spec and the code tell the same story.",
            feynman: true,
          },
        ],
        dailyHabit: "Study one component from a public design system (Material, Linear, Vercel) every day. Write: what decision did they make and why does it make sense?",
      },
    ],
  },
  {
    id: 3, label: "Phase 4", title: "Ship & Specialize",
    subtitle: "Ongoing · Build publicly, develop a point of view",
    color: "#FFF8F0", accent: "#FF6600", darkAccent: "#CC4400",
    tagline: "Building publicly. Finding my medium — or refusing to choose. The best designers never did.",
    weeks: [
      {
        week: 41,
        theme: "My Portfolio — And It Has a Point of View",
        goal: "My portfolio communicates a point of view before anyone reads a project title. The analog demand is growing. I show work that lives on screen AND in the world.",
        sessions: [
          {
            track: "Design", duration: "75 min",
            title: "Designing My Portfolio as a Visual World — Not a Project List",
            tasks: [
              { t: "Study three cross-medium portfolios: Pentagram (pentagram.com), 2x4 (2x4.org), or Sagmeister & Walsh. Write: how does each communicate a point of view before you read a single project description?", m: 30 },
              { t: "Inventory your work: digital projects, editorial experiments, spatial studies, photographs. The portfolio needs at least one project that shows your point of view across more than one medium.", m: 25 },
              { t: "Write your bio. Read it out loud. Does it sound like a person with something to say — or a resume? Rewrite until it sounds like you.", m: 20 },
            ],
            anchor: "Rand: 'Don't try to be original. Just try to be good.' Good means: a coherent point of view, expressed with precision and conviction, in every medium you choose to work in.",
          },
          {
            track: "Both", duration: "75 min",
            title: "Writing My First Case Study and Naming My Direction",
            tasks: [
              { t: "Write the case study for your strongest Phase 1 project: the visual world you were building toward, the 3 most important decisions, what you built, what the work taught you about your point of view. 400 words minimum.", m: 35 },
              { t: "Name your specialization direction: set design, interior, editorial, photography, digital product, or the designer who refuses to specialize. Write: why this? What work points toward it?", m: 20 },
              { t: "FINAL FEYNMAN CLOSE: Write 'What kind of designer am I, and what do I have to say that no one else is saying — in any medium?' Answer honestly. This is not the last time you'll answer it.", m: 20 },
            ],
            anchor: "Feynman: 'Study hard what interests you the most in the most undisciplined, irreverent and original manner possible.' Not becoming a good designer. Becoming someone who changes what good means.",
            feynman: true,
          },
        ],
        dailyHabit: "Post one piece of work, one observation, or one question publicly every week. My public practice is my reputation being built in real time.",
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
    { id:"g1", title:"Introduction to Git",   done:false, date:"" },
    { id:"g2", title:"Git Basics",            done:false, date:"" },
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

const BG="";const SURFACE="#FFFFFF";const HERO="#0D3B47";const BORDER="#DDD7CC";
const TEXT="#181614";const MUTED="#6B6259";const GOLD="#E8A630";
const PHASE_ACCENTS=["#00A896","#E07B39","#1A5C8A","#1B7F5E"];
const TRACK_ACCENTS={Code:"#1A5C8A",Design:"#D4622A",Both:"#00A896"};

function Confetti({ active }) {
  if (!active) return null;
  const pieces = Array.from({length:18},(_,i)=>i);
  const colors=["#00A896","#E07B39","#E8A630","#1A5C8A","#D4622A","#1B7F5E"];
  return (
    <div style={{position:"fixed",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:999,overflow:"hidden"}}>
      <style>{`
        @keyframes fall{0%{transform:translateY(-20px) rotate(0deg);opacity:1}100%{transform:translateY(100vh) rotate(720deg);opacity:0}}
      `}</style>
      {pieces.map(i=>(
        <div key={i} style={{
          position:"absolute",
          left:`${(i*5.5+Math.random()*8)%100}%`,
          top:`-${10+Math.random()*20}px`,
          width:`${6+Math.random()*6}px`,
          height:`${6+Math.random()*6}px`,
          borderRadius:i%3===0?"50%":"2px",
          background:colors[i%colors.length],
          animation:`fall ${1.2+Math.random()*1.2}s ease-in ${Math.random()*0.5}s forwards`,
        }}/>
      ))}
    </div>
  );
}

function Toast({ msg, onDone }) {
  useEffect(()=>{ const t=setTimeout(onDone,2600); return ()=>clearTimeout(t); },[onDone]);
  return (
    <div style={{
      position:"fixed",bottom:"28px",left:"50%",transform:"translateX(-50%)",
      background:HERO,color:"#fff",borderRadius:"40px",
      padding:"12px 28px",fontSize:"14px",fontWeight:500,
      display:"flex",alignItems:"center",gap:"10px",zIndex:998,
      boxShadow:"0 8px 32px rgba(13,59,71,0.35)",
      animation:"slideUp 0.3s ease",letterSpacing:"0.01em",
    }}>
      <span style={{fontSize:"18px"}}>✦</span> {msg}
      <style>{`@keyframes slideUp{from{transform:translateX(-50%) translateY(20px);opacity:0}to{transform:translateX(-50%) translateY(0);opacity:1}}`}</style>
    </div>
  );
}

export default function App() {
  const [tab, setTab] = useState("syllabus");
  const [activePhase, setActivePhase] = useState(0);
  const [activeWeekIdx, setActiveWeekIdx] = useState(0);
  const [confetti, setConfetti] = useState(false);
  const [toast, setToast] = useState(null);
  const [prevCounts, setPrevCounts] = useState({});

  const buildInitial = () => {
    const init={};
    PHASES.forEach((ph,pi)=>ph.weeks.forEach((w,wi)=>w.sessions.forEach((s,si)=>
      s.tasks.forEach((t,ti)=>{ if(t.done) init[`p${pi}-w${wi}-s${si}-t${ti}`]=true; })
    )));
    return init;
  };
  const [completed, setCompleted] = useState(buildInitial);

  const initOdin = () => Object.fromEntries(
    ODIN_SECTIONS.flatMap(s=>s.lessons).map(l=>[l.id,{done:l.done,date:l.date}])
  );
  const [odin, setOdin] = useState(initOdin);

  const fireAward = (msg) => {
    setConfetti(true);
    setToast(msg);
    setTimeout(()=>setConfetti(false),2800);
  };

  const toggleOdin = id => {
    const wasComplete = ODIN_SECTIONS.every(s=>s.lessons.every(l=>(odin[l.id]||{}).done||(l.id===id&&!odin[id]?.done)));
    const section = ODIN_SECTIONS.find(s=>s.lessons.some(l=>l.id===id));
    const wasSectionDone = section?.lessons.every(l=>l.id===id ? !odin[id]?.done : (odin[l.id]||{}).done);
    setOdin(p=>({...p,[id]:{...p[id],done:!p[id].done}}));
    if (!odin[id]?.done) {
      if (wasSectionDone) fireAward(`${section.title} complete!`);
    }
  };
  const setOdinDate=(id,v)=>setOdin(p=>({...p,[id]:{...p[id],date:v}}));

  const odinFlat=ODIN_SECTIONS.flatMap(s=>s.lessons.map(l=>({...l,...(odin[l.id]||{})})));
  const odinDone=odinFlat.filter(l=>l.done).length;
  const odinTotal=odinFlat.length;
  const pct=Math.round((odinDone/odinTotal)*100);

  const phase=PHASES[activePhase];
  const week=phase.weeks[activeWeekIdx]||phase.weeks[0];
  const accent=PHASE_ACCENTS[activePhase];

  const toggleTask=(si,ti)=>{
    const k=`p${activePhase}-w${activeWeekIdx}-s${si}-t${ti}`;
    const nowDone=!completed[k];
    setCompleted(p=>({...p,[k]:nowDone}));
    if (nowDone) {
      const session=week.sessions[si];
      const checkable=session.tasks.filter(t=>t.m>0);
      const newCompleted={...completed,[k]:true};
      const allSessionDone=checkable.every((_,i)=>newCompleted[`p${activePhase}-w${activeWeekIdx}-s${si}-t${session.tasks.indexOf(checkable[i])}`]);
      if (allSessionDone) {
        const allWeekDone=week.sessions.every((s,ssi)=>
          s.tasks.filter(t=>t.m>0).every((_,i)=>newCompleted[`p${activePhase}-w${activeWeekIdx}-s${ssi}-t${s.tasks.indexOf(s.tasks.filter(t=>t.m>0)[i])}`])
        );
        if (allWeekDone) fireAward(`Week ${week.week} complete!`);
        else fireAward("Session done.");
      }
    }
  };
  const getDone=(si,ti)=>!!completed[`p${activePhase}-w${activeWeekIdx}-s${si}-t${ti}`];

  return (
    <div style={{minHeight:"100vh",background:"#F0EDE5",fontFamily:"'Inter','Helvetica Neue',sans-serif",color:TEXT,textAlign:"left"}}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');
        @import url('https://api.fontshare.com/v2/css?f[]=clash-display@600,700&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;}
        ::-webkit-scrollbar{width:3px;}::-webkit-scrollbar-thumb{background:${BORDER};border-radius:2px;}
        input[type=text]:focus{outline:none;}button{cursor:pointer;font-family:inherit;}
        .task-row:hover{background:#FAF8F4;}
      `}</style>

      <Confetti active={confetti}/>
      {toast && <Toast msg={toast} onDone={()=>setToast(null)}/>}

      {/* NAV */}
      <div style={{background:SURFACE,borderBottom:`1px solid ${BORDER}`,padding:"0 36px",display:"flex",alignItems:"stretch",position:"sticky",top:0,zIndex:20,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"}}>
        <div style={{display:"flex",alignItems:"center",gap:"10px",paddingRight:"28px",marginRight:"4px",borderRight:`1px solid ${BORDER}`}}>
          <div style={{width:"8px",height:"8px",borderRadius:"50%",background:accent,boxShadow:`0 0 0 3px ${accent}33`}}/>
          <span style={{fontFamily:"'Clash Display',sans-serif",fontSize:"13px",fontWeight:700,color:TEXT,letterSpacing:"0.05em",textTransform:"uppercase"}}>Full Stack Designer</span>
        </div>
        {[{key:"syllabus",label:"Syllabus"},{key:"odin",label:`Odin — ${odinDone}/${odinTotal}`}].map(({key,label})=>(
          <button key={key} onClick={()=>setTab(key)} style={{
            background:"none",border:"none",padding:"0 20px",height:"49px",
            fontSize:"12px",fontWeight:tab===key?600:400,
            color:tab===key?TEXT:MUTED,
            borderBottom:tab===key?`2px solid ${accent}`:"2px solid transparent",
            letterSpacing:"0.05em",textTransform:"uppercase",transition:"all 0.15s",
          }}>{label}</button>
        ))}
      </div>

      {tab==="odin" ? (
        <div style={{maxWidth:"680px",margin:"0 auto",padding:"48px 24px"}}>
          <div style={{background:HERO,borderRadius:"16px",padding:"36px 40px",marginBottom:"36px",display:"flex",alignItems:"center",gap:"40px",position:"relative",overflow:"hidden"}}>
            <div style={{position:"absolute",right:"-40px",top:"-40px",width:"180px",height:"180px",borderRadius:"50%",background:"#00A89615",pointerEvents:"none"}}/>
            <div>
              <div style={{fontFamily:"'Clash Display',sans-serif",fontSize:"72px",fontWeight:700,color:"#fff",letterSpacing:"-0.04em",lineHeight:1}}>
                {pct}<span style={{color:GOLD}}>%</span>
              </div>
              <p style={{fontSize:"12px",color:"#5B8A96",marginTop:"10px",letterSpacing:"0.07em",textTransform:"uppercase"}}>{odinDone} of {odinTotal} · Foundations</p>
            </div>
            <div style={{flex:1}}>
              <div style={{height:"6px",background:"#0A2A33",borderRadius:"3px",overflow:"hidden",marginBottom:"10px"}}>
                <div style={{height:"100%",width:`${pct}%`,background:GOLD,borderRadius:"3px",transition:"width 0.4s ease"}}/>
              </div>
              <p style={{fontSize:"11px",color:"#3D6874",letterSpacing:"0.06em",textTransform:"uppercase"}}>{odinTotal-odinDone} lessons remaining</p>
            </div>
          </div>

          {ODIN_SECTIONS.map(section=>{
            const sl=section.lessons.map(l=>({...l,...(odin[l.id]||{})}));
            const sd=sl.filter(l=>l.done).length;
            const sp=Math.round((sd/sl.length)*100);
            const done=sd===sl.length;
            return (
              <div key={section.id} style={{background:SURFACE,borderRadius:"12px",border:`1px solid ${BORDER}`,marginBottom:"10px",overflow:"hidden"}}>
                <div style={{padding:"14px 20px",display:"flex",alignItems:"center",gap:"12px",borderBottom:"1px solid #F0EBE2"}}>
                  <div style={{width:"10px",height:"10px",borderRadius:"50%",background:section.accent,flexShrink:0,boxShadow:`0 0 0 3px ${section.accent}22`}}/>
                  <span style={{fontFamily:"'Clash Display',sans-serif",fontSize:"14px",fontWeight:700,color:TEXT,flex:1,letterSpacing:"-0.01em"}}>{section.title}</span>
                  <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
                    <div style={{width:"80px",height:"3px",background:"#EDE8DF",borderRadius:"2px",overflow:"hidden"}}>
                      <div style={{height:"100%",width:`${sp}%`,background:section.accent,borderRadius:"2px",transition:"width 0.3s"}}/>
                    </div>
                    <span style={{fontSize:"11px",fontWeight:600,color:done?section.accent:MUTED,whiteSpace:"nowrap"}}>
                      {done?"✓ Done":`${sd}/${sl.length}`}
                    </span>
                  </div>
                </div>
                {sl.map((lesson,idx)=>(
                  <div key={lesson.id} style={{display:"flex",alignItems:"center",gap:"14px",padding:"11px 20px",borderBottom:idx<sl.length-1?"1px solid #F7F4EF":"none",background:lesson.done?`${section.accent}09`:"transparent",transition:"background 0.15s"}}>
                    <button onClick={()=>toggleOdin(lesson.id)} style={{
                      width:"20px",height:"20px",borderRadius:"50%",flexShrink:0,border:"none",
                      background:lesson.done?section.accent:"transparent",
                      outline:lesson.done?"none":`1.5px solid ${BORDER}`,
                      display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.2s",
                      boxShadow:lesson.done?`0 0 0 3px ${section.accent}22`:"none",
                    }}>
                      {lesson.done&&<svg width="9" height="7" viewBox="0 0 9 7" fill="none"><path d="M1 3.5L3.5 6L8 1" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                    </button>
                    <span style={{flex:1,fontSize:"13px",lineHeight:1.5,color:lesson.done?MUTED:TEXT,textDecoration:lesson.done?"line-through":"none",textDecorationColor:"#C4BBB0",fontStyle:lesson.isProject?"italic":"normal",fontWeight:lesson.isProject?500:400}}>
                      {lesson.isProject&&<span style={{color:section.accent,marginRight:"6px",fontStyle:"normal",fontSize:"10px"}}>◆</span>}
                      {lesson.title}
                    </span>
                    <input type="text" value={lesson.date} onChange={e=>setOdinDate(lesson.id,e.target.value)} placeholder="MM/DD"
                      style={{width:"62px",fontSize:"12px",textAlign:"center",background:"transparent",border:lesson.date?`1px solid ${section.accent}`:`1px solid ${BORDER}`,borderRadius:"6px",padding:"4px 6px",color:lesson.date?section.accent:MUTED,transition:"border 0.15s,color 0.15s"}}
                    />
                  </div>
                ))}
              </div>
            );
          })}
        </div>

      ):(
        <div style={{display:"flex",height:"calc(100vh - 49px)"}}>
          <div style={{width:"224px",flexShrink:0,background:SURFACE,borderRight:`1px solid ${BORDER}`,overflowY:"auto",padding:"20px 0"}}>
            {PHASES.map((p,pi)=>{
              const ac=PHASE_ACCENTS[pi];
              return (
                <div key={pi} style={{marginBottom:"20px"}}>
                  <div style={{fontSize:"10px",fontWeight:600,letterSpacing:"0.12em",textTransform:"uppercase",color:"#BDB5AA",padding:"0 20px",marginBottom:"6px"}}>{p.label}</div>
                  {p.weeks.map((w,wi)=>{
                    const isActive=pi===activePhase&&wi===activeWeekIdx;
                    return (
                      <button key={wi} onClick={()=>{setActivePhase(pi);setActiveWeekIdx(wi);}} style={{
                        width:"100%",textAlign:"left",border:"none",
                        background:isActive?`${ac}14`:"transparent",
                        borderLeft:isActive?`3px solid ${ac}`:"3px solid transparent",
                        padding:"9px 20px",marginBottom:"1px",transition:"all 0.12s",
                      }}>
                        <div style={{fontSize:"10px",fontWeight:600,letterSpacing:"0.06em",textTransform:"uppercase",color:isActive?ac:"#BDB5AA",marginBottom:"3px"}}>Wk {w.week}</div>
                        <div style={{fontSize:"12px",color:isActive?TEXT:MUTED,lineHeight:1.4,fontWeight:isActive?600:400}}>{w.theme}</div>
                      </button>
                    );
                  })}
                </div>
              );
            })}
          </div>

          <div style={{flex:1,overflowY:"auto",background:"#F0EDE5"}}>
            <div style={{background:HERO,padding:"36px 48px",position:"relative",overflow:"hidden"}}>
              <div style={{position:"absolute",right:"-60px",bottom:"-60px",width:"240px",height:"240px",borderRadius:"50%",background:`${accent}18`,pointerEvents:"none"}}/>
              <div style={{display:"flex",alignItems:"center",gap:"8px",marginBottom:"14px"}}>
                <div style={{width:"7px",height:"7px",borderRadius:"50%",background:GOLD,boxShadow:`0 0 0 3px ${GOLD}33`}}/>
                <span style={{fontSize:"11px",fontWeight:600,letterSpacing:"0.1em",textTransform:"uppercase",color:"#4E8494"}}>{phase.label} · Week {week.week}</span>
              </div>
              <h2 style={{fontFamily:"'Clash Display',sans-serif",fontSize:"clamp(22px,3vw,38px)",fontWeight:700,color:"#fff",letterSpacing:"-0.03em",lineHeight:1.15,marginBottom:"14px"}}>{week.theme}</h2>
              <p style={{fontSize:"14px",color:"#4E8494",lineHeight:1.8,maxWidth:"520px",fontWeight:300,textAlign:"left"}}>{week.goal}</p>
            </div>

            <div style={{padding:"28px 48px",display:"flex",flexDirection:"column",gap:"12px"}}>
              {week.dailyHabit&&(
                <div style={{background:SURFACE,border:`1px solid ${BORDER}`,borderLeft:`4px solid ${GOLD}`,borderRadius:"0 10px 10px 0",padding:"14px 18px"}}>
                  <div style={{fontSize:"10px",fontWeight:600,letterSpacing:"0.1em",textTransform:"uppercase",color:GOLD,marginBottom:"5px"}}>Daily habit</div>
                  <p style={{fontSize:"13px",color:MUTED,lineHeight:1.7,fontWeight:300,textAlign:"left"}}>{week.dailyHabit}</p>
                </div>
              )}

              {week.sessions.map((session,si)=>{
                const tc=TRACK_ACCENTS[session.track]||accent;
                const checkable=session.tasks.filter(t=>t.m>0);
                const doneN=checkable.filter((_,i)=>getDone(si,session.tasks.indexOf(checkable[i]))).length;
                const allDone=checkable.length>0&&doneN===checkable.length;
                const pctS=checkable.length?Math.round((doneN/checkable.length)*100):0;
                return (
                  <div key={si} style={{background:SURFACE,border:`1px solid ${BORDER}`,borderRadius:"12px",overflow:"hidden",transition:"box-shadow 0.2s",boxShadow:allDone?"0 4px 20px rgba(0,0,0,0.08)":"none"}}>
                    <div style={{height:"3px",background:"#EDE8DF"}}>
                      <div style={{height:"100%",width:`${pctS}%`,background:tc,transition:"width 0.4s ease",borderRadius:"0 2px 2px 0"}}/>
                    </div>
                    <div style={{padding:"16px 20px 12px",borderBottom:"1px solid #F5F0E8",background:allDone?`${tc}06`:"transparent",transition:"background 0.3s"}}>
                      <div style={{display:"flex",alignItems:"center",gap:"8px",marginBottom:"8px",flexWrap:"wrap"}}>
                        <span style={{fontSize:"10px",fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",color:tc}}>{session.track}</span>
                        {checkable.reduce((a,t)=>a+t.m,0)>0&&<span style={{fontSize:"11px",color:"#C4BBB0"}}>· {checkable.reduce((a,t)=>a+t.m,0)} min</span>}
                        {session.feynman&&<span style={{background:`${GOLD}1A`,color:"#A06A10",fontSize:"10px",fontWeight:600,padding:"2px 9px",borderRadius:"20px",letterSpacing:"0.04em"}}>✎ Feynman close</span>}
                        {allDone&&<span style={{marginLeft:"auto",background:tc,color:"#fff",fontSize:"10px",fontWeight:700,padding:"2px 10px",borderRadius:"20px",letterSpacing:"0.06em",textTransform:"uppercase"}}>Done ✦</span>}
                      </div>
                      <p style={{fontFamily:"'Clash Display',sans-serif",fontSize:"16px",fontWeight:700,color:TEXT,letterSpacing:"-0.02em",lineHeight:1.3,textAlign:"left"}}>{session.title}</p>
                    </div>
                    <div style={{padding:"2px 20px"}}>
                      {session.tasks.map((task,ti)=>{
                        const isLabel=task.m===0;
                        const done=getDone(si,ti);
                        return (
                          <div key={ti} className="task-row" onClick={()=>!isLabel&&toggleTask(si,ti)} style={{
                            display:"flex",alignItems:"flex-start",gap:"12px",padding:"10px 0",
                            borderBottom:ti<session.tasks.length-1?"1px solid #F7F4EF":"none",
                            cursor:isLabel?"default":"pointer",
                            opacity:(!isLabel&&done)?0.38:1,transition:"opacity 0.15s",
                            borderRadius:"4px",
                          }}>
                            {!isLabel&&(
                              <div style={{
                                width:"17px",height:"17px",borderRadius:"4px",flexShrink:0,marginTop:"2px",
                                border:done?"none":`1.5px solid ${BORDER}`,
                                background:done?tc:"transparent",
                                display:"flex",alignItems:"center",justifyContent:"center",
                                transition:"all 0.2s",transform:done?"scale(1.1)":"scale(1)",
                                boxShadow:done?`0 0 0 3px ${tc}22`:"none",
                              }}>
                                {done&&<svg width="8" height="6" viewBox="0 0 8 6" fill="none"><path d="M1 3L3 5L7 1" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                              </div>
                            )}
                            <span style={{flex:1,fontSize:"13px",lineHeight:1.65,fontWeight:isLabel?600:300,color:isLabel?tc:done?MUTED:TEXT,textDecoration:(!isLabel&&done)?"line-through":"none",textDecorationColor:"#C4BBB0",textAlign:"left"}}>{task.t}</span>
                            {task.m>0&&<span style={{fontSize:"11px",color:"#C4BBB0",flexShrink:0,paddingTop:"2px"}}>{task.m}m</span>}
                          </div>
                        );
                      })}
                    </div>
                    {session.anchor&&(
                      <div style={{padding:"12px 20px 16px",borderTop:"1px solid #F5F0E8",background:"#FAFAF7"}}>
                        <p style={{fontSize:"12px",color:MUTED,lineHeight:1.8,fontStyle:"italic",fontWeight:300,paddingLeft:"12px",borderLeft:`2px solid ${tc}55`,textAlign:"left"}}>{session.anchor}</p>
                      </div>
                    )}
                  </div>
                );
              })}

              <div style={{display:"flex",justifyContent:"space-between",paddingTop:"20px",marginTop:"4px",borderTop:`1px solid ${BORDER}`}}>
                <button onClick={()=>{
                  if(activeWeekIdx>0) setActiveWeekIdx(activeWeekIdx-1);
                  else if(activePhase>0){setActivePhase(activePhase-1);setActiveWeekIdx(PHASES[activePhase-1].weeks.length-1);}
                }} disabled={activePhase===0&&activeWeekIdx===0} style={{
                  background:SURFACE,border:`1px solid ${BORDER}`,borderRadius:"8px",padding:"9px 20px",
                  fontSize:"12px",fontWeight:500,color:activePhase===0&&activeWeekIdx===0?BORDER:MUTED,
                  letterSpacing:"0.04em",textTransform:"uppercase",
                }}>← Prev</button>
                <button onClick={()=>{
                  if(activeWeekIdx<phase.weeks.length-1) setActiveWeekIdx(activeWeekIdx+1);
                  else if(activePhase<PHASES.length-1){setActivePhase(activePhase+1);setActiveWeekIdx(0);}
                }} disabled={activePhase===PHASES.length-1&&activeWeekIdx===phase.weeks.length-1} style={{
                  background:accent,border:"none",borderRadius:"8px",padding:"9px 20px",
                  fontSize:"12px",fontWeight:600,color:"#fff",letterSpacing:"0.04em",textTransform:"uppercase",
                }}>Next →</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}