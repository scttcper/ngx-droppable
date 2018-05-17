import { DOCUMENT } from '@angular/common';
import {
  Directive,
  HostBinding,
  OnInit,
  Input,
  Inject,
  OnChanges,
  HostListener,
  ElementRef,
  OnDestroy,
  AfterContentInit,
} from '@angular/core';

@Directive({ selector: '[droppable]' })
export class DroppableDirective
  implements OnInit, OnChanges, OnDestroy, AfterContentInit {
  /** prompt for files when clicked */
  @Input() isClickable = true;
  /** multiple files drop */
  @Input() acceptsMultipleFiles = true;
  /** append CSS class when files are dragged on element */
  @Input() appendStatusClasses = true;
  @Input() dragOverClass = 'dragover';
  /** Accessibility **/
  @HostBinding('attr.tabIndex') tabIndex = 0;
  /** Accessibility **/
  @HostBinding('attr.role') role = 'button';
  private virtualInputElement: HTMLInputElement;
  private latestDroppedFiles: File[];
  private onFilesDroppedEventListeners: FilesWereDroppedEventListener[] = [];

  @HostListener('dragover', ['$event'])
  handleDragover(e: Event) {
    e.preventDefault();
    e.stopPropagation();
    this.element.nativeElement.classList.add(this.dragOverClass);
  }

  @HostListener('dragleave', ['$event'])
  handleDragleave(e: Event) {
    e.preventDefault();
    e.stopPropagation();
    this.element.nativeElement.classList.remove(this.dragOverClass);
  }

  @HostListener('drop', ['$event'])
  handleDrop(e: Event) {
    e.preventDefault();
    e.stopPropagation();
    this.element.nativeElement.classList.remove(this.dragOverClass);
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
  ) {
    console.log('swag');
  }

  ngOnInit() {
    this.virtualInputElement = this.makeVirtualInputElement();
  }

  ngOnChanges() {
    this.virtualInputElement.setAttribute(
      'multiple',
      this.acceptsMultipleFiles.toString(),
    );
  }

  ngAfterContentInit() {
    this.virtualInputElement.addEventListener('change', this.onVirtualInputElementChange.bind(this));
  }

  ngOnDestroy() {
    this.virtualInputElement.removeEventListener('change', this.onVirtualInputElementChange.bind(this));
    this.virtualInputElement.parentNode.removeChild(this.virtualInputElement);
  }

  makeVirtualInputElement() {
    const input = this._document.createElement('input');
    input.setAttribute('type', 'file');
    input.style.display = 'none';
    return input;
  }

  private onVirtualInputElementChange(e: Event) {
    this.onDroppableElementChange(e);
    this.virtualInputElement.value = '';
  }

  private onDroppableElementChange(event: { [key: string]: any }) {
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
    this.setLatestDrop(filesArray);
  }

  promptForFiles() {
    this.virtualInputElement.click();
  }

  private setLatestDrop(files: Array<File>) {
    this.latestDroppedFiles = files;
    this.emitFilesWereDropped(files);
  }

  private emitFilesWereDropped(files: Array<File>) {
    this.onFilesDroppedEventListeners.forEach(listener => {
      listener(files);
    });
  }
}

export type FilesWereDroppedEventListener = (files: File[]) => any;
