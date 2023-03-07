import SearchBar from "../SearchBar/SearchBar";
import "./Home.css";

function Home(): JSX.Element {
    return (
        <div className="Home">
			<h1>LOOKING FOR AN EMPLOYEE?</h1>
			<h3>Click on the search bar to learn our suggestions</h3>
            <SearchBar/>
        </div>
    );
}

export default Home;
