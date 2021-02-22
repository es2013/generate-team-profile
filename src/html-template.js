const generateHTML = data => {
  const manager = data.manager.map(function (employee) {
    let managerCard = `
                  <div class="col-md-4">
                  <div class="card z-depth-2">
                    <div class="card-header bg-dark text-light">
                      Meet the Manager!
                    </div>
                    <div class="card-body bg-info">
                      <h4 class="card-title">${employee.name}, Manager</h4>
                      <p class="card-text">ID: ${employee.id}</p>
                      <p class="card-text">: Email: ${employee.email}</p>
                      <p class="card-text">: Office Phone number: ${employee.officeNumber}</p>
                    </div>
                    </div>
                    <div>
                    
        `
    return managerCard
  });

  const engineer = data.engineer.map(function (employee) {
    let engineerCard = `
                    <div class="card z-depth-2">

                    <div class="card-header bg-dark text-light">
                      Meet the Engineer!
                    </div>
                    <div class="card-body bg-info">
                      <h4 class="card-title">${employee.name}, Engineer</h4>
                      <p class="card-text">ID: ${employee.id}</p>
                      <p class="card-text"> Email: ${employee.email}</p>
                      <p class="card-text"><a href="https://github.com/${employee.github}"> Github: ${employee.github}</p>
                    </div>
                    </div>
                    </div>
                  
        `
    return engineerCard
  });

  const intern = data.intern.map(function (employee) {
    let internCard = `
                    
                    <div class="card-header bg-dark text-light">
                      Meet the Intern!
                    </div>
                    <div class="card-body bg-info">
                      <h4 class="card-title">${employee.name}, Intern</h4>
                      <p class="card-text">ID: ${employee.id}</p>
                      <p class="card-text">Email: ${employee.email}</p>
                      <p class="card-text">School: ${employee.schools}</p>
                    </div>
                    
                  
        `
    return internCard
  })
  return [manager, engineer, intern]
}

module.exports = templateData => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    
        <title>Team</title>
    </head>
    <body>
        <nav class="navbar navbar-dark bg-dark">
            <span class="navbar-brand text-center">Team</span>
        </nav>
        <header class="header">
                <h1 class="text-center text-info">Meet the Team</h1>
                <p class="text-center">Get to know our team!</p>
        </header>
        <div class="container">
            <div class="row">
            
            
            ${generateHTML(templateData)}
      </div>
     </div>
         
        </body>
        </html>
        `

}

