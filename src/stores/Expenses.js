import { observable, action, computed } from "mobx";


export class Expenses {
    @observable expenses = [
        {_id: "7897987", user: "Danny", amount: 20, date: new Date(), category: "Apt"},
        {_id: "jhksd", user: "Danny", amount: 67, date: new Date(), category: "Apt"},
        {_id: "l2j1", user: "Tal", amount: 90, date: new Date(), category: "Food"},
        {_id: "lk;l2k312", user: "Tal", amount: 10, date: new Date(), category: "Groceries"},
        {_id: "798hkjhkdsdsa", user: "Tal", amount: 210, date: new Date(), category: "Groceries"},
        {_id: "787wdjshdashdsa76", user: "Danny", amount: 10, date: new Date(), category: "Eating out"}
    ]
}