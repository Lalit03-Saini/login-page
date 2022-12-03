import "./loging-page.css"
import LogImage from "./Image/Cat Watching You GIF - Cat Watching You Cartoon - Discover & Share GIFs.gif"
import LogImage1 from "./Image/Noted Ok Sticker - Noted Ok - Discover & Share GIFs.gif"
import LogImage2 from "./Image/Line Stickers & Themes.gif"

import { useState } from "react"

const Loging = () => {
    const [conter, setconter] = useState(LogImage) 
     
    function getchage () {
        setconter(LogImage1)
    }

    function getchage1 () {
        setconter(LogImage2)
    }

    return (
        <div className="container">
            <div className="bg-image"></div>
            <div className="main-container"></div>
            <div className="body-text">
                <h2 className="heading">Login</h2>
                <button type="button" className="login-in-button">Already have an account</button>
                <img className="change-image" src={conter} alt="Log-Image"/>
                <div className="input-text">
                    <div className="col-sm-2 col-form-label">UserName</div>
                    <input type="text" className="form-control" id="inputUserName" placeholder="@UserName" onClick={getchage}></input>
                </div>
                <div className="input-text">
                    <div className="col-sm-2 col-form-label">Password</div>
                    <input type="Password" className="form-control" id="inputPassword" placeholder="Pass****" onClick={getchage1}></input>
                </div>
                <button type="button" className="sign-in-button">Sign me in</button>
            </div>

        </div>
    )
}

export default Loging;