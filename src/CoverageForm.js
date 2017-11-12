import React from 'react';
import { Field, reduxForm } from 'redux-form';

let CoverageForm = props => { 
    const { handleSubmit } = props;
         return (
       <div>
           <form onSubmit={handleSubmit}>
               <div className="row">
               <div className= "col-md-4 col-md-offset-4">
               <input type="submit" className="btn btn-primary btn-lg" value="PREVIEW"/>
               <button type="submit" className="btn btn-primary btn-lg">Submit</button>
               </div>
           </div>
           </form>
       <footer className="container-fluid footer-class">
           <div className="container">
               <p className="copyright text-center">Copyright © 2017 Designed by Batch 1 New Web Trainee. All rights reserved.</p>
           </div>
        </footer>
        </div>
         );
       }
       
     CoverageForm = reduxForm({
       form: 'coverage',// a unique name for this form
       destroyOnUnmount :false
     })(CoverageForm);

     export default CoverageForm;