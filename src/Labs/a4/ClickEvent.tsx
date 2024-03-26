function ClickEvent() { // declare a function to handle the event
  const hello = () => {
    alert("Hello World!");
  };
  const lifeIs = (good : string) => {
    alert(`Life is ${good}`);
    // have to make sure to use backticks when doing string interpolation
  };
  return (
    <div>
      <h2>Click Event</h2>
      <button onClick={hello}> 
        Click Hello
      </button>
      <button onClick={() => lifeIs("Good!")}>
        Click Good
      </button>
      <button
        onClick={() => {
          hello();
          lifeIs("Great!");
        }}>
          Click Hello 3
        </button>
    </div>
  );
}
export default ClickEvent;