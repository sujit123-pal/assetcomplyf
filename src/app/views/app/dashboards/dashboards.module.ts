import { NgModule } from '@angular/core';
import { DashboardsComponent } from './dashboards.component';
import { DashboardsRoutingModule } from './dashboards.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardsContainersModule } from 'src/app/containers/dashboards/dashboards.containers.module';
import { ComponentsCardsModule } from 'src/app/components/cards/components.cards.module';
import { LayoutContainersModule } from 'src/app/containers/layout/layout.containers.module';
import { AssetComponent } from './asset/asset.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { ModelComponent } from './model/model.component';
import { PurchaseOrderSettingsComponent } from './purchase-order-settings/purchase-order-settings.component';
import { BrandComponent } from './brand/brand.component';
import { ActivityTypeComponent } from './activity-type/activity-type.component';
import { MovementStatusComponent } from './movement-status/movement-status.component';
import { TaxSettingsComponent } from './tax-settings/tax-settings.component';
import { VendorSettingsComponent } from './vendor-settings/vendor-settings.component';
import { ReasonSettingsComponent } from './reason-settings/reason-settings.component';
import { MeterTypeSettingsComponent } from './meter-type-settings/meter-type-settings.component';
import { ConditionSettingsComponent } from './condition-settings/condition-settings.component';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { UnitComponent } from './unit/unit.component';
import { AddressComponent } from './address/address.component';
import { StatusComponent } from './status/status.component';
import { DepartmentComponent } from './department/department.component';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PagesContainersModule } from 'src/app/containers/pages/pages.containers.module';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { CodeComponent } from './code/code.component';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';

@NgModule({
  declarations: [
    DashboardsComponent,
    AssetComponent,
    ModelComponent,
    PurchaseOrderSettingsComponent,
    BrandComponent,
    ActivityTypeComponent,
    MovementStatusComponent,
    TaxSettingsComponent,
    VendorSettingsComponent,
    ReasonSettingsComponent,
    MeterTypeSettingsComponent,
    ConditionSettingsComponent,
    UnitComponent,
    AddressComponent,
    StatusComponent,
    DepartmentComponent,
    CodeComponent,
  ],
  imports: [
    SharedModule,NgxQRCodeModule,
    LayoutContainersModule,
    DashboardsContainersModule,
    DashboardsRoutingModule,
    ComponentsCardsModule,
    NgSelectModule,
    FormsModule,
    DropzoneModule,
    NgxDatatableModule,
    PaginationModule.forRoot(),
    PagesContainersModule,
    CollapseModule,
    SimpleNotificationsModule.forRoot(),
  ],
})
export class DashboardsModule {}
