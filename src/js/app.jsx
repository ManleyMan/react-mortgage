import React from 'react';





export default class App extends React.Component {
constructor(props){
  super(props),
  this.state={
    submit: 0,
    balance:0,
    rate: 0.00,
    term: 15, 
  };

  this.updateState= this.updateState.bind(this);
  this.calculate= this.calculate.bind(this)
}

updateState(e){
  this.setState({
    [e.target.name]:[e.target.value]
  })
  console.log(this.state.term)
};

calculate(){
  const p = (this.state.balance);
  const r = (this.state.rate) / 100 / 12;
  const n = (this.state.term) * 12;
  // const p = principal;
  // const r = rate;
  // const n = term;
  // const m = payment;
   var x = Math.pow((1+r),n);
  // var m = (p*x*r)/(x-1);
  var m = (p*(r*x)/(x-1)).toFixed(2);
  // var m = p*[r*(1+r)**n/(1+r)**n - 1];
  console.log(m);
  this.setState({submit : m});
}

  // your Javascript goes here
  render() {
    return (
      <div className='container'>
        
          <h3>Mortgage Calculator</h3>
      
        <form>
          <div className='form-item loan-item' id= 'input'>
            <label htmlFor=''>Loan Balance</label>
            <div className='form-input'>
            <input 
            type='number'
            name='balance'
            placeholder='Balance'
            value={this.state.balance}
            onChange={this.updateState}
            />
            </div>
          </div>
          <div className='form-item'>
            <label htmlFor='rate'>Interest Rate</label>
            <div className='form-input'>
              <input 
              type='number'
              name='rate'
              placeholder='APR'
              value={this.state.rate}
              onChange={this.updateState}
              step='0.01'
              />
            </div>
          </div>
          <div className='form-item'>
            <label htmlFor='term'>Loan Term (Years)</label>
            <div className='form-input'>
            <select name='term' value={this.state.term} onChange={this.updateState}>
                <option value="15">15</option>
                <option value="30">30</option>
            </select>
             <button name='submit'  onClick={(e) => {
               e.preventDefault()
               this.calculate()}}>Calculate</button>
            </div>
            <div id='output' name='output'>${this.state.submit} is your payment.</div>
          </div>
         
        </form>
       
      </div>
        
    );
  }

}