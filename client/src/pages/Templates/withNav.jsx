import Nav from "../../layouts/Nav/Nav";

function withNav(Component) {
  return function ({ children, rest }) {
    return (
      <>
        <Nav />
        <Component {...rest}>{children}</Component>
      </>
    );
  };
}

export default withNav;
