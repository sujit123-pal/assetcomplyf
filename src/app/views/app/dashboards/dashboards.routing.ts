import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardsComponent } from './dashboards.component';
import { AssetComponent } from './asset/asset.component';
import { PurchaseOrderSettingsComponent } from './purchase-order-settings/purchase-order-settings.component';
import { BrandComponent } from './brand/brand.component';
import { ActivityTypeComponent } from './activity-type/activity-type.component';
import { MovementStatusComponent } from './movement-status/movement-status.component';
import { TaxSettingsComponent } from './tax-settings/tax-settings.component';
import { VendorSettingsComponent } from './vendor-settings/vendor-settings.component';
import { MeterTypeSettingsComponent } from './meter-type-settings/meter-type-settings.component';
import { ConditionSettingsComponent } from './condition-settings/condition-settings.component';
import { ModelComponent } from './model/model.component';
import { UnitComponent } from './unit/unit.component';
import { ReasonSettingsComponent } from './reason-settings/reason-settings.component';
import { DepartmentComponent } from './department/department.component';
import { AddressComponent } from './address/address.component';
import { StatusComponent } from './status/status.component';
import {ItemComponent} from '../../../item/item.component';
const routes: Routes = [
  {
    path: '',
    component: DashboardsComponent,
    children: [
      { path: '', redirectTo: 'asset', pathMatch: 'full' },
      { path: 'asset', component: AssetComponent },
      { path: 'model', component: ModelComponent },
      {
        path: 'purchase-order-setting',
        component: PurchaseOrderSettingsComponent,
      },
      { path: 'brand', component: BrandComponent },
      { path: 'unit', component: UnitComponent },
      { path: 'activity-type', component: ActivityTypeComponent },
      { path: 'movement-status', component: MovementStatusComponent },
      { path: 'tax-settings', component: TaxSettingsComponent },
      { path: 'vendor-setting', component: VendorSettingsComponent },
      { path: 'reason-settings', component: ReasonSettingsComponent },
      { path: 'meter-type-settings', component: MeterTypeSettingsComponent },
      { path: 'condition-settings', component: ConditionSettingsComponent },
      { path: 'department', component: DepartmentComponent },
      { path: 'address', component: AddressComponent },
      { path: 'status', component: StatusComponent },
      { path: 'item', component: ItemComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardsRoutingModule {}
