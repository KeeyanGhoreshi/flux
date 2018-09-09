import BaseIndexer from './BaseIndexer';

class ColumnIndexer extends BaseIndexer {
    indexData(section, subsection, data, searchIndex, subsectionDescriptor) {
        if (subsectionDescriptor.headings) {
            // true tabular where each item is a column of data
            // add each column value using title of the column heading
            data.forEach((row) => {
                row.forEach((col, columnNumber) => {
                    searchIndex.addSearchableData({
                        section,
                        subsection,
                        valueTitle: subsectionDescriptor.headings[columnNumber],
                        value: col.value || "Missing Data"
                    });    
                });
            });
        } else {
            // ones that are really just a name and value so more of a layout than columns/tabular
            // add each row with 1st column as title and 2nd column as value
            data.forEach(([title, valueObject]) => {
                searchIndex.addSearchableData({
                    section,
                    subsection,
                    valueTitle: title.value,
                    value: valueObject.value || "Missing Data"
                });
            });
        }
    }
}

export default ColumnIndexer;