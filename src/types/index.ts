export type IState = {
  toggle: {
    value: boolean;
  };
};

export interface RbEvent {
  id: number,
  number: number,
  date: string,
  url: string,
  isShow: boolean,
  place: string,
}
