import React, { useState, useEffect } from "react";
import axios from "axios";
import Order from "./Order";
import SkeletonLoading from "./SkeletonLoading";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [checks, setChecks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  console.log(checks);
  const fetchAllChecks = async () => {
    try {
      const response = await axios.get("http://62.72.30.43/api/all_checks", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setChecks(response.data.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const changeCheckStatus = async (checkId) => {
    setIsLoading(true);
    try {
      await axios.post(
        "http://62.72.30.43/api/Change_check",
        { check_id: checkId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      fetchAllChecks();
    } catch (error) {
      console.error("Error changing check status:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAllChecks();
  }, []);

  return (
    <>
      <div className="flex items-center justify-center ">
        <button
          onClick={logOut}
          className="border p-3 mx-8 rounded-lg shadow-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="#DC0D28"
            className="bi bi-box-arrow-left"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"
            />
            <path
              fillRule="evenodd"
              d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"
            />
          </svg>
        </button>

        <h1 className="text-2xl tracking-wider py-10 font-semibold  mx-auto border-spacing-7 text-slate-600">
          Check Payments
        </h1>
      </div>

      <div className="mx-auto py-6">
        {isLoading ? (
          <SkeletonLoading />
        ) : (
          checks.map((check) => (
            <Order
              key={check.id}
              order={check}
              onOkClick={() => changeCheckStatus(check.id)}
            />
          ))
        )}
      </div>
    </>
  );
};

export default Dashboard;
