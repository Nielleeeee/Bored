interface BoredTypes {
  activity?: string;
  type?: string;
  participants?: string;
  price?: string;
  link?: string;
  key?: string;
  accessibility?: string;
}

interface FormModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  buttonTitle?: String;
  modalTitle?: String;
  children: React.ReactNode,
}