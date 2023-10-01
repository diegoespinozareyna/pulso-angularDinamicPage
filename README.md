# Installation

## VS Code
https://code.visualstudio.com

## Install NodeJS (LTS)

### Option 1: nodejs.org
https://nodejs.org/en

### Option 2: nvm (recommended)
https://github.com/coreybutler/nvm-windows

https://github.com/coreybutler/nvm-windows/releases/download/1.1.11/nvm-setup.exe

```
$ nvm v
$ nvm install 18.17.1
$ nvm list
$ nvm use 18.17.1
$ npm --version
```

## Install Angular CLI
```
$ npm install -g @angular/cli
$ ng v
```

## VS Code Extension
Angular Language Service

# Development
## Create Angular App
```
$ cd /efra/workspaces/pulso
$ ng new static-ng
```
? Would you like to add Angular routing? (y/N) y

? Which stylesheet format would you like to use? (Use arrow keys)

CSS
```
$ cd static-ng
$ code .
$ npm run start
```

## Update start script at package.json
```
$ ctrl + c
```
```
{
  "scripts": {
    "start": "ng serve -o"
```
```
$ npm run start
```

## Explain App Component

## Hello Angular
Remove all content at app.component.html and add
```
<h1>Hello Angular!</h1>
```

## Create components
```
$ ng g c home
$ ng g c catalog
$ ng g c blog
$ ng g c testimonials
$ ng g c about
```

## Create shared components
```
$ ng g c shared/header
$ ng g c shared/footer
$ ng g c shared/hero
$ ng g c shared/feature
$ ng g c shared/content
$ ng g c shared/not-found
```

## Add routes
Edit app-routing.module.ts to add the following routes:
```
{ path: '', pathMatch: 'full', component: HomeComponent, title: 'Home' },
{ path: 'home', component: HomeComponent, title: 'Home' },
{ path: 'catalog', component: CatalogComponent, title: 'Catalog' },
{ path: 'blog', component: BlogComponent, title: 'Blog' },
{ path: 'testimonials', component: TestimonialsComponent, title: 'Testimonials' },
{ path: 'about', component: AboutComponent, title: 'About' },
{ path: '**', pathMatch: 'full', component: NotFoundComponent, title: 'Not Found'}
```

## Edit app.component.html
```
<router-outlet></router-outlet>
```
Testing routes in the browser

## Install tailwindcss
```
$ npm install tailwindcss
$ npx tailwindcss init
```

## Edit tailwind.config.js
Edit content property
```
content: [
  "./src/**/*.{html,ts}",
],
```

## Update src/styles.css
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Update header template using https://tailblocks.cc
Add routerLink and edit section names:
```
<nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
  <a routerLink="/" class="mr-5 hover:text-gray-900">Home</a>
  <a routerLink="/catalog" class="mr-5 hover:text-gray-900">Catalog</a>
  <a routerLink="/blog" class="mr-5 hover:text-gray-900">Blog</a>
  <a routerLink="/testimonials" class="mr-5 hover:text-gray-900">Testimonials</a>
  <a routerLink="/about" class="mr-5 hover:text-gray-900">About</a>
</nav>
```

## Edit footer template using https://tailblocks.cc

## Edit app.component.html
```
<app-header></app-header>
<router-outlet></router-outlet>
<app-footer></app-footer>
```

## Edit templates using https://tailblocks.cc
- catalog
- blog
- testimonials
- about

## Edit home templates using https://tailblocks.cc
- hero
- content
- feature

## Edit home.component.html
```
<app-hero></app-hero>
<app-content></app-content>
<app-feature></app-feature>
```

## Prepare build
```
$ ng add @nguniversal/express-engine
$ npm run prerender
```

## Deploy to AWS Amplify (without git provider)

## Deploy to AWS Amplify (with git provider)
- Webhook

## Environments
```
$ ng generate environments
```


## Amplify
- Within App Settings, go to Rewrites and redirects, Click on "Open text editor" and copy-paste the following:
```
[
    {
        "source": "</^[^.]+$|\\.(?!(css|gif|ico|jpg|js|png|txt|svg|woff|ttf|map|json)$)([^.]+$)/>",
        "target": "/index.html",
        "status": "200",
        "condition": null
    }
]
```