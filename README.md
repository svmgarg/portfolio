# Getting Started with Your Portfolio

## Editing Content

All user-facing text content is stored in JSON files located in the `src/content/` directory. You can easily customize the portfolio by editing these files without touching any React code.

### Content Files

- **`src/content/site.json`** - Global navigation labels (About, Experience, Skills, Contact)
- **`src/content/home.json`** - Personal information, contact details, social links, and overview text
- **`src/content/experience.json`** - Experience section heading
- **`src/content/skills.json`** - Skills section headings
- **`src/content/contact.json`** - Contact form labels and messages

### How to Update Content

1. Navigate to the `src/content/` directory
2. Open the relevant JSON file for the section you want to edit
3. Modify the text values (keep the JSON structure intact)
4. Save the file
5. The changes will appear automatically in development mode, or rebuild for production

### Example

To change your name, edit `src/content/home.json`:
```json
{
  "firstName": "YourFirstName",
  "lastName": "YourLastName",
  ...
}
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.\


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run deploy`

Builds the app and deploys it to GitHub Pages using the gh-pages branch method.

## Deployment

This portfolio is automatically deployed to GitHub Pages when changes are pushed to the `main` branch. The deployment workflow:

1. Builds the React application
2. Deploys the build to the `gh-pages` branch
3. GitHub Pages serves the site from the `gh-pages` branch

**Important**: Make sure GitHub Pages is enabled in your repository settings and configured to use the `gh-pages` branch as the source.

Currently Deployed on - https://svmgarg.github.io/portfolio/
