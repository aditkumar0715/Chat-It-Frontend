import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { AddFriendModalProps } from '@/types/types';
import { AddFriendSchema } from '@/lib/zod';
import { IAddFriendInput } from '@/types/types';
import { addFriend } from '@/lib/axios/services';
import { toast } from 'react-toastify';

const AddFriendModal: React.FC<AddFriendModalProps> = ({ isOpen, onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAddFriendInput>({
    resolver: zodResolver(AddFriendSchema),
  });

  const onSubmit = async (data: IAddFriendInput) => {
    const response = await addFriend(data);
    console.log('Add friend response:', response);

    if (response?.success) {
      toast.success(`${data.username} added as friend`);
    } else {
      toast.error(response.message);
    }
    onClose();
  };

  if (!isOpen) return null; // Don't render anything if the modal is not open

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70">
      <div className="bg-card relative rounded-lg p-6 shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          <X size={24} />
        </button>
        <h2 className="mb-4 text-lg font-bold">Add Friend</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register('username')}
            placeholder="Enter username"
            className={`border-color-border focus:ring-color-primary mb-4 w-full rounded-md border p-2 focus:ring-2 focus:outline-none`}
          />
          {errors.username && (
            <p className="mb-2 text-sm text-red-500">
              {errors.username.message}
            </p>
          )}
          <Button type="submit" className="w-full">
            Add Friend
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddFriendModal;
