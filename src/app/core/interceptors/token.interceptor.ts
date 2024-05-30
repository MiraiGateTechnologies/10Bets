import { HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../../features/betting/services/auth.service';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const cokiesService =inject(AuthService)
  const myToken = cokiesService.getToken();
  if(req.url.includes('login')){
    return next(req);
  }
  const token = `Bearer ${myToken}`;
  const cloneReq =req.clone({
    setHeaders :{
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2NTI3ZjUxODdmNTA3MzRkOWM2MjhhZGUiLCJpYXQiOjE3MTY3OTI2OTgsImV4cCI6MTcxOTM4NDY5OH0.iedl1mDTA6w4K-w6MtvumUNR-PbB0oQa3tyE4l9QaOE`
    }
  })
  return next(cloneReq);
};
