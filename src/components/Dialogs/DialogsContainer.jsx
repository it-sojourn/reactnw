import {sendMessageCreator} from "../../redux/messages-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import React from "react";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

// const DialogsContainer = () => {
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let state = store.getState().messagePage;
//                     let onSendMessageClick = () => {
//                         store.dispatch(sendMessageCreator());
//                     };
//                     let onNewMessageChange = (body) => {
//                         store.dispatch(updateNewMessageBodyCreator(body));
//                     };
//                     return (<Dialogs updateNewMessageBody={onNewMessageChange}
//                                      sendMessage={onSendMessageClick}
//                                      messagePage={state}/>)
//                 }
//             }
//         </StoreContext.Consumer>
//     )
// }

let mapStateToProps = (state) => {
    return {
        messagePage: state.messagePage,
        isAuth: state.auth.isAuth,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageCreator(newMessageBody));

        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);