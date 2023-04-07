import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";

export default function Home() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
        <div className="flex">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
        <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

        <h1> Welcome to the Building Management App</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum tristique nunc sed tincidunt. Curabitur eu commodo urna. Maecenas convallis leo nec ligula rutrum, id cursus est tempus. Fusce at vulputate est. Duis in eros turpis. Integer auctor commodo massa eu scelerisque. Fusce porttitor justo vitae molestie viverra. Cras vitae mattis elit, sit amet ullamcorper erat. Mauris nec orci sit amet magna maximus vehicula. In eleifend orci et odio rutrum blandit id vel tellus. Fusce eu sagittis ex, sit amet euismod urna. Nam imperdiet diam tortor, et ultricies nulla aliquet a. Nunc lobortis dolor nulla, non dictum velit porttitor eu. Phasellus in porta est. Nunc non ex tincidunt, placerat arcu id, porta justo.

        Maecenas porttitor eu magna eget convallis. Suspendisse tempus id mauris in condimentum. Nullam tempus ultrices quam a lacinia. Phasellus vehicula molestie massa vitae aliquet. Vivamus ac arcu risus. Etiam ac blandit ex, efficitur commodo eros. Ut ac justo eu ligula aliquet elementum id sed nunc. Phasellus sollicitudin arcu in tincidunt egestas.
        
        Sed euismod lorem non arcu placerat consequat. Mauris non massa tellus. Nunc accumsan enim quis eleifend pulvinar. Maecenas dui sapien, rhoncus ut ipsum non, interdum pretium mi. Quisque consequat odio quis consequat rhoncus. Phasellus et interdum dolor, quis euismod nisl. Sed tempus tempus nisl, et accumsan libero elementum ut. Aenean vel ullamcorper turpis.</p>
        </div>
        </div>
        </>
    )
}