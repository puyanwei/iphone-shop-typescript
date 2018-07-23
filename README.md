# Iphone Shop

A prototype of an online shop for selling iphones.

![screen shot 2018-07-23 at 11 05 23](https://user-images.githubusercontent.com/14803518/43082259-8c7b2196-8e8b-11e8-8d58-88e2ced04a68.png)

### Installation

```
git clone git@github.com:puyanwei/iphone-shop.git
cd nasa-gallery
npm install
npm start
```

I used ESLint following the air-bnb style guide to assure quality in my code.

`npm run lint`

### Tech Stack

-   ES6 Javascript
-   React.js
-   CSS SASS
-   HTML

I chose React because it is a great and popular library for frontend development. It is lightweight, has reusable components and a virtual DOM.
One way data binding stops HTML from being able to change its components.

React also has great support with good documentation, and is backed by the facebook developers. Another big reason I chose React was because I knew that it is already used within the company and its a good chance to show my skillset.

### Features

Note JSON has been edited to reflect realistic prices, the iPhone 256GB models upfront cost were priced at £275 originally!

-   Shows the prices of 6 different versions of iPhones
-   Colour buttons change the images of the iPhones
-   Capacity buttons change the price of the iPhones
-   Pulls data in from the JSON file, and outputs it to the relevant sections
-   Coded with scalability in mind, using components and file structure that would be easy to work with if this was to be expanded upon
-   Cross browser compatibility, checked for Chrome, Firefox and Internet Explorer 11 for desktop size as shown in the example image

### Process

I started out the process by sketching a (pretty terrible) iPhone and the layout of the page. I was focusing on the structure and thinking about how I would implement this using CSS Grid.

This also helped me think about which components I needed, and where they would go, as well as the data that I wanted to pull out from the JSON to use on my page.

![37765942_10155724140333123_4236828282219134976_n](https://user-images.githubusercontent.com/14803518/43081284-9c3922b0-8e89-11e8-8b3b-33864c9da86c.jpg)

Once that was done, I wrote down a rough plan that I could follow. Each step I would try and break down the problems into more manageable chunks, and if I still found it tough then I would see if I could break it down even further.

![37673658_10155724140193123_2243122523753414656_n](https://user-images.githubusercontent.com/14803518/43081283-9c1ba8a2-8e89-11e8-9e89-5289ee2a94e4.jpg)

I started building the basic structure using hard coded placeholders, such as one iPhone image and temporary placements of text of where components would go.

Once this was done it made it easier to work off, and I was able to add small features each time in an agile fashion.

One of the blockers I had was getting the default data onto the page after I had copied the JSON data I needed to the state. The render was happening before the JSON data was copied and so it did not exist.

### Future Improvements

-   Responsive page - Implementing my deign mobile first, and then working up to bigger screen sizes would be a must if this page was to go live. However, this was not asked in the brief so I wanted to follow it strictly.
-   Button Component - The buttons could have their own flexible component that I could reuse. Props such as background colour and text could be added to these components to make them scalable.
-   State Management - Redux could be added if there are more pages and assets to be added and the project grows.
