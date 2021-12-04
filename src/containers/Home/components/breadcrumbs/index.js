import './index.scss'
export const Breadcrumbs = (props) => { 
    const {navList} = props;

    return (<div className="bread-crumbs">
    <ul>
        {navList.map((n, i) => {
                 return ( <li key={i}>{n}</li>);
        })}
    </ul>
</div>)
}