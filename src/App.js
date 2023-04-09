import "./App.css";
import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext";
import RouteGuard from "./components/common/RouteGuard"
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Test from "./components/Test";
import HeaderTest from "./components/Header/HeaderTest";
import Building from "./components/Building/Building";
import AddBuilding from "./components/Building/AddBuilding";
import Tenants from "./components/Tenants/Tenants";
import AddTenant from "./components/Tenants/AddTenant";
import TenantDetails from "./components/Tenants/TenantDetails";
import EditTenant from "./components/Tenants/EditTenant";

function App() {
	// TODO: Min width? 
	return (
		<div className="bg-white">
			<AuthContextProvider>
				{/* <HeaderTest /> */}
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/home" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/test" element={<Test />} />
					<Route path="*" element={<h1>Page not found!</h1>} />

					<Route element={<RouteGuard />}>
						<Route path="/signals" element={<Test />} />
						<Route path="/building" element={<Building />} />
						<Route path="/building/add" element={<AddBuilding />} />
						<Route path="/tenants" element={<Tenants />} />
						<Route path="/tenants/add" element={<AddTenant />} />
						<Route path="/tenants/:id/edit" element={<EditTenant />} />
						<Route path="/tenants/:id" element={<TenantDetails />} />
						<Route path="/news" element={<Test />} />
                    </Route>

				</Routes>
			</AuthContextProvider>
		</div>
	);
}

export default App;
