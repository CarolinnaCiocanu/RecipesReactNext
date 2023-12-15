import axios from "axios";
import { applyMiddleware, createStore } from "redux";
import { multiClientMiddleware } from "redux-axios-middleware";
import { apiHost } from "@server/server.config";
import rootReducer from "@redux/rootReducer";
import { createWrapper } from "next-redux-wrapper";

const apiClients = {
  default: {
    client: axios.create({
      crossDomain: true,
      baseURL: apiHost,
      responseType: "json",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-LANG": "ro",
        Authorization: "aa99d10d347eeea13e7959be4320b0c1",
      },
    }),
  },
};

const middleware = applyMiddleware(multiClientMiddleware(apiClients, {}));

export const store = createStore(rootReducer, {}, middleware);
const makeStore = () => store;

export const wrapper = createWrapper(makeStore, { debug: false });
