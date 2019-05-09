import Fetch from 'node-fetch'

const PEOPLE_URI = `https://swapi.co/api/people`
const PLANETS_URI = `https://swapi.co/api/planets`
const STARSHIPS_URI = `https://swapi.co/api/starships`

const combineUri = (uri: string, id: number) => `${uri}/${id}`

const buildPersonUri = (id: number) => combineUri(PEOPLE_URI, id)
const buildPlanetUri = (id: number) => combineUri(PLANETS_URI, id)
const buildStarshipUri = (id: number) => combineUri(STARSHIPS_URI, id)

export const getPeople = async () => await Fetch(PEOPLE_URI).then(res => res.json())
export const getPlanets = async () => Fetch(PLANETS_URI).then(res => res.json())
export const getStarships = async () => Fetch(STARSHIPS_URI).then(res => res.json())

export const getPerson = async (id: number) => Fetch(buildPersonUri(id)).then(res => res.json())
export const getPlanet = async (id: number) => Fetch(buildPlanetUri(id)).then(res => res.json())
export const getStarship = async (id: number) => Fetch(buildStarshipUri(id)).then(res => res.json())
