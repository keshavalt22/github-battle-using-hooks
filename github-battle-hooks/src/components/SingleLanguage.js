import Loader from "./Loader";
import { useState, useEffect } from "react";
import withRouter from "../utils/withRouter";


function SingleLanguage(props) {

    console.log(props.params.language);

    const [data, setData] = useState([]);

    useEffect(() => {
        let language = props.params.language;
        fetch(`https://api.github.com/search/repositories?q=stars:%3E1+language:${language}&sort=stars&order=desc&type=Repositories`)
            .then((res) => res.json())
            .then((data) => {
                setData(data)
            })
    }, []);

    if (!data.items) {
        return <Loader />
    }

    let info = data.items;
    console.log(data.items);


    return (
        <ul className='boxes'>{
            info.map((post, i) => {
                return (
                    <li className='box'>
                        <div>
                            <h2># {i + 1}</h2>
                            <img src={post.owner.avatar_url} alt=""></img>
                            <h3>{post.name}</h3>
                            <div>
                                <p>{post.name}</p>
                            </div>
                            <div>
                                <p>{post.stargazers_count} STAR</p>
                            </div>
                            <div>
                                <p>{post.forks} FORK</p>
                            </div>
                            <div>
                                <p>{post.open_issues_count} OPEN ISSUE</p>
                            </div>
                        </div>
                    </li>
                )
            })
        }</ul>
    )
}

export default withRouter(SingleLanguage);