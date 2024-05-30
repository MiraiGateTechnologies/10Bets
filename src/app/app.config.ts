import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideToastr } from 'ngx-toastr';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { tokenInterceptor } from './core/interceptors/token.interceptor';
import { provideAnimations } from '@angular/platform-browser/animations';
import { errorIntercepter } from './core/interceptors/error.interceptor';
import { loadingInterceptor } from './core/interceptors/loading.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),provideToastr(),provideAnimations(),provideHttpClient(withInterceptors([errorIntercepter,loadingInterceptor]))]
};
