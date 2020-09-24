
    var max = 90;
    var anzahl = {
    
        urpils05: 0,
        urpils5: 0,
        helles: 0,
        kellerbier: 0,
        bockbier: 0,
        pils: 0,
        export: 0,
        feingold: 0,
        naturRadler: 0,
        naturRadlerStubbi: 0, 
        weizenAlkFrei: 0,
        weizenRadler: 0,
        weizenHefeTrueb: 0,
        weizenDunkel: 0,
        mixCola: 0,
        mixIcedBlue: 0,
        mixCherry: 0,
        gruendelsClassic: 0,
        gruendelsFresh: 0,
        gruendelsRadler: 0,
        gruendelsFitmalz: 0,
        bunderberg: 0,
        mrzgApfel: 0,
        mrzgApfelschorle: 0,
        mrzgOrange: 0,
        mrzgACE: 0,
        mrzgTraube: 0,
        mrzgMulti: 0,
        mrzgJohannesbeere: 0,
        rilchSpritzig: 0,
        rilchFein: 0,
        rilchZitrone: 0,
        rilchApfel: 0,
        grafMarSpritzig: 0,
        grafMarFein: 0,
        teinacherMedium: 0,
        teinacherClassic: 0,
        teinacherGrapefruit: 0,
        afriColaZeroSugar: 0,
        afriCola12: 0,
        afriCola9: 0,
        blunaOrange: 0,
        blunaZitrone: 0,
    };
    var kosten = {

        urpils05: 16,
        urpils5: 10,
        helles: 13,
        kellerbier: 13,
        bockbier: 14,
        pils: 16,
        export: 16,
        feingold: 16,
        naturRadler: 16,
        naturRadlerStubbi: 13,
        weizenAlkFrei: 17,
        weizenRadler: 17,
        weizenHefeTrueb: 17,
        weizenDunkel: 17,
        mixCola: 17,
        mixIcedBlue: 17,
        mixCherry: 19,
        gruendelsClassic: 16,
        gruendelsFresh: 16,
        gruendelsRadler: 16,
        gruendelsFitmalz: 16,
        bunderberg: 28,
        mrzgApfel: 10,
        mrzgApfelschorle: 10,
        mrzgOrange: 12,
        mrzgACE: 10,
        mrzgTraube: 14,
        mrzgMulti: 12,
        mrzgJohannesbeere: 15,
        rilchSpritzig: 4,
        rilchFein: 4,
        rilchZitrone: 6,
        rilchApfel: 8,
        grafMarSpritzig: 4,
        grafMarFein: 4,
        teinacherMedium: 6,
        teinacherClassic: 7,
        teinacherGrapefruit: 7,
        afriColaZeroSugar: 13,
        afriCola12: 13,
        afriCola9: 10,
        blunaOrange: 13,
        blunaZitrone: 13,
    };

    var favorites = [];
    var maxElements = 9;
    var gesamtkosten = 0;

    function removefavorite(name) {
        if(confirm("Willst du " + name + " wirklich als Favorite entfernen?")) {
            var tablechilds = [].slice.call(document.getElementById("tablefavs").children);
            tablechilds.forEach(element => {
                if(element.id.includes(name + "row")) {
                    element.parentNode.removeChild(element);
                }
            });
            var itmchilds = [].slice.call(document.getElementById(name + "row").children);
            itmchilds.forEach(itmelement => {
                if(itmelement.id.includes("fav")) {
                    itmelement.style.color = "black";
                }
            });
            setCookie(name + "fav", '0',365);

            tablechilds = [].slice.call(document.getElementById("tablefavs").children);
            if(tablechilds.length == 0) {
                $("#collapseFour").collapse('hide');
                document.getElementById("favinfo").style.display = "block";
            }
        }
    }

    function favorite(name) {
        var itm = document.getElementById(name + "row");
        var globalitmelement = null;

        var itmchilds = [].slice.call(itm.children);
        itmchilds.forEach(itmelement => {
            if(itmelement.id.includes("fav")) {
                itmelement.style.color = "red";
                globalitmelement = itmelement;
            }
        });
        
        var tablechilds = [].slice.call(document.getElementById("tablefavs").children);
        var found = false;
        tablechilds.forEach(element => {
            if(element.id.includes(name + "row")) {
                found = true;
                removefavorite(name);
            }
        });
        if(!found) {
            var cln = itm.cloneNode(true);
            var childs = [].slice.call(cln.children);
            childs.forEach(element => {
                if(element.id.includes("list")) {
                    var listchilds = [].slice.call(element.children);
                    listchilds.forEach(listelement => {
                        if(listelement.id.includes(name)) {
                            listelement.id = name + "fav";
                        }
                    });
                } else if(element.id.includes("fav")) {
                    element.style.color = "black";
                }
            });
            if(confirm("Willst du " + name + " wirklich als Favorite hinzufügen?")) {
                document.getElementById("tablefavs").appendChild(cln);
                setCookie(name + "fav", '1',365);
                //$("#collapseFour").collapse('show');
                document.getElementById("favinfo").style.display = "none";
            } else {
                globalitmelement.style.color = 'black';
            }
        }

    }

    function setCookie(name,value,days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days*24*60*60*1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "")  + expires + "; path=/";
    }
    function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    }
    function eraseCookie(name) {   
        document.cookie = name+'=; Max-Age=-99999999;';  
    }
    
    function plus(sort){
        
        if(anzahl[sort] < maxElements){
            anzahl[sort] = Number(anzahl[sort]) +1;
            document.getElementById(sort).innerHTML = anzahl[sort];
            var fav = document.getElementById(sort + "fav");
            if(fav != undefined && fav != null) {
                fav.innerHTML = anzahl[sort];
            }
            setCookie(sort, anzahl[sort],365);
            let gesamt = 0;
            for (var element in anzahl) {
                gesamt += anzahl[element] * kosten[element];
            }
            gesamtkosten = gesamt;

            console.log("Gesamtkosten:" + gesamtkosten);

            var display = document.getElementById("punkteDisplay");
            display.innerHTML = max - gesamtkosten + " Punkte";
            if(gesamtkosten <= max) {
                display.style.color = "#2ecc71";
            } else {
                display.style.color = "#e74c3c";
            }

            var progressSlider = document.getElementById("slider");

            if(gesamtkosten >= 0) {
                progressSlider.style.left = String(-1 * (Math.ceil(gesamtkosten / max *100))) + "%";
            } else {
                progressSlider.style.left = 100 + "%";
            }

        }else{
            alert("Du kannst Maximal 9 Getränke der selben Sorte kaufen");
        }        
                
    }

    function deletecookies() {
        var cookies = document.cookie.split(";");
        for (var i = 0; i < cookies.length; i++){

            eraseCookie(cookies[i].split("=")[0]);

        }

        document.location.reload(true);
    }

    function minus(sort){
                
        if(anzahl[sort] > 0){
            anzahl[sort] = Number(anzahl[sort]) -1;
            document.getElementById(sort).innerHTML = anzahl[sort];
            var fav = document.getElementById(sort + "fav");
            if(fav != undefined && fav != null) {
                fav.innerHTML = anzahl[sort];
            }
            setCookie(sort, anzahl[sort],365);
            let gesamt = 0;
            for (var element in anzahl) {
                gesamt += anzahl[element] * kosten[element];
            }
            gesamtkosten = gesamt;
            console.log(gesamtkosten);
            var display = document.getElementById("punkteDisplay");
            display.innerHTML = max - gesamtkosten + " Punkte";
            if(gesamtkosten <= max) {
                display.style.color = "#2ecc71";
            } else {
                display.style.color = "#e74c3c";
            }

            var progressSlider = document.getElementById("slider");

            if(gesamtkosten >= 0) {
                progressSlider.style.left = String(-1 * (Math.ceil(gesamtkosten / max *100))) + "%";
            } else {
                progressSlider.style.left = 100 + "%";
            }
        }
    }
    function reset() {
        for(var element in anzahl) {
            anzahl[element] = 0;
            try {
                document.getElementById(element).innerHTML = 0;
            } catch (e) {
                console.log("Element " + element + " not found!");
            }
            var fav = document.getElementById(element + "fav");
            if(fav != undefined && fav != null) {
                fav.innerHTML = 0;
            }
            setCookie(element, anzahl[element],365);
        }
        document.getElementById("punkteDisplay").innerHTML = max + " Punkte";
        var progressSlider = document.getElementById("slider");
        var display = document.getElementById("punkteDisplay");
        progressSlider.style.left = "0%";
        display.style.color = "#2ecc71";
        console.log("Reset");
    }

    function favs(name, numb) {
        var bool = Boolean(Number(numb));
        if(bool) {
            $("#collapseFour").collapse('show');
            document.getElementById("favinfo").style.display = "none";
            var itm = document.getElementById(name + "row");

            var itmchilds = [].slice.call(itm.children);
            itmchilds.forEach(itmelement => {
                if(itmelement.id.includes("fav")) {
                    itmelement.style.color = "red";
                }
            });
            
            var cln = itm.cloneNode(true);
            var childs = [].slice.call(cln.children);
            childs.forEach(element => {
                if(element.id.includes("list")) {
                    var listchilds = [].slice.call(element.children);
                    listchilds.forEach(listelement => {
                        if(listelement.id.includes(name)) {
                            listelement.id = name + "fav";
                        }
                    });
                } else if(element.id.includes("fav")) {
                    element.style.color = "black";
                }
            });
            $("#favinfo").hide();
            document.getElementById("tablefavs").appendChild(cln);
        }
    }

    window.onload = function() {
        var newmax = getCookie("max");
        if(newmax == null || newmax == undefined || newmax == "") newmax = 90;
        max = newmax;
//---------------------------------------------------------------------------------------------------//
        var all = new Array();
        all.push("urpils05");
        all.push("urpils5");
        all.push("bockbier");
        all.push("pils");
        all.push("export");
        all.push("feingold");
        all.push("naturRadler");
        all.push("naturRadlerStubbi");
        all.push("weizenAlkFrei");
        all.push("weizenRadler");
        all.push("weizenHefeTrueb");
        all.push("weizenDunkel");
        all.push("mixCola");
        all.push("mixIcedBlue");
        all.push("mixCherry");
        all.push("gruendelsClassic");
        all.push("gruendelsFresh");
        all.push("gruendelsRadler");
        all.push("gruendelsFitmalz");
        all.push("bunderberg");
        all.push("mrzgApfel");
        all.push("mrzgApfelschorle");
        all.push("mrzgOrange");
        all.push("mrzgACE");
        all.push("mrzgTraube");
        all.push("mrzgMulti");
        all.push("mrzgJohannesbeere");
        all.push("rilchSpritzig");
        all.push("rilchFein");
        all.push("rilchZitrone");
        all.push("rilchApfel");

        for(var bfalist in all) {
            try {
                var bfa = all[bfalist];
                let intern = getCookie(bfa);
                let internfav = getCookie(bfa + "fav");
                if(intern == null || intern == undefined || intern == "") intern = 0;
                if(internfav == null || internfav == undefined || internfav == "") internfav = 0;
                anzahl[bfa] = intern;
                document.getElementById(bfa).innerHTML = intern;
                favs(bfa, internfav);
            } catch (e) {
                console.log(bfa);
            }
        }
//---------------------------------------------------------------------------------------------------//
        /*        
        var urpils05 = getCookie("urpils05");
        var urpils5 = getCookie("urpils5");
        var bockbier = getCookie("bockbier");
        var pils = getCookie("pils");
        var exportbier = getCookie("export");
        var feingold = getCookie("feingold");
        var naturRadler = getCookie("naturRadler");
        var naturRadlerStubbi = getCookie("naturRadlerStubbi");
        var weizenAlkFrei = getCookie("weizenAlkFrei");
        var weizenRadler = getCookie("weizenRadler");
        var weizenHefeTrueb = getCookie("weizenHefeTrueb");
        var weizenDunkel = getCookie("weizenDunkel");
        var mixCola = getCookie("mixCola");
        var mixIcedBlue = getCookie("mixIcedBlue");
        var mixCherry = getCookie("mixCherry");
        var gruendelsClassic = getCookie("gruendelsClassic");
        var gruendelsFresh = getCookie("gruendelsFresh");
        var gruendelsRadler = getCookie("gruendelsRadler");
        var gruendelsFitmalz = getCookie("gruendelsFitmalz");
        var bunderberg = getCookie("bunderberg");
        var mrzgApfel = getCookie("mrzgApfel");
        var mrzgOrange = getCookie("mrzgOrange");
        var mrzgACE = getCookie("mrzgACE");
        var mrzgTraube = getCookie("mrzgTraube");
        var mrzgMulti = getCookie("mrzgMulti");
        if(urpils05 == null || urpils05 == undefined || urpils05 == "") urpils05 = 0;
        if(urpils5 == null || urpils5 == undefined || urpils5 == "") urpils5 = 0;
        if(bockbier == null || bockbier == undefined || bockbier == "") bockbier = 0;
        if(pils == null || pils == undefined || pils == "") pils = 0;
        if(exportbier == null || exportbier == undefined || exportbier == "") exportbier = 0;
        if(feingold == null || feingold == undefined || feingold == "") feingold = 0;
        if(naturRadler == null || naturRadler == undefined || naturRadler == "") naturRadler = 0;
        if(naturRadlerStubbi == null || naturRadlerStubbi == undefined || naturRadlerStubbi == "") naturRadlerStubbi = 0;
        if(weizenAlkFrei == null || weizenAlkFrei == undefined || weizenAlkFrei == "") weizenAlkFrei = 0;
        if(weizenRadler == null || weizenRadler == undefined || weizenRadler == "") weizenRadler = 0;
        if(weizenHefeTrueb == null || weizenHefeTrueb == undefined || weizenHefeTrueb == "") weizenHefeTrueb = 0;
        if(weizenDunkel == null || weizenDunkel == undefined || weizenDunkel == "") weizenDunkel = 0;
        if(mixCola == null || mixCola == undefined || mixCola == "") mixCola = 0;
        if(mixIcedBlue == null || mixIcedBlue == undefined || mixIcedBlue == "") mixIcedBlue = 0;
        if(mixCherry == null || mixCherry == undefined || mixCherry == "") mixCherry = 0;
        if(gruendelsClassic == null || gruendelsClassic == undefined || gruendelsClassic == "") gruendelsClassic = 0;
        if(gruendelsFresh == null || gruendelsFresh == undefined || gruendelsFresh == "") gruendelsFresh = 0;
        if(gruendelsRadler == null || gruendelsRadler == undefined || gruendelsRadler == "") gruendelsRadler = 0;
        if(gruendelsFitmalz == null || gruendelsFitmalz == undefined || gruendelsFitmalz == "") gruendelsFitmalz = 0;
        if(bunderberg == null || bunderberg == undefined || bunderberg == "") bunderberg = 0;
        if(mrzgApfel == null || mrzgApfel == undefined || mrzgApfel == "") mrzgApfel = 0;
        if(mrzgOrange == null || mrzgOrange == undefined || mrzgOrange == "") mrzgOrange = 0;
        if(mrzgACE == null || mrzgACE == undefined || mrzgACE == "") mrzgACE = 0;
        if(mrzgTraube == null || mrzgTraube == undefined || mrzgTraube == "") mrzgTraube = 0;
        if(mrzgMulti == null || mrzgMulti == undefined || mrzgMulti == "") mrzgMulti = 0;
        anzahl["urpils05"] = urpils05;
        document.getElementById("urpils05").innerHTML = urpils05;
        anzahl["urpils5"] = urpils5;
        document.getElementById("urpils5").innerHTML = urpils5;
        anzahl["bockbier"] = bockbier;
        document.getElementById("bockbier").innerHTML = bockbier;
        anzahl["pils"] = pils;
        document.getElementById("pils").innerHTML = pils;
        anzahl["export"] = exportbier;
        document.getElementById("export").innerHTML = exportbier;
        anzahl["feingold"] = feingold;
        document.getElementById("feingold").innerHTML = feingold;
        anzahl["naturRadler"] = naturRadler;
        document.getElementById("naturRadler").innerHTML = naturRadler;
        anzahl["naturRadlerStubbi"] = naturRadlerStubbi;
        document.getElementById("naturRadlerStubbi").innerHTML = naturRadlerStubbi;
        anzahl["weizenAlkFrei"] = weizenAlkFrei;
        document.getElementById("weizenAlkFrei").innerHTML = weizenAlkFrei;
        anzahl["weizenRadler"] = weizenRadler;
        document.getElementById("weizenRadler").innerHTML = weizenRadler;
        anzahl["weizenHefeTrueb"] = weizenHefeTrueb;
        document.getElementById("weizenHefeTrueb").innerHTML = weizenHefeTrueb;
        anzahl["weizenDunkel"] = weizenDunkel;
        document.getElementById("weizenDunkel").innerHTML = weizenDunkel;
        anzahl["mixCola"] = mixCola;
        document.getElementById("mixCola").innerHTML = mixCola;
        anzahl["mixIcedBlue"] = mixIcedBlue;
        document.getElementById("mixIcedBlue").innerHTML = mixIcedBlue;
        anzahl["mixCherry"] = mixCherry;
        document.getElementById("mixCherry").innerHTML = mixCherry;
        anzahl["gruendelsClassic"] = gruendelsClassic;
        document.getElementById("gruendelsClassic").innerHTML = gruendelsClassic;
        anzahl["gruendelsFresh"] = gruendelsFresh;
        document.getElementById("gruendelsFresh").innerHTML = gruendelsFresh;
        anzahl["gruendelsRadler"] = gruendelsRadler;
        document.getElementById("gruendelsRadler").innerHTML = gruendelsRadler;
        anzahl["gruendelsFitmalz"] = gruendelsFitmalz;
        document.getElementById("gruendelsFitmalz").innerHTML = gruendelsFitmalz;
        anzahl["bunderberg"] = bunderberg;
        document.getElementById("bunderberg").innerHTML = bunderberg;
        anzahl["mrzgApfel"] = mrzgApfel;
        document.getElementById("mrzgApfel").innerHTML = mrzgApfel;
        anzahl["mrzgOrange"] = mrzgOrange;
        document.getElementById("mrzgOrange").innerHTML = mrzgOrange;
        anzahl["mrzgACE"] = mrzgACE;
        document.getElementById("mrzgACE").innerHTML = mrzgACE;
        anzahl["mrzgTraube"] = mrzgTraube;
        document.getElementById("mrzgTraube").innerHTML = mrzgTraube;
        anzahl["mrzgMulti"] = mrzgMulti;
        document.getElementById("mrzgMulti").innerHTML = mrzgMulti;
        */
        gesamt = 0;
        for(var bier in anzahl) {
            gesamt += anzahl[bier] * kosten[bier];
        }

        var display = document.getElementById("punkteDisplay");
        display.innerHTML = max - gesamt + " Punkte";
        if(gesamt <= max) {
            display.style.color = "#2ecc71";
        } else {
            display.style.color = "#e74c3c";
        }

        var progressSlider = document.getElementById("slider");

        if(gesamt >= 0) {
            progressSlider.style.left = String(-1 * (Math.ceil(gesamt / max *100))) + "%";
        } else {
            progressSlider.style.left = 100 + "%";
        }

        gesamtkosten = gesamt; 

        this.document.getElementById("punkteDisplay").style.textShadow = ("2px 2px 5px rgb(0, 0, 0, 0.7)");        
//---------------------------------------------------------------------------------------------------//
        /*
        var urpils05fav = getCookie("urpils05fav");
        var urpils5fav = getCookie("urpils5fav");
        var bockbierfav = getCookie("bockbierfav");
        var pilsfav = getCookie("pilsfav");
        var exportbierfav = getCookie("exportfav");
        var feingoldfav = getCookie("feingoldfav");
        var naturRadlerfav = getCookie("naturRadlerfav");
        var naturRadlerStubbifav = getCookie("naturRadlerStubbifav");
        var weizenAlkFreifav = getCookie("weizenAlkFreifav");
        var weizenRadlerfav = getCookie("weizenRadlerfav");
        var weizenHefeTruebfav = getCookie("weizenHefeTruebfav");
        var weizenDunkelfav = getCookie("weizenDunkelfav");
        var mixColafav = getCookie("mixColafav");
        var mixIcedBluefav = getCookie("mixIcedBluefav");
        var mixCherryfav = getCookie("mixCherryfav");
        var gruendelsClassicfav = getCookie("gruendelsClassicfav");
        var gruendelsFreshfav = getCookie("gruendelsFreshfav");
        var gruendelsRadlerfav = getCookie("gruendelsRadlerfav");
        var gruendelsFitmalzfav = getCookie("gruendelsFitmalzfav");
        var bunderbergfav = getCookie("bunderbergfav");
        var mrzgApfelfav = getCookie("mrzgApfelfav");
        var mrzgOrangefav = getCookie("mrzgOrangefav");
        var mrzgACEfav = getCookie("mrzgACEfav");
        var mrzgTraubefav = getCookie("mrzgTraubefav");
        var mrzgMultifav = getCookie("mrzgMultifav");
        if(urpils05fav == null || urpils05fav == undefined || urpils05fav == "") urpils05fav = 0;
        if(urpils5fav == null || urpils5fav == undefined || urpils5fav == "") urpils5fav = 0;
        if(bockbierfav == null || bockbierfav == undefined || bockbierfav  == "") bockbierfav = 0;
        if(pilsfav == null || pilsfav == undefined || pilsfav == "") pilsfav = 0;
        if(exportbierfav == null || exportbierfav == undefined || exportbierfav == "") exportbierfav = 0;
        if(feingoldfav == null || feingoldfav == undefined || feingoldfav == "") feingoldfav = 0;
        if(naturRadlerfav == null || naturRadlerfav == undefined || naturRadlerfav == "") naturRadlerfav = 0;
        if(naturRadlerStubbifav == null || naturRadlerStubbifav == undefined || naturRadlerStubbifav == "") naturRadlerStubbifav = 0;
        if(weizenAlkFreifav == null || weizenAlkFreifav == undefined || weizenAlkFreifav == "") weizenAlkFreifav = 0;
        if(weizenRadlerfav == null || weizenRadlerfav == undefined || weizenRadlerfav == "") weizenRadlerfav = 0;
        if(weizenHefeTruebfav == null || weizenHefeTruebfav == undefined || weizenHefeTruebfav == "") weizenHefeTruebfav = 0;
        if(weizenDunkelfav == null || weizenDunkelfav == undefined || weizenDunkelfav == "") weizenDunkelfav = 0;
        if(mixColafav == null || mixColafav == undefined || mixColafav == "") mixColafav = 0;
        if(mixIcedBluefav == null || mixIcedBluefav == undefined || mixIcedBluefav == "") mixIcedBluefav = 0;
        if(mixCherryfav == null || mixCherryfav == undefined || mixCherryfav == "") mixCherryfav = 0;
        if(gruendelsClassicfav == null || gruendelsClassicfav == undefined || gruendelsClassicfav == "") gruendelsClassicfav = 0;
        if(gruendelsFreshfav == null || gruendelsFreshfav == undefined || gruendelsFreshfav == "") gruendelsFreshfav = 0;
        if(gruendelsRadlerfav == null || gruendelsRadlerfav == undefined || gruendelsRadlerfav == "") gruendelsRadlerfav = 0;
        if(gruendelsFitmalzfav == null || gruendelsFitmalzfav == undefined || gruendelsFitmalzfav == "") gruendelsFitmalzfav = 0;
        if(bunderbergfav == null || bunderbergfav == undefined || bunderbergfav == "") bunderbergfav = 0;
        if(mrzgApfelfav == null || mrzgApfelfav == undefined || mrzgApfelfav == "") mrzgApfelfav = 0;
        if(mrzgOrangefav == null || mrzgOrangefav == undefined || mrzgOrangefav == "") mrzgOrangefav = 0;
        if(mrzgACEfav == null || mrzgACEfav == undefined || mrzgACEfav == "") mrzgACEfav = 0;
        if(mrzgTraubefav == null || mrzgTraubefav == undefined || mrzgTraubefav == "") mrzgTraubefav = 0;
        if(mrzgMultifav == null || mrzgMultifav == undefined || mrzgMultifav == "") mrzgMultifav = 0;
        favs("urpils05", urpils05fav);
        favs("urpils5", urpils5fav);
        favs("bockbier", bockbierfav);
        favs("pils", pilsfav);
        favs("export", exportbierfav);
        favs("feingold", feingoldfav);
        favs("naturRadler", naturRadlerfav);
        favs("naturRadlerStubbi", naturRadlerStubbifav);
        favs("weizenAlkFrei", weizenAlkFreifav);
        favs("weizenRadler", weizenRadlerfav);
        favs("weizenHefeTrueb", weizenHefeTruebfav);
        favs("weizenDunkel", weizenDunkelfav);
        favs("mixCola", mixColafav);
        favs("mixIcedBlue", mixIcedBluefav);
        favs("mixCherry", mixCherryfav);
        favs("gruendelsClassic", gruendelsClassicfav);
        favs("gruendelsFresh", gruendelsFreshfav);
        favs("gruendelsRadler", gruendelsRadlerfav);
        favs("gruendelsFitmalz", gruendelsFitmalzfav);
        favs("bunderberg", bunderbergfav);
        favs("mrzgApfel", mrzgApfelfav);
        favs("mrzgOrange", mrzgOrangefav);
        favs("mrzgACE", mrzgACEfav);
        favs("mrzgTraube", mrzgTraubefav);
        favs("mrzgMulti", mrzgMultifav);
        */
//---------------------------------------------------------------------------------------------------//
        document.getElementById('maxpointsInput').addEventListener ("change", function () {
            var newmax = this.value;
            if(Number(newmax) == null || Number(newmax) == undefined) newmax = 90;
            max = newmax;
            setCookie("max", newmax, 365);
            var display = document.getElementById("punkteDisplay");
            display.innerHTML = max - gesamtkosten + " Punkte";
            console.log(gesamtkosten);
            if(gesamtkosten <= max) {
                display.style.color = "#2ecc71";
            } else {
                display.style.color = "#e74c3c";
            }

            var progressSlider = document.getElementById("slider");

            if(gesamtkosten >= 0) {
                progressSlider.style.left = String(-1 * (Math.ceil(gesamtkosten / max *100))) + "%";
            } else {
                progressSlider.style.left = 100 + "%";
            }
    
        });
    }


        

