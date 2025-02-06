"use client";
import { useState } from "react";
import { Eye, EyeOff, Headphones } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setCredentials] = useState({ 
    username: "", 
    password: "" 
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });

      if (response.ok) {
        window.location.href = "/dashboard";
      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred during login");
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Login Form Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-bold mb-2">Log in</h2>
          <p className="text-gray-600 mb-6">Welcome back! Please enter your details.</p>
          
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Username or Account Number"
                className="w-full p-3 border rounded-md focus:outline-green-600"
                value={credentials.username}
                onChange={(e) => setCredentials({ 
                  ...credentials, 
                  username: e.target.value 
                })}
              />
            </div>
            
            <div className="mb-4 relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full p-3 border rounded-md pr-10"
                value={credentials.password}
                onChange={(e) => setCredentials({ 
                  ...credentials, 
                  password: e.target.value 
                })}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-4 text-gray-500"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            
            <div className="flex justify-between mb-6">
              <label className="flex items-center">
                <input 
                  type="checkbox" 
                  className="mr-2 accent-green-600"
                />
                Remember for 30 days
              </label>
              <a href="#" className="text-green-600 hover:underline">
                Forgot Password
              </a>
            </div>
            
            <button
              type="submit"
              className="w-full bg-green-600 text-white p-3 rounded-md hover:bg-green-700"
            >
              Login
            </button>
            
            <div className="mt-4 text-center">
              <a href="#" className="text-gray-600 font-bold">
                Set Up Internet Banking
              </a>
            </div>
          </form>
        </div>
      </div>
      
      {/* Image Section - Hidden on mobile */}
      <div 
        className="hidden md:block md:w-1/2 bg-gray-100 bg-cover bg-center login_bg_container"
        style={{
          backgroundImage: 'url("/assets/login.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
      </div>
      
      {/* Support Button */}
      <div className="fixed bottom-4 right-4">
        <button className="bg-green-600 p-3 rounded-full text-white">
          <Headphones size={24} />
        </button>
      </div>
    </div>
  );
}