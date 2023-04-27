import Footer from "../../layouts/Footer/Footer";

function withFooter(Component) {
  return function ({ children, ...rest }) {
    return (
      <>
        <Component {...rest}>{children}</Component>
        <Footer />
      </>
    );
  };
}

export default withFooter;
