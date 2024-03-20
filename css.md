CSS or Cascading Style Sheets is a language used to describe the style of a document.

Syntax for writing CSS styling:

`Property : Value ;`

Property is the styling a particular behavior of an HTML element and its value can be predefined or user defined.
<br/><br/>
## Types of styling in CSS
In general, there are three types of styling in CSS:
1. Inline Styling:
This style has more priority than the other two, Internal and External.

*Example:*
```html
<h1 style="color: red">Hello World</h1>
```
2. Internal Styling: It is done using the <style> tag:
```html
...
  <style>
    h1 {
      color: red;
    }
  </style>
</head>
<body>
...
</body>
</html>
```
3. External Styling:
Writing CSS in a separate document & linking it with an HTML file.

*Example:*
```html
<link rel="stylesheet" href="styles.css">
```
Here, the `rel` attribute specifies with what type of "relationship" are we linking this file. In our case, its a stylesheet. 
<br/><br/>
## Selectors in CSS
There are various types of selectors in CSS to select HTML elements and style such as:
1. Type Selector: Here, the particular HTML elements is directly selected to style

   `h1 {
     font-size: 16px;
   }`
2. Universal Selector: Selects everything in the document.
   
    `* { margin-top: 0; }`
4. Class Selector: Selects elements based on their assigned classnames.

   `.box { }`
7. id Selector: Selects elements based on their assigned IDs.
  
   `#unique { }`
10. Pseudo Class Selector: `selector:pseudo-class`
<br/><br/>
## Text Property
1. `text-align`: This property is relative to its parent tag. If a < h1 > tag is inside a < div > tag then on applying text-align, the effect will only work inside this < div > tag. The possible values for text-align are:
   - left
   - right
   - center
   - start
   - end
3. `font-weight`: We can assign certain weight to our font to make it look more bolder using this property which ranges from 100 to 900.
<br/><br/>
## Display Property
There are two types of elements in HTML, `Block` which occupy 100% width of the screen like < div >, < h1 > and `Inline`, these elements occupy the space as per their requirement < button >, < input >, < span >, < a >
1. `display`: All possible values for display property:
   - inline
   - block: Block is the default display of div elements
   - inline-block: Inline-block is simiilar to inline but we can set margin and padding.
   - none: None is used to remove the element from the document flow.
