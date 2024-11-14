import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import TableProduct from '../components/Tables/TableProduct';

const ProductList = () => {
  return (
    <>
      <Breadcrumb pageName="Product List" />

      <div className="flex flex-col gap-10">
        <TableProduct />
      </div>
    </>
  );
};

export default ProductList;