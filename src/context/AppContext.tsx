import { createContext, useState } from "react";
import { addons } from "../data/addons";
import { AddonProps, InputError, User } from "../types";

interface ProviderProps {
  children: JSX.Element;
}

interface AppContextProps {
  userInfo: User;
  setUserInfo: React.Dispatch<React.SetStateAction<User>>;
  inputIncorrectText: InputError;
  setinputIncorrectText: React.Dispatch<React.SetStateAction<InputError>>;
  billingMethod: string;
  setBillingMethod: React.Dispatch<React.SetStateAction<string>>;
  planPrice: number;
  setPlanPrice: React.Dispatch<React.SetStateAction<number>>;
  planSelected: string;
  setPlanSelected: React.Dispatch<React.SetStateAction<string>>;
  addonsPrice: number;
  setAddonsPrice: React.Dispatch<React.SetStateAction<number>>;
  onlineService: AddonProps;
  setOnlineService: React.Dispatch<React.SetStateAction<AddonProps>>;
  localStorage: AddonProps;
  setLocalStorage: React.Dispatch<React.SetStateAction<AddonProps>>;
  customProfile: AddonProps;
  setCustomProfile: React.Dispatch<React.SetStateAction<AddonProps>>;
  total: number;
  setTotal: React.Dispatch<React.SetStateAction<number>>;
}

export const AppContext = createContext({} as AppContextProps);

export const AppContextProvider = ({ children }: ProviderProps) => {
  const [userInfo, setUserInfo] = useState<User>({
    name: "",
    email: "",
    phone: "",
  });

  const [inputIncorrectText, setinputIncorrectText] = useState({
    incorrectName: "",
    incorrectEmail: "",
    incorrectPhone: "",
  });
  const [billingMethod, setBillingMethod] = useState("monthly");
  const [planPrice, setPlanPrice] = useState(0);
  const [planSelected, setPlanSelected] = useState("");
  const [onlineService, setOnlineService] = useState<AddonProps>(addons[0]);
  const [localStorage, setLocalStorage] = useState<AddonProps>(addons[1]);
  const [customProfile, setCustomProfile] = useState<AddonProps>(addons[2]);
  const [addonsPrice, setAddonsPrice] = useState(0);
  const [total, setTotal] = useState(0);

  return (
    <AppContext.Provider
      value={{
        userInfo,
        setUserInfo,
        inputIncorrectText,
        setinputIncorrectText,
        billingMethod,
        setBillingMethod,
        planPrice,
        setPlanPrice,
        planSelected,
        setPlanSelected,
        addonsPrice,
        setAddonsPrice,
        onlineService,
        setOnlineService,
        localStorage,
        setLocalStorage,
        customProfile,
        setCustomProfile,
        total,
        setTotal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
