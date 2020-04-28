import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './shared/view/dashboard/dashboard.component';
import { SampleDemoComponent } from './demo/view/sampledemo.component';
import { FormsDemoComponent } from './demo/view/formsdemo.component';
import { PanelsDemoComponent } from './demo/view/panelsdemo.component';
import { DataDemoComponent } from './demo/view/datademo.component';
import { OverlaysDemoComponent } from './demo/view/overlaysdemo.component';
import { MenusDemoComponent } from './demo/view/menusdemo.component';
import { ChartsDemoComponent } from './demo/view/chartsdemo.component';
import { FileDemoComponent } from './demo/view/filedemo.component';
import { MessagesDemoComponent } from './demo/view/messagesdemo.component';
// import { MiscDemoComponent } from './demo/view/miscdemo.component';

const routes: Routes = [

  { path: '', component: DashboardComponent },
  { path: 'demo', component: SampleDemoComponent },
  { path: 'forms', component: FormsDemoComponent },
  { path: 'data', component: DataDemoComponent },
  { path: 'panels', component: PanelsDemoComponent },
  { path: 'overlays', component: OverlaysDemoComponent },
  { path: 'menus', component: MenusDemoComponent },
  { path: 'messages', component: MessagesDemoComponent },
  { path: 'charts', component: ChartsDemoComponent },
  { path: 'file', component: FileDemoComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
