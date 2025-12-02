# Deployment Guide for Engineering Portfolio

This Flutter web portfolio can be deployed to multiple platforms. Choose the deployment method that best fits your needs.

## Deployment Options

### 1. GitHub Pages (Recommended for Free Hosting)

This is the easiest and free option for hosting your portfolio.

#### Setup Instructions

1. **Enable GitHub Pages in your repository:**
   - Go to your repository Settings
   - Navigate to Pages in the left sidebar
   - Under Source, select **GitHub Actions** (not "Deploy from a branch")
   - Save the settings

2. **Push your code:**
   ```bash
   git add .
   git commit -m "Add deployment workflow"
   git push origin main
   ```

3. **Wait for deployment:**
   - GitHub Actions will automatically build and deploy your site
   - Check the progress in the **Actions** tab
   - Your site will be available at: `https://YOUR_USERNAME.github.io/engineering_portfolio/`

#### Custom Base Path

If your repository is named differently or you want a different base path, update the `--base-href` flag in `.github/workflows/deploy.yml`:

```yaml
run: flutter build web --release --base-href "/YOUR_PATH/"
```

### 2. Firebase Hosting

Firebase Hosting provides fast, secure hosting with a free tier.

#### Prerequisites

1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```

2. Login to Firebase:
   ```bash
   firebase login
   ```

3. Initialize Firebase (if not already done):
   ```bash
   firebase init hosting
   ```
   - Select your Firebase project
   - Public directory: `build/web`
   - Configure as single-page app: Yes
   - Set up automatic builds: No (we'll use GitHub Actions)

#### Setup GitHub Secrets

1. Go to your repository Settings > Secrets and variables > Actions
2. Add the following secrets:
   - `FIREBASE_SERVICE_ACCOUNT`: Your Firebase service account JSON (download from Firebase Console > Project Settings > Service Accounts)
   - `FIREBASE_PROJECT_ID`: Your Firebase project ID

#### Deploy

The workflow will automatically deploy on push to main branch, or you can deploy manually:

```bash
flutter build web --release
firebase deploy --only hosting
```

### 3. Google Cloud Run

Cloud Run provides serverless container hosting with automatic scaling.

#### Prerequisites

1. Create a Google Cloud Project
2. Enable Cloud Run API
3. Create a Service Account with Cloud Run Admin role

#### Setup GitHub Secrets

1. Go to your repository Settings > Secrets and variables > Actions
2. Add the following secrets:
   - `GCP_PROJECT_ID`: Your Google Cloud project ID
   - `GCP_SA_KEY`: Your service account JSON key

#### Deploy

The workflow will automatically build a Docker container and deploy to Cloud Run on push to main branch.

### 4. Netlify

Netlify provides continuous deployment with a generous free tier.

#### Setup Instructions

1. **Connect your repository to Netlify:**
   - Go to [Netlify](https://www.netlify.com)
   - Click "Add new site" > "Import an existing project"
   - Connect your GitHub repository

2. **Configure build settings:**
   - Build command: `flutter build web --release`
   - Publish directory: `build/web`
   - Base directory: (leave empty)

3. **Add environment variables (if needed):**
   - Go to Site settings > Build & deploy > Environment
   - Add any required environment variables

4. **Deploy:**
   - Netlify will automatically deploy on every push to your main branch

### 5. Vercel

Vercel provides excellent performance and easy deployment.

#### Setup Instructions

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Create vercel.json:**
   ```json
   {
     "buildCommand": "flutter build web --release",
     "outputDirectory": "build/web",
     "rewrites": [
       { "source": "/(.*)", "destination": "/index.html" }
     ]
   }
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

   Or connect your GitHub repository in the Vercel dashboard for automatic deployments.

## Manual Deployment

### Build Locally

```bash
# Get dependencies
flutter pub get

# Build for web
flutter build web --release

# The output will be in build/web/
```

### Test Locally

```bash
# Using Python
cd build/web
python3 -m http.server 8000

# Using Node.js
npx serve build/web

# Using Flutter
flutter run -d chrome
```

## Custom Domain

### GitHub Pages

1. Add a `CNAME` file in the `web/` directory with your domain name
2. Configure your DNS settings to point to GitHub Pages
3. In GitHub repository Settings > Pages, add your custom domain

### Firebase Hosting

1. In Firebase Console, go to Hosting > Add custom domain
2. Follow the DNS configuration instructions
3. Firebase will automatically provision SSL certificates

### Cloud Run

1. Map a custom domain in Cloud Run settings
2. Update your DNS records as instructed
3. SSL is automatically handled by Google Cloud

## Troubleshooting

### Build Fails

- **Flutter version mismatch**: Ensure you're using Flutter 3.24.0 or compatible version
- **Dependencies issues**: Run `flutter pub get` and `flutter pub upgrade`
- **Web renderer issues**: Try building with `flutter build web --release --web-renderer html`

### 404 Errors on Navigation

- Ensure your hosting provider is configured for single-page apps
- Add rewrite rules to serve `index.html` for all routes
- Check the base-href configuration matches your deployment path

### Assets Not Loading

- Verify all assets are included in `pubspec.yaml`
- Check that asset paths are correct in your code
- Ensure the base-href matches your deployment path

### Performance Issues

- Enable gzip compression on your hosting provider
- Consider using CDN for static assets
- Optimize images before including them in assets

## Environment-Specific Builds

You can create different build configurations for different environments:

```bash
# Development
flutter build web --release --dart-define=ENV=dev

# Production
flutter build web --release --dart-define=ENV=prod
```

Then access these in your code:
```dart
const env = String.fromEnvironment('ENV', defaultValue: 'dev');
```

## CI/CD Best Practices

1. **Always test builds locally** before pushing
2. **Use feature branches** and test deployments before merging to main
3. **Monitor deployment logs** in your hosting provider's dashboard
4. **Set up error tracking** (e.g., Sentry) for production deployments
5. **Use environment variables** for sensitive configuration

## Support

For issues specific to:
- **Flutter**: Check [Flutter documentation](https://flutter.dev/docs)
- **GitHub Actions**: Check [GitHub Actions documentation](https://docs.github.com/en/actions)
- **Firebase**: Check [Firebase documentation](https://firebase.google.com/docs)
- **Cloud Run**: Check [Cloud Run documentation](https://cloud.google.com/run/docs)

