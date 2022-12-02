import "./loging-page.css"

const Loging = () => {
    // const [userImage, setUserImage] = useState(false);
    // const [paswordImage, setPasswordImage] = userState(false);
    

    return (
        <div className="container">
            <div className="bg-image"></div>
            <div className="main-container"></div>
            <div className="body-text">
                <h2 className="heading">Login</h2>
                <button type="button" className="login-in-button">Already have an account</button>
                <div className="change-image"></div>
                <div className="input-text">
                    <div className="col-sm-2 col-form-label">UserName</div>
                    <input type="text" className="form-control" id="inputUserName" placeholder="@UserName"></input>
                </div>
                <div className="input-text">
                    <div className="col-sm-2 col-form-label">Password</div>
                    <input type="Password" className="form-control" id="inputPassword" placeholder="Pass****"></input>
                </div>
                <button type="button" className="sign-in-button">Sign me in</button>
            </div>

        </div>
    )
}

export default Loging;