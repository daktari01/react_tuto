import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      header: 'Header from state ...',
      content: 'Content from state ...'
    }
  }
  render(){
    return(
        <div>
          <h1>{this.props.headerProp}</h1>
          <h2>{this.props.contentProp}</h2>
        </div>
      );
  }
}
App.defaultProps = {
  headerProp: "Header from prop ...",
  contentProp: "Content from prop ..."
}
export default App;