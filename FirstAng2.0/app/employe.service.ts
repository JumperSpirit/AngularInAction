import {Injectable} from '@angular/core';
import {EMPLOYES} from './employes.mock';

@Injectable()
export class EmployeService{
    getEmployes(){
        return Promise.resolve(EMPLOYES);
    }
}