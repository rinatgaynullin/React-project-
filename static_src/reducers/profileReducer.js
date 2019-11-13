import update from 'react-addons-update'

const initialStore = {
    profile: {
        1:{
        name: 'Ринат Гайнуллин',
        tel: '+7(909)-121-2121',
        about: 'ЧТо то обо мне, можно изменить через input (comming soon)',
        p_avatar: 'https://placehold.it/150x150'
        }
    },
};


export default function profileReducer(store = initialStore, action) {
            return store;
    
}