import React from "react";
import { useState } from "react";
import "./Dataform.css";
function Dataform() {
  const [inputDir, setInputDir] = useState("");
  //   const [qualityCheckDirectory, setQualityDirectory] = useState("");
  //   const [fastPDirectory, setfastPDirectory] = useState("");
  const [sampleinput, setSampleInput] = useState("");
  const [sampleinputtype, setSampleInputType] = useState("");

  
  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log('Input Dir:', inputDir);
    
    const data = {
      inputDir, dir_qc: "path2"
    };
      const response = await fetch('/cmd/run-script3', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify(data) 
    });
    console.log(response);
  }
  return (
    <form onSubmit={handleSubmit}>
    <div className="outerdiv">
      <div className="dataform">
        <h1 style={{ textAlign: "center" }}>
          <u> ENTER INFO ABOUT YOUR DATA</u>{" "}
        </h1>
        <div className="dataform_inputcolum">
          <label>Type of Sample</label>
          {/* <input
            type="path"
            id="input directory"
            value={inputDirectory}
            onChange={(event) => setInputDirectory(event.target.value)}
          /> */}
          <select
            value={sampleinput}
            onChange={(event) => setSampleInput(event.target.value)}
          >
            <option value="hg38">Germline</option>
            <option value="hg19">Somatic</option>
          </select>
        </div>
        <div className="dataform_inputcolum">
          <label>Reference</label>
          {/* <input
            type="path"
            id="input directory"
            value={inputDirectory}
            onChange={(event) => setInputDirectory(event.target.value)}
          /> */}
          <select
            value={sampleinputtype}
            onChange={(event) => setSampleInputType(event.target.value)}
          >
            <option value="hg38">hg38</option>
            <option value="hg19">hg19</option>
          </select>
        </div>
        <div className="dataform_inputcolum">
          <label>Sample Input directory</label>
          <input
            type="path"
            id="input directory"
            value={inputDir}
            onChange={(event) => setInputDir(event.target.value)}
          />
        </div>
        {/* <div className="dataform_inputcolum">
          <label>Directory Quality Check</label>
          <input
            type="path"
            id="directory Quality check"
            value={qualityCheckDirectory}
            onChange={(event) => setQualityDirectory(event.target.value)}
          />
        </div>
        <div className="dataform_inputcolum">
          <label>Directory fastP</label>
          <input
            type="path"
            id="directory fastP"
            value={fastPDirectory}
            onChange={(event) => setfastPDirectory(event.target.value)}
          />
        </div>
        <div className="dataform_inputcolum">
          <label>Directory Map</label>
          <input
            type="path"
            id="directory Map"
            value={fastPDirectory}
            onChange={(event) => setfastPDirectory(event.target.value)}
          />
        </div>
        <div className="dataform_inputcolum">
          <label>Directory VCF</label>
          <input
            type="path"
            id="directory VCF"
            value={fastPDirectory}
            onChange={(event) => setfastPDirectory(event.target.value)}
          />
        </div> */
        }
        <button 
        className="submitButton"
        type="submit"
        onClick={handleSubmit}  
        >
        Submit
        </button>
      </div>
    </div>
    </form>
    );
}

export default Dataform;
