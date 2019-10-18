import React, { Component } from 'react'
import './App.css'
const foods = [
  {
    name: "Xôi gà",
    price: 10000
  },
  {
    name: "Bánh mì",
    price: 50000
  }
]
const styles = {
  main: {
    display: 'block',
    width: '25%',
    margin: '50px auto'
  },
  form: {
    marginBottom: "50px"
  }
}
class App extends Component {
  constructor(props){
    super(...arguments);
    this.state = {foods,
    currentSearchItems: [],
    searching: false
    }
  }
  addClick = () => {
    var name = document.getElementsByName("name")[0].value
    var price = parseInt(document.getElementsByName("price")[0].value)
    var foods = [...this.state.foods, {name: name, price: price}]
    this.setState({foods ,searching: false})
  }
  search = () => {
    var search = document.getElementsByName("search")[0].value;
    
    var currentSearchItems = this.state.foods.filter(food => {
      return food.name.includes(search)
    })
    if(search == ''){
      this.setState({searching: false})
    }
    this.setState({currentSearchItems,
    searching: true
    })
  }
  render() {
    return (
      <div style={styles.main}>
      <table>
        <tr>
          <th>Tên</th>
          <th>Giá</th>
        </tr>
        {
          
      this.state.searching ?
      
      this.state.currentSearchItems.map((food,i)=>{
        return <tr key={i}>
        <td>{food.name}</td>
        <td>{food.price}</td>
      </tr>
      })
      
      :
      
      this.state.foods.map((food,i) => {

        return ( <tr key={i}>
        <td>{food.name}</td>
        <td>{food.price}</td>
      </tr>)
      })
    
        }
      </table>
      <div>
      <form style={styles.form} action="">
        <input type="text" className="w3-input" name="name" placeholder="name"/>
        <input type="text" className="w3-input" name="price" placeholder="price"/>
        <input type="button" className="w3-btn w3-red" onClick={this.addClick} value="Add"></input>
      </form>
      <input type="text" className="w3-input" name="search" placeholder="search"/>
      <input type="button" className="w3-btn w3-blue" onClick={this.search} value="Search"></input>

      </div>
      </div>
    )
  }
}
export default App;