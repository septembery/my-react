import { Component } from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

class ProductTable extends Component {
    filterProducts (products, filters) {
        return products.filter(product => {
            if (filters.filterText && !product.name.includes(filters.filterText)) {
                return false;
            }
            if (filters.inStockOnly && !product.stocked) {
                return false;
            }

            return true;
        });
    }

    createRows (products) {
        let category = null;
        const rows = [];

        products.forEach(product => {
            category = product.category !== category ? product.category : null;
            if (category) {
                rows.push(<ProductCategoryRow category={category} key={product.category} />); 
            }
            rows.push(<ProductRow product={product} key={product.name} />);
            category = product.category;
        });

        return rows;
    }

    render() { 
        const filteredProducts = this.filterProducts(this.props.products, this.props.filters);
        const rows = this.createRows(filteredProducts);

        return (
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
        );
    }
}
 
export default ProductTable;