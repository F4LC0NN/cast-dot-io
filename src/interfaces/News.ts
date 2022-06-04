import { AxiosResponse } from 'axios';

interface News {
  data: AxiosResponse['data'];
}

interface Article {
  title: string,
  byline: string,
  created_date: string,
  first_published_date: string,
  updated_date: string,
  thumbnail_standard: string,
  source: string,
  url: string,
  multimedia: [
    {
      url: string,
      caption: string,
      copyright: string,
    },
    {
      url: string,
      caption: string,
      copyright: string,
    },
    {
      url: string,
      caption: string,
      copyright: string,
    },
    {
      url: string,
      caption: string,
      copyright: string,
    },
  ],
}

export type { News, Article };
