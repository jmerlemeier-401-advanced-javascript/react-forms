import React from 'react';
import { connect } from 'react-redux';
import { actions } from '../store/user/user-actions';
import { actions } from '../store/messages/messages-action';

import schema from '../store/schema.json';

class App extends React.Component {

  // addUser = (e) => {
  //   e.preventDefault();
  //   let users = ['bob', 'karen'];
  //   let newUser = 'I.P. Daily';
  //   // let newUserId = 1234;
  //   users.push(newUser);
  //   this.props.handleSubmit(newUser);
  //   console.log(users);
  // }

  render() {
    return (
      <>
        <form onSubmit={this.addUser}>
        <input type="username" placeholder="username" />
        <input type="submit" value="login" onClick={this.props.handleSubmit}/>
        </form>

        <div>
          <ul>
            {this.props.messages.map(message => <li>{message.text}</li>)}
          </ul>
          <Form 
            schema={schema}
            formData={{id: }}
            onSubmit={}
          />

        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  //this function gets passed an object called state which can be used to attach properties onto component props
  user: state.user,
  messages: state.message
});

const mapDispatchToProps = (dispatch, getState) => ({
  //this function gets passed a function called dispatch which can be called actions for the reducer.
  //payload is passed into login.
  handleSubmit: () => dispatch(actions.login({username: 'test'})),
  logout: ()=> dispatch(actions.logout()),

  handlePost: (message) = dispatch(actions.post(message))
});

// curried functions 
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
