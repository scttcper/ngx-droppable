import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  constructor(private toastr: ToastrService) {}

  handleFilesDropped(files: File[]) {
    console.log('Files:', files);
    files.map((n) => this.toastr.success(n.name, 'File Dropped'));
  }
}
