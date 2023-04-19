import withNav from "./withNav";
import withAside from "./withAside";

const withSidebar = Component => withNav(withAside(Component));

export default withSidebar;
