import * as Yup from "yup";

export const signUpSchema = Yup.object({
  title: Yup.string().min(3).max(25).required("Please enter the title"),
  desc: Yup.string().min(5).max(25).required("Please enter description"),
  amount: Yup.number().min(1).max(99999999).required("Please enter Amount"),
  date: Yup.date().max(new Date()).required("Please choose date"),
  remark: Yup.string().max(25),
  name: Yup.string()
    .min(3)
    .max(15)
    .required("Please enter the name you want to update"),
});
