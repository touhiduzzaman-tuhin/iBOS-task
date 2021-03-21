import { createStore } from "redux";
import { rootStore } from "../rootStore/rootStore";

export const store = createStore(rootStore)