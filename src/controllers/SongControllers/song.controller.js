import ncs from 'nocopyrightsounds-api';
const getAllSongs = async (req, res) => {
    const page = req.query.page || null
    const songs = await ncs.getSongs(page)
    // use the songs here
    console.log(songs)
    res.send(songs)
}

export {
    getAllSongs
}