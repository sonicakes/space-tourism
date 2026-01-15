# Frontend Mentor - Space tourism website solution

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

Im using this project to practice React Router v7 section that I'm going through on Udemy. I am using React Router v7 in Framework mode. Also I created API where I've put my data for the pages (excluding Home which does not have much and is not provided in the OG data.json). The link to API is [here](https://github.com/sonicakes/space-api) - its made with express & node, simple GET requests to respective pages e.g. /api/destinations, /api/crew etc.

Another thing I'm practising is [React Framer Motion](https://framermotionexamples.com/). Using this to animate tab transitions, menu nav transitions and loading of comps via Animate Presence. 

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

Note about the design VS dev version for this project: this is the 1st of FE Mentor that came with free Figma file ('FREE +'' tier) & as such made the dev process much smoother. I could copy of the typography presets & colors from Design System files, and ofc, more precise spacing/font sizing is a bonus. Plus, this design came with mobile, tablet & desktop designs which is a change from a more common pair of Mob/Desktop (in my experience, anyway).

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- [React](https://reactjs.org/) - JS library
- [React Router v7 in Framework Mode](https://reactrouter.com/) - React Router docs
- [Tailwind v4](https://tailwindcss.com/) - For styles
- [Vite](https://vite.dev/) - FE Build Tool
- [Framer Motion](https://framermotionexamples.com/) - for animations


### Deviations from Design/Expansions/Additions

1. Added a very soft drop shadow for Explore btn since I felt on very dark bg plain white doesnt have much depth. It's barely perceptable yet slightly 3d.
2. Added a tiny scale up on the active dot in Crew tabs via framer motion, since it fits the effect of 'scale & glow' I was going for. 
```js
          <motion.div
            animate={{
              scale: activeTab === tab.index ? 1.2 : 1,
              backgroundColor:
                activeTab === tab.index
                  ? "#ffffff"
                  : "rgba(255, 255, 255, 0.17)",
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-3.75 h-3.75 rounded-full cursor-pointer"
            onClick={() => onClickHandle(tab.index)}
          />
```

### What I learned

1. One of the challenges I've encountered is swapping bg image based on the route - in design each page has a diff bg (Homepage has pic of the Earth, 'destination' has stars etc.) I would be easily done with route index pages, but in design the bg is also part of Nav, so it covers the whole page, not just the <main> part.

This is what I devised to overcome this:

Mapping backgrounds to their paths (imported earlier as respective consts):

```js

const BACKGROUNDS: { [key: string]: ImageSet } = {
  "/": {
    mobile: bgHomeMobile,
    tablet: bgHomeTablet,
    desktop: bgHomeDesktop,
  },
  "/destination": {
    mobile: bgDestMobile,
    tablet: bgDestTablet,
    desktop: bgDestDesktop,
  },
   "/crew": {
    mobile: bgCrewMobile,
    tablet: bgCrewTablet,
    desktop: bgCrewDesktop,
  },
  "/technology": {
    mobile: bgTechnologyMobile,
    tablet: bgTechnologyTablet,
    desktop: bgTechnologyDesktop,
  },
};
```

Later, using React hook useLocation():

```js
const location = useLocation();
```

Consequently, creating var that uses bg map with path name as value:

```js
const activeBg = BACKGROUNDS[location.pathname] || BACKGROUNDS["/"];
```

And providing dynamic img src:

```html
<img
  src="{activeBg.mobile}"
  alt="Background"
  className="w-full h-full object-cover"
/>
```

2. Now that we mentioned the images, I'm using src set for serving diff images for mobile, tablet & desktop. Not something I'm proud of, but mostly just notable since I mostly use same src for all sizes in my other projects.

```html
<picture className="absolute z-10 w-full h-full">
  <source media="(min-width: 1024px)" srcset="{activeBg.desktop}" />
  <source media="(min-width: 768px)" srcset="{activeBg.tablet}" />
  <img
    src="{activeBg.mobile}"
    alt="Background"
    className="w-full h-full object-cover"
  />
</picture>
```
3. Had some time to find out how to replace the default favicon, but could not see location. AI suggested to overwrite is in Links as below:

```js
export const links: Route.LinksFunction = () => [
  { rel: "icon", href: "/favicon-custom.png", type: "image/x-icon" },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Bellefair&display=swap",
  },
];
```
It's also the spot where I replaced default font with required ones.

### Continued development & current roadblocks/challenges

1. The 'divider' line in desktop design (Figma file) on the Nav menu is vertically aligned with the content that is within container restraints (So, you want to go to space). The Menu itself is not within container (it spans wider than container content on desktop sizes).

I've tried absolute positioning relative to the links blurry righ-hand side, but then realized its actually in line with content on Homepage & with Breadcrumb on Destination (main layout) pages. So the refined solution is putting it inside the Nav row & offsetting slightly, replicating what design does towards the Right-hand side. However, this still does not match the OG design and will need more playing with to get to what design wants to achieve. Current solution does not look terrible but will be interesting to find out how to achieve the design requirement (or if possible at all?)

2. Framer Motion nasties
Initially wanted to implement the router-based animation,wrapping <main> in <motion.main> and using path.location from useLocation hook as key. Somehow it messes up my bg image & height screen, adding a scroll as well (since it requires/suggests h-screen class - but i dont need  it since i calc my height maunally to avoid that kind of scroll). Soo after a bit of kefuffle I've settled on motion divs for each comp as a there are not that many and Destination tabs content already slides gracefuly into view.

3. Had an idea for future animation on load/stagger for CTA: since it has the 'aura/ring' effect on hover, it might be cool to do a circular motion (like a loader but only 1 ring cycle) on animate presence. IDK if thats achievable but that is how I envisage this appearing on the screen.


### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
