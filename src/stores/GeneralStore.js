import { observable, action, computed } from "mobx";
import { expenseCategories } from '../utils';


export class GeneralStore {
    @observable user = ''
    @observable amount = ''
    @observable expense = ''
    @observable category = ''

    constructor(){
        this.allCategories = ['דירה', 'קניות לבית', 'רכב']
    }

    @action handleInputs = e => {
        this[e.target.name] = e.target.value
    }
}