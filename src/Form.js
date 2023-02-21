import { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");

  // jika klik submit
  const handleClick = () => {
    // mengambil nilai input dari for berdasarkan id nama dan job
    const nama = document.getElementById("name").value;
    const kerja = document.getElementById("job").value;

    // ubah style hasil (dimunculkan)
    const element = document.getElementById("hasil");
    element.style.display = "";

    // set hasil
    setName(nama);
    setJob(kerja);
  };

  return (
    <div>
      <div className="mb-2 row">
        <div className="col-sm-4">
          <input type="text" className="form-control" id="name" name="name" />
        </div>
      </div>

      <div className="mb-2 row">
        <div className="col-sm-4">
          <input type="text" className="form-control" id="job" name="job" />
        </div>
      </div>

      <div className="mb-2 row">
        <div className="col-sm-2">
          <button className="btn btn-primary" onClick={handleClick}>
            Submit
          </button>
        </div>
      </div>
      <h2 id="hasil" style={{ display: "none" }}>
        Name: {name}, Job: {job}
      </h2>
    </div>
  );
}

// export fungsi
export default Form;
