export class Series {
    heading: string;
    description: string;
    snippets: string[];
    locations: string[];
    videoEmbed: string;
    quote: Quote;
    gallery: Gallery[];
    episodeList: EpisodeList[];
}

export class Quote {
    text: string;
    author: string;
}

export class Gallery {
    src: string;
    text: string;
}

export class EpisodeList{
    season: number;
    name: string;
    rating: number;
}