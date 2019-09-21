import { observable, action } from "mobx";

export class GeneralStore {
    @observable user = ''
    @observable amount = ''
    @observable expense = ''
    @observable category = ''
    @observable date = ''

    @action handleInputs = e => {
        this[e.target.name] = e.target.value
    }
}