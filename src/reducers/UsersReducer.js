const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

const initialState = {
    // countUsersInPage: 4,
    users: [
        {
            id: 1,
            photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQPBW4o_EkS5nn0Mt2boxcKStnHhw68XW17uL8qC4Fp61QL4xAp&usqp=CAU',
            name: 'Ivan P',
            status: 'ivan-durak',
            followed: false,
            location: {country: 'Belarus', city: 'Minks'},
        },
        {
            id: 2,
            photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTLCMHxa7MfSl3vH9hQDDgUwFpORGANIRLpP2t8Pax3IqljrYHZ&usqp=CAU',
            name: 'Arseniy G',
            status: 'secondary',
            followed: true,
            location: {country: 'Russia', city: 'Moscow'},
        },
        {
            id: 3,
            photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTtYsA5m3xp8EdW0R1vT5Oein32vpgXbFZ6NkB23lbuDxjZwedh&usqp=CAU',
            name: 'Leonid Q',
            status: 'third',
            followed: false,
            location: {country: 'Russia', city: 'Kaliningrad'},
        }
    ]
};

export default function UsersReducer(state = initialState, action) {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.payload.userId) {
                        return {...user, followed: true,}
                    }
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.payload.userId) {
                        return {...user, followed: false,}
                    }
                })

            };
        case SET_USERS
        :
            return {
                ...state,
                users: [...state.users, ...action.users],
            };
        default:
            return state
    }
}

export const followAC = (userId) => {
    return {
        type: FOLLOW,
        payload: {
            userId,
        },
    }
};

export const unfollowAC = (userId) => {
    return {
        type: UNFOLLOW,
        payload: {
            userId,
        },
    }
};

export const setUsersAC = (users) => {
    return {
        type: SET_USERS,
        payload: {
            users,
        },
    }
};

