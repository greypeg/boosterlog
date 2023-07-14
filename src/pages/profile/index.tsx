import { useUser } from "@clerk/nextjs"
import { NextPage } from "next";

const Profile: NextPage = () => {
    const user = useUser();

    if (user.isLoaded === false)
        return <div className="text-white">Loading ...</div>

    if (!user.isSignedIn && user.isLoaded) {
        return <div className="text-white">Error 404</div>
    }
    else return (
        <div className="text-white">
            <h1>Your Profile</h1>
            <h2>Hello {user.user.firstName}</h2>
        </div>
    );
};

export default Profile;