<br/><br/>
## Element States
1. :hover
2. :visited
### CSS Units
1. Absolute Units: Pixels (px), pt, cm, mm
2. Relative Units: %, em, rem
    1. Percentage (%) - It is used to define a size as relative to an element's parent object.
    2. em - font size of the parent, in the case of typographical properties like font-size and font size of the element itself, in the case of other properties like width. (so, if the parent div has text with font-size 10px and if we give font-size as 2em for the child div, the child div's font-size will bcome 2x the size of parent div i.e., 20px)
    (but if we try to assign em value to width oof the child div in that case it will not check the size of parent div instead it will check the font-size of the child div itself, corelating with the above example, parent div > font-size: 10px, child div > font-size: 2em (10x2 = 20px), child div > width: 5em (5x20 = 100px))
    ```css
    #box1 {
      height: 100px;
      width: 100px;
      font-size: 10px;
    }

    #box2 {
      font-size: 2em;
      width: 5em;
      height: 100px;
    }
    ```
    3. rem (Root em) - relative to the root element, generally < html > tag
- There are two types of relative units:
  - Relative to font-size: em and rem
  - Relative to view-port: vh, vw, vmin, vmax
  ==viewport is nothing but the visible browser screen==
3. Percentage: These are mainly used for width(s). They are always relative to their parent (except on height, where things get weird)
### Box Model in CSS
On the web, everything is a box, the images, paragraphs, headings, everything and with everything being a box, this box model is applied to it.
![](https://www.lilengine.co/sites/default/files/inline-images/Screen%20Shot%202019-04-14%20at%2023.59.07.png)


1. Height
2. Width
3. Border
4. Padding: The extra space between the content and the border is padding. Paddings add space inside of an element.
padding-left
padding-right
padding-top
padding-bottom
Shorthand for padding: 1px 2px 3px 4px; (top | right | bottom | left - clockwise) for custom padding for each direction. If we specify only one value, every direction gets the same amout of padding.
5. Margin: They add space outside of an element.

==Margin > Border > Padding > Content==
<mark>Block-level elements, by default have a width of 100% or we can say that they cover the entire width of the viewport.
Images are an inline element</mark>

### Visibility Property
visibility: hidden;

When visibility is set to none, space for the element is reserved but for display set to none, no space is reserved or blocked for the element.
### Alpha Channel in RGBA
It decides the opacity of a color, it ranges from 0 to 1
`rgba(255, 0, 0, 0.5)`
### em & rem
1em means match the font size of the parent. The rem unit is short for Root Em. That means it's always relative to the "root" of our document. The root of an HTML page is always the html element.
### Position Property
This property sets how an element is positioned in a document.
position: static / relative / absolute / fixed
1. static - By default all the elements are static (the top, right, bottom, left and z-index properties have no effect)
2. relative - element is relative to itself. (the top, right, bottom, left and z-index properties will work)
3. absolute - positioned relative to its closest positioned/non-static ancestor.
4. fixed - relative to the browser.
### z-index
It decides the stack level of elements. Overlapping elements with a larger z-index cover those with a smaller one.
### background-size Property
background-size: cover / contain / auto
1. cover: It covers the whole container without leaving any empty space.



### Flexbox / Flexible Box Layout
It is a one-dimensional layout method for arranging items in rows or columns.
#### Flex Model
Any container whose display property is set as flex becomes a flex-container. This container can be a div, span, section or navbar.
Every individual item in a flex container is called as flex item.
Whenever we talk about flex box there are two directions, main axis / horizontal axis and cross axis / vertical axis it can always vice versa depending on the situation.
By default when we set `display: flex;` the horizontal line will be the main axis and vertical line will be the cross axis. If we set 
```css
display: flex;
flex-direction: column;
```
The axes will be reversed.
![](https://res.cloudinary.com/practicaldev/image/fetch/s---3gDSFf1--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/fsln7je4ax7ft3er28hh.png)
#### Flexbox Direction
It sets how flex items are placed in the flex container, along which axis and direction.
1. flex-direction: row (left to right) (default).
2. flex-direction: row-reverse (right to left).
3. flex-direction: column
4. flex-direction: column-reverse
![](https://www.syncfusion.com/blogs/wp-content/uploads/2023/03/Flex-direction.png)
#### Other Flex Properties
1. justify-content: aligns flex items along the main axis
   1. flex-start:
```css
.flex-box-demo {
  ...
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  ...
}
```
Arranges the content along the main axis in a row manner from left to right and the start of the flex that is from the left end.
   2. flex-end:
```css
.flex-box-demo {
  ...
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  ...
}
```
Arranges the content along the main axis in a row manner from left to right and the end of the flex that is from the right end. The direction will not be reversed i.e., the first element will still be first.
   3. center:
```css
.flex-box-demo {
  ...
  display: flex;
  flex-direction: center;
  ...
}
```
Arranges the content along the main axis in a row manner from left to right and the center of the flex.
   4. space-evenly:
```css
.flex-box-demo {
  ...
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  ...
}
```
Arranges the content along the main axis in a row manner from left to right with equal space around each element.
   4. space-between:
```css
.flex-box-demo {
  ...
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  ...
}
```
Arranges the content along the main axis in a row manner from left to right with all space between the flex items.
   4. space-around:
```css
.flex-box-demo {
  ...
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  ...
}
```
Arranges the content along the main axis in a row manner from left to right with equal space around each element important thing to remember is the space between two flex items will always be double of the space between the last flex item and the boundary of the flex container.
==Similarly, the column works==
2. align-self: alignment of individual flex item along the cross axis. This property has the highest priority among its sibling properties.
3. align-items: This property is applied on containers, if you want to align items along the cross axis we use align-items property.

Task: Center a div inside another div
Solution: Use flexbox
```css
.outerDiv {
  height: 400px;
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.innerDiv {
  height: 200px;
  width: 200px;
}
```
### Media Queries
https://caniuse.com/css-media-range-syntax
1. min-width: particular pixel or higher
2. max-width: 0px to a particular pixel

Predefined Screen Sizes:
```css
/* xs */
@media (min-width: 475px) {}
/* sm */
@media (min-width: 640px) {}
/* md */
@media (min-width: 768px) {}
/* lg */
@media (min-width: 1024px) {}
/* xl */
@media (min-width: 1280px) {}
/* 2xl */
@media (min-width: 1536px) {}
```

```css
@media (min-width: 200px) and (max-width: 300px) {
  div {
    background-color: red;
  }
}
/* When the screen size is between 200 - 300px */
/* Another way of writing the above query */
@media (200px < width < 300px) {
  div {
    background-color: red;
  }
}
```
```css
@media print {
  background: white;
  /* Setting the background color to white when the site is getting printed */
}
```
```css
@media screen and (min-width: 600px) {
  background-color: orangered;
  /* Adding the screen keyword basically means that this styling will work for the browser screen but not if somebody tries to print it */
}

/* Another way of writing the above query */
@media (width > 600px) {
  background-color: orangered;
}
```
### Transitions
Transitions enables you to define the transition between two states of a element.
1. transition-property: The property you want to transition (font-size, width, etc.)
2. transition-duration: 2s / 4ms...
3. transition-timing-function: ease-in / ease-out / linear...
4. transition-delay: 2s / 4ms...

Transition shorthand
property name | duration | timing-function | delay
transition: font-size 2s ease-in-out 0.2s
### CSS Transform
To apply 2D and 3D transformations to an element.
1. rotate
```css
transform: rotate(45deg);
```
### CSS Custom Properties
```css
@media (prefers-color-scheme: dark) {
  
}
```
### Some Gradients
```css
//OCEAN
.element {
  background: linear-gradient(
    to bottom right,
    #5b7fff, #33ccfc
  )
}

//NIGHT
.element {
  background: linear-gradient(
    to bottom right,
    #403f44, #1e1b32
  )
}

//SUNSET
.element {
  background: linear-gradient(
    to bottom right,
    #fdc639, #ff7c60
  )
}

//PEACH
.element {
  background: linear-gradient(
    to bottom right,
    #ff6868, #ff68de
  )
}
```
### Lesser Known CSS Properties
1. place-items: A shorthand for setting both align-items and justify-items
```css
.container {
  display: grid;
  place-items: center;
}
```
==96px = 1 inch==
- Creating circles using CSS, whenever the div element has the same height and width we can set it's border-radius to 50% to obtain a circle.
![Alt text](image-13.png)
### CSS Object Modelling
A browser uses a CSS parser to convert raw CSS into CSSOM (CSS Object Model)
> User Agent Stylesheets are the default styles that the browser automatically assigns to HTML elements. To remove these default styles, developers should start by -
```css
*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
}
```
To selectively round the edges of a div you can do:
```css
.div {
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}
```
