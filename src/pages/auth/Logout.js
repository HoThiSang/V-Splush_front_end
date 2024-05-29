import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosService from "../../services/configAxios";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
        await axiosService.post('/logout', null, {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
            },
        });

      // Xóa token lưu trữ ở phía client
      localStorage.removeItem('authToken');
      localStorage.removeItem('user');
      document.cookie = 'user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

      // Chuyển hướng về trang login
      navigate('/');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;