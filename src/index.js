import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

import { Layout } from "./commonComponents/Layout";
import { Router } from "./routes/Router";
import { Loader } from "./commonComponents/Loader";

import { configureStore } from "./store/configureStore";

import "./index.css";

const store = configureStore();
const persistor = persistStore(store);

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={persistor}>
        <BrowserRouter>
          <Layout>
            <Router />
          </Layout>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>,
  document.getElementById("root")
);
