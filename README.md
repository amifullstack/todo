**React-Redux** From Scratch forget about `create-react-app` As of now to learn under the hood

Step 1: $`npm inint` . . . blablabla

Step 2: $`npm i -S react react-dom webpack webpack-dev-server babel-core babel-loader babel-preset-env babel-preset-react html-loader html-webpack-plugin prop-types express`

> At this moment we have installed what is required for hacking into **React**.

**Project Structure** As of now

    todo
    |___client
    |    |___index.html
    |___Components
    |     |___app.js
    |___dist
    |___server.js

Cool.

Hope you have installed `nodemon` if not do it.

Check out `package.json` file I have injected `nodemon` in scripts to run server.

Code is in `server.js` file the express code.

Let's run our server and see in action $`npm run server`.

Head over to `localhost:5000` or `localhost:5000/` doesn't matter.

    You should see `This is not react app yet`.

Hurry you just successfully run the node server the express.

Don't worry about the message `This is not react app yet`

We will fix that soon.

Before jumping into Let's configure eslint - aribnb for a moment.

$`npm i -S eslint eslint-config-airbnb-base eslint-plugin-import`

Create file `.eslintrc.js` at root of the project dir and past bellow config in it

```.js
module.exports = {
    "extends": "airbnb-base"
}
```
Save Close file

In VS Code `ctrl + x` serach ESLint install it - Reload it *Restart it.



Kind of working.. Check out the Part2 branch for good config.
