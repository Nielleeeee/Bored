interface BoredTypes {
  activity?: string;
  type?: string;
  participants?: string;
  price?: string;
  accessibility?: string;
  link?: string;
  key?: string;
}

interface BoredTypesProps {
  type: string;
  participants: string;
  price: string;
  accessibility: string;
}

interface FormModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  buttonTitle?: String;
  modalTitle?: String;
  children: React.ReactNode;
}

interface SliderProps {
  name: string;
  value: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  max?: number;
  min?: number;
  step?: number;
}
