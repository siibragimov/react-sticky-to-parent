# React compatible sticky block component

Makes block sticky to it's parent block. To see how it works, please, see the demo.

<img src="https://raw.github.com/siibragimov/react-sticky-to-parent/main/static/bundle-size.png" title="Bundle size" width="450">

![Demo](https://raw.github.com/siibragimov/react-sticky-to-parent/main/static/demo.webp)

## Installation and setup

### 1. Install component:
If you want to install package from __npmjs registry__(recommended) use:
```shell
npm i react-sticky-to-parent
```

```shell
yarn add react-sticky-to-parent
```

```shell
pnpm add react-sticky-to-parent
```

If you want to install package from __GitHub packages__ use: 

```shell
npm install @siibragimov/react-sticky-to-parent
```
**Note**: Don't forget to configure registry for installing packages from GitHub. Use __.npmrc__ file or use command:
```shell
npm config set registry https://npm.pkg.github.com/
```

### 2. Import CSS.
For React:
```javascript
  // in entry point (main.tsx)
  import '../node_modules/react-sticky-to-parent/dist/react-sticky-to-parent.css';
```
**Note**: If you have problems with import, check the file path and especially the prefix.


### 3. Define styles for block(Sidebar) container. See the [`App.tsx`](/src/App.tsx).

**Note**: the `.container` should have full height of the column, component sticks to it and moves _"inside"_ it.


### 4. Import component in your code:
```javascript
import { ReactStickyToParent } from 'react-sticky-to-parent'
```


### 5. Wrap content you want to be sticky.
Define `ref` for the parent container and pass it to `react-sticky-to-parent` component props.

```javascript
  const container = useRef<HTMLElement>(null);
```

Example:
```javascript
<aside ref={container} className="container">
  <ReactStickyToParent parent={container}>
    <div className="sticky">
      <!-- YOUR CONTENT -->
    </div>
  </ReactStickyToParent>
</aside>
```

## Contributing

To run in development mode 
```shell
npm run dev
```

Use for build component
```shell
npm run build
```
and follow the instruction in console to open the test page.

To generate types you can use:
```shell
npm run types
```
