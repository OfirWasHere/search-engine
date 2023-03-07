
import { ChangeEvent, useEffect, useState } from "react";
import EmployeeModel from "../../../Models/employee.model";
import dataService from "../../../Services/DataService";
import DataCard from "../dataCard/dataCard";
import "./SearchBar.css";


function SearchBar(): JSX.Element {
    const [item, setItem] = useState<string>("")
    const [searchData, setSearchData] = useState<EmployeeModel[]>([])
    const [focus, setFocus] = useState("none")

    //getting the user input in the search bar and saving it
    function userInput(args: ChangeEvent<HTMLInputElement>):void {
        setItem(args.target.value)
    }

    // Getting the data if the user has input anything
    async function getData () {
        await dataService.search(item).then(e => setSearchData(e)).catch(e => console.log(e.message));
    }
    
    // if not then the data will all of the employees
    useEffect(() => {
        if(item.length === 0){
            dataService.getAllEmployees().then(e => setSearchData((e))).catch(e => console.log(e.message));
        } else {
            getData()
        }
    },[item])

    // If user focus on the element input then it will show the list
    function changeFocus(args: React.FocusEvent<HTMLInputElement>):void{
        const isFocused = args.currentTarget === document.activeElement;
        if(isFocused){
            setFocus("block")
        }
    }
    // else it will hide it 
    function handleBlur() {
        setFocus("block");
        // setFocus("none");
    }
    
    return (
        <div className="SearchBar">
            <input type="text" onChange={userInput} onFocus={changeFocus} onBlur={handleBlur} placeholder="search..." name="searchBar"/><button>🔎</button>
            <div style={{display: focus}} className="dataArea">
                {searchData.map((e)=>( <DataCard key={e.employeeId} employee={e} searchInput={item}/>))}
            </div>
        </div>
    );
}

export default SearchBar;


// useEffect(() => {
//     if(item.length === 0){
//         setSearchData([])
//     } else {
//         getData()
//     }
// },[item])


// ADD THE Following:

// highlight search, if user has not input anything then display all if not focus