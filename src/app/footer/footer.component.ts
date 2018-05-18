
import { ChangeDetectionStrategy, Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <footer class="footer mt-3 mb-5">
    <a href="https://github.com/typectrl/ngx-droppable">View Source</a>
    <br>
    Demo using Angular {{ version }}
    <br>
    Listed on <a target="_blank" href="https://angular.parts/package/@ctrl/ngx-droppable">Angular.parts</a>
  </footer>
  `,
  styles: [`
  .footer {
    line-height: 2;
    text-align: center;
    font-size: 12px;
    color: #999;
  }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent  {
  version = VERSION.full;
}
