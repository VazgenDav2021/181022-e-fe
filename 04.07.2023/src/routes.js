import { Route } from "react-router-dom";
import {
  HomePage,
  CategoryPage,
  DetailedProductPage,
  CartPage,
  AboutPage,
  ContactPage,
  NewPage,
  ManuFacturesPage,
  DeliveryPage,
  OplataPage,
} from "./pages";

export const routes = [
  {
    path: "/",
    name: "MainPage",
    element: HomePage,
    exact: true,
  },

  {
    path: "/categroy/:categoryName/:subCategoryName",
    name: "CategoryPage",
    element: CategoryPage,
  },

  {
    path: "/product/:id",
    name: "DetailedProductPage",
    element: DetailedProductPage,
  },

  {
    path: "/cart",
    name: "CartPage",
    element: CartPage,
  },

  {
    path: "/about",
    name: "AboutPage",
    element: AboutPage,
  },

  {
    path: "/contacts",
    name: "ContactPage",
    element: ContactPage,
  },

  {
    path: "/new",
    name: "NewPage",
    element: NewPage,
  },

  {
    path: "/manufactures",
    name: "ManuFacturesPage",
    element: ManuFacturesPage,
  },

  {
    path: "/delivery",
    name: "DeliveryPage",
    element: DeliveryPage,
  },

  {
    path: "/oplata",
    name: "OplataPage",
    element: OplataPage,
  },
];

// export const renderRoutes = (routeProps = {}) => {
//   return routes.map((route) => {
//     return (
//       <Route
//         key={route.name}
//         path={route.path}
//         exact={route.exact}
//         render={(props) => {
//           if (route.element) {
//             return (
//               <route.element {...routeProps} {...props} route={route.routes} />
//             );
//           }

//           return null;
//         }}
//       />
//     );
//   });
// };
