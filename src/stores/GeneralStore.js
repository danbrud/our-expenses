import { observable, action } from "mobx";

export class GeneralStore {
    @observable user = ''
    @observable amount = ''
    @observable expense = ''
    @observable category = ''

    @action handleInputs = e => {
        this[e.target.name] = e.target.value
    }
}