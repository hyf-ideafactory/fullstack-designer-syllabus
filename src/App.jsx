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
    tagline: "Design has no medium. It has a point of view. Build yours — on screen and in the world.",
    weeks: [
      {
        week: 1,
        theme: "Visual Hierarchy — The First Law of Any Composition",
        goal: "Every great composition — a webpage, a magazine spread, a room, a photograph — is governed by the same law: the eye must be led. Learn to lead it.",
        sessions: [
          {
            day: "Friday, June 5", label: "12:00 PM",
            track: "Code",
            duration: "75 min",
            title: "Odin: HTML Foundations — Structure as Intention",
            tasks: [
              { t: "Open VS Code. Create project folder: fullstack-designer/week-01. Open terminal (Ctrl+`) — you'll live here.", m: 10 },
              { t: "Complete Odin 'Introduction to HTML and CSS' lesson. Ask why each tag exists, not just what it does.", m: 30 },
              { t: "Do the first Odin HTML exercise. Open in Chrome → Inspect. Spend 10 min reading your own HTML in DevTools.", m: 35 },
            ],
            anchor: "Rand: 'Design is the silent ambassador of your brand.' HTML is the skeleton of that ambassador on screen. A room layout, a magazine spread, a film set — each has the same skeleton. Structure before style, always.",
          },
          {
            day: "Saturday, June 6", label: "12:00 PM",
            track: "Design",
            duration: "75 min",
            title: "Visual Hierarchy — Screens, Pages, Rooms, Frames",
            tasks: [
              { t: "Read Refactoring UI: Chapter 1. Read with a pen. Then walk through your home or a public space and apply the same analysis: what does your eye hit first? What's competing? What creates calm?", m: 25 },
              { t: "Collect 4 examples of exceptional visual hierarchy — one website, one magazine spread (photograph a page), one interior photograph, one film still. For each: number the elements in the order your eye hits them. Write WHY.", m: 25 },
              { t: "Recreate the website example in Figma — shapes and text only, no images. Then sketch the interior photograph as a floor plan. What spatial decisions created the hierarchy you felt?", m: 25 },
            ],
            anchor: "Brodovitch laid out Harper's Bazaar the way a choreographer blocks a stage — every spread had a rhythm, a tension, a place for the eye to rest and a place for it to leap. He never touched a screen. Every principle applies to one.",
          },
          {
            day: "Monday, June 8", label: "12:00 PM",
            track: "Both",
            duration: "75 min",
            title: "Connect Code + World — Then Teach It Back",
            tasks: [
              { t: "Build your Saturday Figma layout as a static HTML file — structure only, no CSS. Every div maps to a deliberate visual decision.", m: 35 },
              { t: "Start your Swipe File with THREE sections: Digital, Editorial/Print, and Spatial/World (interiors, photography, set design, environments). Save at least 3 in each. Tag every piece.", m: 20 },
              { t: "FEYNMAN CLOSE: Write 'Visual hierarchy means...' using one digital example, one editorial example, and one spatial example. If you can only explain it on screen, you don't own the principle.", m: 20 },
            ],
            anchor: "Knuth: 'Science is what we understand well enough to explain to a computer. Art is everything else.' A principle you can only apply on screen is a technique. A principle you can apply in a room, a photograph, and a webpage is art.",
            feynman: true,
          },
        ],
      },
      {
        week: 2,
        theme: "Color — Systems, Atmosphere, and Emotional Truth",
        goal: "Color on screen is a hex value. Color in a room is light bouncing off materials. Color in a photograph is mood. Learn the underlying theory and all three become yours.",
        sessions: [
          {
            day: "Friday, June 12", label: "12:00 PM",
            track: "Code",
            duration: "75 min",
            title: "CSS Color — Understanding the Digital Color Model",
            tasks: [
              { t: "Complete Odin CSS Foundations. Focus on color values — hex, rgb(), hsl(). Understand why designers prefer HSL for building scales.", m: 30 },
              { t: "Do the CSS box model exercises. Use DevTools to change 3 colors live on a site you admire.", m: 25 },
              { t: "Search 'color theory warm vs cool' and read one article. Then walk through your home and identify which rooms feel warm and which feel cool. Write: what created that feeling — paint, light, materials, or all three?", m: 20 },
            ],
            anchor: "Rams: 'Good design is as little design as possible.' In color: restraint is sophistication. One perfectly chosen color in a room or on a screen communicates more than five competing ones.",
          },
          {
            day: "Saturday, June 13", label: "12:00 PM",
            track: "Design",
            duration: "75 min",
            title: "Color as Atmosphere — Across Every Surface",
            tasks: [
              { t: "Read Refactoring UI: 'Working with Color.' Then find one interior space (a restaurant, hotel lobby, boutique, or room you love — photograph it or find it online) and deconstruct its color palette the same way. What are the dominant, secondary, and accent colors? What mood do they create together?", m: 30 },
              { t: "Find one editorial/magazine spread and one film still with exceptional color work. For each: write the emotional temperature it creates and how the color choices achieve it.", m: 25 },
              { t: "Build a 5-shade color scale in Figma. Apply it to your Week 1 layout. Ask: if this were a room, what atmosphere would it create? If it were a film scene, what would the emotional register be?", m: 20 },
            ],
            anchor: "Saul Leiter shot photographs in New York for decades using color the way painters use it — as emotional signal, not documentation. The same color intelligence lives in the best digital interfaces. Study both to develop the instinct.",
          },
          {
            day: "Monday, June 15", label: "12:00 PM",
            track: "Both",
            duration: "75 min",
            title: "Apply Color to Code + World — Then Teach It Back",
            tasks: [
              { t: "Add CSS custom properties (color variables) to your HTML project. Name them semantically. Every color intentional.", m: 40 },
              { t: "Install Muzli Chrome extension. Add to your Swipe File: one digital piece, one interior, one photograph — all united by exceptional color. Write: what decision each makes that elevates color from decoration to atmosphere.", m: 20 },
              { t: "FEYNMAN CLOSE: Write 'Color in digital design works by...' and 'The reason color creates atmosphere in a room, a photograph, AND a screen is...' Connect all three.", m: 15 },
            ],
            anchor: "Maeda: 'Simplicity is about subtracting the obvious and adding the meaningful.' Color is most meaningful when it creates a feeling — whether the surface is a pixel, a wall, or a frame.",
            feynman: true,
          },
        ],
      },
      {
        week: 3,
        theme: "Typography — The Voice of Every Medium",
        goal: "Type is voice made visible. Bringhurst codified it for print. The web inherited those laws. Editorial design pushed them further. Photography uses type as subject matter. Learn the laws — then break them with authority.",
        sessions: [
          {
            day: "Friday, June 19", label: "12:00 PM",
            track: "Code",
            duration: "75 min",
            title: "CSS Flexbox + Typography on the Web",
            tasks: [
              { t: "Complete Odin Flexbox lesson alongside MDN Flexbox guide.", m: 25 },
              { t: "Complete all 24 levels of Flexbox Froggy. Understand every answer before advancing.", m: 30 },
              { t: "Find 3 magazines or editorial publications you admire (online or physical). Study one spread: what typefaces are used? What is the relationship between headline size and body text? How does type interact with image?", m: 20 },
            ],
            anchor: "Brodovitch set type at Harper's Bazaar with the same spatial logic a choreographer uses for bodies in space. Tight, expansive, colliding, breathing. That spatial intelligence lives in CSS Flexbox — if you learn to see it.",
          },
          {
            day: "Saturday, June 20", label: "12:00 PM",
            track: "Design",
            duration: "75 min",
            title: "Typography as Editorial Vision",
            tasks: [
              { t: "Read Thinking with Type: Part 1 (Letters). For every principle Lupton names, find it in a magazine spread, a film title sequence, or a photographer's book — not just a website.", m: 30 },
              { t: "Study the title sequences of 2 films or TV shows (search 'best film title sequences' on Art of the Title — artofthetitle.com). Write: how does each use type spatially? What does the typography say about the world you're about to enter?", m: 25 },
              { t: "In Figma: design a magazine cover concept for an imaginary publication. Type only — no images. The type must do all the work.", m: 20 },
            ],
            anchor: "Tibor Kalman at Colors magazine used type as a weapon — to confront, provoke, and make the reader feel something before they read a word. That is the highest use of typography. That standard applies on screen too.",
          },
          {
            day: "Monday, June 22", label: "12:00 PM",
            track: "Both",
            duration: "75 min",
            title: "Type in Browser + Editorial Study — Then Teach It Back",
            tasks: [
              { t: "Add a considered Google Font pairing to your CSS project using typescale.com. Style every text element. No unstyled elements.", m: 30 },
              { t: "Find 3 sites on Siteinspire.com with editorial-quality typography. For each: could this type system work as a magazine cover? A film title? Write what it communicates beyond its literal words.", m: 25 },
              { t: "FEYNMAN CLOSE: Write 'A modular type scale works because...' and 'Typography communicates before it is read because...' Cross screen, editorial, and spatial examples.", m: 20 },
            ],
            anchor: "Bringhurst: 'Typography exists to honor content.' That is true on a screen, on a magazine page, on a film title card, on the spine of a book in a set designer's bookshelf.",
            feynman: true,
          },
        ],
      },
      {
        week: 4,
        theme: "Composition, Grid & Spatial Thinking",
        goal: "The grid is invisible architecture. It governs a webpage, a double-page spread, a room layout, a film frame. See it everywhere. Use it with authority.",
        sessions: [
          {
            day: "Friday, June 26", label: "12:00 PM",
            track: "Code",
            duration: "75 min",
            title: "CSS Grid — Spatial Architecture in the Browser",
            tasks: [
              { t: "Complete Odin CSS Grid. Bookmark CSS-Tricks Complete Guide to Grid permanently.", m: 25 },
              { t: "Complete CSS Grid Garden. Understand every answer.", m: 25 },
              { t: "Build a 12-column grid layout: header, 3-column cards, footer. Pure CSS Grid.", m: 25 },
            ],
            anchor: "The 12-column grid comes from print. CSS Grid is its digital descendant. Interior designers use a furniture grid. Film directors use the rule of thirds. Compositional logic is the same discipline in every medium.",
          },
          {
            day: "Saturday, June 27", label: "12:00 PM",
            track: "Design",
            duration: "75 min",
            title: "Composition Across Media — Grids, Frames, and Space",
            tasks: [
              { t: "Read Grid Systems in Graphic Design: Introduction + Chapter 1. Every diagram describes a spatial decision that lives in editorial design, interior space, and photography equally.", m: 30 },
              { t: "Find the compositional logic in 3 different media: one magazine spread (photograph it), one interior photograph, one film still. For each: draw the underlying grid or compositional structure on tracing paper or in Figma. What lines does the eye follow?", m: 25 },
              { t: "Redesign your Figma layout on a strict 8pt grid. Then find a room photograph and identify its spatial 'grid' — the lines created by furniture, architecture, and light. What are the principles in common?", m: 20 },
            ],
            anchor: "Müller-Brockmann never designed a room. But every principle in Grid Systems maps directly to spatial composition. The grid is not a graphic design tool — it is a thinking tool. It belongs to anyone who arranges things in space.",
          },
          {
            day: "Monday, June 29", label: "12:00 PM",
            track: "Both",
            duration: "75 min",
            title: "Figma Grid → CSS Grid → Spatial Sketch — Then Teach It Back",
            tasks: [
              { t: "Build your 8pt Figma layout in HTML/CSS Grid exactly. Fix every drift between design and code.", m: 40 },
              { t: "Sketch the same compositional logic as a room layout — using the same proportional relationships. What furniture arrangement would create the same visual rhythm as your digital layout?", m: 20 },
              { t: "FEYNMAN CLOSE: Write 'CSS Grid differs from Flexbox in that...' and 'Compositional grid logic applies across digital, editorial, and spatial design because...'", m: 15 },
            ],
            anchor: "Knuth: every layout decision should be provable. You should be able to state why every element occupies the space it does — whether that space is a pixel grid, a page, or a room.",
            feynman: true,
          },
        ],
      },
      {
        week: 5,
        theme: "JavaScript & The Language of Interaction",
        goal: "Interaction is behavior over time. JavaScript governs it on screen. Choreography, spatial flow, and editorial pacing govern it everywhere else. They are all the same discipline.",
        sessions: [
          {
            day: "Friday, July 3", label: "12:00 PM",
            track: "Code",
            duration: "75 min",
            title: "JS Basics — Logic as a Design Tool",
            tasks: [
              { t: "Complete Odin JavaScript Basics. After each concept: run it. Don't just read — execute.", m: 30 },
              { t: "Write a script that changes a page element's color, size, and text on click. Three behaviors, no tutorials.", m: 30 },
              { t: "Watch a 10-minute excerpt from a film directed by a director known for visual control — Kubrick, Wong Kar-wai, Sofia Coppola, Barry Jenkins. Write: how does pacing, spatial arrangement, and color work together to create an emotional state?", m: 15 },
            ],
            anchor: "Maeda: 'The best design doesn't need a manual.' Whether you're designing a button state, a room that guides movement, or a magazine spread that controls reading pace — the goal is always: make the behavior obvious without instruction.",
          },
          {
            day: "Saturday, July 4", label: "12:00 PM",
            track: "Design",
            duration: "75 min",
            title: "Microinteractions, Pacing & Editorial Flow",
            tasks: [
              { t: "Read Dan Saffer's Microinteractions intro. Then find the equivalent of a microinteraction in an editorial context (a pull quote that interrupts body text, a half-bleed photograph, a page turn that reveals a full spread) and in a spatial context (a threshold between rooms, a change in ceiling height, a shift in material underfoot).", m: 30 },
              { t: "Study one magazine you admire — physically or digitally. Map the pacing of a 6-page section: where does it breathe? Where does it compress? Where does the eye get a surprise? Draw a simple timeline diagram of the rhythm.", m: 25 },
              { t: "Prototype one microinteraction in Figma with Smart Animate. The easing should feel like turning a page — not like a loading spinner.", m: 20 },
            ],
            anchor: "Brodovitch's greatest editorial skill was pacing — knowing when to give the reader a dense spread and when to give them a single image on a white page. That is the same skill as knowing when to animate and when to be still.",
          },
          {
            day: "Monday, July 7", label: "12:00 PM",
            track: "Both",
            duration: "75 min",
            title: "Animate with CSS + Study Pacing — Then Teach It Back",
            tasks: [
              { t: "Build your Figma microinteraction in CSS transitions + JS class toggle. Does it have the right weight and pace?", m: 40 },
              { t: "Add to your Swipe File: one digital animation, one editorial spread with strong pacing, one spatial photograph where the eye is led through the image deliberately.", m: 20 },
              { t: "FEYNMAN CLOSE: Write 'A CSS transition works by...' and 'Pacing as a design principle applies across digital interfaces, editorial layouts, and spatial environments because...'", m: 15 },
            ],
            anchor: "Feynman: 'If you can't explain it simply, you don't understand it well enough.' Explain pacing to someone who has never opened a magazine — using only examples from physical spaces they've been in.",
            feynman: true,
          },
        ],
      },
      {
        week: 6,
        theme: "First Real Ship — A Design with a Point of View",
        goal: "Ship a landing page that has the same visual conviction as a great magazine cover or a considered interior. Not a website that looks like a website — a designed thing.",
        sessions: [
          {
            day: "Friday, July 10", label: "12:00 PM",
            track: "Design",
            duration: "75 min",
            title: "Design with Conviction — Find Your Reference Outside the Web",
            tasks: [
              { t: "Choose your concept. Before opening Figma: find your reference in the physical world. A magazine, a film still, a room, a photograph. Something that has the feeling you want your landing page to have.", m: 15 },
              { t: "Sketch 3 layout directions informed by that physical reference. Each should feel like it comes from the same world as your reference material — not like a generic website.", m: 30 },
              { t: "Build the full high-fidelity Figma design. Every decision — type, color, spacing, imagery — should be traceable back to the feeling of your physical reference.", m: 30 },
            ],
            anchor: "The best set designers build rooms that feel like they could exist — because every object in them was chosen with the same specificity a designer uses to choose a typeface. That specificity is what separates work with a point of view from work that merely functions.",
          },
          {
            day: "Saturday, July 11", label: "12:00 PM",
            track: "Code",
            duration: "75 min",
            title: "Build: Semantic Structure, Intentional Style",
            tasks: [
              { t: "VS Code: index.html, style.css, assets/. Semantic HTML first — every tag chosen for meaning.", m: 15 },
              { t: "Build full HTML structure. Apply base CSS: custom properties for colors, type scale, spacing. Disable CSS in DevTools and verify the page still communicates.", m: 45 },
              { t: "Apply CSS: does it still feel like it comes from the same world as your physical reference?", m: 15 },
            ],
            anchor: "A set designer builds a room that tells a story before a single actor walks into it. Your landing page should tell its story before a single user reads a word.",
          },
          {
            day: "Monday, July 14", label: "12:00 PM",
            track: "Both",
            duration: "75 min",
            title: "Polish, Push, Document — Then Teach It Back",
            tasks: [
              { t: "Add hover states, transitions, responsive behavior. Every breakpoint feels designed.", m: 30 },
              { t: "Push to GitHub. Screenshot your landing page next to your physical reference. Write: where did you capture the feeling? Where did you lose it? What would you change?", m: 20 },
              { t: "FEYNMAN CLOSE — Case Study: 200 words. The physical reference you chose, the 3 most important design decisions it inspired, what worked, what didn't, what you'd do differently.", m: 25 },
            ],
            anchor: "Vignelli: 'The public is more familiar with bad design than good design.' Shipping something that has a genuine point of view — however imperfect — is an act of resistance. Do it again and again.",
            feynman: true,
          },
        ],
      },
      {
        week: 7,
        theme: "Responsive Design + Developing a Photographic Eye",
        goal: "Responsive design is designing for unknown conditions. Photography is composing under constraint. Both develop the same fundamental skill: clarity of intention.",
        sessions: [
          {
            day: "Friday, July 17", label: "12:00 PM",
            track: "Code",
            duration: "75 min",
            title: "Responsive CSS — Designing for Every Condition",
            tasks: [
              { t: "Complete Odin responsive design lesson. Mobile-first always: smallest screen first, then expand.", m: 25 },
              { t: "Make your Week 6 landing page fully responsive. Test at 375px, 768px, 1280px. Every breakpoint feels designed.", m: 35 },
              { t: "Look at your landing page on your phone. Does the feeling from your physical reference survive the small screen? Note what breaks — emotionally, not just technically.", m: 15 },
            ],
            anchor: "A photographer composing a frame cannot control the light, the subject's movement, or the moment — only their response to these constraints. Responsive design is the same discipline: compose beautifully within conditions you don't control.",
          },
          {
            day: "Saturday, July 18", label: "12:00 PM",
            track: "Design",
            duration: "75 min",
            title: "Developing a Photographic Eye — Composition as Instinct",
            tasks: [
              { t: "Study the work of one photographer whose compositional instinct you want to absorb: Saul Leiter, Irving Penn, Gordon Parks, Viviane Sassen, or Alec Soth. Find 10 of their images. For each: identify the compositional choice that makes it work — leading lines, negative space, depth of field, color relationship, subject placement.", m: 35 },
              { t: "Take or find 10 photographs yourself this week — on your phone. Apply everything you observed. Don't document. Compose. Note the difference between a snapshot and a frame.", m: 25 },
              { t: "Add the best 5 to your Swipe File's Spatial/World section. Write one sentence each: what compositional decision defines this image?", m: 15 },
            ],
            anchor: "Irving Penn photographed fashion, still lifes, and environmental portraits with the same compositional intelligence. He said: 'A photograph is not an accident — it is a concept.' Every layout decision you make should be a concept, not an accident.",
          },
          {
            day: "Monday, July 21", label: "12:00 PM",
            track: "Both",
            duration: "75 min",
            title: "Cross-Medium Composition Study — Then Teach It Back",
            tasks: [
              { t: "Take one of your photographs and translate its compositional logic into a Figma layout. Use the same proportional relationships, the same balance of density and space, the same color temperature.", m: 30 },
              { t: "Build a simple HTML/CSS implementation of that layout. Does the compositional intelligence survive the translation to code?", m: 25 },
              { t: "FEYNMAN CLOSE: Write 'Compositional intelligence means...' using one example from photography, one from interior design, and one from digital layout.", m: 20 },
            ],
            anchor: "Feynman: 'The first principle is that you must not fool yourself.' Study your own photographs honestly. The ones that work reveal what you instinctively understand about composition. The ones that don't reveal what you still need to learn.",
            feynman: true,
          },
        ],
      },
      {
        week: 8,
        theme: "Animation, Motion & Cinematic Thinking",
        goal: "Film directors, choreographers, and interaction designers all work in time. Study the masters of visual time — then bring that intelligence to the browser.",
        sessions: [
          {
            day: "Friday, July 24", label: "12:00 PM",
            track: "Code",
            duration: "75 min",
            title: "DOM Manipulation — Design That Responds",
            tasks: [
              { t: "Complete Odin DOM lesson. Understand the tree structurally before manipulating it.", m: 25 },
              { t: "Build an accordion component: click to expand, collapse, smooth CSS transition. No libraries.", m: 35 },
              { t: "Watch the opening 5 minutes of a Wes Anderson, Stanley Kubrick, or Wong Kar-wai film. Write: how does the camera movement and editing pace create an emotional state before any dialogue? What is the pacing equivalent in an interface?", m: 15 },
            ],
            anchor: "The DOM is a timeline waiting to be designed. Every state change is a cut. Every transition is a camera move. Study directors who think in visual time — they are teaching you interaction design without knowing it.",
          },
          {
            day: "Saturday, July 25", label: "12:00 PM",
            track: "Design",
            duration: "75 min",
            title: "Cinematic Thinking Applied to Interface",
            tasks: [
              { t: "Watch 'Designing with Motion' — Google Material Design YouTube (25 min). Then watch the Art of the Title presentation for one film title sequence (artofthetitle.com). Write: what principles appear in both? What does cinematic motion design understand that digital UI motion often misses?", m: 35 },
              { t: "In Figma: prototype 3 transition variants for a modal. Name each after a cinematic concept — a cut, a dissolve, a push. Write the emotional register each creates.", m: 25 },
              { t: "Add to your Swipe File: 3 film stills or title sequence frames with exceptional visual timing. What in each frame creates a sense of before and after?", m: 15 },
            ],
            anchor: "Brodovitch told his students: 'Astonish me.' The best digital animation aspires to the same standard. Not motion that functions — motion that makes the viewer feel something they didn't expect.",
          },
          {
            day: "Monday, July 28", label: "12:00 PM",
            track: "Both",
            duration: "75 min",
            title: "Animate Your Page Cinematically — Then Teach It Back",
            tasks: [
              { t: "Add entrance animations to your landing page: CSS @keyframes + Intersection Observer. Reference one of your cinematic transitions. Name the easing curve after the film it came from.", m: 40 },
              { t: "Audit: does each animation under 350ms? Does each have a cinematic rationale? Remove any that don't.", m: 20 },
              { t: "FEYNMAN CLOSE: Write 'The Intersection Observer API works by...' and 'Cinematic motion design and digital interface animation share the principle of...'", m: 15 },
            ],
            anchor: "Knuth: 'Beware of bugs in the above code; I have only proved it correct, not tried it.' Every animation should be proven — not just technically, but emotionally. Does it feel right? Can you say why?",
            feynman: true,
          },
        ],
      },
      {
        week: 9,
        theme: "Figma Mastery + Spatial & Editorial Intelligence",
        goal: "A Figma component library, a magazine's visual system, and a room's material palette are all the same thing: a designed set of constraints that enable creativity within a defined language.",
        sessions: [
          {
            day: "Friday, July 31", label: "12:00 PM",
            track: "Design",
            duration: "75 min",
            title: "Figma Components — Vocabulary of a Visual System",
            tasks: [
              { t: "Complete Figma's official Components tutorial. Build immediately after watching — not later.", m: 30 },
              { t: "Build a button component with 4 states. Every state intentional and defensible.", m: 25 },
              { t: "Study a magazine's visual system: find 6 consecutive pages of a publication you admire. Identify the recurring 'components' — headline style, pull quote treatment, image caption style, section break. Write: how does consistency across these elements create a reading experience?", m: 20 },
            ],
            anchor: "A magazine's visual system is a component library. A room's material palette is a design system. Vignelli understood this: the same logic that governs a typeface choice governs a furniture choice. All are decisions within a defined language.",
          },
          {
            day: "Saturday, August 1", label: "12:00 PM",
            track: "Design",
            duration: "75 min",
            title: "Spatial & Editorial Intelligence — Studying the Masters",
            tasks: [
              { t: "Choose one: study an interior designer's body of work (Axel Vervoordt, Kelly Wearstler, Ilse Crawford) OR a magazine creative director's body of work (Fabien Baron, Carine Roitfeld, D.W. Pine at TIME). Write one page: what is their visual philosophy? How do their decisions create a world?", m: 40 },
              { t: "Find 3 images of spaces or editorial work from your chosen practitioner. Add them to your Swipe File. For each: identify the single decision that defines the work.", m: 20 },
              { t: "Write: how would you describe your own developing aesthetic in the context of this practitioner's work? Where do you converge? Where do you diverge?", m: 15 },
            ],
            anchor: "Ilse Crawford: 'We spend 87% of our time in buildings. Design affects all of us, all of the time.' The designer who understands space understands the human condition more fully than one who only designs screens.",
          },
          {
            day: "Monday, August 4", label: "12:00 PM",
            track: "Code",
            duration: "75 min",
            title: "Odin: JS Functions + Arrays — Then Teach It Back",
            tasks: [
              { t: "Complete Odin Functions lesson. Write, run, modify, break every example. Passive reading is passive understanding.", m: 30 },
              { t: "Complete Odin Arrays lesson. Build a dynamic list. Style it with the same visual intentionality you'd bring to editorial design.", m: 30 },
              { t: "FEYNMAN CLOSE: Write 'A function in JavaScript is...' and 'The concept that connects a Figma component library, a magazine's visual system, and an interior designer's material palette is...'", m: 15 },
            ],
            anchor: "Knuth: 'Computer programming is an art.' So is editorial design. So is interior design. So is photography. They are all ways of making decisions about form, meaning, and human experience.",
            feynman: true,
          },
        ],
      },
      {
        week: 10,
        theme: "Design Psychology, Atmosphere & The Designed Experience",
        goal: "Every designed experience — a website, a magazine, a room, a photograph — is a manipulation of human perception. Understanding perception is the foundation of designing any of them well.",
        sessions: [
          {
            day: "Friday, August 7", label: "12:00 PM",
            track: "Design",
            duration: "75 min",
            title: "Norman's Principles + Spatial Experience Design",
            tasks: [
              { t: "Read The Design of Everyday Things: Chapters 1–2. For every principle: find a digital example AND a spatial example (a confusing lobby, a hotel room that feels wrong, a restaurant that makes you feel calm).", m: 35 },
              { t: "Visit or recall a designed environment that made you feel something specific: a hotel lobby, a museum gallery, a restaurant, a retail store. Write: what specific design decisions created that feeling? Light, materiality, scale, sequence of spaces, sound, scent?", m: 25 },
              { t: "Find the digital equivalent: a website that creates the same feeling. What specific decisions produce the parallel effect?", m: 15 },
            ],
            anchor: "Norman: 'Good design fits our needs so well that the design is invisible.' This is equally true for a checkout flow and a corridor that guides you through a museum. The goal is the same: make the experience feel inevitable.",
          },
          {
            day: "Saturday, August 8", label: "12:00 PM",
            track: "Code",
            duration: "75 min",
            title: "Odin: JS Objects — Modeling Experience",
            tasks: [
              { t: "Complete Odin Objects lesson. Build an object that models a designed environment: a room with properties for materials, light quality, color palette, spatial flow, intended emotional register.", m: 30 },
              { t: "Build a to-do list app. Make every state look intentional — the same care a set designer gives to every object placed on a table.", m: 35 },
              { t: "Read 'Object-Oriented Design' intro on MDN. Write: how does OOP relate to the way a set designer thinks in modular, interchangeable elements that together create a unified world?", m: 10 },
            ],
            anchor: "Rams designed physical products that communicated through their presence alone. A well-designed object in a set, on a page, or on a screen is the same — it speaks before it is used.",
          },
          {
            day: "Monday, August 11", label: "12:00 PM",
            track: "Both",
            duration: "75 min",
            title: "Apply Psychology to Your Work + World — Then Teach It Back",
            tasks: [
              { t: "Audit your Week 6 landing page with Norman's lens. Find and fix 3 violations.", m: 30 },
              { t: "Revisit a designed space you've been to recently. Apply Norman's lens. Write: what one change would most improve the experience — and what is the digital equivalent of that change?", m: 25 },
              { t: "FEYNMAN CLOSE: Write 'An affordance is...' using one digital, one spatial, and one photographic example.", m: 20 },
            ],
            anchor: "Rams on his own products: 'You cannot understand good design if you do not understand people.' People are the constant. Every medium is just a different way of designing for them.",
            feynman: true,
          },
        ],
      },
      {
        week: 11,
        theme: "Building a Visual World — Brand, Identity & Aesthetic Systems",
        goal: "The designers who thrive across media all share one thing: a coherent visual world. Learn to build one — and to articulate it.",
        sessions: [
          {
            day: "Friday, August 14", label: "12:00 PM",
            track: "Design",
            duration: "75 min",
            title: "Building a Visual World — From Brand to Set to Magazine",
            tasks: [
              { t: "Study one practitioner who creates a fully coherent visual world across media: Wes Anderson (film, sets, graphics, costumes), Aesop (retail design, website, packaging, editorial), or Kinfolk Magazine (photography, editorial, spatial). Write one page: what are the 5 decisions that make their world coherent?", m: 35 },
              { t: "Read Thinking with Type: Part 2. Note how editorial typography creates a reading world — not just a readable page.", m: 25 },
              { t: "Add 5 pieces to your Swipe File that represent a coherent visual world — not just beautiful individual pieces.", m: 15 },
            ],
            anchor: "Wes Anderson's films are production design, costume, typography, color palette, and music working as one coherent intelligence. That is the standard for a cross-medium designer. Every touchpoint — screen, page, space, object — speaking the same language.",
          },
          {
            day: "Saturday, August 15", label: "12:00 PM",
            track: "Code",
            duration: "75 min",
            title: "Odin: Clean Code — The Craft Behind the World",
            tasks: [
              { t: "Complete Odin Clean Code lesson. Refactor your Week 6 project — every name precise and meaningful.", m: 30 },
              { t: "Start Odin Library or Tic-Tac-Toe project.", m: 35 },
              { t: "Read: 'Naming Things in Code' on CSS-Tricks. A well-named CSS class and a well-chosen object on a set tell the same kind of story.", m: 10 },
            ],
            anchor: "Behind every coherent visual world is meticulous craft. Wes Anderson's set designers catalog thousands of objects. The code behind a beautiful interface should be equally considered.",
          },
          {
            day: "Monday, August 18", label: "12:00 PM",
            track: "Both",
            duration: "75 min",
            title: "Build Your Visual World — Then Teach It Back",
            tasks: [
              { t: "In Figma: define a mini brand system that is also the beginning of a visual world — not just a website palette. Ask: what does this world sound like? What does it smell like? What room does it live in? The answers will refine the design decisions.", m: 40 },
              { t: "Export CSS custom properties. Apply them to an HTML file. Does the code feel like it belongs to the same world as the Figma design?", m: 20 },
              { t: "FEYNMAN CLOSE: Write 'A visual world is different from a visual style because...' and 'The design decisions that make a world coherent across digital and physical media are...'", m: 15 },
            ],
            anchor: "Vignelli: 'The life of a designer is a life of fight against the ugliness.' Building a world is the most ambitious form of that fight — because it demands consistency of vision across every surface it touches.",
            feynman: true,
          },
        ],
      },
      {
        week: 12,
        theme: "Phase 1 Retrospective — Who Are You As a Designer?",
        goal: "The most important question at the end of Phase 1 is not what you can build. It is what point of view you are developing — and across which worlds you want to design.",
        sessions: [
          {
            day: "Friday, August 21", label: "12:00 PM",
            track: "Code",
            duration: "75 min",
            title: "Code Retrospective — Review With Honest Eyes",
            tasks: [
              { t: "Open every project from Weeks 1–11. Review as if seeing for the first time. Write: what would you refactor? What holds up? Be specific.", m: 30 },
              { t: "Finish and push any incomplete Odin projects to GitHub.", m: 30 },
              { t: "Set up your portfolio GitHub repo with a README that describes not just what you're building — but the visual world you are working toward.", m: 15 },
            ],
            anchor: "Knuth reviewed his own work for decades without mercy. The gap between what you made and what you intended to make is not failure — it is the precise location of your next growth.",
          },
          {
            day: "Saturday, August 22", label: "12:00 PM",
            track: "Design",
            duration: "75 min",
            title: "Swipe File Retrospective — Name Your World",
            tasks: [
              { t: "Scroll your entire Swipe File — Digital, Editorial/Print, and Spatial/World sections. What patterns appear across all three? What draws you regardless of medium?", m: 25 },
              { t: "Write 400 words: 'My visual world at Week 12.' Not just aesthetic preferences — the emotional register, the cultural references, the media you are drawn to. What kind of environments do you want to design?", m: 30 },
              { t: "Identify one practitioner — across any medium — whose career trajectory you want to study in depth in Phase 2.", m: 20 },
            ],
            anchor: "Rand: 'Art is an idea that has found its perfect visual expression.' Your idea is emerging. Your job in Phase 2 is to find its perfect expression — on screen, on page, in space.",
          },
          {
            day: "Monday, August 25", label: "12:00 PM",
            track: "Both",
            duration: "75 min",
            title: "Set Phase 2 Intentions — The Final Feynman Close",
            tasks: [
              { t: "Write: 3 specific things you will do differently in Phase 2. Behavioral, actionable changes.", m: 20 },
              { t: "Set up your portfolio Vite project. Deploy to Vercel. It should exist before Phase 2 begins.", m: 30 },
              { t: "PHASE 1 FEYNMAN CLOSE: Write one page. Question: 'What kind of designer am I becoming — and across which media does my point of view most want to be expressed?' Be honest. Keep it. The answer will change in Phase 2.", m: 25 },
            ],
            anchor: "Feynman at the end of his life: 'What I cannot create, I do not understand.' Phase 1 taught you to create the foundations. Phase 2 is where you begin to understand them — and to develop a point of view that no medium can contain.",
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
    tagline: "Build React fluency on screen. Develop taste in space, on page, and through the lens. Both tracks, every week.",
    weeks: [
      {
        week: 13,
        theme: "React + Spatial & Editorial Deep Dive",
        goal: "React is your digital building material. Space, editorial, and photography are your analog building materials. Develop all of them in parallel — they make each other sharper.",
        sessions: [
          {
            day: "Friday, Aug 28", label: "12:00 PM",
            track: "Code",
            duration: "75 min",
            title: "React Foundations — Components as a Design Language",
            tasks: [
              { t: "Read Odin React intro AND React's 'Thinking in React' (react.dev). Together they give the complete mental model.", m: 25 },
              { t: "Build your first component: a styled Card in JSX. Props for title, description, CTA. Make it look good.", m: 35 },
              { t: "Read Refactoring UI: 'Working with Shadows.' Add shadows to your Card — custom, considered.", m: 15 },
            ],
            anchor: "A React component is a reusable design decision. A recurring spatial element in a designed room — a window proportion, a material palette, a light fixture type — is the same thing. Both are design languages built from repeating intelligent decisions.",
          },
          {
            day: "Saturday, Aug 29", label: "12:00 PM",
            track: "Design",
            duration: "75 min",
            title: "Spatial & Editorial Intelligence — Go Deeper",
            tasks: [
              { t: "Choose a practitioner from Week 9 to study in depth this phase. This week: read or watch a long-form interview with them. Write: what is their design philosophy stated in their own words? How does it show up in their work?", m: 30 },
              { t: "Visit a designed space this week — a museum, gallery, boutique, hotel lobby, restaurant, or well-designed store. Spend 30 min there intentionally. Photograph it. Write: what 5 design decisions define the experience?", m: 30 },
              { t: "Start DesignCode.io React course — Lessons 1–2. Note every Figma → React translation.", m: 15 },
            ],
            anchor: "Ilse Crawford spends months in a space before designing it — observing how people move, where they linger, what the light does at different hours. That depth of observation is what produces work that feels inevitable rather than imposed.",
          },
          {
            day: "Monday, Sep 1", label: "12:00 PM",
            track: "Both",
            duration: "75 min",
            title: "React + Spatial Translation — Then Teach It Back",
            tasks: [
              { t: "Scaffold Vite + React. Convert Phase 1 landing page into components: Nav, Hero, Card, Footer.", m: 40 },
              { t: "Take one observation from your spatial visit and translate it into a design decision for your landing page. What did the space teach you about proportion, light, or pacing that applies to the screen?", m: 20 },
              { t: "FEYNMAN CLOSE: Write 'React components differ from HTML elements in that...' and 'Observing a designed space teaches a digital designer...'", m: 15 },
            ],
            anchor: "The designers who move fluidly between media are the ones who never stop studying — in galleries, in restaurants, in books, in theaters. The screen is just one surface. Let everything else sharpen your eye for it.",
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
    tagline: "Build systems that scale: from token to typeface, from favicon to magazine cover, from component to room.",
    weeks: [
      {
        week: 29,
        theme: "Design Systems + Visual World Systems",
        goal: "A design system governs digital components. A visual world system governs everything — digital, editorial, spatial, photographic. Build toward the larger thing.",
        sessions: [
          {
            day: "Friday", label: "12:00 PM",
            track: "Design",
            duration: "75 min",
            title: "Atomic Design + World-Building Systems",
            tasks: [
              { t: "Read Brad Frost's Atomic Design: Chapters 1–2. For each level — atom, molecule, organism — find the equivalent in a magazine's visual system AND in a designed interior AND in a film's production design.", m: 35 },
              { t: "Audit your Figma work from Phases 1–2. Then audit your Swipe File's editorial and spatial sections. What visual decisions appear consistently across all three? Those are the atoms of your personal design language.", m: 25 },
              { t: "Write: what would your visual world system look like as a document? What would its atoms be — type, color, spatial proportion, material, photographic style?", m: 15 },
            ],
            anchor: "Wes Anderson's entire body of work runs on a design system — a specific color palette, a symmetrical spatial grammar, a particular typeface, a precise material world. It is as rigorous as any component library. More rigorous, probably.",
          },
          {
            day: "Saturday", label: "12:00 PM",
            track: "Code",
            duration: "75 min",
            title: "Storybook — Where Your System Lives in Code",
            tasks: [
              { t: "Install Storybook in a React project. Write stories for Button, Card, Input — 3–4 states each.", m: 35 },
              { t: "Read Design Systems Handbook, Chapter 1 (free, InVision). Note where the principles extend beyond digital interfaces.", m: 25 },
              { t: "Write: what would a story in Storybook look like for a spatial design element? An editorial component? The question is not practical — it trains you to think about reusability across media.", m: 15 },
            ],
            anchor: "Storybook makes design system intentions visible in code. Imagine the equivalent for a magazine — a documented system of every recurring editorial element. The best publications have one. Most designers who work on them don't know it.",
          },
          {
            day: "Monday", label: "12:00 PM",
            track: "Both",
            duration: "75 min",
            title: "Token Parity + Visual World Documentation — Then Teach It Back",
            tasks: [
              { t: "Define your complete token set in Figma Variables AND CSS custom properties. Color, spacing, type scale. Every token named semantically.", m: 35 },
              { t: "Write a one-page 'Visual World Document' for your personal design language: typefaces, color palette, spatial proportions, photographic references, spatial references, emotional register. This is your design system for every medium.", m: 25 },
              { t: "FEYNMAN CLOSE: Write 'Design tokens work across a digital product because...' and 'A visual world system works across media because...'", m: 15 },
            ],
            anchor: "Rams: 'Good design is thorough down to the last detail.' In a visual world system, that thoroughness means every decision — pixel or proportion, color hex or wall paint — comes from the same source of truth.",
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
    tagline: "Build publicly. Develop a point of view. Choose your medium — or refuse to choose. The best designers never did.",
    weeks: [
      {
        week: 41,
        theme: "Portfolio — Work That Exists in the World",
        goal: "Your portfolio must show a point of view — not just a skill set. The analog demand is growing. The designers who thrive will be the ones who can design with conviction in any medium.",
        sessions: [
          {
            day: "Friday", label: "12:00 PM",
            track: "Design",
            duration: "75 min",
            title: "Portfolio as Visual World — Not Just Case Studies",
            tasks: [
              { t: "Study three portfolios that show a coherent visual world, not just a project list: Pentagram (pentagram.com), 2x4 (2x4.org), or Sagmeister & Walsh. Write: how does each portfolio communicate a point of view before you read a single project description?", m: 30 },
              { t: "Inventory your work: digital projects, editorial experiments, spatial studies, photographs. Your portfolio needs at least one project that shows your point of view across more than one medium.", m: 25 },
              { t: "Write your bio. Does it describe a designer with a point of view — or just a list of skills? Rewrite until it sounds like a person who has something to say.", m: 20 },
            ],
            anchor: "Rand: 'Don't try to be original. Just try to be good.' Good means: a coherent point of view expressed with precision and conviction. In every medium you choose to work in.",
          },
          {
            day: "Saturday", label: "12:00 PM",
            track: "Code",
            duration: "75 min",
            title: "Build in Next.js — Production Grade From Day One",
            tasks: [
              { t: "Scaffold Next.js portfolio project. Read docs before writing a single component.", m: 20 },
              { t: "Build home page component structure. Framer Motion transitions from the start.", m: 40 },
              { t: "Deploy to Vercel. Iterate in public. The portfolio that exists beats the perfect one that doesn't.", m: 15 },
            ],
            anchor: "Every practitioner in every medium eventually has to ship something. The film has to screen. The magazine has to print. The website has to deploy. Ship.",
          },
          {
            day: "Monday", label: "12:00 PM",
            track: "Both",
            duration: "75 min",
            title: "First Case Study + Specialize — The Final Feynman Close",
            tasks: [
              { t: "Write the case study for your strongest project. Structure: the visual world you were building toward, the 3 most important decisions, what you built, what the work taught you about your point of view.", m: 35 },
              { t: "Identify your specialization direction: set design, interior design, editorial, photography, digital product, or the designer who refuses to specialize. Write: why this direction? What work have you made that points toward it?", m: 20 },
              { t: "FINAL FEYNMAN CLOSE: Write 'What kind of designer am I, and what do I have to say that no one else is saying — in any medium?' Answer honestly. This is not the last time you'll answer it.", m: 20 },
            ],
            anchor: "Feynman: 'Study hard what interests you the most in the most undisciplined, irreverent and original manner possible.' You are not becoming a good designer. You are becoming someone who changes what good means — in every room, on every page, on every screen.",
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
