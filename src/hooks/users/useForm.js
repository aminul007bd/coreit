import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  userName: z
    .string()
    .min(1, "User Name are required")
});

export const useForm = ({ userId }) => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isDirty },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
    
    },
  });

  return { register, handleSubmit, errors, reset, watch, isDirty };
};
