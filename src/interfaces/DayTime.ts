interface DayTime {
  time_epoch: number,
  time: string,
  temp_c: number,
  temp_f: number,
  uv: number,
  humidity: number,
  feelslike_c: number,
  feelslike_f: number,
  vis_km: number,
  vis_miles: number,
  wind_dir: string,
  condition: {
    icon: string,
    text: string,
  }
}

export default DayTime;
