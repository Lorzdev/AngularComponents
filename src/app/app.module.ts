import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { NgModule } from "@angular/core";
import { CommonModule, CurrencyPipe } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { DisplayHelloWorldComponent } from "./components/display-hello-world/display-hello-world.component";
import { ShowhellobuttonComponent } from "./components/showhellobutton/showhellobutton.component";
import { DisplaynameComponent} from "./components/displayname/displayname.component";


const routes: Routes = [
  {path: '',  component: DisplayHelloWorldComponent},
  {path: 'showhellobutton', component: ShowhellobuttonComponent},
  {path:  'displayname', component: DisplaynameComponent },

]

@NgModule ({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, {enableTracing: true}),
    FormsModule,
  ],

  declarations: [
    AppComponent,
    DisplayHelloWorldComponent,
    ShowhellobuttonComponent,
    DisplaynameComponent,

  ],

  providers: [

  ],

  bootstrap: [
    AppComponent
  ]
})

export class AppModule {}
