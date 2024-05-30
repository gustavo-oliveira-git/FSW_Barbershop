import { SearchIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Search = () => {
    return ( 
        <div className="flex items-center gap-3">
            <Input placeholder="Busque por uma barbearia..."/>
            <Button variant={"default"}>
                <SearchIcon size={22}/>
            </Button>
        </div>
     );
}
 
export default Search;