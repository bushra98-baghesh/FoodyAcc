import React, { useState, useEffect } from "react";
import axios from "axios";
import Order from "./Order";
import SkeletonLoading from "./SkeletonLoading";
import { useNavigate } from "react-router-dom";
import Pusher from "pusher-js";
import Notification from "./Notification";

const Dashboard = () => {
  const [checks, setChecks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [notification, setNotification] = useState("");
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  console.log(checks);
  const fetchAllChecks = async () => {
    try {
      const response = await axios.get(
        "https://api.foody.gomaplus.tech/api/orders/Casher",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setChecks(response.data?.data);
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
        `https://api.foody.gomaplus.tech/api/order/ChangeToPaid/${checkId}`,
        {},

        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      fetchAllChecks();
    } catch (error) {
      console.error("Error changing check status:", error);
    }
  };

  useEffect(() => {
    fetchAllChecks();
  }, []);

  useEffect(() => {
    const pusher = new Pusher("897190819c4cec71fdc0", {
      cluster: "mt1",
    });

    const channel = pusher.subscribe("Casher");

    channel.bind("ToCasher", (data) => {
      console.log(data.Casher, "from real timeeee");
      let order = data.Casher;
      order.isNew = true;
      order.table = { table_num: order.table_id };
      console.log(data);
      setNotification("New check added!");
      setChecks((prev) => {
        return [order, ...prev];
      });
    });

    return () => {
      channel.unbind();
      pusher.disconnect();
    };
  }, []);

  return (
    <div className="bg-gray-100">
      <div className="flex items-center justify-center  ">
        <button
          onClick={logOut}
          className="border bg-white p-3 mx-8 rounded-lg shadow-lg"
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
      {notification && (
        <Notification
          message={notification}
          onClose={() => setNotification("")}
        />
      )}
    </div>
  );
};

export default Dashboard;
