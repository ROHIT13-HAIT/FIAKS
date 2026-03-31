// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate, useLocation } from 'react-router-dom';
// import { Button } from '../components/ui/button';
// import { Input } from '../components/ui/input';
// import { Label } from '../components/ui/label';
// import { toast } from 'sonner';
// import { ArrowLeft, Eye, EyeOff } from 'lucide-react';
// import axios from 'axios';

// const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
// const API = `${BACKEND_URL}/api`;

// const LoginPage = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [isRegister, setIsRegister] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     name: '',
//     organization: '',
//     designation: '',
//   });

//   useEffect(() => {
//     const params = new URLSearchParams(location.search);
//     if (params.get('mode') === 'register') {
//       setIsRegister(true);
//     }
//   }, [location]);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       if (isRegister) {
//         const { email, password, name, organization, designation } = formData;
//         if (!email || !password || !name) {
//           toast.error('Please fill in all required fields');
//           setLoading(false);
//           return;
//         }
//         const response = await axios.post(`${API}/auth/register`, {
//           email,
//           password,
//           name,
//           organization: organization || undefined,
//           designation: designation || undefined,
//         });
//         localStorage.setItem('token', response.data.access_token);
//         toast.success('Registration successful! Welcome to Fintech Forum.');
//         navigate('/');
//       } else {
//         const { email, password } = formData;
//         if (!email || !password) {
//           toast.error('Please enter email and password');
//           setLoading(false);
//           return;
//         }
//         const response = await axios.post(`${API}/auth/login`, { email, password });
//         localStorage.setItem('token', response.data.access_token);
//         toast.success('Login successful!');
//         navigate('/');
//       }
//     } catch (error) {
//       const message = error.response?.data?.detail || 'An error occurred. Please try again.';
//       toast.error(message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-slate-50 flex" data-testid="login-page">
//       {/* Left Panel - Image */}
//       <div className="hidden lg:flex lg:w-1/2 relative">
//         <div
//           className="absolute inset-0 bg-cover bg-center"
//           style={{
//             backgroundImage:
//               'url(https://images.unsplash.com/photo-1560439514-0fc9d2cd5e1b?w=1200&q=80)',
//           }}
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-[#07549c]/90 to-[#07549c]/70" />
//         <div className="relative z-10 flex flex-col justify-center p-12 text-white">
//           <Link to="/" className="flex items-center gap-3 mb-12">
//             <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
//               <span className="text-white font-bold text-xl font-['Outfit']">FF</span>
//             </div>
//             <span className="text-2xl font-bold font-['Outfit']">Fintech Forum</span>
//           </Link>
//           <h1 className="font-['Outfit'] text-4xl md:text-5xl font-bold mb-6">
//             Welcome to the Premier BFSI Community
//           </h1>
//           <p className="text-white/80 text-lg max-w-md">
//             Join thousands of industry leaders shaping the future of financial services.
//           </p>
//         </div>
//       </div>

//       {/* Right Panel - Form */}
//       <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
//         <div className="w-full max-w-md">
//           <Link
//             to="/"
//             className="inline-flex items-center gap-2 text-slate-600 hover:text-[#07549c] mb-8"
//             data-testid="back-to-home"
//           >
//             <ArrowLeft className="w-4 h-4" />
//             Back to Home
//           </Link>

//           <div className="lg:hidden flex items-center gap-3 mb-8">
//             <div className="w-10 h-10 bg-[#07549c] rounded-lg flex items-center justify-center">
//               <span className="text-white font-bold font-['Outfit']">FF</span>
//             </div>
//             <span className="text-xl font-bold font-['Outfit'] text-[#07549c]">Fintech Forum</span>
//           </div>

//           <h2 className="font-['Outfit'] text-3xl font-bold text-slate-900 mb-2">
//             {isRegister ? 'Create an Account' : 'Sign In'}
//           </h2>
//           <p className="text-slate-600 mb-8">
//             {isRegister
//               ? 'Join our community of BFSI professionals'
//               : 'Welcome back! Please enter your details.'}
//           </p>

//           <form onSubmit={handleSubmit} className="space-y-5">
//             {isRegister && (
//               <div>
//                 <Label htmlFor="name" className="text-slate-700">
//                   Full Name *
//                 </Label>
//                 <Input
//                   id="name"
//                   name="name"
//                   type="text"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="John Doe"
//                   className="mt-1.5 h-12"
//                   data-testid="register-name-input"
//                 />
//               </div>
//             )}

//             <div>
//               <Label htmlFor="email" className="text-slate-700">
//                 Email Address {isRegister && '*'}
//               </Label>
//               <Input
//                 id="email"
//                 name="email"
//                 type="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="you@example.com"
//                 className="mt-1.5 h-12"
//                 data-testid="email-input"
//               />
//             </div>

//             <div>
//               <Label htmlFor="password" className="text-slate-700">
//                 Password {isRegister && '*'}
//               </Label>
//               <div className="relative mt-1.5">
//                 <Input
//                   id="password"
//                   name="password"
//                   type={showPassword ? 'text' : 'password'}
//                   value={formData.password}
//                   onChange={handleChange}
//                   placeholder="••••••••"
//                   className="h-12 pr-12"
//                   data-testid="password-input"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
//                 >
//                   {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
//                 </button>
//               </div>
//             </div>

//             {isRegister && (
//               <>
//                 <div>
//                   <Label htmlFor="organization" className="text-slate-700">
//                     Organization
//                   </Label>
//                   <Input
//                     id="organization"
//                     name="organization"
//                     type="text"
//                     value={formData.organization}
//                     onChange={handleChange}
//                     placeholder="Your Company"
//                     className="mt-1.5 h-12"
//                     data-testid="register-organization-input"
//                   />
//                 </div>

//                 <div>
//                   <Label htmlFor="designation" className="text-slate-700">
//                     Designation
//                   </Label>
//                   <Input
//                     id="designation"
//                     name="designation"
//                     type="text"
//                     value={formData.designation}
//                     onChange={handleChange}
//                     placeholder="CEO, CTO, etc."
//                     className="mt-1.5 h-12"
//                     data-testid="register-designation-input"
//                   />
//                 </div>
//               </>
//             )}

//             <Button
//               type="submit"
//               disabled={loading}
//               className="w-full bg-[#07549c] hover:bg-[#054178] h-12 text-base font-semibold"
//               data-testid="submit-btn"
//             >
//               {loading ? 'Please wait...' : isRegister ? 'Create Account' : 'Sign In'}
//             </Button>
//           </form>

//           <div className="mt-6 text-center">
//             <p className="text-slate-600">
//               {isRegister ? 'Already have an account?' : "Don't have an account?"}{' '}
//               <button
//                 type="button"
//                 onClick={() => setIsRegister(!isRegister)}
//                 className="text-[#07549c] font-semibold hover:underline"
//                 data-testid="toggle-auth-mode"
//               >
//                 {isRegister ? 'Sign In' : 'Create Account'}
//               </button>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;


import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { toast } from 'sonner';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react';

// ❌ removed axios + backend

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isRegister, setIsRegister] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    organization: '',
    designation: '',
  });

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get('mode') === 'register') {
      setIsRegister(true);
    }
  }, [location]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isRegister) {
        const { email, password, name } = formData;

        if (!email || !password || !name) {
          toast.error('Please fill in all required fields');
          setLoading(false);
          return;
        }

        // ✅ fake API delay
        await new Promise((res) => setTimeout(res, 1000));

        // ✅ store locally (simulate login)
        localStorage.setItem('user', JSON.stringify(formData));

        toast.success('Registration successful!');
        navigate('/');
      } else {
        const { email, password } = formData;

        if (!email || !password) {
          toast.error('Please enter email and password');
          setLoading(false);
          return;
        }

        // ✅ fake API delay
        await new Promise((res) => setTimeout(res, 1000));

        // ✅ fake validation (optional)
        const storedUser = JSON.parse(localStorage.getItem('user'));

        if (storedUser && storedUser.email === email) {
          toast.success('Login successful!');
          navigate('/');
        } else {
          toast.error('Invalid credentials (demo mode)');
        }
      }
    } catch (error) {
       console.log(error);
      toast.error('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex" data-testid="login-page">
      {/* Left Panel */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1560439514-0fc9d2cd5e1b?w=1200&q=80)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07549c]/90 to-[#07549c]/70" />
        <div className="relative z-10 flex flex-col justify-center p-12 text-white">
          <Link to="/" className="flex items-center gap-3 mb-12">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl font-['Outfit']">FF</span>
            </div>
            <span className="text-2xl font-bold font-['Outfit']">Fintech Forum</span>
          </Link>
          <h1 className="font-['Outfit'] text-4xl font-bold mb-6">
            Welcome to the Premier BFSI Community
          </h1>
          <p className="text-white/80 text-lg max-w-md">
            Join thousands of industry leaders shaping the future of financial services.
          </p>
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-[#07549c] mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <h2 className="text-3xl font-bold text-slate-900 mb-2">
            {isRegister ? 'Create an Account' : 'Sign In'}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {isRegister && (
              <Input
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
              />
            )}

            <Input
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />

            <div className="relative">
              <Input
                name="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-3"
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </button>
            </div>

            <Button type="submit" disabled={loading} className="w-full">
              {loading ? 'Please wait...' : isRegister ? 'Create Account' : 'Sign In'}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <button onClick={() => setIsRegister(!isRegister)}>
              {isRegister ? 'Sign In' : 'Create Account'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;