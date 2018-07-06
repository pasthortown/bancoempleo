import { OfertaLaboralRoutingModule } from './oferta-laboral-routing.module';
import { OfertaLaboralComponent } from './oferta-laboral.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    OfertaLaboralRoutingModule
  ],
  declarations: [OfertaLaboralComponent]
})
export class OfertaLaboralModule { }
