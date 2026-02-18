# Reglazing Revival Website

Static marketing website for an epoxy tile/tub refinishing contractor.

## Publish as an HTML site with a working CMS

The site is static HTML/CSS/JS and can be hosted on any static host. To make `/admin/` CMS editing work, use **Netlify + Decap CMS + Netlify Identity/Git Gateway**.

### 1) Push this repo to GitHub

```bash
git remote add origin <your-github-repo-url>
git push -u origin work
```

### 2) Deploy on Netlify

1. In Netlify, choose **Add new project → Import from Git**.
2. Select your GitHub repository.
3. Build settings:
   - Build command: *(leave blank)*
   - Publish directory: `.`
4. Deploy the site.

### 3) Enable CMS auth backend (required)

In Netlify project settings:

1. Go to **Identity** and click **Enable Identity**.
2. Under **Registration**, set to invite-only (recommended).
3. Under **Services**, enable **Git Gateway**.
4. Invite your editor account from **Identity → Invite users**.

### 4) Set CMS branch target

In `admin/config.yml`, set:

```yml
backend:
  name: git-gateway
  branch: work
```

Use your real production branch name (for example `main`) when you are ready.

### 5) Use the CMS

- Website: `https://<your-site>.netlify.app/`
- CMS login: `https://<your-site>.netlify.app/admin/`

After login, content edits commit directly to your repo and redeploy automatically.

## Local preview

```bash
python -m http.server 4173
```

Open `http://localhost:4173`.

## Files that editors manage in CMS

- `content/site.json`
- `content/gallery.json`

These include SEO fields and script injection fields for `<head>` and `<body>`.
