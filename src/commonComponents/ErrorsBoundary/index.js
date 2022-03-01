import React, { PureComponent } from "react";
import { Loader } from "../Loader";

class ErrorsBoundary extends PureComponent {
  state = {
    isError: false,
  };
  static getDerivedStateFromError() {
    return {
      isError: true,
    };
  }
  componentDidCatch(error, errorInfo) {
    console.log(`Error: ${error}`);
    console.log(errorInfo);
  }
  render() {
    return <>{this.state.isError ? <Loader /> : this.props.children}</>;
  }
}
export default ErrorsBoundary;
