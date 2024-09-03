export default class BriefInformationMovie {
  id: string;
  name: string;
  alternativeName: string;
  year: number;
  posterUrl: string;
  isSeries: boolean;
  movieLength: number;
  genres: string[];
  countries: string[];
  ratingKp: number;
  ratingImdb: number;

  constructor(movie: Record<string, any>) {
    this.id = movie['id'];
    this.name = movie['name'];
    this.alternativeName = movie['alternativeName'];
    this.year = movie['year'];
    this.posterUrl = movie['poster']['previewUrl'] || 'placeholder-movie.svg';
    this.isSeries = movie['isSeries'];
    this.movieLength = movie['movieLength'];
    this.genres = movie['genres'].map((elem: { name: string }) => elem.name);
    this.countries = movie['countries'].map(
      (elem: { name: string }) => elem.name
    );
    this.ratingKp = movie['rating']['kp'];
    this.ratingImdb = movie['rating']['imdb'];
  }
}
