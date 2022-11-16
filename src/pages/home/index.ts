import { getCardButton } from "../../capabilities/card-buttons/cardButton";
import type { CapabilityProps } from "../../types/power-up";
import type { Trello } from "../../types/trello";
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
export const ButtonProps = typeof data;
const CAPABILITY_PROPS: CapabilityProps = {
  baseUrl: window.location.href.replace(/\/$/, ""),
  props: ButtonProps,
};

const noteProps = {
  ...CAPABILITY_PROPS,
  ...data.note,
};
window.TrelloPowerUp.initialize(
  {
    "card-buttons": (t: Trello.PowerUp.IFrame) => getCardButton(t, noteProps),
  },
  {
    appKey: "a7796f80ef1f06c59586adf5f9ad4cf2",
    appName: "teste vite vue powerup",
  }
);
