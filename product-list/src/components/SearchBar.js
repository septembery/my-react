import { Component } from "react";

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.handleFilterChange = this.handleFilterChange.bind(this);
    }

    handleFilterChange (e) {
        const name = e.target.name;
        const value = this.handleInputTypeValue(e.target.type, e.target);
        this.props.onFilterChange(name, value);
    }

    handleInputTypeValue (type, target) {
        switch (type) {
            case 'checkbox': 
                return target.checked;
            case 'text': 
                return target.value;
        }
    }
      
    render() { 
        const filterText = this.props.filters.filterText;
        const inStockOnly = this.props.filters.inStockOnly;

        return (
        <form>
            <input name="filterText" type="text" placeholder="Search..." value={filterText} onChange={this.handleFilterChange}/>
            <p>
            <input name="inStockOnly" type="checkbox" checked={inStockOnly} onChange={this.handleFilterChange}/>
            {' '}
            Only show products in stock
            </p>
        </form>
        );
    }
}
 
export default SearchBar;