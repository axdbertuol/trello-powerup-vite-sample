import type { Trello } from "../../types/trello";
import type { CapabilityProps } from "../../types/power-up";

export function getCardButton(
  _t: Trello.PowerUp.IFrame,
  { props }: CapabilityProps
): Trello.PowerUp.CardButton[] {
  console.log(props);
  if (!props) return [];
  return Object.values(props).map((data) => ({
    icon: "",
    text: data?.text ?? "",
    callback: (tc: Trello.PowerUp.IFrame) =>
      tc.popup({
        title: data?.title ?? "",
        url: `./powerup/card-buttons/${data?.pathName}.html`,
        height: 300,
      }),
  }));
}
