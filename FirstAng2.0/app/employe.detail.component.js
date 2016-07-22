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
var employe_1 = require('./employe');
var EmployeDetailComponent = (function () {
    function EmployeDetailComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', employe_1.Employe)
    ], EmployeDetailComponent.prototype, "employe", void 0);
    EmployeDetailComponent = __decorate([
        core_1.Component({
            selector: 'empolye-detail',
            template: '<div *ngIf="employe">' +
                '<h1> Employe id : {{employe.id }}</h1>' +
                '<table> <tr>' +
                '<td><label>Nom :</label></td><td><input [(ngModel)] = "employe.prenom" placeholder="prenom" /> </td>' + '</tr><tr>' +
                '<td><label>Prenom :</label></td><td><input [(ngModel)] = "employe.nom" placeholder="nom" /></td>' +
                '</tr> </table>' +
                '</div>',
        }), 
        __metadata('design:paramtypes', [])
    ], EmployeDetailComponent);
    return EmployeDetailComponent;
}());
exports.EmployeDetailComponent = EmployeDetailComponent;
//# sourceMappingURL=employe.detail.component.js.map