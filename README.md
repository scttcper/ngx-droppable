# ngx-droppable [![npm](https://badgen.net/npm/v/@ctrl/ngx-droppable)](https://www.npmjs.com/package/@ctrl/ngx-droppable) [![CircleCI](https://badgen.net/github/status/scttcper/ngx-droppable)](https://circleci.com/gh/scttcper/ngx-droppable) [![coverage](https://badgen.net/codecov/c/github/scttcper/ngx-droppable)](https://codecov.io/gh/scttcper/ngx-droppable)

> Give file dropping super-powers to any element or component

Based on [droppable.js](https://github.com/lifenautjoe/droppable)

Demo: https://ngx-droppable.vercel.app

## Dependencies

Latest version available for each version of Angular

| @ctrl/ngx-droppable | Angular |
| ------------------- | ------- |
| current             | >= 10.x |

## Install

```sh
npm install @ctrl/ngx-droppable
```

## Use

Import and Add to module

```ts
import { DroppableModule } from "@ctrl/ngx-droppable";
```

Add droppable directive to element

```html
<div droppable (filesDropped)="handleFilesDropped($event)"></div>
```

## [Inputs]

| name                 | type              | default      | description                                                                                                        |
| -------------------- | ----------------- | ------------ | ------------------------------------------------------------------------------------------------------------------ |
| isClickable          | `boolean`         | `true`       | prompt for files when clicked                                                                                      |
| acceptsMultipleFiles | `boolean`         | `true`       | allow multiple files dropped or selected                                                                           |
| appendStatusClasses  | `boolean`         | `true`       | append CSS class when files are dragged on element                                                                 |
| dragOverClass        | `string`          | `'dragover'` | class added when files are hovered over element                                                                    |
| accept               | `string \| false` | `false`      | limit accepted file types via MIME [see mdn](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file) |

## (Ouput)

| name         | type     | description                                                                                               |
| ------------ | -------- | --------------------------------------------------------------------------------------------------------- |
| filesDropped | `File[]` | An array of the [files blobs](https://developer.mozilla.org/en-US/docs/Web/API/File) that have been added |

## License

MIT

---

> GitHub [@scttcper](https://github.com/scttcper) &nbsp;&middot;&nbsp;
> Twitter [@scttcper](https://twitter.com/scttcper)
