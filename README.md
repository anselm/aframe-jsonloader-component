## aframe-jsonloader-component

[![Version](http://img.shields.io/npm/v/aframe-jsonloader-component.svg?style=flat-square)](https://npmjs.org/package/aframe-jsonloader-component)
[![License](http://img.shields.io/npm/l/aframe-jsonloader-component.svg?style=flat-square)](https://npmjs.org/package/aframe-jsonloader-component)

Initializes aframe components using json

For [A-Frame](https://aframe.io).

### API

| Property | Description  | Default Value |
| -------- | ------------ | ------------- |
| url      | json to load | 0             |

### Installation

#### Browser

Install and use by directly including the [browser files](dist):

```html
<head>
  <title>My A-Frame Scene</title>
  <script src="https://aframe.io/releases/0.7.1/aframe.min.js"></script>
  <script src="https://unpkg.com/aframe-jsonloader-component/dist/aframe-jsonloader-component.min.js"></script>
</head>

<body>
  <a-scene>
    <a-entity jsonloader="url:myurl.json"></a-entity>
  </a-scene>
</body>
```

#### Json format example

```
[

{ "id":"backdrop", "environment":"preset:forest" },

{ "id":"tree", "scale":"5 5 5", "position":"15 10 -15", "obj-model":"obj: #tree-obj; mtl: #tree-mtl" },

{ "id":"floor", "geometry": { "primitive": "box", "height": 0.1, "width": 12, "depth":18 }, "material": { "color": "#CBF" } },

{ "id":"wall1", "position": "-6 6 0", "geometry": { "primitive": "box", "height": 12, "width": 0.1, "depth":18 }, "material": { "color": "#CBF" } },

{ "id":"chimney", "position": "5 6 5", "geometry": { "primitive": "box", "height": 12, "width": 2, "depth":8 }, "material": { "color": "#CBF" } },

{ "id":"basement", "position": "-4.5 6 7.5", "geometry": { "primitive": "box", "height": 12, "width": 3, "depth":3 }, "material": { "color": "#CBF" } },

{ "id":"wall2", "position": "6 6 0", "geometry": { "primitive": "box", "height": 12, "width": 0.1, "depth":18 }, "material": { "color": "#CBF" } },

{ "id":"wall1", "position": "-6 6 0", "geometry": { "primitive": "box", "height": 12, "width": 0.1, "depth":18 }, "material": { "color": "#CBF" } },

{ "id":"wall1", "position": "-6 6 0", "geometry": { "primitive": "box", "height": 12, "width": 0.1, "depth":18 }, "material": { "color": "#CBF" } },

{ "id":"back wall1", "position": "0 6 -9", "geometry": { "primitive": "box", "height": 12, "width": 12, "depth":0.1 }, "material": { "color": "#CBF" } },

{ "id":"front wall1", "position": "0 6 9", "geometry": { "primitive": "box", "height": 12, "width": 12, "depth":0.1 }, "material": { "color": "#CBF" } },

{ "id":"kitchen", "children":[ "#floor", "#wall1", "#wall2", "#wall3", "#wall4" ] },

{ "id":"end placeholder so i don't have to remove the comma due to the json parser being so picky" }

]
```

#### npm

Install via npm:

```bash
npm install aframe-jsonloader-component
```

Then require and use.

```js
require('aframe');
require('aframe-jsonloader-component');
```
