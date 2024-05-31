/*
*
*   Replace Content By Key
*   Written by Victor Paredes
*   https://victorpared.es
*
*   This Adobe Illustrator script will replace either text or image content based on key_ and object name pairings.
*   Example: "key_object_name" will replace content for objects named "object_name".
*
*/
#target illustrator

// Check if there is an active document
if (app.documents.length > 0) {
    var doc = app.activeDocument;
    var selectedObject = doc.selection[0];
    var wasCanceled;
    var target_objects;
    var keyCounter;







   




    // Check if there is only one object selected
    if (doc.selection.length === 1) {
        if (selectedObject instanceof TextFrame || selectedObject instanceof PlacedItem) {

        


                
            
            
            // Check if the object name includes "key_"
            if (selectedObject.name.indexOf("key_") !== -1) {
                target_objects = selectedObject.name.replace("key_", "");
            } else {
                // Create a new dialog window
                var dialog = new Window("dialog", "Enter Desired Target Object(s) by Name");
                // dialog.graphics.backgroundColor = dialog.graphics.newBrush (dialog.graphics.BrushType.SOLID_COLOR,
                //     [0.58, 0.58, .59]);
              
                
                // dialog elements
                var dialogPromptText = dialog.add ("group");
                    dialogPromptText.orientation = "column";
                    var staticText = dialogPromptText.add("statictext", undefined, "There is no prefix 'key_' in selected object's name. Enter the desired object name to target:");
                    var targetDialog = dialogPromptText.add("edittext", undefined, "");
                    targetDialog.characters = 25;
                      

                var dialogPromptButtons = dialog.add ("group");
                    dialogPromptButtons.orientation = "row";
                    var cancelButton = dialogPromptButtons.add("button", undefined, "Cancel");
                    var replaceButton = dialogPromptButtons.add("button", undefined, "Update Targets");
                    var replaceAndUpdateButton = dialogPromptButtons.add("button", undefined, "Make Key and Update Targets", {name: "ok"});
                    
                

                // Function to handle button clicks
                function buttonClick(buttonName) {
                    switch(buttonName) {
                        case "Cancel":
                            wasCanceled = true;
                            break;
                        case "Update Targets":
                            target_objects = targetDialog.text;
                            break;
                        case "Make Key and Update Targets":
                            target_objects = targetDialog.text;
                            selectedObject.name = "key_" + targetDialog.text;
                            break;
                        default:
                            break;
                    }
                }

                // Event listener for button clicks
                cancelButton.onClick = function() {
                    buttonClick("Cancel");
                    dialog.close();
                }

                replaceButton.onClick = function() {
                    buttonClick("Update Targets");
                    dialog.close();
                }

                replaceAndUpdateButton.onClick = function() {
                    buttonClick("Make Key and Update Targets");
                    dialog.close();
                }

                // Show the dialog
                dialog.show();


            }





            var objectCounter = 0;




            // SWITCH
            switch (true) {


                case (selectedObject instanceof TextFrame):
                    // Copy the contents of the selected TextFrame
                    var current_text = selectedObject.contents;
                    // Iterate through all layers
                    for (var i = 0; i < doc.layers.length; i++) {
                        var currentLayer = doc.layers[i];
                        // Iterate through all page items in the layer
                        for (var j = 0; j < currentLayer.pageItems.length; j++) {
                            var currentItem = currentLayer.pageItems[j];
                            // Check if the page item's name matches target_objects
                            if (currentItem.name === target_objects) {
                                // Replace text with current_text
                                currentItem.contents = current_text;
                                objectCounter++;
                            }
                        }
                    }
                    break;
        


                case (selectedObject instanceof PlacedItem):
                    // Handle PlacedItem
                    // Iterate through all layers
                    for (var i = 0; i < doc.layers.length; i++) {
                        var currentLayer = doc.layers[i];
                        // Iterate through all page items in the layer
                        for (var j = 0; j < currentLayer.pageItems.length; j++) {
                            var currentItem = currentLayer.pageItems[j];
                            // 
                            if (currentItem.name === target_objects) {
                                // Replace text with current_text
                                currentItem.file = selectedObject.file;
                                objectCounter++;
                            }
                        }
                    }
                    break;
        


                default:
                    // alert("Select a Placed Image or Text Frame to serve as your key...");
                    break;

            
            }




            if (wasCanceled != true) {
                alert('Updating ' + objectCounter + ' objects.');
            } else {
                wasCanceled = false;
            }





            


            

            




        } else { // not TextFrame or PlacedImage
            alert("Select a 'Placed Image' or 'Text Frame' to serve as your key.");
        }

    } else { // nothing selected
        var iterateAllPrompt = new Window("dialog", "ALERT | No Selection"); 

        var iterateAllPromptText = iterateAllPrompt.add ("group");
        iterateAllPromptText.orientation = "column";
            var iterateStaticText = iterateAllPromptText.add("statictext", undefined, "Select a 'Placed Image' or 'Text Frame' to serve as your key.");
        
        var iterateAllPromptButtons = iterateAllPrompt.add ("group");
            iterateAllPromptButtons.orientation = "row";
            var iterateAllButtonCancel = iterateAllPromptButtons.add ("button", undefined, "Cancel");
            // var iterateAllButtonYes = iterateAllPromptButtons.add ("button", undefined, "Yes", {name: "ok"});
            

        
            keyCounter = 0;



            // for (var i = 0; i < doc.layers.length; i++) {
            //     currentLayer = doc.layers[i];
            //     // Iterate through all page items in the layer
            //     for (var j = 0; j < currentLayer.pageItems.length; j++) {
            //         var currentItem = currentLayer.pageItems[j];
            //         // Check if the page item's name matches target_objects
            //         if (currentItem.name === target_objects) {
            //             // Replace text with current_text
                        
            //             keyCounter++;
            //         }
            //     }
            // }

            
            

        // Event listener for button clicks
        // iterateAllButtonYes.onClick = function() {
        //     // iterateButtonClick("Yes");
            

        //     for (var i = 0; i < doc.layers.length; i++) {
        //         var currentLayer_Selected = doc.layers[i];
        //         // Iterate through all page items in the layer
        //         for (var j = 0; j < currentLayer_Selected.pageItems.length; j++) {
        //             var currentItem_Selected = currentLayer_Selected.pageItems[j];
                    
        //             // Check if the page item's name matches target_objects
        //             if (currentItem_Selected.name.indexOf("key_") !== -1) {
        //                 // Replace text with current_text
                        

























                    




























































        //                 keyCounter++;
        //             }
        //         }
        //     }

        //     // key counter
        //     // alert(keyCounter + ' keys found. \nThis feature is currently unavailable.');

        //     dialog.close();

        // }
        
        iterateAllPrompt.show();


        // alert('Here we gooooo....');




    }

    
} else {
    alert("No active document found.");
}


