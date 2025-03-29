// import React, { useState } from 'react'
// import { useForm } from 'react-hook-form'
// import { z } from 'zod'
// import { zodResolver } from '@hookform/resolvers/zod'
// import { Button } from '@/components/ui/button' // Assuming from shadcn setup

// const signupSchema = z
//   .object({
//     name: z.string().min(2, 'Name must be at least 2 characters.'),
//     email: z.string().email('Please enter a valid email.'),
//     username: z.string().min(3, 'Username must be at least 3 characters.'),
//     age: z.number().min(13, 'You must be at least 13 years old.'),
//     password: z.string().min(6, 'Password must be at least 6 characters.'),
//     confirmPassword: z.string(),
//     gender: z.enum(['male', 'female', 'other']).optional(),
//     bio: z.string().max(150, 'Bio must be 150 characters or less.').optional(),
//     profilePicture: z.any().optional(),
//   })
//   .refine((data) => data.password === data.confirmPassword, {
//     message: 'Passwords must match.',
//     path: ['confirmPassword'],
//   })

// type SignupFormInputs = z.infer<typeof signupSchema>

// const SignupPage: React.FC = () => {
//   const [previewImage, setPreviewImage] = useState<string | null>(null)
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<SignupFormInputs>({
//     resolver: zodResolver(signupSchema),
//   })

//   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0]
//     if (file) {
//       setPreviewImage(URL.createObjectURL(file))
//     }
//   }

//   const removeImage = () => {
//     setPreviewImage(null)
//   }

//   const onSubmit = (data: SignupFormInputs) => {
//     console.log('Form submitted:', data)
//     alert('Signup successful!')
//   }

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-white dark:bg-gray-900">
//       <div className="w-full max-w-4xl rounded-lg bg-gray-100 p-8 shadow-md dark:bg-gray-800">
//         <h2 className="mb-6 text-center text-3xl font-bold text-gray-900 dark:text-white">
//           Create Your Account
//         </h2>

//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//           {/* Profile Picture Upload (At the Top) */}
//           <div className="mb-4 flex flex-col items-center">
//             <label htmlFor="profilePictureInput" className="cursor-pointer">
//               <div className="flex h-32 w-32 items-center justify-center overflow-hidden rounded-full bg-gray-300 dark:bg-gray-700">
//                 {previewImage ? (
//                   <img
//                     src={previewImage}
//                     alt="Preview"
//                     className="h-full w-full object-cover"
//                   />
//                 ) : (
//                   <span className="text-gray-600 dark:text-gray-400">
//                     Upload Image
//                   </span>
//                 )}
//               </div>
//             </label>

//             <input
//               {...register('profilePicture')}
//               type="file"
//               accept="image/*"
//               onChange={handleImageChange}
//               className="hidden"
//               id="profilePictureInput"
//             />

//             {previewImage && (
//               <Button
//                 onClick={removeImage}
//                 className="mt-3 bg-red-500 hover:bg-red-600"
//               >
//                 Remove Image
//               </Button>
//             )}
//           </div>

//           <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
//             {/* Name */}
//             <div>
//               <label className="mb-2 block text-gray-700 dark:text-gray-300">
//                 Name
//               </label>
//               <input
//                 {...register('name')}
//                 className={`w-full rounded-lg border bg-white px-4 py-2 dark:bg-gray-700 ${
//                   errors.name
//                     ? 'border-red-500'
//                     : 'border-gray-300 dark:border-gray-600'
//                 }`}
//                 type="text"
//                 placeholder="Enter your name"
//               />
//               {errors.name && (
//                 <p className="text-sm text-red-500">{errors.name.message}</p>
//               )}
//             </div>

//             {/* Email */}
//             <div>
//               <label className="mb-2 block text-gray-700 dark:text-gray-300">
//                 Email
//               </label>
//               <input
//                 {...register('email')}
//                 className={`w-full rounded-lg border bg-white px-4 py-2 dark:bg-gray-700 ${
//                   errors.email
//                     ? 'border-red-500'
//                     : 'border-gray-300 dark:border-gray-600'
//                 }`}
//                 type="email"
//                 placeholder="Enter your email"
//               />
//               {errors.email && (
//                 <p className="text-sm text-red-500">{errors.email.message}</p>
//               )}
//             </div>

//             {/* Username */}
//             <div>
//               <label className="mb-2 block text-gray-700 dark:text-gray-300">
//                 Username
//               </label>
//               <input
//                 {...register('username')}
//                 className={`w-full rounded-lg border bg-white px-4 py-2 dark:bg-gray-700 ${
//                   errors.username
//                     ? 'border-red-500'
//                     : 'border-gray-300 dark:border-gray-600'
//                 }`}
//                 type="text"
//                 placeholder="Choose a username"
//               />
//               {errors.username && (
//                 <p className="text-sm text-red-500">
//                   {errors.username.message}
//                 </p>
//               )}
//             </div>

//             {/* Age */}
//             <div>
//               <label className="mb-2 block text-gray-700 dark:text-gray-300">
//                 Age
//               </label>
//               <input
//                 {...register('age', { valueAsNumber: true })}
//                 className={`w-full rounded-lg border bg-white px-4 py-2 dark:bg-gray-700 ${
//                   errors.age
//                     ? 'border-red-500'
//                     : 'border-gray-300 dark:border-gray-600'
//                 }`}
//                 type="number"
//                 placeholder="Enter your age"
//               />
//               {errors.age && (
//                 <p className="text-sm text-red-500">{errors.age.message}</p>
//               )}
//             </div>
//           </div>

//           <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
//             {/* Gender */}
//             <div>
//               <label className="mb-2 block text-gray-700 dark:text-gray-300">
//                 Gender
//               </label>
//               <select
//                 {...register('gender')}
//                 className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 dark:border-gray-600 dark:bg-gray-700"
//               >
//                 <option value="">Select Gender</option>
//                 <option value="male">Male</option>
//                 <option value="female">Female</option>
//                 <option value="other">Other</option>
//               </select>
//             </div>

//             {/* Bio */}
//             <div>
//               <label className="mb-2 block text-gray-700 dark:text-gray-300">
//                 Bio
//               </label>
//               <textarea
//                 {...register('bio')}
//                 className={`w-full rounded-lg border bg-white px-4 py-2 dark:bg-gray-700 ${
//                   errors.bio
//                     ? 'border-red-500'
//                     : 'border-gray-300 dark:border-gray-600'
//                 }`}
//                 placeholder="Tell us a bit about yourself..."
//               />
//               {errors.bio && (
//                 <p className="text-sm text-red-500">{errors.bio.message}</p>
//               )}
//             </div>
//           </div>

//           <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
//             {/* Password */}
//             <div>
//               <label className="mb-2 block text-gray-700 dark:text-gray-300">
//                 Password
//               </label>
//               <input
//                 {...register('password')}
//                 className={`w-full rounded-lg border bg-white px-4 py-2 dark:bg-gray-700 ${
//                   errors.password
//                     ? 'border-red-500'
//                     : 'border-gray-300 dark:border-gray-600'
//                 }`}
//                 type="password"
//                 placeholder="Create a password"
//               />
//             </div>

//             {/* Confirm Password */}
//             <div>
//               <label className="mb-2 block text-gray-700 dark:text-gray-300">
//                 Confirm Password
//               </label>
//               <input
//                 {...register('confirmPassword')}
//                 className={`w-full rounded-lg border bg-white px-4 py-2 dark:bg-gray-700 ${
//                   errors.confirmPassword
//                     ? 'border-red-500'
//                     : 'border-gray-300 dark:border-gray-600'
//                 }`}
//                 type="password"
//                 placeholder="Confirm your password"
//               />
//             </div>
//           </div>

//           {/* Submit Button */}
//           <Button
//             type="submit"
//             className="w-full bg-blue-600 py-3 text-white hover:bg-blue-700"
//           >
//             Sign Up 🚀
//           </Button>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default SignupPage
// -------------------------------------------------------------------------------------------------------





import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button' // Assuming from shadcn setup

const signupSchema = z
  .object({
    name: z.string().min(2, 'Name must be at least 2 characters.'),
    email: z.string().email('Please enter a valid email.'),
    username: z.string().min(3, 'Username must be at least 3 characters.'),
    age: z.number().min(13, 'You must be at least 13 years old.'),
    password: z.string().min(6, 'Password must be at least 6 characters.'),
    confirmPassword: z.string(),
    gender: z.enum(['male', 'female', 'other']).optional(),
    bio: z.string().max(150, 'Bio must be 150 characters or less.').optional(),
    profilePicture: z.any().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords must match.',
    path: ['confirmPassword'],
  })

type SignupFormInputs = z.infer<typeof signupSchema>

const SignupPage: React.FC = () => {
  const [previewImage, setPreviewImage] = useState<string | null>(null)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormInputs>({
    resolver: zodResolver(signupSchema),
  })

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setPreviewImage(URL.createObjectURL(file))
    }
  }

  const removeImage = () => {
    setPreviewImage(null)
  }

  const onSubmit = (data: SignupFormInputs) => {
    console.log('Form submitted:', data)
    alert('Signup successful!')
  }

  return (
    <div className="flex grow items-center justify-center bg-white dark:bg-gray-900">
      <div className="w-full max-w-4xl rounded-lg bg-gray-100 p-8 shadow-md dark:bg-gray-800">
        <h2 className="mb-6 text-center text-3xl font-bold text-gray-900 dark:text-white">
          Create Your Account
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Profile Picture Upload */}
          <div className="mb-4 flex flex-col items-center">
            <label htmlFor="profilePictureInput" className="cursor-pointer">
              <div className="flex h-32 w-32 items-center justify-center overflow-hidden rounded-full bg-gray-300 dark:bg-gray-700">
                {previewImage ? (
                  <img
                    src={previewImage}
                    alt="Preview"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span className="text-gray-600 dark:text-gray-400">
                    Upload Image
                  </span>
                )}
              </div>
            </label>

            <input
              {...register('profilePicture')}
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
              id="profilePictureInput"
            />

            {previewImage && (
              <Button
                onClick={removeImage}
                className="mt-3 bg-red-500 hover:bg-red-600"
              >
                Remove Image
              </Button>
            )}
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Name */}
            <div>
              <label className="mb-2 block text-gray-700 dark:text-gray-300">
                Name
              </label>
              <input
                {...register('name')}
                className={`w-full rounded-lg border bg-white px-4 py-2 dark:bg-gray-700 ${
                  errors.name
                    ? 'border-red-500'
                    : 'border-gray-300 dark:border-gray-600'
                }`}
                type="text"
                placeholder="Enter your name"
              />
              {errors.name && (
                <p className="text-sm text-red-500">{errors.name.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                {...register('email')}
                className={`w-full rounded-lg border bg-white px-4 py-2 dark:bg-gray-700 ${
                  errors.email
                    ? 'border-red-500'
                    : 'border-gray-300 dark:border-gray-600'
                }`}
                type="email"
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>

            {/* Username */}
            <div>
              <label className="mb-2 block text-gray-700 dark:text-gray-300">
                Username
              </label>
              <input
                {...register('username')}
                className={`w-full rounded-lg border bg-white px-4 py-2 dark:bg-gray-700 ${
                  errors.username
                    ? 'border-red-500'
                    : 'border-gray-300 dark:border-gray-600'
                }`}
                type="text"
                placeholder="Choose a username"
              />
              {errors.username && (
                <p className="text-sm text-red-500">
                  {errors.username.message}
                </p>
              )}
            </div>

            {/* Age */}
            <div>
              <label className="mb-2 block text-gray-700 dark:text-gray-300">
                Age
              </label>
              <input
                {...register('age', { valueAsNumber: true })}
                className={`w-full rounded-lg border bg-white px-4 py-2 dark:bg-gray-700 ${
                  errors.age
                    ? 'border-red-500'
                    : 'border-gray-300 dark:border-gray-600'
                }`}
                type="number"
                placeholder="Enter your age"
              />
              {errors.age && (
                <p className="text-sm text-red-500">{errors.age.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Gender as Radio Buttons */}
            <div className="space-y-2">
              <p className="mb-2 block text-gray-700 dark:text-gray-300">
                Gender
              </p>
              <div className="flex items-center space-x-4">
                <label className="flex items-center">
                  <input
                    {...register('gender')}
                    type="radio"
                    value="male"
                    className="mr-2"
                  />
                  <span className="text-gray-700 dark:text-gray-300">Male</span>
                </label>
                <label className="flex items-center">
                  <input
                    {...register('gender')}
                    type="radio"
                    value="female"
                    className="mr-2"
                  />
                  <span className="text-gray-700 dark:text-gray-300">
                    Female
                  </span>
                </label>
                <label className="flex items-center">
                  <input
                    {...register('gender')}
                    type="radio"
                    value="other"
                    className="mr-2"
                  />
                  <span className="text-gray-700 dark:text-gray-300">
                    Other
                  </span>
                </label>
              </div>
            </div>

            {/* Bio */}
            <div>
              <label className="mb-2 block text-gray-700 dark:text-gray-300">
                Bio
              </label>
              <textarea
                {...register('bio')}
                className={`w-full rounded-lg border bg-white px-4 py-2 dark:bg-gray-700 ${
                  errors.bio
                    ? 'border-red-500'
                    : 'border-gray-300 dark:border-gray-600'
                }`}
                placeholder="Tell us a bit about yourself..."
              />
              {errors.bio && (
                <p className="text-sm text-red-500">{errors.bio.message}</p>
              )}
            </div>
          </div>

          {/* Password and Confirm Password */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-gray-700 dark:text-gray-300">
                Password
              </label>
              <input
                {...register('password')}
                type="password"
                placeholder="Create a password"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 dark:border-gray-600 dark:bg-gray-700"
              />
            </div>

            <div>
              <label className="mb-2 block text-gray-700 dark:text-gray-300">
                Confirm Password
              </label>
              <input
                {...register('confirmPassword')}
                type="password"
                placeholder="Confirm your password"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 dark:border-gray-600 dark:bg-gray-700"
              />
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-blue-600 py-3 text-white hover:bg-blue-700"
          >
            Sign Up 🚀
          </Button>
        </form>
      </div>
    </div>
  )
}

export default SignupPage
