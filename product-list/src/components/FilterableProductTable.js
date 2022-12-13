import { Component } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

class FilterableProductTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filters: {
                filterText: '',
                inStockOnly: true
            }
        };

        this.handleFilterChange = this.handleFilterChange.bind(this);
    }

    handleFilterChange(filter, value) {
        this.setState(() => {
            const filters = {...this.state.filters};
            filters[filter] = value;
            return {filters};
        });
    }

    render() { 
        return (
            <div>
                <SearchBar 
                    filters={this.state.filters} 
                    onFilterChange={this.handleFilterChange}
                />
                <ProductTable products={this.props.products} filters={this.state.filters}/>
            </div>
        );
    }
}
 
export default FilterableProductTable;