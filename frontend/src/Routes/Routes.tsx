import { Route } from "react-router-dom";
import SignIn from "../pages/Authentication/SignIn";
import SignUp from "../pages/Authentication/SignUp";

import PageTitle from "../components/PageTitle";
import ECommerce from "../pages/Dashboard/ECommerce";
import Calendar from "../pages/Calendar";
import Profile from "../pages/Profile";
import FormElements from "../pages/Form/FormElements";
import FormLayout from "../pages/Form/FormLayout";
import Tables from "../pages/UserList";
import Settings from "../pages/Settings";
import Chart from "../pages/Chart";
import Alerts from "../pages/UiElements/Alerts";
import Buttons from "../pages/UiElements/Buttons";
import React from "react";

type Props = {
  title: string;
  element: any;
  layout: any;
  [key: string]: any; // To allow any additional props
}

const RouteWithPageTitle = ({ title, element, ...rest }: Props) => (
  <Route
    {...rest}
    element={
      <>
        <PageTitle title={title} />
        {element}
      </>
    }
  />
);

const routes = [
  // Routes with DefaultLayout
  { path: "/", title: "eCommerce Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template", component: <ECommerce />, index: true },
  { path: "/calendar", title: "Calendar | TailAdmin - Tailwind CSS Admin Dashboard Template", component: <Calendar /> },
  { path: "/profile", title: "Profile | TailAdmin - Tailwind CSS Admin Dashboard Template", component: <Profile /> },
  { path: "/forms/form-elements", title: "Form Elements | TailAdmin - Tailwind CSS Admin Dashboard Template", component: <FormElements /> },
  { path: "/forms/form-layout", title: "Form Layout | TailAdmin - Tailwind CSS Admin Dashboard Template", component: <FormLayout /> },
  { path: "/tables", title: "Tables | TailAdmin - Tailwind CSS Admin Dashboard Template", component: <Tables /> },
  { path: "/settings", title: "Settings | TailAdmin - Tailwind CSS Admin Dashboard Template", component: <Settings /> },
  { path: "/chart", title: "Basic Chart | TailAdmin - Tailwind CSS Admin Dashboard Template", component: <Chart /> },
  { path: "/ui/alerts", title: "Alerts | TailAdmin - Tailwind CSS Admin Dashboard Template", component: <Alerts /> },
  { path: "/ui/buttons", title: "Buttons | TailAdmin - Tailwind CSS Admin Dashboard Template", component: <Buttons /> },
  
  // Routes without DefaultLayout (auth routes)
  { path: "/auth/signin", title: "Signin | TailAdmin - Tailwind CSS Admin Dashboard Template", component: <SignIn />, layout: React.Fragment },
  { path: "/auth/signup", title: "Signup | TailAdmin - Tailwind CSS Admin Dashboard Template", component: <SignUp />, layout: React.Fragment }
];

const customRouter = () => {
  // Render the routes
  return  (
    <>
      {routes.map(({ path, title, component, index, layout }) => (
        <RouteWithPageTitle
          key={path || "index"}
          path={path}
          index={index}
          title={title}
          element={component}
          layout={layout}
        />
      ))}
    </>
  );
}

export default customRouter;
