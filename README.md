# Angular Droppable
> Give file dropping super-powers to any element or component

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
| acceptsMultipleFiles | boolean | true       | multiple files drop                                |
| appendStatusClasses  | boolean | true       | append CSS class when files are dragged on element |
| dragOverClass        | string  | 'dragover' | class added when files are hovered over element    |

### Ouput

__(filesDropped)__  
Emits a `File[]` when any file or files are added


