import { observable, action } from "mobx";

export class GeneralStore {
    @observable user = ''
    @observable amount = ''
    @observable expense = ''
    @observable category = ''
    @observable date = new Date()

    @action handleInputs = e => {
        this[e.target.name] = e.target.value
    }

    @action handleDateChange = date => this.date = new Date(date)
}