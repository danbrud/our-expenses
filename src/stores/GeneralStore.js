import { observable, action, computed } from "mobx";


export class GeneralStore {
    @observable input = ""

    @action handleInput(e) {
        this[e.target.name] = e.target.value
    }
}