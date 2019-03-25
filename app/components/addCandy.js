import React from './react';

class addCandyForm extends React.component {



  render(){
  return (
    <div>
    <form onSubmit={props.handleSubmit}>
      <label htmlFor="name">Name: </label>
      <input type="text" name="name" value=""></input>
    </form>
    </div>
  )
  }
}

}