import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutusComponent } from '../pages/aboutus/aboutus.component';
import { CurasolComponent } from './components/curasol/curasol.component';
import { BucketMenuComponent } from "../pages/bucket-menu/bucket-menu.component";
AboutusComponent
@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
    ],
    imports: [
        CommonModule,
        SharedRoutingModule,
        BucketMenuComponent
    ]
})
export class SharedModule { }
