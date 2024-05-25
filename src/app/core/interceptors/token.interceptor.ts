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
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJDMTA2NyIsImF1ZCI6IjIiLCJzY29wZXMiOlt7ImF1dGhvcml0eSI6IjIifV0sImlzcyI6IklTU1VFUiIsImlhdCI6MTcxNjE5MTEzNiwiZXhwIjoxNzE3MDU1MTM2fQ.uSkRPGhOusg__xQWT8HBUiTtOs-x_T58fqpyZoL-pzw`
    }
  })
  return next(cloneReq);
};
