import './catalogFilters.css'
import ButtonApply from "../buttonApply/ButtonApply";

function CatalogFilters(){
    const nameOptions = [
        { value: "name", label: "Any name"},
        { value: "name", label: "Diamond"},
        { value: "name", label: "Rubin"},
        { value: "name", label: "Smaragd"},
        { value: "name", label: "Stone"},
    ];

    const priceOptions = [
        {value: "price", label: "Any price"},
        {value: "price", label: "1-500 $"},
        {value: "price", label: "500-1000 $"},
        {value: "price", label: "more than 1000 $"},
    ];

    const strengthOptions = [
        {value: "strength", label: "Any strength"},
        {value: "strength", label: "low"},
        {value: "strength", label: "medium"},
        {value: "strength", label: "high"},
    ];



    return(
        <section>
            <div className="catalog-filters">
                <div className="catalog-filters__types">
                    <div className="name">
                        <label htmlFor="filters__by-name" className="filters__by-name">Filter by name:</label>
                        <select id="filters__by-name" className="filters__by-name" name="name">
                            {nameOptions.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="price">
                        <label htmlFor="filters__by-price" className="filters__by-price">Filter by price:</label>
                        <select id="filters__by-price" className="filters__by-price" name="price">
                            {priceOptions.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="strength">
                        <label htmlFor="filters__by-strength" className="filters__by-strength">Filter by strength:</label>
                        <select id="filters__by-strength" className="filters__by-strength" name="strength">
                            {strengthOptions.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <ButtonApply/>
            </div>
        </section>


    );
}

export default CatalogFilters;