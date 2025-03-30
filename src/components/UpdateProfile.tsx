import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button' // Assuming from shadcn setup

const updateProfileSchema = z
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

type UpdateProfileInputs = z.infer<typeof updateProfileSchema>

const UpdateProfile: React.FC = () => {
  const [previewImage, setPreviewImage] = useState<string | null>(null)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateProfileInputs>({
    resolver: zodResolver(updateProfileSchema),
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

  const onSubmit = (data: UpdateProfileInputs) => {
    console.log('Form submitted:', data)
    alert('Profile updated successfully!')
  }

  return (
    <div className="bg-background flex grow items-center justify-center">
      <div className="bg-card w-full max-w-4xl rounded-lg p-8 shadow-md">
        <h2 className="text-foreground mb-6 text-center text-3xl font-bold">
          Update Your Profile
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Profile Picture Upload */}
          <div className="mb-4 flex flex-col items-center">
            <label htmlFor="profilePictureInput" className="cursor-pointer">
              <div className="bg-muted flex h-32 w-32 items-center justify-center overflow-hidden rounded-full">
                {previewImage ? (
                  <img
                    src={previewImage}
                    alt="Preview"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span className="text-muted-foreground">Upload Image</span>
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
                variant="destructive"
                className="mt-3"
              >
                Remove Image
              </Button>
            )}
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Name */}
            <div>
              <label className="text-foreground mb-2 block">Name</label>
              <input
                {...register('name')}
                className={`bg-background w-full rounded-lg border px-4 py-2 ${
                  errors.name ? 'border-destructive' : 'border-border'
                }`}
                type="text"
                placeholder="Enter your name"
              />
              {errors.name && (
                <p className="text-destructive text-sm">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="text-foreground mb-2 block">Email</label>
              <input
                {...register('email')}
                className={`bg-background w-full rounded-lg border px-4 py-2 ${
                  errors.email ? 'border-destructive' : 'border-border'
                }`}
                type="email"
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-destructive text-sm">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Username */}
            <div>
              <label className="text-foreground mb-2 block">Username</label>
              <input
                {...register('username')}
                className={`bg-background w-full rounded-lg border px-4 py-2 ${
                  errors.username ? 'border-destructive' : 'border-border'
                }`}
                type="text"
                placeholder="Choose a username"
              />
              {errors.username && (
                <p className="text-destructive text-sm">
                  {errors.username.message}
                </p>
              )}
            </div>

            {/* Age */}
            <div>
              <label className="text-foreground mb-2 block">Age</label>
              <input
                {...register('age', { valueAsNumber: true })}
                className={`bg-background w-full rounded-lg border px-4 py-2 ${
                  errors.age ? 'border-destructive' : 'border-border'
                }`}
                type="number"
                placeholder="Enter your age"
              />
              {errors.age && (
                <p className="text-destructive text-sm">{errors.age.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Gender as Radio Buttons */}
            <div className="space-y-2">
              <p className="text-foreground mb-2 block">Gender</p>
              <div className="flex items-center space-x-4">
                <label className="flex items-center">
                  <input
                    {...register('gender')}
                    type="radio"
                    value="male"
                    className="mr-2"
                  />
                  <span className="text-foreground">Male</span>
                </label>
                <label className="flex items-center">
                  <input
                    {...register('gender')}
                    type="radio"
                    value="female"
                    className="mr-2"
                  />
                  <span className="text-foreground">Female</span>
                </label>
                <label className="flex items-center">
                  <input
                    {...register('gender')}
                    type="radio"
                    value="other"
                    className="mr-2"
                  />
                  <span className="text-foreground">Other</span>
                </label>
              </div>
            </div>

            {/* Bio */}
            <div>
              <label className="text-foreground mb-2 block">Bio</label>
              <textarea
                {...register('bio')}
                className={`bg-background w-full rounded-lg border px-4 py-2 ${
                  errors.bio ? 'border-destructive' : 'border-border'
                }`}
                placeholder="Tell us a bit about yourself..."
              />
              {errors.bio && (
                <p className="text-destructive text-sm">{errors.bio.message}</p>
              )}
            </div>
          </div>

          {/* Password and Confirm Password */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label className="text-foreground mb-2 block">Password</label>
              <input
                {...register('password')}
                type="password"
                placeholder="Create a password"
                className={`bg-background w-full rounded-lg border px-4 py-2 ${
                  errors.password ? 'border-destructive' : 'border-border'
                }`}
              />
              {errors.password && (
                <p className="text-destructive text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div>
              <label className="text-foreground mb-2 block">
                Confirm Password
              </label>
              <input
                {...register('confirmPassword')}
                type="password"
                placeholder="Confirm your password"
                className={`bg-background w-full rounded-lg border px-4 py-2 ${
                  errors.confirmPassword
                    ? 'border-destructive'
                    : 'border-border'
                }`}
              />
              {errors.confirmPassword && (
                <p className="text-destructive text-sm">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
          </div>

          <Button type="submit" className="w-full py-3">
            Update Profile 🚀
          </Button>
        </form>
      </div>
    </div>
  )
}

export default UpdateProfile
