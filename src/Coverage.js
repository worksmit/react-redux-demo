import React,{Component} from "react";
import { Redirect } from 'react-router'
import CoverageForm from './CoverageForm'


import { connect } from 'react-redux';

import {
   
    saveCoverage
} from './redux';

export class Coverage extends Component {

constructor(props){
	super(props);
	this.state = { 
		cptl: null,
		comp: null,
		fp: null,
		cptlCost: 625,
		cost : null,
		uber: false,
		road: false,
		hotel: false,
		cptlDiv : false,
		compDiv: false,
		fpDiv: false,
		redirect: false
	}
}


componentWillMount(){
	if(this.state.cptl === null){
		this.getCoverageCTPL();
	}
}

handleChangeUber =() => {
	this.setState({uber: !this.state.uber });
  }

  handleChangeRoad =() => {
	this.setState({road: !this.state.road });
  }

  handleChangeHotel =() => {
	this.setState({hotel: !this.state.hotel });
  }

  cptlDiv =() => {
	this.setState({cptlDiv: !this.state.cptlDiv,compDiv : false , fpDiv : false});
  }

  compDiv =() => {
	this.setState({compDiv: !this.state.compDiv , cptlDiv: false, fpDiv : false});
  }

  fpDiv =() => {
	this.setState({fpDiv: !this.state.fpDiv , cptlDiv: false,compDiv : false});
  }


getCoverageCTPL(){
		const CPTL_URL = `https://autosure.mybluemix.net/api/policies/ctpl`;
		const COMP_URL = `https://autosure.mybluemix.net/api/policies/comprehensive`;
		const FP_URL = `https://autosure.mybluemix.net/api/policies/full`;
		const COST_URL= `https://autosure.mybluemix.net/api/cost?data={%22value%22:700000}`;
		fetch (CPTL_URL, {
			method: 'GET'
		})
		.then (response => response.json())
		.then (json => {
			this.setState({ cptl :json})
		});

		fetch (COMP_URL, {
			method: 'GET'
		})
		.then (response => response.json())
		.then (json => {
			this.setState({ comp :json})
		});

		fetch (FP_URL, {
			method: 'GET'
		})
		.then (response => response.json())
		.then (json => {
			this.setState({ fp :json})
		});

		fetch (COST_URL, {
			method: 'GET'
		})
		.then (response => response.json())
		.then (json => {
			this.setState({ cost :json})
		});
}

	submit = (values) => {
	// print the form values to the console
	console.log('state', this.state);

	this.props.saveCoverage({ x:'hello wolrd', cptlDetails: this.state.cptl.coverage, cptlName: this.state.cptl.name })

	this.setState({ redirect: true })}

