import { observable, action, computed } from "mobx";
import { expenseCategories } from '../utils';


export class GeneralStore {
    @observable user = ''
    @observable amount = ''
    @observable name = ''
    @observable category = ''

    @action handleInputs = e => {
        this[e.target.name] = e.target.value
    }
}