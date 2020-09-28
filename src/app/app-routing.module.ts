import { ErrorHandler } from '@angular/core';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GlobalErrorHandler } from './utils/GlobalErrorHandler';
import { routes } from './routes/routes';

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [{
    provide: ErrorHandler,
    useClass: GlobalErrorHandler
  }]
})
export class AppRoutingModule { }
