export default function Menu(props)
{
    return(

        <>
            <ul className={props.className}>
                <li><a>business</a></li>
                <li><a>domestic</a></li>
                <li><a>education</a></li>
                <li><a>entertainment</a></li>
                <li><a>environment</a></li>
                <li><a>food</a></li>
                <li><a>health</a></li>

                {props.device == "mobile" && <i className="sm:hidden"><a>Categories</a></i>}
            </ul>
        </>
    );
}