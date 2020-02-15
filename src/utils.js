import axios from 'axios'

export const expenseCategories = [
    "קניות לבית",
    "רכב",
    "דירה",
    "תשלומים חודשיים ומנויים",
    "סיגריות",
    "אוכל בחוץ",
    "תחבורה ציבורית",
    "השקעות וחסכונות",
    "מתנות",
    "טיפוח",
    "בריאות",
    "בילוי",
    "מותרות"
]

export const months = [
    'ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני', 'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר'
]

export const colors = [
    '#D4F2D2',
    '#BEB7DF',
    '#FDE8E9',
    '#70E4EF',
    '#DEF4C6',
    '#73E2A7',
    '#C3DFE0',
    '#4BA3C3',
    '#9C9990',
    '#CFD2B2',
    '#F78764',
    '#D7F9F1',
    '#FFD5FF'
]

export const users = ['טל', 'דני']

export const API_URL = 'http://localhost:4000'

export const setAuthToken = token => {
    if(token) {
        axios.defaults.headers.common["Authorization"] = token
    } else {
        delete axios.defaults.headers.common["Authorization"]
    }
}