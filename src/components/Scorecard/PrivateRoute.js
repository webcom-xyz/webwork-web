import { Route, Redirect } from "react-router-dom";

export default function PrivateRoute({ component: Component, ...props }) {
  return (
    <Route
      {...props}
      render={(innerProps) =>
        localStorage.getItem("x-auth-token") ? (
          <Component {...innerProps} />
        ) : (
          <Redirect
            to={{
              pathname: "/sign-in",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
}
