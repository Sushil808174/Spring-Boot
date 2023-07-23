import { useParams,Link } from "react-router-dom";
function WelcomeComponent(){
    const params = useParams();
    return(
        <div className="WelcomeComponent">
            <h1>Welcome {params.username}</h1>
            <div>
                Manage your todos - <Link to="/list-todos">Go here.</Link>
            </div>
        </div>
    )
}

export default WelcomeComponent;