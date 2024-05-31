// Function to display a modal alert box
function showAlert(message) {
    var dialog = new Window("dialog", "Alert");
    dialog.add("statictext", undefined, message);
    dialog.add("button", undefined, "OK");
    dialog.show();
}

// Function to select all objects whose name starts with "key_"
function selectObjects() {
    if (app.documents.length > 0) {
        var doc = app.activeDocument;
        var selectedCount = 0;

        for (var i = 0; i < doc.pageItems.length; i++) {
            var item = doc.pageItems[i];
            if (item.name.indexOf("key_") === 0) {
                item.selected = true;
                selectedCount++;
            }
        }

        if (selectedCount > 0) {
            showAlert(selectedCount + " objects selected.");
        } else {
            showAlert("No objects with name starting 'key_' found.");
        }
    } else {
        showAlert("No document open.");
    }
}

// Run the function
selectObjects();
