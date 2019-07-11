import { config } from '../../config';

const { api_radio_fm } = config;

// console.log(api_radio_fm)

const URL = `https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=venezuela&api_key=${api_radio_fm}&format=json`

async function getArtists() {
    try{
        let result = await fetch(URL)
        let data = await result.json();
        return data.topartists.artist
    }catch(e){
       return e
    }

}

export default getArtists