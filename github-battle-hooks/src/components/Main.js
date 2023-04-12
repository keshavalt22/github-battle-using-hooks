import Loader from "./Loader";


function Main(props) {
    if (!props.data.items) {
        return <Loader />
    }
    let info = props.data.items;
    console.log(info);
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

export default Main;