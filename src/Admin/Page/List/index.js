import "./List.scss"
import Sidebar from "../../Components/Sidebar";
import Datatable from "../../Components/Datatable";


const List = () => {
    return (
        <div className="list">
            <Sidebar/>
            <div className="listContainer">
                <Datatable/>
            </div>
        </div>
    )
}

export default List