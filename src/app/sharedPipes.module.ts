import { NgModule } from '@angular/core';
import { SearchFilterPipe } from './searchpipe';

@NgModule({
  imports: [
    // dep modules
  ],
  declarations: [
    SearchFilterPipe
  ],
  exports: [
    SearchFilterPipe
  ]
})
export class ApplicationPipesModule {}