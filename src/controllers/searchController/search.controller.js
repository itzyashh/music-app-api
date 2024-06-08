import ncs  from 'nocopyrightsounds-api';
const search = async (req, res) => {
    const filter = {
        search: req.query.q,
        page: req.query.page || null
    }
    const searchResults = await ncs.search(filter);
    res.send(searchResults);
}

export { search }