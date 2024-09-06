export default class BriefInformationMovie {
  id: string;
  name: string;
  alternativeName: string;
  type: string;
  year: number;
  posterUrl: string;
  isSeries: boolean;
  releaseYears: { start: number | null; end: number | null } = {
    start: null,
    end: null,
  };
  shortDescription: string;
  movieLength: number;
  genres: string[];
  countries: string[];
  ratingKp: number;
  ratingImdb: number;

  constructor(movie: Record<string, any>) {
    this.id = movie['id'];
    this.name = movie['name'];
    this.alternativeName = movie['alternativeName'];
    this.type = movie['type'];
    this.year = movie['year'];
    if (movie['poster']) {
      this.posterUrl = movie['poster']['previewUrl'] || 'placeholder-movie.svg';
    } else {
      this.posterUrl = 'placeholder-movie.svg';
    }
    this.isSeries = movie['isSeries'];
    if (this.isSeries && movie['releaseYears']) {
      this.releaseYears.start = movie['releaseYears'][0]['start'];
      this.releaseYears.end =
        movie['releaseYears'][movie['releaseYears'].length - 1]['end'];
    }
    this.shortDescription = movie['shortDescription'];
    this.movieLength = movie['movieLength'];
    this.genres = movie['genres']?.map((elem: { name: string }) => elem.name);
    this.countries = movie['countries']?.map(
      (elem: { name: string }) => elem.name
    );
    this.ratingKp = movie['rating']['kp'];
    this.ratingImdb = movie['rating']['imdb'];
  }
}
