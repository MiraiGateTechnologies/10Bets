import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoadingService } from '../services/loading.service';
import { finalize } from 'rxjs';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  let loadingService = inject(LoadingService);
  console.log('Interceptor: Showing loading indicator');
    loadingService.show();
    return next(req).pipe(finalize(()=>{
      console.log('Interceptor: Hiding loading indicator');
      loadingService.hide();
    }));
};
