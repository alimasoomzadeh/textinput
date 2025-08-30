import Input from "@/components/Input";
import { useState } from "react";
import { User } from "iconsax-reactjs";

export default function Home() {
  const [valueInput1, setValueInput1] = useState("");
  const [valueInput2, setValueInput2] = useState("");
  const [valueInput3, setValueInput3] = useState("");
  const [valueInput4, setValueInput4] = useState("نام و نام خانوادگی");
  const [valueInput5, setValueInput5] = useState("نام و نام خانوادگی");
  const [valueInput6, setValueInput6] = useState("نام و نام خانوادگی");
  const [valueInput7, setValueInput7] = useState("");
  const [valueInput8, setValueInput8] = useState("");
  const [valueInput9, setValueInput9] = useState("");

  return (
    <div className="p-48">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <Input
          label="نام کاربری"
          size="lg"
          value={valueInput1}
          onChange={(e) => {
            setValueInput1(e.target.value);
          }}
          icon={<User />}
        />
        <Input
          label="نام کاربری"
          value={valueInput2}
          onChange={(e) => {
            setValueInput2(e.target.value);
          }}
          icon={<User />}
        />
        <Input
          label="نام کاربری"
          size="sm"
          value={valueInput3}
          onChange={(e) => {
            setValueInput3(e.target.value);
          }}
          icon={<User />}
        />
        <Input
          label="نام کاربری"
          size="lg"
          value={valueInput4}
          onChange={(e) => {
            setValueInput4(e.target.value);
          }}
          icon={<User />}
        />
        <Input
          label="نام کاربری"
          value={valueInput5}
          onChange={(e) => {
            setValueInput5(e.target.value);
          }}
          icon={<User />}
        />
        <Input
          label="نام کاربری"
          size="sm"
          value={valueInput6}
          onChange={(e) => {
            setValueInput6(e.target.value);
          }}
          icon={<User />}
        />
        <Input
          label="نام کاربری"
          size="lg"
          value={valueInput7}
          onChange={(e) => {
            setValueInput7(e.target.value);
          }}
          error
          helperText="لورم ایپسوم متن ساختگی با تولید سادگی"
          icon={<User />}
        />
        <Input
          label="نام کاربری"
          value={valueInput8}
          onChange={(e) => {
            setValueInput8(e.target.value);
          }}
          error
          helperText="لورم ایپسوم متن ساختگی با تولید سادگی"
          icon={<User />}
        />
        <Input
          label="نام کاربری"
          size="sm"
          value={valueInput9}
          onChange={(e) => {
            setValueInput9(e.target.value);
          }}
          error
          helperText="لورم ایپسوم متن ساختگی با تولید سادگی"
          icon={<User />}
        />
        <Input
          label="نام کاربری"
          size="lg"
          value="نام و نام خانوادگی"
          disabled
          icon={<User />}
        />
        <Input
          label="نام کاربری"
          value="نام و نام خانوادگی"
          disabled
          icon={<User />}
        />
        <Input
          label="نام کاربری"
          size="sm"
          value="نام و نام خانوادگی"
          disabled
          icon={<User />}
        />
      </div>
    </div>
  );
}
