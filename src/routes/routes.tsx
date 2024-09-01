import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../page/Home";
import Privacypolicy from "../page/PrivacyPolicy/Privacypolicy";
import Termsandconditions from "../page/TermsandConditions/Termsandconditions";
import Refundpolicy from "../page/refundpolicy/Refundpolicy";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/privacy-policy",
        element: <Privacypolicy />,
      },
      {
        path: "/terms-and-conditions",
        element: <Termsandconditions />,
      },
      {
        path: "/refund-policy",
        element: <Refundpolicy />,
      },
    ],
  },
]);