export type FilterParams = {
  genres?: string[] | null;
  countries?: string[] | null;
  year?: string | null;
  ratings?: {
    mpaa?: string | null;
    kp?: string | null;
    imdb?: string | null;
  };
};
