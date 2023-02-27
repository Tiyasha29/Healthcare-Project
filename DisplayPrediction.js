import '../App.css';
import React from 'react'
import { useState,useEffect } from 'react';

export default function DisplayPrediction() {

    const [data,setData]=useState([{}])
    const [symptoms,setSymptoms]=useState('')
    const storedSymptoms=["Itching","Skin Rash","Nodal Skin Eruptions","Continuous Sneezing",
    "Shivering","Chills","Joint Pain","Stomach Pain","Acidity","Ulcers On Tongue","Muscle Wasting",
    "Vomiting","Burning Micturition","Spotting Urination","Fatigue","Weight Gain","Anxiety",
    "Cold Hands And Feets","Mood Swings","Weight Loss","Restlessness","Lethargy","Patches In Throat",
    "Irregular Sugar Level","Cough","High Fever","Sunken Eyes","Breathlessness","Sweating",
    "Dehydration","Indigestion","Headache","Yellowish Skin","Dark Urine","Nausea",
    "Loss Of Appetite","Pain Behind The Eyes","Back Pain","Constipation","Abdominal Pain"]

    function dispDiag()
    {
      var checks=document.getElementsByClassName("form-check-input");
      var str=""
      for(var i=0;i<checks.length;i++)
      {
        if (checks[i].checked===true)
        {
          str+=checks[i].value+","
          setSymptoms(str)
        }
      }
      setSymptoms(str.substring(0,str.length-1))
      console.log(symptoms)
    }

    useEffect(()=>{
      if(symptoms)
      {
        fetch(`/predictions/${symptoms}`).then(
            res=>res.json()
        ).then(
            data=>{
                setData(data)
                console.log(data)
            }
        )}
    }, [symptoms])

  return <div>
  {
      <div>

        <div className="input-field" style={{"font-family": "Inter"}}>
          <h2 style={{"font-family": "Inter", "font-style": "bold"}}>Select all symptoms that you are experiencing:</h2>
          <div className="checkboxes">
          {storedSymptoms.map((ele)=><><input type="checkbox" className="form-check-input" value={ele}/>{ele}<br/></>)}
          </div>
          <button type="button" className="btn btn-primary" data-toggle="button" aria-pressed="false" autoComplete="off" onClick={dispDiag}>
          Generate Diagnosis
          </button>
        </div>

        <div className="card">
          <div className="card-header">
            Diagnosis
          </div>
          <div className="card-body">
            <h5 className="card-title">Your Predicted Disease Is:</h5>
            <p className="card-text">{typeof data["final_prediction"]==='undefined'?"Select symptoms to see diagnosis here.":data["final_prediction"]}</p>
            <a href="/" className="btn btn-primary">Find doctors near you</a>
          </div>
        </div>

      </div>
  }
  </div>
}
