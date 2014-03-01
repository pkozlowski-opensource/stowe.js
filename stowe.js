import {Electricity} from 'electricity/electricity';

class Stowe {

  constructor(electricity: Electricity) {
    this.electricity = electricity;
  }

  function on() {
    this.electricity.startUsing(this);
  }

  function off() {
    this.electricity.stopUsing(this);
  }

  function voltage() {
    return 230;
  }
}