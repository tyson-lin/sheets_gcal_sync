// Compiled using wl-onestop 1.0.0 (TypeScript 4.9.5)
function updateCalendars() {
    OnestopCalendarController.updateAllMinistries();
}
function handleEdit() {
    Logger.log('onEdit trigger fired');
    OnestopCalendarController.grabCalendars();
    TriggerController.getCurrentTriggers();
    TriggerController.createAndDeleteTriggers();
    return;
}
function checkUpdating() {
    var onestop = new Onestop();
    console.log("".concat(!!onestop.checkIsBeingUpdated()));
}
// Update executeOnEditCalendarUpdate variable in trigger controllers if changing this function name
function executeOnEditCalendarUpdate() {
    OnestopCalendarController.grabCalendars();
    TriggerController.executeUpdateCalendarsOnEdit();
    return;
}
function getTriggerIds() {
    TriggerController.logTriggerIds();
}

// run this once manually to install the trigger
function installOnEditTrigger() {
  ScriptApp.newTrigger("handleEdit")
    .forSpreadsheet(SpreadsheetApp.getActive())
    .onEdit()
    .create();
}

// test function to experiment with the sheet
function testFunction() {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('8/25-8/31 (WK1)');
    var startTimes = sheet.getRange(1, 2, 10, 2).getValues();
    Logger.log(startTimes);
}