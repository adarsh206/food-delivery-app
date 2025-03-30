import { useState } from "react";
import { Input } from "../components/ui/input";
import { Loader2, Mail } from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
    const [email, setEmail] = useState<string>("");
    const loading = false;

  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      <form className="flex flex-col gap-5 md:p-8 w-full max-w-md rounded-lg mx-4">
        <div className="text-center">
          <h1 className="font-extrabold text-2xl mb-2 bg-gradient-to-r from-purple-600 to-rose-600 bg-clip-text text-transparent">Forgot Password</h1>
          <p className="text-sm text-gray-600">
            Enter your email address to reset your password
          </p>
        </div>
        <div className="relative w-full"> 
            <Input 
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="focus-visible:ring-1 focus-visible:border-blue-600 pl-10"
            />
            <Mail className="absolute inset-y-2 left-2 text-gray-600 pointer-events-none"/>
        </div>
        {
            loading ? (
                <Button disabled className="bg-orange hover:bg-hoverColor"><Loader2 className="mr-2 h-4 w-4 animate-spin"/>Please wait</Button>
            ) : (
                <Button className="bg-orange hover:bg-hoverColor">Send Reset Link</Button>
            )
        }
        <span className="text-center">Back to {" "} <Link to="/login" className="text-blue-600">Login</Link></span>
      </form>
    </div>
  );
};

export default ForgotPassword;
