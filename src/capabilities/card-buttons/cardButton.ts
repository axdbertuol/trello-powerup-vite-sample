import type { Trello } from "../../types/trello";
import type { CapabilityProps } from "../../types/power-up";
export function getCardButton(
  _t: Trello.PowerUp.IFrame,
  { props }: CapabilityProps
): Trello.PowerUp.CardButton[] {
  return (
    props &&
    Object.values(props).map(({ text, title, pathName }) => ({
      icon: "",
      text: text ?? "",
      callback: (tc: Trello.PowerUp.IFrame) =>
        tc.popup({
          title: title ?? "",
          url: `./powerup/card-buttons/${pathName}.html`,
          height: 300,
        }),
    }))
  );
}
