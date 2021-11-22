# This is my personal Template Project for creating a new Next App with Typescript

## It contains the basic Setup for:

| Name          |   Package Name   | Version |
| ------------- | :--------------: | :-----: |
| React         |      react       | 17.0.2  |
| Material-UI   |  @mui/material   |  5.1.1  |
| Redux Toolkit | @reduxjs/toolkit |  1.6.2  |
| Redux Persist |  redux-persist   |  6.0.0  |
| Node Polyglot |  node-polyglot   |  2.4.2  |

---

## Following Libraries were added for convenience (or needed by one of the above)

| Package Name        |    Version     |               Purpose                |
| ------------------- | :------------: | :----------------------------------: |
| @emotion/cache      |     11.6.0     |  MUI styling Engine - Cache for SSR  |
| @emotion/react      |     11.6.0     |   MUI styling Engine - React Dep.    |
| @emotion/server     |     11.4.0     | MUI styling Engine - Server for SSR  |
| @emotion/styled     |     11.6.0     | MUI styling Engine - Styles package  |
| @mui/icons-material |     5.1.1      |          MUI Icons Package           |
| @mui/lab            | 5.0.0-alpha.55 | MUI Lab Components (i.e. DatePicker) |
| date-fns            |     2.26.0     |          JS Date Utilities           |
| lodash              |     2.26.0     |             JS Utilities             |
| react-redux         |     7.2.6      | Connect Redux to React + Hooks etc.  |

---

## Furthermore this Template already implements the upcoming functionalities

### In case of questions please always refer to the respective documentation

- Setup Material-UI with Emotion for SSR
  - see src/pages/\_document.tsx
  - see src/pages/\_app.tsx
  - Custom Theme in src/theme/index.tsx
- Setup Redux with Redux Toolkit and Redux-Persist
  - see src/redux
  - basic store setup with configureStore and type exports
  - in src/redux/app there are already 2 slices implemented (Theme Toggle and Snackbar)
- Setup Translation functionality with Node-Polyglot
  - See src/lib/translate.tsx
  - Creates a TranslationProvider
  - Creates Hook for getting the translate method
  - Creates Hooks to get/set the locale
  - Translation File located in src/i18n/en.json
- Custom Hooks
  - In Addition to the translation hooks, I added 2 more in src/lib/customHooks
  - usePrevious - returns previous value of a variable
  - useSnackbar - returns function to display snackbars
- Config
  - Almost empty config, added for complete folder structure
- Components
  - Already added 3 basic components
  - CustomAppBar: Basic MUI Appbar with Light/Dark Theme Switch
  - MainLayout: Wraps every page and adds CustomAppBar
  - CustomSnackbar: Our Snackbar we display for every Notification

---

---

---

## Finally the Default Readme content by create-next-app

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
