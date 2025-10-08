import AddChar from "./AddChar";
import AddQuotes from "./AddQuotes";
import EditChar from "./EditChar";

function Homepage(){
    return (
        <div>
            <div>
                <AddQuotes/>
            </div>
        
            <div>
                <AddChar/>
            </div>

            <div>
                <EditChar/>  
            </div>

            <div>
                View Quotes
            </div>

            <div>
                Delete Quote
            </div>

            <div>
                Search Quotes
            </div>
        </div>
    )
}

export default Homepage;