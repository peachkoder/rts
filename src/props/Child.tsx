interface ChildProps {
  color: string;
  onClick: () => void; //callback fn from parent
  children?: React.ReactNode;
}

export const Child = ({color, onClick, children}: ChildProps)  => {
  return <div>
    {color}
    {children}
    <button onClick={onClick}>Hit me hard </button>
  </div>
};

export const ChildAsFC: React.FC<ChildProps> = ({color, onClick, children}) => {
  return <div>
    {color}
    {children}
    <button onClick={onClick}>Hit me hard </button>
  </div>
};

