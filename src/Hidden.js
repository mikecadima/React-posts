// import React from 'react'
// import Data from "./data.json";

// class Hidden extends React.Component {
//     state = {
//       person: {
//         id: 'id',
//         title: 'title',
//         body: 'body'
//       },
//       showPerson: false
//     }
  
//     togglePersonHandler = () => {
//     const isVisible = this.state.showPerson;
//     this.setState({
//       showPerson: !isVisible
//       });
//     }
    
//     render() {
//       let person = null;
//       if (this.state.showPerson) {
//         person = (
//       Data.map(post=>{ 

//         <div className="personCard">
//           <p>id: {this.state.person.id}</p>
//           <p>title: {this.state.person.title}</p>
//           <p>body: {this.state.person.body}</p>
//         </div>
//       )
//     }
      
//       return (
//         <div className="container">
//           <button 
//             className="btn"
//             onClick={this.togglePersonHandler}>
//               Display
//           </button>
//           <div>{person}</div>
//         </div>
//       )
//     }
//   }
// }
  

//   export default Hidden;