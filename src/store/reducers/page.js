const page = (state = { title: 'home' }, action) => {
    switch (action.type) {
        case 'SET_PAGE_TITLE':
            return { ...state, title: action.payload };
        default:
            return state;
    }
}

export default page;