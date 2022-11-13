//API header files
export const exerciseOptions =  {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'e020821d1bmshae0cd8d04956914p1058a9jsnafe277244949',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

export const youtubeOptions =  {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const BMIOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e020821d1bmshae0cd8d04956914p1058a9jsnafe277244949',
		'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
	}
};



export const fetchData = async (url, options) => {
    const response  = await fetch(url, options);
    const data = await response.json();
    return data;
};
