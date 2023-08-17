import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";


@NgModule({
    declarations:[],
    imports:[
        CommonModule,
        RouterModule.forChild([
            {
                path:'',
                component:HomeComponent,
              },
            {
                path:'dashboard/home',
                component:HomeComponent,
              },
        ])
    ]
})
export class HomeRoutingModule{} 