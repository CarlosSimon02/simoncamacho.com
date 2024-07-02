declare module "jolty" {
  // Constants
  export const EVENT_BEFORE_SHOW: string;
  export const EVENT_SHOW: string;
  export const EVENT_SHOWN: string;
  export const EVENT_BEFORE_HIDE: string;
  export const EVENT_HIDE: string;
  export const EVENT_HIDDEN: string;
  export const DEFAULT_OPTIONS: Record<string, any>;
  export const STATE_MODE: string;
  export const POPOVER_API_MODE_MANUAL: string;
  export const POPOVER: string;
  export const ACTION_REMOVE: string;
  export const HIDDEN: string;
  export const ROLE: string;
  export const ARIA_LIVE: string;
  export const ALERT: string;
  export const STATUS: string;
  export const ARIA_ATOMIC: string;
  export const A11Y: string;
  export const TABINDEX: string;
  export const REGION: string;
  export const CLASS_ACTIVE_SUFFIX: string;
  export const CLASS_ACTIVE: string;
  export const DISMISS: string;
  export const UI_PREFIX: string;

  // Helper functions
  export function isArray(value: any): boolean;
  export function isObject(value: any): boolean;
  export function isString(value: any): boolean;
  export function fragment(html: string): DocumentFragment;
  export function inDOM(element: HTMLElement): boolean;
  export function toggleClass(
    element: HTMLElement,
    className: string,
    state: boolean
  ): void;
  export function normalizeToggleParameters(params: any): any;
  export function arrayFrom<T>(arrayLike: any): T[];
  export function getEventsPrefix(prefix: string): string;
  export function callOrReturn<T>(fn: (() => T) | T): T;
  export function getOptionElem(context: any, option: any): HTMLElement | null;
  export function isShown(element: HTMLElement, stateMode: string): boolean;
  export function awaitPromise(
    promise: Promise<any>,
    callback: () => void
  ): void;
  export function isPopoverApiSupported(): boolean;
  export function addDismiss(context: any): void;
  export function toggleStateMode(state: boolean, context: any): void;
  export function baseDestroy(context: any, options: any): void;
  export function callShowInit(context: any): void;
  export function updateModule(
    context: any,
    module: string,
    state: boolean,
    defaults: any
  ): any;

  // Classes
  export class Base {
    base: HTMLElement;
    id: string;
    isInit: boolean;
    constructor(elem: any, opts?: any);
  }

  export class ToggleMixin extends Base {
    static Default: any;
    static DefaultA11y: any;
    static _templates: any;
    constructor(elem: any, opts?: any);
    static addPosition(position: any, container?: string): void;
    static container(name: string, opts?: any): void;
    static forceTopLayer(): void;
    static getContainer(params: any): HTMLElement;
    static template(
      name: ({
        autohide,
        content,
        dismiss,
        type
      }: {
        autohide: any;
        content: any;
        dismiss: any;
        type: any;
      }) => string | string,
      opts?: any
    ): void;
    _update(): void;
    destroy(destroyOpts: any): void;
    init(): void;
    toggle(s: any, params: any): Promise<void>;
  }

  export class Transition {
    static createOrUpdate(
      transition: Transition | undefined,
      base: HTMLElement,
      opts?: any
    ): Transition;
    run(state: boolean, animated: boolean): Promise<void>;
  }

  export class Autoaction {
    static createOrUpdate(
      autohide: Autoaction | undefined,
      base: HTMLElement,
      hide: () => void,
      opts?: any
    ): Autoaction;
    toggleInterections(state: boolean): void;
  }

  export class Toast extends ToggleMixin {
    static Default: any;
    static DefaultA11y: any;
    static _templates: any;
    constructor(elem: any, opts?: any);
    static addPosition(position: any, container?: string): void;
    static container(name: string, opts: any): void;
    static forceTopLayer(): void;
    static getContainer(params: any): HTMLElement;
    static template(
      name: ({
        autohide,
        content,
        dismiss,
        type
      }: {
        autohide: any;
        content: any;
        dismiss: any;
        type: any;
      }) => string | string,
      opts?: any
    ): void;
    _update(): void;
    destroy(destroyOpts: any): void;
    init(): void;
    toggle(s: any, params: any): Promise<void>;
  }
}
