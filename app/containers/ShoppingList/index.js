import React , { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import { Title } from '@shoutem/ui'
import ShoppingListComponent from '../../components/ShoppingListComponent/'

class ShoppingList extends Component  {
  constructor(props) {
    super(props)
  }

  handleData = () => {
    console.log('hey');
  }

  render() {
    return (
        <ShoppingListComponent
          data={ this.props.recipes }
          handleData={ this.handleData }
          title = { <Title>SHOPPING</Title> }
        />
    )
  }

}

const mapStatetoProps = (state) => {
  const newValues = [];
  Object.keys(state.recipes.recipe).forEach(el=>{
    newValues.push(state.recipes.recipe[el])
  })
  return {
      recipes: newValues
   }
}

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStatetoProps, mapDispatchToProps)(ShoppingList)
