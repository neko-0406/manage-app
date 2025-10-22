import "../styles/MainContent.css"

interface Props {
  children: React.ReactNode;
}

export default function MainContent({ children }: Props) {
  return (
    <div className="main-content">
      {children}
    </div>
  );
}