import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Privider/AuthProvider";
import toast from "react-hot-toast";

const SocialLogin = () => {
    const navigate = useNavigate()
    const { googleLogin, githubLogin } = useContext(AuthContext);
    const handleSocialLogin = (media) => {
        media()
            .then(res => {
                toast.success('User logged in successfully');
                navigate('/')
                console.log(res);
            })
            .catch(error => {
                toast.error(error.message)
            })
    }
    return (
        <>
          <div className="divider">continue with</div>
            <div className="flex justify-around">
                <button
                    onClick={() => handleSocialLogin(googleLogin)}
                    className="btn btn-neutral btn-sm">Google</button>
                <button
                    onClick={() => handleSocialLogin(githubLogin)}
                    className="btn btn-neutral btn-sm">Github</button>

            </div>  
        </>
    );
};

export default SocialLogin;