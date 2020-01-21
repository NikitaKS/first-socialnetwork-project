import React from 'react';
import {onAddMessageTextActionCreator, onMessageChangeTextActionCreator} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../../hoc/WithAuthReirect";

// const DialogsContainer = (props) => {
//     // let state = props.store.getState().messagePage;
//     // const addMessage = () => {
//     //     let action = onAddMessageTextActionCreator();
//     //     props.store.dispatch(action)
//     // };
//     // const changeMessage = (newMessage) => {
//     //     let action = onMessageChangeTextActionCreator(newMessage);
//     //     props.store.dispatch(action)
//     // };
//
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 let state = store.getState().messagePage;
//                 const addMessage = () => {
//                     let action = onAddMessageTextActionCreator();
//                     store.dispatch(action)
//                 };
//                 const changeMessage = (newMessage) => {
//                     let action = onMessageChangeTextActionCreator(newMessage);
//                     store.dispatch(action)
//                 };
//                 return <Dialogs messagePage={state}
//                                 addMessage={addMessage}
//                                 changeMessage={changeMessage}/>
//             }}
//         </StoreContext.Consumer>
//     )
// };

let mapStateToProps = (state) => {
    return {
        messagePage: state.messagePage
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(onAddMessageTextActionCreator())
        },
        changeMessage: (newMessage) => {
            let action = onMessageChangeTextActionCreator(newMessage);
            dispatch(action)
        },
    }
};
let AuthRedirectComponent = WithAuthRedirect(Dialogs);

// let AuthRedirectComponent = (props) => {
//     if (!this.props.isAuth) return <Redirect to={'/login'}/>;
//     return <Dialogs {...props} />
// };
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;
