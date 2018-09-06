import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-component1',
  template: `
    <p>
      welcome {{ comp_titleName}}
    </p>
    
    2 + 2 = {{ 2 + 2}} <div></div>
    {{ "Welcome " + comp_titleName}}
    <div></div>
    comp_titleName.length: {{ comp_titleName.length }}
    <div></div>
    {{ comp_titleName.toUpperCase() }}
    <div></div>
    {{ comp_titleName.toLowerCase() }}
    <div></div>
    Greet User: {{ greetUser () }}
    <div> Greet User: {{ greetUser () }}</div>
    <div></div>
    Site Url: {{ siteUrl }}
    <div></div>
    <div></div>
    <input type="text" value="angular">
    <div></div>
    <input [id]="myId" type="text" value="angular">
    <div></div>
    <input id="{{myId}}" type="text" value="angular">
    <div></div>
    <input [disabled]="false" id="{{myId}}" type="text" value="angular">
    <div></div>
    <input [disabled]="isDisabled" id="{{myId}}" type="text" value="angular">
    <div></div>
    <input bind-disabled="isDisabled" id="{{myId}}" type="text" value="angular">
    <div class="text-special">text special</div>
    <div [class.text-danger]="hasError">text danger?</div>
    <div></div>
    <div [ngClass]="messageClasses">Codevolution</div>
    <div [style.color]="'orange'">Codevolution style.color</div>
    <div [style.color]="hasError ? 'red' : 'green'">Style binding</div>
    <div [style.color]="highlightColor">Style binding</div>
    <div [ngStyle]="titleStyles">Title Style</div>
    <div>
      <button (click)="onGreetButtonClick()">Greeting</button>
      {{ greeting }}
    </div>
    <div>
      <button (click)="onGreetButtonClick($event)">Greeting</button>
      {{ greeting }}
    </div>
    <div>
      <button (click)="greeting='welcome Greeting'">Greeting</button>
      {{ greeting }}
    </div>

    <div><input #myInput type="text"><button (click)="logMessage(myInput.value)">Log</button></div>
    <div><input #myInput2 type="text"><button (click)="logMessage2(myInput2)">Log</button></div>

    <div></div><p></p>
    <div>Two way Binding</div>
    <div>
      <input [(ngModel)]="dataBindingName" type="text">
      {{ dataBindingName }}
    </div>

    <p></p>
    <div>
      ngIf....
      <div *ngIf="true">
        codevolution
      </div>
    </div>
    <p></p>
    <div>
      ngIf....
      <div *ngIf="displayName">
        codevolution (ngif="displayName")
      </div>
    </div>

    <p></p>
    <div>
    ngIf....else
    <div *ngIf="displayName; else elseBlock">
      Codevolution (if)
    </div>
    <ng-template #elseBlock>
    <div>
      name is hidden (elseBLock)
    </div>
    </ng-template>
  </div>

  <p></p>
  <div>
    ngIf....thenBlock...elseBlock
    
    <div *ngIf="displayName; then thenBlock; else elseBlock">
    </div>
    <ng-template #thenBlock>
    <div>
      Codevolution (thenBlock)
    </div>
    </ng-template>
    <ng-template #elseBlock>
    <div>
      Hidden (elseBLock)
    </div>
    </ng-template>
  </div>

  <p>ngSwitch....ngSwitchCase</p>
  <div [ngSwitch]="color">
    <div [style.color]="color" *ngSwitchCase="'red'">You picked {{color}}</div>
    <div  [style.color]="color" *ngSwitchCase="'yellow'">You picked {{color}}</div>
    <div  [style.color]="color" *ngSwitchCase="'blue'">You picked {{color}}</div>
    <div  [style.color]="color" *ngSwitchCase="'purple'">You picked {{color}}</div>
    <div *ngSwitchDefault>Pick again!</div>
  </div>

  <h1>ngFor....index as i</h1>
  <div *ngFor="let color of colors; index as i">
    <h2 [style.color]="color">{{i}} {{color}}</h2>
  </div>
  <h1>ngFor....first as f</h1>
  <div *ngFor="let color of colors; first as f">
    <h2 [style.color]="color">{{f}} {{color}}</h2>
  </div>
  <h1>ngFor....last as l</h1>
  <div *ngFor="let color of colors; last as l">
    <h2 [style.color]="color">{{l}} {{color}}</h2>
  </div>
  <h1>ngFor....odd as o</h1>
  <div *ngFor="let color of colors; odd as o">
    <h2 [style.color]="color">{{o}} {{color}}</h2>
  </div>
  <h1>ngFor....even as e</h1>
  <div *ngFor="let color of colors; even as e">
    <h2 [style.color]="color">{{e}} {{color}}</h2>
  </div>
  
  <h1>Component Interaction</h1>
  <p>Parent AppComponent and Child TestComponent (@Input(): child can get data from Parent; @Output(): Child can send data to Parent</p>
  <div>
    {{"Hello " + name }}
    <button (click)="fireEvent()">Send Event to Parent</button>
  </div>


  <h1>Pipes: format for displaying</h1>
  <div>
    <p>{{ comp_titleName }}</p>
    <p>{{ comp_titleName | lowercase }}</p>
    <p>{{ comp_titleName | uppercase }}</p>
    <p>{{ comp_titleName | titlecase }}</p>
    <p>{{ comp_titleName | slice:2-15}}</p>
    <p>{{ person | json }}</p>
    <p>{{ 5.678 | number:'1.2-3' }}</p>
    <p>{{ 5.678 | number:'3.4-5' }}</p>
    <p>{{ 5.678 | number:'3.1-2' }}</p>
    <p>{{ 587589.678 | number:'6.1-2' }}</p>
    <p>{{ 0.25 | percent }}</p>
    <p>{{ 0.25 | currency }}</p>
    <p>{{ 35.25 | currency: 'GBP' }}</p>
    <p>{{ 35.25 | currency: 'GBP': 'code' }}</p>
    <p>{{ 35.25 | currency: 'EUR' }}</p>
    <p>{{ 35.25 | currency: 'EUR': 'code' }}</p>
    <p>{{ todayDate }}</p>
    <p>{{ todayDate | date:'short' }}</p>
    <p>{{ todayDate | date:'shortDate' }}</p>
    <p>{{ todayDate | date:'shortTime' }}</p>
    <p>{{ todayDate | date:'longDate' }}</p>
    <p>{{ todayDate | date:'long' }}</p>
    <p>{{ todayDate | date:'longTime' }}</p>
  </div>


  <h1>Dependency Injection</h1>
  <div>
    <p>Code without DI - drawbacks</p>
    <p>DI - as a design pattern</p>
    <p></p>
    <p>DI is a coding pattern in which a class receives its dependencies from external sources rather than creating them itself.</p>
    <p>DI - as a framework</p>
    <p>
      1) Define the EmployeeService class
      2) Register with Injector
      3) Declare as dependency in EmplList and EmpDetail
    </p>
  </div>
  <div>
    <h2>Employees List</h2>
    <ul *ngFor="let employee of employees">
      <li>{{ employee.name }}</li>
    </ul>

  </div>
  <app-employee-detail></app-employee-detail>


  <div></div>










  `,
  styles: [`
    div {
      color: blue;
    },

    .title-name {
      color: blue;
    }

    .text-success {
      color: green;
    }
    .text-danger {
      color: red;
    }
    .text-special {
      font-style: italic;
    }




  `]
})

