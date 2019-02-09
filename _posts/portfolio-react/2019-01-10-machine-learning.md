---
layout: blog
image: learner-into-developer/main.jpg
title: Build your ReactJS portfolio - Machine Learning app
subtitle: 
permalink: build/portfolio/react/machine-learning/
date: 2019-01-12T16:03:13.657Z
category: article
tags: [reactjs, portfolio]
---

```javascript
.class{
  cursor: pointer;
}
```


<div>
  <h2>Preview of the project</h2>
  <p>In this tutorial, we will build a machine learning app.</p>
  <p>Our goal is to use a neural network library to predict if the text color should be white or black based on the background.</p>
  <p>We will let the user train the data, so if the user trains the data in a bad way, they won't see good results. This will add interactivity to the app, which will make the whole project more interesting.</p>
  <p>To begin with, inspect the final project in the link below.</p>
  <p>*Website link*</p>
  <p>So... let's begin building!</p>
</div>

## Create a React app and install needed libraries
Let's begin by creating a create-react-app and starting the server

```shell
    $ npx create-react-app machine-learning
```

Let's begin by creating a create-react-app and starting the server
After the app is installed, let's go in the folder and start the server

<div>
  <code>
    <div class="terminal">
        $ cd machine-learning <br>
        $ yarn start
    </div>
  </code>
  <p>Great, our app is running on <u>http://localhost:3000/</u></p>
  <hr>
  <p>Now, let's install some packages that we will need for the development of the project.</p>
  <p>We will need brainjs for neural network and react-color for the color palette.</p>
  <code>
    <div class="terminal">
        $ npm install brain.js <br>
        $ npm install react-color --save
    </div>
  </code>
  <p>Great, now it's time to actually start coding!</p>
</div>

<div>
  <h2>Let's train brain.js with data</h2>
  <p>For training, we would like to have two boxes with two random background colors and the text color should be black in one box and white in the other box.</p>
  <p>The user will then click on one of the boxes and we will store which box (as well as the box's information) they clicked in our state.</p>
  <p>But first, let's just output two boxes with black/white backgrounds with white/black text colors for a start.</p>
  <p>I've also added some styling to the classes.</p>
  <script src="https://gist.github.com/kb1995/47e890c13f8e4958a6065b1e7047b2c5.js"></script>
</div>
