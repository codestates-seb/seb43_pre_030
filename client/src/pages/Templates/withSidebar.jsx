import Nav from "../../layouts/Nav/Nav";
import Aside from "../../layouts/Aside/Aside";

function withSidebar(Component) {
  return function ({ children, ...rest }) {
    return (
      <>
        <Nav />
        <Component {...rest}>{children}</Component>
        <Aside />
      </>
    );
  };
}

export default withSidebar;
