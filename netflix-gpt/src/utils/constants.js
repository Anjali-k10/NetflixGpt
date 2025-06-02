export const API_Options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.REACT_APP_API_AUTH_TOKEN}`
  }
};

export const Gemini_API_Key = process.env.REACT_APP_GEMINI_API_KEY;

export const IMG_CON_URL = "https://image.tmdb.org/t/p/w500";
export const defaultPhoto = "https://static.vecteezy.com/system/resources/previews/000/550/731/original/user-icon-vector.jpg";
export const backgroundImg = "https://assets.nflxext.com/ffe/siteui/vlv3/e3e9c31f-aa15-4a8f-8059-04f01e6b8629/web/IN-en-20250113-TRIFECTA-perspective_febfa442-23d9-45f3-937e-72f8b971f7a9_medium.jpg";
export const NetflixLogo = 'https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png';
export const SupportedLang = [{ identifier: "en", name: "English" }, { identifier: "hindi", name: "Hindi" }];
export const TMDB_SEARCH_API = "https://api.themoviedb.org/3/search/movie?query=";



//   console.log('API Auth Token:', process.env.REACT_APP_API_AUTH_TOKEN);
// console.log('Gemini API Key:', process.env.REACT_APP_GEMINI_API_KEY);
