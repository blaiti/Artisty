# Artisty

![version](https://img.shields.io/badge/version-1.0.0-blue) ![licence](https://img.shields.io/badge/licence-MIT-blue)

Artisty is a mobile app that allows an artist to show off all of his artwork in a gallery.

![Artisty Wallpaper](https://user-images.githubusercontent.com/32510139/186997167-6cdf12b9-c1c5-4b25-93e2-cb76e41b264c.jpg)


## Table of Contents

- [Screenshots](#screenshots)
- [Tech Stack](#tech-stack)
- [Quick Start](#quick-start)
- [Run Locally](#run-locally)
- [Deployment](#deployment)
- [File Structure](#file-structure)
- [Author](#author)
- [License](#license)

## Screenshots

## Tech Stack

**Frontend:** React Native

**Environment:** Android, iOS

## Quick start

Clone the repo

```bash
  git clone https://github.com/blaiti/Artisty
```

Install Artisty with npm

```bash
  cd Artisty
  npm install
```

## Run Locally

To run locally on Android, run the following command

```bash
  npx react-native run-android
```

To run locally on iOS, run the following command

```bash
  npx react-native run-ios
```

## Deployment

To generate .apk file run

```bash
  cd android
  ./gradlew assembleRelease
```

To generate .aab file run

```bash
  cd android
  ./gradlew bundleRelease
```

## File Structure

Within the download you'll find the following directories and files:

```bash
Artisty
.
├── App.js
├── index.js
├── app.json
├── package.json
├── package_lock.json
├── babel.config.js
├── metro.config.js
├── android
├── ios
└── src
    ├── application
    │   ├── context
    │   │   ├── data-context.js
    │   │   └── data-provider.js
    │   ├── helpers
    │   │   ├── index.js
    │   │   └── storage-helper.js
    │   ├── utils
    │   │   ├── filter.js
    │   │   ├── search.js
    │   │   └── sort.js
    │   └── index.js
    ├── infrastructure
    │   └── data
    │       ├── criteria.js
    │       ├── index.js
    │       └── picture.js
    └── presentation
        ├── assets
        │   ├── fonts
        │   │   ├── Gilroy-Regular.ttf
        │   │   └── Gilroy-SemiBold.ttf
        │   └── images
        │       ├── logo.png
        │       └── white-logo.png
        ├── components
        │   ├── Button
        │   │   └── index.js
        │   ├── Cards
        │   │   └── PictureCard
        │   │       └── index.js
        │   ├── Headers
        │   │   └── ImageHeader
        │   │       └── index.js
        │   └── Modals
        │       ├── FilterModal
        │       │   └── index.js
        │       └── SortModal
        │           └── index.js
        ├── config
        │   └── routes.js
        ├── containers
        │   ├── Favorites
        │   │   └── index.js
        │   ├── Gallery
        │   │   └── index.js
        │   ├── ImageDetails
        │   │   └── index.js
        │   └── Splash
        │       └── index.js
        ├── navigations
        │   └── routes.js
        ├── style
        │   ├── colors.js
        │   ├── index.js
        │   └── typography.js
        └── index.js
```

## Author

- [@blaiti](https://github.com/blaiti)

## License

[MIT](https://github.com/blaiti/Waletty/blob/main/LICENSE)
