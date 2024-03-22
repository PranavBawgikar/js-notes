## Starting from the "start"
A web page is a single document which can contain text, images, hypertext, or any other elements. We create web pages using a markup language such as HyperText Markup Language – more commonly known as HTML.
HyperText is any web document which contains hyperlinks. 
<br/><br/>
## Static Webpages
Any static page should have the following characteristics:
1. The page should be already present even before a user requests it. A static page must be already physically present and hydrated (i.e with content) by the time a user makes a request for it. If it is not present, then it is not static.
2. The page generally maintains the same content every time the user requests it. If hitting the same URL returns different content, then that page is not static at all. This is not to say static pages cannot be modified. But the only way to change a static page for the creator to manually edit the content (like an HTML document).
<br/><br/>
## HTML meta tag
The meta tag defines metadata about an HTML document. Meta data is information about information. They are always present in the head section. Metadata will not be displayed on the page, but it is machine parsable.
Meta Tags in HTML can be used for SEO Optimization.

_Different attributes of Meta tag_:
1. `charset`: Defines the character encoding for the document.
2. `name`: Specifies a name for the metadata (author, description, generator, keywords, viewport).
3. `content`: Defines value associated with name attribute.
4. `http-equiv`: Provides an HTTP header for the information/content attribute.

_Important Meta Tags for SEO_:
1. Meta Desc
2. Meta Keywords (Deprecated)
3. Meta Robots
4. Meta Refresh

_Example_:
```html
<html>
  <head>
    <meta http-equiv="content-language" content="en-us">
    <meta http-equiv="content-type" content="text/HTML" charset="utf-8">
    <meta name="description" content="xyz">
    <meta name="keyword" content="how to play genshin, genshin tutorial">
    <meta name="author" content="Pranav">
    <meta name="copyright" content="copyright 2024">
    <meta name="robot" content="noindex, nofollow">
    <title>Genshin Impact</title>
  </head>
</html>
```
## HTML Lists
1. Definition List
```html
<dl>
  <dt>Definition Title</dt>
  <dd>Definition Description</dd>
</dl>
```
## HTML pre tag
Here, pre stands for preformatted text.
```html
<pre>
  Diluc   Gaming
      Nahida
</pre>
```
## Frames in HTML
`Note: HTML5 does not support frames.`

_Example_:
```html
<html>
  <head>
    <title></title>
  </head>
  <frameset rows="30%, 30%, 40%"> <!-- Divides the screen into the following partitions -->
    <frame name="fOne">
    <frame name="fTwo">
    <frame name="fThree">
  </frameset>
  <noframes> <!-- Will only be executed when the browser does not supoort frames -->
    <body>Your browser does not support frames.</body>
  </noframes>
</html>
```

If you want to divide the last row into two columns then:
```html
<html>
  <head>
    <title></title>
  </head>
  <frameset rows="30%, 30%, 40%" scrolling="" noresize> <!-- Divides the screen into the following partitions -->
    <frame name="fOne">
    <frame name="fTwo">
    <frameset cols="50%, 50%">
      <frame name="left" src="">
      <frame name="right" src="">
    </frameset>
  </frameset>
  <noframes> <!-- Will only be executed when the browser does not supoort frames -->
    <body>Your browser does not support frames.</body>
  </noframes>
</html>
```
