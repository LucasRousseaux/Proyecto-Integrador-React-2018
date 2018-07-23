import axios from 'axios';
import {PUBLIC_KEY,PRIVATE_KEY} from './keys.js'
import md5 from 'js-md5'

class MarvelApis {

  constructor() {

    let ts = Date.now()
    let hash = md5(ts.toString()+PRIVATE_KEY+PUBLIC_KEY)

    this.axios =axios.create({
      baseURL: 'https://gateway.marvel.com',
      params: {
        apikey: PUBLIC_KEY,
        ts,
        hash,
      }
    })
  }

  getList = (type) => (
    this.axios.get(`/v1/public/${type}`).then(response => {
      return response.data.data.results
    })
  )

  getComics = () => (
    this.axios.get('/v1/public/comics').then(response => {
      return response.data.data.results
    })
  )

  getaComic = (comicId) => (
    this.axios.get(`/v1/public/comics/${comicId}`).then(response => {
      return response.data.data.results
    })
  )

  getComicCharacters = (comicId) => (
    this.axios.get(`/v1/public/comics/${comicId}/characters`).then(response => {
      return response.data.data.results
    })
  )

  getComicCreators = (comicId) => (
    this.axios.get(`/v1/public/comics/${comicId}/creators`).then(response => {
      return response.data.data.results
    })
  )

  getSeries = () => (
    this.axios.get('/v1/public/series').then(response => {
      return response.data.data.results
    })
  )

  getaSeries = (seriesId) => (
    this.axios.get(`/v1/public/series/${seriesId}`).then(response => {
      return response.data.data.results
    })
  )

  getSeriesCharacters = (seriesId) => (
    this.axios.get(`/v1/public/series/${seriesId}/characters`).then(response => {
      return response.data.data.results
    })
  )

  getSeriesCreators = (seriesId) => (
    this.axios.get(`/v1/public/series/${seriesId}/creators`).then(response => {
      return response.data.data.results
    })
  )

}

export default MarvelApis;
