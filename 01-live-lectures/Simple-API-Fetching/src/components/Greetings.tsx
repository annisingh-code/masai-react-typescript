type GreetingProps = {
  name: string;
  age?: number;
};

const Greeting = ({ name, age }: GreetingProps) => {
  return (
    <div className="text-2xl font-bold tracking-wider">
      <h1>Hello,{name}</h1>
      {age && <p> You are {age} old </p>}
    </div>
  );
};

export default Greeting;
