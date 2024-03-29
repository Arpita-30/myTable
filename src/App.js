import "./App.css";
import { useState, useEffect } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import CheckIcon from "@mui/icons-material/Check";
import ClickAwayListener from "react-click-away-listener";
import FilterListIcon from "@mui/icons-material/FilterList";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import { Construction } from "@mui/icons-material";

function App() {
  const [editableRC, setERC] = useState({
    index: null,
    field: "",
  });
  const [filterDropdown, setFilterDropdown] = useState(false);

  const [newTable, setNewTable] = useState([]);
  //const [check, setCheck] = useState(false);
  // useEffect(() => {
  //   const newDB = createTable.map((newT, id) => {
  //     return { ...newT, Age: { age: newT.Age, isSelected: false } };
  //   });
  //   setNewTable(newDB);
  // }, []);

  const [Filter, setFilter] = useState({});
  const Dropdown = ({ options, id }) => {
    //console.log(options);
    const [isOpen, setIsOpen] = useState(false);
    const [searchVal, setSearchVal] = useState("");
    const [selectedVal, setSelectedVal] = useState([]);

    const handleListValue = (tableIndex, optionIndex) => {
      console.log(isOpen);
      setIsOpen(false);
      console.log(isOpen);
      if (selectedVal.includes(createTable[tableIndex].options[optionIndex])) {
        return selectedVal;
      } else {
        setSelectedVal([
          ...selectedVal,
          createTable[tableIndex].options[optionIndex],
        ]);
      }
    };
    const handleDeleteChips = (i) => {
      const temp = selectedVal.filter((val, index) => {
        return i !== index;
      });
      setSelectedVal(temp);
    };
    return (
      <ClickAwayListener
        onClickAway={() => {
          setIsOpen(false);
        }}
      >
        <div className="dropDown">
          <input
            className="dept"
            type="text"
            placeholder="dept..."
            value={searchVal}
            onFocus={(e) => {
              setIsOpen(true);
            }}
            onChange={(e) => {
              setSearchVal(e.target.value);
            }}
          ></input>

          <>
            {isOpen ? (
              <div className="list">
                {options
                  .filter((val) => val.includes(searchVal))
                  .map((val, idx) => {
                    return (
                      <>
                        <div
                          className="list_values"
                          onClick={() => {
                            handleListValue(id, idx);
                          }}
                        >
                          {val}
                        </div>
                      </>
                    );
                  })}
              </div>
            ) : null}
            <div className="chips_container">
              {selectedVal && selectedVal.length !== 0
                ? selectedVal.map((val, i) => {
                    return (
                      <>
                        <span className="span">
                          {val}{" "}
                          <button onClick={() => handleDeleteChips(i)}>
                            x
                          </button>
                        </span>
                      </>
                    );
                  })
                : null}{" "}
            </div>
          </>
        </div>
      </ClickAwayListener>
    );
  };

  const List = () => {
    //const [val, setVal] = useState([]);

    //after applying filter
    const handleFilterAge = () => {
      // const temp = newTable.filter((val, i) => {
      //   return val.Age.isSelected === true;
      // });
      // console.log(temp);
      // const newTemp = temp.map((val, i) => {
      //   return {
      //     ...val,
      //     Age: val.Age.age,
      //   };
      // });
      // setNewTable(temp);
      // console.log(newTemp);
      // setCreateTable(newTemp);
      setFilterDropdown(false);
    };
    console.log(newTable);

    //cancel button
    const handleFilterCancel = () => {
      setCreateTable(users);
      setFilterDropdown(false);
    };

    //selecting filter
    const handleChange = (e) => {
      const { value, checked } = e.target;
      console.log(value, checked);

      setFilter({ ...Filter, [value]: !Filter[value] });
      // for (const key in Filter) {
      //   if (key === value) {
      //     setFilter({ ...Filter, [key]: !Object.value });
      //   }
      // }

      //setCheck(checked);
      // const temp = newTable.map((newT, id) => {
      //   if (newT.Age.age === value)
      //     return {
      //       ...newT,
      //       Age: { ...newT.Age, isSelected: !newT.Age.isSelected },
      //     };
      //   else return newT;
      // });
      // console.log(temp);
      // setNewTable(temp);
    };

    const handleSelectAll = (e) => {
      let temp = {};
      for (const key in Filter) {
        temp = { ...temp, [key]: !Filter[key] };
      }
      setFilter(temp);
    };

    return (
      <div className="selectList">
        <div>
          <input
            type="checkbox"
            onChange={handleSelectAll}
            value={true}
          ></input>
          <p>Select All</p>
        </div>
        {Object.keys(Filter).map((val, i) => {
          return (
            <div className="Llist">
              <input
                type="checkbox"
                onChange={handleChange}
                value={val}
                checked={Filter[val]}
              ></input>
              <p>{val}</p>
            </div>
          );
        })}

        {/* <input
            type="checkbox"
            onChange={handleChange}
            value="22"
            //checked={check}
          ></input>
          <p>22</p>
        </div>
        <div className="Llist">
          <input
            type="checkbox"
            onChange={handleChange}
            value="24"
            //checked={check}
          ></input>
          <p>24</p>
        </div>
        <div className="Llist">
          <input
            type="checkbox"
            onChange={handleChange}
            value="26"
            //checked={check}
          ></input>
          <p>26</p> */}

        <CheckCircleIcon onClick={handleFilterAge} />
        <CancelIcon onClick={handleFilterCancel} />
      </div>
    );
  };

  const users = [
    {
      name: "Arpita",
      Age: "26",
      email: "abc@abc.com",

      options: ["HR", "TECH", "DBA", "SUPPORT"],
    },
    {
      name: "Puneet",
      Age: "24",
      email: "abc@abc.com",

      options: ["HR", "TECH", "DBA", "SUPPORT"],
    },
    {
      name: "Aduri",
      Age: "28",
      email: "abc@abc.com",

      options: ["HR", "TECH", "DBA", "SUPPORT"],
    },
    {
      name: "Poulomi",
      Age: "22",
      email: "abc@abc.com",

      options: ["HR", "TECH", "DBA", "SUPPORT"],
    },
    {
      name: "Peter",
      Age: "24",
      email: "abc@abc.com",

      options: ["HR", "TECH", "DBA", "SUPPORT"],
    },
  ];
  const [createTable, setCreateTable] = useState(users);
  // const
  // const [tableData, setTableData] = useState({
  //   name: "",
  //   age: "",
  //   email: "",
  //   index: "",
  // });

  const [saveTableData, setSaveTableData] = useState("");
  const [updatedData, setUpdatedData] = useState("");

  useEffect(() => {
    let temp = {};
    createTable.forEach((element) => {
      temp = { ...temp, [element.Age]: true };
    });

    setFilter(temp);
  }, []);

  const handleFilter = () => {
    // const Age = createTable.map((user, i) => {
    //   return user.Age;
    // });
    //let temp = {};

    setFilterDropdown(true);
  };
  //console.log(Filter);

  const handleSaveData = (id, field) => {
    // setSaveTableData(data);
    const temp = createTable.map((val, i) => {
      if (i === id)
        return {
          ...val,
          [field]: editableRC[field],
        };
      else return val;
    });
    console.log(editableRC[field]);
    setCreateTable([...temp]);
    setERC({ index: null, field: "" });
  };

  const handleDelete = (index) => {
    const temp = createTable.filter((user, i) => {
      return i !== index;
    });
    console.log(temp);
    setCreateTable(temp);
  };

  const handleAdd = () => {
    setCreateTable([
      ...createTable,
      {
        name: "",
        age: "",
        email: "",
        action: "delete",
        options: ["HR", "TECH", "DBA", "SUPPORT"],
      },
    ]);
    console.log(createTable);
  };

  const handleAddValue = (index, field) => {
    //setTableData(createTable[index]);
    setERC({ index: index, field, [field]: createTable[index][field] });
    // const temp = createTable.map((val, i) => {
    //   if (index === i) return { ...val, [`editable_${type}`]: true };
    //   else return val;
    // });

    // setCreateTable(temp);
  };

  const handleEditValue = (e, id, field) => {
    setERC({ ...editableRC, [field]: e.target.value });
    // console.log(tableData);
    // setTableData({ ...tableData, name: e.target.value, index: id });
    // console.log(tableData);
  };

  const handleCancel = (id, type) => {
    setERC({ index: null, field: "" });
  };

  // const handleSearch = (e, index, field) => {
  //   setERC({
  //     ...editableRC,
  //     index: index,
  //     options: createTable[index].options,
  //   });

  //   console.log(editableRC);
  // };

  // const handleOutOfFocus = () => {
  //   if (editableRC.options !== undefined) {
  //     setERC({
  //       ...editableRC,
  //       index: null,
  //       options: undefined,
  //     });
  //   }
  // };

  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <table className="table">
            <tr className="table_row">
              <th className="table_header">Full Name</th>
              <th className="table_header">
                Age <FilterListIcon onClick={handleFilter} />
                {filterDropdown ? (
                  <>
                    <List />
                  </>
                ) : null}
              </th>

              <th className="table_header"> Email</th>
              <th>Department</th>
              <th className="table_header"> Action</th>
            </tr>

            {createTable.map((user, id) => {
              return (
                <>
                  {Filter[user.Age] ? (
                    <>
                      <tr className="table_row">
                        {editableRC.index === id &&
                        editableRC.field === "name" ? (
                          <div className="input_parent">
                            <input
                              className="input"
                              value={editableRC["name"]}
                              onChange={(e) => handleEditValue(e, id, "name")}
                              size={6}
                            />
                            <ClearIcon
                              style={{ color: "red" }}
                              onClick={() => handleCancel(id, "name")}
                            />
                            <CheckIcon
                              style={{ color: "green" }}
                              onClick={() => handleSaveData(id, "name")}
                            />
                          </div>
                        ) : (
                          <td
                            className="table_data"
                            onClick={() => handleAddValue(id, "name")}
                          >
                            {user.name}
                          </td>
                        )}
                        {editableRC.index === id &&
                        editableRC.field === "Age" ? (
                          <div className="input_parent">
                            <input
                              className="input"
                              value={editableRC["Age"]}
                              onChange={(e) => handleEditValue(e, id, "Age")}
                              size={2}
                            />
                            <ClearIcon
                              style={{ color: "red" }}
                              onClick={() => handleCancel(id, "Age")}
                            />
                            <CheckIcon
                              style={{ color: "green" }}
                              onClick={() => handleSaveData(id, "Age")}
                            />
                          </div>
                        ) : (
                          <td
                            className="table_data"
                            onClick={() => handleAddValue(id, "Age")}
                          >
                            {user.Age}
                          </td>
                        )}

                        {editableRC.index === id &&
                        editableRC.field === "email" ? (
                          <div className="input_parent">
                            <input
                              className="input"
                              value={editableRC["email"]}
                              onChange={(e) => handleEditValue(e, id, "email")}
                              size={9.5}
                            />
                            <ClearIcon
                              style={{ color: "red" }}
                              onClick={() => handleCancel(id, "email")}
                            />
                            <CheckIcon
                              style={{ color: "green" }}
                              onClick={() => handleSaveData(id, "email")}
                            />
                          </div>
                        ) : (
                          <td
                            className="table_data"
                            onClick={() => handleAddValue(id, "email")}
                          >
                            {user.email}
                          </td>
                        )}
                        <td className="table_data">
                          <Dropdown options={user.options} id={id}></Dropdown>
                        </td>

                        <td
                          className="table_data"
                          onClick={() => handleDelete(id)}
                        >
                          {"delete"}
                        </td>
                      </tr>
                    </>
                  ) : null}

                  {/* {Filter[user.Age]   ? (
                    <>
                      <tr className="table_row">
                        {editableRC.index === id &&
                        editableRC.field === "name" ? (
                          <div className="input_parent">
                            <input
                              className="input"
                              value={editableRC["name"]}
                              onChange={(e) => handleEditValue(e, id, "name")}
                              size={6}
                            />
                            <ClearIcon
                              style={{ color: "red" }}
                              onClick={() => handleCancel(id, "name")}
                            />
                            <CheckIcon
                              style={{ color: "green" }}
                              onClick={() => handleSaveData(id, "name")}
                            />
                          </div>
                        ) : (
                          <td
                            className="table_data"
                            onClick={() => handleAddValue(id, "name")}
                          >
                            {user.name}
                          </td>
                        )}
                        {editableRC.index === id &&
                        editableRC.field === "Age" ? (
                          <div className="input_parent">
                            <input
                              className="input"
                              value={editableRC["Age"]}
                              onChange={(e) => handleEditValue(e, id, "Age")}
                              size={2}
                            />
                            <ClearIcon
                              style={{ color: "red" }}
                              onClick={() => handleCancel(id, "Age")}
                            />
                            <CheckIcon
                              style={{ color: "green" }}
                              onClick={() => handleSaveData(id, "Age")}
                            />
                          </div>
                        ) : (
                          <td
                            className="table_data"
                            onClick={() => handleAddValue(id, "Age")}
                          >
                            {user.Age}
                          </td>
                        )}

                        {editableRC.index === id &&
                        editableRC.field === "email" ? (
                          <div className="input_parent">
                            <input
                              className="input"
                              value={editableRC["email"]}
                              onChange={(e) => handleEditValue(e, id, "email")}
                              size={9.5}
                            />
                            <ClearIcon
                              style={{ color: "red" }}
                              onClick={() => handleCancel(id, "email")}
                            />
                            <CheckIcon
                              style={{ color: "green" }}
                              onClick={() => handleSaveData(id, "email")}
                            />
                          </div>
                        ) : (
                          <td
                            className="table_data"
                            onClick={() => handleAddValue(id, "email")}
                          >
                            {user.email}
                          </td>
                        )}
                        <td className="table_data">
                          <Dropdown options={user.options} id={id}></Dropdown>
                        </td>

                        <td
                          className="table_data"
                          onClick={() => handleDelete(id)}
                        >
                          {"delete"}
                        </td>
                      </tr>
                    </>
                  ) : (
                    <>
                      <tr className="table_row">
                        {editableRC.index === id &&
                        editableRC.field === "name" ? (
                          <div className="input_parent">
                            <input
                              className="input"
                              value={editableRC["name"]}
                              onChange={(e) => handleEditValue(e, id, "name")}
                              size={6}
                            />
                            <ClearIcon
                              style={{ color: "red" }}
                              onClick={() => handleCancel(id, "name")}
                            />
                            <CheckIcon
                              style={{ color: "green" }}
                              onClick={() => handleSaveData(id, "name")}
                            />
                          </div>
                        ) : (
                          <td
                            className="table_data"
                            onClick={() => handleAddValue(id, "name")}
                          >
                            {user.name}
                          </td>
                        )}
                        {editableRC.index === id &&
                        editableRC.field === "Age" ? (
                          <div className="input_parent">
                            <input
                              className="input"
                              value={editableRC["Age"]}
                              onChange={(e) => handleEditValue(e, id, "Age")}
                              size={2}
                            />
                            <ClearIcon
                              style={{ color: "red" }}
                              onClick={() => handleCancel(id, "Age")}
                            />
                            <CheckIcon
                              style={{ color: "green" }}
                              onClick={() => handleSaveData(id, "Age")}
                            />
                          </div>
                        ) : (
                          <td
                            className="table_data"
                            onClick={() => handleAddValue(id, "Age")}
                          >
                            {user.Age}
                          </td>
                        )}

                        {editableRC.index === id &&
                        editableRC.field === "email" ? (
                          <div className="input_parent">
                            <input
                              className="input"
                              value={editableRC["email"]}
                              onChange={(e) => handleEditValue(e, id, "email")}
                              size={9.5} 
                            />
                            <ClearIcon
                              style={{ color: "red" }}
                              onClick={() => handleCancel(id, "email")}
                            />
                            <CheckIcon
                              style={{ color: "green" }}
                              onClick={() => handleSaveData(id, "email")}
                            />
                          </div>
                        ) : (
                          <td
                            className="table_data"
                            onClick={() => handleAddValue(id, "email")}
                          >
                            {user.email}
                          </td>
                        )}
                        <td className="table_data">
                          <Dropdown options={user.options} id={id}></Dropdown>
                        </td>

                        <td
                          className="table_data"
                          onClick={() => handleDelete(id)}
                        >
                          {"delete"}
                        </td>
                      </tr>
                    </>
                  )} */}
                  {/* <tr className="table_row">
                    {editableRC.index === id && editableRC.field === "name" ? (
                      <div className="input_parent">
                        <input
                          className="input"
                          value={editableRC["name"]}
                          onChange={(e) => handleEditValue(e, id, "name")}
                          size={6}
                        />
                        <ClearIcon
                          style={{ color: "red" }}
                          onClick={() => handleCancel(id, "name")}
                        />
                        <CheckIcon
                          style={{ color: "green" }}
                          onClick={() => handleSaveData(id, "name")}
                        />
                      </div>
                    ) : (
                      <td
                        className="table_data"
                        onClick={() => handleAddValue(id, "name")}
                      >
                        {user.name}
                      </td>
                    )}
                    {editableRC.index === id && editableRC.field === "Age" ? (
                      <div className="input_parent">
                        <input
                          className="input"
                          value={editableRC["Age"]}
                          onChange={(e) => handleEditValue(e, id, "Age")}
                          size={2}
                        />
                        <ClearIcon
                          style={{ color: "red" }}
                          onClick={() => handleCancel(id, "Age")}
                        />
                        <CheckIcon
                          style={{ color: "green" }}
                          onClick={() => handleSaveData(id, "Age")}
                        />
                      </div>
                    ) : (
                      <td
                        className="table_data"
                        onClick={() => handleAddValue(id, "Age")}
                      >
                        {user.Age}
                      </td>
                    )}

                    {editableRC.index === id && editableRC.field === "email" ? (
                      <div className="input_parent">
                        <input
                          className="input"
                          value={editableRC["email"]}
                          onChange={(e) => handleEditValue(e, id, "email")}
                          size={9.5}
                        />
                        <ClearIcon
                          style={{ color: "red" }}
                          onClick={() => handleCancel(id, "email")}
                        />
                        <CheckIcon
                          style={{ color: "green" }}
                          onClick={() => handleSaveData(id, "email")}
                        />
                      </div>
                    ) : (
                      <td
                        className="table_data"
                        onClick={() => handleAddValue(id, "email")}
                      >
                        {user.email}
                      </td>
                    )}
                    <td className="table_data">
                      <Dropdown options={user.options} id={id}></Dropdown>
                    </td>

                    <td className="table_data" onClick={() => handleDelete(id)}>
                      {"delete"}
                    </td> */}
                  {/* </tr> */}
                </>
              );
            })}
          </table>
          <button onClick={handleAdd}>Add</button>
        </div>
      </div>
    </div>
  );
}

export default App;
