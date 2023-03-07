import React, { useState } from "react";
import ModalAddUser from "@/components/Modals/ModalAddUser";
import ModalDeleteUser from "@/components/Modals/ModalDeleteUser";
import ModalEditUser from "@/components/Modals/ModalEditUser";
import Pagination from "@/components/Table/Pagination";
import TableUser from "@/components/Table/TableUser";
import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";

export default function Users() {
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  function showHideAddModal() {
    setAddModalOpen(!isAddModalOpen);
  }

  function showHideEditModal() {
    setEditModalOpen(!isEditModalOpen);
  }

  function showHideDeleteModal() {
    setDeleteModalOpen(!isDeleteModalOpen);
  }

  function addModalHandler() {
    console.log("User Added!");
    setAddModalOpen(!isAddModalOpen);
  }

  function editModalHandler() {
    console.log("User Edited!");
    setEditModalOpen(!isEditModalOpen);
  }

  function deleteModalHandler() {
    console.log("User Deleted!");
    setDeleteModalOpen(!isDeleteModalOpen);
  }

  return (
    <>
      <Navbar />
      <div className="flex pt-16 overflow-hidden bg-gray-50 dark:bg-gray-900">
        <Sidebar />
        <div
          id="main-content"
          className="relative w-full h-full overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900"
        >
          <TableUser
            showAddModal={showHideAddModal}
            showEditModal={showHideEditModal}
            showDeleteModal={showHideDeleteModal}
          />
          <Pagination />
          <ModalAddUser
            isModalOpen={isAddModalOpen}
            onAdd={addModalHandler}
            onClose={showHideAddModal}
          />
          <ModalEditUser
            isModalOpen={isEditModalOpen}
            onEdit={editModalHandler}
            onClose={showHideEditModal}
          />
          <ModalDeleteUser
            isModalOpen={isDeleteModalOpen}
            onDelete={deleteModalHandler}
            onClose={showHideDeleteModal}
          />
        </div>
      </div>
    </>
  );
}