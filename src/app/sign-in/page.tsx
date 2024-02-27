"use client";
import React from "react";
import { Input, Button, Image } from "@nextui-org/react";
import Exit from "@/components/Exit";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const diseases = [
  { title: "Грип", value: "flu" },
  { title: "Гепатит", value: "hepatitis" },
  { title: "Цукровий діабет", value: "diabetes" },
  { title: "Гіпертонія", value: "hypertension" },
  { title: "Астма", value: "asthma" },
  { title: "Артрит", value: "arthritis" },
  { title: "Шизофренія", value: "schizophrenia" },
  { title: "Остеоартроз", value: "osteoarthritis" },
  { title: "Мігрень", value: "migraine" },
  { title: "Інсульт", value: "stroke" }
];
const heights = ["< 150см", "150-160см", "160-170см", "170-180см", "180+см"];
  const weights = ["< 50кг", "50-60кг", "60-70кг", "70-80кг", "80+кг"];
  const fitnessLevels = ["Початківець", "Середній", "Досвідчений", "Професіонал"];
  const teamSolo = ["Командна", "Соло"];
  const genders = ["Чоловіча", "Жіноча"];

export default function App() {
  const [avatar, setAvatar] = React.useState<File | null | undefined>(null);

  console.log(avatar);

  return (
    <div className="max-w-[1024px] mx-auto items-center flex flex-col gap-4 mt-12 mb-12">
      <h1 className="text-3xl font-bold text-center ">Реєстрація</h1>
      <Input size="sm" type="email" label="Пошта" className="w-96" />

      <div className="flex items-center justify-center w-96 h-64 relative">
        {avatar && (
          <Image
            alt="Card background"
            className="z-0 object-cover w-96 h-64"
            src={URL.createObjectURL(avatar)}
          />
        )}
        {avatar && (
          <Button
            onClick={() => setAvatar(null)}
            radius="full"
            isIconOnly
            className="absolute top-4 right-4"
          >
            <Exit />
          </Button>
        )}
        {!avatar && (
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full w-96 h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input
              id="dropzone-file"
              type="file"
              className="hidden"
              onChange={(e) => setAvatar(e.target.files?.[0])}
            />
          </label>
        )}
      </div>

      <Input size="sm" type="password" label="Пароль" className="w-96" />
      <Input
        size="sm"
        type="password"
        label="Повторіть пароль"
        className="w-96"
      />
       <Autocomplete
        multiple
        sx={{width: 384}}
        id="tags-standard"
        options={diseases}
        getOptionLabel={(option) => option.title}
        defaultValue={[]}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Хвороби"
            placeholder="Хвороби"
          />
        )}
      />
       <Autocomplete
         sx={{width: 384}}
        options={heights}
        renderInput={(params) => <TextField    variant="standard" {...params} label="Зріст" />}
      />
      <Autocomplete
        sx={{width: 384}}
        options={weights}
        renderInput={(params) => <TextField    variant="standard" {...params} label="Вага" />}
      />
      <Autocomplete
        sx={{width: 384}}
        options={fitnessLevels}
        renderInput={(params) => <TextField    variant="standard"{...params} label="Фізична підготовка" />}
      />
      <Autocomplete
        sx={{width: 384}}
        options={teamSolo}
        renderInput={(params) => <TextField    variant="standard" {...params} label="Команда чи соло" />}
      />
      <Autocomplete
        sx={{width: 384}}
        options={genders}
        renderInput={(params) => <TextField    variant="standard"{...params} label="Стать" />}
      />

      <Button color="primary" className="w-96">
        Зареєструватись
      </Button>
    </div>
  );
}
