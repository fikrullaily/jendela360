import React from "react";

const List = (props) => {
  const { formList, handleEdit, handleDelete } = props;
  return (
    <div className="content">
      <div className="list">
        <table border="1">
          <thead>
              <tr>
                <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Nama</th>
                <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Sumber Pesanan</th>
                <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Email</th>
                <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Nomor HP</th>
                <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Jumlah Roti</th>
                <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Keterangan</th>
                <th className="text-secondary opacity-7">Action</th>
              </tr>
          </thead>
          <tbody>
          {formList.map((list) => {
            return (
              <tr>
                <td>{list.nama}</td>
                <td>{list.inOrder}</td>
                <td>{list.email}</td>
                <td>{list.noHP}</td>
                <td>{list.Qty}</td>
                <td>{list.Ket}</td> 
                <td>
                  <div className="button-list">
                    <button onClick={() => handleEdit(list)} className="button-edit">
                      Edit
                    </button>
                    <button onClick={() => handleDelete(list)} className="button-delete">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            )
          })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default List;
