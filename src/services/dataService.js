export async function getUser() {
    const token = JSON.parse(sessionStorage.getItem("token"));
    const bsid = JSON.parse(sessionStorage.getItem("bsid"));
    const requestOptions = {
        method: "GET",
        headers: { "content-Type": "application/json", Authorization: `Bearer ${token}` }
    }
    const response = await fetch(`http://localhost:8000/600/users/${bsid}`, requestOptions);
     if(!response.ok){
        throw { message: response.statusText, status: response.status }; //eslint-disable-line
    }
    const data = await response.json();
    return data;
}

export async function getUserOrders() {
    const token = JSON.parse(sessionStorage.getItem("token"));
    const bsid = JSON.parse(sessionStorage.getItem("bsid"));
    const requestOptions= {
        method: "GET",
        headers: { "content-Type": "application/json", Authorization: `Bearer ${token}` }
    }
    const response = await fetch(`http://localhost:8000/660/orders?user.id=${bsid}`,requestOptions);
     if(!response.ok){
        throw { message: response.statusText, status: response.status }; //eslint-disable-line
    }
    const data = await response.json();
    return data;
}

export async function createOrder(cartList, total, user) {
    const token = JSON.parse(sessionStorage.getItem("token"));
    const order = {
        CartList: cartList,
        amount_paid: total,
        quantity: cartList.length,
        user: user.name,
        email: user.email,
        id: user.id
    }
    const requestOptions={
        method: "POST",
        headers: { "content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify(order)
    }
    const response = await fetch("http://localhost:8000/660/orders",requestOptions );
     if(!response.ok){
        throw { message: response.statusText, status: response.status }; //eslint-disable-line
    }
    const data = await response.json();
    return data;
}