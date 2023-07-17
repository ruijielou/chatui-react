// import { connect } from "react-redux";
import { HashRouter } from "react-router-dom";
import Router from "./router"
import '@chatui/core/es/styles/index.less';

const App = () => {
  return (
    <HashRouter>
      {/* <RouterProvider router={router} /> */}
      <Router />
    </HashRouter>
  );
};

export default App;
// const mapStateToProps = (state: any) => state.global;
// const mapDispatchToProps = {};
// export default connect(mapStateToProps, mapDispatchToProps)(App);