    render() {

	let cptlDetails = [];
	let cptlName= null;
	let compDetails = [];
	let compName= null;
	let fpDetails = [];
	let fpName= null;
	let cptlCost = null;
	let compCost = null;
	let fpCost = null;
	let selectCptl = null;
	let selectComp = null;
	let selectFp = null;

	if (this.state.cptl !== null){
		cptlDetails = this.state.cptl.coverage;
		cptlName= this.state.cptl.name;
	}
	if (this.state.comp !== null){
		compDetails = this.state.comp.coverage;
		compName= this.state.comp.name;
	}

	if (this.state.fp !== null){
		fpDetails = this.state.fp.coverage;
		fpName= this.state.fp.name;
	}
	if(this.state.cptlCost!==null){
		cptlCost = this.state.cptlCost;
	}
	if(this.state.cost!==null){
		compCost = this.state.cost.cost;
		fpCost = this.state.cost.cost + 3000;
	}

if (this.state.cptlDiv){
	selectCptl = 'selected';
	selectComp = null;

 }

 if (this.state.compDiv){
	 console.log('compDiv', this.state.compDiv);
	selectComp = 'selected';
	selectCptl = null;
	selectFp = null;
 } 
 
 if (this.state.fpDiv){
   selectFp = 'selected';
   selectComp = null;
   selectCptl = null;
} 


 if(this.state.uber){
	cptlCost = cptlCost+200;
	compCost = compCost+200;
	fpCost = fpCost+200;
	}
	if(this.state.road){
	cptlCost = cptlCost+200;
	compCost = compCost+200;
	fpCost = fpCost+200;
	}
	if(this.state.hotel){
	cptlCost = cptlCost+200;
	compCost = compCost+200;
	fpCost = fpCost+200;
	}
const { redirect } = this.state;
	 if (redirect) {
		   return <Redirect to='/thanks'/>;
	}
        return (
            <div>
                <section className= "container">
	                    <div className="row">
		                    <div className = "col-md-4">
			                <div className= "jumbotron coverage"  onClick={this.cptlDiv} id = {selectCptl}>
					            <h2 className= 'coverage_header'> Policy Name: {cptlName}</h2>
								<p>Cost : &#8369; {cptlCost} </p>
								<p> Coverage Amount : &#8369; </p>
								<h4> Coverage Details : </h4>
								<ul> {
									cptlDetails.map((cptlItems,key)=> {
										return (
											<li key = {key}>{cptlItems} </li> 
										)
									})
									}
								</ul>
			                </div>
                            </div>
							<div className = "col-md-4">
			                <div className= "jumbotron coverage" onClick={this.compDiv} id = {selectComp}>
					            <h2 className= 'coverage_header'> Policy Name: {compName}</h2>
								<p>Cost : &#8369; {compCost}</p>
								<p> Coverage Amount : &#8369; </p>
								<h4> Coverage Details : </h4>
								<ul> {
									compDetails.map((compItems,key)=> {
										return (
											<li key = {key}>{compItems} </li> 
										)
									})
									}
								</ul>
			                </div>
                            </div>
							<div className = "col-md-4">
			                <div className= "jumbotron coverage" onClick={this.fpDiv} id = {selectFp}>
					            <h2 className= 'coverage_header'> Policy Name: {fpName}</h2>
								<p>Cost : &#8369; {fpCost}</p>
								<p> Coverage Amount : &#8369;</p>
								<h4> Coverage Details : </h4>
								<ul> {
									fpDetails.map((fpItems,key)=> {
										return (
											<li key = {key}>{fpItems} </li> 
										)
									})
									}
								</ul>
			                </div>
                            </div>
	                    </div>
                </section>
<section className="container">
	<div className="row">
        <div className="col-md-6">
            <div className="card card-custom">
                <div className="card-body">
                    <h1 className="card-title text-center">Choose your ADD-ONS</h1>
                     <p className="card-text text-center">Sed vel bibendum urna, in blandit nunc. Praesent eget mauris auctor, efficitur justo sed, consectetur dolor. Cras aliquet mi vitae convallis luctus.</p>
                     <br />
                </div>
             </div>
         </div>

			<div className = "card">
			 <form className = "col-md-6">	
			  <input className="checkbox" type="checkbox" id="uber" name="uber" 
			  checked={this.state.uber} onChange={this.handleChangeUber}/>
			  <label htmlFor="uber" className="check-labels"> UBER ASSISTANCE - 200 PHP </label>
			  <input className="checkbox" type="checkbox" id="road" name="road"
			  checked={this.state.road} onChange={this.handleChangeRoad} />
			  <label htmlFor="road" className="check-labels"> ROAD ASSISTANCE - 200 PHP </label>
			  <input className="checkbox" type="checkbox" id="hotel" name="hotel"
			  checked={this.state.hotel} onChange={this.handleChangeHotel} />
			  <label htmlFor="hotel" className="check-labels"> HOTEL ASSISTANCE - 200 PHP </label>
			</form>
		</div>

		</div>
	</section>
	<CoverageForm onSubmit ={this.submit} />
	</div>);
	}
  }

 
 const mapStateToProps = (state, ownProps) => ({
    cover: state.cover,
});

const mapDispatchToProps = {
     saveCoverage
};

const CoverageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Coverage); 

export default CoverageContainer;