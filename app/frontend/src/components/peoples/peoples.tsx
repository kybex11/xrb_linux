const Peoples = ({ people }: { people: { id: number; name: string }[] }) => {
    return (
      <>
        {people.map((person: { id: number; name: string }) => (
          <div key={person.id}>{person.name}</div>
        ))}
      </>
    );
  };
  
  export default Peoples;