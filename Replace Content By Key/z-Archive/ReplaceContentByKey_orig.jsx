/*
*
*   Replace Content By Key
*   v1.0 | May 2024
*   Written by Victor Paredes
*   https://victorpared.es
*
*   Description:
*   This Adobe Illustrator script will replace either text or image content based on key_ and object name pairings.
*   Example: "key_object_name" will replace content for objects named "object_name".
*
*   Special shoutout to Joonas Pääkkö (https://github.com/joonaspaakko) for his ScriptUI developer tools. 
*
*/

#target illustrator

// Check if there is an active document
if (app.documents.length > 0) {
    var doc = app.activeDocument;
    var selectedObject = doc.selection[0];
    var wasCanceled = false;
    var target_objects;
    var keyCounter;
    var is_targetDialog_empty = false;
    var update_keys_selected = false;


    var undefinedFrameFix_toggle;
    // Create a new TextFrame
    var rectRef = doc.pathItems.rectangle(700, 50, 100, 100); 
    var areaTextRef = doc.textFrames.areaText(rectRef); areaTextRef.contents = "TextFrame #1";
    areaTextRef.selected = true;
    areaTextRef.remove(); 
    redraw();



    var speechGreeting = ["Hello!", "Guten Tag!", "Greetings!", "Bonjour!", "Namaste!", "Hola!", "Hi There!"];
    var speechMistake = ["Oops!", "Hmmm...", "Do-h!", "Just a small issue...", "A penny for your thoughts?", "Whoopsie!", "No Dice :/"];
    





    











    var icon_chat_bubbles_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%002%00%00%00I%08%06%00%00%00%7F%C3%9Au%C2%B3%00%00%00%09pHYs%00%00%16%25%00%00%16%25%01IR%24%C3%B0%00%00%069iTXtXML%3Acom.adobe.xmp%00%00%00%00%00%3C%3Fxpacket%20begin%3D%22%C3%AF%C2%BB%C2%BF%22%20id%3D%22W5M0MpCehiHzreSzNTczkc9d%22%3F%3E%20%3Cx%3Axmpmeta%20xmlns%3Ax%3D%22adobe%3Ans%3Ameta%2F%22%20x%3Axmptk%3D%22Adobe%20XMP%20Core%209.1-c002%2079.dba3da3b5%2C%202023%2F12%2F15-10%3A42%3A37%20%20%20%20%20%20%20%20%22%3E%20%3Crdf%3ARDF%20xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%3E%20%3Crdf%3ADescription%20rdf%3Aabout%3D%22%22%20xmlns%3Axmp%3D%22http%3A%2F%2Fns.adobe.com%2Fxap%2F1.0%2F%22%20xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22%20xmlns%3Aphotoshop%3D%22http%3A%2F%2Fns.adobe.com%2Fphotoshop%2F1.0%2F%22%20xmlns%3AxmpMM%3D%22http%3A%2F%2Fns.adobe.com%2Fxap%2F1.0%2Fmm%2F%22%20xmlns%3AstEvt%3D%22http%3A%2F%2Fns.adobe.com%2Fxap%2F1.0%2FsType%2FResourceEvent%23%22%20xmp%3ACreatorTool%3D%22Adobe%20Photoshop%2025.7%20(Macintosh)%22%20xmp%3ACreateDate%3D%222024-05-04T00%3A51%3A00-07%3A00%22%20xmp%3AModifyDate%3D%222024-05-04T05%3A45%3A28-07%3A00%22%20xmp%3AMetadataDate%3D%222024-05-04T05%3A45%3A28-07%3A00%22%20dc%3Aformat%3D%22image%2Fpng%22%20photoshop%3AColorMode%3D%223%22%20xmpMM%3AInstanceID%3D%22xmp.iid%3A887d4c48-9561-4b27-95c2-8f14d10a55c3%22%20xmpMM%3ADocumentID%3D%22adobe%3Adocid%3Aphotoshop%3Ae9e433c1-a916-5145-a552-f2788cf9eb26%22%20xmpMM%3AOriginalDocumentID%3D%22xmp.did%3A40af59e9-5d26-462b-88d7-2a759c959022%22%3E%20%3CxmpMM%3AHistory%3E%20%3Crdf%3ASeq%3E%20%3Crdf%3Ali%20stEvt%3Aaction%3D%22created%22%20stEvt%3AinstanceID%3D%22xmp.iid%3A40af59e9-5d26-462b-88d7-2a759c959022%22%20stEvt%3Awhen%3D%222024-05-04T00%3A51%3A00-07%3A00%22%20stEvt%3AsoftwareAgent%3D%22Adobe%20Photoshop%2025.7%20(Macintosh)%22%2F%3E%20%3Crdf%3Ali%20stEvt%3Aaction%3D%22converted%22%20stEvt%3Aparameters%3D%22from%20application%2Fvnd.adobe.photoshop%20to%20image%2Fpng%22%2F%3E%20%3Crdf%3Ali%20stEvt%3Aaction%3D%22saved%22%20stEvt%3AinstanceID%3D%22xmp.iid%3A887d4c48-9561-4b27-95c2-8f14d10a55c3%22%20stEvt%3Awhen%3D%222024-05-04T05%3A45%3A28-07%3A00%22%20stEvt%3AsoftwareAgent%3D%22Adobe%20Photoshop%2025.7%20(Macintosh)%22%20stEvt%3Achanged%3D%22%2F%22%2F%3E%20%3C%2Frdf%3ASeq%3E%20%3C%2FxmpMM%3AHistory%3E%20%3C%2Frdf%3ADescription%3E%20%3C%2Frdf%3ARDF%3E%20%3C%2Fx%3Axmpmeta%3E%20%3C%3Fxpacket%20end%3D%22r%22%3F%3E%5D%C2%80%7Fs%00%00%0B%25IDATh%C2%81%C3%AD%C2%9B%7BpT%C3%95%1D%C3%87%3Fw%1F%C3%89%3EB%1E%C2%84%C2%98%07!%C2%A1D%14%05%C2%84XI%10%03*%3A%C3%AAL%19%40%C2%AD%0A%C2%8C%60%05%C2%AB%C3%A3%C2%B4%C3%9A%C3%B2G%C2%A7%C2%B5%C2%A5v%C3%AA%C2%83%C3%BE%C3%91%C2%8A-%C2%B5u%C3%ACt%C3%94a%1ClGl%C3%AB%C2%A3Z%C2%AD%C2%A2%C2%8E%2F%C3%9A%C2%80%C2%89%C2%A0F%04!O%C3%B2%22%C2%BB%C2%9B%C3%A7%C2%BE%C3%AF%C3%AD%1Fww%C3%99%7B%C3%B7%C3%9C%C2%9B%C2%BB%1B%18%C2%99%C2%8E%C3%9F%C2%99%3B%C3%89%C3%B9%C3%9D%C3%9Fy%7C%C3%AF9%C2%BF%C3%9F%C3%B9%C2%9D%C3%87J%C2%8A%C2%A2%00%20I%12Yb9P%0Ax%C2%80%3C%C2%A0%00p%00E%C2%80%1D(L%C2%A4%0B%C2%80%7C%C3%80%C2%9Dx%C3%B2%C3%93t%0B%13%C2%BA%C3%89%3C%05%C3%80%0B%C3%80Z%2B%0DH%C2%B6%C2%9DDa%C2%B9%C2%A0%02%C3%98%3B%C2%85%C3%BCfp%C3%A7%C2%92%C3%89%C2%96ce%C3%97sfH%C2%80%C3%9AcY%23W%22%C2%97%C3%A5%C2%98%C3%8F%0A%5C%C3%80%C2%B4l3e%C3%BBUK%C2%802%C3%A0%5C%C2%AB%19%24I%C2%9A%C2%90lR%C3%88aw%C2%84%C2%9D%C3%B9yA%C2%87%C3%83%11u%C3%A69%C2%A3%1E%C2%AF%3B%C3%AAv%7B%C3%A2%0E%C2%A7C%C3%89%C3%8Bs*n%C2%8F%5B%01%C3%A8%C3%A9%C3%AC%C3%89%C3%AF8%C3%961%02%C3%B8%C2%81%C2%8E%C3%84%C3%B3*%C3%B0%C2%84i%3D%16%C2%8C%C3%BD%C2%9F%C3%80%C3%85%C3%80%0C%C3%92%C2%88%C2%BB%3C%C2%AEheM%C2%95%C2%A3%C2%AC%C2%AAL*%C2%AF%C2%AA%08%2C%C2%98%C2%BF%C2%A0%C2%ABjV%C2%95%C2%B7bfeQIiI%C2%A1%C3%8B%C3%ADrz%0B%C2%BCV%C3%B9%C2%A6%C3%B0%C3%94cO%C2%B6%C3%AC%7C%C3%B8%C2%B7%C3%B5%3A%C3%B1g%C3%80%7C%C2%BDn%C2%B6%C3%86%C3%AEF5%C3%AE%14%1AV6r%C3%85%C3%9A%C2%AB%C2%9CI%C3%B2%0E%C2%87%C2%A3%C3%B8%C2%86%C3%95%C3%97%17%C3%9Bl%C2%B9%C2%8E%C3%94Iq%3E%C2%AAg%C2%8C%18)X%C2%A9%C3%B9%C2%98%5E%C3%A0%1B%C3%B0iz0%16%C2%8B%C3%91%3F%C3%90%C2%9FK%03%C2%AD%C3%82%0EL7S%C3%88%C2%89H%C3%87%17%C3%AD%C3%84cq%C2%8D%C2%AC%C2%A7%C3%B7DV-%C3%8B%01v%C2%B3%C2%97V%C2%86%C3%96%C2%97zA4%12%C2%A5%C3%A7x75sk%C3%95B%1C%0E%C3%86%C3%86%C3%86rk%C2%9E%0E%C2%B7%C3%9E%C2%B5%C2%B1%C3%BE%C3%9A5%C3%97%C2%8D%C3%8B%C2%B2%2C%C2%8F%04%C2%86%C3%87%15EQ%02%C2%BE%40%C3%B0%C3%9E%C2%8D%C3%9F%C3%BF%C2%97%2C%C3%8B1%608M%C3%BD%C2%8A%C3%A4%3FV%C2%88%C3%B8%00J%C3%8BK%C3%B1%16%16PR6%C2%9D%C2%9A%C2%B9%C2%B5T%C3%97%C3%8Db%C3%89%C3%85%C2%97P3%C2%AB%06%C2%A7%C3%93%C2%99R%0E%C2%87%C3%82%C2%9C%C3%A8%C3%AA%C3%81%C3%A9t2%C2%B3%C2%B6%C3%9A4b%C3%A8%C3%AE%C3%A8%C3%A6%C3%93%C2%96O%C2%88%C3%85c%2C%C2%AC%C2%BF%C2%88%C2%9A9jYU%C2%B3%C2%AAT%2FQ%5B%C2%9Dr%C3%83%C2%8A%C2%A2%C2%84P%5D%C2%B3%10fD6%01%C2%BF%04f%03%2CY%C3%99%C3%88%C2%A2eZg226%C2%9A%22%C3%B1%C3%85%C2%A7%C2%87%C3%99%C3%B1%C3%80%23%C2%B4%C3%AC%C3%BB%C2%88HD%C2%B5%C3%89%C2%B2%C2%8A2%1E%C3%BC%C3%9D%C3%834%C2%AEX%C2%9AQ%C3%B8%C3%9D%C3%AB%C3%AEb%C3%9F%3B%1Fjd%3F%C3%98%C2%B6%C2%95%C3%AF%7C%C3%AFvac%24I%C2%8A*%C2%8AbH%C3%84%C3%88F%0A%C2%80%C2%A7%C2%93%24%00%C2%82%C3%A3%C2%A1%0C%C2%A5%C2%AE%C3%AE%C2%AE%C3%94%C3%BF%C3%9D%C2%9D%C3%9D%04%C3%BA%C3%BDl%C3%9E%C2%BC%C2%99%C3%BAz%C2%95%C3%B0%60%C3%9F%20%1F%C2%BE%C3%B3%C2%81%C2%B0%02_%C2%BF%C2%8F%1D%3Bv%C2%B0%7B%C3%B7%C3%AE%C2%94%C3%AC%C3%A0%C3%BE%C2%8F%C2%8D%C3%9A%C2%89d%C2%93%C2%82%C2%86%2F1%26%C3%A2%004c%22%1C%C3%8C%2Cgbb%C2%82!%C3%9F%10%00.%C2%97%C2%8B%C2%AD%5B%C2%B7%C3%B2%C3%B8%C3%A3%C2%8F%C2%B3f%C3%8D%C2%9A%C2%94%C3%8E%C3%B8%C3%A8%C2%B8%C2%B0%C2%82%C3%A2%C3%92b%C2%B6n%C3%9D%C3%8A%C3%BA%C3%B5%C3%AB%C3%89%C3%8FW%C2%A3%C2%92%C3%A1%C3%80%C2%B0P%17%C3%80n%C2%B3%C3%87%0D_%C2%9A%10%09%C3%A8%05%C2%A2%1E%01%C3%A8%C3%A8%C3%AC%00%C3%80%C3%A5v%11L%C2%90%C2%AD%C2%AA%C2%AAJ%C2%BD%1F%1F%17%13%09%C2%87%C3%83%00%C3%B4%C3%B4%C3%B4PTT%04%C3%80%C3%A8%C3%B0%C2%88Y%5BMaf%23%0Ai%C2%BD%12%C2%9A%C3%90%C3%B6%C2%88%C3%9Dn%C2%A7%C2%A2%C2%BC%C2%82Y%C3%955%00x%C2%A7yyl%C3%97N%C3%B6%C3%AC%C3%99CkkkJ%C3%8F%C2%A8G%C2%82%C3%81%20%C2%95%C2%95%C2%95%C3%B4%C3%B5%C3%B5%C2%A5d%23%C2%813Cd%04u%C2%9D%C2%A0V%3C%C2%AE%25r%C3%8E%C2%8C2%C2%96%2FkJ%C2%A5%C3%9Dn%0F---%19%C2%85%C2%8C%C2%8D%1A%C2%BB%C3%A5t%12%00%23S%C3%A8%11%C2%B3%091%C2%9A%C2%9E%08%07%C3%83%C2%9A%C2%97%C2%A3%C2%BAy%23%C3%9F-%C2%8E%C2%BE%C3%8D%C2%88%C3%A8%11%C2%9C%08%12%C2%8B%C3%86%C2%84%C3%AF%C3%A2r%3CO'%C3%92%18%C2%94%19%11%C3%8D%C2%98%08%C2%87%C2%B4D%C3%86'%C3%865A%C2%9B%C3%87%C3%AB%11%17b%40%C3%84n%10%C2%97%19%C3%B5%C2%8A%22%2Bz%22%1AX%0E%C3%A3%23%3A%22%C2%8A%C2%A2%10%0E%C2%87q%C2%B9T%C3%97%C3%AE%C3%B5zihj%C3%A0%C3%9C%0B%C3%A6RQUA%C2%BE%C3%8BE8%14b%C2%A0w%40X%C3%9E%0D%C2%B7%C3%9E%C2%88%2C%2B%C2%94U%C2%94%C2%A9%C3%A5%C2%87%23%7C%C3%B9%C3%B9Q%C3%8D%C3%87%C3%91A%3F%C2%B3%06%C2%AC%12%19%C3%95%10%09g%06%C2%9E%C2%A1p(E%C3%84f%C2%B7%C3%B1%C3%84s%7F6)N%C2%8Boo%C2%BA9S%C2%B8%26S%C2%94%C2%84%2C%C3%8B%05f%C3%A5%C2%99%11%C3%91%C3%B8m%C3%91%C3%98M%C3%8E%C3%A0S%C2%85%1C%C2%97%C3%A9%3B%C3%91G%C3%9B%C2%A1%C3%8F8%7C%C3%A8sV%C2%AF%5BKum%C3%B5%C2%A9%C2%86%C3%84%C2%84S%C2%88%C3%86F%C2%A6%C2%B4%C3%AE%C2%8EDU%7F%C3%B0%C3%A8%03%3B%C3%B8%C3%B2%C3%B0Q%C3%8A%C3%8A%C3%8B%C2%98%5EV%C2%8A%C3%8B%C3%AD%C3%82%C3%A3%C3%B5%C3%A0-%C3%B0%C2%92%5C%C2%A3%C2%8C%C2%8E%C2%A8%1D%3C16%C2%8E%C3%9F%17%60%C3%98%17%20%C3%A0%C3%B3%C3%93%C3%95%C3%91Mo%C3%B7%09%C3%8D%C2%87Z%C3%9Cx%C2%B1%C2%86%C3%88%C3%88%C3%B0H%C2%9C%C3%8C%C3%A8Wc%C3%83fD2%26%C2%80h%24%C2%8A3%C3%AFT%C2%80%18M%10%C3%A9%3C%C3%9E%C3%81%C3%BB%7B%C3%9F%C2%9B%C2%9C%C2%B9E%04%7C~Mz80%3C%0A%14%C3%AB%C3%95%C3%92%13%C2%96%C3%9D%2F%C2%80%1C%C3%97u%C2%B1%C2%B1aN%09%C2%81%C2%A1%C2%80%26%C3%AD%1F%C3%B2%C2%8B%5C%C2%9Fe%C3%B7%C3%BB%C2%95%C3%81%3F%C3%A4%C3%93%C2%A7E%01c%20%3D%C2%91%15%11g%C2%BE%C2%A9%2B%3Fm%08%C3%B8%C2%B5%C3%81%C2%A3%C3%AF%C2%A4O%14%C3%A8%C3%A5%C3%9E%23gpsA%C2%83a%7F%40%C2%93%C3%AE%3A%C3%9E%15%16%C2%A8%0D%C2%A5'%C2%AC%C2%B7L%C2%B0%C3%90K_%19%C2%9EN%C3%A8%C2%89t%1Ck%17%C3%B9_%C3%8D%26%C2%81e%C3%B7%C2%9B%C3%AF%C3%8A%C2%8C%C2%A5%C3%B2%C3%B2%26%1Fj6I%C3%A2%C3%8A%C3%9A%05%C2%AC%C2%9C%C2%BD%C2%90Y%C2%85%C2%A5%C3%98%25%1B%5D%23C%C2%BC%C3%97%C3%95%C3%86%1B%C3%AD%07%09%C3%852%7C%0A%C2%BE%C2%93Z%1B9%C3%91%C3%99%23j%C3%A7%60zbJD%C2%92%3Dr%C3%93%C2%A6%C2%9B9%C3%9Av%C2%84%C3%AE%C2%8En%C3%8D%C3%BB%C3%B5%C3%B3%C2%9Bx%C3%A8%C3%B2%C3%B5%C3%8C).%C3%8F%C3%88%C3%BB%C3%A3K%C3%972%14%1Ceg%C3%B3%2B%C3%BCz%C3%9F%0B%04c%C2%A7%C2%96%C3%87w%C3%BC%C3%B0N%C2%8D%C3%AE%40%C3%9F%C2%A0h%C2%A7%C2%AF%C3%97*%11%C3%8D%04%C2%94'%20%C2%92%5C%C3%99-%C2%BB%C3%B22%C3%BE%C3%B6%C3%AE%0B%3C%C2%BF%C3%AB9%C2%9E%7Dr7%C2%9D%C3%87%3A%C2%B9m%C3%A1%15%5CWW%C3%8Fk%C3%87Z%C3%B1%05%C3%87%C2%98%C2%88%C2%86%C2%99%C2%88E%C2%88%C3%8B2%C2%A3%11%C2%AD%13%C2%BA%C2%A4%C2%B2%C2%8E%23r%C2%80%C2%8Dwmb%C3%AD%C2%86%C3%AB3%02%C3%90%C3%B1%C2%B1%C2%B1%12A%C3%BB4%1BifD%0A%C3%93%13%C2%9E%02m%C3%A1%C2%92%24%C3%A1v%C2%9D%3A%01p%3A%C2%9D%C2%AC%C3%9B%C2%B2%C2%81%5B6%C2%AF%C2%A7%C3%B9%C3%BDf%C3%9E~%C3%AD-%C3%AE%7B%C3%AB%C3%AFt%1E%C3%AFD%C2%96%C3%A5%C2%8C%C3%82%25I%C2%A2vN-%C2%8D%2B%C2%96%C2%B2%C3%A1%C3%9Au445b%C2%B3g%C2%9Al%2C%1A%23%16%C2%8D%C3%8D%C3%90%C2%89%23d1%C2%B4%C2%8A%C3%92%13%C3%9Ei%C3%9A%C3%9E%C3%B5z%C2%BD%C3%82%C2%AD%1EI%C2%92hhj%C2%A0%C2%A1%C2%A9%01P%C3%97%18%C3%9D%C3%AD%5D%C3%B8N%C3%BA%08%C2%87%C3%83x%C2%BC%1EJJ%C2%A7SY%5Di%18%C3%BA%C2%A7%C2%A3%C3%A3X%C2%87%1Fu%C3%B3%5C%23F%5D%C3%81%C3%A6%40%C2%A4H%1B%7C%16%17j%5E%1B%C3%82%C3%ADq3%C3%B7%C3%82%C3%B3%2C%C3%A9%C2%8A%C3%B0I%C3%8B%C2%A1%5E2%C2%89%C2%B4%C3%AB%C3%B5%C2%8C%C3%9C%C2%AF%0D%C3%9D%19%C2%85%C2%BEGJ%C2%8AE%C3%83V%0C%C3%91%C3%90%C2%B2%C2%8A%C3%96%C3%BF%C2%B6%C2%88%16%C3%BD%C3%ADz%C2%81Q%C2%8F%C3%8CBg%C3%AC%C3%93%C2%8A5%26Cii%C2%A9%C3%A5%C3%864%C3%AF%C3%9F%C3%8F%1F%C2%B6%C3%AF%C3%84%C2%9D%C3%AF%26%1A%C2%89%C2%B2n%C3%8B%06%C2%AEYu%C2%8D%C2%A5%C2%BC%C2%AD%C3%8D%C2%AD%C2%A26%C2%B6%C3%AB%05FD%C3%AA%C3%B4%C2%82%C3%B4%1E%C2%B1%C3%99l%C3%8C(%C3%95%C3%9B%C2%9F%18%C2%8A%C2%A2%C3%907%C3%98G%C3%93%C2%B7.%C2%A7%C2%BF%C2%AB%C2%8F%C3%8A%C3%9AJf%C3%96UO%C2%9E1%C2%81%13%C2%9D%3DU%02%C3%B1%C3%A7z%C2%81e%22%7F%C3%BD%C3%A3n*%C2%AA%2B%C2%B9%C3%A0%C2%9B%17%C2%B2r%C3%95%C3%95%C2%B2%C3%83%C3%A1%C2%B0%14%15%C3%B4%C3%B5%C3%B7%11%0C%06)%2C)%C2%A4%C2%B0D%C3%AD%C3%95%3C%C2%8B%11%C3%81%C3%89%C3%BE%C3%81P%24%12%C3%89%C2%9C%C2%84%C3%A0%C2%B0%5E%60%C3%94%C2%98%05%19%12%05%C3%BA%C2%BAzy%C3%AB%1For%C3%BFw%7F%1A%C2%BB%7D%C3%B5m%07%C3%9A%0E%C2%B5%C2%89%17%C3%A4i%C3%B0%07%02%192%C2%AB%C2%A1%C3%8D%C3%9EW%C3%B7%1E%15%C2%88%C3%A3%C3%80%11%C2%BD%C3%90%C3%A8%C3%A8m%1F%C3%90h%C2%A5%C2%B2%C3%99u%C2%B3%3F~%C3%B0%C3%B7%C3%9B%2B%16%C3%94%2F%10%7D9%00%C3%BC%01%3F%C2%9D%5D%5D%04%02~%C3%A2r%C2%9C%C2%85%C3%B3%2F%C2%A2l%C3%86%C3%A4C%C3%B3%C2%8E%1B67%1F%C3%B8p%C3%BF%12%C2%9D%C3%B8%08p%1Eh%C2%8F%C3%9EDD%C3%B2Q7%C3%A7%C2%B2%C2%8A%C3%99%17-Y%C3%9C%C3%BA%C3%B4%C2%8B%C2%BB%16g%C2%93g24%C3%96%5E%C3%92%1B%C2%89D*u%C3%A2%3D%C3%80M%C2%A0%25%22%1AZK%C3%89%C2%92%04%C2%80%C3%9B%C3%A3%C3%8E%C2%88%C3%BE%C2%9E%7FfO%C3%9B%C3%BE%0F%C2%9A%7BL%C2%B6x%0C%C3%B1i%C3%AB'%03%02%12%00%C2%99%C3%9B%C2%99%C2%88%C2%8D%7DU%C3%96%C2%B5%02%C2%9B%C3%AF%C3%99%C2%A2%C2%A94%16%C2%8D%C2%B1%C3%BD'%0FU%C3%8Aq%C2%B9%C3%98%C3%A1t%0C%5C%C2%B8h~%C3%A7%C3%92%15%C2%97%C3%9A%C2%9A%C2%AEZ%3Es%C3%9E%C3%82y%C3%A5Fv%12%C2%8DF9%C3%9Avd%C3%B0W%C3%B7m%C3%AF%06%C3%8E%11%C2%A8%08%C2%89%C2%88%C2%86%C3%96%17%C3%80%5C%C2%9D%C3%9E%26%C3%94%C2%B3%C3%84%C3%8B%C2%80%C3%95%C3%A8.%0C%C3%A4%C3%A5%C3%A5%C3%B5%C3%AFko.O%C2%B7%C2%B3%C2%97%C2%9F%7B%C3%A9%C3%B0%C3%8F%C3%AF%C3%BD%C3%99%C3%B9%C3%82%C3%96%026%C2%BB%C3%8D%C2%97%C2%9F%C2%9F%3Fb%C2%B3%C3%9B%C3%A3%C2%92%C2%84%C2%A2%C3%88%C2%8A-%14%0A%15%C3%84c%C3%B1%19%C2%98%C2%AF%C2%93*H%04%C2%8C%C2%9A%C2%9EV%14%25%5D%C2%B0%045%C2%86%C3%91%3F5%C2%BA%C3%82%16%C2%A2%1E%C3%89)%C2%80%C2%B2%C3%BC%C3%AA%15%C3%8D-%C2%BD%07%C2%95%C3%B4g%C3%8Eyu-%06eM%C3%A5%C3%91%C2%9Cg%26%C3%9B%C2%AE(J%06%C2%91%3FM%C2%969%C2%81*%40N%C3%AAH%C2%92%14j%C2%BAjy%C3%B3%C3%AB-o%C2%8E%C2%B7%C3%B4%1ET%C3%9En%7B7%0C%C2%84%C3%8F%00%C2%91g%C2%AC%10%C2%99%01L%082%3F*%20r%C2%8F%C2%A8%C2%A2%24%C2%A1%C2%9Bn%C2%BB%C3%A5%C3%80%19%20%C2%A1%00w%5B!%C3%B2%1B%C2%83%C3%8C%17%09%C2%88%C2%BC7I%C2%857%02%C3%97%00%C2%8F%00%07O%23%C2%91yV%C2%88%C2%BC%2C%C3%88%C3%B8o%01%C2%89%C2%9AI*%C3%AB%23%C3%93%1B.8%0D%24z%C3%B4%0DI'%C2%92%C3%AE%1DV%C2%A1%C3%9E%C3%83jO%C2%A4%C3%A3%C3%80%C2%8F%04Dn%11%C3%88%C3%92%C2%B1%0B%C3%90%C3%AFx%2F%13%C3%A8%C3%B9P%C3%AF%C2%98%C3%94%C2%A3%C3%9E%C3%86%C2%BB%12%C3%98fR%C3%AE%1B%C2%A6%C2%B5%C3%AA%C2%8C%1D%C3%94C%C3%B9m%26%C2%85~L%C3%A6%C3%97%C3%BA%05jD%C2%9A%C3%91%C3%BD%09%C2%BC)%C3%88%C3%B3%C2%B0%40o%C2%9B%40%2F%C3%B9d%C2%9CC%C2%98y%C2%AD%C3%89%C2%B0XP%C3%81%C3%BB%C2%89w%12%C3%A2%C3%B8%C3%AC%1C%C3%94%C3%9EM%C3%8F%13Aw%C3%A3(%C2%81%C2%97%0CHD%C3%89%C3%9C%C3%84%C2%9E%12%C2%91%1D%C2%82J6O%C2%92G%C3%A4%C3%A1%C2%9E%12%C3%A8I%C2%A8%C2%BB%C2%87%22%22%C2%AF%C2%88%0A%C3%8E%C2%95%C2%88%C2%87%C2%B4I0%C3%B1%C3%B8%13r3l%01N%C3%AA%C3%B2-%14%C3%A8-2%20%C2%A1%00%1BO'%C2%91%3B%05%15%3Cj%25%23%C3%A0%05%C3%AEE%C3%9D%C3%BDx%C3%9D%40g%C2%BB%01%C2%89%20%C3%AA%C2%95%C2%92%C3%93F%C3%A4%2F%C2%BA%0Ad2c%C2%B2%C3%89%C3%A0%40l%1B%C2%A0%C3%8E%3BG%C3%89%24%C3%B2%C2%ACQa%C2%B9%12)%06%0E%C2%A5U%20%1C%C2%B7S%C2%84%0B%C2%B8%1F%C2%B5%17%C2%92%C3%B5%2C7R%C2%9E%C2%8A%C2%B1%C2%97q%C3%AA%C2%AB%5D7%C2%B56%C2%9B%C3%A2%1B%C3%80%C2%8B%C3%80GfJS!%02P%C2%8Dz%0B%3B%C3%AB%3B%C3%A89%C3%80%C3%B4%1Ec%3A%11%2B%C3%97eE%C2%B0%C2%A1%C3%9A%C3%88W%C2%8A%C3%89%C2%96%C2%BAV%C3%B0%C2%95%C2%93%C3%90%C3%A3%C2%AC%3C%0C%C3%8D%05_%139%C3%9B%C3%B05%C2%91%C2%B3%0D%C3%BF7Dr%C2%B9%1DT%02%C2%94%C2%A3NV%C3%85%C2%89%C2%A7%005%0AN%C3%BE%C3%9E*%C3%B9%C3%9B*%11%02%C2%89%C2%BF%13%C2%A8%C3%AB%C2%92%C3%91%C3%84%13%40%C2%BD%C3%8D0%C2%84z%C2%86%3E%C2%91M%C2%A3%C3%8C%C2%88%C3%8CC%C2%8Ds%16%C2%A1.I%C3%A7%003%C3%89%C3%B1%C2%A7C9%60%1C5Z%3E%C2%8A%C2%BAix%00x%07%C3%9D%C2%B1t%0A%C2%82%10%C3%85%0E%C3%BC%C2%87%C2%A9o%16%C2%9C%C2%89'%0E%3C%C2%A6o%C2%BBY%C2%AC%C2%B5%12%C3%B5J%C3%B9%C2%91%C2%B3%C2%A0%C3%B1%0A%C3%AAf%C3%86G%C2%A8%C3%9BK%C2%A9%3D%C2%81lc%C2%ADB%C3%94%13%C2%AC%3A%C3%94%C2%A1U%C2%89%C2%BA%0E%2F%C3%A5%C2%94%C2%8D%14%C2%A1%C3%9AF%C3%92N%26%3B%C3%89%09r%C3%8A%3E%22%C2%A8%C3%B6%11%40%C2%B5%C2%91A%60%00%C3%95N%C2%BAQ%C2%87%C3%961%C3%94%C2%9DK%0D%C3%92%3B%C3%A0%7F%C3%B6%C2%BF%C2%AF%3E%5Ckq6%00%00%00%00IEND%C2%AEB%60%C2%82"; 


    var ok_button_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%14%00%00%00%14%08%06%00%00%00%C2%8D%C2%89%1D%0D%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%C2%9A%C2%9C%18%00%00%06%C2%A0iTXtXML%3Acom.adobe.xmp%00%00%00%00%00%3C%3Fxpacket%20begin%3D%22%C3%AF%C2%BB%C2%BF%22%20id%3D%22W5M0MpCehiHzreSzNTczkc9d%22%3F%3E%20%3Cx%3Axmpmeta%20xmlns%3Ax%3D%22adobe%3Ans%3Ameta%2F%22%20x%3Axmptk%3D%22Adobe%20XMP%20Core%209.1-c002%2079.dba3da3b5%2C%202023%2F12%2F15-10%3A42%3A37%20%20%20%20%20%20%20%20%22%3E%20%3Crdf%3ARDF%20xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%3E%20%3Crdf%3ADescription%20rdf%3Aabout%3D%22%22%20xmlns%3Axmp%3D%22http%3A%2F%2Fns.adobe.com%2Fxap%2F1.0%2F%22%20xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22%20xmlns%3Aphotoshop%3D%22http%3A%2F%2Fns.adobe.com%2Fphotoshop%2F1.0%2F%22%20xmlns%3AxmpMM%3D%22http%3A%2F%2Fns.adobe.com%2Fxap%2F1.0%2Fmm%2F%22%20xmlns%3AstEvt%3D%22http%3A%2F%2Fns.adobe.com%2Fxap%2F1.0%2FsType%2FResourceEvent%23%22%20xmp%3ACreatorTool%3D%22Adobe%20Photoshop%2025.7%20(Macintosh)%22%20xmp%3ACreateDate%3D%222024-04-11T12%3A26%3A40-07%3A00%22%20xmp%3AModifyDate%3D%222024-05-03T23%3A49%3A18-07%3A00%22%20xmp%3AMetadataDate%3D%222024-05-03T23%3A49%3A18-07%3A00%22%20dc%3Aformat%3D%22image%2Fpng%22%20photoshop%3AColorMode%3D%223%22%20xmpMM%3AInstanceID%3D%22xmp.iid%3A49e8f215-f801-4234-88fe-8cd64c4e0019%22%20xmpMM%3ADocumentID%3D%22adobe%3Adocid%3Aphotoshop%3Aa6548415-3617-054a-be21-e8127e432b1b%22%20xmpMM%3AOriginalDocumentID%3D%22xmp.did%3A10b1fcb2-559b-4410-b260-52e85f6258e4%22%3E%20%3CxmpMM%3AHistory%3E%20%3Crdf%3ASeq%3E%20%3Crdf%3Ali%20stEvt%3Aaction%3D%22created%22%20stEvt%3AinstanceID%3D%22xmp.iid%3A10b1fcb2-559b-4410-b260-52e85f6258e4%22%20stEvt%3Awhen%3D%222024-04-11T12%3A26%3A40-07%3A00%22%20stEvt%3AsoftwareAgent%3D%22Adobe%20Photoshop%2025.7%20(Macintosh)%22%2F%3E%20%3Crdf%3Ali%20stEvt%3Aaction%3D%22saved%22%20stEvt%3AinstanceID%3D%22xmp.iid%3A239c73fb-8556-4d13-803e-9dec252d1837%22%20stEvt%3Awhen%3D%222024-05-03T23%3A46%3A48-07%3A00%22%20stEvt%3AsoftwareAgent%3D%22Adobe%20Photoshop%2025.7%20(Macintosh)%22%20stEvt%3Achanged%3D%22%2F%22%2F%3E%20%3Crdf%3Ali%20stEvt%3Aaction%3D%22saved%22%20stEvt%3AinstanceID%3D%22xmp.iid%3A49e8f215-f801-4234-88fe-8cd64c4e0019%22%20stEvt%3Awhen%3D%222024-05-03T23%3A49%3A18-07%3A00%22%20stEvt%3AsoftwareAgent%3D%22Adobe%20Photoshop%2025.7%20(Macintosh)%22%20stEvt%3Achanged%3D%22%2F%22%2F%3E%20%3C%2Frdf%3ASeq%3E%20%3C%2FxmpMM%3AHistory%3E%20%3C%2Frdf%3ADescription%3E%20%3C%2Frdf%3ARDF%3E%20%3C%2Fx%3Axmpmeta%3E%20%3C%3Fxpacket%20end%3D%22r%22%3F%3E%C3%9D%5B%C3%89%C3%8E%00%00%01%C2%A8IDAT8%C2%8D%C2%AD%C3%94%C2%BDk%14Q%14%C3%86%C3%A1g%C2%A3%22%C2%A2%C2%8D%C2%8D%20(X%C2%86%14%0A%C2%B9%C2%8E%C2%8DA4%C3%85%22%C2%B1%C2%B0%11%C3%81A-%05!bg%23V%C3%B9%0B%C2%A2%C2%9D%C2%95%C3%95U%C2%B1%C3%B6%23Xh%C2%82%20%C3%A62XY%C2%89%16%16%22%C2%8A%11%C3%BC%40Dt-v6%C2%8C%C2%9B%C2%99%C3%9D5%C3%B86%C3%83%C2%9Cs%C3%9E%1F%C3%A7%C2%9E%C2%99s%5B%C2%9DN%C3%87%C3%BF%C3%94%C3%86A%C3%89%C2%AC%C3%88%C3%B7%C3%A3%10%C3%B6b%0C%2F%C2%B0%C2%94B%7C%C3%9A%C3%A4i%C3%95u%C2%98%15%C3%B9V%C3%8C%C3%A2%2C%26%C3%BA%C3%92%2Fq%13%C3%B3)%C3%84%C2%95%C2%A1%C3%80%C2%AC%C3%88%0F%C3%A06%C3%B6%0C%C3%AA%1E%C3%AFq%3A%C2%85%C3%B8%C2%B0%11%C2%98%15%C3%B9%24%C2%96%C2%B1a%08%C2%AC%C2%AA%C3%A9%14%C3%A2%C2%A35%C3%80%C2%AC%C3%887%C3%A3%0Dv%C3%BC%03%0C%C2%BEcw%0A%C3%B1%23%C3%9DA%C3%B7ti%1D0%C3%98%C2%82%C2%B9%C2%AC%C3%88%5B%C2%AB%C3%80%C2%AC%C3%88%C3%B7%C3%A1%C3%9C%08%C3%A6%C3%9F%C2%B8%C2%8A%C3%97%7D%C3%B13hW%3B%3C%C2%86%5D%23%00%C2%A7S%C2%88%17%C3%B1%C2%AC%2F%C2%BE%0D3U%C3%A0x%C2%8D%C3%B99%0E%C2%97O8%C2%92B%5C%C3%8C%C2%8A%7C%16'j%C3%AA%C2%B7W%C2%81%C2%AD%C2%9A%C2%82N%0Aq%11S%C2%98I!%3E.a%C3%97%C2%B0%C2%A9%C3%A9%08%C2%BDMyU%C2%93%C2%9B%C3%8C%C2%8A%C3%BCI%0Aq%0A%C3%B7%C2%B3%22%C2%BF%C2%A0%3B%C2%BF%26%7D%C2%AE%02%C3%AF%C3%A1%C2%BC%C2%B5_%C3%B9%60V%C3%A4%0B%C2%BA3%C2%BB2%00%C3%B6%03%0B%C2%94GN!.%C3%A3FCq%7B%08%C2%8C%C3%AE*%3EX%05%C2%96%C2%9A%C3%83%C2%97!%C3%86%26%5DN!%C3%BE%C3%BC%0B%C2%98B%C3%BC%C2%8A%C3%A3%C3%AB%C2%80%C2%9DL!%C2%BE%C3%AD%C2%BDT%3BT%C3%AEd%1B%C2%9FF%00%7D%C3%83%C2%A9%14%C3%A2%C2%9Djp%C2%AC%C2%BF%C2%AA%C2%BC%3D%C3%861%C2%8Fw5%C2%A0%15%5C%C3%87D%0A%C3%B1V%7F%C2%B2%C3%B6%3E%C3%AC)%2B%C3%B2%C2%A3%C2%BA%3F%C3%B7%C3%8E2%C3%B4%01K%C2%B8%C2%9BB%C3%BCU%C3%A7%19%08%5C%C2%8F%C3%BE%00%00%C2%87%C2%837%16%C3%9D%C3%90O%00%00%00%00IEND%C2%AEB%60%C2%82"; 


    // var victorparedes_logomark_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%13%00%00%00%0A%08%06%00%00%00V%C2%89e%C2%9F%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%C2%9A%C2%9C%18%00%00%05%C3%91iTXtXML%3Acom.adobe.xmp%00%00%00%00%00%3C%3Fxpacket%20begin%3D%22%C3%AF%C2%BB%C2%BF%22%20id%3D%22W5M0MpCehiHzreSzNTczkc9d%22%3F%3E%20%3Cx%3Axmpmeta%20xmlns%3Ax%3D%22adobe%3Ans%3Ameta%2F%22%20x%3Axmptk%3D%22Adobe%20XMP%20Core%209.1-c002%2079.dba3da3b5%2C%202023%2F12%2F15-10%3A42%3A37%20%20%20%20%20%20%20%20%22%3E%20%3Crdf%3ARDF%20xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%3E%20%3Crdf%3ADescription%20rdf%3Aabout%3D%22%22%20xmlns%3Axmp%3D%22http%3A%2F%2Fns.adobe.com%2Fxap%2F1.0%2F%22%20xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22%20xmlns%3Aphotoshop%3D%22http%3A%2F%2Fns.adobe.com%2Fphotoshop%2F1.0%2F%22%20xmlns%3AxmpMM%3D%22http%3A%2F%2Fns.adobe.com%2Fxap%2F1.0%2Fmm%2F%22%20xmlns%3AstEvt%3D%22http%3A%2F%2Fns.adobe.com%2Fxap%2F1.0%2FsType%2FResourceEvent%23%22%20xmp%3ACreatorTool%3D%22Adobe%20Photoshop%2025.7%20(Macintosh)%22%20xmp%3ACreateDate%3D%222023-03-16T18%3A54%3A09-07%3A00%22%20xmp%3AModifyDate%3D%222024-05-04T01%3A33%3A10-07%3A00%22%20xmp%3AMetadataDate%3D%222024-05-04T01%3A33%3A10-07%3A00%22%20dc%3Aformat%3D%22image%2Fpng%22%20photoshop%3AColorMode%3D%223%22%20xmpMM%3AInstanceID%3D%22xmp.iid%3A97dd68ce-2f55-4114-93cd-142bbf17b981%22%20xmpMM%3ADocumentID%3D%22adobe%3Adocid%3Aphotoshop%3Abe8d6bea-bbc3-0f43-ac77-3c4cc0fa6498%22%20xmpMM%3AOriginalDocumentID%3D%22xmp.did%3A30448795-f0fc-4451-9844-b7ebeee64dc4%22%3E%20%3CxmpMM%3AHistory%3E%20%3Crdf%3ASeq%3E%20%3Crdf%3Ali%20stEvt%3Aaction%3D%22created%22%20stEvt%3AinstanceID%3D%22xmp.iid%3A30448795-f0fc-4451-9844-b7ebeee64dc4%22%20stEvt%3Awhen%3D%222023-03-16T18%3A54%3A09-07%3A00%22%20stEvt%3AsoftwareAgent%3D%22Adobe%20Photoshop%2025.7%20(Macintosh)%22%2F%3E%20%3Crdf%3Ali%20stEvt%3Aaction%3D%22saved%22%20stEvt%3AinstanceID%3D%22xmp.iid%3A97dd68ce-2f55-4114-93cd-142bbf17b981%22%20stEvt%3Awhen%3D%222024-05-04T01%3A33%3A10-07%3A00%22%20stEvt%3AsoftwareAgent%3D%22Adobe%20Photoshop%2025.7%20(Macintosh)%22%20stEvt%3Achanged%3D%22%2F%22%2F%3E%20%3C%2Frdf%3ASeq%3E%20%3C%2FxmpMM%3AHistory%3E%20%3C%2Frdf%3ADescription%3E%20%3C%2Frdf%3ARDF%3E%20%3C%2Fx%3Axmpmeta%3E%20%3C%3Fxpacket%20end%3D%22r%22%3F%3E%1E%C2%88%C2%94%C2%AD%00%00%01XIDAT(%C2%91m%C3%91A%C2%88%C3%8EA%18%C3%87%C3%B1%C3%8F%C2%BB%C3%AD%C2%91%C3%8DAI)6J%C3%AFdSR%1C%C3%99%C3%A2%C3%A6%C2%A2%C2%94X'%17%C3%A4%C2%80%10%C2%A5H%C3%8A%C2%A6%C3%98%1B%C3%9A%1B%077%1C%C2%9C8l%C2%BB%07%C3%A5J%C3%BC%C3%96FQn%0E%C2%92%C2%83%12%C3%B9%3Bx%5E%C2%BDm%C2%A6%C2%A6yzf%C3%A6%C3%9Bo%C2%BE%C3%93%C3%AB%C2%BANkm%13v%C3%A2%06.c3%C2%B6%C3%A1R%C3%8D%7B%C3%A8am%C2%92%195Zk%17p%08oq%7B%C2%A4%C3%BA%C2%9F%C3%B1%18%C3%AFp%18%C3%8F%C2%B1%1B%C3%A3x%C2%81i%7C%C3%87dkm%C2%AC%40%C3%BBp%1D%13x%C2%9Dd~%00%C3%BB%C2%8D%3D8_%C3%AB%C2%B9%C3%AA%07O%C2%B1%C2%A1%C3%92%3E%C3%80%C3%9E%C3%9A%C2%BBR%C3%AB%5C%C2%92%C2%AB%C3%90%C3%AB%C3%B7%C3%BBSXQ%C2%90%C3%BD8V%C2%80%0F%C2%98%C2%AF%C3%BEQ%C3%9C%C3%82%1CNa%12%C2%B3%05%C3%9B%C2%95d%01F%C2%B0%C2%80%C2%878%C2%88%C2%8B%C3%B8%C2%92%C3%A4%23N%C3%973%7F%C3%A2e%25%7B%C2%8F%C2%93%C2%B8V%C2%A0%C3%BB%03%10%C3%B4%C2%BA%C2%AE%1B%C3%88%1C%C2%AD%C3%A7%3E%C3%83%0E%C2%8Cae9%C3%AB%C2%97%C2%B7'%C2%B8%5B%C2%9E~%60k%C2%92%C2%A5%01l%C3%A0%C2%8C%C2%BF%C2%BFr%C2%A2%0E%2FV%C2%BD*I%C3%83%C3%B1R1%5B%20%C2%B89%0CZ%C2%9E%C2%AC%C2%97%C2%A4%C2%ABzu%25%C3%9A%C2%88%23XS%C2%BE%C3%86K%C3%89'lI%C3%B2m%18%C3%B6%2F%C3%99%10h%02%07J%C3%BAY%C2%AC%C3%83%19lO%C3%B2%08_qg9%08F%C2%977%C3%B0%06%C2%8BI~%C2%B5%C3%96%C2%96%C2%B0%3E%C3%89%C3%B4%C3%90%C3%BE%14%5E%C3%BD%C3%A7%C2%9E%3F%C3%A4%C2%8A%7C%3A%C2%A1%C2%8E%C3%98%05%00%00%00%00IEND%C2%AEB%60%C2%82"; 




    


    function trigger_alert_modal(alert_modal_title, ok_button_text, alert_modal_text, alert_modal_text_2, alert_modal_text_3) {
            
        // INVALIDSELECTIONDIALOG
        // ======================
        var InvalidSelectionDialog = new Window("dialog"); 
            InvalidSelectionDialog.text = alert_modal_title; 
            InvalidSelectionDialog.preferredSize.width = 300; 
            InvalidSelectionDialog.orientation = "column"; 
            InvalidSelectionDialog.alignChildren = ["center","center"]; 
            InvalidSelectionDialog.spacing = 10; 
            InvalidSelectionDialog.margins = [30,20,30,20]; 
            InvalidSelectionDialog.graphics.backgroundColor = InvalidSelectionDialog.graphics.newBrush (InvalidSelectionDialog.graphics.BrushType.SOLID_COLOR,
                [0.13, 0.15, 0.19]);

        // GROUP1
        // ======
        var group1 = InvalidSelectionDialog.add("group", undefined, {name: "group1"}); 
            group1.orientation = "row"; 
            group1.alignChildren = ["left","center"]; 
            group1.spacing = 10; 
            group1.margins = [0,0,0,0]; 

        var icon_chat_bubbles = group1.add("image", undefined, File.decode(icon_chat_bubbles_imgString), {name: "icon_chat_bubbles"}); 

        var statictext1 = group1.add("group", undefined , {name: "statictext1"}); 
            statictext1.getText = function() { var t=[]; for ( var n=0; n<statictext1.children.length; n++ ) { var text = statictext1.children[n].text || ''; if ( text === '' ) text = ' '; t.push( text ); } return t.join('\n'); }; 
            statictext1.orientation = "column"; 
            statictext1.alignChildren = ["left","center"]; 
            statictext1.spacing = 0; 

            statictext1.add("statictext", undefined, alert_modal_text);
            statictext1.add("statictext", undefined, alert_modal_text_2);
            statictext1.add("statictext", undefined, alert_modal_text_3);

        // INVALIDSELECTIONDIALOG
        // ======================

        var ok_button = InvalidSelectionDialog.add("button", undefined, File.decode(ok_button_imgString), {name: "ok", style: "toolbutton"}); 
            ok_button.text = ok_button_text; 

        // GROUP2
        // ======
        var group2 = InvalidSelectionDialog.add("group", undefined, {name: "group2"}); 
            group2.orientation = "row"; 
            group2.alignChildren = ["left","top"]; 
            group2.spacing = 3; 
            group2.margins = [0,0,0,0]; 
            group2.alignment = ["right","center"]; 

        // var victorparedes_logomark = group2.add("image", undefined, File.decode(victorparedes_logomark_imgString), {name: "victorparedes_logomark"}); 
        // victorparedes_logomark.helpTip = "Visit www.victorpared.es for more great tools."; 

        // button listeners
        ok_button.onClick = function() {
            InvalidSelectionDialog.close();
        }
        

        InvalidSelectionDialog.show();


    }





    




    function trigger_directions_modal() {



        // INVALID SELECTION DIALOG
        // ======================
        var InvalidSelectionDialog = new Window("dialog"); 
        InvalidSelectionDialog.text = speechGreeting[Math.floor(Math.random() * speechGreeting.length)]; 
        InvalidSelectionDialog.preferredSize.width = 300; 
        InvalidSelectionDialog.orientation = "column"; 
        InvalidSelectionDialog.alignChildren = ["center","center"]; 
        InvalidSelectionDialog.spacing = 10; 
        InvalidSelectionDialog.margins = [30,30,30,20]; 
        InvalidSelectionDialog.graphics.backgroundColor = InvalidSelectionDialog.graphics.newBrush (InvalidSelectionDialog.graphics.BrushType.SOLID_COLOR,
            [0.13, 0.15, 0.19]);
        

        // GROUP1
        // ======
        var group1 = InvalidSelectionDialog.add("group", undefined, {name: "group1"}); 
        group1.orientation = "row"; 
        group1.alignChildren = ["left","center"]; 
        group1.spacing = 10; 
        group1.margins = [0,0,0,8]; 

        var icon_chat_bubbles = group1.add("image", undefined, File.decode(icon_chat_bubbles_imgString), {name: "icon_chat_bubbles"}); 

        var statictext1 = group1.add("group", undefined , {name: "statictext1"}); 
        statictext1.getText = function() { var t=[]; for ( var n=0; n<statictext1.children.length; n++ ) { var text = statictext1.children[n].text || ''; if ( text === '' ) text = ' '; t.push( text ); } return t.join('\n'); }; 
        statictext1.orientation = "column"; 
        statictext1.alignChildren = ["left","center"]; 
        statictext1.spacing = 0; 
        statictext1.graphics.foregroundColor = statictext1.graphics.newPen (statictext1.graphics.PenType.SOLID_COLOR, [0.7,
            0.7, 0.7], 1);

        statictext1.add("statictext", undefined, "Please close this dialog window and select a"); 
        statictext1.add("statictext", undefined, "'Type' or 'Linked File' object to serve as your"); 
        statictext1.add("statictext", undefined, "key. Review the Properties Panel to confirm"); 
        statictext1.add("statictext", undefined, "the currently selected object's type."); 

        // PANEL_ABOUT
        // ===========
        var panel_about = InvalidSelectionDialog.add("panel", undefined, undefined, {name: "panel_about"}); 
        panel_about.text = "About Compatible Object Types"; 
        panel_about.orientation = "column"; 
        panel_about.alignChildren = ["left","top"]; 
        panel_about.spacing = 10; 
        panel_about.margins = [10,0,null,0]; 

        // GROUP2 - listbox
        // ======
        var group2 = panel_about.add("group", undefined, {name: "group2"}); 
            group2.orientation = "row"; 
            group2.alignChildren = ["left","center"]; 
            group2.spacing = 10; 
            group2.margins = 0; 

        var object_types_box_array = ["Type","Linked File"]; 
        var object_types_box = group2.add("listbox", undefined, undefined, {name: "object_types_box", items: object_types_box_array}); 
            object_types_box.selection = 0; 

        var statictext2 = group2.add("statictext", undefined, undefined, {name: "statictext2"}); 

        var object_description = group2.add("group", undefined , {name: "object_description"}); 
            object_description.getText = function() { var t=[]; for ( var n=0; n<object_description.children.length; n++ ) { var text = object_description.children[n].text || ''; if ( text === '' ) text = ' '; t.push( text ); } return t.join('\n'); }; 
            object_description.preferredSize.width = 200; 
            object_description.preferredSize.height = 100; 
            object_description.orientation = "column"; 
            object_description.alignChildren = ["left","center"]; 
            object_description.spacing = 0; 

            object_description.add("statictext", undefined, "Make 'Type' objects using the"); 
            object_description.add("statictext", undefined, "standard Type Tool (T)."); 

        // GROUP3 - tip
        // ======
        var group3 = InvalidSelectionDialog.add("group", undefined, {name: "group3"}); 
        group3.orientation = "row"; 
        group3.alignChildren = ["left","center"]; 
        group3.spacing = 10; 
        group3.margins = [0,0,0,10]; 

        var statictext3 = group3.add("group", undefined , {name: "statictext3"}); 
        statictext3.getText = function() { var t=[]; for ( var n=0; n<statictext3.children.length; n++ ) { var text = statictext3.children[n].text || ''; 
        if ( text === '' ) text = ' '; t.push( text ); } return t.join('\n'); }; 
        statictext3.orientation = "column"; 
        statictext3.alignChildren = ["left","center"]; 
        statictext3.spacing = 0; 

        statictext3.add("statictext", undefined, "Tip: If your image is a member of a 'Clip Group'"); 
        statictext3.add("statictext", undefined, "object, use the Direct Selection Tool to select"); 
        statictext3.add("statictext", undefined, "your image directly."); 

        // BUTTONS
        // =======
        var group_buttons = InvalidSelectionDialog.add("group", undefined, {name: "group_buttons"}); 
            group_buttons.orientation = "row"; 
            var howitworks_button = group_buttons.add("button", undefined, File.decode(ok_button_imgString), {name: "howitworks", style: "toolbutton"}); 
            howitworks_button.text = "❔ How it Works"; 
            var ok_button = group_buttons.add("button", undefined, File.decode(ok_button_imgString), {name: "ok", style: "toolbutton"}); 
            ok_button.text = "Ok"; 

        // GROUP4 - logomark
        // ======
        var group4 = InvalidSelectionDialog.add("group", undefined, {name: "group4"}); 
        group4.orientation = "row"; 
        group4.alignChildren = ["left","top"]; 
        group4.spacing = 3; 
        group4.margins = [0,0,0,0]; 
        group4.alignment = ["right","center"]; 

        // var victorparedes_logomark = group4.add("image", undefined, File.decode(victorparedes_logomark_imgString), {name: "victorparedes_logomark"}); 
        // victorparedes_logomark.helpTip = "Visit www.victorpared.es for more great tools."; 


        // button listeners
        object_types_box.onChange = function () {
            if (object_types_box.selection == 0) {
                object_description.children[0].text = "Make 'Type' objects with the";
                object_description.children[1].text = "standard Type Tool (T).";
                object_description.children[2].text = "";
            } else if (object_types_box.selection == 1) {
                object_description.children[0].text = "Import 'Linked File' objects";
                object_description.children[1].text = "using File > Place.";
            }
        }
        ok_button.onClick = function() {
            InvalidSelectionDialog.close();
        }
        howitworks_button.onClick = function() {
            trigger_howItWorksDialog();
        } 
      


        
        InvalidSelectionDialog.show();


    }

































    function trigger_howItWorksDialog() {


            
        // HOWITWORKSDIALOG
        // ================
        var HowItWorksDialog = new Window("dialog"); 
            HowItWorksDialog.text = "How it Works"; 
            HowItWorksDialog.preferredSize.width = 600; 
            HowItWorksDialog.orientation = "column";                     //checked
            HowItWorksDialog.alignChildren = ["center","center"]; 
            HowItWorksDialog.spacing = 10; 
            HowItWorksDialog.margins = [30,40,30,20]; 
            HowItWorksDialog.graphics.backgroundColor = HowItWorksDialog.graphics.newBrush (HowItWorksDialog.graphics.BrushType.SOLID_COLOR,
                [0.13, 0.15, 0.19]);

        // group_v1
        // ======
        var group_v1 = HowItWorksDialog.add("group", undefined, {name: "group_v1"}); 
            group_v1.orientation = "column";                        
            group_v1.alignChildren = ["left","center"]; 
            group_v1.spacing = 10; 
            group_v1.margins = [0,0,0,15]; 

        var statictext_v1 = group_v1.add("statictext", undefined, undefined, {name: "statictext_v1"}); 
            statictext_v1.text = "📍 Purpose"; 
            statictext_v1.alignment = ["left","top"]; 

        // var statictext_v2 = group_v1.add("statictext", undefined, undefined, {name: "statictext_v2"}); 

        var statictext_v3 = group_v1.add("group", undefined , {name: "statictext_v3"}); 
            statictext_v3.getText = function() { var t=[]; for ( var n=0; n<statictext_v3.children.length; n++ ) { var text = statictext_v3.children[n].text || ''; if ( text === '' ) text = ' '; t.push( text ); } return t.join('\n'); }; 
            statictext_v3.orientation = "column";                           // no
            statictext_v3.alignChildren = ["left","center"]; 
            statictext_v3.spacing = 0; 

            statictext_v3.add("statictext", undefined, "Working with variables in Illustrator can be a pain if you aren't working with a ton of data. This"); 
            statictext_v3.add("statictext", undefined, "script powers self-contained variable-based data synchonization across artboards in a single"); 
            statictext_v3.add("statictext", undefined, "document. It's not complicated, but it's much needed. Imagine: variables without spreadsheets... "); 
            statictext_v3.add("statictext", undefined, ""); 

        // TPANEL1 - The Basics
        // =======
        var tpanel1 = HowItWorksDialog.add("tabbedpanel", undefined, undefined, {name: "tpanel1"}); 
            tpanel1.alignChildren = "center"; 
            tpanel1.preferredSize.width = 793.68; 
            tpanel1.margins = 0; 
            tpanel1.graphics.backgroundColor = tpanel1.graphics.newBrush (tpanel1.graphics.BrushType.SOLID_COLOR,
                [0.08, 0.1, 0.14]);

        // TAB1
        // ====
        var tab1 = tpanel1.add("tab", undefined, undefined, {name: "tab1"}); 
            tab1.text = "The Basics"; 
            tab1.orientation = "column";                            
            tab1.alignChildren = ["left","center"]; 
            tab1.spacing = 0; 
            tab1.margins = [10,10,10,0]; 


        // group_v2
        // ======
        var group_v2 = tab1.add("group", undefined, {name: "group_v2"}); 
            group_v2.orientation = "column";                         
            group_v2.alignChildren = ["center","center"]; 
            group_v2.spacing = 0; 
            group_v2.margins = [0,5,0,0]; 
            group_v2.alignment = ["fill","center"]; 









            var howitworks_image = group_v2.add("image", undefined, File.decode(howitworks_image_imgString), {name: "howitworks_image"}); 

            // TAB2
            // ====
            var tab2 = tpanel1.add("tab", undefined, undefined, {name: "tab2"}); 
                tab2.text = "Ways to Interact with This Script"; 
                tab2.orientation = "row";                                  
                tab2.alignChildren = ["left","top"]; 
                tab2.spacing = 10; 
                tab2.margins = [10,10,10,0]; 
    
            // TPANEL2 - Ways to Interact
            // =======
            tpanel1.selection = tab1; 
    
         
            // group_v4
            // ======
            var group_v4 = tab2.add("group", undefined, {name: "group_v4"}); 
                group_v4.orientation = "row";                               // Controls the cards layout 
                group_v4.alignChildren = ["left","top"]; 
                group_v4.spacing = 50; 
                group_v4.margins = 20;     // padding around entire group
                group_v4.alignment = ["left","fill"]; 
    
            // group_v5
            // ======
            var group_v5 = group_v4.add("group", undefined, {name: "group_v5"}); 
                group_v5.orientation = "column"; 
                group_v5.alignChildren = ["left","center"]; 
                group_v5.spacing = 0; 
                group_v5.margins = 0; 
    
            var statictext_v5 = group_v5.add("statictext", undefined, undefined, {name: "statictext_v5"}); 
                statictext_v5.text = "1\) Nothing Selected"; 
    
            // var divider1 = group_v5.add("panel", undefined, undefined, {name: "divider1"}); 
            //     divider1.alignment = "fill"; 
    
            var statictext_v6 = group_v5.add("group", undefined, {name: "statictext_v6"}); 
                statictext_v6.text = group_v5.add("statictext", undefined, "");
                statictext_v6.text = group_v5.add("statictext", undefined, "If you have nothing selected, or you have selected  ");
                statictext_v6.text = group_v5.add("statictext", undefined, "an object that is not of the types \'Type\' or "); 
                statictext_v6.text = group_v5.add("statictext", undefined, "\'Placed Item\', you will be greeted with a welcome"); 
                statictext_v6.text = group_v5.add("statictext", undefined, "screen detailling which objects are compatible"); 
                statictext_v6.text = group_v5.add("statictext", undefined, "with this script."); 
                statictext_v6.text = group_v5.add("statictext", undefined, "");
                statictext_v6.text = group_v5.add("statictext", undefined, "There is also a nice rundown explaining how "); 
                statictext_v6.text = group_v5.add("statictext", undefined, "everything works under the hood, which will help "); 
                statictext_v6.text = group_v5.add("statictext", undefined, "you understand how to use this tool on the fly."); 
    
            // group_v6
            // ======
            var group_v6 = group_v4.add("group", undefined, {name: "group_v6"}); 
                group_v6.orientation = "column"; 
                group_v6.alignChildren = ["left","center"]; 
                group_v6.spacing = 0; 
                group_v6.margins = 0; 
    
            var statictext_v7 = group_v6.add("statictext", undefined, undefined, {name: "statictext_v7"}); 
                statictext_v7.text = "2\) Create New Key and Target Objects"; 

            // var divider2 = group_v6.add("panel", undefined, undefined, {name: "divider2"}); 
            //     divider2.alignment = "fill"; 
    
            var statictext_v8 = group_v6.add("group", undefined, {name: "statictext_v8"}); 
                statictext_v8.text = group_v6.add("statictext", undefined, "");
                statictext_v8.text = group_v6.add("statictext", undefined, "If you select an object that is compatible, but said ");
                statictext_v8.text = group_v6.add("statictext", undefined, "object is not a Key Object (meaning its name does ");
                statictext_v8.text = group_v6.add("statictext", undefined, "not begin with the prefix \"key_\"), you will be");
                statictext_v8.text = group_v6.add("statictext", undefined, "prompted for a name that matches that of your");
                statictext_v8.text = group_v6.add("statictext", undefined, "intended target(s).");
                
                
    
            var statictext_v9 = group_v6.add("group", undefined, {name: "statictext_v9"}); 
                statictext_v9.text = group_v6.add("statictext", undefined, "");
                statictext_v9.text = group_v6.add("statictext", undefined, "You will have options to iterate without creating a Key "); 
                statictext_v9.text = group_v6.add("statictext", undefined, "or to iterate as well as make a Key. Remember that if "); 
                statictext_v9.text = group_v6.add("statictext", undefined, "you iterate from a Key that has no Target Object "); 
                statictext_v9.text = group_v6.add("statictext", undefined, "matches, nothing will happen!"); 
    
            // group_v7
            // ======
            var group_v7 = group_v4.add("group", undefined, {name: "group_v7"}); 
                group_v7.orientation = "column"; 
                group_v7.alignChildren = ["left","center"]; 
                group_v7.spacing = 0; 
                group_v7.margins = 0; 
    
            var statictext_v10 = group_v7.add("statictext", undefined, undefined, {name: "statictext_v10"}); 
                statictext_v10.text = "3\) Work with Existing Keys and Target Objects"; 
    
            // var divider3 = group_v7.add("panel", undefined, undefined, {name: "divider3"}); 
            //     divider3.alignment = "fill"; 
    
            var statictext_v11 = group_v7.add("group", undefined, {name: "statictext_v11"}); 
            statictext_v11.text = group_v7.add("statictext", undefined, ""); 
                statictext_v11.text = group_v7.add("statictext", undefined, "Once a Keys and their Target Objects have been "); 
                statictext_v11.text = group_v7.add("statictext", undefined, "paired, you can simply replace information (text "); 
                statictext_v11.text = group_v7.add("statictext", undefined, "or images) stored in Key Objects and instantly "); 
                statictext_v11.text = group_v7.add("statictext", undefined, "iterate to all respective Target Objects."); 
                statictext_v11.text = group_v7.add("statictext", undefined, ""); 
                statictext_v11.text = group_v7.add("statictext", undefined, "Easy peasy lemon squeezy!"); 
    









// TAB2
            // ====
            var tab3 = tpanel1.add("tab", undefined, undefined, {name: "tab2"}); 
                tab3.text = "Release Notes"; 
                tab3.orientation = "row";                                  
                tab3.alignChildren = ["left","top"]; 
                tab3.spacing = 10; 
                tab3.margins = [10,10,10,0]; 
    
            // TPANEL2 - Ways to Interact
            // =======
            tpanel1.selection = tab1; 

            // group_v4
            // ======
            var group_v_4 = tab3.add("group", undefined, {name: "group_v4"}); 
                group_v_4.orientation = "row";                               // Controls the cards layout 
                group_v_4.alignChildren = ["left","top"]; 
                group_v_4.spacing = 50; 
                group_v_4.margins = 20; 
                group_v_4.alignment = ["center","fill"];      // Release Notes positioning
    
            // group_v5
            // ======
            var group_v_5 = group_v_4.add("group", undefined, {name: "group_v5"}); 
                group_v_5.orientation = "column"; 
                group_v_5.alignChildren = ["left","center"]; 
                group_v_5.spacing = 0; 
                group_v_5.margins = 0; 
    
            var statictext_v_5 = group_v_5.add("statictext", undefined, undefined, {name: "statictext_v5"}); 
                statictext_v_5.text = "May 4, 2024 | v1.0"; 
                var statictext_v_6 = group_v_5.add("group", undefined, {name: "statictext_v6"}); 
                    statictext_v_6.text = group_v_5.add("statictext", undefined, "Initial release. All systems go!");
                    statictext_v_6.text = group_v_5.add("statictext", undefined, "");

            var statictext_v_5 = group_v_5.add("statictext", undefined, undefined, {name: "statictext_v5"}); 
                statictext_v_5.text = "April 23, 2024 | v0.8 BETA"; 
                var statictext_v_6 = group_v_5.add("group", undefined, {name: "statictext_v6"}); 
                    statictext_v_6.text = group_v_5.add("statictext", undefined, "Fully functional trial version. UX is a bit of a disaster. Tread carefully...");
                
                
               














































        // buttons
        // ================
        var close_button = HowItWorksDialog.add("button", undefined, undefined, {name: "close"}); 
            close_button.text = "Close"; 

        var divider4 = HowItWorksDialog.add("panel", undefined, undefined, {name: "divider4"}); 
            divider4.alignment = "fill"; 

        // group_v8
        // ======
        var group_v8 = HowItWorksDialog.add("group", undefined, {name: "group_v8"}); 
            group_v8.orientation = "row"; 
            group_v8.alignChildren = ["left","center"]; 
            group_v8.spacing = 10; 
            group_v8.margins = [0,10,0,0]; 

        var icon_chat_bubbles = group_v8.add("image", undefined, File.decode(icon_chat_bubbles_imgString), {name: "icon_chat_bubbles"}); 

        var statictext_v12 = group_v8.add("group", undefined , {name: "statictext_v12"}); 
            statictext_v12.getText = function() { var t=[]; for ( var n=0; n<statictext_v12.children.length; n++ ) { var text = statictext_v12.children[n].text || ''; if ( text === '' ) text = ' '; t.push( text ); } return t.join('\n'); }; 
            statictext_v12.orientation = "column"; 
            statictext_v12.alignChildren = ["center","center"]; 
            statictext_v12.spacing = 0; 

            statictext_v12.add("statictext", undefined, "Crafted by Victor Paredes in Portland, Oregon"); 
            statictext_v12.add("statictext", undefined, "For more handy tools, visit GhostByte.io"); 
            statictext_v12.add("statictext", undefined, "v1.0 | May 2024"); 

        // group_v9
        // ======
        var group_v9 = HowItWorksDialog.add("group", undefined, {name: "group_v9"}); 
            group_v9.orientation = "row"; 
            group_v9.alignChildren = ["left","top"]; 
            group_v9.spacing = 3; 
            group_v9.margins = [0,0,0,0]; 
            group_v9.alignment = ["right","center"]; 

        // var victorparedes_logomark = group_v9.add("image", undefined, File.decode(victorparedes_logomark_imgString), {name: "victorparedes_logomark"}); 
        //     victorparedes_logomark.helpTip = "Visit www.victorpared.es for more great tools."; 






        close_button.onClick = function() {
            HowItWorksDialog.close();
        }






        HowItWorksDialog.show();







    }


























    





    















    


    // Check if there is only one object selected
    if (doc.selection.length === 1) {
        if (selectedObject instanceof TextFrame || selectedObject instanceof PlacedItem) {

        


                
            
            
            // Check if the object name includes "key_"
            if (selectedObject.name.indexOf("key_") !== -1) {
                target_objects = selectedObject.name.replace("key_", "");
            } else {








                // NO KEY SELECTED DIALOG
                // ===================
                var NoKeySelectedDialog = new Window("dialog"); 
                    NoKeySelectedDialog.text = "No Key Selected"; 
                    NoKeySelectedDialog.preferredSize.width = 300; 
                    NoKeySelectedDialog.orientation = "column"; 
                    NoKeySelectedDialog.alignChildren = ["center","center"]; 
                    NoKeySelectedDialog.spacing = 10; 
                    NoKeySelectedDialog.margins = [30,20,30,20];
                    NoKeySelectedDialog.graphics.backgroundColor = NoKeySelectedDialog.graphics.newBrush (NoKeySelectedDialog.graphics.BrushType.SOLID_COLOR,
                        [0.13, 0.15, 0.19]); 

                // GROUP1
                // ======
                var group1 = NoKeySelectedDialog.add("group", undefined, {name: "group1"}); 
                    group1.orientation = "row"; 
                    group1.alignChildren = ["left","center"]; 
                    group1.spacing = 10; 
                    group1.margins = [0,0,0,0]; 

                var icon_chat_bubbles = group1.add("image", undefined, File.decode(icon_chat_bubbles_imgString), {name: "icon_chat_bubbles"}); 

                var statictext1 = group1.add("group", undefined , {name: "statictext1"}); 
                    statictext1.getText = function() { var t=[]; for ( var n=0; n<statictext1.children.length; n++ ) { var text = statictext1.children[n].text || ''; if ( text === '' ) text = ' '; t.push( text ); } return t.join('\n'); }; 
                    statictext1.orientation = "column"; 
                    statictext1.alignChildren = ["left","center"]; 
                    statictext1.spacing = 0; 

                    statictext1.add("statictext", undefined, "The selected object is not a Key. Please enter the"); 
                    statictext1.add("statictext", undefined, "name of the objects that you would like to target."); 

                // GROUP2
                // ======
                var group2 = NoKeySelectedDialog.add("group", undefined, {name: "group2"}); 
                    group2.orientation = "row"; 
                    group2.alignChildren = ["left","center"]; 
                    group2.spacing = 10; 
                    group2.margins = [0,8,0,7]; 

                var statictext2 = group2.add("statictext", undefined, undefined, {name: "statictext2"}); 
                    statictext2.text = "key_"; 

                var targetDialog = group2.add('edittext {justify: "center", properties: {name: "targetDialog", enterKeySignalsOnChange: true}}'); 
                    targetDialog.preferredSize.width = 233; 
                    targetDialog.preferredSize.height = 32; 

                // GROUP3
                // ======
                var group3 = NoKeySelectedDialog.add("group", undefined, {name: "group3"}); 
                    group3.orientation = "row"; 
                    group3.alignChildren = ["left","center"]; 
                    group3.spacing = 10; 
                    group3.margins = [0,20,0,0]; 

                var cancelButton = group3.add("button", undefined, undefined, {name: "cancelButton", style: "toolbutton"}); 
                    cancelButton.text = "🚫 Cancel"; 

                var replaceButton = group3.add("button", undefined, undefined, {name: "replaceButton", style: "toolbutton"}); 
                    replaceButton.text = "🔄 Update Targets Only"; 
                    replaceButton.helpTip = "Each object whose name matches the above target name will be updated."; 
                    var blueBrush = replaceButton.graphics.newBrush(replaceButton.graphics.BrushType.SOLID_COLOR,[0/255,152/255,255/255,1]);
                    

                   
                      


                    // GROUP5
                // ======
                var group5 = NoKeySelectedDialog.add("group", undefined, {name: "group5"}); 
                group5.orientation = "row"; 
                group5.alignChildren = ["left","center"]; 
                group5.spacing = 10; 
                group5.margins = 0; 

                var replaceAndUpdateButton = group5.add("button", undefined, undefined, {name: "ok", style: "toolbutton"}); 
                replaceAndUpdateButton.text = "🔑🔄 Make This Object a Key & Update Targets"; 
                replaceAndUpdateButton.helpTip = "The selected object will be renamed to 'key_" + "(your target name)' and all of its corresponding targets will be updated."; 




                // GROUP4    ---- spacer template
                // ======
                var group4 = NoKeySelectedDialog.add("group", undefined, {name: "group4"}); 
                    group4.orientation = "row"; 
                    group4.alignChildren = ["left","top"]; 
                    group4.spacing = 3; 
                    group4.margins = [0,0,0,0]; 
                    group4.alignment = ["right","center"]; 

                    var nokey_tooltip = group4.add("statictext");
                        nokey_tooltip.name = "tooltip";
                        nokey_tooltip.text = ""; 
                        nokey_tooltip.justify = "center"; 
                        nokey_tooltip.preferredSize.width = 400;
                        nokey_tooltip.graphics.foregroundColor = nokey_tooltip.graphics.newPen (nokey_tooltip.graphics.PenType.SOLID_COLOR, [0.157, 0.325, 0.788], 1);


                // var victorparedes_logomark = group4.add("image", undefined, File.decode(victorparedes_logomark_imgString), {name: "victorparedes_logomark"}); 
                //     victorparedes_logomark.helpTip = "Visit www.victorpared.es for more great tools."; 



                // Function to handle button clicks
                function buttonClick(buttonName) {
                    switch(buttonName) {
                        case "Cancel":
                            wasCanceled = true;
                            break;
                        case "Update Targets":
                            if (targetDialog.text == "") {
                                is_targetDialog_empty = true;
                            } else {
                                target_objects = targetDialog.text;
                            }
                            break;
                        case "Make Key and Update Targets":
                            if (targetDialog.text == "") {
                                is_targetDialog_empty = true;
                            } else {
                                target_objects = targetDialog.text;
                                selectedObject.name = "key_" + targetDialog.text;
                                update_keys_selected = true;
                            }
                            break;
                        default:
                            break;
                    }
                }
                // listeners for button clicks
                cancelButton.onClick = function() {
                    NoKeySelectedDialog.close();
                    buttonClick("Cancel");
                }
                replaceButton.onClick = function() {
                    NoKeySelectedDialog.close();
                    buttonClick("Update Targets");
                }
                replaceAndUpdateButton.onClick = function() {
                    NoKeySelectedDialog.close();
                    buttonClick("Make Key and Update Targets");
                    
                }
                // Show the dialog
                NoKeySelectedDialog.show();

                if (targetDialog.text == "") {
                    if (wasCanceled == false) {  // check if canceled
                        trigger_alert_modal(speechMistake[Math.floor(Math.random() * speechMistake.length)], 'Ok', 'The target object name cannot', 'be empty. Please try again.');
                    }
                }
            }







        

            if (is_targetDialog_empty == false) {



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
                        break;
                }




            }






                
            if (wasCanceled != true) {
                if (is_targetDialog_empty == false) {
                    
                    var thankyou_message = '';
                    if (update_keys_selected == true) {
                        var slot2 = "🔑 The selected object has been";
                        var slot3 = "renamed \'key_" + target_objects + "\'.";
                    }
                    var slot1 = '🔄 Updated ' + objectCounter + ' objects.';
                    
                    trigger_alert_modal('Success!', 'Ok', slot1, slot2, slot3);
            
                        
                    
                }
            } else {
                wasCanceled = false;
            }



        } else { // not TextFrame or PlacedImage
            
            trigger_directions_modal();

        }



    } else { // nothing selected
        trigger_directions_modal();

        // var iterateAllPrompt = new Window("dialog", "Iterate All Keys?"); 
        //     iterateAllPrompt.preferredSize.width = 240;
        // var iterateAllPromptText = iterateAllPrompt.add ("group");
        // iterateAllPromptText.orientation = "column";
        //     var iterateStaticText = iterateAllPromptText.add("statictext", undefined, "No object key is currently selected. Would you like to iterate all 'key_' layers across their respective targets?");
        
        // var iterateAllPromptButtons = iterateAllPrompt.add ("group");
        //     iterateAllPromptButtons.orientation = "row";
        //     var iterateAllButtonCancel = iterateAllPromptButtons.add ("button", undefined, "Cancel");
        //     var iterateAllButtonYes = iterateAllPromptButtons.add ("button", undefined, "Yes", {name: "ok"});
            

        
        //     keyCounter = 0;



        //     for (var i = 0; i < doc.layers.length; i++) {
        //         currentLayer = doc.layers[i];
        //         // Iterate through all page items in the layer
        //         for (var j = 0; j < currentLayer.pageItems.length; j++) {
        //             var currentItem = currentLayer.pageItems[j];
        //             // Check if the page item's name matches target_objects
        //             if (currentItem.name === target_objects) {
        //                 // Replace text with current_text
                        
        //                 keyCounter++;
        //             }
        //         }
        //     }

            
            

        // Event listener for button clicks
        // iterateAllButtonYes.onClick = function() {
            // iterateButtonClick("Yes");

            // for (var i = 0; i < doc.layers.length; i++) {
            //     var currentLayer_Selected = doc.layers[i];
            //     // Iterate through all page items in the layer
            //     for (var j = 0; j < currentLayer_Selected.pageItems.length; j++) {
            //         var currentItem_Selected = currentLayer_Selected.pageItems[j];
                    
            //         // Check if the page item's name matches target_objects
            //         if (currentItem_Selected.name.indexOf("key_") !== -1) {
                        
                    
            //             keyCounter++;
            //         }
            //     }
            // }

            // trigger_alert_modal(keyCounter + ' keys found. \nThis feature is currently unavailable.');

            // dialog.close();
        // }
        


        // iterateAllPrompt.show();


        // alert('Here we gooooo....');




    }

    
} else {
    alert("No active document found.");
}





// Notes

// // button listeners
// object_types_box.onChange = function () {
//     if (object_types_box.selection == 0) {
//         object_description.children[0].text = "Make 'Type' objects with the";
//         object_description.children[1].text = "Type Tool (T).";
//         object_description.children[2].text = "";
//     } else if (object_types_box.selection == 1) {
//         object_description.children[0].text = "File > Place will import as ";
//         object_description.children[1].text = "the 'Linked File' object type.";
//     }
// }

// ok_button.onClick = function() {
//     InvalidSelectionDialog.close();
// }