import { NgModule } from '@angular/core';

import { DroppableDirective } from './droppable.directive';

@NgModule({
  exports: [DroppableDirective],
  declarations: [DroppableDirective],
})
export class DroppableModule {}
