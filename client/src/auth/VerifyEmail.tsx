import { useRef, useState } from "react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Loader2 } from "lucide-react";

const VerifyEmail = () => {
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const inputRef = useRef<any>([]);
  const loading = false;

  const handleChange = (index: number, value: string) => {
    if (/^[a-zA-Z0-9]/.test(value) || value === "") {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
    }
    // Move to the next input field if a digit is entered
    if (value !== "" && index < 5) {
      inputRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRef.current[index - 1].focus();
    }
  };
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="p-8 rounded-md w-full max-w-md flex flex-col gap-10 border border-gray-200">
        <div className="text-center">
          <h1 className="font-extrabold text-2xl bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Verify your email
          </h1>
          <p className="text-sm text-gray-600">
            Enter the 6 digit code sent to your email address
          </p>
        </div>
        <form action="">
          <div className="flex justify-between">
            {otp.map((letter: string, idx: number) => (
              <Input
                key={idx}
                ref={(element) => (inputRef.current[idx] = element)}
                type="text"
                maxLength={1}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange(idx, e.target.value)
                }
                onKeyDown={(e:React.KeyboardEvent<HTMLInputElement>) => handleKeyDown(idx, e)}
                value={letter}
                className="md:w-12 md:h-12 w-8 h-8 text-center text-sm md:text-2xl font-normal md:font-bold rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
              />
            ))}
          </div>
          {
            loading ? (
                <Button disabled className="bg-gradient-to-r from-purple-500 to-pink-500 text-black mt-6 w-full hover:bg-gradient-to-r
          hover:from-purple-400 hover:to-pink-400 hover:text-white"><Loader2 className="mr-2 w-4 h-4 animate-spin"/>Please wait</Button>
            ) : (
                <Button className="bg-gradient-to-r from-purple-500 to-pink-500 text-black mt-6 w-full hover:bg-gradient-to-r
          hover:from-purple-400 hover:to-pink-400 hover:text-white">Verify</Button>
            )
          }

        </form>
      </div>
    </div>
  );
};

export default VerifyEmail;
