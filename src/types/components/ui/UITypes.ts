export interface IMainCardProps {
  title?: string;
  subtitle?: string;
  action?: JSX.Element | any;
  footer?: JSX.Element;
  cardheading?: string | JSX.Element;
  headtitle?: string | JSX.Element;
  headsubtitle?: string | JSX.Element;
  children?: JSX.Element;
  middlecontent?: string | JSX.Element;
}

export interface IBaseButtonProps {
  variant?: "text" | "contained" | "outlined";
  size?: "small" | "medium" | "large";
  startIcon?: any;
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

export interface IBaseIconButtonProps {
  ariaLabel?: string;
  size?: "small" | "medium" | "large";
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

export interface IBaseModalProps {
  open: boolean;
  handleClose: () => void;
  children: React.ReactNode;
}

export interface IBaseSnackbarProps {
  open: boolean;
  type?: "success" | "error" | "warning";
  message: string;
  duration?: number;
  handleClose: () => void;
}

export interface IComboBoxProps {
  data: { label: string }[];
  label: string;
  onChange: (event: any, selected: any) => void;
}

export interface IAsyncComboBoxProps {
  label: string;
  placeholder: string;
  isLoading: boolean;
  isOpen: boolean;
  data: { label: string }[];
  onClickCapture?: () => void;
  onClose?: () => void;
  onChange: (event: any, selected: any) => void;
  onInput?: (event: any) => void;
}
