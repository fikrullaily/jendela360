import React from "react";
import List from "./list";

const FormList = (props) => {
  const { formList, handleEdit, handleDelete } = props;
  return (
    <div>
      {formList.map((list) => {
        return (
          <List
            list={list}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        );
      })}
    </div>
  );
};

export default FormList;

