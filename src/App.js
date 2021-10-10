import ThemeProvider from "@material-ui/styles/ThemeProvider";
import { Suspense, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import theme from "./configs/theme";
import MessageAlert from "./containers/Message";
import { routes } from "./configs/router";
import Loading from "./components/Custom/Loading";
import NotFoundPage from "./pages/NotFound";
import Navigation from "./components/Navigation";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./redux/reducers/user.reducer";

const extractRoutes = routes.map((route, index) => {
  const { path, exact, component } = route;
  return <Route path={path} exact={exact} key={index} component={component} />;
});

function App() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.user);
  // dispatch to get user before get page
  useEffect(() => {
    dispatch(getUser());
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        // ThemeProvider to the top level of component tree.
        // theme is used for all child components.
        <ThemeProvider theme={theme}>
          {/* Routing */}
          <BrowserRouter>
            <Navigation />

            {/* Suspense lets your components “wait” for something before they can render. */}
            <Suspense fallback={<Loading />}>
              <Switch>
                {extractRoutes}
                <Route>
                  <NotFoundPage />
                </Route>
              </Switch>
            </Suspense>
          </BrowserRouter>
          {/* <div id="_overlay"></div> */}
          <MessageAlert />
        </ThemeProvider>
      )}
    </>
  );
}

export default App;
