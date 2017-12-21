import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse }
  from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

@Injectable()
export class MyInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

  	const dupreq = req.clone({headers: req.headers.set('Access-Control-Allow-Origin','https://my-json-server.typicode.com')});
  	return next.handle(dupreq).do(evt => {
      if (evt instanceof HttpResponse) {
        console.log('---> status:', evt.status);
        console.log('---> filter:', req.params.get('filter'));
      }
    });

  }
}

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers:[
  {provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true}
  ]
})
export class InterceptorModule { }
