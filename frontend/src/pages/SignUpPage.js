import React from "react";
import LeftPanelSignIn from "../components/LeftPanelSignIn";
import RightPanelSignIn from "../components/RightPanelSignIn";

function SignUpPage() {
    return (
        <div className="app-container">
            <LeftPanelSignIn />
            <RightPanelSignIn />
        </div>
    )
}

export default SignUpPage;