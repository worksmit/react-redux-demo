import React, {
    Component,
} from 'react';
import { getFormValues, formValueSelector } from 'redux-form';




import {store} from './redux'

export class Thanks extends Component {


  get values() {
    
    const state = store.getState()
    console.log('state',state)
    // Get the form values using the redux-forms formValueSelector  function
    
//Method 1 to get form values: using formValueSelector. We can fetch form values heere because I have set destroyOnUnmount to false in UserForm.js .
/*
const selector = ('contact');
console.log(selector(state, 'email'));
*/

//Method 2: using getFormValues. We can fetch form values heere because I have set destroyOnUnmount to false in UserForm.js .

    //return getFormValues('coverage')(state);
    return state;
   
  }

    render() {
        const formValues = this.values
        console.log('values',this.values)
        return (
            <div>

                <h1>This is Thanks Page <br />{JSON.stringify(formValues)}</h1>

                

            </div>
        );
    }

}


export default Thanks;