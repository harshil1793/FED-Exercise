export class Series {
    heading: string;
    description: string;
    snippets: string[];
    locations: string[];
    videoEmbed: string;
    quote: Quote;
    gallery: Gallery[];
    episodeList: EpisodeList[];
    showDetails: ShowDetails;
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

export class ShowDetails {
    showType: string;
    overAllRating: number;
    genre: string[];
    director: string[];

    constructor() {
        this.showType = 'TV Series';
        this.overAllRating = 0;
        this.genre = ['Drama', 'Horror', 'Thriller'];
        this.director = ['Matt Duffer', 'Ross Duffer'];
    }
}