// import React from 'react';

const FormatePrice = ({ price }) => {
    const formatter = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 2,
    });

    return (
        <div>
            {formatter.format(price / 100)}
        </div>
    );
};

export default FormatePrice;














// const FormatePrice = ({ price }) => {
//     return Intl.NumberFormate("en-IN", {
//         style: "currency",
//         currency: "INR",
//         maximumFractionDigit: 2,
//     }).formate(price / 100);
// };
// export default FormatePrice;