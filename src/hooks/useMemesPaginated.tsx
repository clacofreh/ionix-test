import React, {useEffect, useRef, useState} from 'react';
import {memesApi} from '../api/memesApi';
import {SimpleMeme} from '../interfaces/memesInterfacecs';

const useMemesPaginated = () => {
  const nextPageUrl = useRef(
    'https://www.reddit.com/r/chile/new/.json?limit=100&after=20',
  );
  const [isLoading, setisLoading] = useState(true);
  const [simpleMeme, setsimpleMeme] = useState<SimpleMeme[]>([]);

  useEffect(() => {
    loadMemes();
  }, []);
  const loadMemes = async () => {
    setisLoading(true);
    const resp = await memesApi.get(nextPageUrl.current);
    const data = resp.data.data.children;
    //Mapear data
    return mapMemesDataToSimpleMeme(data);
  };
  const mapMemesDataToSimpleMeme = memesList => {
    const newMemesList: SimpleMeme[] = memesList.map(({data}) => {
      const id = data.id + data.link_flair_template_id;
      const author = data.author;
      const image = data.url;
      const title = data.title;
      const score = data.score;
      const num_comments = data.num_comments;
      return {id, author, image, title, score, num_comments};
    });
    setsimpleMeme([...simpleMeme, ...newMemesList]);
    setisLoading(false);
  };

  return {
    isLoading,
    loadMemes,
    simpleMeme,
  };
};

export default useMemesPaginated;
