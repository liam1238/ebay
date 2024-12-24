import React from "react";
import Button from '@mui/material/Button';
import { useForm, Controller } from "react-hook-form";
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  country: string;
  gender: string;
  dateOfBirth: string;
  age: string;
};

export const EbayForm = ({ defaultValues }: { defaultValues: FormData }) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ defaultValues });

  const onSubmit = (data: FormData) => {
    console.log("Submitted data:", data);

    // Reset fields to empty values
    reset({
      firstName: "",
      lastName: "",
      email: "",
      city: "",
      country: "",
      gender: "",
      dateOfBirth: "",
      age: "",
    });
  };

  const onError = () => {
    // Display the first error as a popup
    const firstError = Object.values(errors)[0]?.message;
    if (firstError) {
      alert(firstError);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
        <Box
        display="flex"
        flexDirection="column"
        gap={2}
        alignItems="stretch"
        width={{ xs: "100%", sm: "60%" }}
        mx="auto"
        >
            <Controller
            name="firstName"
            control={control}
            rules={{ required: "First name is required" }}
            render={({ field }) => (
                <TextField
                {...field}
                label="First Name"
                fullWidth
                error={!!errors.firstName}
                helperText={errors.firstName?.message}
                />
            )}
            />
            <Controller
            name="lastName"
            control={control}
            rules={{ required: "Last name is required" }}
            render={({ field }) => (
                <TextField
                {...field}
                label="Last Name"
                fullWidth
                error={!!errors.lastName}
                helperText={errors.lastName?.message}
                />
            )}
            />
            <Controller
            name="city"
            control={control}
            rules={{ required: "City is required" }}
            render={({ field }) => (
                <TextField
                {...field}
                label="City"
                fullWidth
                error={!!errors.city}
                helperText={errors.city?.message}
                />
            )}
            />
            <Controller
            name="country"
            control={control}
            rules={{ required: "Country is required" }}
            render={({ field }) => (
                <TextField
                {...field}
                label="Country"
                fullWidth
                error={!!errors.country}
                helperText={errors.country?.message}
                />
            )}
            />
            <Controller
            name="email"
            control={control}
            rules={{
                required: "Email is required",
                pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
                },
            }}
            render={({ field }) => (
                <TextField
                {...field}
                label="Email"
                fullWidth
                error={!!errors.email}
                helperText={errors.email?.message}
                />
            )}
            />
            <Controller
            name="dateOfBirth"
            control={control}
            rules={{ required: "Date of birth is required" }}
            render={({ field }) => (
                <TextField
                {...field}
                label="Date of Birth"
                type="date"
                fullWidth
                InputLabelProps={{ shrink: true }}
                error={!!errors.dateOfBirth}
                helperText={errors.dateOfBirth?.message}
                />
            )}
            />
            <Controller
            name="age"
            control={control}
            rules={{
                required: "Age is required",
                pattern: {
                value: /^\d+$/,
                message: "Age must be a number",
                },
            }}
            render={({ field }) => (
                <TextField
                {...field}
                label="Age"
                fullWidth
                error={!!errors.age}
                helperText={errors.age?.message}
                />
            )}
            />
            <Controller
            name="gender"
            control={control}
            rules={{ required: "Gender is required" }}
            render={({ field }) => (
                <RadioGroup {...field} row>
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                </RadioGroup>
            )}
            />
            <Button type="submit" variant="contained" fullWidth>Submit</Button>
        </Box>
    </form>
  );
};
