function Error(){
    return(
        <div className="error-container">
            <h1>Error occured while fetching data</h1>
            <p>Please try again</p>
            <button onClick={() => window.location.reload()}>Try again</button>
        </div>
        
    )
}

export default Error