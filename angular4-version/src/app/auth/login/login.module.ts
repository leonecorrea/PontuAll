import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// tslint:disable-next-line:max-line-length
import { MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatPaginatorModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule, MatDialogModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatSelectModule, MatSidenavModule, MatSliderModule, MatSortModule, MatSlideToggleModule, MatSnackBarModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule, MatFormFieldModule, MatExpansionModule, MatStepperModule } from '@angular/material';

import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login.routing.module';
import { AuthModule } from '../auth.module';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    // tslint:disable-next-line:max-line-length
    MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatPaginatorModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule, MatDialogModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatSelectModule, MatSidenavModule, MatSliderModule, MatSortModule, MatSlideToggleModule, MatSnackBarModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule, MatFormFieldModule, MatExpansionModule, MatStepperModule,
    ReactiveFormsModule,
    FormsModule,
    AuthModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule {}
