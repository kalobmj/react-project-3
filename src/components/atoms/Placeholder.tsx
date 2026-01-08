const Placeholder = () => {

  const spanAmount = Math.floor(Math.random() * 2) + 1;

  console.log({ spanAmount });

  // need make it so you cant drag placeholder cards
  // columns scrunch when screen is dragged, fix that
  // need logic for adding new task (might have a input bar at bottom centered for new tasks)
    // new tasks auto go into 'To Do' column

  // decide if adding first task removed all placeholders or just the first column (probably just first)

  return (
    <div className="card-body placeholder-task">
      {[...Array(spanAmount)].map((_, index) => {
        const width = Math.random() < 0.5 ? 50 : 75;
        return (
          <span
            className={`placeholder placeholder-span w-${width}`}
            key={index}
          >
            test
          </span>
        )
  })}
    </div>
  );
};

export default Placeholder;
