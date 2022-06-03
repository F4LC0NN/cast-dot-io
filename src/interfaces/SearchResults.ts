interface SearchResults {
  time: string,
  time_epoch: number,
  temp_c: number,
  temp_f: number,
  condition: {
    icon: string,
    text: string,
  },
  feelslike_c: string,
  feelslike_f: string,
  humidity: number,
  wind_kph: number,
  wind_mph: number,
  wind_dir: string,
}

export default SearchResults;
