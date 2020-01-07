import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MainNavComponent} from './common/main-nav/main-nav.component';
import {LayoutModule} from '@angular/cdk/layout';
import {AppRoutingModule} from '../app-routing.module';
import { AuthComponent } from './common/auth/auth.component';
import {ChartModule} from 'primeng/chart';
import {BrowserModule} from '@angular/platform-browser';
import { AddRecordComponent } from './booker/add-record/add-record.component';
import {ProgressSpinnerModule} from 'primeng/primeng';
import { RegistrationComponent } from './common/auth/registration/registration.component';
import { OutcomeComponent } from './booker/outcome/outcome.component';
import { MenuComponent } from './meals/menu/menu.component';
import { TodayMenuComponent } from './meals/today-menu/today-menu.component';

@NgModule({

  declarations: [MainNavComponent, AuthComponent, AddRecordComponent, RegistrationComponent, OutcomeComponent, MenuComponent, TodayMenuComponent],

  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],

  imports: [
    BrowserModule,
    ChartModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    CdkTableModule,
    CdkTreeModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    LayoutModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ProgressSpinnerModule
  ],
  exports: [
    MainNavComponent,
    ChartModule,
    AddRecordComponent,
    OutcomeComponent
  ]
})
export class UiModule {
}
