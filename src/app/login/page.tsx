import React from "react";
import { Input, Button } from "@nextui-org/react";

export default function App() {
  return (
    <div className="max-w-[1024px] mx-auto flex flex-col gap-4 mt-12">
      <h1 className="text-3xl font-bold text-center ">Логін</h1>
      <Input size="sm" type="email" label="Пошта" className="w-96" />
      <Input size="sm" type="password" label="Пароль" className="w-96" />
      <Button color="primary" className="w-96">
        Увійти
      </Button>
    </div>
  );
}
