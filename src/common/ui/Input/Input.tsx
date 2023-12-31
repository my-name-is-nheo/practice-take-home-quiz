import { FC } from "react";
import { ErrorMessage, Field } from "formik";

const Input: FC<{
  name: string;
  placeHolder: string;
  label: string;
  className?: string;
}> = ({ name, placeHolder, label, className }) => (
  <div className="flex flex-1 flex-row py-5 px-2 items-center">
    <label className="flex-1 text-sm pr-3 font-bold">{label}</label>
    <Field
      name={name}
      placeholder={placeHolder}
      className={className ?? "flex-1 self-center pl-1 border border-gray-300"}
    />
    <div className="text-xs text-rose-600">
      <ErrorMessage name={name} className="text-xs text-rose-600" />
    </div>
  </div>
);

Input.defaultProps = {
  className: undefined,
};

export { Input };
