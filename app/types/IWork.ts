export default interface IWork {
  id: number;
  title: string;
  business: string | null;
  client: string | null;
  imgUrl: string;
  desc: string | JSX.Element | null;
  myRole: string[];
  stack: string[];
  gitUrl: string | null;
  liveUrl: string | null;
  designUrl: string | null;
}
