import { useEffect, useState } from "react"
import { DashboardCard } from "./components/DashboardCard"
import { DashboardEmpty } from "./components/DashboardEmpty"

export const DashboardPage = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const token = JSON.parse(sessionStorage.getItem("token"));
        const bsid = JSON.parse(sessionStorage.getItem("bsid"));
      async function fetchorders(){
        const response = await fetch(`http://localhost:8000/660/orders?user.id=${bsid}`, {
                method: "GET",
                headers: { "content-Type": "application/json", Authorization: `Bearer ${token}` }
            });
            const data = await response.json();
            setOrders(data);
      }
      fetchorders();
    },[]);
  return (
    <main>
      <section>
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">My Dashboard</p>
      </section>
      <section>
            {orders.length && orders.map((order)=>(
                <DashboardCard key={order.id} order={order}/>
            ))}
      </section>
      <section>
        {!orders.length  && <DashboardEmpty/> }
      </section>
    </main>
  )
}