const getAllSongs = async (req, res) => {
    const songs = await ncs.getSongs(/* page here */)
    const page = req.query.page || 1
    // use the songs here
    console.log(songs)
    res.send(songs)
}