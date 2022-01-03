# Iq Blueberry Design System

The Iq Design System (Blueberry) came to bring a series of benefits and to solve a series of common problems in the Iq development workflow.

### The main benefits are:

- Keep visual consistency between components, pages and projects
- Create easily maintainable components
- Develop a common language between Design and Front-end teams
- Single source of truth to style code
- Share code between Iq applications
- Faster development of pages and features (keeping quality and isolation of code)
- Using css as base, the consumer applications can use almost any technology or framework such as React and css-in-js libraries

### Detailing the main workflow problems to be solved:

- Code rewriting
  - There are lots of React components already coded, but they are hard to modify and to be found in the codebase
  - 100% of the code is rewritten on different applications that use different technologies (Ex: React, Pug), with the design system we can share style (css) code
  - Some visual rules are rewritten every new layout, such as paddings, containers, alignment...
- Inconsistent layouts and components
  - Layout breaking on specific breakpoints
  - Pages and components with old styles that doesn't reflect the current state of the product
  - Non standard styles and animations

---

## What is a framework agnostic design system?

It's an organized collection of reusable components, rules, and standards that can help build applications in a convenient way - keeping the brand's visual identity. Since it is a framework-agnostic design system, this library of components and standards is independent of any framework, meaning that teams can use the components no matter what framework is used. This DS is developed in Storybook.

---

## Design Tokens

## They are Design System's values (or variables) created to name and reuse important information. Example: `blueberry-60`is a design token, it stores the color `#453AD3`.

## Installation

Install all dependencies:

```
yarn
```

Then you run:

```
yarn dev:react
```

The port `localhost:6006` is automatically opened.

---

## Developing new components

1. Go to `src/flavors/react/components` and create a folder inside it for your component
2. Create the following files:
   - `YourComponent.stories.tsx`: to index your component's page in Storybook
   - `index.tsx`: your component
   - `style.styl`: if style is needed

---

## Main Technology Stack

- TypeScript
- React
- Pug (will be deprecated soon)
- Stylus
- Yarn
- Babel
- Gatsby

## Build tasks

For icons: `yarn register-icons`

## Slack channel

#iq-design-system
