# Quick Start

```
npm install
npm run dev
```

### Environment Variables

You need to add a .env and include your contenful envs!
`CONTENTFUL_SPACE_ID= CONTENTFUL_PREVIEW_ACCESS_TOKEN= CONTENTFUL_ACCESS_TOKEN=`

## Page Structure

`page>index` - this is the home page template
`page>[...path]` - this all other pages are conditionally rendered by the slug in contentful.

Next renderes anything in the `pages` directory as a magic page, so all other styles/files need to live elsewhere or you will crash the site. Because of this, these dynamic pages use a wrapper component for all of the fe rendering to keep things easier for logic and styles.

`componets>pages>Layout` - this is the wrapper for the whole page, where the `meta` and `header` live. You could also add a footer here
`components>pages>ModulesPage` - this is the bulk of how the contentful module system works. more in next section

# Modules

-Create a new `Content Type` in contentful.
-Add that content type to `Content Types > Pages > Modules`
-Add a query for that module in `lib>api` and `lib>modules` -`getPageByPath > modulesCollection > items` is where the new content type should be added. For now this step we just get the id so we can query its content in a separate call, otherwise we will probably overload graphql
-add your module name/method(that we will create in the next step) to `moduleQueries` this name comes from the id of the content type you created in contentful.
-in `lib>modules` create your query for the specific module
-Create a component for your new module
-Add your component/module name to `modulesMap` in `components>ModulesPage`
-Now your component and new module should be rendering!

# State Management

There is a global context hooked up and available to the entire app in `/context.js`. Please add any additional global variables to `AppContext`.
