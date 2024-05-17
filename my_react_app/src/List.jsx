function List(props){

    const itemList = props.items;
    const order = itemList.map(a => <li key={a.id}><b>{a.name}</b>
                                               <p>Rank:{a.rank}</p>
                                </li> );

    return(<ol>{order}</ol>); 

}
export default List;