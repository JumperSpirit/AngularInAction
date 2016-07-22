"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var employe_detail_component_1 = require('./employe.detail.component');
var employe_service_1 = require('./employe.service');
var AppComponent = (function () {
    //injecting service
    function AppComponent(employeService) {
        this.employeService = employeService;
        this.title = "Liste des employe";
    }
    AppComponent.prototype.selectEmploye = function (emp) {
        this.selectedEmploye = emp;
    };
    AppComponent.prototype.getEmployes = function () {
        var _this = this;
        this.employeService.getEmployes().then(function (employeList) { return _this.employeList = employeList; });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getEmployes();
    };
    AppComponent = __decorate([
        core_1.Component({
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
            directives: [employe_detail_component_1.EmployeDetailComponent],
            //injecting service
            providers: [employe_service_1.EmployeService]
        }), 
        __metadata('design:paramtypes', [employe_service_1.EmployeService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map