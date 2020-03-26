import React from "react";

const UserContext = React.createContext();

class UserProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Nam Do",
      email: "",
      isLogin: false
    };
    this.toLogin = this.toLogin.bind(this);
    this.toLogout = this.toLogout.bind(this);
  }

  toLogin = () => {
    this.setState({ isLogin: true });
  };

  toLogout = () => {
    this.setState({ isLogin: false });
  };

  getEmail = newEmail => {
    // debugger;
    this.setState({ email: newEmail });
  };

  render() {
    return (
      <UserContext.Provider
        value={{
          name: this.state.name,
          email: this.state.email,
          isLogin: this.state.isLogin,
          toLogin: this.toLogin,
          toLogout: this.toLogout,
          getEmail: this.getEmail
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export { UserProvider };
export default UserContext;