export class Component1Component implements OnInit {

  public comp_titleName = "Component 1 title name";
  public siteUrl = window.location.href;
  public myId = "testId";
  public isDisabled = true;
  public successClass = "text-success";
  public hasError = false;
  public isSpecial = false;
  public highlightColor = "yellow";
  public titleStyles = {
    color: "blue",
    fontStyle: "italic"
  }
  public greeting = "";

  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }


  public dataBindingName = "";
  public displayName = true;

  public color = "pink";

  public colors = ["red", "yellow", "blue", "pink"];



  @Input('parentData') public name;
  @Output() public childEvent = new EventEmitter();


  public person = {
    "firstName": "Tom",
    "lastName": "Smith",
    "city": "Vancouver",
    "DOB": "1987/08/15"
  }

  public todayDate = new Date();


  public employees = [];


  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this._employeeService.getEmployees()
        .subscribe(data => this.employees = data);
  }


  greetUser(){
    return "Hello " + this.comp_titleName;
  }

  onGreetButtonClick(myEvent){
    console.log(myEvent);
    this.greeting = myEvent.type;
  }
  logMessage(value){
    console.log(value);
  }

  logMessage2(value){
    console.log(value.value);
  }

  fireEvent(){
    this.childEvent.emit('Hey Parent app.component');
  }
}
