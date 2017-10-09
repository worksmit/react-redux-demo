import React from 'react'
import UserForm from './UserForm'
import { Redirect } from 'react-router'

class UserPage extends React.Component {
  state = {
    redirect: false
  }


  submit = (values) => {
    // print the form values to the console
    console.log(values);

    this.setState({ redirect: true })

  }
  render() {

    const { redirect } = this.state;

     if (redirect) {
       return <Redirect to='/thanks'/>;
     }


    return (
      <UserForm onSubmit={this.submit} />
    )
  }
}

export default UserPage;