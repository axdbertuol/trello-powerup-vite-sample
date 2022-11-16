import { getCardButton } from "../../capabilities/card-buttons/cardButton";
import type { CapabilityProps } from "../../types/power-up";
import type { Trello } from "../../types/trello";

export type ButtonProp = {
  text: "string";
  title: "string";
  pathName: "note";
};

export type ButtonProps = Record<string, ButtonProp>;
const data = {
  note: {
    text: "Add a note",
    title: "Add a note",
    pathName: "note",
  },
  manage: {
    text: "nab age a note",
    title: "nab age a note",
    pathName: "manage",
  },
};

const CAPABILITY_PROPS: CapabilityProps = {
  baseUrl: window.location.href.replace(/\/$/, ""),
  props: data as ButtonProps,
};

window.TrelloPowerUp.initialize(
  {
    "card-buttons": (t: Trello.PowerUp.IFrame) =>
      getCardButton(t, CAPABILITY_PROPS),
  },
  {
    appKey: "a7796f80ef1f06c59586adf5f9ad4cf2",
    appName: "teste vite vue powerup",
  }
);
