import {Component} from '@angular/core';
import { Employe } from './employe';
import { EmployeDetailComponent } from './employe.detail.component';
import { EmployeService } from './employe.service'
import { OnInit } from '@angular/core';


@Component({
    selector: 'my-app',
    template: '<h1>{{title}}</h1>' +
    '<div>' +
    '<ul class="employes">' +
    '<li *ngFor="let emp of employeList" ' +
    '[class.selected]="emp === selectedEmploye"' +
    '(click) = "selectEmploye(emp)"> <span class="badge">{{ emp.id }}</span> <span> {{emp.prenom}} </span> <span> {{emp.nom}} </span>  </li>' +
    '</ul>' +
    '</div>' +
    '<empolye-detail [employe] = "selectedEmploye" > </empolye-detail>',

    styles: ['  .selected {    background-color: #CFD8DC !important;    color: white;  }  .employes {    margin: 0 0 2em 0;    list-style-type: none;    padding: 0;    width: 15em;  }  .employes li {    cursor: pointer;    position: relative;    left: 0;    background-color: #EEE;    margin: .5em;    padding: .3em 0;    height: 1.6em;    border-radius: 4px;  }  .employes li.selected:hover {    background-color: #BBD8DC !important;    color: white;  }  .employes li:hover {    color: #607D8B;    background-color: #DDD;    left: .1em;  }  .employes .text {    position: relative;    top: -3px;  }  .employes .badge {    display: inline-block;    font-size: small;    color: white;    padding: 0.8em 0.7em 0 0.7em;    background-color: #607D8B;    line-height: 1em;    position: relative;    left: -1px;    top: -4px;    height: 1.8em;    margin-right: .8em;    border-radius: 4px 0 0 4px;  }'],

    //Injecting component
    directives: [EmployeDetailComponent],

    //injecting service
    providers: [EmployeService]
})
export class AppComponent implements OnInit {

    //injecting service
    constructor(private employeService:EmployeService) {
    }


    title = "Liste des employe";
    selectedEmploye:Employe;
    employeList:Employe[];

    selectEmploye(emp:Employe) {
        this.selectedEmploye = emp;
    }

    getEmployes() {
        this.employeService.getEmployes().then(employeList => this.employeList = employeList);
    }

    ngOnInit() {
        this.getEmployes();
    }
}





