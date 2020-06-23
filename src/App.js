// import React from 'react';
// import logo from './logo.svg';
// import MenuComponent from './components/MenuComponent';
// import {Navbar,NavbarBrand} from 'reactstrap';
// import './App.css';
// import DISHES from './shared/dishes';

// function App() {
//   return (
//     <div className="App">
//       <Navbar dark color="primary">
//         <div className="container">
//           <NavbarBrand href="/">Reatorante Con Fusionbg </NavbarBrand>
//         </div>
//       </Navbar>
//       <MenuComponent/>
//     </div>
//   );
// }

// export default App;



import React, { Component } from 'react'
import logo from './logo.svg';
import MenuComponent from './components/MenuComponent';
import {Navbar,NavbarBrand} from 'reactstrap';
import './App.css';
import { DISHES } from './shared/dishes';


export class App extends Component {
  constructor(props){
    super(props);

    this.state={
      dishes: DISHES
    };
  }

  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Reatorante Con Fusionbg </NavbarBrand>
          </div>
        </Navbar>
        <MenuComponent dishes={this.state.dishes} />
      </div>
    );
  }
}

export default App
