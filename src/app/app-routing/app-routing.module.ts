import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component'
import { IfElseThenComponent } from '../if-else-then/if-else-then.component';
import { AnimateComponent } from '../animate/animate.component';
import { HomeComponent } from '../home/home.component';
import { AotComponent } from '../aot/aot.component';
import { DynamicComponentComponent } from '../dynamic-component/dynamic-component.component';
import { ErrorPageComponent } from '../error-page/error-page.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'if-else',
        component: IfElseThenComponent,
    },
    {
        path: 'animate',
        component: AnimateComponent,
    },
    /*{
        path: 'animate/:id',
        component: AnimateComponent,
    },*/
    {
        path: 'aot',
        component: AotComponent,
    },
    {
        path: 'ngco',
        component: DynamicComponentComponent,
    },
    {
        path: 'error',
        component: ErrorPageComponent,
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }