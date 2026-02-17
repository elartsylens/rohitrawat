# Rohit Rawat Portfolio

Professional portfolio for Rohit Rawat, Quantitative Economist.

## Repository

[https://github.com/elartslens/Portfolio](https://github.com/elartslens/Portfolio)

## Live Site

[https://elartslens.github.io/Portfolio](https://elartslens.github.io/Portfolio)

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- Vite

## Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Deployment

This project is configured to deploy automatically to GitHub Pages using GitHub Actions.

1. **Push to Main**:
   Any push to the `main` branch triggers the deployment workflow defined in `.github/workflows/deploy.yml`.
   
   ```bash
   git add .
   git commit -m "Update site"
   git push origin main
   ```

2. **GitHub Settings**:
   Ensure the repository is configured to deploy via Actions:
   - Go to **Settings** > **Pages**
   - Under **Build and deployment** > **Source**, select **GitHub Actions**.
