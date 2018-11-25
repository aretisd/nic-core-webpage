import { NgModule, InjectionToken } from '@angular/core';
import { RouterModule, Routes, ActivatedRouteSnapshot } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { RedirectComponent } from './redirect/redirect.component';

const externalUrlProvider = new InjectionToken('externalUrlRedirectResolver');
const deactivateGuard = new InjectionToken('deactivateGuard');

const routes: Routes = [
    { path: '', component: HomepageComponent },
    { path: 'externalRedirect', canActivate: [externalUrlProvider], component: RedirectComponent}
];

@NgModule( {
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    providers: [
        {
            provide: externalUrlProvider,
            useValue: (route: ActivatedRouteSnapshot) => {
                const externalUrl = route.paramMap.get('externalUrl');
                window.open(externalUrl, '_self');
            },
        },
        {
            provide: deactivateGuard,
            useValue: () => {
                console.log('Guard function is called!');
                return false;
            }
        }
    ]
})
export class AppRoutingModule {}
