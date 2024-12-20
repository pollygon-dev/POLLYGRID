# POLLYGRID

This is POLLYGRID, a customizable HTML website template inspired by my own website's About Section. Its design is loosely inspired by NEEDY STREAMER OVERLOAD and webcore. 
It features draggable grids made possible by the Muuri Library!

## What's Inside?

★ Drag-and-drop grid layout with Muuri.js
★ Looks great on everything from phones to desktop
★ Easy color customization with CSS variables
★ Window-style components inspired by webcore
★ Flexible grid sizes for all your content needs
★ Clean, modern design with nice shadow effects
★ Helpful tooltips and modal windows

## Getting Started

It's super easy to get started! Here's what you need to do:

1. First, grab these libraries:
```html
<!-- We need these for all the cool grid functionality -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/web-animations/2.3.2/web-animations.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/muuri/0.9.5/muuri.min.js"></script>
```

2. Copy these files to your project:
- `index.html`
- `style.css`
- `script.js`
- `modal.js`

3. Want to make it your own? Just customize the colors in `style.css`:
```css
:root {
    --color-background: #f6f6fc;    /* Main background */
    --color-pattern: #fae9e9;       /* Pattern color */
    --color-container: #e1ecf8;     /* Container background */
    --color-header: #fce0ee;        /* Header background */
    --color-border: #805980;        /* Borders */
    --color-shadow: rgba(190, 123, 190, 0.3);  /* Shadow color */
    --color-text: #333;             /* Text color */
}
```

## Grid Sizes Made Simple

Mix and match these size classes to build your layout:
- `size-full` (spans the whole width)
- `size-half` (takes up half)
- `size-unit` (20% width - great for small widgets)
- `size-two-units` (40% width)
- `size-three-units` (60% width)
- `size-four-units` (80% width)
- `size-square` (perfect square at 40% × 40%)

## Example Components

### Grid Items
Here's a basic grid item you can copy and customize:
```html
<div class="grid-item size-half">
    <div class="grid-item-header">
        <div class="header-title">Title</div>
        <div class="window-controls">
            <div class="window-button minimize">-</div>
            <div class="window-button maximize">□</div>
            <div class="window-button close">×</div>
        </div>
    </div>
    <div class="grid-item-content">
        <div class="content-inner">
            Your awesome content goes here!
        </div>
    </div>
</div>
```

### Tooltips
Need to add some helpful hints? Try this:
```html
<div class="tooltip">
    Hover over me!
    <span class="tooltiptext">Your helpful message here</span>
</div>
```

### Modals
Want to add some pop-ups? Here's how:
```html
<!-- Add this button where you want to trigger the modal -->
<button class="modal-button" data-modal="myModal">Click Me!</button>

<!-- Add this modal at the end of your body tag -->
<div id="myModal" class="modal-overlay">
    <div class="modal-container">
        <div class="modal-header">
            <div class="modal-title">Hello there!</div>
            <div class="window-controls">
                <div class="window-button close">×</div>
            </div>
        </div>
        <div class="modal-content">
            Your modal content here
        </div>
    </div>
</div>
```

## Browser Support

POLLYGRID works great on:
- Chrome
- Firefox
- Safari
- Edge

Just make sure you're using the latest version of your favorite browser!

## Credits & Thanks

Big thanks to these amazing resources that helped make POLLYGRID possible:
- [Muuri](https://muuri.dev/) for the incredible grid functionality
- Web Animations API for making everything smooth
- "Basiic" font by [cinni.net](https://cinni.net/font)
- The background pattern from [CSS Backgrounds by Magic Pattern](https://www.magicpattern.design/tools/css-backgrounds)

## Feedback & Questions

Thanks for checking out POLLYGRID! Did you run into any problems? Just wanted to say hi? I'd love to hear from you! Drop me a line at pollygondev@gmail.com or comment on the itch page!

## License

This template is released under CC0 1.0 Universal (CC0 1.0), which means you can do whatever you want with it! Use it in your personal projects, commercial work, modify it, share it - no attribution needed!

(Just remember that Muuri has its own MIT license that needs to be respected when you use it.)
