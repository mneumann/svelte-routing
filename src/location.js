import { getContext } from "svelte";
import { LOCATION } from "./contexts.js";

export function getLocation() {
  return getContext(LOCATION);
}
