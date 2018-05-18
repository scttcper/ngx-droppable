<div align="center">
  <h1>ngx-droppable</h1>
  <br>
  <a href="https://www.npmjs.com/package/@ctrl/ngx-droppable">
    <img src="https://img.shields.io/npm/v/@ctrl/ngx-droppable.svg" alt="npm">
  </a>
  <a href="https://travis-ci.org/TypeCtrl/ngx-droppable">
    <img src="https://img.shields.io/travis/TypeCtrl/ngx-droppable/master.svg" alt="travis">
  </a>
  <a href="https://codecov.io/github/typectrl/ngx-droppable">
    <img src="https://img.shields.io/codecov/c/github/typectrl/ngx-droppable.svg" alt="codecov">
  </a>
  <br>
  <br>
</div>

> Give file dropping super-powers to any element or component  

Demo: https://typectrl.github.io/ngx-droppable/

## Install
```sh
npm install @ctrl/ngx-droppable
```

## Use
Import and Add to module
```ts
import { DroppableModule } from '@ctrl/ngx-droppable';
```
Add droppable directive to element
```html
<div droppable (filesDropped)="handleFilesDropped($event)"></div>
```
## Inputs

| name                 | type    | default    | description                                        |
| -------------------- | ------- | ---------- | -------------------------------------------------- |
| isClickable          | boolean | true       | prompt for files when clicked                      |
| acceptsMultipleFiles | boolean | true       | allow multiple files dropped or selected           |
| appendStatusClasses  | boolean | true       | append CSS class when files are dragged on element |
| dragOverClass        | string  | 'dragover' | class added when files are hovered over element    |

## Ouput

| name         | type   | description                                                                                               |
| ------------ | ------ | --------------------------------------------------------------------------------------------------------- |
| filesDropped | File[] | An array of the [files blobs](https://developer.mozilla.org/en-US/docs/Web/API/File) that have been added |

## License
MIT

---

> GitHub [@scttcper](https://github.com/scttcper) &nbsp;&middot;&nbsp;
> Twitter [@scttcper](https://twitter.com/scttcper)
