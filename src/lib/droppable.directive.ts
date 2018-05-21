import { DOCUMENT } from '@angular/common';
import {
  AfterContentInit,
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Inject,
  Input,
  OnChanges,
  OnDestroy,
  Output,
} from '@angular/core';

@Directive({ selector: '[droppable]', exportAs: 'droppable' })
export class DroppableDirective
  implements OnChanges, OnDestroy, AfterContentInit {
  /** prompt for files when clicked */
  @Input() isClickable = true;
  /** allow multiple files dropped or selected */
  @Input() acceptsMultipleFiles = true;
  /** append CSS class when files are dragged on element */
  @Input() appendStatusClasses = true;
  @Input() dragOverClass = 'dragover';
  @Output() filesDropped = new EventEmitter<File[]>();
  /** Accessibility **/
  @HostBinding('attr.tabIndex') tabIndex = 0;
  /** Accessibility **/
  @HostBinding('attr.role') role = 'button';
  private virtualInputElement: HTMLInputElement;

  @HostListener('dragover', ['$event'])
  handleDragover(e: Event) {
    e.preventDefault();
    e.stopPropagation();
    if (this.appendStatusClasses) {
      this.element.nativeElement.classList.add(this.dragOverClass);
    }
  }

  @HostListener('dragleave', ['$event'])
  handleDragleave(e: Event) {
    e.preventDefault();
    e.stopPropagation();
    if (this.appendStatusClasses) {
      this.element.nativeElement.classList.remove(this.dragOverClass);
    }
  }

  @HostListener('drop', ['$event'])
  handleDrop(e: Event) {
    e.preventDefault();
    e.stopPropagation();
    if (this.appendStatusClasses) {
      this.element.nativeElement.classList.remove(this.dragOverClass);
    }
    this.onDroppableElementChange(e);
  }

  @HostListener('click', ['$event'])
  handleClick(e: Event) {
    if (this.isClickable) {
      this.promptForFiles();
    }
  }

  @HostListener('keydown.enter', ['$event'])
  handleEnter(e: Event) {
    this.promptForFiles();
    this.element.nativeElement.blur();
  }

  constructor(
    @Inject(DOCUMENT) protected _document: any,
    private element: ElementRef,
  ) {}

  ngOnChanges() {
    if (this.virtualInputElement) {
      this.setAcceptsMultipleFiles();
    }
  }

  ngAfterContentInit() {
    this.virtualInputElement = this.makeVirtualInputElement();
    this.virtualInputElement.addEventListener(
      'change',
      this.onVirtualInputElementChange.bind(this),
    );
    this.setAcceptsMultipleFiles();
  }

  setAcceptsMultipleFiles() {
    this.virtualInputElement.setAttribute(
      'multiple',
      this.acceptsMultipleFiles.toString(),
    );
    if (!this.acceptsMultipleFiles) {
      this.virtualInputElement.removeAttribute('multiple');
    }
  }

  ngOnDestroy() {
    // destroy created input
    if (this.virtualInputElement) {
      this.virtualInputElement.removeEventListener(
        'change',
        this.onVirtualInputElementChange.bind(this),
      );
    }
  }

  makeVirtualInputElement() {
    const input = this._document.createElement('input');
    input.setAttribute('type', 'file');
    input.style.display = 'none';
    return input;
  }

  onVirtualInputElementChange(e: Event) {
    this.onDroppableElementChange(e);
    this.virtualInputElement.value = '';
  }

  onDroppableElementChange(event: { [key: string]: any }) {
    let files;
    if (event['dataTransfer']) {
      files = event['dataTransfer'].files;
    } else if (event['target']) {
      files = event['target'].files;
    } else {
      throw Error('Fired event contains no files');
    }

    // Files is FileList, we convert to array
    const filesArray: File[] = Array.from(files);
    this.filesDropped.emit(filesArray);
  }

  promptForFiles() {
    this.virtualInputElement.click();
  }
}
