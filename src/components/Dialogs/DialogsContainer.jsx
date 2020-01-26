import React from 'react';
import {onAddMessageTextActionCreator} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../../hoc/WithAuthReirect";
import {compose} from "redux";

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
        addMessage: (newMessageText) => {
            dispatch(onAddMessageTextActionCreator(newMessageText))
        },
    }
};

const DialogsContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect //снизу вверх первое редирект второе коннект
)(Dialogs);

export default DialogsContainer;

// let AuthRedirectComponent = WithAuthRedirect(Dialogs);
//
// // let AuthRedirectComponent = (props) => {
// //     if (!this.props.isAuth) return <Redirect to={'/login'}/>;
// //     return <Dialogs {...props} />
// // };
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);


