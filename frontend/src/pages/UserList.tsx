import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import TableUser from '../components/Tables/TableUser';

const UserList = () => {
  return (
    <>
      <Breadcrumb pageName="User List" />

      <div className="flex flex-col gap-10">
        <TableUser />
      </div>
    </>
  );
};

export default UserList;
