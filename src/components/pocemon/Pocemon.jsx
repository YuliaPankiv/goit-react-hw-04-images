// import React, { Component } from 'react';

// export default class Pocemon extends Component {
//   state = {
//     pokemon: null,
//     loading: false,
//   };
//   async componentDidMount() {
//     this.setState({ loading: true });
//     fetch('https://pokeapi.co/api/v2/pokemon/ditto')
//       .then(res => res.json())
//       .then(pokemon => this.setState({ pokemon }))
//       .finally(() => this.setState({ loading: false }));
//   }

//   render() {
//     return (
//       <>
//         {this.state.loading && <h1>Loadidg...</h1>}
//         {this.state.pokemon && <div>{this.state.pokemon.name}</div>}
//       </>
//     );
//   }
// }
