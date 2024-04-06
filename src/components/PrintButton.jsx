"use client"
export default function PrintButton() {
  return (
    <button onClick={() => alert("Hello World")} className="btn btn-light">
      Print
    </button>
  )
}
