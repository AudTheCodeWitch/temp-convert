<h1 align="center">Welcome to Temp Convert 🌡</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="./LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
  <a href="./code_of_conduct.md" target="_blank">
    <img alt="Contributor Covenant" src="https://img.shields.io/badge/Contributor%20Covenant-2.0-4baaaa.svg" />
  </a>
  <a href="https://twitter.com/audthecodewitch" target="_blank">
    <img alt="Twitter: @AudTheCodeWitch" src="https://img.shields.io/twitter/follow/audthecodewitch.svg?style=social" />
  </a>
</p>

## 🔎 Overview
> Temp Convert is a simple SPA that converts temperatures from Fahrenheit to Celsius, and vice versa. It is built in
> React, and all interactions are handled on the client side.

### ✨ [Demo](https://affectionate-mcnulty-5e14aa.netlify.app)

### Features
**Temperature Conversion**

This is the core feature of Temp Convert. 

**Light/Dark Mode**



### Tools and Frameworks
**React via [Create React App](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app)**

A few reasons led to my decision to build this application in React:
* React's reusable component structure allows you to build complicated UIs while keeping the code DRY and organized.
* Because all logic is handled on the client side for this application, there is currently no need for a backend or 
  database. However, if I were to add a backend in the future, React integrates well with Ruby on Rails, my backend 
  framework of choice.
* Create React App is a simple way to build a single-page application that generates the basic file structure of your application.
  It also preconfigures necessary tools like webpack and Babel, saving the developer time during the initial setup.

**[Tailwind CSS](https://tailwindcss.com/)**

Tailwind CSS is a great CSS framework. I chose to use it for several reasons:
* It is conducive to mobile-first development with preconfigured breakpoints for various devices.
* When built for production, Tailwind purges unused CSS, keeping your files smaller.
* Tailwind has solid documentation, making it easy to learn and use.

**[The Noun Project](https://thenounproject.com/)**

All icons for this application were found on The Noun Project. Their extensive icon collection is free to use with
attribution. Alternatively, you can purchase icons individually or get unlimited access for a reasonable flat fee.

**[Colormind](http://colormind.io/)**

Colormind is a color scheme generator. It is a great starting point for choosing a color scheme because you can preview 
how the palette might be applied to an actual website.

## Try It Out

### Prerequisites
* [Node.js](https://nodejs.org/en/)
* [Yarn](https://yarnpkg.com/getting-started)
* If you don't already have a copy of Temp Convert's files on your machine, 
  clone the [GitHub repository](https://github.com/AudTheCodeWitch/temp-convert).

For the following terminal commands, be sure to `cd` into the application's root directory (`./temp-convert`).
### Install

```sh
yarn install
```

### Usage
To run the app locally, enter the following terminal command. This will open the app in your browser at `localhost:3000`.
```sh
yarn start
```

From here, you have a fully functioning application. Enter temperatures in either input (Fahrenheit or Celsius) and 
see the calculated conversion in the opposite input field.

To toggle Dark Mode, click the moon/sun in the upper-right-hand corner of the page.

### Deployment
To create a production build, enter the following command:
```sh
yarn build
```
**Deploy with Netlify**

I recommend using [Netlify](https://www.netlify.com/) to deploy your application because it is free and easy to set up continuous deployment if your
application is stored on GitHub, GitLab, or Bitbucket. 
1. From your team overview under "Sites," click "New site from Git."
2. Select your Git provider.
3. Locate your Temp Convert repository.
4. Review the auto-populated site settings. Be sure the build command is `yarn build`.
5. Click "Deploy site"

## 🤝 Contributing

Contributions, issues and feature requests are welcome.
[Check out the contributors' Code of Conduct](./code_of_conduct.md).

### 🔧 Open Issues

## Author

👤 **Audrea Cook**

* Website: [codewitch.dev](https://codewitch.dev)
* Twitter: [@audthecodewitch](https://twitter.com/audthecodewitch)
* Github: [@audthecodewitch](https://github.com/audthecodewitch)
* LinkedIn: [Audrea Cook](https://linkedin.com/in/AudreaCook)

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2021 [Audrea Cook](https://github.com/audthecodewitch).<br />
This project is [MIT](./LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
