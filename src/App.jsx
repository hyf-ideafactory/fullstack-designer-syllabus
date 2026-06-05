import { useState } from "react";

const PHASES = [
  {
    id: 0,
    label: "Phase 1",
    title: "Foundations",
    subtitle: "Weeks 1–12 · ~3 months",
    color: "#F0F7FF",
    accent: "#0066FF",
    darkAccent: "#0044CC",
    tagline: "Build bedrock. Code AND eye simultaneously. Competence is the floor, not the ceiling.",
    weeks: [
      {
        week: 1,
        theme: "HTML & Visual Hierarchy",
        goal: "Structure is the first design decision. In code it's HTML. In design it's hierarchy. They are the same discipline.",
        sessions: [
          {
            day: "Friday, June 5", label: "12:00 PM",
            track: "Code",
            duration: "75 min",
            title: "Odin: HTML Foundations — Structure as Intention",
            tasks: [
              { t: "Open VS Code. Create your first project folder: fullstack-designer/week-01. Open terminal in VS Code (Ctrl+`) — you'll live here.", m: 10 },
              { t: "Complete Odin 'Introduction to HTML and CSS' lesson. As you read: ask why each tag exists, not just what it does.", m: 30 },
              { t: "Do the first Odin HTML exercise. Then open the file in Chrome, right-click → Inspect. Spend 10 min reading your own HTML in DevTools — this is your second monitor from now on.", m: 35 },
            ],
            anchor: "Paul Rand said: 'Design is the silent ambassador of your brand.' HTML is the skeleton of that ambassador. Every tag is a decision about meaning, not just structure.",
          },
          {
            day: "Saturday, June 6", label: "12:00 PM",
            track: "Design",
            duration: "75 min",
            title: "Visual Hierarchy — The First Law of Perception",
            tasks: [
              { t: "Read Refactoring UI: Chapter 1 (Starting from Scratch). Read with a pen. Underline every principle, not every tip.", m: 25 },
              { t: "Open Stripe.com, Linear.app, and one site from your own life. Screenshot each. On paper, number every element in the order your eye hits it. Write WHY — size? contrast? position? whitespace?", m: 25 },
              { t: "Recreate one hero section in Figma. No assets, no color — only rectangles and text. Nail the proportions. Müller-Brockmann's rule: get the structure right and everything else becomes easier.", m: 25 },
            ],
            anchor: "Vignelli: 'The life of a designer is a life of fight — fight against the ugliness.' Visual hierarchy is your first weapon. If a viewer has to work to understand a layout, the designer failed.",
          },
          {
            day: "Monday, June 8", label: "12:00 PM",
            track: "Both",
            duration: "75 min",
            title: "Connect Code + Design — Then Teach It Back",
            tasks: [
              { t: "Build your Saturday Figma hero in VS Code as a static HTML file — structure only, no CSS. Every div should map to a deliberate visual element, not a guess.", m: 35 },
              { t: "Start your Swipe File: create a folder. Save 10 screenshots — only things that made you stop. Tag each one: what stopped you? Type / Color / Layout / Tension / Surprise.", m: 20 },
              { t: "FEYNMAN CLOSE (do not skip): Open a blank doc. Write: 'Visual hierarchy means...' and explain it as if teaching someone who has never heard of design. Where you get vague, you have a gap. Go fix it.", m: 20 },
            ],
            anchor: "Knuth spent 20 years on The Art of Computer Programming because he refused to move on until he understood something completely. The Feynman Close is your version of that discipline. Every Monday ends this way.",
            feynman: true,
          },
        ],
      },
      {
        week: 2,
        theme: "CSS & Color Theory",
        goal: "CSS is design logic in syntax. Color theory is not about beauty — it's about perception, emotion, and system.",
        sessions: [
          {
            day: "Friday, June 12", label: "12:00 PM",
            track: "Code",
            duration: "75 min",
            title: "CSS Foundations — Styling with Intent",
            tasks: [
              { t: "Complete Odin 'CSS Foundations' lesson. Focus on the cascade: understand WHY specificity works the way it does, not just how to override it.", m: 30 },
              { t: "Do the CSS exercises: box model, margins, padding. After each one: open DevTools and inspect what you built. See the box model rendered visually.", m: 25 },
              { t: "Inspect any site you admire in DevTools. Change 3 colors live. Change a font size. Notice what breaks when you do. This is how exceptional designers learn — by breaking things intentionally.", m: 20 },
            ],
            anchor: "Dieter Rams: 'Good design is as little design as possible.' CSS is how you make that principle real in a browser. Every property you add should earn its existence.",
          },
          {
            day: "Saturday, June 13", label: "12:00 PM",
            track: "Design",
            duration: "75 min",
            title: "Color Theory — System, Not Decoration",
            tasks: [
              { t: "Read Refactoring UI: 'Working with Color' section. Note every principle that contradicts what you thought you knew about color.", m: 25 },
              { t: "Deconstruct Stripe's homepage color palette in Figma using the eyedropper. Find their primary, neutrals, and accent. Write: what emotion does each color group carry? Why does it work for a fintech product?", m: 25 },
              { t: "Build a 5-shade scale for one color from scratch in Figma (light → dark). Apply it to your Week 1 hero. Does it serve the hierarchy or fight it?", m: 25 },
            ],
            anchor: "Rand understood that color is never neutral — it always carries cultural weight, emotional signal, and spatial meaning simultaneously. Build color systems, not color choices.",
          },
          {
            day: "Monday, June 15", label: "12:00 PM",
            track: "Both",
            duration: "75 min",
            title: "Apply Color to Code — Then Teach It Back",
            tasks: [
              { t: "Add CSS to your Week 1 HTML page using your color palette. Define colors as CSS custom properties (variables) at the top — not hardcoded hex values. Every exceptional codebase does this.", m: 40 },
              { t: "Install the Muzli Chrome extension. Open it, read one design article, reverse-engineer the color decisions in 150 words. What was deliberate? What was lazy?", m: 20 },
              { t: "FEYNMAN CLOSE: Write 'The CSS box model means...' and 'Color contrast matters because...' — two separate explanations, each 4–5 sentences, zero jargon. Gaps = gaps in understanding.", m: 15 },
            ],
            anchor: "Maeda's Law 1: 'Reduce.' CSS custom properties are reduction — one source of truth for your entire color system. Maeda's Law 10: 'Simplicity is about subtracting the obvious and adding the meaningful.'",
            feynman: true,
          },
        ],
      },
      {
        week: 3,
        theme: "Typography — The Discipline That Separates Good from Exceptional",
        goal: "95% of the web is typography. Most designers treat it as decoration. Exceptional designers treat it as architecture.",
        sessions: [
          {
            day: "Friday, June 19", label: "12:00 PM",
            track: "Code",
            duration: "75 min",
            title: "CSS Flexbox — Spatial Control",
            tasks: [
              { t: "Complete Odin Flexbox lesson. Read the MDN Flexbox guide alongside it — MDN is your primary reference, always.", m: 25 },
              { t: "Complete all 24 levels of Flexbox Froggy (flexboxfroggy.com). Don't guess — understand why each answer works before moving on.", m: 30 },
              { t: "Rebuild your Week 1 HTML page layout using only Flexbox. No hacks, no floats, no absolute positioning. Clean spatial control.", m: 20 },
            ],
            anchor: "Flexbox is how you command space. Müller-Brockmann built entire visual systems on spatial command. Every exceptional layout starts with absolute clarity about how space is organized.",
          },
          {
            day: "Saturday, June 20", label: "12:00 PM",
            track: "Design",
            duration: "75 min",
            title: "Typography — Voice Before Words",
            tasks: [
              { t: "Read Thinking with Type: Part 1 (Letters). Read slowly. Every principle Lupton names, find a real example of it on a live website.", m: 30 },
              { t: "Go to Fonts In Use (fontsinuse.com). Find 3 type pairings that feel right to you. For each: write the emotional register it communicates and WHY those two typefaces work together — not just that they do.", m: 25 },
              { t: "In Figma: set the same 50-word paragraph in 3 different typefaces — a geometric sans, a humanist sans, a serif. Write one sentence per: what personality does each project? Be specific, not vague.", m: 20 },
            ],
            anchor: "Vignelli used only 6 typefaces his entire career. Not because he lacked knowledge — because he understood them completely. Depth over breadth. Know a few typefaces the way a musician knows their instrument.",
          },
          {
            day: "Monday, June 22", label: "12:00 PM",
            track: "Both",
            duration: "75 min",
            title: "Type in the Browser — Then Teach It Back",
            tasks: [
              { t: "Add a Google Font pairing to your CSS project. Use typescale.com to generate a modular scale. Set every text element — don't leave any unstyled. Intentional type, top to bottom.", m: 30 },
              { t: "Go to Siteinspire.com. Find 3 sites with exceptional typography. For each: identify the type scale, the leading (line-height), and the measure (line length). Write one sentence: what does the type system do for the brand?", m: 25 },
              { t: "FEYNMAN CLOSE: Write 'A modular type scale works because...' and 'The reason typeface choice affects brand perception is...' No jargon. If you can't explain it simply, you don't own it yet.", m: 20 },
            ],
            anchor: "Bringhurst: 'Typography exists to honor content.' Not to decorate it. Every type decision you make should serve meaning — nothing else.",
            feynman: true,
          },
        ],
      },
      {
        week: 4,
        theme: "Layout & Spatial Thinking — The Grid as Discipline",
        goal: "The grid is not a constraint. It is the structure that makes freedom possible. Learn it before you break it.",
        sessions: [
          {
            day: "Friday, June 26", label: "12:00 PM",
            track: "Code",
            duration: "75 min",
            title: "CSS Grid — Architecture in the Browser",
            tasks: [
              { t: "Complete Odin CSS Grid lesson. Read the CSS-Tricks Complete Guide to Grid alongside it — bookmark it permanently.", m: 25 },
              { t: "Complete all levels of CSS Grid Garden (cssgridgarden.com). Same rule as Flexbox Froggy: understand before advancing.", m: 25 },
              { t: "Build a 12-column grid layout from scratch with a header, 3-column card row, and footer. No frameworks. Pure CSS Grid.", m: 25 },
            ],
            anchor: "Müller-Brockmann: 'The grid system is an aid, not a guarantee. It permits a number of possible uses and each designer can look for a solution appropriate to his personal style.' Learn the system. Then make it yours.",
          },
          {
            day: "Saturday, June 27", label: "12:00 PM",
            track: "Design",
            duration: "75 min",
            title: "Grid Systems — The Invisible Architecture",
            tasks: [
              { t: "Read Grid Systems in Graphic Design: Introduction + Chapter 1. This is dense. Read slowly. Every diagram is a lesson.", m: 30 },
              { t: "Take 3 screens from your Swipe File. Enable Figma's layout grid (8pt columns). Map the underlying grid of each design — where does it align? Where does it intentionally break, and why?", m: 25 },
              { t: "Redesign one of those screens on a strict 8pt grid in Figma. Every element snaps. No exceptions. Then: identify one place where breaking the grid would create better tension.", m: 20 },
            ],
            anchor: "Rand: 'There is no such thing as a boring project. Only boring designers.' The grid is never boring — it is the difference between arbitrary and inevitable. Make your layouts feel inevitable.",
          },
          {
            day: "Monday, June 29", label: "12:00 PM",
            track: "Both",
            duration: "75 min",
            title: "Figma Grid → CSS Grid — Then Teach It Back",
            tasks: [
              { t: "Take your 8pt Figma layout and build it exactly in HTML/CSS Grid. Measure twice: does the browser match the design? Where does it drift? Fix every drift.", m: 45 },
              { t: "Watch Kevin Powell 'Are you using the right CSS units?' on YouTube (15 min). Note every unit you didn't fully understand.", m: 15 },
              { t: "FEYNMAN CLOSE: Write 'CSS Grid differs from Flexbox in that...' and 'The reason grids create visual harmony is...' Specific, clear, no hand-waving.", m: 15 },
            ],
            anchor: "Knuth on precision: 'Beware of bugs in the above code; I have only proved it correct, not tried it.' Every pixel in your layout should be provable — you should know why it's there.",
            feynman: true,
          },
        ],
      },
      {
        week: 5,
        theme: "JavaScript — Behavior as Design",
        goal: "JavaScript is not an afterthought. It is the design layer that governs how things feel in time.",
        sessions: [
          {
            day: "Friday, July 3", label: "12:00 PM",
            track: "Code",
            duration: "75 min",
            title: "JS Basics — Logic as a Design Tool",
            tasks: [
              { t: "Complete Odin JavaScript Basics lesson. Variables, strings, numbers. After each concept: open VS Code terminal and test it. Don't just read — run it.", m: 30 },
              { t: "Write a script that changes a page element's color, size, and text on click. Three separate behaviors, wired up yourself. No tutorials.", m: 30 },
              { t: "Read: 'JavaScript is not Java' section on MDN (search 'MDN JavaScript first steps'). Understand what JS actually is before going deeper.", m: 15 },
            ],
            anchor: "Maeda: 'The best design is the one that doesn't need a manual.' JavaScript is how you build that experience — one that responds, adapts, and communicates without words.",
          },
          {
            day: "Saturday, July 4", label: "12:00 PM",
            track: "Design",
            duration: "75 min",
            title: "Microinteractions — The Details that Define Excellence",
            tasks: [
              { t: "Read Dan Saffer's Microinteractions intro (free first chapter online). Catalog the four parts of a microinteraction: trigger, rules, feedback, loops & modes.", m: 25 },
              { t: "Find 5 microinteractions in products you use daily — a button press, a toggle, a notification, a loading state, a form validation. For each: write what it communicates and whether it does so clearly or poorly.", m: 25 },
              { t: "Prototype one microinteraction in Figma using Smart Animate. Make it feel right — not just correct. Adjust the easing until it has the right 'weight'. Rams: details are not details, they make the product.", m: 25 },
            ],
            anchor: "Rams: 'Details are not details. They make the design.' The difference between a good product and an exceptional one is almost entirely in the microinteractions. This is where taste lives.",
          },
          {
            day: "Monday, July 7", label: "12:00 PM",
            track: "Both",
            duration: "75 min",
            title: "Animate with CSS Transitions — Then Teach It Back",
            tasks: [
              { t: "Build the microinteraction you prototyped using CSS transitions + a JS class toggle. No libraries. Understand exactly what is animating, why, and at what speed. Test it obsessively.", m: 40 },
              { t: "Watch Flux Academy 'How to develop your design taste' on YouTube. Take notes — not on the content, on what you disagree with.", m: 20 },
              { t: "FEYNMAN CLOSE: Write 'A CSS transition works by...' and 'Microinteractions serve the user by...' Then: 'The difference between animation that informs and animation that decorates is...'", m: 15 },
            ],
            anchor: "Feynman: 'If you can't explain it simply, you don't understand it well enough.' Every animation you build should have a one-sentence rationale. If you can't state it, reconsider whether it should exist.",
            feynman: true,
          },
        ],
      },
      {
        week: 6,
        theme: "First Real Ship — The Landing Page",
        goal: "Shipping is not the end of learning. It is the beginning of a different kind of learning. Put real work into the world.",
        sessions: [
          {
            day: "Friday, July 10", label: "12:00 PM",
            track: "Design",
            duration: "75 min",
            title: "Design with Conviction — No Safe Choices",
            tasks: [
              { t: "Choose your concept: redesign a brand you interact with daily, or create an imaginary product you wish existed. This must be something you care about — mediocre commitment produces mediocre work.", m: 10 },
              { t: "Sketch 3 layout directions — not wireframes, directions. Each should have a different spatial logic. Pick the one with the most conviction, not the most comfort.", m: 30 },
              { t: "Build the full high-fidelity Figma design. Apply everything from Weeks 1–5: hierarchy, color system, type scale, 8pt grid. Every decision should be defensible. Ask of each element: does this earn its space?", m: 35 },
            ],
            anchor: "Rand: 'Don't try to be original. Just try to be good.' Good means clear, purposeful, and honest. Originality follows when those three things are truly in place.",
          },
          {
            day: "Saturday, July 11", label: "12:00 PM",
            track: "Code",
            duration: "75 min",
            title: "Build: Semantic Structure First",
            tasks: [
              { t: "Create project in VS Code: index.html, style.css, assets/. Semantic HTML first — every element chosen for meaning, not convenience. No div soup.", m: 15 },
              { t: "Build the full HTML structure. No styling yet. When done: read the page with CSS disabled (in DevTools, uncheck all styles). Does it still communicate? It should.", m: 35 },
              { t: "Apply base CSS: custom properties for colors, type scale, spacing. Name your variables like a system, not a shorthand. --color-primary, not --blue.", m: 25 },
            ],
            anchor: "Accessibility is not a feature. It is the baseline of professional craft. A page that communicates without CSS is a page built with intention.",
          },
          {
            day: "Monday, July 14", label: "12:00 PM",
            track: "Both",
            duration: "75 min",
            title: "Polish, Push, Document — Then Teach It Back",
            tasks: [
              { t: "Add hover states, focus states, transitions. Build mobile-first: start at 375px, work up. Every breakpoint should feel designed, not just functional.", m: 30 },
              { t: "Push to GitHub. Open your Figma design and your built page side by side. Screenshot both. Note every gap — not to feel bad, but to understand what you'll close next time.", m: 20 },
              { t: "FEYNMAN CLOSE — Case Study: Write 200 words: what you designed, the 3 most important decisions you made, what you'd do differently, and what you learned that surprised you. This is your first portfolio entry.", m: 25 },
            ],
            anchor: "Vignelli: 'The public is more familiar with bad design than good design. It is, in effect, conditioned to prefer bad design.' Shipping something considered and deliberate is an act of defiance. Do it again and again.",
            feynman: true,
          },
        ],
      },
      {
        week: 7,
        theme: "Responsive Design — Every Screen is a Design Decision",
        goal: "A layout that breaks at mobile is an unfinished design. Responsive thinking is not a feature — it is the work.",
        sessions: [
          {
            day: "Friday, July 17", label: "12:00 PM",
            track: "Code",
            duration: "75 min",
            title: "Responsive CSS — Mobile First, Always",
            tasks: [
              { t: "Complete Odin responsive design lesson. Internalize mobile-first: you write for the smallest screen first, then expand. Not the reverse.", m: 25 },
              { t: "Make your Week 6 landing page fully responsive. Use min-width media queries only — that is mobile-first. Test at 375px, 768px, 1280px.", m: 35 },
              { t: "Open Chrome DevTools → device toolbar. Test every breakpoint. For each one: does it feel designed or just not-broken? There is a difference.", m: 15 },
            ],
            anchor: "Constraints are not limitations — they are editors. Mobile forces clarity. If a layout works at 375px, it works everywhere.",
          },
          {
            day: "Saturday, July 18", label: "12:00 PM",
            track: "Design",
            duration: "75 min",
            title: "Designing for Constraint — Small Screen, Full Intention",
            tasks: [
              { t: "Read Apple HIG: Adaptivity and Layout section (free at developer.apple.com/design/human-interface-guidelines). Note every decision Apple made about touch targets, spacing, hierarchy at small scale.", m: 25 },
              { t: "Create a mobile frame (375px) version of your landing page in Figma. Not a shrunken desktop — a redesign. Ask: what does this screen need to do, and what must be removed to let it do that?", m: 35 },
              { t: "Find 3 sites on Awwwards.com with exceptional mobile experiences. Write: what one decision in each made the small screen feel designed rather than compromised?", m: 15 },
            ],
            anchor: "Rams: 'Less, but better.' The mobile screen enforces this rule. You cannot hide bad decisions behind screen real estate. Every element must justify itself.",
          },
          {
            day: "Monday, July 21", label: "12:00 PM",
            track: "Both",
            duration: "75 min",
            title: "Swipe File Deep Cut — Then Teach It Back",
            tasks: [
              { t: "Add 10 pieces to your Swipe File — this week's focus: mobile-first design. For each, note the one decision that makes it exceptional.", m: 20 },
              { t: "Pick one piece from your swipe file and rebuild a section of it in HTML/CSS as a personal exercise. Not to copy — to understand how it was made.", m: 35 },
              { t: "FEYNMAN CLOSE: Write 'Mobile-first CSS means...' and 'The reason responsive design requires a redesign, not a resize, is...' Then: what is one thing you now see in mobile design that you didn't see 3 weeks ago?", m: 20 },
            ],
            anchor: "Feynman kept a notebook of things he didn't understand — not to feel inadequate, but to hunt them down. Your Feynman Close is that notebook. The gaps you find are the next thing to master.",
            feynman: true,
          },
        ],
      },
      {
        week: 8,
        theme: "JavaScript DOM & Animation — Making Things Feel Alive",
        goal: "The DOM is your design canvas. JS is how you make it respond. This is where static design ends and experience design begins.",
        sessions: [
          {
            day: "Friday, July 24", label: "12:00 PM",
            track: "Code",
            duration: "75 min",
            title: "DOM Manipulation — Design That Listens",
            tasks: [
              { t: "Complete Odin DOM lesson. Understand the tree — not just how to traverse it, but why it's structured the way it is.", m: 25 },
              { t: "Build an accordion component from scratch: click to expand, click again to collapse, smooth CSS transition. No libraries. Understand every line.", m: 35 },
              { t: "Read: 'The Illusion of Life' Disney animation principles (search 'Disney 12 principles of animation'). Apply 3 of them mentally to your accordion.", m: 15 },
            ],
            anchor: "Maeda: 'Technology-inspired design is at the intersection of humanity and technology.' The DOM is that intersection. When JS responds to a human action, you are designing a conversation.",
          },
          {
            day: "Saturday, July 25", label: "12:00 PM",
            track: "Design",
            duration: "75 min",
            title: "Motion as Meaning — Animation with a Rationale",
            tasks: [
              { t: "Watch 'Designing with Motion' — Google Material Design YouTube (25 min). For each principle named: find a real example in a product you use.", m: 30 },
              { t: "In Figma: prototype 3 transition variants for a modal: fade, slide-up, scale. For each: write the UX rationale — what does this motion communicate about the relationship between the two states?", m: 30 },
              { t: "Find 2 sites on Awwwards where animation is used exceptionally. Write: what makes each animation purposeful, not decorative?", m: 15 },
            ],
            anchor: "Every animation should answer this question: 'What does this motion teach the user about how this interface works?' If it teaches nothing, it should not exist.",
          },
          {
            day: "Monday, July 28", label: "12:00 PM",
            track: "Both",
            duration: "75 min",
            title: "Animate Your Page — Then Teach It Back",
            tasks: [
              { t: "Add entrance animations to your landing page: hero text, CTA, and one below-fold section using CSS @keyframes + JS scroll trigger (Intersection Observer). No libraries yet — understand the native API.", m: 40 },
              { t: "Audit your animations: does each one take under 350ms? Does each one have a rationale you can state in one sentence? Remove any that fail this test.", m: 20 },
              { t: "FEYNMAN CLOSE: Write 'The Intersection Observer API works by...' and 'The difference between animation that earns its existence and animation that doesn't is...'", m: 15 },
            ],
            anchor: "Knuth: 'Premature optimization is the root of all evil.' Premature animation is the root of all noise. Build with restraint. Add motion only where it clarifies.",
            feynman: true,
          },
        ],
      },
      {
        week: 9,
        theme: "Figma Mastery — Thinking in Components",
        goal: "Figma fluency is thinking speed. Slow tools slow ideas. Components are the vocabulary of design systems.",
        sessions: [
          {
            day: "Friday, July 31", label: "12:00 PM",
            track: "Design",
            duration: "75 min",
            title: "Components — The Atoms of Excellence",
            tasks: [
              { t: "Complete Figma's official Components tutorial (figma.com/resources/learn-design). After each concept: immediately build it yourself. Watching is not learning.", m: 30 },
              { t: "Build a button component with 4 states: default, hover, focus, disabled. Every state must be intentional — not just visible. Why does each state look the way it does?", m: 25 },
              { t: "Study Linear.app's button system in their public Figma community file. Reverse-engineer the decisions. Write: what would you do differently and why?", m: 20 },
            ],
            anchor: "Vignelli: 'Styles come and go. Good design is a language, not a style.' Components are that language. The more precise your vocabulary, the faster and clearer you can speak.",
          },
          {
            day: "Saturday, August 1", label: "12:00 PM",
            track: "Design",
            duration: "75 min",
            title: "Auto Layout — Figma's Design System Engine",
            tasks: [
              { t: "Watch Figma's official 'Auto Layout' tutorial on YouTube. Then close the video and rebuild what you watched from memory.", m: 25 },
              { t: "Rebuild your landing page sections using Auto Layout components. Everything responsive within Figma itself. No fixed frames.", m: 35 },
              { t: "Write: where did Auto Layout break your intuition? What assumption did you have to unlearn? Unlearning is the most underrated skill in design.", m: 15 },
            ],
            anchor: "Auto Layout in Figma mirrors Flexbox in CSS. Master one and the other becomes intuitive. This is not coincidence — it is the same spatial logic, different medium.",
          },
          {
            day: "Monday, August 4", label: "12:00 PM",
            track: "Code",
            duration: "75 min",
            title: "Odin: JS Functions + Arrays — Then Teach It Back",
            tasks: [
              { t: "Complete Odin Functions lesson. Write each function example in VS Code, run it, modify it, break it deliberately. Passive reading produces passive understanding.", m: 30 },
              { t: "Complete Odin Arrays lesson. Build: a dynamic list where you can add, remove, and reorder items. Style it well — ugly code practice is a bad habit.", m: 30 },
              { t: "FEYNMAN CLOSE: Write 'A function in JavaScript is...' and 'Components in design and functions in code are similar because...' The connection between these two concepts is the foundation of component-driven development.", m: 15 },
            ],
            anchor: "Knuth: 'Computer programming is an art, because it applies accumulated knowledge to the world, because it requires skill and ingenuity.' The same is true of design. Both demand precision of thought.",
            feynman: true,
          },
        ],
      },
      {
        week: 10,
        theme: "Design Psychology — Why Humans Do What They Do",
        goal: "Exceptional designers are applied psychologists. You cannot design for humans without understanding how humans perceive, decide, and err.",
        sessions: [
          {
            day: "Friday, August 7", label: "12:00 PM",
            track: "Design",
            duration: "75 min",
            title: "The Design of Everyday Things — First Principles",
            tasks: [
              { t: "Read The Design of Everyday Things: Chapters 1–2. Read with skepticism — challenge every claim Norman makes against what you observe in the real world.", m: 35 },
              { t: "Find 3 things in your home, phone, or laptop that violate Norman's principles (bad affordance, missing feedback, wrong mapping). Photograph or screenshot them.", m: 20 },
              { t: "For each: sketch a redesign. Not beautiful — correct. Fix the principle violation specifically.", m: 20 },
            ],
            anchor: "Norman: 'Good design is actually a lot harder to notice than poor design, in part because good designs fit our needs so well that the design is invisible.' Excellence is invisible. Strive for invisible.",
          },
          {
            day: "Saturday, August 8", label: "12:00 PM",
            track: "Code",
            duration: "75 min",
            title: "Odin: JS Objects — Modeling the World",
            tasks: [
              { t: "Complete Odin Objects lesson. Build an object that models a real UI component: a card's complete data structure — title, description, image, CTA, state.", m: 30 },
              { t: "Build a small JS project: a to-do list. But make it well-designed. Every state (empty, one item, many items, completed) should look intentional.", m: 35 },
              { t: "Read: 'Object-Oriented Design' intro on MDN. How does OOP mirror the way design systems think about components?", m: 10 },
            ],
            anchor: "Objects model reality. Design components model reality. Both are abstractions that let you work faster by naming things precisely. Naming is power.",
          },
          {
            day: "Monday, August 11", label: "12:00 PM",
            track: "Both",
            duration: "75 min",
            title: "Apply Psychology to Your Own Work — Then Teach It Back",
            tasks: [
              { t: "Audit your Week 6 landing page through Norman's lens: affordances, signifiers, feedback, mapping, constraints. Find every violation. Fix 3 of them.", m: 35 },
              { t: "Add 5 pieces to your Swipe File focused on UX clarity over visual aesthetics. Write: what design psychology principle does each one apply well?", m: 20 },
              { t: "FEYNMAN CLOSE: Write 'An affordance is...' and 'The reason feedback matters in interface design is...' Then: what is one thing Norman taught you that you will never un-see in interfaces?", m: 20 },
            ],
            anchor: "Feynman: 'The first principle is that you must not fool yourself — and you are the easiest person to fool.' Review your own work the way Norman reviews a bad door handle. Without ego.",
            feynman: true,
          },
        ],
      },
      {
        week: 11,
        theme: "Brand Systems & Visual Identity",
        goal: "Products are remembered through their visual system, not individual screens. A system is a promise made consistently.",
        sessions: [
          {
            day: "Friday, August 14", label: "12:00 PM",
            track: "Design",
            duration: "75 min",
            title: "Brand Systems — The Language of a Product",
            tasks: [
              { t: "Study one brand system in depth — choose Stripe, Linear, or Vercel. Write: their typeface and why, their color rationale, their spacing philosophy, their illustration/icon approach, and the emotion the system creates as a whole.", m: 35 },
              { t: "Read Thinking with Type: Part 2 (Text). Focus on the text section — how typographic decisions create reading rhythms.", m: 25 },
              { t: "Add 5 brand-forward pieces to your Swipe File. Tag each: what is the single strongest element of this brand system?", m: 15 },
            ],
            anchor: "Rand: 'A logo is a flag, a signature, an escutcheon, a street sign. A logo does not sell (directly), it identifies.' A brand system is the context that makes the logo meaningful. Build systems, not logos.",
          },
          {
            day: "Saturday, August 15", label: "12:00 PM",
            track: "Code",
            duration: "75 min",
            title: "Odin: Clean Code — The Craft of Readability",
            tasks: [
              { t: "Complete Odin Clean Code lesson. Refactor your Week 6 HTML/CSS project — rename every variable, class, and ID to be precise and meaningful. No abbreviations, no generic names.", m: 30 },
              { t: "Start the Odin Library or Tic-Tac-Toe project. Choose the one that excites you more — excitement produces better work.", m: 35 },
              { t: "Read: 'Naming Things in Code' — search on CSS-Tricks. Good names are a design decision.", m: 10 },
            ],
            anchor: "Knuth on code: 'Let us change our traditional attitude to the construction of programs: instead of imagining that our main task is to instruct a computer what to do, let us concentrate rather on explaining to humans what we want the computer to do.'",
          },
          {
            day: "Monday, August 18", label: "12:00 PM",
            track: "Both",
            duration: "75 min",
            title: "Build a Mini Brand System — Then Teach It Back",
            tasks: [
              { t: "In Figma: define a complete mini brand system for an imaginary product — 3-color palette, 2-font system, spacing scale, 3 core component styles. Every decision must have a rationale.", m: 35 },
              { t: "Export your brand tokens as CSS custom properties. Apply them to a new HTML file. Prove that your design system works in code, not just in Figma.", m: 25 },
              { t: "FEYNMAN CLOSE: Write 'Design tokens bridge design and code by...' and 'A brand system differs from a mood board because...' Then: what is one brand decision you made that you can fully defend?", m: 15 },
            ],
            anchor: "Vignelli: 'The life of a designer is a life of fight. Fight against the ugliness. Just like a doctor fights against disease. For us, the visual disease is what we have around, and what we try to do is cure it somehow.'",
            feynman: true,
          },
        ],
      },
      {
        week: 12,
        theme: "Phase 1 Retrospective — Consolidate, Articulate, Advance",
        goal: "Reflection is not optional. Exceptional practitioners review their own work with more rigor than anyone else will.",
        sessions: [
          {
            day: "Friday, August 21", label: "12:00 PM",
            track: "Code",
            duration: "75 min",
            title: "Code Retrospective — Review Everything You Built",
            tasks: [
              { t: "Open every project from Weeks 1–11 in VS Code. Review each one as if seeing it for the first time. Write: what would you refactor, and what holds up? Be specific.", m: 30 },
              { t: "Finish and push any incomplete Odin projects to GitHub. Every incomplete thing is a debt. Clear it.", m: 30 },
              { t: "Set up your portfolio GitHub repo: fullstack-designer-portfolio. Initialize it with a README that describes what you're building and why.", m: 15 },
            ],
            anchor: "Knuth reviewed The Art of Computer Programming continuously for decades. The standard of review you apply to your own work is the ceiling of your eventual quality.",
          },
          {
            day: "Saturday, August 22", label: "12:00 PM",
            track: "Design",
            duration: "75 min",
            title: "Swipe File Retrospective — Name Your Aesthetic",
            tasks: [
              { t: "Scroll your entire Swipe File from Week 1. What patterns emerge in what you saved? Write: 5 words that describe your developing aesthetic. Not aspirational — honest.", m: 25 },
              { t: "Write 400 words: 'My visual sensibility at Week 12.' What do you now see that you couldn't see in Week 1? What still confuses you? What has become obvious?", m: 30 },
              { t: "Identify one designer or studio whose work consistently moves you. Study their portfolio for 20 min. Write: what is the one decision they make consistently that defines their work?", m: 20 },
            ],
            anchor: "Rand: 'Art is an idea that has found its perfect visual expression.' You are building toward that — a point of view so clear that your work is identifiable. Week 12 is not the destination. It is the foundation.",
          },
          {
            day: "Monday, August 25", label: "12:00 PM",
            track: "Both",
            duration: "75 min",
            title: "Set Phase 2 Intentions — The Final Feynman Close",
            tasks: [
              { t: "Write: 3 specific things you will build differently in Phase 2, based on what you learned in Phase 1. Not vague intentions — specific, behavioral changes.", m: 20 },
              { t: "Set up your portfolio site scaffold: Vite project, index.html placeholder, deploy to Vercel. The URL should exist before Phase 2 begins.", m: 30 },
              { t: "PHASE 1 FEYNMAN CLOSE: Write one page — no more, no less. The question: 'What does it mean to be a full stack designer, and what have I learned in 12 weeks toward that?' Be honest about the gaps. They are the Phase 2 syllabus.", m: 25 },
            ],
            anchor: "Feynman at the end of his life, on his blackboard: 'What I cannot create, I do not understand.' Phase 1 taught you to create the foundations. Phase 2 is where you begin to understand them.",
            feynman: true,
          },
        ],
      },
    ],
  },
  {
    id: 1,
    label: "Phase 2",
    title: "Integration",
    subtitle: "Weeks 13–28 · ~4 months",
    color: "#F0FFF6",
    accent: "#00B85C",
    darkAccent: "#008040",
    tagline: "Move fluidly between Figma and React. Zero friction between intention and execution.",
    weeks: [
      {
        week: 13,
        theme: "React — Component Thinking at Scale",
        goal: "React is not a framework. It is a mental model for decomposing interfaces into reusable, intentional decisions.",
        sessions: [
          {
            day: "Friday, Aug 28", label: "12:00 PM",
            track: "Code",
            duration: "75 min",
            title: "React Foundations — Components as Design Atoms",
            tasks: [
              { t: "Read Odin React intro. Then read the official React docs 'Thinking in React' page (react.dev). These two together give you the complete mental model.", m: 25 },
              { t: "Build your first component: a styled Card in JSX with props for title, description, and CTA. Make it look good. Ugly React practice is a bad habit.", m: 35 },
              { t: "Read Refactoring UI: 'Working with Shadows' section. Add appropriate shadows to your Card. No default box-shadow — custom, considered.", m: 15 },
            ],
            anchor: "A component is a reusable design decision. React forces you to think in systems before you think in screens. This is the right order.",
          },
          {
            day: "Saturday, Aug 29", label: "12:00 PM",
            track: "Design",
            duration: "75 min",
            title: "DesignCode.io — The Figma to React Bridge",
            tasks: [
              { t: "Start DesignCode.io React course — Lessons 1–2. Take notes on every place where the Figma decision directly maps to a React/CSS decision.", m: 40 },
              { t: "Open the course's Figma file. Study the component architecture — how is it organized? How does the Figma structure anticipate the React structure?", m: 20 },
              { t: "Add 5 pieces to your Swipe File focused on React-built interfaces. Note one thing in each that could only be done in code, not in Figma.", m: 15 },
            ],
            anchor: "The Figma → React handoff is where most designer-developers stall. The goal is zero translation cost — what you design, you can build, and what you build reflects what you designed.",
          },
          {
            day: "Monday, Sep 1", label: "12:00 PM",
            track: "Both",
            duration: "75 min",
            title: "React Version of Phase 1 Landing Page — Then Teach It Back",
            tasks: [
              { t: "Scaffold a new Vite + React project in VS Code. Convert your Phase 1 landing page into React components: Nav, Hero, Card, Footer. Each a separate file.", m: 40 },
              { t: "Add Tailwind CSS. Observe how utility classes feel vs. custom CSS. Write: what does Tailwind make easier? What does it obscure?", m: 20 },
              { t: "FEYNMAN CLOSE: Write 'React components differ from HTML elements in that...' and 'The reason component-driven development produces better design systems is...'", m: 15 },
            ],
            anchor: "Rebuild what you know to learn what you don't. The Phase 1 landing page is familiar enough that you can focus on the React mental model, not the design decisions.",
            feynman: true,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    label: "Phase 3",
    title: "Systems Thinking",
    subtitle: "Weeks 29–40 · ~3 months",
    color: "#FFF5FF",
    accent: "#9900FF",
    darkAccent: "#7700CC",
    tagline: "Build systems, not pages. Think in tokens. Design at scale.",
    weeks: [
      {
        week: 29,
        theme: "Design Systems — The Architecture of Consistency",
        goal: "A design system is not a component library. It is a set of decisions, made once, that scale across every surface a product touches.",
        sessions: [
          {
            day: "Friday", label: "12:00 PM",
            track: "Design",
            duration: "75 min",
            title: "Atomic Design — The Mental Model",
            tasks: [
              { t: "Read Brad Frost's Atomic Design: Chapters 1–2 (free at bradfrost.com/atomic-design). For each level — atom, molecule, organism — find a real example in a product you use daily.", m: 35 },
              { t: "Audit your existing Figma files. Label every element as atom, molecule, or organism. What's missing? What's duplicated without reason? Inconsistency is technical debt.", m: 25 },
              { t: "Write: what is the cost of not having a design system? Be specific — in time, in inconsistency, in onboarding, in maintenance.", m: 15 },
            ],
            anchor: "Müller-Brockmann built grid systems because inconsistency was a form of noise. A design system eliminates the noise so the signal — the product's meaning — can be heard clearly.",
          },
          {
            day: "Saturday", label: "12:00 PM",
            track: "Code",
            duration: "75 min",
            title: "Storybook — Where Systems Live in Code",
            tasks: [
              { t: "Install Storybook in a React project. Read the official intro docs before running a single command. Understand what it is before you use it.", m: 25 },
              { t: "Write stories for: Button (4 states), Card (3 variants), Input (default, error, disabled). Each story is a design decision made explicit in code.", m: 35 },
              { t: "Read Design Systems Handbook, Chapter 1 (free at invisionapp.com/inside-design). Note every place where the book's principles connect to what you just built.", m: 15 },
            ],
            anchor: "Storybook is where design system intentions become component reality. If you can't write a story for a component, the component is not well-designed.",
          },
          {
            day: "Monday", label: "12:00 PM",
            track: "Both",
            duration: "75 min",
            title: "Token Parity — Figma to CSS — Then Teach It Back",
            tasks: [
              { t: "Define your complete token set in Figma Variables: color (primitive + semantic), spacing (4/8/12/16/24/32/48/64), type scale (12/14/16/20/24/32/40/48). Every token named semantically.", m: 35 },
              { t: "Mirror every Figma token as a CSS custom property. Open both side by side. They should be identical in value and naming. Token parity is non-negotiable.", m: 25 },
              { t: "FEYNMAN CLOSE: Write 'Design tokens differ from hardcoded values in that...' and 'The reason token parity between Figma and code matters is...'", m: 15 },
            ],
            anchor: "Rams: 'Good design is thorough down to the last detail.' Token parity is that thoroughness. If Figma and code disagree, every downstream decision is built on a fault line.",
            feynman: true,
          },
        ],
      },
    ],
  },
  {
    id: 3,
    label: "Phase 4",
    title: "Ship & Specialize",
    subtitle: "Weeks 41+ · Ongoing",
    color: "#FFF8F0",
    accent: "#FF6600",
    darkAccent: "#CC4400",
    tagline: "The work IS the education now. Build publicly. Develop a point of view. Influence the standard.",
    weeks: [
      {
        week: 41,
        theme: "Portfolio — Your Strongest Design Project",
        goal: "Your portfolio is the loudest design statement you will ever make. It must demonstrate not just skill, but point of view.",
        sessions: [
          {
            day: "Friday", label: "12:00 PM",
            track: "Design",
            duration: "75 min",
            title: "Design Your Portfolio With Conviction",
            tasks: [
              { t: "Study three exceptional designer-developer portfolios: Maggie Appleton, Josh W. Comeau, Maxime Heckel. Write: what makes each one feel like a person, not a template? What specific decisions communicate identity?", m: 30 },
              { t: "Sketch 3 portfolio concepts. Each must have a different spatial logic and a different emotional register. The one you're most afraid to build is probably the right one.", m: 25 },
              { t: "Write your bio. Read it out loud. Does it sound like you or like a LinkedIn profile? Rewrite it until it sounds like you.", m: 20 },
            ],
            anchor: "Rand: 'Visual communications of any kind, whether persuasive or informative, from billboards to birth announcements, should be seen as the embodiment of form and function: the integration of the beautiful and the useful.' Your portfolio is that integration.",
          },
          {
            day: "Saturday", label: "12:00 PM",
            track: "Code",
            duration: "75 min",
            title: "Build in Next.js — Production Grade from Day One",
            tasks: [
              { t: "Scaffold a Next.js portfolio project. Read the Next.js docs 'Getting Started' page before writing a single component. Understand the architecture first.", m: 20 },
              { t: "Build the home page component structure. Every component named with intention. Framer Motion page transitions from the start — not added later.", m: 40 },
              { t: "Deploy to Vercel. Your portfolio should have a live URL before it has content. Iterate in public.", m: 15 },
            ],
            anchor: "Shipping early and iterating in public is how exceptional practitioners build reputation. The portfolio that exists beats the perfect one that doesn't.",
          },
          {
            day: "Monday", label: "12:00 PM",
            track: "Both",
            duration: "75 min",
            title: "First Case Study — The Feynman Standard",
            tasks: [
              { t: "Write the case study for your strongest Phase 1 project. Structure: the problem you were solving, the 3 most important design decisions, what you built, what you learned, what you'd do differently. 400 words minimum.", m: 35 },
              { t: "Add it to the portfolio. Share it somewhere — Read.cv, Twitter, LinkedIn. Observe what resonates. That feedback is curriculum.", m: 20 },
              { t: "FINAL FEYNMAN CLOSE: Write 'What does it mean to be a full stack designer who influences the standard, rather than follows it?' Answer it honestly. Keep it. Reread it in Phase 1, Week 12, and again here.", m: 20 },
            ],
            anchor: "Feynman: 'Study hard what interests you the most in the most undisciplined, irreverent and original manner possible.' You are not becoming a good designer. You are becoming someone who changes what good means.",
            feynman: true,
          },
        ],
      },
    ],
  },
];

const PHASE_ACCENTS = ["#0EA5E9", "#10B981", "#8B5CF6", "#F97316"];
const PHASE_NAMES = ["Phase 1", "Phase 2", "Phase 3", "Phase 4"];

const TRACK_STYLES = {
  "Code":   { bg: "#EFF6FF", color: "#0369A1", dot: "#0EA5E9" },
  "Design": { bg: "#F5F3FF", color: "#6D28D9", dot: "#8B5CF6" },
  "Both":   { bg: "#FFF7ED", color: "#C2410C", dot: "#F97316" },
};

function TrackPill({ track }) {
  const s = TRACK_STYLES[track] || TRACK_STYLES["Both"];
  return (
    <span style={{
      background: s.bg, color: s.color,
      fontSize: "10px", fontWeight: 700,
      letterSpacing: "0.07em", textTransform: "uppercase",
      padding: "3px 10px", borderRadius: "4px",
      border: `1px solid ${s.dot}33`,
      whiteSpace: "nowrap",
    }}>{track}</span>
  );
}

function TaskRow({ task, done, onToggle, accent }) {
  return (
    <div onClick={onToggle} style={{
      display: "flex", alignItems: "flex-start", gap: "14px",
      padding: "13px 0", borderBottom: "1px solid #F3F4F6",
      cursor: "pointer", opacity: done ? 0.38 : 1, transition: "opacity 0.15s",
    }}>
      <div style={{
        width: "20px", height: "20px", borderRadius: "4px",
        flexShrink: 0, marginTop: "2px",
        border: done ? "none" : `1.5px solid #D1D5DB`,
        background: done ? accent : "transparent",
        display: "flex", alignItems: "center", justifyContent: "center",
        transition: "all 0.15s",
      }}>
        {done && <span style={{ color: "#fff", fontSize: "11px", fontWeight: 800, lineHeight: 1 }}>✓</span>}
      </div>
      <span style={{
        flex: 1, fontSize: "14px", color: "#1F2937", lineHeight: 1.65,
        textDecoration: done ? "line-through" : "none",
        textDecorationColor: "#9CA3AF",
      }}>{task.t}</span>
      <span style={{ color: "#9CA3AF", fontSize: "12px", whiteSpace: "nowrap", paddingTop: "2px" }}>{task.m}m</span>
    </div>
  );
}

function SessionCard({ session, accent, completedTasks, onToggleTask }) {
  const totalMin = session.tasks.reduce((a, t) => a + t.m, 0);
  const doneCount = session.tasks.filter((_, i) => completedTasks[i]).length;
  const allDone = doneCount === session.tasks.length;
  const pct = session.tasks.length ? (doneCount / session.tasks.length) * 100 : 0;

  return (
    <div style={{
      background: "#FFF",
      border: "1px solid #E5E7EB",
      borderRadius: "12px",
      overflow: "hidden",
    }}>
      {/* Progress bar */}
      <div style={{ height: "3px", background: "#F3F4F6" }}>
        <div style={{
          height: "100%", width: `${pct}%`,
          background: accent, transition: "width 0.35s ease",
        }} />
      </div>

      {/* Header */}
      <div style={{ padding: "18px 24px 14px", borderBottom: "1px solid #F9FAFB" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px", flexWrap: "wrap" }}>
          <span style={{
            fontSize: "11px", fontWeight: 700, color: accent,
            letterSpacing: "0.04em", textTransform: "uppercase",
          }}>{session.day}</span>
          {session.label && <span style={{ fontSize: "11px", color: "#9CA3AF" }}>· {session.label}</span>}
          <span style={{ fontSize: "11px", color: "#9CA3AF" }}>· {totalMin} min</span>
          <TrackPill track={session.track} />
          {session.feynman && (
            <span style={{
              background: "#FFF7ED", color: "#C2410C",
              border: "1px solid #FED7AA",
              fontSize: "10px", fontWeight: 700,
              letterSpacing: "0.06em", textTransform: "uppercase",
              padding: "3px 10px", borderRadius: "4px",
            }}>✎ Feynman Close</span>
          )}
          {allDone && (
            <span style={{
              marginLeft: "auto", background: accent,
              color: "#FFF", fontSize: "10px", fontWeight: 700,
              padding: "3px 12px", borderRadius: "4px", letterSpacing: "0.04em",
            }}>DONE ✓</span>
          )}
        </div>
        <h3 style={{
          fontFamily: "'Clash Display', 'Inter', sans-serif",
          fontSize: "15px", fontWeight: 700, color: "#111827",
          lineHeight: 1.35, letterSpacing: "-0.03em", textTransform: "uppercase",
        }}>{session.title}</h3>
      </div>

      {/* Tasks */}
      <div style={{ padding: "0 24px" }}>
        {session.tasks.map((task, ti) => (
          <TaskRow key={ti} task={task} done={!!completedTasks[ti]}
            onToggle={() => onToggleTask(ti)} accent={accent} />
        ))}
      </div>

      {/* Anchor */}
      <div style={{ padding: "12px 24px 20px" }}>
        <div style={{
          borderLeft: `3px solid ${accent}`,
          paddingLeft: "14px",
        }}>
          <p style={{
            fontSize: "13px", color: "#6B7280", lineHeight: 1.75,
            fontStyle: "italic",
          }}>{session.anchor}</p>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [activePhase, setActivePhase] = useState(0);
  const [activeWeekIdx, setActiveWeekIdx] = useState(0);
  const [completed, setCompleted] = useState({});

  const phase = PHASES[activePhase];
  const accent = PHASE_ACCENTS[activePhase];
  const week = phase.weeks[activeWeekIdx] || phase.weeks[0];

  const toggleTask = (si, ti) => {
    const key = `p${activePhase}-w${activeWeekIdx}-s${si}-t${ti}`;
    setCompleted(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const getCompleted = (si, ti) => !!completed[`p${activePhase}-w${activeWeekIdx}-s${si}-t${ti}`];
  const getSessionDone = (si) => week.sessions[si].tasks.every((_, ti) => getCompleted(si, ti));
  const weekDoneCount = week.sessions.reduce((a, _, si) => a + (getSessionDone(si) ? 1 : 0), 0);
  const weekComplete = weekDoneCount === week.sessions.length;
  const totalWeekMin = week.sessions.reduce((a, s) => a + s.tasks.reduce((b, t) => b + t.m, 0), 0);

  return (
    <div style={{ minHeight: "100vh", background: "#F9FAFB", fontFamily: "'Inter', -apple-system, sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap');
        @import url('https://api.fontshare.com/v2/css?f[]=clash-display@500,600,700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        button { font-family: inherit; cursor: pointer; }
        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-thumb { background: #E5E7EB; border-radius: 3px; }
      `}</style>

      {/* Nav */}
      <div style={{
        background: "#FFF", borderBottom: "1px solid #E5E7EB",
        padding: "0 40px", display: "flex", alignItems: "stretch",
        position: "sticky", top: 0, zIndex: 20,
        boxShadow: "0 1px 0 #E5E7EB",
      }}>
        <div style={{
          display: "flex", alignItems: "center", gap: "10px",
          paddingRight: "28px", marginRight: "4px",
          borderRight: "1px solid #F3F4F6",
        }}>
          <span style={{
            fontFamily: "'Clash Display', sans-serif",
            fontSize: "16px", fontWeight: 700, color: "#111827",
            letterSpacing: "-0.03em", textTransform: "uppercase",
            whiteSpace: "nowrap",
          }}>Full Stack Designer</span>
          {/* HYF Hexagon Mark */}
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0, marginBottom: "1px" }}>
            <polygon points="13,1 24,7 24,19 13,25 2,19 2,7" fill="#111827" />
            <text x="13" y="16.5" textAnchor="middle" fill="white" fontSize="7.5" fontWeight="700" fontFamily="'Clash Display', sans-serif" letterSpacing="0.5">HYF</text>
          </svg>
        </div>
        {PHASES.map((p, i) => (
          <button key={i}
            onClick={() => { setActivePhase(i); setActiveWeekIdx(0); }}
            style={{
              background: "none", border: "none",
              padding: "0 18px",
              fontSize: "13px", fontWeight: i === activePhase ? 600 : 400,
              color: i === activePhase ? "#111827" : "#6B7280",
              position: "relative", whiteSpace: "nowrap",
              transition: "color 0.15s",
              borderBottom: i === activePhase ? `2px solid ${PHASE_ACCENTS[i]}` : "2px solid transparent",
            }}
          >{p.label}: {p.title}</button>
        ))}
      </div>

      <div style={{ display: "flex", height: "calc(100vh - 49px)" }}>

        {/* Sidebar */}
        <div style={{
          width: "280px", flexShrink: 0,
          background: "#FFF", borderRight: "1px solid #E5E7EB",
          overflowY: "auto", padding: "24px 16px",
        }}>
          <div style={{
            fontSize: "10px", fontWeight: 700, letterSpacing: "0.12em",
            textTransform: "uppercase", color: "#9CA3AF",
            padding: "0 10px", marginBottom: "10px",
          }}>{phase.label} — {phase.title}</div>
          {phase.weeks.map((w, wi) => {
            const wDone = w.sessions.every((_, si) =>
              w.sessions[si].tasks.every((_, ti) => !!completed[`p${activePhase}-w${wi}-s${si}-t${ti}`])
            );
            const isActive = wi === activeWeekIdx;
            return (
              <button key={wi} onClick={() => setActiveWeekIdx(wi)} style={{
                width: "100%", textAlign: "left", border: "none",
                background: isActive ? `${accent}0D` : "transparent",
                borderLeft: isActive ? `3px solid ${accent}` : "3px solid transparent",
                borderRadius: "0 8px 8px 0",
                padding: "10px 12px", marginBottom: "2px",
                transition: "all 0.12s",
              }}>
                <div style={{
                  fontSize: "10px", fontWeight: 700, letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: isActive ? accent : "#9CA3AF",
                  marginBottom: "3px", display: "flex", justifyContent: "space-between",
                }}>
                  <span>Week {w.week}</span>
                  {wDone && <span>✓</span>}
                </div>
                <div style={{
                  fontSize: "12px", fontWeight: isActive ? 600 : 400,
                  color: isActive ? "#111827" : "#6B7280", lineHeight: 1.4,
                }}>{w.theme}</div>
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div style={{ flex: 1, overflowY: "auto", padding: "36px 64px", background: "#F9FAFB" }}>

          {/* Week header */}
          <div style={{ marginBottom: "32px" }}>
            <div style={{
              fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em",
              textTransform: "uppercase", color: accent, marginBottom: "10px",
            }}>Week {week.week} · {week.sessions.length} sessions · {totalWeekMin} min</div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "24px", flexWrap: "wrap" }}>
              <div style={{ flex: 1 }}>
                <h2 style={{
                  fontFamily: "'Clash Display', sans-serif",
                  fontSize: "30px", fontWeight: 700, color: "#111827",
                  letterSpacing: "-0.025em", lineHeight: 1.2, marginBottom: "12px",
                }}>{week.theme}</h2>
                <p style={{ fontSize: "14px", color: "#6B7280", lineHeight: 1.75, maxWidth: "680px" }}>
                  {week.goal}
                </p>
              </div>
              <div style={{
                flexShrink: 0, textAlign: "center",
                padding: "18px 24px", background: "#FFF",
                border: `1px solid ${weekComplete ? accent : "#E5E7EB"}`,
                borderRadius: "12px",
              }}>
                <div style={{
                  fontFamily: "'Clash Display', sans-serif",
                  fontSize: "34px", fontWeight: 700, color: weekComplete ? accent : "#111827",
                  lineHeight: 1,
                }}>{weekDoneCount}/{week.sessions.length}</div>
                <div style={{
                  fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em",
                  textTransform: "uppercase", color: "#9CA3AF", marginTop: "5px",
                }}>sessions</div>
              </div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {week.sessions.map((session, si) => (
              <SessionCard
                key={si} session={session} accent={accent}
                completedTasks={Object.fromEntries(session.tasks.map((_, ti) => [ti, getCompleted(si, ti)]))}
                onToggleTask={(ti) => toggleTask(si, ti)}
              />
            ))}
          </div>

          {/* Nav */}
          <div style={{
            display: "flex", justifyContent: "space-between",
            marginTop: "40px", paddingTop: "24px",
            borderTop: "1px solid #E5E7EB",
          }}>
            <button
              onClick={() => {
                if (activeWeekIdx > 0) setActiveWeekIdx(activeWeekIdx - 1);
                else if (activePhase > 0) { setActivePhase(activePhase - 1); setActiveWeekIdx(PHASES[activePhase - 1].weeks.length - 1); }
              }}
              disabled={activePhase === 0 && activeWeekIdx === 0}
              style={{
                background: "#FFF", border: "1px solid #E5E7EB",
                borderRadius: "8px", padding: "10px 22px",
                fontSize: "13px", fontWeight: 600,
                color: (activePhase === 0 && activeWeekIdx === 0) ? "#D1D5DB" : "#374151",
              }}
            >← Previous</button>
            <button
              onClick={() => {
                if (activeWeekIdx < phase.weeks.length - 1) setActiveWeekIdx(activeWeekIdx + 1);
                else if (activePhase < PHASES.length - 1) { setActivePhase(activePhase + 1); setActiveWeekIdx(0); }
              }}
              disabled={activePhase === PHASES.length - 1 && activeWeekIdx === phase.weeks.length - 1}
              style={{
                background: accent, border: "none",
                borderRadius: "8px", padding: "10px 22px",
                fontSize: "13px", fontWeight: 700, color: "#FFF",
              }}
            >Next Week →</button>
          </div>
        </div>
      </div>
    </div>
  );
}