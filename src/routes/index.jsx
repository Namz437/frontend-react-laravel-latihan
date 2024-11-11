import { Routes, Route } from 'react-router-dom'    

import Home from '../views/home.jsx'

import PostIndex from '../views/posts/index.jsx'

import PostCreate from '../views/posts/create.jsx'

import PostEdit from '../views/posts/edit.jsx'

import McpeIndex from '../views/mcpe/index.jsx'

import McpeCreate from '../views/mcpe/create.jsx'

import McpeEdit from '../views/mcpe/edit.jsx'

function RoutesIndex() {
    return (
        <Routes>

            <Route path="/" element={<Home />} />

            <Route path="/posts" element={<PostIndex />} />

            <Route path="/posts/create" element={<PostCreate />} />

            <Route path="/posts/edit/:id" element={<PostEdit />} />

            

            <Route path="/mcpe" element={<McpeIndex />} />

            <Route path="/mcpe/create" element={<McpeCreate />} />

            <Route path="/mcpe/edit/:id" element={<McpeEdit />} />

        </Routes>
    )
}

export default RoutesIndex