import {Component,Input} from '@angular/core';
import { Employe } from './employe';


@Component({
    selector: 'empolye-detail',
    template: '<div *ngIf="employe">' +
    '<h1> Employe id : {{employe.id }}</h1>' +
    '<table> <tr>' +
    '<td><label>Nom :</label></td><td><input [(ngModel)] = "employe.prenom" placeholder="prenom" /> </td>' + '</tr><tr>' +
    '<td><label>Prenom :</label></td><td><input [(ngModel)] = "employe.nom" placeholder="nom" /></td>' +
    '</tr> </table>' +
    '</div>',
})
export class EmployeDetailComponent{
        @Input()
        employe : Employe;

}