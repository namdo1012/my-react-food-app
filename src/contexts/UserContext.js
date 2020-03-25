import React from "react";

const UserContext = React.createContext();

class UserProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Nam Do",
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

  render() {
    return (
      <UserContext.Provider
        value={{
          name: this.state.name,
          isLogin: this.state.isLogin,
          toLogin: this.toLogin,
          toLogout: this.toLogout
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export { UserProvider };
export default UserContext;
