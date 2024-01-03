# Entradio presentation web template

## Getting Started

### Installation

```bash
$ nvm use
$ npm install
```

### Setup envs

Before running the app in prod, check .env.template and set all variables in the file.

For running the app in development mode, clone file `.env.template` to `.env`.

### Local development

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:8081](http://localhost:8081) with your browser to see the result.

## Template customization

### Customize fonts

- read [nextjs local font docs](https://nextjs.org/docs/app/building-your-application/optimizing/fonts#local-fonts)
- download fonts from https://fonts.google.com/; prefer [variable fonts](https://fonts.google.com/variablefonts)
- save fonts in [[...segments]] folder like
  - italic-variable-font.ttf
  - regular-mono-one-font.ttf
  - regular-variable-font.ttf

### Customize theme colors

- find `theme.config.json` file. Edit value on `colors.primary` and on `colors.primaryDark` paths.
