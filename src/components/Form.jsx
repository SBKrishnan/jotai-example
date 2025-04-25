export const Form = ({
  handleSubmit,
  handleName,
  handleAge,
  handleAddress,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-floating mb-3">
        <input
          type="text"
          id="name"
          className="form-control"
          onChange={(e) => handleName(e.target.value)}
        />
        <label htmlFor="name">Name</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="text"
          id="age"
          className="form-control"
          onChange={(e) => handleAge(e.target.value)}
        />
        <label htmlFor="age">Age</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="text"
          id="Address"
          className="form-control"
          onChange={(e) => handleAddress(e.target.value)}
        />
        <label htmlFor="Address">Address</label>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
