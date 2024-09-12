import { PersistGate } from "redux-persist/lib/integration/react";
import { RouterProvider } from "react-router-dom";
import store, { persistor } from "./store/store";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { router } from "./router";
import "./styles/main.scss";
import React from "react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
