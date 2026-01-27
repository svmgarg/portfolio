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

This portfolio is automatically deployed to GitHub Pages when changes are pushed to the `main` branch using GitHub Actions. The deployment workflow:

1. Builds the React application
2. Creates a deployment artifact
3. Deploys directly to GitHub Pages using GitHub Actions

**Why GitHub Actions Workflow?**
The deployment uses GitHub Actions (modern approach) instead of the legacy gh-pages branch method because it provides:
- Better CI/CD integration with automatic deployments on every push
- Built-in security with GitHub's deployment environments
- More control over the build and deployment process
- Appears in the "Deployments" section of the GitHub repository

**Configuration**: The workflow automatically enables GitHub Pages if not already configured. No manual setup is required in repository settings.

Currently Deployed on - https://svmgarg.github.io/portfolio/

## Security

This project includes security measures to minimize vulnerabilities:

- **Dependency Overrides**: The `package.json` includes overrides for `nth-check` and `postcss` to use patched versions that fix known security vulnerabilities
- **Regular Updates**: Dependencies are regularly audited using `npm audit`
- **Development-Only Vulnerabilities**: The remaining 2 moderate severity issues in `webpack-dev-server` only affect the development server and do not impact the production build

To check for security vulnerabilities, run:
```bash
npm audit
```
