// export interface Work {
//   id: number;
//   title: string;
//   business: string | null;
//   client: string | null;
//   imgUrl: string;
//   desc: string | JSX.Element | null;
//   myRole: string[];
//   stack: string[];
//   gitUrl: string | null;
//   liveUrl: string | null;
//   designUrl: string | null;
// }

export interface Work {
  id: number;
  date: string;
  date_gmt: string;
  guid: {
    rendered: string;
  };
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  excerpt: {
    rendered: string;
    protected: boolean;
  };
  author: 1;
  featured_media: number;
  template: string;
  meta: {
    subtitle: string;
    code: string;
    design: string;
    live: string;
    industry: string;
  };
  categories: number[];
  tags: number[];
  _links: {
    self: [
      {
        href: string;
      }
    ];
    collection: [
      {
        href: string;
      }
    ];
    about: [
      {
        href: string;
      }
    ];
    author: [
      {
        embeddable: boolean;
        href: string;
      }
    ];
    "wp:featuredmedia": [
      {
        embeddable: boolean;
        href: string;
      }
    ];
    "wp:attachment": [
      {
        href: string;
      }
    ];
    "wp:term": [
      {
        taxonomy: string;
        embeddable: boolean;
        href: string;
      },
      {
        taxonomy: string;
        embeddable: boolean;
        href: string;
      }
    ];
    curies: [
      {
        name: string;
        href: string;
        templated: boolean;
      }
    ];
  };
}
