import profileReducer, {deleteActionCreator, addPostActionCreator} from "./profileReducer";


let state = {
    postData: [
        {id: 1, like: 11, message: 'How are u?'},
        {id: 2, like: 22, message: 'Its my first post'},
    ]
};
it('new post should be added', () => {
    // start data(initial data)

    let action = addPostActionCreator('first test');

    // action
    let newState = profileReducer(state, action);
    // expectation
    expect(newState.postData.length).toBe(3);
});

it('new post message', () => {
    // start data(initial data)

    let action = addPostActionCreator('first test');

    // action
    let newState = profileReducer(state, action);
    // expectation
    expect(newState.postData[2].message).toBe('first test');
});

it('post should be deleted',()=>{
    let action = deleteActionCreator(1);
    let newState = profileReducer(state, action);
    // expectation
    expect(newState.postData.length).toBe(1);
});
it('post should not be deleted if id is incorrect',()=>{
    let action = deleteActionCreator(1000);
    let newState = profileReducer(state, action);
    // expectation
    expect(newState.postData.length).toBe(2);
});



