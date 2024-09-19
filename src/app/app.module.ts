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
import {CounterComponent} from "./components/counter/counter.component";
import {SimpleformComponent} from "./components/simpleform/simpleform.component";
import { UserageComponent } from "./components/userage/userage.component";
import {UsergreetingComponent} from "./components/usergreeting/usergreeting.component";
import {CalculatorComponent} from "./components/calculator/calculator.component";
import {TextlengthComponent} from "./components/textlength/textlength.component";
import {CurrencyconverterComponent} from "./components/currencyconverter/currencyconverter.component";
import {EvenoddcheckerComponent} from "./components/evenoddchecker/evenoddchecker.component";
import {WordreverserComponent} from "./components/wordreverser/wordreverser.component";
import {ShowdateComponent} from "./components/showdate/showdate.component";
import {ShowUsernameComponent} from "./components/showusername/showusername.component";
import {MultiplicationtableComponent} from "./components/multiplicationtable/multiplicationtable.component";
import {SimpleloginComponent} from "./components/simplelogin/simplelogin.component";
import {FahrenheittocelsiusComponent} from "./components/fahrenheittocelsius/fahrenheittocelsius.component";
import {BookmarklistComponent} from "./components/bookmarklist/bookmarklist.component";
import {CharactercounterComponent} from "./components/charactercounter/charactercounter.component";
import {PalindromecheckerComponent} from "./components/palindromechecker/palindromechecker.component";
import {TemperatureConverterComponent} from "./components/temperatureconverter/temperatureconverter.component";
import {ShoppingListComponent} from "./components/shoppinglist/shoppinglist.component";
import {FactorialCalculatorComponent} from "./components/factorialcalculator/factorialcalculator.component";
import {TodoManagerComponent} from "./components/todomanager/todomanager.component";
import {GuessNumberGameComponent} from "./components/guessnumbergame/guessnumbergame.component";
import {WordCounterComponent} from "./components/wordcounter/wordcounter.component";
import {RandomNumberGeneratorComponent} from "./components/randomnumbergenerator/randomnumbergenerator.component";
import {MultiplicationCheckerComponent} from "./components/multiplicationchecker/multiplicationchecker.component";
import {UppercaseConverterComponent} from "./components/uppercaseconverter/uppercaseconverter.component";
import {WordShufflerComponent} from "./components/wordshuffler/wordshuffler.component";
import {BMISolverComponent} from "./components/bmisolver/bmisolver.component";
import {UsernameValidatorComponent} from "./components/usernamevalidator/usernamevalidator.component";
import {InterestCalculatorComponent} from "./components/interestcalculator/interestcalculator.component";


const routes: Routes = [
  {path: '',  component: DisplayHelloWorldComponent},
  {path: 'showhellobutton', component: ShowhellobuttonComponent},
  {path:  'displayname', component: DisplaynameComponent },
  {path:  'counter', component: CounterComponent },
  {path:  'simpleform', component: SimpleformComponent},
  {path:  'userage', component: UserageComponent},
  {path:  'usergreeting', component: UsergreetingComponent},
  {path:  'calculator', component: CalculatorComponent},
  {path:  'textlength', component: TextlengthComponent},
  {path:  'currencyconverter', component: CurrencyconverterComponent},
  {path:  'evenoddchecker', component: EvenoddcheckerComponent},
  {path:  'wordreverser', component: WordreverserComponent},
  {path:  'showdate', component: ShowdateComponent},
  {path:  'showusername', component: ShowUsernameComponent},
  {path:  'multiplicationtable', component: MultiplicationtableComponent},
  {path:  'simplelogin', component: SimpleloginComponent},
  {path:  'fahrenheittocelsius', component:FahrenheittocelsiusComponent},
  {path:  'bookmarklist', component:BookmarklistComponent},
  {path:  'charactercounter', component:CharactercounterComponent},
  {path:  'palindromechecker', component:PalindromecheckerComponent},
  {path:  'temperatureconverter', component:TemperatureConverterComponent},
  {path:  'shoppinglist', component:ShoppingListComponent},
  {path:  'factorialcalculator', component:FactorialCalculatorComponent},
  {path:  'todomanager', component:TodoManagerComponent},
  {path:  'guessnumbergame', component:GuessNumberGameComponent},
  {path:  'wordcounter', component:WordCounterComponent},
  {path:  'randomnumbergenerator', component:RandomNumberGeneratorComponent},
  {path:  'multiplicationchecker', component:MultiplicationCheckerComponent},
  {path:  'uppercaseconverter', component:UppercaseConverterComponent},
  {path:  'wordshuffler', component:WordShufflerComponent},
  {path:  'bmisolver', component:BMISolverComponent},
  {path:  'usernamevalidator', component:UsernameValidatorComponent},
  {path:  'interestcalculator', component:InterestCalculatorComponent},








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
    CounterComponent,
    SimpleformComponent,
    UserageComponent,
    UsergreetingComponent,
    CalculatorComponent,
    TextlengthComponent,
    CurrencyconverterComponent,
    EvenoddcheckerComponent,
    WordreverserComponent,
    ShowdateComponent,
    ShowUsernameComponent,
    MultiplicationtableComponent,
    SimpleloginComponent,
    FahrenheittocelsiusComponent,
    BookmarklistComponent,
    CharactercounterComponent,
    PalindromecheckerComponent,
    TemperatureConverterComponent,
    ShoppingListComponent,
    FactorialCalculatorComponent,
    TodoManagerComponent,
    GuessNumberGameComponent,
    WordCounterComponent,
    RandomNumberGeneratorComponent,
    MultiplicationCheckerComponent,
    UppercaseConverterComponent,
    WordShufflerComponent,
    BMISolverComponent,
    UsernameValidatorComponent,
    InterestCalculatorComponent,


  ],

  providers: [

  ],

  bootstrap: [
    AppComponent
  ]
})

export class AppModule {}
