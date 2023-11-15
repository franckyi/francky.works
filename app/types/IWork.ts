export default interface IWork {
  title: string;
  category: string;
  imgUrl: string;
  desc: string;
  client: string | null;
  myRole: string[];
  stack: string[];
  gitUrl: string | null;
  liveUrl: string | null;
}
