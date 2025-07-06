// Google Apps Script Code
// Go to script.google.com and create a new project
// Paste this code and deploy as a web app

function doPost(e) {
  try {
    // Get the active spreadsheet (create one first)
    const sheet = SpreadsheetApp.getActiveSheet()

    // If this is the first submission, add headers
    if (sheet.getLastRow() === 0) {
      sheet.getRange(1, 1, 1, 6).setValues([["Timestamp", "Name", "Email", "Phone", "Service", "Message"]])

      // Format headers
      const headerRange = sheet.getRange(1, 1, 1, 6)
      headerRange.setFontWeight("bold")
      headerRange.setBackground("#4285f4")
      headerRange.setFontColor("white")
    }

    // Get form data
    const formData = e.parameter

    // Add new row with form data
    sheet.appendRow([
      formData.Timestamp || new Date().toLocaleString(),
      formData.Name || "",
      formData.Email || "",
      formData.Phone || "",
      formData.Service || "",
      formData.Message || "",
    ])

    // Auto-resize columns
    sheet.autoResizeColumns(1, 6)

    // Optional: Send email notification to yourself
    const emailSubject = `New Lead: ${formData.Name} - ${formData.Service}`
    const emailBody = `
      New lead from your portfolio website:
      
      Name: ${formData.Name}
      Email: ${formData.Email}
      Phone: ${formData.Phone}
      Service: ${formData.Service}
      Message: ${formData.Message}
      
      Submitted at: ${formData.Timestamp}
    `

    // Replace with your email
    MailApp.sendEmail("your-email@gmail.com", emailSubject, emailBody)

    return ContentService.createTextOutput(JSON.stringify({ success: true })).setMimeType(ContentService.MimeType.JSON)
  } catch (error) {
    console.error("Error:", error)
    return ContentService.createTextOutput(JSON.stringify({ success: false, error: error.toString() })).setMimeType(
      ContentService.MimeType.JSON,
    )
  }
}

// Test function (optional)
function testFunction() {
  const testData = {
    parameter: {
      Name: "Test User",
      Email: "test@example.com",
      Phone: "1234567890",
      Service: "Instagram Reels",
      Message: "This is a test message",
      Timestamp: new Date().toLocaleString(),
    },
  }

  doPost(testData)
}
