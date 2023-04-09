import "./App.css";
import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext";
import RouteGuard from "./components/common/RouteGuard"
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Building from "./components/Building/Building";
import AddBuilding from "./components/Building/AddBuilding";
import Tenants from "./components/Tenants/Tenants";
import AddTenant from "./components/Tenants/AddTenant";
import TenantDetails from "./components/Tenants/TenantDetails";
import EditTenant from "./components/Tenants/EditTenant";
import { TenantOwner } from "./components/common/TenantOwner";

function App() {
	return (
		<div className="bg-white">
			<AuthContextProvider>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/home" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />

					<Route element={<RouteGuard />}>
						<Route path="/signals" element={<Home />} />
						<Route path="/building" element={<Building />} />
						<Route path="/building/add" element={<AddBuilding />} />
						<Route path="/tenants" element={<Tenants />} />
						<Route path="/tenants/add" element={<AddTenant />} />
						<Route path="/tenants/:id/edit" element={
							<TenantOwner>
								<EditTenant />
							</TenantOwner>} />
						<Route path="/tenants/:id" element={
							<TenantOwner>
								<TenantDetails />
							</TenantOwner>
							} />
						<Route path="/news" element={<Home />} />
                    </Route>
					<Route path="*" element={<h1>Page not found!</h1>} />
				</Routes>
			</AuthContextProvider>
		</div>
	);
}

export default App;
