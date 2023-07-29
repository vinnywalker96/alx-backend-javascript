import Currency from "./3-currency";

export default class Pricing extends Currency{
    construct(amount, currency) {
        this._amount = amount;
        this._currency = currency;
        
    }

    get amount() {
        return this._amount;
    }

    set amount(value) {
        if (typeof value !== 'number') {
            throw new TypeError('Amount must be a number');
        }
        this._amount = value;
    }

    get currency() {
        return this._currency;
    }

    set currency(value) {
        if (typeof value !== 'object'){
            throw new TypeError('Currency must be an string')
        }
        return this._currency = value
    }

    displayFullPrice(){
        return `${this.amount} ${super.displayFullCurrency()}`;
    }

    static convertPrice(amount, conversionRate){
        return amount * conversionRate;
    }
}