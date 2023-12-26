import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ChristmasPopupProps = typeof __propDef.props;
export type ChristmasPopupEvents = typeof __propDef.events;
export type ChristmasPopupSlots = typeof __propDef.slots;
export default class ChristmasPopup extends SvelteComponent<ChristmasPopupProps, ChristmasPopupEvents, ChristmasPopupSlots> {
}
export {};
