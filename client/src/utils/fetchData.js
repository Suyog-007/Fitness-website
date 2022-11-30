export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '4d0a03ca0dmsh7859b370c28df66p1bc75cjsne0ccad53d0e6',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '4d0a03ca0dmsh7859b370c28df66p1bc75cjsne0ccad53d0e6',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const BMIOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '4d0a03ca0dmsh7859b370c28df66p1bc75cjsne0ccad53d0e6',
    'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
  }
};

export const ExcerciseOptions = {
  method: 'GET',
  params: { safeSearch: 'Off', textFormat: 'Raw' },
  headers: {
    'X-RapidAPI-Key': '4d0a03ca0dmsh7859b370c28df66p1bc75cjsne0ccad53d0e6',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
  }
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
