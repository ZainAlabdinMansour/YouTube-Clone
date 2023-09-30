import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { Navbar, Feed, ChannelDetail, SearchFeed, VideoDetail } from './components';

const App = () => (
    <BrowserRouter>                             { /* This is recommended more the Router component*/ }
      <Box sx={{ backgroundColor: '#000' }}>    { /* it has more features than an ordinary div element */ }
        <Navbar/>
        <Routes>                                { /* Routes component renders all matching routes, while Switch component renders the first matcing route */ }
          <Route path='/' exact element={<Feed/>}/>
          <Route path='/video/:id' element={<VideoDetail/>}/>
          <Route path='/channel/:id' element={<ChannelDetail/>}/>
          <Route path='/search/:searchTerm' element={<SearchFeed/>}/>
        </Routes>
      </Box>
    </BrowserRouter>
)

export default App