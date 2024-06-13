import React, { useState } from "react";
import axiosService from "../../services/configAxios";
import { Alert } from "react-bootstrap";
import { Modal } from "antd";
import ProfileLayout from "./ProfileLayout";

function UserProfile() {
  const storedUser = localStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser) : {};
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isErrorModalVisible, setIsErrorModalVisible] = useState(false);
  const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);

  const [formData, setFormData] = useState({
    name: user.name || "",
    email: user.email || "",
    date_of_birth: user.date_of_birth || "",
    address: user.address || "",
    phone: user.phone || "",
    id: user.id || "",
    role_id: user.role_id || "",
    image_url:
      user.image_url ||
      "https://down-vn.img.susercontent.com/file/cdf9af013aa652eb0596cb252b1101d4_tn"
  });

  const [uploadedImage, setUploadedImage] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedImage(file);
      setFormData({ ...formData, image_url: URL.createObjectURL(file) });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.id) {
      console.error("User ID is missing. Cannot update information.");
      return;
    }
    try {
      const updateData = new FormData();
      updateData.append("name", formData.name);
      updateData.append("email", formData.email);
      updateData.append("date_of_birth", formData.date_of_birth);
      updateData.append("address", formData.address);
      updateData.append("phone", formData.phone);
      updateData.append("id", formData.id);
      updateData.append("role_id", formData.role_id);

      if (uploadedImage) {
        updateData.append("image_url", uploadedImage);
      }

      const profileResponse = await axiosService.post(
        `/user/updateInformation/${formData.id}`,
        updateData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
            "Content-Type": "multipart/form-data"
          }
        }
      );

      if (profileResponse.status === 200) {
        const updatedUser = profileResponse.data.user;
        localStorage.setItem("user", JSON.stringify(updatedUser));
        setShowSuccess(true);
        setShowError(false);
        setSuccessMessage("Updated user information successfully!");
        setIsSuccessModalVisible(true);
      } else {
        console.error("Failed to update user profile");
        setShowSuccess(false);
        setShowError(true);
        setErrorMessage("Failed to update user profile !");
        setIsErrorModalVisible(true);
      }
    } catch (error) {
      console.error("An error occurred while updating user profile:", error);
      setShowSuccess(false);
      setShowError(true);
      setErrorMessage("Update user information faild !");
      setIsErrorModalVisible(true);
    }
  };

  const handleReset = () => {
    setFormData({
      name: user.name || "",
      email: user.email || "",
      date_of_birth: user.date_of_birth || "",
      address: user.address || "",
      phone: user.phone || "",
      id: user.id || "",
      role_id: user.role_id || "",
      image_url:
        user.image_url ||
        "https://down-vn.img.susercontent.com/file/cdf9af013aa652eb0596cb252b1101d4_tn"
    });
    setUploadedImage(null);
  };

  return (
  
    <ProfileLayout 
        image={formData.image_url}
        username={formData.name}
    >
          <div id="personal-info" className="section">
            <div className="card mb-4">
              <div className="card-body d-flex align-items-center gap-4">
                <img
                  src={formData.image_url}
                  alt="user-avatar"
                  className="d-block rounded-circle"
                  height="150px"
                  width="150px"
                />
                <div className="button-wrapper">
                  <label htmlFor="upload" className="btn btn-primary me-2 mb-4">
                    <span>Upload new photo</span>
                    <input
                      type="file"
                      id="upload"
                      className="account-file-input"
                      hidden
                      accept="image/png, image/jpeg"
                      onChange={handleImageChange}
                    />
                  </label>
                  <button
                    type="button"
                    className="btn btn-outline-secondary mb-4"
                    onClick={handleReset}
                  >
                    <span>Reset</span>
                  </button>
                  <p className="text-muted mb-0">
                    Allowed JPG, GIF or PNG. Max size of 800K
                  </p>
                </div>
              </div>
            </div>
            {showSuccess && (
              <Alert variant="success">Profile updated successfully!</Alert>
            )}
            {showError && (
              <Alert variant="danger">
                Failed to update profile. Please try again.
              </Alert>
            )}
            <div className="card-body">
              <form id="formAccountSettings" onSubmit={handleSubmit}>
                <input type="hidden" name="id" value={formData.id} />
                <input type="hidden" name="role_id" value={formData.role_id} />
                <div className="row">
                  <div className="mb-3 col-md-6">
                    <label htmlFor="name" className="form-label">
                      Full Name
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      autoFocus
                    />
                  </div>
                  <div className="mb-3 col-md-6">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3 col-md-6">
                    <label htmlFor="date_of_birth" className="form-label">
                      Date of birth
                    </label>
                    <input
                      className="form-control"
                      type="date"
                      name="date_of_birth"
                      id="date_of_birth"
                      value={formData.date_of_birth}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3 col-md-6">
                    <label htmlFor="address" className="form-label">
                      Address
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3 col-md-6">
                    <label htmlFor="phone" className="form-label">
                      Phone number
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <button type="submit" className="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </form>
            </div>
            <Modal
              className="error"
              title="Error"
              open={isErrorModalVisible}
              onOk={() => setIsErrorModalVisible(false)}
              onCancel={() => setIsErrorModalVisible(false)}
            >
              <p>{errorMessage}</p>
            </Modal>
            <Modal
              title="Success"
              open={isSuccessModalVisible}
              onOk={() => setIsSuccessModalVisible(false)}
              onCancel={() => setIsSuccessModalVisible(false)}
            >
              <p>{successMessage}</p>
            </Modal>
          </div></ProfileLayout>
    //     </div>
    //   </div>
    // </div>
  );
}

export default UserProfile;
