import React from "react";
import { useState } from "react";
import "./Dataform.css";
function Dataform() {
  const [inputDirectory, setInputDirectory] = useState("");
  //   const [qualityCheckDirectory, setQualityDirectory] = useState("");
  //   const [fastPDirectory, setfastPDirectory] = useState("");

  return (
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
          <select>
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
          <select>
            <option value="hg38">hg38</option>
            <option value="hg19">hg19</option>
          </select>
        </div>
        <div className="dataform_inputcolum">
          <label>Sample Input directory</label>
          <input
            type="path"
            id="input directory"
            value={inputDirectory}
            onChange={(event) => setInputDirectory(event.target.value)}
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
        </div> */}
      </div>
    </div>
  );
}
export default Dataform;
