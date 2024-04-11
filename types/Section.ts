export default interface Section {
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
  author: number;
  featured_media: number;
  template: string;
  meta: {
    full_name: string;
    job_position: string;
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
