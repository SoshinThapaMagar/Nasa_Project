const DEFAULT_PAGE_NUMBER = 1;
const DEFAULT_PAGE_LIMIT = 0; //passing 0 will make it return all of the documents if i passed 50 it will return the first 50

function getPagination(query) {
    const page = Math.abs(query.page) || DEFAULT_PAGE_NUMBER;
    const limit = Math.abs(query.limit) || DEFAULT_PAGE_LIMIT;
    const skip = (page-1) * 2;
    return {
        skip,
        limit
    }
}

module.exports = {
    getPagination,
}