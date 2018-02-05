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

Part 1 is Done.

Click here for Next or change branch to Part2

Part2:

We made lot a changes in the project.

1. Project structure

        Root
        |
        |___public
        |       |__js
        |           |__build.js
        |
        |___src
        |     |___Components
        |     |      |___TestComponent
        |     |                     |___TestComponent.js and css
        |     |___index.js
        |
        |___views
        |       |___index.html

2. webpack.config.js

3. Our first ever React component and learned little bit about props.

    In the next part we will configure wepack hot reloading.

Part 3:
1. $`npm i -S webpack-dev-server react-hot-loader`
2. Add react-hot-loader to `.babelrc` like below

        {
            "presets": ["es2017", "react"],
            "plugins": ["react-hot-loader/babel"]
        }
3. Let's make that for webpack.config.js as well, take a look at that file.
4. Change build.js file path in `views/index.html` because we are using react-hot-loader and that running on port 8080.

        like this
        http://localhost:8080/js/build.js

5. Enable hot loading in main file that's `src/index.js`
6. Create script to run `devServer` in package.json
        "server-w": "webpack-dev-server"
        Next run webpack-dev-server in different terminal
        npm run server-w
        Good to goo.
        Now buld.js is serverd from different server on port 8080/8081
        check file if curious http://localhost:8080/js/build.js
        
7. 

        
