import Head from "next/head";
import styles from "../styles/Home.module.css";
import React, { useEffect, useState } from "react";
import FormList from "./component/formlist";
import data from "../data-dummy/data.json";
import List from "./component/list";
// import list from "./component/list";
import Sidebar from "./component/sidebar";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPen,
  faWindowClose,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const [formList, setFormList] = useState(data);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isUpdate, setIsUpdate] = useState({ id: null, status: false });
  const [userInput, setUserInput] = useState({
    inOrder: "",
    nama: "",
    noHP: "",
    email: "",
    Qty: "",
    Ket: "",
  });

  const handleChange = (e) => {
    let data = { ...userInput };
    data[e.target.name] = e.target.value;
    setUserInput(data);
  };

  let newData = [];
  let dataTable = [...formList, ...newData];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      (userInput.inOrder === "",
      userInput.nama === "",
      userInput.noHP === "",
      userInput.email === "",
      userInput.Qty === "",
      userInput.Ket === ""
      )
    ) {
      return false;
    }

    if (isUpdate.status) {
      data.forEach((list) => {
        if (list.id === isUpdate.id) {
          list.inOrder = userInput.inOrder;
          list.nama = userInput.nama;
          list.noHP = userInput.noHP;
          list.email = userInput.email;
          list.Qty = userInput.Qty;
          list.Ket = userInput.Ket;
        }
      });
      alert("Berhasil Edit Data");
    } else {
      data.push({
        id: formList.length + 1,
        inOrder: userInput.inOrder,
        nama: userInput.nama,
        noHP: userInput.noHP,
        email: userInput.email,
        Qty: userInput.Qty,
        Ket: userInput.Ket
      });
      alert("Berhasil Tambah Data");
    }
    setIsUpdate({ id: null, status: false });
    setFormList(data);
    setUserInput({ 
      inOrder: "", 
      nama: "", 
      noHP: "",      
      email: "", 
      Qty: "", 
      Ket: ""
    });
  };

  useEffect(() => { 
    data
  });

  const handleEdit = (list) => {
    setUserInput({
      inOrder: list.inOrder,
      nama: list.nama,
      noHP: list.noHP,
      email: list.email,
      Qty: list.Qty,
      Ket: list.Ket,
    });
    setIsUpdate({ id: list.id, status: true });
    console.log(list);
  };

  const handleDelete = (list) => {
    let filtered = formList.filter((formList) => formList !== list);
    setFormList(filtered);
    console.log(filtered);
  };

  return (
    <div>
      <Head>
         <title>BreadCall</title>
         <meta name="keywords" content="brands"></meta>
      </Head>
      <Sidebar />
      <div className="content" style={{marginLeft: "250px"}}>
        <h2 className={styles.bgh1}></h2>
        <Modal
            isOpen={modalIsOpen}
            ariaHideApp={false}
            style={{
              content: {
                top: "50px",
                left: "250px",
                right: "40px",
                bottom: "40px",
              },
            }}
          >
            <button
              onClick={() => setModalIsOpen(false)}
              style={{ float: "right" }}
              className="button-ud"
            >
              <FontAwesomeIcon
                icon={faWindowClose}
                size="2x"
                style={{ color: "red" }}
              />
            </button>
            <section className="content-product">
              <section className="add-product">
                <h1> Pesanan Masuk </h1>     
            <div className="form-container">
            <form id="form" className="form">
            <div className="form__group field">
              <select id="inOrder" name="inOrder"
                  onChange={handleChange} required>
                <option value="">Sumber Pesanan</option>
                <option value="call">Call</option>
                <option value="email">Email</option>
                <option value="whatsapp">WhatsApp</option>
              </select>
            <label className="form__label">Price</label>
            </div>
            <div className="form__group field">
              <input
                type="input"
                name="nama"
                placeholder="Nama"
                className="input"
                onChange={handleChange}
                value={userInput.nama}
                required
              />
            </div>
            <div className="form__group field">
              <input
                type="input"
                name="noHP"
                placeholder="Nomor HP"
                className="input"
                onChange={handleChange}
                value={userInput.noHP}
                required
              />
            </div>
            <div className="form__group field">
              <input
                type="input"
                name="email"
                placeholder="Email (jika ada)"
                className="input"
                onChange={handleChange}
                value={userInput.email}
              />
            </div>
            <div className="form__group field">
              <input
                type="number"
                name="Qty"
                placeholder="Jumlah Roti"
                className="input"
                onChange={handleChange}
                value={userInput.Qty}
              />
            </div>
            <div className="form__group field">
              <textarea
                type="input"
                name="Ket"
                placeholder="Keterangan"
                className="input"
                onChange={handleChange}
                value={userInput.Ket}
                required
              />
            </div>
            <button type="button" onClick={handleSubmit} className="button">
              Submit
            </button>
          </form>
        </div>
        </section>
        </section>
        </Modal>
        <div className="Header" style={{marginBottom: "30px"}}>
          <button onClick={() => setModalIsOpen(true)} className="bn54">
           Create Product
          </button>
        </div>
        <List
          formList={dataTable}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </div>
    </div>
    // <div>
    // <div className="content">
    //   <Head>
    //     <title>BreadCall</title>
    //     <meta name="keywords" content="brands"></meta>
    //   </Head>

    //   <h2 className={styles.bgh1}>BreadCall</h2>

    //   <Modal
    //       isOpen={modalIsOpen}
    //       ariaHideApp={false}
    //       style={{
    //         content: {
    //           top: "50px",
    //           left: "250px",
    //           right: "40px",
    //           bottom: "40px",
    //         },
    //       }}
    //     >
    //       <button
    //         onClick={() => setModalIsOpen(false)}
    //         style={{ float: "right" }}
    //         className="button-ud"
    //       >
    //         <FontAwesomeIcon
    //           icon={faWindowClose}
    //           size="2x"
    //           style={{ color: "red" }}
    //         />
    //       </button>
    //       <section className="content-product">
    //         <section className="add-product">
    //           <h1> Pesanan Masuk </h1>     
    //       <div className="form-container">
    //       <form id="form" className="form">
    //       <div className="form__group field">
    //         <select id="inOrder" name="inOrder"
    //             onChange={handleChange} required>
    //           <option value="">Sumber Pesanan</option>
    //           <option value="call">Call</option>
    //           <option value="email">Email</option>
    //           <option value="whatsapp">WhatsApp</option>
    //         </select>
    //       <label className="form__label">Price</label>
    //       </div>
    //       <div className="form__group field">
    //         <input
    //           type="input"
    //           name="nama"
    //           placeholder="Nama"
    //           className="input"
    //           onChange={handleChange}
    //           value={userInput.nama}
    //           required
    //         />
    //       </div>
    //       <div className="form__group field">
    //         <input
    //           type="input"
    //           name="noHP"
    //           placeholder="Nomor HP"
    //           className="input"
    //           onChange={handleChange}
    //           value={userInput.noHP}
    //           required
    //         />
    //       </div>
    //       <div className="form__group field">
    //         <input
    //           type="input"
    //           name="email"
    //           placeholder="Email (jika ada)"
    //           className="input"
    //           onChange={handleChange}
    //           value={userInput.email}
    //         />
    //       </div>
    //       <div className="form__group field">
    //         <input
    //           type="number"
    //           name="Qty"
    //           placeholder="Jumlah Roti"
    //           className="input"
    //           onChange={handleChange}
    //           value={userInput.Qty}
    //         />
    //       </div>
    //       <div className="form__group field">
    //         <textarea
    //           type="input"
    //           name="Ket"
    //           placeholder="Keterangan"
    //           className="input"
    //           onChange={handleChange}
    //           value={userInput.Ket}
    //           required
    //         />
    //       </div>
    //       <button type="button" onClick={handleSubmit} className="button">
    //         Submit
    //       </button>
    //     </form>
    //   </div>
    //   </section>
    //   </section>
    //   </Modal>

    //   <div className="Header">
    //     <button onClick={() => setModalIsOpen(true)} className="bn54">
    //       Create Product
    //     </button>
    //   </div>

    //   <FormList
    //     list={list}
    //     formList={formList}
    //     handleEdit={handleEdit}
    //     handleDelete={handleDelete}
    //   />
    // </div>
    // </div>
  );
}
