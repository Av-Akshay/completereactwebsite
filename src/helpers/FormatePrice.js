const FormatePrice = ({ price }) => {
  const formatter = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2,
  });

  return <>{formatter.format(price / 100)}</>;
};

export default FormatePrice;
