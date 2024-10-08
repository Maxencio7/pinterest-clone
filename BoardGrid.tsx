const BoardGrid = () => {
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 gx-4 gy-4 p-4">
      {/* Board components will be rendered here */}

      <div className="col">
        <div className="card shadow-md">
          <div className="card-body">
            <h2 className="card-title">Board 1</h2>
            <p className="card-text text-gray-600">Board description</p>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="card shadow-md">
          <div className="card-body">
            <h2 className="card-title">Board 2</h2>
            <p className="card-text text-gray-600">Board description</p>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="card shadow-md">
          <div className="card-body">
            <h2 className="card-title">Board 3</h2>
            <p className="card-text text-gray-600">Board description</p>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="card shadow-md">
          <div className="card-body">
            <h2 className="card-title">Board 4</h2>
            <p className="card-text text-gray-600">Board description</p>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="card shadow-md">
          <div className="card-body">
            <h2 className="card-title">Board 5</h2>
            <p className="card-text text-gray-600">Board description</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardGrid;
