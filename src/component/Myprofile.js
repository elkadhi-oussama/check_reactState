import React from 'react';
import {Person} from './Profile'

  class Myprofile extends React.Component {
    state= {Person,
      date: new Date()}
    tick() {
      this.setState({
       date: new Date()
      });
    }
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }

    componentWillUnmount() {
      clearInterval(this.timerID);
    }

    render() {
    return (
      <>
      <h1>Hello {this.state.Person.fullName}</h1>
      <img style={{width: '800px', height:'500px'}} src={this.state.Person.imgSrc} alt='oussama'/> <br/>
      <h4>Time : {this.state.date.toLocaleTimeString()}</h4>

      </>
    )
    }
  }

export default Myprofile