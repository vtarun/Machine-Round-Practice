import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/').filter(path => path);
    console.log(paths);
    let links = '';
    return (
        <div>            
            <Link to="/">
                Home                  
            </Link>
            {paths.map((path, index) => {
                links += "/"+path;
                return index !== (paths.length -1) ? <Link key={path} to={links}>/{path}</Link> : <span>/{path}</span>
            })}         
        </div>
    )
}

export default Breadcrumbs
