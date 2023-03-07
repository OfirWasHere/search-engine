import { Avatar } from "@mui/material";
import EmployeeModel from "../../../Models/employee.model";
import "./dataCard.css";

interface DataCardProps {
  employee: EmployeeModel;
  searchInput: string;
}

function DataCard(props: DataCardProps): JSX.Element {

  // Regular expression to match the search input with case-insensitivity
  const regex = new RegExp(props.searchInput, 'gi');

  // Function to replace the matched letters with a <mark> tag
  const highlightMatch = (str: string): JSX.Element | string => {
    if (props.searchInput.length > 0) {
      const highlightedText = str.replace(regex, (match) => `<mark>${match}</mark>`);
      return <div dangerouslySetInnerHTML={{ __html: highlightedText }}></div>;
    }
    return str;
  };

  return (
    <div className="dataCard">
      <Avatar className="avatarImage" src={props.employee.imageUrl} alt="employeeImages" />
      <div className="user">
        <h4>{highlightMatch(props.employee.name)}</h4>
        <h5>{highlightMatch(props.employee.workTitle)}</h5>
      </div>
    </div>
  );
}

export default DataCard;