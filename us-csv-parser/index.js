const parse = require('csv-parse');
const fs = require('fs');
var _ = require('lodash');

const processFile = async () => {
    let records = [];
    const parser = fs
        .createReadStream(`./sample-perm.csv`)
        .pipe(parse({
            // CSV options if any
        }));
    for await (const record of parser) {

        const inputEmail = record[0].trim();
        const inputLabel = record[1].trim();
        const inputValue = record[2].trim();

        let productTypesArray = [];
        let slCompaniesArray = [];
        let slBrandsArray = [];
        let permissionsArray = [];

        //console.log(obj);

        switch (inputLabel) {
            case 'Product Type':
                productTypesArray.push({
                    name: inputValue
                });
                break;
            case 'Company':
                slCompaniesArray.push({
                    name: inputValue
                });
                break;
            case 'Brand':
                slBrandsArray.push({
                    name: inputValue
                });
                break;
            case 'Permission':
                permissionsArray.push({
                    name: inputValue
                });
        }
        //console.log(productTypesArray)



        let obj = records.find(element => element.email === inputEmail);
        _.remove(records, (e) => e.email === inputEmail );

        if(obj) {
            productTypesArray = _.union(obj.scope.productTypes, productTypesArray);
            slCompaniesArray = _.union(obj.scope.slCompanies, slCompaniesArray);
            slBrandsArray = _.union(obj.scope.slBrands, slBrandsArray);
            permissionsArray = _.union(obj.scope.permissionCountryList, permissionsArray);

        }

        let source = {
            email: inputEmail,
            scope: {
                permissionCountryList: permissionsArray,
                productTypes: productTypesArray,
                slCompanies: slCompaniesArray,
                slBrands: slBrandsArray
            }
        };

        records.push(source);
    }
    return records;
}

(async () => {
    const records = await processFile();
    console.info(JSON.stringify(records, null, 2));
})();
