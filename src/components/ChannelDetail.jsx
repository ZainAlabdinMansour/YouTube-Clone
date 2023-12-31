import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import { Videos, ChannelCard } from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const ChannelDetail = () => {
  const { id } = useParams();     // we get the Channel Id from the URL
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
    useEffect(() => {
      fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then(data => setChannelDetail(data?.items[0]))

      fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then(data => setVideos(data?.items))
    }, [id])

  return (
    <Box minHeight='95vh'>
      <Box>
        <div style={{
          background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(119,0,255,1) 0%, rgba(0,168,255,1) 100%)',
          zIndex: 10,
          height: '300px'
        }} />
          <ChannelCard channelDetail={channelDetail} marginTop='-110px' />
      </Box>
      <Box display='flex' p='2'>
        <Videos videos={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetail