
import { ChangeDetectionStrategy, Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <footer class="footer mt-3 mb-5">
    <a href="https://github.com/scttcper/ngx-droppable">View Source</a>
    <br>
    Demo using Angular {{ version }}
  </footer>
  `,
  styles: [`
  .footer {
    line-height: 2;
    text-align: center;
    color: #4e4e4e;
  }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent  {
  version = VERSION.full;
}
