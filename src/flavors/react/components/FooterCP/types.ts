export type ElementEventType =
  | 'button'
  | 'button/text'
  | 'button/icon'
  | 'button/image'
  | 'link'
  | 'link/text'
  | 'link/icon'
  | 'link/image'
  | 'card'
  | 'card/button'
  | 'card/text'
  | 'card/icon'
  | 'card/image'
  | 'tab'
  | 'content'
  | 'accordion';

export type ElementEventPayload = {
  elementType?: ElementEventType;
  htmlId?: string;
  location?: string;
  name?: string;
  position?: string;
  text?: string;
};
