type Greeting2Props = {
  message: string;
  children: React.ReactNode; // allow passing children
};

const Greetings2: React.FC<Greeting2Props> = ({ message, children }) => {
  return (
    <div>
      <h1>{message}</h1>
      {children}
    </div>
  );
};

export default Greetings2;
