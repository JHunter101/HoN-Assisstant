
/* eslint-disable semi, eol-last, object-curly-spacing, key-spacing, quote-props, comma-spacing, quotes, no-unused-vars, comma-dangle */

interface Squad {
  id: string;
  recruit: { front: string; back: string };
  contents: { front: string; back: string }[];
  available_slots: {
    'M1': number,
    'M2': number,
    'D1': number,
    'D2': number,
    'G1': number,
    'G2': number,
   };
  type: string;
  subtype: string;
  size: number;
  slots: string;
  source: string;
  box: string;
  faction: string;
  cost: number;
  platoon: string;
  orders: number;
}

interface Database {
    [faction: string]: {
        [box: string]: {
            [platoon: string]: {
                [type: string]: {
                    [subtype: string]: {
                        [id: string]: Squad;
                    };
                };
            };
        };
    };
}
 export const dataBase: Database = {
  "GE": {
    "all": {
      "1generic": {
        "rc-hero": {
          "0": {
            "1849302001345594367868741EA5742B3A73F156022DBE87715E2C92D94": {
              "id": "1849302001345594367868741EA5742B3A73F156022DBE87715E2C92D94",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345594434146942512C81D11C335EB7B20732BD3B4A9F55B1.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345594434146942512C81D11C335EB7B20732BD3B4A9F55B1.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345596545533BEAC7607AA85C47A661228873041718071488.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345596606299A52AB5D1B2AE454CD479A5E94ABB0EBCAAF5F.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "rc-hero",
              "subtype": "0",
              "size": NaN,
              "slots": "0",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 20.0,
              "platoon": "1generic",
              "orders": 0.0
            },
            "184930200134559627938F00D51743A13BF342A8AC7DD4EC1C33B01B29B": {
              "id": "184930200134559627938F00D51743A13BF342A8AC7DD4EC1C33B01B29B",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455963321E960FED4F3B3D8C138BADD21427400485DC8D62.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455963321E960FED4F3B3D8C138BADD21427400485DC8D62.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc184930200134558884705187870A5DF427E194BF2A9CD76B2D7E9FA9CB1.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc184930200134558884705187870A5DF427E194BF2A9CD76B2D7E9FA9CB1.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "rc-hero",
              "subtype": "0",
              "size": NaN,
              "slots": "0",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 0.0,
              "platoon": "1generic",
              "orders": 0.0
            },
            "18493020013455846327451163163F01873742043B04689EA62C83BC9F7": {
              "id": "18493020013455846327451163163F01873742043B04689EA62C83BC9F7",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345584681645A4652C750D1B41A110AF70857F512DC9A917F.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345584681645A4652C750D1B41A110AF70857F512DC9A917F.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455875563874DB2DF7D00BDBEC8DCCDB12445049F677E2C5.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345587605038794071FE193B49AE882992A8766D751793A56.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "rc-hero",
              "subtype": "0",
              "size": NaN,
              "slots": "0",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 25.0,
              "platoon": "1generic",
              "orders": 0.0
            },
            "18493020013455763216BF381C6B951B8F94076A5834F9A98AF5F69FA20": {
              "id": "18493020013455763216BF381C6B951B8F94076A5834F9A98AF5F69FA20",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345576370E10B7A52C48637B789502D43A40E91257CAFF8AA.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345576370E10B7A52C48637B789502D43A40E91257CAFF8AA.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345576116162E7450DE1AF2C0236498A1233CDDFA090F39A0.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345576220E17252DD49FE8DB40092B7A3D1C4388D07DE27E0.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "rc-hero",
              "subtype": "0",
              "size": NaN,
              "slots": "0",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 30.0,
              "platoon": "1generic",
              "orders": 0.0
            },
            "1849302001345588597102CA4B9DB8204E8D0A5476B44E404568DA7C8C0": {
              "id": "1849302001345588597102CA4B9DB8204E8D0A5476B44E404568DA7C8C0",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345588660765203A9F8ECED08419D365F86AF6C312F6550F7.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345588660765203A9F8ECED08419D365F86AF6C312F6550F7.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc184930200134559127787E698B059B0D53FA6B47C302C2AF93AD850412C.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc184930200134559136535A0BD956FFB1E9E962DD6831B8A7BEAD0E43948.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "rc-hero",
              "subtype": "0",
              "size": NaN,
              "slots": "0",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 75.0,
              "platoon": "1generic",
              "orders": 0.0
            }
          },
          "0-G1": {
            "184930200134557642241BD3AC23B8BED1F1186247C0146E499791637C2": {
              "id": "184930200134557642241BD3AC23B8BED1F1186247C0146E499791637C2",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc184930200134557648065772AE20A5D9189BB83D1A0C94FF1F8CCF109D0.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc184930200134557648065772AE20A5D9189BB83D1A0C94FF1F8CCF109D0.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345576530CCD0E0172F47B71D77C5C3FC2B64D33C3E86C2DC.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455765809BC3B4A6C8119C7FD51BE0BEB427670C18E10256.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 1,
                "G2": 0
              },
              "type": "rc-hero",
              "subtype": "0-G1",
              "size": NaN,
              "slots": "0-G1",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 30.0,
              "platoon": "1generic",
              "orders": 0.0
            }
          }
        },
        "gear": {
          "0": {
            "1849302001345554145A809EBFF7DF6759E0DA3FBB442725674BCB208F6": {
              "id": "1849302001345554145A809EBFF7DF6759E0DA3FBB442725674BCB208F6",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345554145A809EBFF7DF6759E0DA3FBB442725674BCB208F6.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345554145A809EBFF7DF6759E0DA3FBB442725674BCB208F6.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345554145A809EBFF7DF6759E0DA3FBB442725674BCB208F6.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345554145A809EBFF7DF6759E0DA3FBB442725674BCB208F6.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "0",
              "size": NaN,
              "slots": "0",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 50.0,
              "platoon": "1generic",
              "orders": 0.0
            },
            "184930200134555410174D27A454701B1C22CCD282D27D84679BCBD8825": {
              "id": "184930200134555410174D27A454701B1C22CCD282D27D84679BCBD8825",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc184930200134555410174D27A454701B1C22CCD282D27D84679BCBD8825.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc184930200134555410174D27A454701B1C22CCD282D27D84679BCBD8825.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc184930200134555410174D27A454701B1C22CCD282D27D84679BCBD8825.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc184930200134555410174D27A454701B1C22CCD282D27D84679BCBD8825.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "0",
              "size": NaN,
              "slots": "0",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 45.0,
              "platoon": "1generic",
              "orders": 0.0
            }
          },
          "1": {
            "1849302001345576705FF4A9AE34F68DB48D92BD188E65CBEB0648FA97F": {
              "id": "1849302001345576705FF4A9AE34F68DB48D92BD188E65CBEB0648FA97F",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345576705FF4A9AE34F68DB48D92BD188E65CBEB0648FA97F.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345576705FF4A9AE34F68DB48D92BD188E65CBEB0648FA97F.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345576705FF4A9AE34F68DB48D92BD188E65CBEB0648FA97F.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345576705FF4A9AE34F68DB48D92BD188E65CBEB0648FA97F.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 10.0,
              "platoon": "1generic",
              "orders": 0.0
            },
            "1849302001345581379D9D79ADB2CC860F18C0379E123496611D1BAA22D": {
              "id": "1849302001345581379D9D79ADB2CC860F18C0379E123496611D1BAA22D",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345581379D9D79ADB2CC860F18C0379E123496611D1BAA22D.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345581379D9D79ADB2CC860F18C0379E123496611D1BAA22D.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345581379D9D79ADB2CC860F18C0379E123496611D1BAA22D.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345581379D9D79ADB2CC860F18C0379E123496611D1BAA22D.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 20.0,
              "platoon": "1generic",
              "orders": 0.0
            },
            "184930200134558596343D6CB26676C5CD7A50D438E9C64B31D4F37CF36": {
              "id": "184930200134558596343D6CB26676C5CD7A50D438E9C64B31D4F37CF36",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345586006213C096439FB9335026128D7C76E2CF8A2A08650.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345586006213C096439FB9335026128D7C76E2CF8A2A08650.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc184930200134558596343D6CB26676C5CD7A50D438E9C64B31D4F37CF36.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345586006213C096439FB9335026128D7C76E2CF8A2A08650.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 15.0,
              "platoon": "1generic",
              "orders": 0.0
            },
            "1849302001345590419EE39F38DC33D435FF2BF1372A3A4F2A1D1707A19": {
              "id": "1849302001345590419EE39F38DC33D435FF2BF1372A3A4F2A1D1707A19",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345590419EE39F38DC33D435FF2BF1372A3A4F2A1D1707A19.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345590419EE39F38DC33D435FF2BF1372A3A4F2A1D1707A19.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345590419EE39F38DC33D435FF2BF1372A3A4F2A1D1707A19.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345590419EE39F38DC33D435FF2BF1372A3A4F2A1D1707A19.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 5.0,
              "platoon": "1generic",
              "orders": 0.0
            },
            "1849302001345590672D27F8A2441883E75E1E292047FCD27BC057E8AF5": {
              "id": "1849302001345590672D27F8A2441883E75E1E292047FCD27BC057E8AF5",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345590672D27F8A2441883E75E1E292047FCD27BC057E8AF5.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345590672D27F8A2441883E75E1E292047FCD27BC057E8AF5.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345590672D27F8A2441883E75E1E292047FCD27BC057E8AF5.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345590672D27F8A2441883E75E1E292047FCD27BC057E8AF5.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 15.0,
              "platoon": "1generic",
              "orders": 0.0
            },
            "18493020013455926398AE2830E10F90EDAFF15B10F98620BDB52D58ED8": {
              "id": "18493020013455926398AE2830E10F90EDAFF15B10F98620BDB52D58ED8",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455926398AE2830E10F90EDAFF15B10F98620BDB52D58ED8.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455926398AE2830E10F90EDAFF15B10F98620BDB52D58ED8.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455926398AE2830E10F90EDAFF15B10F98620BDB52D58ED8.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455926398AE2830E10F90EDAFF15B10F98620BDB52D58ED8.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 5.0,
              "platoon": "1generic",
              "orders": 0.0
            },
            "1849302001345596041472737BEEE4D3015C104852B834C4C0AD78A6968": {
              "id": "1849302001345596041472737BEEE4D3015C104852B834C4C0AD78A6968",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345596041472737BEEE4D3015C104852B834C4C0AD78A6968.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345596041472737BEEE4D3015C104852B834C4C0AD78A6968.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345596041472737BEEE4D3015C104852B834C4C0AD78A6968.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345596041472737BEEE4D3015C104852B834C4C0AD78A6968.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 10.0,
              "platoon": "1generic",
              "orders": 0.0
            }
          },
          "2": {
            "18493020013455847259A71C32DE10D1C069F2893304B9340F287573BB5": {
              "id": "18493020013455847259A71C32DE10D1C069F2893304B9340F287573BB5",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455847259A71C32DE10D1C069F2893304B9340F287573BB5.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455847259A71C32DE10D1C069F2893304B9340F287573BB5.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455847259A71C32DE10D1C069F2893304B9340F287573BB5.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455847259A71C32DE10D1C069F2893304B9340F287573BB5.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 15.0,
              "platoon": "1generic",
              "orders": 0.0
            }
          }
        },
        "ft-vehicle": {
          "1": {
            "184930200134559590375E9F35D3AB2F5891BB88F176F18EC70B98C2A25": {
              "id": "184930200134559590375E9F35D3AB2F5891BB88F176F18EC70B98C2A25",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455959484D20B019CF94268711B4FEEDBE57FF56685FFC4C.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455959484D20B019CF94268711B4FEEDBE57FF56685FFC4C.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345582927CAD83FAEE111040031FF27DCACE0CC0F33082895.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345582977E6E12E8F07CDA5587B62AAC5D531FDB7ABEF88F7.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 30.0,
              "platoon": "1generic",
              "orders": 0.0
            },
            "1849302001345573172A18737E3634CDEABB0AF9D96CBAA689FBA258737": {
              "id": "1849302001345573172A18737E3634CDEABB0AF9D96CBAA689FBA258737",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345573211A396326A73BCC5D7C220C485D206D1E5104E72BB.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345573211A396326A73BCC5D7C220C485D206D1E5104E72BB.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345573073CC8422901496950C3EB53D1D695BA9CA791D22AB.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345573126D219CA72101531EB55EF8C70BDB1933578D7BD4E.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 10.0,
              "platoon": "1generic",
              "orders": 0.0
            },
            "184930200134557723769010EE5F18F875B6752ACF3950263A118D19BE9": {
              "id": "184930200134557723769010EE5F18F875B6752ACF3950263A118D19BE9",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc184930200134557727538091DD89CEEDF041ED71B2FA542E7F5B109253C.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc184930200134557727538091DD89CEEDF041ED71B2FA542E7F5B109253C.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345577140CDE4CF833CE3F3A7C531A55F788E15B983B537D1.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345577190F1D379824732998637E2FE60FF5B98DB4AF67FB5.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 25.0,
              "platoon": "1generic",
              "orders": 0.0
            },
            "18493020013455803952FBB636DB8C481E3C6FECD4C2D9461DA42D1898E": {
              "id": "18493020013455803952FBB636DB8C481E3C6FECD4C2D9461DA42D1898E",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455804705458A667A73849366E73ED87729791539895DA1A.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455804705458A667A73849366E73ED87729791539895DA1A.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455797219C8C90FBE5E6AB7AD743F87278BDA543D6554BEE.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455797790FF26B72A4EDBA4DBE8998885F04D1B9030C5EFC.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 40.0,
              "platoon": "1generic",
              "orders": 0.0
            },
            "1849302001345586779BB3A75A03031BECC08141CF48D0F19E2485D16E4": {
              "id": "1849302001345586779BB3A75A03031BECC08141CF48D0F19E2485D16E4",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455868284567A39DA1E9D1C8906D4C2E766E20BE55870FC8.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455868284567A39DA1E9D1C8906D4C2E766E20BE55870FC8.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345587648625AB245DE14B61EFE501AFCD0A38FB5DB994B9D.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc184930200134558769729BF6B9149AEEF58C40EE66D13ACAD40DD6B9E1C.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 40.0,
              "platoon": "1generic",
              "orders": 0.0
            },
            "18493020013455869751C893EFA0D2ED874DDED0BB8CEA157AAD1DDCD9E": {
              "id": "18493020013455869751C893EFA0D2ED874DDED0BB8CEA157AAD1DDCD9E",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc184930200134558701600A4DE6C401703C062E780DF82FE70DCEA4789F6.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc184930200134558701600A4DE6C401703C062E780DF82FE70DCEA4789F6.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345582473D45F7169482B19D051D048CC4B7A1E64F58FB636.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345582523D82A0961D59298B760A7759F2C2344D7BD536233.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 50.0,
              "platoon": "1generic",
              "orders": 0.0
            },
            "1849302001345587060F8DF3663BF3627A270CFFE70E300633245BE02EE": {
              "id": "1849302001345587060F8DF3663BF3627A270CFFE70E300633245BE02EE",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345587104959F91721B341B48A89946415040B727354430B5.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345587104959F91721B341B48A89946415040B727354430B5.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455900054F652BB9ECC69F79972646F3CEE10C341C579642.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455900619732EC72E2F23D19D16E14BAE57E1A8B0104C7DE.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 40.0,
              "platoon": "1generic",
              "orders": 0.0
            },
            "1849302001345587180A1D20B7FD6C6F198A9C135F8D18063F1C2C9AC60": {
              "id": "1849302001345587180A1D20B7FD6C6F198A9C135F8D18063F1C2C9AC60",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345587222AFC7AE4C93D1336534D48CA7FCE9CEC5C1176E48.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345587222AFC7AE4C93D1336534D48CA7FCE9CEC5C1176E48.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455881681D0AC3C64C0D0B716B566B2E12E549C911B016E5.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc184930200134558822764D94789EA0EAEEC5C39537DFE8B4D9ADCED9BBA.png"
                },
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345592436E0324DA0AE26D257BBDD019FF75A9BE46663D18F.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345592518F1BF71BBBA0D0988206068A399368592B3892143.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 80.0,
              "platoon": "1generic",
              "orders": 0.0
            },
            "184930200134558897815F36A92AA9E559AF2774957CF614F29447D2B16": {
              "id": "184930200134558897815F36A92AA9E559AF2774957CF614F29447D2B16",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455890351CC0E577D6B08CDB5874A17DC1936865ADD5CD11.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455890351CC0E577D6B08CDB5874A17DC1936865ADD5CD11.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455854159DF1318276C7005AD8D2E688AD0C51E3F113EC09.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345585515C7DFFC228DA6422C828BD32571589EE27DF9083C.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 50.0,
              "platoon": "1generic",
              "orders": 0.0
            },
            "18493020013455904822B96E1B3A0C3ADF4534C391E947DD8E38F882453": {
              "id": "18493020013455904822B96E1B3A0C3ADF4534C391E947DD8E38F882453",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455905437EC06966F7C6AC5CD3DBF1F0E0920AA57F5D24D9.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455905437EC06966F7C6AC5CD3DBF1F0E0920AA57F5D24D9.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345595784D69A6B9FB18203DDB70CCD1FAEDDC73FC45FCA9B.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345595844816CD66078F537BC1F7715AE6E5C009708651544.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 30.0,
              "platoon": "1generic",
              "orders": 0.0
            },
            "1849302001345591416BAA4F2AC15C3FC9847A7A663A56CB325C44D5E6B": {
              "id": "1849302001345591416BAA4F2AC15C3FC9847A7A663A56CB325C44D5E6B",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345591455A02B519164E086EF91A571F5822097EE5F658DB5.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345591455A02B519164E086EF91A571F5822097EE5F658DB5.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345587458B7BD6569FE5A0162BE67750A4CD5CEBAE4F941A3.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345596606299A52AB5D1B2AE454CD479A5E94ABB0EBCAAF5F.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 25.0,
              "platoon": "1generic",
              "orders": 0.0
            },
            "1849302001345591494B71C5C0245ECCBFC7A7D29A0F1E292741D890B97": {
              "id": "1849302001345591494B71C5C0245ECCBFC7A7D29A0F1E292741D890B97",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345591542B5547887A4ACEB2F30621FA3723ED00FB96423FD.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345591542B5547887A4ACEB2F30621FA3723ED00FB96423FD.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc184930200134558985975A146969C1137844C2C7617824A9D4F95887AAB.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345589950826EF473F4149DC455FFA24848FC04FBD5F8FF03.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 65.0,
              "platoon": "1generic",
              "orders": 0.0
            },
            "1849302001345593981FAF49429A62B416715C68D7D299F2C9BA2EA590C": {
              "id": "1849302001345593981FAF49429A62B416715C68D7D299F2C9BA2EA590C",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345594027C2E83F06994E2713992B33D915D8BD99513917F5.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345594027C2E83F06994E2713992B33D915D8BD99513917F5.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345584293B3C75A1FD6DC65C9B943AD77AA9451AB57D31B0C.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455843449AD8C4EEED72BD9351E6394DC8D531D4D8640A97.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 40.0,
              "platoon": "1generic",
              "orders": 0.0
            }
          }
        },
        "ft-inf": {
          "1": {
            "18493020013455774442988015C77CAA92603CCD75A86E7C3C7A40F8CE1": {
              "id": "18493020013455774442988015C77CAA92603CCD75A86E7C3C7A40F8CE1",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345577505D7F1380A5AF309C35AE2F3137277F49890B46F55.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345577505D7F1380A5AF309C35AE2F3137277F49890B46F55.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc184930200134557754509AC7F47AA17F664837811E3A2C75AC8BEB46939.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345515577BB9578A6F57E6EAD046A2A08D66C77C51800FA92.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 40.0,
              "platoon": "1generic",
              "orders": 0.0
            },
            "1849302001345581158499CA78C8C04DD2B45E2FAFEC9D133DC1FE37ACE": {
              "id": "1849302001345581158499CA78C8C04DD2B45E2FAFEC9D133DC1FE37ACE",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455812468B81D537CDAD6A00C7A0C0745C0D0F08724E2F46.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455812468B81D537CDAD6A00C7A0C0745C0D0F08724E2F46.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455888879DCD7EB199A1B31D129AEACF89DC12C349EC8DFC.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455889300A5F25FAAB3E32E02D4E63CA7C95CA1CD0BB34A4.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 25.0,
              "platoon": "1generic",
              "orders": 0.0
            },
            "18493020013455848184ADDE8DED93803213C5FF9E50ACC5ED460887DD7": {
              "id": "18493020013455848184ADDE8DED93803213C5FF9E50ACC5ED460887DD7",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345584857F0EC5A7EDE57362E6442FCBC6C5F5FABB02E664B.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345584857F0EC5A7EDE57362E6442FCBC6C5F5FABB02E664B.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc184930200134558490701C100FA0116E635FCF39425FBBC76311B3B32C6.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345584966BB9578A6F57E6EAD046A2A08D66C77C51800FA92.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 25.0,
              "platoon": "1generic",
              "orders": 0.0
            },
            "1849302001345590963F68FDBE1FFD898A86E98E9082EFFDA273EEC09AC": {
              "id": "1849302001345590963F68FDBE1FFD898A86E98E9082EFFDA273EEC09AC",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345591005A90B612A597E0DB61F43EDB122B4C22A3B6CCEA1.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345591005A90B612A597E0DB61F43EDB122B4C22A3B6CCEA1.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345594504305EEFB397CEEB0C79DC18D1876031AC2EA9DCDD.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345515577BB9578A6F57E6EAD046A2A08D66C77C51800FA92.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 30.0,
              "platoon": "1generic",
              "orders": 0.0
            },
            "18493020013455923176B1E3093F06A3227AE73AC6AFDE0140D33EF6411": {
              "id": "18493020013455923176B1E3093F06A3227AE73AC6AFDE0140D33EF6411",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc184930200134559237247B8BBD239ADDD02C3DBBDA64007936BE61653CE.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc184930200134559237247B8BBD239ADDD02C3DBBDA64007936BE61653CE.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345595100DCDC06B8A67FCA513158F00E23CAD19011906AAA.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345515577BB9578A6F57E6EAD046A2A08D66C77C51800FA92.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 25.0,
              "platoon": "1generic",
              "orders": 0.0
            },
            "1849302001345578481AE2C39EEB91AE95D4F8438E7E85DF49F76B2A4E6": {
              "id": "1849302001345578481AE2C39EEB91AE95D4F8438E7E85DF49F76B2A4E6",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc184930200134557854155080DA3B7211871A75C5ACA93E970BAD5690762.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc184930200134557854155080DA3B7211871A75C5ACA93E970BAD5690762.png"
              },
              "contents": [
                {
                  "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455787012F331EAE1728F8D4DD13CED8D698E17A250520C2.png",
                  "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc1849302001345578748B528C88F4CACAB6DAA97E220FB137EF600A4750F.png"
                },
                {
                  "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455787012F331EAE1728F8D4DD13CED8D698E17A250520C2.png",
                  "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc1849302001345578748B528C88F4CACAB6DAA97E220FB137EF600A4750F.png"
                },
                {
                  "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455787012F331EAE1728F8D4DD13CED8D698E17A250520C2.png",
                  "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc1849302001345578748B528C88F4CACAB6DAA97E220FB137EF600A4750F.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 45.0,
              "platoon": "1generic",
              "orders": 0.0
            },
            "18493020013455773591E31C3ACE1BC175CEA11A70B5023D3D8A3008F18": {
              "id": "18493020013455773591E31C3ACE1BC175CEA11A70B5023D3D8A3008F18",
              "recruit": {
                "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc1849302001345577398CAB489CA8CDA510084B6A18D26674CBC7A0D6417.png",
                "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc1849302001345577398CAB489CA8CDA510084B6A18D26674CBC7A0D6417.png"
              },
              "contents": [
                {
                  "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455773159AFD4F74DB80A50D3CD76C4160031A471F399EFB.png",
                  "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455121565B7487FDE2B3D67A9204DAB4CA6CAFAE71E186EF.png"
                },
                {
                  "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455773159AFD4F74DB80A50D3CD76C4160031A471F399EFB.png",
                  "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455121565B7487FDE2B3D67A9204DAB4CA6CAFAE71E186EF.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 10.0,
              "platoon": "1generic",
              "orders": 0.0
            }
          }
        }
      },
      "ss-bwb": {
        "rc-hero": {
          "0": {
            "184930200134557434704B61BDA6750DE414A0E2AB6DDEE2010FACF4636": {
              "id": "184930200134557434704B61BDA6750DE414A0E2AB6DDEE2010FACF4636",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345574409801558F724FD785FD47B45EAFCF73AC0AA5DB765.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345574409801558F724FD785FD47B45EAFCF73AC0AA5DB765.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc184930200134557463515AACEA5A765BFC825C81F03875BB171E215386F.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345574692C7E5E43A9DDEBFB05DD685AAA837D8751385CDCF.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "rc-hero",
              "subtype": "0",
              "size": NaN,
              "slots": "0",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 30.0,
              "platoon": "ss-bwb",
              "orders": 1.0
            }
          }
        },
        "rc-plat": {
          "D2-D1-0-D1-M1": {
            "18493020013455744745E5DCA9834C0E290D014E1A8F53CAB2BA556ACF2": {
              "id": "18493020013455744745E5DCA9834C0E290D014E1A8F53CAB2BA556ACF2",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345574556FDED740785C26348D58B6AAA5292480CE69D9176.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345574556FDED740785C26348D58B6AAA5292480CE69D9176.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345573771D77C840939B7673631AFDA7B5167278A0E61A524.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345573813E5F9EAE60891234A162AFD300876C5D72B65AD91.png"
                },
                {
                  "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455738598B2E3B3C05614FBCFB836681B3D7D0B03AC0EDFE.png",
                  "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc184930200134557390987B18EA792BBBF5ACD8249D7394FC54611CB21BE.png"
                },
                {
                  "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc1849302001345574065C05F66CD0B668BC1BC9DD83AC40CDD80234AEB4F.png",
                  "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455741083067EE79722F923D009072E05B5A55D60C20467F.png"
                },
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345574283376AEF3DBEA42166BAAD92145F24C83A061506AA.png",
                  "back": NaN
                }
              ],
              "available_slots": {
                "M1": 1,
                "M2": 0,
                "D1": 2,
                "D2": 1,
                "G1": 0,
                "G2": 0
              },
              "type": "rc-plat",
              "subtype": "D2-D1-0-D1-M1",
              "size": NaN,
              "slots": "D2-D1-0-D1-M1",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 100.0,
              "platoon": "ss-bwb",
              "orders": 2.0
            }
          },
          "M2-0-G1-D1": {
            "1849302001345572043FFD5721B8BAF17343CFA0BA92EDF260AFC2A3F6B": {
              "id": "1849302001345572043FFD5721B8BAF17343CFA0BA92EDF260AFC2A3F6B",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345572122C6368F34C29278649C5C0CEB3EBA6464910E7F21.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345572122C6368F34C29278649C5C0CEB3EBA6464910E7F21.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455722035F8F587E560BDECE0ECC2B5F398BB96B69892347.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455722445F759FF16024057EF83FB8B024E1A0B4BA591733.png"
                },
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455725843BA016685BA0CAAA6A378CF9D7113120E6363FE0.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345572629B7E9A783D59EE5945DF42DA978E4CB108A4BCEBF.png"
                },
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345572766D5E7B16CB67EA49F6608CF3DD4C53BEA576EDB4B.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc184930200134557281316EB2738AD3C636602D07F651F5A06035CEBBF47.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 1,
                "D1": 1,
                "D2": 0,
                "G1": 1,
                "G2": 0
              },
              "type": "rc-plat",
              "subtype": "M2-0-G1-D1",
              "size": NaN,
              "slots": "M2-0-G1-D1",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 65.0,
              "platoon": "ss-bwb",
              "orders": 1.0
            }
          }
        },
        "ft-vehicle": {
          "1": {
            "1849302001345573374B4479ED5D664E50D785ED417F86F961C70E1B117": {
              "id": "1849302001345573374B4479ED5D664E50D785ED417F86F961C70E1B117",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455734560EFC22D4E1206CD0CB8CFA1667C7F573AEB023BA.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455734560EFC22D4E1206CD0CB8CFA1667C7F573AEB023BA.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345573950EBA5CA06800902322BEC6D79BA23EA12A843E506.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345574019C159F66F33A4B59D5E35E6E8C663BD20D3B5CE39.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 25.0,
              "platoon": "ss-bwb",
              "orders": 0.0
            },
            "1849302001345573521C114EE939B72CBA783E9BC145C35FAFC858A417C": {
              "id": "1849302001345573521C114EE939B72CBA783E9BC145C35FAFC858A417C",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345573566FDD61C11999808EF529705EAE171DED84F624D93.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345573566FDD61C11999808EF529705EAE171DED84F624D93.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455741558790B38851935B349DEE666E2333D14932BE9101.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345574209FD08416D0B3221B20259C001C947793F92BF1F68.png"
                },
                {
                  "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455738598B2E3B3C05614FBCFB836681B3D7D0B03AC0EDFE.png",
                  "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc184930200134557390987B18EA792BBBF5ACD8249D7394FC54611CB21BE.png"
                },
                {
                  "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc1849302001345574065C05F66CD0B668BC1BC9DD83AC40CDD80234AEB4F.png",
                  "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455741083067EE79722F923D009072E05B5A55D60C20467F.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 75.0,
              "platoon": "ss-bwb",
              "orders": 0.0
            },
            "18493020013455736186A9CEC10E74496EDDADF1E2E3CEF7D7EC3C37A5A": {
              "id": "18493020013455736186A9CEC10E74496EDDADF1E2E3CEF7D7EC3C37A5A",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345573728B6291E7208E34C7895CB5BCD05939BD41229C932.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345573728B6291E7208E34C7895CB5BCD05939BD41229C932.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455741558790B38851935B349DEE666E2333D14932BE9101.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345574209FD08416D0B3221B20259C001C947793F92BF1F68.png"
                },
                {
                  "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455738598B2E3B3C05614FBCFB836681B3D7D0B03AC0EDFE.png",
                  "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc184930200134557390987B18EA792BBBF5ACD8249D7394FC54611CB21BE.png"
                },
                {
                  "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455738598B2E3B3C05614FBCFB836681B3D7D0B03AC0EDFE.png",
                  "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc184930200134557390987B18EA792BBBF5ACD8249D7394FC54611CB21BE.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 65.0,
              "platoon": "ss-bwb",
              "orders": 0.0
            }
          }
        },
        "ft-inf": {
          "1": {
            "1849302001345572302A9EF385162E0BCC7EA35EE058DC669899E689B7E": {
              "id": "1849302001345572302A9EF385162E0BCC7EA35EE058DC669899E689B7E",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455723521F2BD76FD31ED13863B960443B4CAC2CEEAB5CB7.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455723521F2BD76FD31ED13863B960443B4CAC2CEEAB5CB7.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455725008AC16071865BFBAF1DF64A457C0168BB01534AE6.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc184930200134557254310A674B152DA622307F5D90A6E57D50B8016D081.png"
                },
                {
                  "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455728643EF9B203C988DA2DD65BF31282738E6D68CDCBF7.png",
                  "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc184930200134557294039ED595D4C414712596E3CA20F7F250DEF912FB8.png"
                },
                {
                  "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455728643EF9B203C988DA2DD65BF31282738E6D68CDCBF7.png",
                  "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc184930200134557294039ED595D4C414712596E3CA20F7F250DEF912FB8.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 75.0,
              "platoon": "ss-bwb",
              "orders": 0.0
            },
            "18493020013455724088C7F8F5C20F306A30BEF20AC122BF30344A628CD": {
              "id": "18493020013455724088C7F8F5C20F306A30BEF20AC122BF30344A628CD",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc184930200134557246099A748F907A336B087BB572C4E91D8FC19071551.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc184930200134557246099A748F907A336B087BB572C4E91D8FC19071551.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455726781A3475762A5AC13382DFB4F48D67C0B31BF2C5F0.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455727191399BA0ED958B6BB851AE6330C67FE5E397C6EFD.png"
                },
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345572987E0BAE17B76AFF073FB4026F3A5863BBC6BC2D067.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc184930200134557303912B9E5E7013C77B5BC8CEA559FD42DE3E3644FD5.png"
                },
                {
                  "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455728643EF9B203C988DA2DD65BF31282738E6D68CDCBF7.png",
                  "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc184930200134557294039ED595D4C414712596E3CA20F7F250DEF912FB8.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 75.0,
              "platoon": "ss-bwb",
              "orders": 0.0
            }
          }
        }
      },
      "sturmpioniere-gwg": {
        "rc-hero": {
          "0": {
            "184930200134558736074B73F51D99DC69E70A4FD8BBC6C5A5BAEE2A1B4": {
              "id": "184930200134558736074B73F51D99DC69E70A4FD8BBC6C5A5BAEE2A1B4",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455874099068A1648EC067B4233C44C6D0FDA7ACD3A2B8A5.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455874099068A1648EC067B4233C44C6D0FDA7ACD3A2B8A5.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455831424DA988AECC66E8D384814E3AF8BB05C7B28F06FF.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345583182E38FF40D0569C6E3917D1B40758F028740ED7D8A.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "rc-hero",
              "subtype": "0",
              "size": NaN,
              "slots": "0",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 35.0,
              "platoon": "sturmpioniere-gwg",
              "orders": 0.0
            }
          }
        },
        "rc-plat": {
          "D2-D1-0-D1-M1": {
            "18493020013455937612C577CFC30917641763F570416E24EAD48DC5127": {
              "id": "18493020013455937612C577CFC30917641763F570416E24EAD48DC5127",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc184930200134559384310E144642A72CBA32EC5801D98A7EA8AF6773A3C.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc184930200134559384310E144642A72CBA32EC5801D98A7EA8AF6773A3C.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455910459F41B206F4502101C9C16B07AA7ED8052E079584.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455910939E25DB4881A74906FBE84DB096BB08F7BE8028C3.png"
                },
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455799022A059373DC71A4896702D2ADCDE43A18B6E27CCA.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455799022A059373DC71A4896702D2ADCDE43A18B6E27CCA.png"
                },
                {
                  "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455830427C826AAF524D0F1665E02E55DD1802DEE9DDA296.png",
                  "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc184930200134558309007920F17C07351659024F3FFB73C4675638CB307.png"
                },
                {
                  "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455801208413576EFB49D6BBBF9CAA4FF3186F1F97906C7D.png",
                  "back": NaN
                }
              ],
              "available_slots": {
                "M1": 1,
                "M2": 0,
                "D1": 2,
                "D2": 1,
                "G1": 0,
                "G2": 0
              },
              "type": "rc-plat",
              "subtype": "D2-D1-0-D1-M1",
              "size": NaN,
              "slots": "D2-D1-0-D1-M1",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 110.0,
              "platoon": "sturmpioniere-gwg",
              "orders": 2.0
            }
          }
        },
        "ft-vehicle": {
          "1": {
            "1849302001345594634FC0B03ADA67A56CE895F930D15C851BACF49064E": {
              "id": "1849302001345594634FC0B03ADA67A56CE895F930D15C851BACF49064E",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455946917E58D843910D0C00209C190A7C737B90020084A6.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455946917E58D843910D0C00209C190A7C737B90020084A6.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345595446FE10F7A0141E2FDFF00AA96BB46B34A13FBE8041.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345595525F4EBC479A649F7902012BCDA7702FBFD8A65246B.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 25.0,
              "platoon": "sturmpioniere-gwg",
              "orders": 0.0
            }
          }
        },
        "ft-inf": {
          "2": {
            "18493020013455950044223FFFCB9CDF794F8DC6D3479E6060294875B1E": {
              "id": "18493020013455950044223FFFCB9CDF794F8DC6D3479E6060294875B1E",
              "recruit": {
                "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455950538218AF54E64276E0D3008C1F7CBAD0629D48066D.png",
                "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455950538218AF54E64276E0D3008C1F7CBAD0629D48066D.png"
              },
              "contents": [
                {
                  "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455830427C826AAF524D0F1665E02E55DD1802DEE9DDA296.png",
                  "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc184930200134558309007920F17C07351659024F3FFB73C4675638CB307.png"
                },
                {
                  "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455801208413576EFB49D6BBBF9CAA4FF3186F1F97906C7D.png",
                  "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455801806374AB169C2D76FD73F1EBB6BEE78D54D347907E.png"
                },
                {
                  "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc1849302001345592701EE0E63FCFCACCA015D69739D788170236ED62F26.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013453784032FD03396D07FB148EAA6165BD9BE359458F0442F.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 75.0,
              "platoon": "sturmpioniere-gwg",
              "orders": 0.0
            }
          }
        }
      },
      "panzer-owo": {
        "rc-plat": {
          "M1-D1-0-D2": {
            "1849302001345589376FDE5DCEB345356C78C61913DF12D8EA1959F0AF0": {
              "id": "1849302001345589376FDE5DCEB345356C78C61913DF12D8EA1959F0AF0",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345589466ADFD67CB3FBDDA830E5A6B6E998806D195DAE9E0.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345589466ADFD67CB3FBDDA830E5A6B6E998806D195DAE9E0.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455826733E3B739E262E3179CD614AD258462FE2DB0E6B1C.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc184930200134558273110627F24E89802D8ABBEC7FEB644188A58923666.png"
                },
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345588382D9DD5C1F6FDAEF97701F5083F00A9C32B00103D8.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc184930200134558844510627F24E89802D8ABBEC7FEB644188A58923666.png"
                }
              ],
              "available_slots": {
                "M1": 1,
                "M2": 0,
                "D1": 1,
                "D2": 1,
                "G1": 0,
                "G2": 0
              },
              "type": "rc-plat",
              "subtype": "M1-D1-0-D2",
              "size": NaN,
              "slots": "M1-D1-0-D2",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 130.0,
              "platoon": "panzer-owo",
              "orders": 2.0
            }
          }
        },
        "ft-vehicle": {
          "1": {
            "1849302001345587759C45AFF77ED39ED90BC8C3A7E497D4062890FD9F3": {
              "id": "1849302001345587759C45AFF77ED39ED90BC8C3A7E497D4062890FD9F3",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345587799F648905078F21D6B0531F0FDC03825EAF4C1B98B.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345587799F648905078F21D6B0531F0FDC03825EAF4C1B98B.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345578796C2E81F5DBAF013753B0DFC8A23D00BB4D55C221D.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455790309DAF991C18611D8863640F7116CC65D91C6895E6.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 80.0,
              "platoon": "panzer-owo",
              "orders": 0.0
            },
            "1849302001345588072E9255EC20ADC9F791C85D1F2E2283C0A98182F28": {
              "id": "1849302001345588072E9255EC20ADC9F791C85D1F2E2283C0A98182F28",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345588121999C9B3B15CDD78915C1D3D2509EC817F3F40ACB.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345588121999C9B3B15CDD78915C1D3D2509EC817F3F40ACB.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455936117742EE70557B09060B23A894A5A03D9689940238.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc184930200134559369200889AD0341BC83A52CA2015BC7A1CDD3A0FFDFD.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 65.0,
              "platoon": "panzer-owo",
              "orders": 0.0
            },
            "1849302001345590721E724302AA2C12A7DFFD8CF77081833050BC314EE": {
              "id": "1849302001345590721E724302AA2C12A7DFFD8CF77081833050BC314EE",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345590824AE640BFD4920544E83DD20BFC9EABE717468CE40.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345590824AE640BFD4920544E83DD20BFC9EABE717468CE40.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455936117742EE70557B09060B23A894A5A03D9689940238.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc184930200134559369200889AD0341BC83A52CA2015BC7A1CDD3A0FFDFD.png"
                },
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345582291E5F26570ABF02A2A579A694420DA82874E74816D.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc184930200134558234900889AD0341BC83A52CA2015BC7A1CDD3A0FFDFD.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 130.0,
              "platoon": "panzer-owo",
              "orders": 0.0
            }
          }
        }
      },
      "gebirgsjager-wbw": {
        "rc-plat": {
          "M2-0-G1": {
            "184930200134557140100476AF230E0706FFD61B870F000A1BE8C57EA93": {
              "id": "184930200134557140100476AF230E0706FFD61B870F000A1BE8C57EA93",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455714633DDFB644C7FED7C9DD50E654EBC73685FDCC1AE4.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455714633DDFB644C7FED7C9DD50E654EBC73685FDCC1AE4.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345571531FC8D4820A79CC9F7CE4BA935E0F665E528A6618E.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345571574663AACEC43F636D5F8E61CC5E56C8A9793567BA7.png"
                },
                {
                  "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455716977BBEABF8A4B44A7D0056404A6DEA9851D44DFC91.png",
                  "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc1849302001345571759371FED211E935EBD5A5838CA40E0F44D5A403DB7.png"
                },
                {
                  "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc184930200134557189701F94757F4F597066211C19A0BC468CCFCD5B299.png",
                  "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455719510A7A04D2271149AA7A4D9CA3ECDAF1D6FCC7210C.png"
                },
                {
                  "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455716977BBEABF8A4B44A7D0056404A6DEA9851D44DFC91.png",
                  "back": NaN
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 1,
                "D1": 0,
                "D2": 0,
                "G1": 1,
                "G2": 0
              },
              "type": "rc-plat",
              "subtype": "M2-0-G1",
              "size": NaN,
              "slots": "M2-0-G1",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 80.0,
              "platoon": "gebirgsjager-wbw",
              "orders": 1.0
            }
          }
        },
        "ft-inf": {
          "2": {
            "18493020013455716171C1F4899ECEDB916A2894435CD8D019FEAC2B877": {
              "id": "18493020013455716171C1F4899ECEDB916A2894435CD8D019FEAC2B877",
              "recruit": {
                "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc1849302001345571657FBF96BCA690F0852DE70C27F4D965536E2CD6AB5.png",
                "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc1849302001345571657FBF96BCA690F0852DE70C27F4D965536E2CD6AB5.png"
              },
              "contents": [
                {
                  "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455718137C0A57805BFF0A5A05C51CA3EA96D1515367FA1C.png",
                  "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455818865B7487FDE2B3D67A9204DAB4CA6CAFAE71E186EF.png"
                },
                {
                  "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455718137C0A57805BFF0A5A05C51CA3EA96D1515367FA1C.png",
                  "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455818865B7487FDE2B3D67A9204DAB4CA6CAFAE71E186EF.png"
                },
                {
                  "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc1849302001345571998D3DD6C8CDA1766C2472E1F7EAE4B987446FABFB5.png",
                  "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455818865B7487FDE2B3D67A9204DAB4CA6CAFAE71E186EF.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 50.0,
              "platoon": "gebirgsjager-wbw",
              "orders": 0.0
            }
          }
        }
      },
      "1058-rb": {
        "rc-plat": {
          "D2-0-G1-G1": {
            "18493020013455778160DC5058E6F091DDA488CBA1BA2CCA38E370CD9AB": {
              "id": "18493020013455778160DC5058E6F091DDA488CBA1BA2CCA38E370CD9AB",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345577879CA1079E4CD71C2DC1D149DF44AC212219FC39232.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345577879CA1079E4CD71C2DC1D149DF44AC212219FC39232.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc184930200134557795285EEEDC8DA79ECBBD5A1BA198BB56F5E9EA92ED0.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc184930200134557799602DF326050E1B6F307DEBB041341BDBD66E0CE9C.png"
                },
                {
                  "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc184930200134557822138C2B0AE6AC4AD6E115993D1CE20E8BD73A8D765.png",
                  "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455782653DAC5301A6762FF03D4334123DABB5F620B94705.png"
                },
                {
                  "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc1849302001345578316EF43D47F9CE8DE889515F4141D95216D823FFDAA.png",
                  "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc1849302001345578361D03E49417E74273D01F2717C4863C8DC1A0C7DFC.png"
                },
                {
                  "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc184930200134557822138C2B0AE6AC4AD6E115993D1CE20E8BD73A8D765.png",
                  "back": NaN
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 1,
                "G1": 2,
                "G2": 0
              },
              "type": "rc-plat",
              "subtype": "D2-0-G1-G1",
              "size": NaN,
              "slots": "D2-0-G1-G1",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 70.0,
              "platoon": "1058-rb",
              "orders": 2.0
            }
          }
        },
        "ft-inf": {
          "2": {
            "1849302001345578131C5419770A54195E0981A12BC6AB9CD089D2503CE": {
              "id": "1849302001345578131C5419770A54195E0981A12BC6AB9CD089D2503CE",
              "recruit": {
                "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc1849302001345578177F869643FB4B0004AF1EEAD74296AF23E7B38011A.png",
                "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc1849302001345578177F869643FB4B0004AF1EEAD74296AF23E7B38011A.png"
              },
              "contents": [
                {
                  "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc184930200134557843814006168DE26F6469B66B87830FCB864E63E4EDA.png",
                  "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455776565B7487FDE2B3D67A9204DAB4CA6CAFAE71E186EF.png"
                },
                {
                  "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc184930200134557822138C2B0AE6AC4AD6E115993D1CE20E8BD73A8D765.png",
                  "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455782653DAC5301A6762FF03D4334123DABB5F620B94705.png"
                },
                {
                  "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc184930200134557822138C2B0AE6AC4AD6E115993D1CE20E8BD73A8D765.png",
                  "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455782653DAC5301A6762FF03D4334123DABB5F620B94705.png"
                },
                {
                  "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455719510A7A04D2271149AA7A4D9CA3ECDAF1D6FCC7210C.png",
                  "back": NaN
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 60.0,
              "platoon": "1058-rb",
              "orders": 0.0
            },
            "1849302001345578046337DFA1C225DCFD73B8FEE53676550E7BDE87BF5": {
              "id": "1849302001345578046337DFA1C225DCFD73B8FEE53676550E7BDE87BF5",
              "recruit": {
                "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc1849302001345578086600DF8F1401351E5A9E7BE76421FC1A185D1C90C.png",
                "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc1849302001345578086600DF8F1401351E5A9E7BE76421FC1A185D1C90C.png"
              },
              "contents": [
                {
                  "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc184930200134557822138C2B0AE6AC4AD6E115993D1CE20E8BD73A8D765.png",
                  "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455782653DAC5301A6762FF03D4334123DABB5F620B94705.png"
                },
                {
                  "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc184930200134557822138C2B0AE6AC4AD6E115993D1CE20E8BD73A8D765.png",
                  "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455782653DAC5301A6762FF03D4334123DABB5F620B94705.png"
                },
                {
                  "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc1849302001345578316EF43D47F9CE8DE889515F4141D95216D823FFDAA.png",
                  "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc1849302001345578361D03E49417E74273D01F2717C4863C8DC1A0C7DFC.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 55.0,
              "platoon": "1058-rb",
              "orders": 0.0
            }
          }
        }
      },
      "2command-ge": {
        "rc-plat": {
          "D2-0-D1-M1": {
            "1849302001345574745CE8C655791803F010E711C8C02A607ADA8D8D0F1": {
              "id": "1849302001345574745CE8C655791803F010E711C8C02A607ADA8D8D0F1",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345574818442CE9AEE56D490A9EECE5CD7EBF8163A74610D6.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345574818442CE9AEE56D490A9EECE5CD7EBF8163A74610D6.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455749123722CD855DF5F4EDAAAC804C23300C6E1183A24F.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345574966E50809320842B8AC8381A23A647B218DE70ACDE9.png"
                }
              ],
              "available_slots": {
                "M1": 1,
                "M2": 0,
                "D1": 1,
                "D2": 1,
                "G1": 0,
                "G2": 0
              },
              "type": "rc-plat",
              "subtype": "D2-0-D1-M1",
              "size": NaN,
              "slots": "D2-0-D1-M1",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 110.0,
              "platoon": "2command-ge",
              "orders": 0.0
            }
          },
          "M2-M1-0-M1-M2": {
            "18493020013455860522EEA03D2AE65040D37689F6D5438D4EA3EF8E733": {
              "id": "18493020013455860522EEA03D2AE65040D37689F6D5438D4EA3EF8E733",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455861263DD9F34CEB643C6A0A47B5D7E54D9B84338F958F.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455861263DD9F34CEB643C6A0A47B5D7E54D9B84338F958F.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 2,
                "M2": 2,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "rc-plat",
              "subtype": "M2-M1-0-M1-M2",
              "size": NaN,
              "slots": "M2-M1-0-M1-M2",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 10.0,
              "platoon": "2command-ge",
              "orders": 0.0
            }
          },
          "M1-D1-0-G2": {
            "184930200134559176590BA99C165EB8EFD4D1156CF5F9902C137DD52A1": {
              "id": "184930200134559176590BA99C165EB8EFD4D1156CF5F9902C137DD52A1",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc184930200134559187547161B78172ADAFEAC0A363DC17B2D689FF60988.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc184930200134559187547161B78172ADAFEAC0A363DC17B2D689FF60988.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455857443E967AC86E539B30E301970ED3CEF1EF2424D348.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455858120B73200B4E19D439B57BEFE692875BB1065761B9.png"
                }
              ],
              "available_slots": {
                "M1": 1,
                "M2": 0,
                "D1": 1,
                "D2": 0,
                "G1": 0,
                "G2": 1
              },
              "type": "rc-plat",
              "subtype": "M1-D1-0-G2",
              "size": NaN,
              "slots": "M1-D1-0-G2",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 30.0,
              "platoon": "2command-ge",
              "orders": 1.0
            }
          }
        },
        "gear": {
          "1": {
            "184930200134557696006C1FB9B7E9338034F8A685AA9E408F93C03E33B": {
              "id": "184930200134557696006C1FB9B7E9338034F8A685AA9E408F93C03E33B",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc184930200134557696006C1FB9B7E9338034F8A685AA9E408F93C03E33B.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc184930200134557696006C1FB9B7E9338034F8A685AA9E408F93C03E33B.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc184930200134557696006C1FB9B7E9338034F8A685AA9E408F93C03E33B.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc184930200134557696006C1FB9B7E9338034F8A685AA9E408F93C03E33B.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 15.0,
              "platoon": "2command-ge",
              "orders": 0.0
            },
            "18493020013455771019AA7C12F6540F3063876E225FA61F825C16B43CC": {
              "id": "18493020013455771019AA7C12F6540F3063876E225FA61F825C16B43CC",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455771019AA7C12F6540F3063876E225FA61F825C16B43CC.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455771019AA7C12F6540F3063876E225FA61F825C16B43CC.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455771019AA7C12F6540F3063876E225FA61F825C16B43CC.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455771019AA7C12F6540F3063876E225FA61F825C16B43CC.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 15.0,
              "platoon": "2command-ge",
              "orders": 0.0
            },
            "1849302001345581667553DDB953C3DE64A10966969C35510CE2A2BEA6D": {
              "id": "1849302001345581667553DDB953C3DE64A10966969C35510CE2A2BEA6D",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345581667553DDB953C3DE64A10966969C35510CE2A2BEA6D.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345581667553DDB953C3DE64A10966969C35510CE2A2BEA6D.png"
              },
              "contents": [
                {
                  "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455891102F1879467C6380A3B740F1A28E31AB46D109D0DB.png",
                  "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455891675B7487FDE2B3D67A9204DAB4CA6CAFAE71E186EF.png"
                },
                {
                  "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc1849302001345595147E7C86C338A3CE6717FC1E06CCD222F9F9C6583B3.png",
                  "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455952035B7487FDE2B3D67A9204DAB4CA6CAFAE71E186EF.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 10.0,
              "platoon": "2command-ge",
              "orders": 0.0
            },
            "184930200134558440287AA9BA1AE99CA86A9C62E7649705AFA5E4A194A": {
              "id": "184930200134558440287AA9BA1AE99CA86A9C62E7649705AFA5E4A194A",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc184930200134558440287AA9BA1AE99CA86A9C62E7649705AFA5E4A194A.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc184930200134558440287AA9BA1AE99CA86A9C62E7649705AFA5E4A194A.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc184930200134558440287AA9BA1AE99CA86A9C62E7649705AFA5E4A194A.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc184930200134558440287AA9BA1AE99CA86A9C62E7649705AFA5E4A194A.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 15.0,
              "platoon": "2command-ge",
              "orders": 0.0
            },
            "18493020013455908733786A6CDA0E6900B646EF7B2470F92A3E7537445": {
              "id": "18493020013455908733786A6CDA0E6900B646EF7B2470F92A3E7537445",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455908733786A6CDA0E6900B646EF7B2470F92A3E7537445.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455908733786A6CDA0E6900B646EF7B2470F92A3E7537445.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455908733786A6CDA0E6900B646EF7B2470F92A3E7537445.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455908733786A6CDA0E6900B646EF7B2470F92A3E7537445.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 10.0,
              "platoon": "2command-ge",
              "orders": 1.0
            },
            "184930200134559169494416A10D2065457376E45F70349C19683229484": {
              "id": "184930200134559169494416A10D2065457376E45F70349C19683229484",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc184930200134559169494416A10D2065457376E45F70349C19683229484.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc184930200134559169494416A10D2065457376E45F70349C19683229484.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc184930200134559169494416A10D2065457376E45F70349C19683229484.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc184930200134559169494416A10D2065457376E45F70349C19683229484.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 5.0,
              "platoon": "2command-ge",
              "orders": 0.0
            },
            "184930200134559198688A761C4F9841407E18B2EF62A947065B735F1B0": {
              "id": "184930200134559198688A761C4F9841407E18B2EF62A947065B735F1B0",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc184930200134559198688A761C4F9841407E18B2EF62A947065B735F1B0.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc184930200134559198688A761C4F9841407E18B2EF62A947065B735F1B0.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc184930200134559198688A761C4F9841407E18B2EF62A947065B735F1B0.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc184930200134559198688A761C4F9841407E18B2EF62A947065B735F1B0.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 10.0,
              "platoon": "2command-ge",
              "orders": 1.0
            },
            "18493020013455945802ED6E13236A4E55FE6106059F7B013A93DD0AD44": {
              "id": "18493020013455945802ED6E13236A4E55FE6106059F7B013A93DD0AD44",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455945802ED6E13236A4E55FE6106059F7B013A93DD0AD44.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455945802ED6E13236A4E55FE6106059F7B013A93DD0AD44.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455945802ED6E13236A4E55FE6106059F7B013A93DD0AD44.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455945802ED6E13236A4E55FE6106059F7B013A93DD0AD44.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 10.0,
              "platoon": "2command-ge",
              "orders": 0.0
            },
            "18493020013455953781BF6707BD8A1B4EB6F76D1A8D777EA1F41A58DA4": {
              "id": "18493020013455953781BF6707BD8A1B4EB6F76D1A8D777EA1F41A58DA4",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455953781BF6707BD8A1B4EB6F76D1A8D777EA1F41A58DA4.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455953781BF6707BD8A1B4EB6F76D1A8D777EA1F41A58DA4.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345593931744058184847CD0DFB681F98C42457AA42DA0D33.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455953781BF6707BD8A1B4EB6F76D1A8D777EA1F41A58DA4.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 25.0,
              "platoon": "2command-ge",
              "orders": 0.0
            }
          },
          "2": {
            "1849302001345576052A09B9D78EF9C3D8EA74B9B851C2ECA1ADBFAA6DC": {
              "id": "1849302001345576052A09B9D78EF9C3D8EA74B9B851C2ECA1ADBFAA6DC",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345576052A09B9D78EF9C3D8EA74B9B851C2ECA1ADBFAA6DC.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345576052A09B9D78EF9C3D8EA74B9B851C2ECA1ADBFAA6DC.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345576052A09B9D78EF9C3D8EA74B9B851C2ECA1ADBFAA6DC.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345576052A09B9D78EF9C3D8EA74B9B851C2ECA1ADBFAA6DC.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 30.0,
              "platoon": "2command-ge",
              "orders": 0.0
            },
            "184930200134557686336D69A5330FCFA05B2E7A47722F5A1F6BB958FA4": {
              "id": "184930200134557686336D69A5330FCFA05B2E7A47722F5A1F6BB958FA4",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc184930200134557686336D69A5330FCFA05B2E7A47722F5A1F6BB958FA4.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc184930200134557686336D69A5330FCFA05B2E7A47722F5A1F6BB958FA4.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc184930200134557686336D69A5330FCFA05B2E7A47722F5A1F6BB958FA4.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc184930200134557686336D69A5330FCFA05B2E7A47722F5A1F6BB958FA4.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 30.0,
              "platoon": "2command-ge",
              "orders": 0.0
            },
            "18493020013455769219ADE61BB1F559EAB5A46D4476E392AAB3F7D9A8D": {
              "id": "18493020013455769219ADE61BB1F559EAB5A46D4476E392AAB3F7D9A8D",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455769219ADE61BB1F559EAB5A46D4476E392AAB3F7D9A8D.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455769219ADE61BB1F559EAB5A46D4476E392AAB3F7D9A8D.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455769219ADE61BB1F559EAB5A46D4476E392AAB3F7D9A8D.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455769219ADE61BB1F559EAB5A46D4476E392AAB3F7D9A8D.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 25.0,
              "platoon": "2command-ge",
              "orders": 0.0
            },
            "1849302001345581428E251FF46FD43F43D699BE2097B8AD1A4E52FFF33": {
              "id": "1849302001345581428E251FF46FD43F43D699BE2097B8AD1A4E52FFF33",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345581428E251FF46FD43F43D699BE2097B8AD1A4E52FFF33.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345581428E251FF46FD43F43D699BE2097B8AD1A4E52FFF33.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345581428E251FF46FD43F43D699BE2097B8AD1A4E52FFF33.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345581428E251FF46FD43F43D699BE2097B8AD1A4E52FFF33.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 25.0,
              "platoon": "2command-ge",
              "orders": 0.0
            },
            "1849302001345585871A735BD508B53A3CADD727084F122E862875170D6": {
              "id": "1849302001345585871A735BD508B53A3CADD727084F122E862875170D6",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345585871A735BD508B53A3CADD727084F122E862875170D6.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345585871A735BD508B53A3CADD727084F122E862875170D6.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345585871A735BD508B53A3CADD727084F122E862875170D6.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345585871A735BD508B53A3CADD727084F122E862875170D6.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 30.0,
              "platoon": "2command-ge",
              "orders": 0.0
            },
            "18493020013455911391C7500533C2562484B248419E15E460B0B1B8E05": {
              "id": "18493020013455911391C7500533C2562484B248419E15E460B0B1B8E05",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455911391C7500533C2562484B248419E15E460B0B1B8E05.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455911391C7500533C2562484B248419E15E460B0B1B8E05.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455911391C7500533C2562484B248419E15E460B0B1B8E05.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455911391C7500533C2562484B248419E15E460B0B1B8E05.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 30.0,
              "platoon": "2command-ge",
              "orders": 0.0
            },
            "184930200134559407491BD0F697ABF7BD783C9CA2F1E8B8A89475F1076": {
              "id": "184930200134559407491BD0F697ABF7BD783C9CA2F1E8B8A89475F1076",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc184930200134559407491BD0F697ABF7BD783C9CA2F1E8B8A89475F1076.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc184930200134559407491BD0F697ABF7BD783C9CA2F1E8B8A89475F1076.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc184930200134559407491BD0F697ABF7BD783C9CA2F1E8B8A89475F1076.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc184930200134559407491BD0F697ABF7BD783C9CA2F1E8B8A89475F1076.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 40.0,
              "platoon": "2command-ge",
              "orders": 0.0
            },
            "1849302001345595732FEE4D306CE1E13DC23CE4C81C587E546FA27B268": {
              "id": "1849302001345595732FEE4D306CE1E13DC23CE4C81C587E546FA27B268",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345595732FEE4D306CE1E13DC23CE4C81C587E546FA27B268.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345595732FEE4D306CE1E13DC23CE4C81C587E546FA27B268.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345595732FEE4D306CE1E13DC23CE4C81C587E546FA27B268.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345595732FEE4D306CE1E13DC23CE4C81C587E546FA27B268.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 20.0,
              "platoon": "2command-ge",
              "orders": 0.0
            }
          }
        },
        "ft-vehicle": {
          "1": {
            "1849302001345575027B913915A6DFC8D7C75DB37D3426CCDC43326CDD8": {
              "id": "1849302001345575027B913915A6DFC8D7C75DB37D3426CCDC43326CDD8",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455750791D9B7B88E1206FC3884DBD59BD61FD8FDBF58725.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455750791D9B7B88E1206FC3884DBD59BD61FD8FDBF58725.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455751355D811DFDA049C7E8E774342B154F14D4C933F295.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345575206E7F317CCDA685D1CF930A6F195EB96F4ECABEA37.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 90.0,
              "platoon": "2command-ge",
              "orders": 0.0
            }
          }
        },
        "ft-inf": {
          "2": {
            "184930200134557592218EBAF36DC4D80C52E27CA09CD31E03355593006": {
              "id": "184930200134557592218EBAF36DC4D80C52E27CA09CD31E03355593006",
              "recruit": {
                "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455759867519EF024492464EB65101D0FB2C8286DC380598.png",
                "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455759867519EF024492464EB65101D0FB2C8286DC380598.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345575681D361E93ECEE4A236097F036D69454051F4E903AA.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455757977BE9FB8199F45645F147D0F9DB1CB5890E7A346F.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 50.0,
              "platoon": "2command-ge",
              "orders": 0.0
            },
            "1849302001345589607849619F31D33F5B645F51DCEBFAB9DBAFD50CCD8": {
              "id": "1849302001345589607849619F31D33F5B645F51DCEBFAB9DBAFD50CCD8",
              "recruit": {
                "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc184930200134558967780E84160F343163F5599C418343522E9A7CFD91F.png",
                "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc184930200134558967780E84160F343163F5599C418343522E9A7CFD91F.png"
              },
              "contents": [
                {
                  "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc1849302001345583894F1CBC548C904258E43ABA0B5D2D2F9B16A4B996A.png",
                  "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc1849302001345583953477764E91464881808FBAA106C2518415F469EF8.png"
                },
                {
                  "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc1849302001345583894F1CBC548C904258E43ABA0B5D2D2F9B16A4B996A.png",
                  "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc1849302001345583953477764E91464881808FBAA106C2518415F469EF8.png"
                },
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345594258CD281134F8D5B96D44AB4EE195D38BEE1A1BE5E8.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345594306E41F5EB32014AA01417EBC5BF8438437AAED42A9.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 60.0,
              "platoon": "2command-ge",
              "orders": 0.0
            }
          }
        }
      },
      "festungs-bwr": {
        "rc-plat": {
          "M2*-D1-0-D1-D2": {
            "184930200134558280032C44888648C1B3CF8931927F8CDC80ED273C45F": {
              "id": "184930200134558280032C44888648C1B3CF8931927F8CDC80ED273C45F",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345582865B49F2C1E01E4AA52204F7920538E9350105EA061.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345582865B49F2C1E01E4AA52204F7920538E9350105EA061.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345579165B9970B6CC2BA6A6CA6D46E2A55100166BB85AB9F.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345579207FF0C33CE54FD5CB5E26883C61F6F45B07D40FFAA.png"
                },
                {
                  "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455817771DDD4280D0EB552CBB285ED32BD4EB1C1DAF7C3D.png",
                  "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455818865B7487FDE2B3D67A9204DAB4CA6CAFAE71E186EF.png"
                },
                {
                  "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc1849302001345580888DEBF439CBC8C9F31CA7AF1AB8557215998B07FA7.png",
                  "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc1849302001345580939E5965240FFBF475CD3DC8A5DF3A56ADF6395E00D.png"
                },
                {
                  "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc1849302001345581030FE17EAF6399E22F9592B2FFA33311B2858067B2E.png",
                  "back": NaN
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 1,
                "D1": 2,
                "D2": 1,
                "G1": 0,
                "G2": 0
              },
              "type": "rc-plat",
              "subtype": "M2*-D1-0-D1-D2",
              "size": NaN,
              "slots": "M2*-D1-0-D1-D2",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 70.0,
              "platoon": "festungs-bwr",
              "orders": 0.0
            }
          }
        },
        "ft-inf": {
          "2": {
            "1849302001345584441D1A3F744EBF8C352A2DCD4BF74ADC8077358D07C": {
              "id": "1849302001345584441D1A3F744EBF8C352A2DCD4BF74ADC8077358D07C",
              "recruit": {
                "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc1849302001345584486BCDE285AD06A1A02A9B99052D2184431695CCF15.png",
                "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc1849302001345584486BCDE285AD06A1A02A9B99052D2184431695CCF15.png"
              },
              "contents": [
                {
                  "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455817771DDD4280D0EB552CBB285ED32BD4EB1C1DAF7C3D.png",
                  "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455818865B7487FDE2B3D67A9204DAB4CA6CAFAE71E186EF.png"
                },
                {
                  "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc1849302001345580888DEBF439CBC8C9F31CA7AF1AB8557215998B07FA7.png",
                  "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc1849302001345580939E5965240FFBF475CD3DC8A5DF3A56ADF6395E00D.png"
                },
                {
                  "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc1849302001345586186A0AC8E59EC7CCB7978621A50078427474BF7B874.png",
                  "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc1849302001345586230FAA17897679DB8B5AEB002D2E6CFB55894D03558.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 45.0,
              "platoon": "festungs-bwr",
              "orders": 0.0
            },
            "1849302001345585596EAA23C9AE4EC3D4283F5C3B20507A0B275091EDE": {
              "id": "1849302001345585596EAA23C9AE4EC3D4283F5C3B20507A0B275091EDE",
              "recruit": {
                "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455856732336C29EF71FEC6FA66CDE6B22A4E9A659A85F84.png",
                "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455856732336C29EF71FEC6FA66CDE6B22A4E9A659A85F84.png"
              },
              "contents": [
                {
                  "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455817771DDD4280D0EB552CBB285ED32BD4EB1C1DAF7C3D.png",
                  "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455818865B7487FDE2B3D67A9204DAB4CA6CAFAE71E186EF.png"
                },
                {
                  "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc1849302001345580888DEBF439CBC8C9F31CA7AF1AB8557215998B07FA7.png",
                  "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc1849302001345580939E5965240FFBF475CD3DC8A5DF3A56ADF6395E00D.png"
                },
                {
                  "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc1849302001345581030FE17EAF6399E22F9592B2FFA33311B2858067B2E.png",
                  "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc1849302001345581074A2EB2BE022D597A8B22E1F81D7002FFE8C2804D0.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 45.0,
              "platoon": "festungs-bwr",
              "orders": 0.0
            }
          }
        }
      },
      "panzergrenadiere-bw": {
        "rc-plat": {
          "M2*-G1-0-G1-D2": {
            "18493020013455865776C7CAAD8512179E05BC855CCEE4EBA9B32A077F4": {
              "id": "18493020013455865776C7CAAD8512179E05BC855CCEE4EBA9B32A077F4",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345586691435A0E7030933C11C0BD44E73D63EB8447316EBA.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345586691435A0E7030933C11C0BD44E73D63EB8447316EBA.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345596442B09617BF8B59B3E0841D7615D3D2A9CB8938FAD1.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455964927D4F2EDB2659AC80F232906706EDE9E1D2DA0D9E.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 1,
                "D1": 0,
                "D2": 1,
                "G1": 2,
                "G2": 0
              },
              "type": "rc-plat",
              "subtype": "M2*-G1-0-G1-D2",
              "size": NaN,
              "slots": "M2*-G1-0-G1-D2",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 70.0,
              "platoon": "panzergrenadiere-bw",
              "orders": 2.0
            }
          }
        },
        "ft-vehicle": {
          "1": {
            "18493020013455911801376174E309C33BE7C6649E12716D1571C96BA77": {
              "id": "18493020013455911801376174E309C33BE7C6649E12716D1571C96BA77",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455912306266B478A6CC17CC3143D5FAE3EB4EAF30ED45A6.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455912306266B478A6CC17CC3143D5FAE3EB4EAF30ED45A6.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc184930200134558924105FCEE7CF5B3BD9D18818DA24969EE6B258D3A16.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345589294D991AC0C0674BD8858AE7AAD5545165D1D2491B6.png"
                },
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345587919564E63DDD93E5043A9A34604B7B675CBFD048488.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345587976D3310E294FB489EB060D38C5ABDF1FCAB5496282.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 60.0,
              "platoon": "panzergrenadiere-bw",
              "orders": 0.0
            }
          }
        },
        "ft-inf": {
          "2": {
            "18493020013455851685164AFD5583DED1F0F2D440460418BC4ACEC591E": {
              "id": "18493020013455851685164AFD5583DED1F0F2D440460418BC4ACEC591E",
              "recruit": {
                "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc184930200134558521493584602E0E969BEC0D599FF85D6904C82DD0B76.png",
                "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc184930200134558521493584602E0E969BEC0D599FF85D6904C82DD0B76.png"
              },
              "contents": [
                {
                  "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc184930200134557761239D758D2D2A109730C8F6A463B00C1B167DCF98D.png",
                  "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455818865B7487FDE2B3D67A9204DAB4CA6CAFAE71E186EF.png"
                },
                {
                  "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc184930200134557960798D7A088B719CFBAE7E1B71A5E055AB80D16182B.png",
                  "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc184930200134557965865DB82790146BC744B78F4B7B26BDAC43C89DD8C.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 50.0,
              "platoon": "panzergrenadiere-bw",
              "orders": 0.0
            },
            "18493020013455948551C4E1AC21CE5AAE20A3D3EB85CDAE9AE8F373411": {
              "id": "18493020013455948551C4E1AC21CE5AAE20A3D3EB85CDAE9AE8F373411",
              "recruit": {
                "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc1849302001345594903574729693589D35CBC8AA110C9A1F59A24F4C765.png",
                "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc1849302001345594903574729693589D35CBC8AA110C9A1F59A24F4C765.png"
              },
              "contents": [
                {
                  "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc184930200134557761239D758D2D2A109730C8F6A463B00C1B167DCF98D.png",
                  "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455818865B7487FDE2B3D67A9204DAB4CA6CAFAE71E186EF.png"
                },
                {
                  "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc184930200134557960798D7A088B719CFBAE7E1B71A5E055AB80D16182B.png",
                  "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc184930200134557965865DB82790146BC744B78F4B7B26BDAC43C89DD8C.png"
                },
                {
                  "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc1849302001345594160E1D7F6ECDCD1B6D1E88F8FE8CD8766E6029907D1.png",
                  "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455942081D14956BD17E7EBB31A6089044CFEE07CA54F906.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 45.0,
              "platoon": "panzergrenadiere-bw",
              "orders": 0.0
            }
          }
        }
      },
      "panzergrenadiere-gw": {
        "rc-plat": {
          "M2*-G1-0-G1-D2": {
            "1849302001345581472FEA27B6A2A9CF7F7EE52A67E48FF49D1D05EC936": {
              "id": "1849302001345581472FEA27B6A2A9CF7F7EE52A67E48FF49D1D05EC936",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc184930200134558158248BB794C344D1B71FE1E6AC112ADE63566140539.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc184930200134558158248BB794C344D1B71FE1E6AC112ADE63566140539.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455956369017E4460D61DC54102007F5023DE3D2F800EC5A.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345595683176B0DCEBB61092E07850E96DE88569A7A101953.png"
                },
                {
                  "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc184930200134557912136CF49069F4395A242BB1EC3C6AFF2D641AA5454.png",
                  "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455818865B7487FDE2B3D67A9204DAB4CA6CAFAE71E186EF.png"
                },
                {
                  "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc1849302001345583399300FEA3FFF7FF6327FDE66224F9F6AFE362D7B01.png",
                  "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc1849302001345583447006F10764F0E8CA98FA5A6887252A539B2E7FC36.png"
                },
                {
                  "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455835411E9A49C7346E59526A5B13F67FD1D9E9B83A32D8.png",
                  "back": NaN
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 1,
                "D1": 0,
                "D2": 1,
                "G1": 2,
                "G2": 0
              },
              "type": "rc-plat",
              "subtype": "M2*-G1-0-G1-D2",
              "size": NaN,
              "slots": "M2*-G1-0-G1-D2",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 65.0,
              "platoon": "panzergrenadiere-gw",
              "orders": 2.0
            }
          }
        },
        "ft-inf": {
          "2": {
            "1849302001345580283717EC333BB72FD71FFF76F60D6FCFA4BA4410C3A": {
              "id": "1849302001345580283717EC333BB72FD71FFF76F60D6FCFA4BA4410C3A",
              "recruit": {
                "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455803491AB6095A90C34693B93E18E9C41BF9A5098D5B38.png",
                "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455803491AB6095A90C34693B93E18E9C41BF9A5098D5B38.png"
              },
              "contents": [
                {
                  "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc184930200134557912136CF49069F4395A242BB1EC3C6AFF2D641AA5454.png",
                  "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455818865B7487FDE2B3D67A9204DAB4CA6CAFAE71E186EF.png"
                },
                {
                  "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc1849302001345583399300FEA3FFF7FF6327FDE66224F9F6AFE362D7B01.png",
                  "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc1849302001345583447006F10764F0E8CA98FA5A6887252A539B2E7FC36.png"
                },
                {
                  "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455835411E9A49C7346E59526A5B13F67FD1D9E9B83A32D8.png",
                  "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455836004E05277E78E649C4E37660679AFE76B37AD02042.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 45.0,
              "platoon": "panzergrenadiere-gw",
              "orders": 0.0
            },
            "18493020013455868686C294A2A05884281958D5CF8C39FB3E317B6C825": {
              "id": "18493020013455868686C294A2A05884281958D5CF8C39FB3E317B6C825",
              "recruit": {
                "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc1849302001345586913E354F117E21F797A5CD98BA2788DB49365989F09.png",
                "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc1849302001345586913E354F117E21F797A5CD98BA2788DB49365989F09.png"
              },
              "contents": [
                {
                  "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc1849302001345583399300FEA3FFF7FF6327FDE66224F9F6AFE362D7B01.png",
                  "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc1849302001345583447006F10764F0E8CA98FA5A6887252A539B2E7FC36.png"
                },
                {
                  "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455835411E9A49C7346E59526A5B13F67FD1D9E9B83A32D8.png",
                  "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455836004E05277E78E649C4E37660679AFE76B37AD02042.png"
                },
                {
                  "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455835411E9A49C7346E59526A5B13F67FD1D9E9B83A32D8.png",
                  "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455836004E05277E78E649C4E37660679AFE76B37AD02042.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 50.0,
              "platoon": "panzergrenadiere-gw",
              "orders": 0.0
            },
            "18493020013455872761684858EDC480AD9957420965B15A69331F2A718": {
              "id": "18493020013455872761684858EDC480AD9957420965B15A69331F2A718",
              "recruit": {
                "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc1849302001345587320A42D17128EBE120785E6725CAE59A78C5903614C.png",
                "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc1849302001345587320A42D17128EBE120785E6725CAE59A78C5903614C.png"
              },
              "contents": [
                {
                  "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc184930200134557912136CF49069F4395A242BB1EC3C6AFF2D641AA5454.png",
                  "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455818865B7487FDE2B3D67A9204DAB4CA6CAFAE71E186EF.png"
                },
                {
                  "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc184930200134557912136CF49069F4395A242BB1EC3C6AFF2D641AA5454.png",
                  "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455818865B7487FDE2B3D67A9204DAB4CA6CAFAE71E186EF.png"
                },
                {
                  "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc1849302001345585358655945A04717AD260DEB4FA5FD0DD3276C61795A.png",
                  "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455840615B7487FDE2B3D67A9204DAB4CA6CAFAE71E186EF.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 40.0,
              "platoon": "panzergrenadiere-gw",
              "orders": 0.0
            }
          }
        }
      },
      "panzergrenadiere-ow": {
        "rc-plat": {
          "M2*-G1-0-G1-D2": {
            "18493020013455961321F394F76755EF80145741826028CE948809E66E4": {
              "id": "18493020013455961321F394F76755EF80145741826028CE948809E66E4",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345596207CFE866625FACE5519465A549B4AE2E7D97B6D9F2.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345596207CFE866625FACE5519465A549B4AE2E7D97B6D9F2.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc184930200134559010393B474EB027764D7F57771C223E8BEDFC4BE5D4A.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc184930200134559015897B7669F794B80F2B22AEFF5904572A8E8A306E3.png"
                },
                {
                  "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc184930200134557912136CF49069F4395A242BB1EC3C6AFF2D641AA5454.png",
                  "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455818865B7487FDE2B3D67A9204DAB4CA6CAFAE71E186EF.png"
                },
                {
                  "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455825754E2120966AD77203D0D4BDFB3BD436E0BE8E4E01.png",
                  "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455826211D95702F87C2E61F8D5A1D4B7048BA0FDCA0DAF3.png"
                },
                {
                  "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455776959810521F6BE8EB94A4B7A7A5C22D1060318AADCA.png",
                  "back": NaN
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 1,
                "D1": 0,
                "D2": 1,
                "G1": 2,
                "G2": 0
              },
              "type": "rc-plat",
              "subtype": "M2*-G1-0-G1-D2",
              "size": NaN,
              "slots": "M2*-G1-0-G1-D2",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 65.0,
              "platoon": "panzergrenadiere-ow",
              "orders": 2.0
            }
          }
        },
        "ft-inf": {
          "2": {
            "18493020013455799999FD2FDCFAFDAFFF5873C5F860174EF0113C0B803": {
              "id": "18493020013455799999FD2FDCFAFDAFFF5873C5F860174EF0113C0B803",
              "recruit": {
                "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc1849302001345580055ED59A77EFA6A4EDA4CE49323A185D348DE6E7348.png",
                "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc1849302001345580055ED59A77EFA6A4EDA4CE49323A185D348DE6E7348.png"
              },
              "contents": [
                {
                  "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc1849302001345512087FD09552176C7361AE1D5E76C212FCF7B4D277E6E.png",
                  "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455121565B7487FDE2B3D67A9204DAB4CA6CAFAE71E186EF.png"
                },
                {
                  "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455825754E2120966AD77203D0D4BDFB3BD436E0BE8E4E01.png",
                  "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455826211D95702F87C2E61F8D5A1D4B7048BA0FDCA0DAF3.png"
                },
                {
                  "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455776959810521F6BE8EB94A4B7A7A5C22D1060318AADCA.png",
                  "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455777358A80B64D1B73DD757382DEC1AAEE61900D92BCEC.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 45.0,
              "platoon": "panzergrenadiere-ow",
              "orders": 0.0
            },
            "18493020013455967052B7560DABC68DB949E64AC843D2E9086647F60CF": {
              "id": "18493020013455967052B7560DABC68DB949E64AC843D2E9086647F60CF",
              "recruit": {
                "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455968433C5375892A48593852064B592D1F66A2BC6E29DF.png",
                "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455968433C5375892A48593852064B592D1F66A2BC6E29DF.png"
              },
              "contents": [
                {
                  "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455825754E2120966AD77203D0D4BDFB3BD436E0BE8E4E01.png",
                  "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455826211D95702F87C2E61F8D5A1D4B7048BA0FDCA0DAF3.png"
                },
                {
                  "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455776959810521F6BE8EB94A4B7A7A5C22D1060318AADCA.png",
                  "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455777358A80B64D1B73DD757382DEC1AAEE61900D92BCEC.png"
                },
                {
                  "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc184930200134558183409C50066324238A743A6E000DB6EEDF16C85E06A.png",
                  "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455818865B7487FDE2B3D67A9204DAB4CA6CAFAE71E186EF.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 60.0,
              "platoon": "panzergrenadiere-ow",
              "orders": 0.0
            },
            "184930200134558850319540CAD2B67BB3D4EFAA20BEE1532B6D9FF88CC": {
              "id": "184930200134558850319540CAD2B67BB3D4EFAA20BEE1532B6D9FF88CC",
              "recruit": {
                "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc184930200134558855525E4A5066428FA72115A3BD6A662336969C0E26B.png",
                "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc184930200134558855525E4A5066428FA72115A3BD6A662336969C0E26B.png"
              },
              "contents": [
                {
                  "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455825754E2120966AD77203D0D4BDFB3BD436E0BE8E4E01.png",
                  "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455826211D95702F87C2E61F8D5A1D4B7048BA0FDCA0DAF3.png"
                },
                {
                  "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455825754E2120966AD77203D0D4BDFB3BD436E0BE8E4E01.png",
                  "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455826211D95702F87C2E61F8D5A1D4B7048BA0FDCA0DAF3.png"
                },
                {
                  "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455776959810521F6BE8EB94A4B7A7A5C22D1060318AADCA.png",
                  "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455777358A80B64D1B73DD757382DEC1AAEE61900D92BCEC.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 55.0,
              "platoon": "panzergrenadiere-ow",
              "orders": 0.0
            }
          }
        }
      },
      "kampfgruppe-bbb": {
        "rc-plat": {
          "M1-M1-0-M2-M1": {
            "184930200134558216956DB1523D6F4578FF2F9FA4598AD8F6336011119": {
              "id": "184930200134558216956DB1523D6F4578FF2F9FA4598AD8F6336011119",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc184930200134558224265272B6E2305EE1B7418D8BD1A97336D8C8FFB60.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc184930200134558224265272B6E2305EE1B7418D8BD1A97336D8C8FFB60.png"
              },
              "contents": [
                {
                  "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455820803B193096F04764F744F8516440C13524C5EFA7D8.png",
                  "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc1849302001345582129F7FCFD0C34BA345B016FE64E383CD9BFE5691FBA.png"
                },
                {
                  "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455820803B193096F04764F744F8516440C13524C5EFA7D8.png",
                  "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc1849302001345582129F7FCFD0C34BA345B016FE64E383CD9BFE5691FBA.png"
                },
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc184930200134559525375CEFFA2DDDEF3D56C28E0D63503507A413C2664.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455953222F785E9D77E46B8F802416480ED225A30589FF9E.png"
                },
                {
                  "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455850134475B2C4BEA2570965240BA19A6CD63A0E3116F4.png",
                  "back": NaN
                },
                {
                  "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc1849302001345594746D1C85569673C08F37AB83A902F26C69E809606B3.png",
                  "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455948078309B5F64954C823401B57EC6D60F6AF2BB24C0E.png"
                }
              ],
              "available_slots": {
                "M1": 3,
                "M2": 1,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "rc-plat",
              "subtype": "M1-M1-0-M2-M1",
              "size": NaN,
              "slots": "M1-M1-0-M2-M1",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 105.0,
              "platoon": "kampfgruppe-bbb",
              "orders": 2.0
            }
          }
        },
        "ft-inf": {
          "1": {
            "18493020013455935122DCFE8E64FA6C30D13452FDB457F2978280036C0": {
              "id": "18493020013455935122DCFE8E64FA6C30D13452FDB457F2978280036C0",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345593563678ED24008980856302AF952BA257C2B3189CFA8.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345593563678ED24008980856302AF952BA257C2B3189CFA8.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345586349C64D5941CE219C0A4AA100E29EA6EFFD558F99A3.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345586400BB9578A6F57E6EAD046A2A08D66C77C51800FA92.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 25.0,
              "platoon": "kampfgruppe-bbb",
              "orders": 0.0
            },
            "18493020013455842089F95AF6947B4C0E4D3A21186EF40A0CF2E3C4A03": {
              "id": "18493020013455842089F95AF6947B4C0E4D3A21186EF40A0CF2E3C4A03",
              "recruit": {
                "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455842482266A8DFC79487E2A9F4AC9EF8AAFFC0AEFF3E9B.png",
                "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455842482266A8DFC79487E2A9F4AC9EF8AAFFC0AEFF3E9B.png"
              },
              "contents": [
                {
                  "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455887619CBEE5278E38DD7D5A91B5A6543D3F2C48EA3C8D.png",
                  "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc1849302001345588806AC23CD36A9C8D701432D357A6AA24044DBE985C7.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 20.0,
              "platoon": "kampfgruppe-bbb",
              "orders": 0.0
            },
            "1849302001345587837D3B754648ECCC1867166012AB6FF97DEFC1CC049": {
              "id": "1849302001345587837D3B754648ECCC1867166012AB6FF97DEFC1CC049",
              "recruit": {
                "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc1849302001345587880DABF48C71A69FBF504C15039ECCBD91475DDCCC4.png",
                "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc1849302001345587880DABF48C71A69FBF504C15039ECCBD91475DDCCC4.png"
              },
              "contents": [
                {
                  "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc1849302001345583646A1914D95B00BE92B5390D64041554FFE93D8276A.png",
                  "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc184930200134558370419F21039D1B5BB81A3035DC06D8929B555CBB555.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 20.0,
              "platoon": "kampfgruppe-bbb",
              "orders": 0.0
            },
            "1849302001345592080982765C10ABD986E513A4C97ED2CED0B01906B66": {
              "id": "1849302001345592080982765C10ABD986E513A4C97ED2CED0B01906B66",
              "recruit": {
                "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc184930200134559215623AFB4D3F60378ABA0CF9D7DA3F6DB3F389993FE.png",
                "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc184930200134559215623AFB4D3F60378ABA0CF9D7DA3F6DB3F389993FE.png"
              },
              "contents": [
                {
                  "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455902011D55E54FE065DCD6D8E428CC3004711CE270E6DA.png",
                  "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455903695B7487FDE2B3D67A9204DAB4CA6CAFAE71E186EF.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 20.0,
              "platoon": "kampfgruppe-bbb",
              "orders": 0.0
            }
          }
        }
      },
      "bbb": {
        "gear": {
          "1": {
            "18493020013455963820495E092604618F1281A7D702FAA1BA43C631256": {
              "id": "18493020013455963820495E092604618F1281A7D702FAA1BA43C631256",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455963820495E092604618F1281A7D702FAA1BA43C631256.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455963820495E092604618F1281A7D702FAA1BA43C631256.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455963820495E092604618F1281A7D702FAA1BA43C631256.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455963820495E092604618F1281A7D702FAA1BA43C631256.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 10.0,
              "platoon": "bbb",
              "orders": 0.0
            },
            "18493020013455837564676C163ED5D788244DF164337BB59F4ED284AD5": {
              "id": "18493020013455837564676C163ED5D788244DF164337BB59F4ED284AD5",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455837564676C163ED5D788244DF164337BB59F4ED284AD5.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455837564676C163ED5D788244DF164337BB59F4ED284AD5.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455837564676C163ED5D788244DF164337BB59F4ED284AD5.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455837564676C163ED5D788244DF164337BB59F4ED284AD5.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 30.0,
              "platoon": "bbb",
              "orders": 0.0
            },
            "18493020013455880279503BD4CCB28858A880F3B962110FD573C8E4F6E": {
              "id": "18493020013455880279503BD4CCB28858A880F3B962110FD573C8E4F6E",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455880279503BD4CCB28858A880F3B962110FD573C8E4F6E.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455880279503BD4CCB28858A880F3B962110FD573C8E4F6E.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455880279503BD4CCB28858A880F3B962110FD573C8E4F6E.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455880279503BD4CCB28858A880F3B962110FD573C8E4F6E.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 10.0,
              "platoon": "bbb",
              "orders": 0.0
            },
            "18493020013455883402A974373E535E7698166700790F6EC27CEAF3B66": {
              "id": "18493020013455883402A974373E535E7698166700790F6EC27CEAF3B66",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455883402A974373E535E7698166700790F6EC27CEAF3B66.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455883402A974373E535E7698166700790F6EC27CEAF3B66.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455883402A974373E535E7698166700790F6EC27CEAF3B66.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455883402A974373E535E7698166700790F6EC27CEAF3B66.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 15.0,
              "platoon": "bbb",
              "orders": 0.0
            },
            "1849302001345589752C272C6F6DC468A70AF22E0E01DF1C5CE88BE7134": {
              "id": "1849302001345589752C272C6F6DC468A70AF22E0E01DF1C5CE88BE7134",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345589752C272C6F6DC468A70AF22E0E01DF1C5CE88BE7134.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345589752C272C6F6DC468A70AF22E0E01DF1C5CE88BE7134.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345589752C272C6F6DC468A70AF22E0E01DF1C5CE88BE7134.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345589752C272C6F6DC468A70AF22E0E01DF1C5CE88BE7134.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 10.0,
              "platoon": "bbb",
              "orders": 0.0
            },
            "1849302001345589807E7AC474E5FF30F0CB88621A58F56900E3D391072": {
              "id": "1849302001345589807E7AC474E5FF30F0CB88621A58F56900E3D391072",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345589807E7AC474E5FF30F0CB88621A58F56900E3D391072.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345589807E7AC474E5FF30F0CB88621A58F56900E3D391072.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345589807E7AC474E5FF30F0CB88621A58F56900E3D391072.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345589807E7AC474E5FF30F0CB88621A58F56900E3D391072.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 20.0,
              "platoon": "bbb",
              "orders": 0.0
            }
          }
        }
      },
      "brb": {
        "gear": {
          "1": {
            "1849302001345575282E9D4AEA8994445FD14FF03F3121D573D7429D079": {
              "id": "1849302001345575282E9D4AEA8994445FD14FF03F3121D573D7429D079",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345575282E9D4AEA8994445FD14FF03F3121D573D7429D079.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345575282E9D4AEA8994445FD14FF03F3121D573D7429D079.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345575282E9D4AEA8994445FD14FF03F3121D573D7429D079.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345575282E9D4AEA8994445FD14FF03F3121D573D7429D079.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 15.0,
              "platoon": "brb",
              "orders": 0.0
            },
            "184930200134557533401F7213947E7680FB848FFA4CA95A4B8ACEDF64E": {
              "id": "184930200134557533401F7213947E7680FB848FFA4CA95A4B8ACEDF64E",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc184930200134557533401F7213947E7680FB848FFA4CA95A4B8ACEDF64E.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc184930200134557533401F7213947E7680FB848FFA4CA95A4B8ACEDF64E.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc184930200134557533401F7213947E7680FB848FFA4CA95A4B8ACEDF64E.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc184930200134557533401F7213947E7680FB848FFA4CA95A4B8ACEDF64E.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 10.0,
              "platoon": "brb",
              "orders": 0.0
            },
            "18493020013455754440DAF6C2875DE9D7E5503E216D2D16E19EAD7897B": {
              "id": "18493020013455754440DAF6C2875DE9D7E5503E216D2D16E19EAD7897B",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455754440DAF6C2875DE9D7E5503E216D2D16E19EAD7897B.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455754440DAF6C2875DE9D7E5503E216D2D16E19EAD7897B.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455754440DAF6C2875DE9D7E5503E216D2D16E19EAD7897B.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455754440DAF6C2875DE9D7E5503E216D2D16E19EAD7897B.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 10.0,
              "platoon": "brb",
              "orders": 0.0
            },
            "18493020013455755644B391A14E25CAFAC34134E7BF73A92AF650EF0E5": {
              "id": "18493020013455755644B391A14E25CAFAC34134E7BF73A92AF650EF0E5",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455755644B391A14E25CAFAC34134E7BF73A92AF650EF0E5.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455755644B391A14E25CAFAC34134E7BF73A92AF650EF0E5.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455755644B391A14E25CAFAC34134E7BF73A92AF650EF0E5.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455755644B391A14E25CAFAC34134E7BF73A92AF650EF0E5.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 5.0,
              "platoon": "brb",
              "orders": 0.0
            }
          }
        }
      },
      "bwb": {
        "gear": {
          "1": {
            "1849302001345573316196D4F144CFBF877DFD6CB17A04C49407D098EFA": {
              "id": "1849302001345573316196D4F144CFBF877DFD6CB17A04C49407D098EFA",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345573316196D4F144CFBF877DFD6CB17A04C49407D098EFA.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345573316196D4F144CFBF877DFD6CB17A04C49407D098EFA.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345573316196D4F144CFBF877DFD6CB17A04C49407D098EFA.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345573316196D4F144CFBF877DFD6CB17A04C49407D098EFA.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 25.0,
              "platoon": "bwb",
              "orders": 0.0
            }
          }
        }
      },
      "bwr": {
        "gear": {
          "1": {
            "184930200134558592346A3B0219726225BBDC75CC9D8FFB4C94887AEDF": {
              "id": "184930200134558592346A3B0219726225BBDC75CC9D8FFB4C94887AEDF",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc184930200134558592346A3B0219726225BBDC75CC9D8FFB4C94887AEDF.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc184930200134558592346A3B0219726225BBDC75CC9D8FFB4C94887AEDF.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc184930200134558592346A3B0219726225BBDC75CC9D8FFB4C94887AEDF.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc184930200134558592346A3B0219726225BBDC75CC9D8FFB4C94887AEDF.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 20.0,
              "platoon": "bwr",
              "orders": 0.0
            }
          }
        }
      },
      "gwg": {
        "gear": {
          "1": {
            "1849302001345580238D91A3850A4340EF4082779670EC27B9201BDC189": {
              "id": "1849302001345580238D91A3850A4340EF4082779670EC27B9201BDC189",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345580238D91A3850A4340EF4082779670EC27B9201BDC189.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345580238D91A3850A4340EF4082779670EC27B9201BDC189.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345580238D91A3850A4340EF4082779670EC27B9201BDC189.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345580238D91A3850A4340EF4082779670EC27B9201BDC189.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 20.0,
              "platoon": "gwg",
              "orders": 0.0
            },
            "1849302001345582035DE3011A96F285C6F044B3C5CEAC120DB2FF94CC7": {
              "id": "1849302001345582035DE3011A96F285C6F044B3C5CEAC120DB2FF94CC7",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345582035DE3011A96F285C6F044B3C5CEAC120DB2FF94CC7.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345582035DE3011A96F285C6F044B3C5CEAC120DB2FF94CC7.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345582035DE3011A96F285C6F044B3C5CEAC120DB2FF94CC7.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345582035DE3011A96F285C6F044B3C5CEAC120DB2FF94CC7.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 15.0,
              "platoon": "gwg",
              "orders": 0.0
            },
            "1849302001345588291BD91CFA2D7155CD52AD0DC2BC282605203279266": {
              "id": "1849302001345588291BD91CFA2D7155CD52AD0DC2BC282605203279266",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345588291BD91CFA2D7155CD52AD0DC2BC282605203279266.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345588291BD91CFA2D7155CD52AD0DC2BC282605203279266.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345588291BD91CFA2D7155CD52AD0DC2BC282605203279266.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345588291BD91CFA2D7155CD52AD0DC2BC282605203279266.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 10.0,
              "platoon": "gwg",
              "orders": 0.0
            },
            "1849302001345592588B6668592C16E537CAB1824667F0FB348382AE9CB": {
              "id": "1849302001345592588B6668592C16E537CAB1824667F0FB348382AE9CB",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345592588B6668592C16E537CAB1824667F0FB348382AE9CB.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345592588B6668592C16E537CAB1824667F0FB348382AE9CB.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345592588B6668592C16E537CAB1824667F0FB348382AE9CB.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345592588B6668592C16E537CAB1824667F0FB348382AE9CB.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 10.0,
              "platoon": "gwg",
              "orders": 0.0
            },
            "1849302001345594953BAA13A404B6911B2823E2F8083BF1A9069A1FAEE": {
              "id": "1849302001345594953BAA13A404B6911B2823E2F8083BF1A9069A1FAEE",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345594953BAA13A404B6911B2823E2F8083BF1A9069A1FAEE.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345594953BAA13A404B6911B2823E2F8083BF1A9069A1FAEE.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345594953BAA13A404B6911B2823E2F8083BF1A9069A1FAEE.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345594953BAA13A404B6911B2823E2F8083BF1A9069A1FAEE.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 10.0,
              "platoon": "gwg",
              "orders": 0.0
            }
          }
        }
      },
      "owo": {
        "gear": {
          "1": {
            "1849302001345583230E7B286FC5807E7F66F4C6D3B44671D9CDA82801F": {
              "id": "1849302001345583230E7B286FC5807E7F66F4C6D3B44671D9CDA82801F",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345583230E7B286FC5807E7F66F4C6D3B44671D9CDA82801F.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345583230E7B286FC5807E7F66F4C6D3B44671D9CDA82801F.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345583230E7B286FC5807E7F66F4C6D3B44671D9CDA82801F.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc1849302001345583230E7B286FC5807E7F66F4C6D3B44671D9CDA82801F.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 5.0,
              "platoon": "owo",
              "orders": 0.0
            },
            "18493020013455922414C0F8A98E7FADCEDFF02D2FD82B81FF9ABB2A233": {
              "id": "18493020013455922414C0F8A98E7FADCEDFF02D2FD82B81FF9ABB2A233",
              "recruit": {
                "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455922414C0F8A98E7FADCEDFF02D2FD82B81FF9ABB2A233.png",
                "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455922414C0F8A98E7FADCEDFF02D2FD82B81FF9ABB2A233.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455922414C0F8A98E7FADCEDFF02D2FD82B81FF9ABB2A233.png",
                  "back": "res/tiles/V1-GE/httpcloud3steamusercontentcomugc18493020013455922414C0F8A98E7FADCEDFF02D2FD82B81FF9ABB2A233.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 10.0,
              "platoon": "owo",
              "orders": 0.0
            }
          }
        }
      },
      "festungs-owr": {
        "ft-inf": {
          "2": {
            "1849302001345584116CF9B9021D5140DC8304586E2B861F1B3DF7EC1BF": {
              "id": "1849302001345584116CF9B9021D5140DC8304586E2B861F1B3DF7EC1BF",
              "recruit": {
                "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc1849302001345584165D41E789E91DA6BAA66412BAE4F673F12F364C92D.png",
                "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc1849302001345584165D41E789E91DA6BAA66412BAE4F673F12F364C92D.png"
              },
              "contents": [
                {
                  "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc1849302001345581030FE17EAF6399E22F9592B2FFA33311B2858067B2E.png",
                  "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc1849302001345581074A2EB2BE022D597A8B22E1F81D7002FFE8C2804D0.png"
                },
                {
                  "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc1849302001345581030FE17EAF6399E22F9592B2FFA33311B2858067B2E.png",
                  "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc1849302001345581074A2EB2BE022D597A8B22E1F81D7002FFE8C2804D0.png"
                },
                {
                  "front": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455817771DDD4280D0EB552CBB285ED32BD4EB1C1DAF7C3D.png",
                  "back": "res/tiles\\V1-GE\\httpcloud3steamusercontentcomugc18493020013455818865B7487FDE2B3D67A9204DAB4CA6CAFAE71E186EF.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "GE",
              "cost": 50.0,
              "platoon": "festungs-owr",
              "orders": 0.0
            }
          }
        }
      }
    }
  },
  "UK": {
    "all": {
      "2command-uk": {
        "rc-plat": {
          "M1-D1-0-G2": {
            "1849302001345648413041517136A0569E07E1E911F0E8097D2BB09BC55": {
              "id": "1849302001345648413041517136A0569E07E1E911F0E8097D2BB09BC55",
              "recruit": {
                "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456485022169BE142A3F6E3BEA9B2CAC47C9F453E3DAD568.png",
                "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456485022169BE142A3F6E3BEA9B2CAC47C9F453E3DAD568.png"
              },
              "contents": [
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc184930200134565389060E5C01A67969B0B4C383671D4136B9C39CD3851.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc184930200134565395357F3A0724F13E33B2FD864D98ABB8BB9B3D89367.png"
                },
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc184930200134565307848081ACE7B581045384B1171470AC83F0E15E8A8.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc184930200134565312685C263FBE54EFE9B697C692D1915FCC951720D2B.png"
                }
              ],
              "available_slots": {
                "M1": 1,
                "M2": 0,
                "D1": 1,
                "D2": 0,
                "G1": 0,
                "G2": 1
              },
              "type": "rc-plat",
              "subtype": "M1-D1-0-G2",
              "size": NaN,
              "slots": "M1-D1-0-G2",
              "source": "HoN-V1",
              "box": "all",
              "faction": "UK",
              "cost": 35.0,
              "platoon": "2command-uk",
              "orders": 0.0
            }
          },
          "D2-0-G1-D1": {
            "18493020013456390782B0ADCAB6CDBE617628E340BDEC693C4184E398F": {
              "id": "18493020013456390782B0ADCAB6CDBE617628E340BDEC693C4184E398F",
              "recruit": {
                "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345639141A0DA293B8DF10B157F9B07A2E11BDCEB28A6DC6D.png",
                "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345639141A0DA293B8DF10B157F9B07A2E11BDCEB28A6DC6D.png"
              },
              "contents": [
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345639198078FA87C0E497941460AAA81E832159971FEDF43.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc184930200134563926302413FC3490993FE0B8943EB66338B0BEF41C9B4.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 1,
                "D2": 1,
                "G1": 1,
                "G2": 0
              },
              "type": "rc-plat",
              "subtype": "D2-0-G1-D1",
              "size": NaN,
              "slots": "D2-0-G1-D1",
              "source": "HoN-V1",
              "box": "all",
              "faction": "UK",
              "cost": 30.0,
              "platoon": "2command-uk",
              "orders": 0.0
            }
          },
          "M2-M1-0-M1-M2": {
            "184930200134564937466900D370D611CF57E5BD0D044BC846CA7356103": {
              "id": "184930200134564937466900D370D611CF57E5BD0D044BC846CA7356103",
              "recruit": {
                "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345649529AC0EBCEEF5B82807C8EFA35604B0F82A9CF05A1B.png",
                "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345649529AC0EBCEEF5B82807C8EFA35604B0F82A9CF05A1B.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 2,
                "M2": 2,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "rc-plat",
              "subtype": "M2-M1-0-M1-M2",
              "size": NaN,
              "slots": "M2-M1-0-M1-M2",
              "source": "HoN-V1",
              "box": "all",
              "faction": "UK",
              "cost": 10.0,
              "platoon": "2command-uk",
              "orders": 0.0
            }
          }
        },
        "gear": {
          "1": {
            "184930200134565453237C8485D87027073DC2934AC557D3DEDCCAED58E": {
              "id": "184930200134565453237C8485D87027073DC2934AC557D3DEDCCAED58E",
              "recruit": {
                "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc184930200134565453237C8485D87027073DC2934AC557D3DEDCCAED58E.png",
                "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc184930200134565453237C8485D87027073DC2934AC557D3DEDCCAED58E.png"
              },
              "contents": [
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc184930200134565453237C8485D87027073DC2934AC557D3DEDCCAED58E.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc184930200134565453237C8485D87027073DC2934AC557D3DEDCCAED58E.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "UK",
              "cost": 10.0,
              "platoon": "2command-uk",
              "orders": 0.0
            },
            "1849302001345645006402A87711E681B652EF861227564B611C0641B37": {
              "id": "1849302001345645006402A87711E681B652EF861227564B611C0641B37",
              "recruit": {
                "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345645006402A87711E681B652EF861227564B611C0641B37.png",
                "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345645006402A87711E681B652EF861227564B611C0641B37.png"
              },
              "contents": [
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345645006402A87711E681B652EF861227564B611C0641B37.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345645006402A87711E681B652EF861227564B611C0641B37.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "UK",
              "cost": 10.0,
              "platoon": "2command-uk",
              "orders": 1.0
            },
            "1849302001345645162EAE4DF61062A61897A47A8625C169DF0D0879998": {
              "id": "1849302001345645162EAE4DF61062A61897A47A8625C169DF0D0879998",
              "recruit": {
                "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345645162EAE4DF61062A61897A47A8625C169DF0D0879998.png",
                "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345645162EAE4DF61062A61897A47A8625C169DF0D0879998.png"
              },
              "contents": [
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345645162EAE4DF61062A61897A47A8625C169DF0D0879998.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345645162EAE4DF61062A61897A47A8625C169DF0D0879998.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "UK",
              "cost": 10.0,
              "platoon": "2command-uk",
              "orders": 0.0
            },
            "1849302001345645356133A06CB43AA76B80B7362E758BCB3110D9390A6": {
              "id": "1849302001345645356133A06CB43AA76B80B7362E758BCB3110D9390A6",
              "recruit": {
                "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345645356133A06CB43AA76B80B7362E758BCB3110D9390A6.png",
                "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345645356133A06CB43AA76B80B7362E758BCB3110D9390A6.png"
              },
              "contents": [
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345645356133A06CB43AA76B80B7362E758BCB3110D9390A6.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345645356133A06CB43AA76B80B7362E758BCB3110D9390A6.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "UK",
              "cost": 15.0,
              "platoon": "2command-uk",
              "orders": 0.0
            },
            "18493020013456463351E08A04CD854B58C12C125E211B1764B1B29D6DA": {
              "id": "18493020013456463351E08A04CD854B58C12C125E211B1764B1B29D6DA",
              "recruit": {
                "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456463351E08A04CD854B58C12C125E211B1764B1B29D6DA.png",
                "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456463351E08A04CD854B58C12C125E211B1764B1B29D6DA.png"
              },
              "contents": [
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456463351E08A04CD854B58C12C125E211B1764B1B29D6DA.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456463351E08A04CD854B58C12C125E211B1764B1B29D6DA.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "UK",
              "cost": 15.0,
              "platoon": "2command-uk",
              "orders": 0.0
            },
            "1849302001345643200F232671CE26873E4E1336D87C07C33ED53D667DA": {
              "id": "1849302001345643200F232671CE26873E4E1336D87C07C33ED53D667DA",
              "recruit": {
                "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345643200F232671CE26873E4E1336D87C07C33ED53D667DA.png",
                "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345643200F232671CE26873E4E1336D87C07C33ED53D667DA.png"
              },
              "contents": [
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345643200F232671CE26873E4E1336D87C07C33ED53D667DA.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345643200F232671CE26873E4E1336D87C07C33ED53D667DA.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "UK",
              "cost": 10.0,
              "platoon": "2command-uk",
              "orders": 0.0
            },
            "1849302001345647580511307FC0581E8DAF50A0A66FE64983BA50AB264": {
              "id": "1849302001345647580511307FC0581E8DAF50A0A66FE64983BA50AB264",
              "recruit": {
                "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345647580511307FC0581E8DAF50A0A66FE64983BA50AB264.png",
                "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345647580511307FC0581E8DAF50A0A66FE64983BA50AB264.png"
              },
              "contents": [
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345647580511307FC0581E8DAF50A0A66FE64983BA50AB264.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345647580511307FC0581E8DAF50A0A66FE64983BA50AB264.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "UK",
              "cost": 10.0,
              "platoon": "2command-uk",
              "orders": 0.0
            }
          },
          "2": {
            "184930200134565473964B6A63855506E0BEC814B81CDD4C145D29695DF": {
              "id": "184930200134565473964B6A63855506E0BEC814B81CDD4C145D29695DF",
              "recruit": {
                "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc184930200134565473964B6A63855506E0BEC814B81CDD4C145D29695DF.png",
                "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc184930200134565473964B6A63855506E0BEC814B81CDD4C145D29695DF.png"
              },
              "contents": [
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc184930200134565473964B6A63855506E0BEC814B81CDD4C145D29695DF.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc184930200134565473964B6A63855506E0BEC814B81CDD4C145D29695DF.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "UK",
              "cost": 40.0,
              "platoon": "2command-uk",
              "orders": 0.0
            },
            "1849302001345654397861395FB9DAC5317AF0AC825ECAB07BEC3342570": {
              "id": "1849302001345654397861395FB9DAC5317AF0AC825ECAB07BEC3342570",
              "recruit": {
                "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345654397861395FB9DAC5317AF0AC825ECAB07BEC3342570.png",
                "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345654397861395FB9DAC5317AF0AC825ECAB07BEC3342570.png"
              },
              "contents": [
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345654397861395FB9DAC5317AF0AC825ECAB07BEC3342570.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345654397861395FB9DAC5317AF0AC825ECAB07BEC3342570.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "UK",
              "cost": 25.0,
              "platoon": "2command-uk",
              "orders": 0.0
            },
            "18493020013456503781F64EF0034775886228AD5D43D8CECBC9CF4EBEE": {
              "id": "18493020013456503781F64EF0034775886228AD5D43D8CECBC9CF4EBEE",
              "recruit": {
                "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456503781F64EF0034775886228AD5D43D8CECBC9CF4EBEE.png",
                "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456503781F64EF0034775886228AD5D43D8CECBC9CF4EBEE.png"
              },
              "contents": [
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456503781F64EF0034775886228AD5D43D8CECBC9CF4EBEE.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456503781F64EF0034775886228AD5D43D8CECBC9CF4EBEE.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "UK",
              "cost": 30.0,
              "platoon": "2command-uk",
              "orders": 0.0
            },
            "1849302001345648033882A1088AC1E40453F64D405EC1584A99AD3EF04": {
              "id": "1849302001345648033882A1088AC1E40453F64D405EC1584A99AD3EF04",
              "recruit": {
                "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345648033882A1088AC1E40453F64D405EC1584A99AD3EF04.png",
                "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345648033882A1088AC1E40453F64D405EC1584A99AD3EF04.png"
              },
              "contents": [
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345648033882A1088AC1E40453F64D405EC1584A99AD3EF04.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345648033882A1088AC1E40453F64D405EC1584A99AD3EF04.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "UK",
              "cost": 10.0,
              "platoon": "2command-uk",
              "orders": 0.0
            },
            "18493020013456464820669D980D8C2C9B94218532D911626750958C080": {
              "id": "18493020013456464820669D980D8C2C9B94218532D911626750958C080",
              "recruit": {
                "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456464820669D980D8C2C9B94218532D911626750958C080.png",
                "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456464820669D980D8C2C9B94218532D911626750958C080.png"
              },
              "contents": [
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456464820669D980D8C2C9B94218532D911626750958C080.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456464820669D980D8C2C9B94218532D911626750958C080.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "UK",
              "cost": 20.0,
              "platoon": "2command-uk",
              "orders": 0.0
            }
          }
        }
      },
      "yeomanry-ygy": {
        "rc-plat": {
          "D1-D1-0-D2": {
            "1849302001345644529AC38F8788C3AA6140D194B04A8798B7FFBA1D035": {
              "id": "1849302001345644529AC38F8788C3AA6140D194B04A8798B7FFBA1D035",
              "recruit": {
                "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345644669663425CBAD4709A7610CFC7868A44F91D7F4F9FA.png",
                "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345644669663425CBAD4709A7610CFC7868A44F91D7F4F9FA.png"
              },
              "contents": [
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345653313CC2C0446B99276AB2F2DF04D8C52EECB7B83CE89.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456533919427928C1599DAC988A0436732AD4B5F49AF1B6D.png"
                },
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc184930200134564606798C6CE79E66D23964E9C38850B7DDCB05944510C.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456461389BB7FCD985FE8E76CF33CE7F708DFA0C3D6F4A58.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 2,
                "D2": 1,
                "G1": 0,
                "G2": 0
              },
              "type": "rc-plat",
              "subtype": "D1-D1-0-D2",
              "size": NaN,
              "slots": "D1-D1-0-D2",
              "source": "HoN-V1",
              "box": "all",
              "faction": "UK",
              "cost": 120.0,
              "platoon": "yeomanry-ygy",
              "orders": 2.0
            }
          }
        },
        "gear": {
          "1": {
            "18493020013456506110B4F7DB35F710761A1E9F59D14BC22DE7512D52F": {
              "id": "18493020013456506110B4F7DB35F710761A1E9F59D14BC22DE7512D52F",
              "recruit": {
                "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456506110B4F7DB35F710761A1E9F59D14BC22DE7512D52F.png",
                "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456506110B4F7DB35F710761A1E9F59D14BC22DE7512D52F.png"
              },
              "contents": [
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456506110B4F7DB35F710761A1E9F59D14BC22DE7512D52F.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456506110B4F7DB35F710761A1E9F59D14BC22DE7512D52F.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "UK",
              "cost": 10.0,
              "platoon": "yeomanry-ygy",
              "orders": 0.0
            },
            "18493020013456465298E5439AF334462475EC12ABFA8DBA6BA7F64D1F0": {
              "id": "18493020013456465298E5439AF334462475EC12ABFA8DBA6BA7F64D1F0",
              "recruit": {
                "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456465298E5439AF334462475EC12ABFA8DBA6BA7F64D1F0.png",
                "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456465298E5439AF334462475EC12ABFA8DBA6BA7F64D1F0.png"
              },
              "contents": [
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456465298E5439AF334462475EC12ABFA8DBA6BA7F64D1F0.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456465298E5439AF334462475EC12ABFA8DBA6BA7F64D1F0.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "UK",
              "cost": 5.0,
              "platoon": "yeomanry-ygy",
              "orders": 0.0
            }
          }
        },
        "ft-vehicle": {
          "2": {
            "184930200134564858991AF1C280C054C1B01C79CEDE7DEAA8105098D01": {
              "id": "184930200134564858991AF1C280C054C1B01C79CEDE7DEAA8105098D01",
              "recruit": {
                "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc184930200134564864709DABC8600DDEA44F0EE51A27771B966F896ACB7.png",
                "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc184930200134564864709DABC8600DDEA44F0EE51A27771B966F896ACB7.png"
              },
              "contents": [
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc184930200134565537573547B65E4F64A575AEC6DE189095EE6EEA28D7B.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456554969BB7FCD985FE8E76CF33CE7F708DFA0C3D6F4A58.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "UK",
              "cost": 65.0,
              "platoon": "yeomanry-ygy",
              "orders": 0.0
            },
            "1849302001345649143B55A6F5303BCFA99C8028CC38018372B3A528E4F": {
              "id": "1849302001345649143B55A6F5303BCFA99C8028CC38018372B3A528E4F",
              "recruit": {
                "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345649209AB43C094E76A2A9AB432B30E9301AF955CBECFAC.png",
                "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345649209AB43C094E76A2A9AB432B30E9301AF955CBECFAC.png"
              },
              "contents": [
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc184930200134565537573547B65E4F64A575AEC6DE189095EE6EEA28D7B.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456554969BB7FCD985FE8E76CF33CE7F708DFA0C3D6F4A58.png"
                },
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456497410350DCF7C75A885468B9860C132DB6AA971477E6.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc184930200134564982272B17DAF4E68BA97931C2039EEBC525B0BF750A9.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "UK",
              "cost": 130.0,
              "platoon": "yeomanry-ygy",
              "orders": 0.0
            },
            "1849302001345650671C6ACADD5EEA2A5F315408D293DD2A04A210621E1": {
              "id": "1849302001345650671C6ACADD5EEA2A5F315408D293DD2A04A210621E1",
              "recruit": {
                "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc184930200134565074150E09465FA5C706C669160CACE4B68B441D5B3F8.png",
                "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc184930200134565074150E09465FA5C706C669160CACE4B68B441D5B3F8.png"
              },
              "contents": [
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456497410350DCF7C75A885468B9860C132DB6AA971477E6.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc184930200134564982272B17DAF4E68BA97931C2039EEBC525B0BF750A9.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "UK",
              "cost": 65.0,
              "platoon": "yeomanry-ygy",
              "orders": 0.0
            }
          }
        }
      },
      "winnipeg-gb": {
        "rc-plat": {
          "M2*-D1-0-G1-D2": {
            "1849302001345643304FEFC8424F3A4A90AB8F32CD90BAC494C7F4D9683": {
              "id": "1849302001345643304FEFC8424F3A4A90AB8F32CD90BAC494C7F4D9683",
              "recruit": {
                "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc184930200134564340870C858957B35553DC32BF67D6FD7D44530AFB0C1.png",
                "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc184930200134564340870C858957B35553DC32BF67D6FD7D44530AFB0C1.png"
              },
              "contents": [
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc184930200134565123236563E91757D842CA55DB6FEC5A279AD30A95F37.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456512851DA9313C7D33CB78D35230F1E8CF36431BFDEA0E.png"
                },
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013454110457F827982FA7E7A95B222FC5E8170FFA6B2EBC382.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345411111F332DE3E5AD8D73FE24FCEC7411B957E129148B3.png"
                },
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456439026C28AB29D377D6C5818E7728F20EA092C8CEF5C3.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456439689279FEEC21DEF06435AF00C04503F15B234500D8.png"
                },
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456496073884ED988E5AEC2F9AD0D8273569AC2CA762B4C3.png",
                  "back": NaN
                },
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc184930200134564541596874F03C53F28DFC747D43150FE2E284DFBA0E6.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456454747415DC5C706FB4F5DDF26AF37892820D6305C21E.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 1,
                "D1": 1,
                "D2": 1,
                "G1": 1,
                "G2": 0
              },
              "type": "rc-plat",
              "subtype": "M2*-D1-0-G1-D2",
              "size": NaN,
              "slots": "M2*-D1-0-G1-D2",
              "source": "HoN-V1",
              "box": "all",
              "faction": "UK",
              "cost": 95.0,
              "platoon": "winnipeg-gb",
              "orders": 2.0
            }
          }
        },
        "gear": {
          "1": {
            "18493020013456474734B2FBE8764A8DB77E84384C036F03984E24C3B66": {
              "id": "18493020013456474734B2FBE8764A8DB77E84384C036F03984E24C3B66",
              "recruit": {
                "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456474734B2FBE8764A8DB77E84384C036F03984E24C3B66.png",
                "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456474734B2FBE8764A8DB77E84384C036F03984E24C3B66.png"
              },
              "contents": [
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456474734B2FBE8764A8DB77E84384C036F03984E24C3B66.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456474734B2FBE8764A8DB77E84384C036F03984E24C3B66.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "UK",
              "cost": 15.0,
              "platoon": "winnipeg-gb",
              "orders": 0.0
            }
          }
        },
        "ft-vehicle": {
          "2": {
            "1849302001345654594466A20F0ECB3EA8F200583EE6C87CE952703264A": {
              "id": "1849302001345654594466A20F0ECB3EA8F200583EE6C87CE952703264A",
              "recruit": {
                "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456546725B19DEC3383F0E6117660C549C193D92977C882E.png",
                "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456546725B19DEC3383F0E6117660C549C193D92977C882E.png"
              },
              "contents": [
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456534596D3F6F6F92F58D9FC84CC0E1DE8D59EBA540ECE2.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc184930200134565010485A7E9FA76B5D033DA4EDE0874D5261CEE753EAF.png"
                },
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013454110457F827982FA7E7A95B222FC5E8170FFA6B2EBC382.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345411111F332DE3E5AD8D73FE24FCEC7411B957E129148B3.png"
                },
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc184930200134564809364FE0DC6D49E1D8276285C20074ECF8CC80B8F4B.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345648166E934D5E8532B384C8A810DD9D900ADD2F5E844DC.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "UK",
              "cost": 70.0,
              "platoon": "winnipeg-gb",
              "orders": 0.0
            },
            "184930200134564571458C5592F04A4996B74BCE7D8CAF33F2B0656B927": {
              "id": "184930200134564571458C5592F04A4996B74BCE7D8CAF33F2B0656B927",
              "recruit": {
                "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345645773C57EE66BD569DD7FE4E7170BECDF7033F90BC2E9.png",
                "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345645773C57EE66BD569DD7FE4E7170BECDF7033F90BC2E9.png"
              },
              "contents": [
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456534596D3F6F6F92F58D9FC84CC0E1DE8D59EBA540ECE2.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc184930200134565010485A7E9FA76B5D033DA4EDE0874D5261CEE753EAF.png"
                },
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013454110457F827982FA7E7A95B222FC5E8170FFA6B2EBC382.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345411111F332DE3E5AD8D73FE24FCEC7411B957E129148B3.png"
                },
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc184930200134564541596874F03C53F28DFC747D43150FE2E284DFBA0E6.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456454747415DC5C706FB4F5DDF26AF37892820D6305C21E.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "UK",
              "cost": 75.0,
              "platoon": "winnipeg-gb",
              "orders": 0.0
            }
          }
        },
        "ft-inf": {
          "2": {
            "18493020013456529610CDF91C37005C3EF4FDBB8694DDC998A52219B21": {
              "id": "18493020013456529610CDF91C37005C3EF4FDBB8694DDC998A52219B21",
              "recruit": {
                "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456530197D751C7B4B697371D985FFC236694EE3A6BFC715.png",
                "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456530197D751C7B4B697371D985FFC236694EE3A6BFC715.png"
              },
              "contents": [
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013454110457F827982FA7E7A95B222FC5E8170FFA6B2EBC382.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345411111F332DE3E5AD8D73FE24FCEC7411B957E129148B3.png"
                },
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456439026C28AB29D377D6C5818E7728F20EA092C8CEF5C3.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456439689279FEEC21DEF06435AF00C04503F15B234500D8.png"
                },
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc184930200134564541596874F03C53F28DFC747D43150FE2E284DFBA0E6.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456454747415DC5C706FB4F5DDF26AF37892820D6305C21E.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "UK",
              "cost": 65.0,
              "platoon": "winnipeg-gb",
              "orders": 0.0
            }
          }
        }
      },
      "chaudiere-rwb": {
        "rc-plat": {
          "M2*-D1-0-D1-D2": {
            "1849302001345646582E9E12297D2C5ABD5EC454D0804BBF6BF894CA2DD": {
              "id": "1849302001345646582E9E12297D2C5ABD5EC454D0804BBF6BF894CA2DD",
              "recruit": {
                "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc184930200134564665942B512BC7EDE8F2CDD75E6049AC8EEBB1FE27BEE.png",
                "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc184930200134564665942B512BC7EDE8F2CDD75E6049AC8EEBB1FE27BEE.png"
              },
              "contents": [
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345644776D55D0ED0C932E4579ECEB911170435E6B2EDD5CA.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456448316F16E84336C26099ECFC4EA0FAADDF3E39913D2C.png"
                },
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345642605590F62C03FEF9F7148DE01C1AFC590B20E5ADC2A.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456426686BCE92E82B1D7A51997FDD78004660B428972C9F.png"
                },
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456459613FBD9958B89845EFB6CBCFA7B40ABDFD28E76D21.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456460101FF8142E3C949910B7AEDE901D825B4ADEE7BD53.png"
                },
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456551242E22693E56F1A95C17162970E386C5A91B1F00B2.png",
                  "back": NaN
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 1,
                "D1": 2,
                "D2": 1,
                "G1": 0,
                "G2": 0
              },
              "type": "rc-plat",
              "subtype": "M2*-D1-0-D1-D2",
              "size": NaN,
              "slots": "M2*-D1-0-D1-D2",
              "source": "HoN-V1",
              "box": "all",
              "faction": "UK",
              "cost": 55.0,
              "platoon": "chaudiere-rwb",
              "orders": 1.0
            }
          }
        },
        "gear": {
          "1": {
            "1849302001345643662B6FE6FAD2D7EC98DB49C2C1EB73F176EFA0DA3C6": {
              "id": "1849302001345643662B6FE6FAD2D7EC98DB49C2C1EB73F176EFA0DA3C6",
              "recruit": {
                "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345643662B6FE6FAD2D7EC98DB49C2C1EB73F176EFA0DA3C6.png",
                "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345643662B6FE6FAD2D7EC98DB49C2C1EB73F176EFA0DA3C6.png"
              },
              "contents": [
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345643662B6FE6FAD2D7EC98DB49C2C1EB73F176EFA0DA3C6.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345643662B6FE6FAD2D7EC98DB49C2C1EB73F176EFA0DA3C6.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "UK",
              "cost": 10.0,
              "platoon": "chaudiere-rwb",
              "orders": 0.0
            },
            "1849302001345652894CA8AC3C9337743228623A955ACA84B35A1E66861": {
              "id": "1849302001345652894CA8AC3C9337743228623A955ACA84B35A1E66861",
              "recruit": {
                "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345652894CA8AC3C9337743228623A955ACA84B35A1E66861.png",
                "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345652894CA8AC3C9337743228623A955ACA84B35A1E66861.png"
              },
              "contents": [
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345652894CA8AC3C9337743228623A955ACA84B35A1E66861.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345652894CA8AC3C9337743228623A955ACA84B35A1E66861.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "UK",
              "cost": 20.0,
              "platoon": "chaudiere-rwb",
              "orders": 0.0
            }
          }
        },
        "ft-vehicle": {
          "2": {
            "1849302001345645536062EB0ECEC63A15241466281BB7EE1A96A4C7F9B": {
              "id": "1849302001345645536062EB0ECEC63A15241466281BB7EE1A96A4C7F9B",
              "recruit": {
                "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345645581418E92D5C0548FFE129BCB28B99480D3DDD7656A.png",
                "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345645581418E92D5C0548FFE129BCB28B99480D3DDD7656A.png"
              },
              "contents": [
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345646220C06D5D918D02881BF03E26C00819119E2FB84568.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456462819C6357610EBC1455F573C7CD0CF2AAE41DBFF4BB.png"
                },
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345646220C06D5D918D02881BF03E26C00819119E2FB84568.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456462819C6357610EBC1455F573C7CD0CF2AAE41DBFF4BB.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "UK",
              "cost": 60.0,
              "platoon": "chaudiere-rwb",
              "orders": 0.0
            }
          }
        },
        "ft-inf": {
          "2": {
            "18493020013456540912270AF6EB0C5B6C03B5247858CF05466EF9741F4": {
              "id": "18493020013456540912270AF6EB0C5B6C03B5247858CF05466EF9741F4",
              "recruit": {
                "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345654158EFF60784C5FEB05536BB51D8CDD1DC6BD9036AFD.png",
                "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345654158EFF60784C5FEB05536BB51D8CDD1DC6BD9036AFD.png"
              },
              "contents": [
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456459613FBD9958B89845EFB6CBCFA7B40ABDFD28E76D21.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456460101FF8142E3C949910B7AEDE901D825B4ADEE7BD53.png"
                },
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456459613FBD9958B89845EFB6CBCFA7B40ABDFD28E76D21.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456460101FF8142E3C949910B7AEDE901D825B4ADEE7BD53.png"
                },
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345646220C06D5D918D02881BF03E26C00819119E2FB84568.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456462819C6357610EBC1455F573C7CD0CF2AAE41DBFF4BB.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "UK",
              "cost": 70.0,
              "platoon": "chaudiere-rwb",
              "orders": 0.0
            },
            "184930200134565422903F181545C5E5134B5B01D89097719966A4042BB": {
              "id": "184930200134565422903F181545C5E5134B5B01D89097719966A4042BB",
              "recruit": {
                "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456543133BC5331AD013044030F8549513EE2D6D4CF89224.png",
                "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456543133BC5331AD013044030F8549513EE2D6D4CF89224.png"
              },
              "contents": [
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345642605590F62C03FEF9F7148DE01C1AFC590B20E5ADC2A.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456426686BCE92E82B1D7A51997FDD78004660B428972C9F.png"
                },
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345642605590F62C03FEF9F7148DE01C1AFC590B20E5ADC2A.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456426686BCE92E82B1D7A51997FDD78004660B428972C9F.png"
                },
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345646220C06D5D918D02881BF03E26C00819119E2FB84568.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456462819C6357610EBC1455F573C7CD0CF2AAE41DBFF4BB.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "UK",
              "cost": 65.0,
              "platoon": "chaudiere-rwb",
              "orders": 0.0
            }
          }
        }
      },
      "eyorkshire-wrw": {
        "rc-plat": {
          "M2*-D1-0-D1-D2": {
            "1849302001345646929B81A19B4D76B6184BBAB91AFD468B45681428B46": {
              "id": "1849302001345646929B81A19B4D76B6184BBAB91AFD468B45681428B46",
              "recruit": {
                "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345647017C274F4C32785CC4E7E10A3879EB582FF18BF5173.png",
                "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345647017C274F4C32785CC4E7E10A3879EB582FF18BF5173.png"
              },
              "contents": [
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345644354CD31BADF42D398B2A9382128670CFA28AFA62D2B.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345644415094383FDCADA8DDAC987EDBEC6EA04E0C23187CB.png"
                },
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456429012501189F0BCB4C2978AE720CF6AAFC459719082A.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345642952AA5D8F9EA98E293F2BC939AEAB168AD42DCF13E1.png"
                },
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345647093011564AC5BD79A38524743818208B3182A8419A9.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013453784032FD03396D07FB148EAA6165BD9BE359458F0442F.png"
                },
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345647921CEBC5ED41BE6DC0A884EE7E2C7475C31D383318C.png",
                  "back": NaN
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 1,
                "D1": 2,
                "D2": 1,
                "G1": 0,
                "G2": 0
              },
              "type": "rc-plat",
              "subtype": "M2*-D1-0-D1-D2",
              "size": NaN,
              "slots": "M2*-D1-0-D1-D2",
              "source": "HoN-V1",
              "box": "all",
              "faction": "UK",
              "cost": 55.0,
              "platoon": "eyorkshire-wrw",
              "orders": 1.0
            }
          }
        },
        "gear": {
          "1": {
            "18493020013456431300CF1648B8B6A995327D6C32BB7F3B3D79BA22848": {
              "id": "18493020013456431300CF1648B8B6A995327D6C32BB7F3B3D79BA22848",
              "recruit": {
                "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456431300CF1648B8B6A995327D6C32BB7F3B3D79BA22848.png",
                "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456431300CF1648B8B6A995327D6C32BB7F3B3D79BA22848.png"
              },
              "contents": [
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456431300CF1648B8B6A995327D6C32BB7F3B3D79BA22848.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456431300CF1648B8B6A995327D6C32BB7F3B3D79BA22848.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "UK",
              "cost": 20.0,
              "platoon": "eyorkshire-wrw",
              "orders": 0.0
            }
          }
        },
        "ft-vehicle": {
          "2": {
            "1849302001345654857E05E81ECB3E11C7D91F43EC5A2DCBF0D87D9A4CB": {
              "id": "1849302001345654857E05E81ECB3E11C7D91F43EC5A2DCBF0D87D9A4CB",
              "recruit": {
                "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc184930200134565491878D379E3F97FDDB0C1FA790056E54111A8FCED0D.png",
                "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc184930200134565491878D379E3F97FDDB0C1FA790056E54111A8FCED0D.png"
              },
              "contents": [
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345647921CEBC5ED41BE6DC0A884EE7E2C7475C31D383318C.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345647980F23FB8101D3A22F8EBAFEDAEE914C4327ED2913D.png"
                },
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345647921CEBC5ED41BE6DC0A884EE7E2C7475C31D383318C.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345647980F23FB8101D3A22F8EBAFEDAEE914C4327ED2913D.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "UK",
              "cost": 40.0,
              "platoon": "eyorkshire-wrw",
              "orders": 0.0
            }
          }
        },
        "ft-inf": {
          "2": {
            "1849302001345648225298283DD6E7814F03A507B6C5966AD0B94BD08F5": {
              "id": "1849302001345648225298283DD6E7814F03A507B6C5966AD0B94BD08F5",
              "recruit": {
                "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456483031C971FC3E1C263856726C88A124D2F363920A03E.png",
                "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456483031C971FC3E1C263856726C88A124D2F363920A03E.png"
              },
              "contents": [
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345643602FAEE3C373729E2A1408ED28CB22E5C043FD79F32.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013455153971D29BAD3CCF87FFD0CCAE8066C7615F8FE674296.png"
                },
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456510615E9B0830F5AFDD7F652397E261936D4C9CCCE0BB.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345651128C48613BEC6A4CDDB5BD0CD755C5E1AD6BA751EB8.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "UK",
              "cost": 55.0,
              "platoon": "eyorkshire-wrw",
              "orders": 0.0
            },
            "184930200134565318839698B9EC96C3B21ABACB7AD70AA828F83CB4691": {
              "id": "184930200134565318839698B9EC96C3B21ABACB7AD70AA828F83CB4691",
              "recruit": {
                "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456532556FE27050352267B1EF35442079C8A9AF887B92D8.png",
                "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456532556FE27050352267B1EF35442079C8A9AF887B92D8.png"
              },
              "contents": [
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456429012501189F0BCB4C2978AE720CF6AAFC459719082A.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345642952AA5D8F9EA98E293F2BC939AEAB168AD42DCF13E1.png"
                },
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456429012501189F0BCB4C2978AE720CF6AAFC459719082A.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345642952AA5D8F9EA98E293F2BC939AEAB168AD42DCF13E1.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "UK",
              "cost": 35.0,
              "platoon": "eyorkshire-wrw",
              "orders": 0.0
            }
          }
        }
      },
      "suffolk-yr": {
        "rc-plat": {
          "M2*-D1-0-G1-D2": {
            "1849302001345647317B240BA96C9554F95243F14506E69AAC3F45A6F9A": {
              "id": "1849302001345647317B240BA96C9554F95243F14506E69AAC3F45A6F9A",
              "recruit": {
                "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345647399CEAFDAEF2BDD3C24C5BF8DB89DB3AF4C28976F83.png",
                "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345647399CEAFDAEF2BDD3C24C5BF8DB89DB3AF4C28976F83.png"
              },
              "contents": [
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc184930200134565193398D7B07745BE7E65FE7E28BAB3D24C8D6374CFAE.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345651982B1037BF0AE7888CE080D6B3EEB5A82DBA652319D.png"
                },
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456434773DC744CF456BDE522DB19453F030B04CFC3F6EDB.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456435403B6CB591F4EA400CC678ABA7B9CA0BC50615FDA9.png"
                },
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345652162A2816418B26EAFB5F2FFC593B74A8D5440A7C7C2.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345652245F9EA0128B5D62750563A9092B98AC09CC41FADB1.png"
                },
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc184930200134564195692645C7CD9764E0A51D6CB3D26132C4D552CD860.png",
                  "back": NaN
                },
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc184930200134564489219018C6D8FE9B5A4A0E2F79D28B59351AE745CFD.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345644948DED01B9D8E7B01D350FA7CA4B9F2A60A99C29E2B.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 1,
                "D1": 1,
                "D2": 1,
                "G1": 1,
                "G2": 0
              },
              "type": "rc-plat",
              "subtype": "M2*-D1-0-G1-D2",
              "size": NaN,
              "slots": "M2*-D1-0-G1-D2",
              "source": "HoN-V1",
              "box": "all",
              "faction": "UK",
              "cost": 95.0,
              "platoon": "suffolk-yr",
              "orders": 1.0
            }
          }
        },
        "ft-inf": {
          "2": {
            "184930200134564774090A8F19688E2FEB87D3B5341D439EE4AAA7E5E33": {
              "id": "184930200134564774090A8F19688E2FEB87D3B5341D439EE4AAA7E5E33",
              "recruit": {
                "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456477954AA4636307BC5A3CA20E18AAC6CD21B18D5FDC5E.png",
                "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456477954AA4636307BC5A3CA20E18AAC6CD21B18D5FDC5E.png"
              },
              "contents": [
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456434773DC744CF456BDE522DB19453F030B04CFC3F6EDB.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456435403B6CB591F4EA400CC678ABA7B9CA0BC50615FDA9.png"
                },
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc184930200134564195692645C7CD9764E0A51D6CB3D26132C4D552CD860.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345642019613FEBE6D27CF6C7132E58CC0AA09C22CF1A67CE.png"
                },
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345643004DB6B0A8441BF8F6D77DE429C953F5B03AF985F1E.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345643059F8E46FD1F88D4186DC78C77E67AC48557793E9FC.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "UK",
              "cost": 60.0,
              "platoon": "suffolk-yr",
              "orders": 0.0
            },
            "184930200134564876123E51217030AD1DF3A879AB79544DBF46E7A437B": {
              "id": "184930200134564876123E51217030AD1DF3A879AB79544DBF46E7A437B",
              "recruit": {
                "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456488324A777E9D708DE916222BB8B6CC6B7588AFB3D0A8.png",
                "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456488324A777E9D708DE916222BB8B6CC6B7588AFB3D0A8.png"
              },
              "contents": [
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456434773DC744CF456BDE522DB19453F030B04CFC3F6EDB.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456435403B6CB591F4EA400CC678ABA7B9CA0BC50615FDA9.png"
                },
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345643004DB6B0A8441BF8F6D77DE429C953F5B03AF985F1E.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345643059F8E46FD1F88D4186DC78C77E67AC48557793E9FC.png"
                },
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc184930200134564489219018C6D8FE9B5A4A0E2F79D28B59351AE745CFD.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345644948DED01B9D8E7B01D350FA7CA4B9F2A60A99C29E2B.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "UK",
              "cost": 65.0,
              "platoon": "suffolk-yr",
              "orders": 0.0
            },
            "18493020013456515139583D5738B75533BDA40D5F09FDCA56FF64AF2E8": {
              "id": "18493020013456515139583D5738B75533BDA40D5F09FDCA56FF64AF2E8",
              "recruit": {
                "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345651581D57EAC68010C0358E1F85DEBA267C3A060017A08.png",
                "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345651581D57EAC68010C0358E1F85DEBA267C3A060017A08.png"
              },
              "contents": [
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456434773DC744CF456BDE522DB19453F030B04CFC3F6EDB.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456435403B6CB591F4EA400CC678ABA7B9CA0BC50615FDA9.png"
                },
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc184930200134564195692645C7CD9764E0A51D6CB3D26132C4D552CD860.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345642019613FEBE6D27CF6C7132E58CC0AA09C22CF1A67CE.png"
                },
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc184930200134564489219018C6D8FE9B5A4A0E2F79D28B59351AE745CFD.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345644948DED01B9D8E7B01D350FA7CA4B9F2A60A99C29E2B.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "UK",
              "cost": 60.0,
              "platoon": "suffolk-yr",
              "orders": 0.0
            }
          }
        }
      },
      "lovats-rbr": {
        "rc-plat": {
          "D1-D1-0-D2": {
            "18493020013456417833570B9186F4693E2D9C0505408683ECE70FCA195": {
              "id": "18493020013456417833570B9186F4693E2D9C0505408683ECE70FCA195",
              "recruit": {
                "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc184930200134564187718CA2B8C179FEFB480EF1D452D9F2504BB79687A.png",
                "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc184930200134564187718CA2B8C179FEFB480EF1D452D9F2504BB79687A.png"
              },
              "contents": [
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345650797550639B984AC6D767A0B2858E1AC50D45E15883D.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345650856B0E8CF4BB04734C7478A9E00259FE3D497199CDA.png"
                },
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345651636882FA38D71D8C74F57201614D56ED66B80FC3B9F.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345651707693340AFE533F9C3AAA70DB23BCF00C4C4B30A92.png"
                },
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345651636882FA38D71D8C74F57201614D56ED66B80FC3B9F.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345651707693340AFE533F9C3AAA70DB23BCF00C4C4B30A92.png"
                },
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345651337C0D52C0AD8E62F2860326B7FB3885A8D1443B566.png",
                  "back": NaN
                },
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc184930200134565236621AFB51B532AEFC44DAB4B0D6E313719EAF075A8.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345652433BB5D949CDFF5A0E6E643EB3CE25325203E7FEF2C.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 2,
                "D2": 1,
                "G1": 0,
                "G2": 0
              },
              "type": "rc-plat",
              "subtype": "D1-D1-0-D2",
              "size": NaN,
              "slots": "D1-D1-0-D2",
              "source": "HoN-V1",
              "box": "all",
              "faction": "UK",
              "cost": 130.0,
              "platoon": "lovats-rbr",
              "orders": 0.0
            }
          }
        },
        "gear": {
          "1": {
            "1849302001345655296185C43C68D5DEFEB50AB4BC83A3667D228459BBC": {
              "id": "1849302001345655296185C43C68D5DEFEB50AB4BC83A3667D228459BBC",
              "recruit": {
                "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345655296185C43C68D5DEFEB50AB4BC83A3667D228459BBC.png",
                "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345655296185C43C68D5DEFEB50AB4BC83A3667D228459BBC.png"
              },
              "contents": [
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345655296185C43C68D5DEFEB50AB4BC83A3667D228459BBC.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345655296185C43C68D5DEFEB50AB4BC83A3667D228459BBC.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "UK",
              "cost": 10.0,
              "platoon": "lovats-rbr",
              "orders": 0.0
            },
            "184930200134565401411560FB06A54B57D532079CA9106C4695B17029F": {
              "id": "184930200134565401411560FB06A54B57D532079CA9106C4695B17029F",
              "recruit": {
                "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc184930200134565401411560FB06A54B57D532079CA9106C4695B17029F.png",
                "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc184930200134565401411560FB06A54B57D532079CA9106C4695B17029F.png"
              },
              "contents": [
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc184930200134565401411560FB06A54B57D532079CA9106C4695B17029F.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc184930200134565401411560FB06A54B57D532079CA9106C4695B17029F.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "UK",
              "cost": 10.0,
              "platoon": "lovats-rbr",
              "orders": 0.0
            },
            "18493020013456456540968AA0729A72F9C1EACE3925B76BE0E41C8D7A8": {
              "id": "18493020013456456540968AA0729A72F9C1EACE3925B76BE0E41C8D7A8",
              "recruit": {
                "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456456540968AA0729A72F9C1EACE3925B76BE0E41C8D7A8.png",
                "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456456540968AA0729A72F9C1EACE3925B76BE0E41C8D7A8.png"
              },
              "contents": [
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456456540968AA0729A72F9C1EACE3925B76BE0E41C8D7A8.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456456540968AA0729A72F9C1EACE3925B76BE0E41C8D7A8.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "UK",
              "cost": 15.0,
              "platoon": "lovats-rbr",
              "orders": 0.0
            },
            "184930200134564721083C55B4C5E331BB81C1326A0EC03597F93820CEE": {
              "id": "184930200134564721083C55B4C5E331BB81C1326A0EC03597F93820CEE",
              "recruit": {
                "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc184930200134564721083C55B4C5E331BB81C1326A0EC03597F93820CEE.png",
                "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc184930200134564721083C55B4C5E331BB81C1326A0EC03597F93820CEE.png"
              },
              "contents": [
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc184930200134564721083C55B4C5E331BB81C1326A0EC03597F93820CEE.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc184930200134564721083C55B4C5E331BB81C1326A0EC03597F93820CEE.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "UK",
              "cost": 10.0,
              "platoon": "lovats-rbr",
              "orders": 0.0
            }
          }
        },
        "ft-inf": {
          "1": {
            "18493020013456437786EADD9DA03F5156AF597CBE5CEAB76C2E8403E06": {
              "id": "18493020013456437786EADD9DA03F5156AF597CBE5CEAB76C2E8403E06",
              "recruit": {
                "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345643843C207D6942F7CF17892729F79F7FC571E49892C8B.png",
                "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345643843C207D6942F7CF17892729F79F7FC571E49892C8B.png"
              },
              "contents": [
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456421118B1651604FC1D63D8019C4C196B7D2B9C466BBAE.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013455153971D29BAD3CCF87FFD0CCAE8066C7615F8FE674296.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "UK",
              "cost": 15.0,
              "platoon": "lovats-rbr",
              "orders": 0.0
            },
            "18493020013456549751D446B77088B40B1BD4E122E557E22279DAEBF86": {
              "id": "18493020013456549751D446B77088B40B1BD4E122E557E22279DAEBF86",
              "recruit": {
                "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456550316C8F572C67DF7E19E348D9387DCBA97D34C9B6F9.png",
                "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456550316C8F572C67DF7E19E348D9387DCBA97D34C9B6F9.png"
              },
              "contents": [
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc184930200134565351832BAB7AE664000F0A07FE217B516845AE47CBB7B.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345653568BE9956B463C088A4D48EF2766B804D48A42CEA9D.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "UK",
              "cost": 20.0,
              "platoon": "lovats-rbr",
              "orders": 0.0
            }
          }
        },
        "rc-hero": {
          "NaN": {
            "18493020013456537557B3A854DA7675486BDFC52E9F7D87E997D0076DD": {
              "id": "18493020013456537557B3A854DA7675486BDFC52E9F7D87E997D0076DD",
              "recruit": {
                "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456538241727B98B15D7D5F78666056B2DB85EC0BD0FFD5E.png",
                "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456538241727B98B15D7D5F78666056B2DB85EC0BD0FFD5E.png"
              },
              "contents": [
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345652766A4304698EF0D61A9F25763110C8431D16F3AB8C0.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456528311B574D9BD8F27B0E4993E3F3E66A1FAE47F5881E.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "rc-hero",
              "subtype": NaN,
              "size": NaN,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "UK",
              "cost": 20.0,
              "platoon": "lovats-rbr",
              "orders": 0.0
            }
          }
        }
      },
      "1generic": {
        "gear": {
          "1": {
            "184930200134564372150355333A49E00F2EF9CFE724EE3EBB42ABF624B": {
              "id": "184930200134564372150355333A49E00F2EF9CFE724EE3EBB42ABF624B",
              "recruit": {
                "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc184930200134564372150355333A49E00F2EF9CFE724EE3EBB42ABF624B.png",
                "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc184930200134564372150355333A49E00F2EF9CFE724EE3EBB42ABF624B.png"
              },
              "contents": [
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc184930200134564372150355333A49E00F2EF9CFE724EE3EBB42ABF624B.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc184930200134564372150355333A49E00F2EF9CFE724EE3EBB42ABF624B.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "UK",
              "cost": 5.0,
              "platoon": "1generic",
              "orders": 0.0
            },
            "18493020013456394674A62C8BD42A2D3435C028E7A6769C66FE346B5C3": {
              "id": "18493020013456394674A62C8BD42A2D3435C028E7A6769C66FE346B5C3",
              "recruit": {
                "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456394674A62C8BD42A2D3435C028E7A6769C66FE346B5C3.png",
                "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456394674A62C8BD42A2D3435C028E7A6769C66FE346B5C3.png"
              },
              "contents": [
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456394674A62C8BD42A2D3435C028E7A6769C66FE346B5C3.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456394674A62C8BD42A2D3435C028E7A6769C66FE346B5C3.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "UK",
              "cost": 5.0,
              "platoon": "1generic",
              "orders": 0.0
            },
            "184930200134563941866BBAB67FD574F2BAB044C759322C009AF64E462": {
              "id": "184930200134563941866BBAB67FD574F2BAB044C759322C009AF64E462",
              "recruit": {
                "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc184930200134563941866BBAB67FD574F2BAB044C759322C009AF64E462.png",
                "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc184930200134563941866BBAB67FD574F2BAB044C759322C009AF64E462.png"
              },
              "contents": [
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc184930200134563941866BBAB67FD574F2BAB044C759322C009AF64E462.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc184930200134563941866BBAB67FD574F2BAB044C759322C009AF64E462.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "UK",
              "cost": 10.0,
              "platoon": "1generic",
              "orders": 0.0
            },
            "18493020013456393123AEAE4691CF82B5EB81A51C5092B6966E3A10D63": {
              "id": "18493020013456393123AEAE4691CF82B5EB81A51C5092B6966E3A10D63",
              "recruit": {
                "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456393123AEAE4691CF82B5EB81A51C5092B6966E3A10D63.png",
                "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456393123AEAE4691CF82B5EB81A51C5092B6966E3A10D63.png"
              },
              "contents": [
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456393123AEAE4691CF82B5EB81A51C5092B6966E3A10D63.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456393123AEAE4691CF82B5EB81A51C5092B6966E3A10D63.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "UK",
              "cost": 10.0,
              "platoon": "1generic",
              "orders": 0.0
            },
            "1849302001345637489752853EBB54C0CCCB1F37B9E4D1ADDC1A87EAE65": {
              "id": "1849302001345637489752853EBB54C0CCCB1F37B9E4D1ADDC1A87EAE65",
              "recruit": {
                "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345637489752853EBB54C0CCCB1F37B9E4D1ADDC1A87EAE65.png",
                "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345637489752853EBB54C0CCCB1F37B9E4D1ADDC1A87EAE65.png"
              },
              "contents": [
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345637489752853EBB54C0CCCB1F37B9E4D1ADDC1A87EAE65.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345637489752853EBB54C0CCCB1F37B9E4D1ADDC1A87EAE65.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "UK",
              "cost": 10.0,
              "platoon": "1generic",
              "orders": 0.0
            },
            "18493020013456373714E3C11601BB4179A58E3E3279CE59273911C093B": {
              "id": "18493020013456373714E3C11601BB4179A58E3E3279CE59273911C093B",
              "recruit": {
                "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456373714E3C11601BB4179A58E3E3279CE59273911C093B.png",
                "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456373714E3C11601BB4179A58E3E3279CE59273911C093B.png"
              },
              "contents": [
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456373714E3C11601BB4179A58E3E3279CE59273911C093B.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456373714E3C11601BB4179A58E3E3279CE59273911C093B.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "UK",
              "cost": 15.0,
              "platoon": "1generic",
              "orders": 0.0
            },
            "1849302001345637164150A24951523650DAB9FA8763C87416F47CE7778": {
              "id": "1849302001345637164150A24951523650DAB9FA8763C87416F47CE7778",
              "recruit": {
                "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345637164150A24951523650DAB9FA8763C87416F47CE7778.png",
                "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345637164150A24951523650DAB9FA8763C87416F47CE7778.png"
              },
              "contents": [
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345637164150A24951523650DAB9FA8763C87416F47CE7778.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345637164150A24951523650DAB9FA8763C87416F47CE7778.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "UK",
              "cost": 5.0,
              "platoon": "1generic",
              "orders": 0.0
            }
          }
        },
        "ft-vehicle": {
          "1": {
            "18493020013456409346ADF5ED404A5A13ED1BD44E45760998BA58720C0": {
              "id": "18493020013456409346ADF5ED404A5A13ED1BD44E45760998BA58720C0",
              "recruit": {
                "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345640976CB040A26676DC9EBAF728983B569C4DFE74631E2.png",
                "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345640976CB040A26676DC9EBAF728983B569C4DFE74631E2.png"
              },
              "contents": [
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345640798D8CA01EC5E3F99B5A1461BA910F53E09216D1E39.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013455153971D29BAD3CCF87FFD0CCAE8066C7615F8FE674296.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "UK",
              "cost": 30.0,
              "platoon": "1generic",
              "orders": 0.0
            },
            "184930200134563795447CAB26D04BE4A588E0FDCB1E601C62AE9D8010C": {
              "id": "184930200134563795447CAB26D04BE4A588E0FDCB1E601C62AE9D8010C",
              "recruit": {
                "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345638007002CFD27A561237F38FB75157903E22E20F73471.png",
                "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345638007002CFD27A561237F38FB75157903E22E20F73471.png"
              },
              "contents": [
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345637824CA944595C67C24A38383C42573CACC9CC0C814C1.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc184930200134563789284A731A9CB291B1C43F839ED7F39A5F30EB78AC7.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "UK",
              "cost": 35.0,
              "platoon": "1generic",
              "orders": 0.0
            },
            "18493020013456380605192404170EDFEE5D933DD4952609B89E4F0D222": {
              "id": "18493020013456380605192404170EDFEE5D933DD4952609B89E4F0D222",
              "recruit": {
                "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456381165763A27ECE88B250C776A080CB25EBF1F794341A.png",
                "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456381165763A27ECE88B250C776A080CB25EBF1F794341A.png"
              },
              "contents": [
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345638175433D51AEE30C38AB81DFAEB068ECBA0115C1D8C4.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345638237C48613BEC6A4CDDB5BD0CD755C5E1AD6BA751EB8.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "UK",
              "cost": 30.0,
              "platoon": "1generic",
              "orders": 0.0
            },
            "184930200134563843102376D79D33E71462994BAAE0A6AB86B8C88A60A": {
              "id": "184930200134563843102376D79D33E71462994BAAE0A6AB86B8C88A60A",
              "recruit": {
                "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345638712B7951E3C79C64102DEEB8F277BC59B19AA825AF7.png",
                "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345638712B7951E3C79C64102DEEB8F277BC59B19AA825AF7.png"
              },
              "contents": [
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345638175433D51AEE30C38AB81DFAEB068ECBA0115C1D8C4.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345638237C48613BEC6A4CDDB5BD0CD755C5E1AD6BA751EB8.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "UK",
              "cost": 30.0,
              "platoon": "1generic",
              "orders": 0.0
            }
          },
          "2": {
            "1849302001345637722BEF8BB82D4D5ECE04626F532B59174F184880834": {
              "id": "1849302001345637722BEF8BB82D4D5ECE04626F532B59174F184880834",
              "recruit": {
                "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345637776F0C1AAA2725E5A285E4CE109332C5BC3B800B41C.png",
                "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345637776F0C1AAA2725E5A285E4CE109332C5BC3B800B41C.png"
              },
              "contents": [
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345652497EE4682156AE99AA74D72B554FCC4E7BB092FB773.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456525702327184CF2A00ACB019029F9486AB44A30FD27F0.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "UK",
              "cost": 75.0,
              "platoon": "1generic",
              "orders": 0.0
            },
            "18493020013456398191769DFB4DB68506FAB76DD418D18659B3FF3A9A1": {
              "id": "18493020013456398191769DFB4DB68506FAB76DD418D18659B3FF3A9A1",
              "recruit": {
                "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456398715D95D2D1A3881D54F8F5712A9CA44536B269ED25.png",
                "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456398715D95D2D1A3881D54F8F5712A9CA44536B269ED25.png"
              },
              "contents": [
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc184930200134563963491C81C3A684963B167EBFB1E285D4614701D6058.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013453784032FD03396D07FB148EAA6165BD9BE359458F0442F.png"
                },
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc184930200134563969061379BF9AAEFCD7F2B3CF09F39E67D18A5D6F7CD.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456397648E7A1C2ACFC40918522623CE2E2BA5687B5E378C.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "UK",
              "cost": 95.0,
              "platoon": "1generic",
              "orders": 0.0
            },
            "1849302001345639959413AACD51FF66CDB19813B8799AE346C1EF2EA22": {
              "id": "1849302001345639959413AACD51FF66CDB19813B8799AE346C1EF2EA22",
              "recruit": {
                "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456400155AA06D49552025DD615C61947BDCB5D68534B26B.png",
                "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456400155AA06D49552025DD615C61947BDCB5D68534B26B.png"
              },
              "contents": [
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc184930200134564011342B5C427E18C025295F317CCCDDEE6B882A37509.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456402119706F8021C1E1BD6572C7EFC51C2D9E728BFD3DE.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "UK",
              "cost": 75.0,
              "platoon": "1generic",
              "orders": 0.0
            },
            "1849302001345640537221024FF1969EC9C00311B512CC33C8AE8D4C3C4": {
              "id": "1849302001345640537221024FF1969EC9C00311B512CC33C8AE8D4C3C4",
              "recruit": {
                "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345640673ECFBCB17ED9EBB94DAD12387D8346C8FFF232128.png",
                "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345640673ECFBCB17ED9EBB94DAD12387D8346C8FFF232128.png"
              },
              "contents": [
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456402815EC5F537C7ACAF36646F2EF865339BF5BA5B9390.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc184930200134564034075BA45169E83B07FC4236DCAB680A3E31026B9B0.png"
                },
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345640400D30746F4E773CF320281153B186C631C8022FA9B.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc184930200134564046917AAECB2AC8CC88CC3EB61D7C3A8C93D849B55E7.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "UK",
              "cost": 25.0,
              "platoon": "1generic",
              "orders": 0.0
            }
          }
        },
        "ft-inf": {
          "1": {
            "18493020013456387882AC06E3D24A8311E4122CAF3F19053FF9BACC754": {
              "id": "18493020013456387882AC06E3D24A8311E4122CAF3F19053FF9BACC754",
              "recruit": {
                "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345638845675C6FE0675707D634DC72B6D59BC76A1614F280.png",
                "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345638845675C6FE0675707D634DC72B6D59BC76A1614F280.png"
              },
              "contents": [
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc184930200134563891592B7919C25708389288EA16D28A215B2E4339855.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345639000C345FEA6D7D45506B04B1BB15A668B90F082811E.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "UK",
              "cost": 20.0,
              "platoon": "1generic",
              "orders": 0.0
            },
            "18493020013456410289BE2787215E5040B25216FDDE4BED1D6F1FC420D": {
              "id": "18493020013456410289BE2787215E5040B25216FDDE4BED1D6F1FC420D",
              "recruit": {
                "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345641090FAA87F44A33FBDE335B5979576D5F8F25DC043AB.png",
                "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345641090FAA87F44A33FBDE335B5979576D5F8F25DC043AB.png"
              },
              "contents": [
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345641411279BE7DE22A726F46FD150D1CF40E9EB31FFE321.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc184930200134551535465FA2138EDE693C7CCD935D58FA0315A12C9493D.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "UK",
              "cost": 10.0,
              "platoon": "1generic",
              "orders": 0.0
            }
          }
        },
        "rc-hero": {
          "NaN": {
            "1849302001345648908EB6C5AC552C2B832E1B63C129525043BF818179E": {
              "id": "1849302001345648908EB6C5AC552C2B832E1B63C129525043BF818179E",
              "recruit": {
                "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345648994104BA414EF3B42D74A1F56E7F0474F0DA15DF9FD.png",
                "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345648994104BA414EF3B42D74A1F56E7F0474F0DA15DF9FD.png"
              },
              "contents": [
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456498776FAAC2607E1A5D219A7D59430539867B69E8020D.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345649939C03553A9BD1D2A18032B80A3B4EFF7D0D4583AD3.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "rc-hero",
              "subtype": NaN,
              "size": NaN,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "UK",
              "cost": 30.0,
              "platoon": "1generic",
              "orders": 0.0
            },
            "184930200134565049794BD450CDFC68B96EA338510DA354764A8F4B8EA": {
              "id": "184930200134565049794BD450CDFC68B96EA338510DA354764A8F4B8EA",
              "recruit": {
                "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456505504DE2DF505A3E8BA1FA8FC212B3F6318F251A3C36.png",
                "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456505504DE2DF505A3E8BA1FA8FC212B3F6318F251A3C36.png"
              },
              "contents": [
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc184930200134564521865012E78F54D52A67D4542F800C696C43D5C72DB.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456452932C6411183EB28D9B3A07462217FB54A119B552C9.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "rc-hero",
              "subtype": NaN,
              "size": NaN,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "UK",
              "cost": 35.0,
              "platoon": "1generic",
              "orders": 0.0
            },
            "1849302001345651794E0CABE05B916ED15E04261DDD2A8E8FA10C6A82D": {
              "id": "1849302001345651794E0CABE05B916ED15E04261DDD2A8E8FA10C6A82D",
              "recruit": {
                "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345651866231D7DAA9B78668C5D29BF173A60C8C12EF6D7A1.png",
                "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345651866231D7DAA9B78668C5D29BF173A60C8C12EF6D7A1.png"
              },
              "contents": [
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345637564DE522FC5638C4E5E44D329B02A51C57797621A9E.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456376629A9FA6C337C3BCB112F7F0DA06E09FB5CE02CA22.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "rc-hero",
              "subtype": NaN,
              "size": NaN,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "UK",
              "cost": 85.0,
              "platoon": "1generic",
              "orders": 0.0
            },
            "1849302001345653636FFF0082DA6C47138607AA6AC063EE3007093CAD3": {
              "id": "1849302001345653636FFF0082DA6C47138607AA6AC063EE3007093CAD3",
              "recruit": {
                "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345653696FB7F77E8E0015A10BA728436A5025EA6EEEA24FD.png",
                "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc1849302001345653696FB7F77E8E0015A10BA728436A5025EA6EEEA24FD.png"
              },
              "contents": [
                {
                  "front": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc18493020013456476277BE97343788985BABCC07CE43DE3E467CA314F72.png",
                  "back": "res/tiles\\V1-UK\\httpcloud3steamusercontentcomugc184930200134564767704018510E35C7B9C4319A6D62FD2A55A60CBAB87.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "rc-hero",
              "subtype": NaN,
              "size": NaN,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "UK",
              "cost": 30.0,
              "platoon": "1generic",
              "orders": 0.0
            }
          }
        }
      }
    }
  },
  "US": {
    "all": {
      "1generic": {
        "rc-hero": {
          "0": {
            "18493020013456331070A40086CBF9166A604F1B8492CCE198B13F72367": {
              "id": "18493020013456331070A40086CBF9166A604F1B8492CCE198B13F72367",
              "recruit": {
                "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456331701C1440F7A35BE6E002890C3F809A57B9A4128CD5.png",
                "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456331701C1440F7A35BE6E002890C3F809A57B9A4128CD5.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc184930200134563552747771AC855F242748653FD938755B291B768F8F6.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456355916F7704681829A478EDB0C0A981D26CA25DE99A1F.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "rc-hero",
              "subtype": "0",
              "size": NaN,
              "slots": "0",
              "source": "HoN-V1",
              "box": "all",
              "faction": "US",
              "cost": 25.0,
              "platoon": "1generic",
              "orders": 0.0
            },
            "1849302001345512985F607F0324EDF5E0224DB9602D187ACADA61BF5F0": {
              "id": "1849302001345512985F607F0324EDF5E0224DB9602D187ACADA61BF5F0",
              "recruit": {
                "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013455130738796CF58F7AF9F6F8273DBA8A2C7A3DE627F9B5E.png",
                "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013455130738796CF58F7AF9F6F8273DBA8A2C7A3DE627F9B5E.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013455128964D323BE676A95BE30EBFCC55212CB44F09C9BEC7.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345512934A56096C972F7D417CA9E20FC96AA03479BABC928.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "rc-hero",
              "subtype": "0",
              "size": NaN,
              "slots": "0",
              "source": "HoN-V1",
              "box": "all",
              "faction": "US",
              "cost": 30.0,
              "platoon": "1generic",
              "orders": 0.0
            },
            "18493020013454092229C6DFE645B1C44D74FB6C553B13B36E073F460DE": {
              "id": "18493020013454092229C6DFE645B1C44D74FB6C553B13B36E073F460DE",
              "recruit": {
                "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345409289707629CC74160B52CD7A0CBFCADCB01D2D4EC937.png",
                "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345409289707629CC74160B52CD7A0CBFCADCB01D2D4EC937.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013455131212519DB289A1915BEC53A20F50870C9AEAF831E80.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345513159F66E04E789BF24F1BC28603CD31679BB2320B85C.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "rc-hero",
              "subtype": "0",
              "size": NaN,
              "slots": "0",
              "source": "HoN-V1",
              "box": "all",
              "faction": "US",
              "cost": 30.0,
              "platoon": "1generic",
              "orders": 0.0
            },
            "18493020013456162141847340FCC25612F7DC261848BB117AF56CE757E": {
              "id": "18493020013456162141847340FCC25612F7DC261848BB117AF56CE757E",
              "recruit": {
                "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456162591F5EF2FE94D598C3F90008AA7865AC0ECB29CDAC.png",
                "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456162591F5EF2FE94D598C3F90008AA7865AC0ECB29CDAC.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345616304781BFD09B7F01DF2A221C442325D113C9CC0A9B0.jpg",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013454108581A655BEE74E87BC166D0D138C15A6454E97B8864.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "rc-hero",
              "subtype": "0",
              "size": NaN,
              "slots": "0",
              "source": "HoN-V1",
              "box": "all",
              "faction": "US",
              "cost": 25.0,
              "platoon": "1generic",
              "orders": 0.0
            },
            "1849302001345512805048D716796070F878AC7278B38102661345EA01F": {
              "id": "1849302001345512805048D716796070F878AC7278B38102661345EA01F",
              "recruit": {
                "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345512851EF7435B154D7C45ED34B3779ACA2D558DF4ED000.png",
                "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345512851EF7435B154D7C45ED34B3779ACA2D558DF4ED000.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc184930200134551266955581160D8EB1F51EC7B667CE777F8827BD767A2.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013455127572FBDAEA861E17235C7B2093ABDD7ACF4D561D609.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "rc-hero",
              "subtype": "0",
              "size": NaN,
              "slots": "0",
              "source": "HoN-V1",
              "box": "all",
              "faction": "US",
              "cost": 75.0,
              "platoon": "1generic",
              "orders": 1.0
            }
          }
        },
        "gear": {
          "1": {
            "18493020013456330603CEC8C3C26BC83E9D59F9C604D690C724353C3BC": {
              "id": "18493020013456330603CEC8C3C26BC83E9D59F9C604D690C724353C3BC",
              "recruit": {
                "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456330603CEC8C3C26BC83E9D59F9C604D690C724353C3BC.png",
                "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456330603CEC8C3C26BC83E9D59F9C604D690C724353C3BC.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456330603CEC8C3C26BC83E9D59F9C604D690C724353C3BC.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456330603CEC8C3C26BC83E9D59F9C604D690C724353C3BC.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "US",
              "cost": 10.0,
              "platoon": "1generic",
              "orders": 0.0
            },
            "1849302001345628831EFAEA166E905CBD9A3030CFAC6BF513F3114B206": {
              "id": "1849302001345628831EFAEA166E905CBD9A3030CFAC6BF513F3114B206",
              "recruit": {
                "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345628831EFAEA166E905CBD9A3030CFAC6BF513F3114B206.png",
                "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345628831EFAEA166E905CBD9A3030CFAC6BF513F3114B206.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345628831EFAEA166E905CBD9A3030CFAC6BF513F3114B206.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345628831EFAEA166E905CBD9A3030CFAC6BF513F3114B206.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "US",
              "cost": 10.0,
              "platoon": "1generic",
              "orders": 0.0
            },
            "1849302001345624376C532F4A65CB1F330B8402EBD82403E1F3F5264EB": {
              "id": "1849302001345624376C532F4A65CB1F330B8402EBD82403E1F3F5264EB",
              "recruit": {
                "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345624376C532F4A65CB1F330B8402EBD82403E1F3F5264EB.png",
                "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345624376C532F4A65CB1F330B8402EBD82403E1F3F5264EB.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345624376C532F4A65CB1F330B8402EBD82403E1F3F5264EB.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345624376C532F4A65CB1F330B8402EBD82403E1F3F5264EB.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "US",
              "cost": 20.0,
              "platoon": "1generic",
              "orders": 0.0
            },
            "184930200134562467446530671F94BA30B49FC6D92AC1E0FB686327125": {
              "id": "184930200134562467446530671F94BA30B49FC6D92AC1E0FB686327125",
              "recruit": {
                "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc184930200134562467446530671F94BA30B49FC6D92AC1E0FB686327125.png",
                "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc184930200134562467446530671F94BA30B49FC6D92AC1E0FB686327125.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc184930200134562467446530671F94BA30B49FC6D92AC1E0FB686327125.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc184930200134562467446530671F94BA30B49FC6D92AC1E0FB686327125.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "US",
              "cost": 30.0,
              "platoon": "1generic",
              "orders": 0.0
            },
            "18493020013456254292959BDD4A1359BF4CC10771A1055B937A5065E88": {
              "id": "18493020013456254292959BDD4A1359BF4CC10771A1055B937A5065E88",
              "recruit": {
                "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456254292959BDD4A1359BF4CC10771A1055B937A5065E88.png",
                "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456254292959BDD4A1359BF4CC10771A1055B937A5065E88.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456254292959BDD4A1359BF4CC10771A1055B937A5065E88.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456254292959BDD4A1359BF4CC10771A1055B937A5065E88.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "US",
              "cost": 10.0,
              "platoon": "1generic",
              "orders": 0.0
            },
            "1849302001345627633D88A056762E004BBDFF22BD7BFE4049651152B1C": {
              "id": "1849302001345627633D88A056762E004BBDFF22BD7BFE4049651152B1C",
              "recruit": {
                "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345627633D88A056762E004BBDFF22BD7BFE4049651152B1C.png",
                "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345627633D88A056762E004BBDFF22BD7BFE4049651152B1C.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345627633D88A056762E004BBDFF22BD7BFE4049651152B1C.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345627633D88A056762E004BBDFF22BD7BFE4049651152B1C.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "US",
              "cost": 5.0,
              "platoon": "1generic",
              "orders": 0.0
            },
            "1849302001345628439F0687721AE5176782EE59421A1DDA7BEAEFFD74F": {
              "id": "1849302001345628439F0687721AE5176782EE59421A1DDA7BEAEFFD74F",
              "recruit": {
                "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345628439F0687721AE5176782EE59421A1DDA7BEAEFFD74F.png",
                "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345628439F0687721AE5176782EE59421A1DDA7BEAEFFD74F.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345628439F0687721AE5176782EE59421A1DDA7BEAEFFD74F.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345628439F0687721AE5176782EE59421A1DDA7BEAEFFD74F.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "US",
              "cost": 5.0,
              "platoon": "1generic",
              "orders": 0.0
            },
            "18493020013456283812047775B2DF4518E944A7801B5D490FE76B3B53E": {
              "id": "18493020013456283812047775B2DF4518E944A7801B5D490FE76B3B53E",
              "recruit": {
                "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456283812047775B2DF4518E944A7801B5D490FE76B3B53E.png",
                "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456283812047775B2DF4518E944A7801B5D490FE76B3B53E.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456283812047775B2DF4518E944A7801B5D490FE76B3B53E.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456283812047775B2DF4518E944A7801B5D490FE76B3B53E.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "US",
              "cost": 15.0,
              "platoon": "1generic",
              "orders": 0.0
            }
          }
        },
        "ft-vehicle": {
          "1": {
            "18493020013455135423E081DCABE86EEE5014C6AEC5F7E2D3849CA61CF": {
              "id": "18493020013455135423E081DCABE86EEE5014C6AEC5F7E2D3849CA61CF",
              "recruit": {
                "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345513601AB1CFB71C5226C657A80EA40D6643344B7AC6A35.png",
                "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345513601AB1CFB71C5226C657A80EA40D6643344B7AC6A35.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc184930200134551341324E99EA56FA69E87F2DE4602F5E241845042CA4B.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345513472BE6DBBD26FBA73343C574F9557FCB877A47AC9BB.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "US",
              "cost": 25.0,
              "platoon": "1generic",
              "orders": 0.0
            },
            "1849302001345513778DD8698B14DF60EC88E5B58AADECC085A5B5EA910": {
              "id": "1849302001345513778DD8698B14DF60EC88E5B58AADECC085A5B5EA910",
              "recruit": {
                "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345513810E4566FDA78DF01F7D77B52CBF145FFBD71EE2AD5.png",
                "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345513810E4566FDA78DF01F7D77B52CBF145FFBD71EE2AD5.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013455136577A0F35F27BEBF835CAEF0E1474A91A4F75379043.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc184930200134551371838B56620DFF47470B02EAEC7BC1D1019ED893516.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "US",
              "cost": 35.0,
              "platoon": "1generic",
              "orders": 0.0
            },
            "1849302001345633899AD3AC59409598811261891BB6DA687C5627A22DA": {
              "id": "1849302001345633899AD3AC59409598811261891BB6DA687C5627A22DA",
              "recruit": {
                "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456339803BDD2533369C173EE0F1C4FA601B58E6E05821F7.png",
                "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456339803BDD2533369C173EE0F1C4FA601B58E6E05821F7.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345626510E3FEA12F94A69EEB4B46AB0C7590CC962ECC9DA2.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345626571E13BA4CB722CF6A15B2C76CA7382376483F20999.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "US",
              "cost": 25.0,
              "platoon": "1generic",
              "orders": 0.0
            },
            "1849302001345634500BB3E3773AABCA9FF7001DC42AB103C088C98F8F6": {
              "id": "1849302001345634500BB3E3773AABCA9FF7001DC42AB103C088C98F8F6",
              "recruit": {
                "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456345695E4DB24EF87062B567C45C821BCAB90827281D4D.png",
                "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456345695E4DB24EF87062B567C45C821BCAB90827281D4D.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345633654DC06E5EE44C3B9F944847718B53E703C6B2A07A8.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456337219146CDDEA38F705008A1C1AD80B17213875AA1AC.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "US",
              "cost": 35.0,
              "platoon": "1generic",
              "orders": 0.0
            },
            "1849302001345634888E8360DE422E6923F98B7118DDAF8C951083F7DC8": {
              "id": "1849302001345634888E8360DE422E6923F98B7118DDAF8C951083F7DC8",
              "recruit": {
                "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345635070B4FE352B3A1862175C91E70C1C2C7CE9D54C996D.png",
                "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345635070B4FE352B3A1862175C91E70C1C2C7CE9D54C996D.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456268405381641FCC7C9329BBCD89AD367F5E317375CB79.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345626907B59ACECD0271E25F426C9A575630D573CA9D3CFF.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "US",
              "cost": 35.0,
              "platoon": "1generic",
              "orders": 0.0
            },
            "1849302001345635117FA72164BD74AB75A3227B81EFEDB4B7F6DCB7F32": {
              "id": "1849302001345635117FA72164BD74AB75A3227B81EFEDB4B7F6DCB7F32",
              "recruit": {
                "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc184930200134563516719F20FE37AB498BA6863448C084ECA2FEA0F88CE.png",
                "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc184930200134563516719F20FE37AB498BA6863448C084ECA2FEA0F88CE.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc184930200134562095787C43434015E4F61F4C97E96891E47BE634D22EC.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc184930200134562103421AEF7088D9707354E2B3D987F6A5F62A1AE2AD8.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "US",
              "cost": 30.0,
              "platoon": "1generic",
              "orders": 0.0
            }
          },
          "2": {
            "18493020013455139576F8101916CE03576711169127B160ED5C669B498": {
              "id": "18493020013455139576F8101916CE03576711169127B160ED5C669B498",
              "recruit": {
                "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013455140023C5215094ACC19A93A08C48DB5CEE5485EB0BE54.png",
                "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013455140023C5215094ACC19A93A08C48DB5CEE5485EB0BE54.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013455138584DCD5BCF34FA94B53DEDFF7D8047C01C6FBF1754.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013455139054D8C73447D5189B467BA4540F1D2B313FA206DEE.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "US",
              "cost": 50.0,
              "platoon": "1generic",
              "orders": 0.0
            },
            "18493020013455141493D4B78694A4917FA68C2C710A5D11A3F664FE6BC": {
              "id": "18493020013455141493D4B78694A4917FA68C2C710A5D11A3F664FE6BC",
              "recruit": {
                "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc184930200134551419480A1E7BE1855F177D14D7CC1244CCC14CC071467.png",
                "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc184930200134551419480A1E7BE1855F177D14D7CC1244CCC14CC071467.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345514049BBE1480D2A4C6286941A5D070D7A143C8B8DD3F3.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013455141066A7D5E64FAA60A5D47CA9D3299C704A3CBD7FD86.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "US",
              "cost": 60.0,
              "platoon": "1generic",
              "orders": 0.0
            },
            "18493020013456262103662D50EB93D08A3D822850ADC526A26AA07BC1F": {
              "id": "18493020013456262103662D50EB93D08A3D822850ADC526A26AA07BC1F",
              "recruit": {
                "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345626259539417F29B102A35EB7513C649CA1F279E80F837.png",
                "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345626259539417F29B102A35EB7513C649CA1F279E80F837.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc184930200134562871430C17C0EF32781DB661247AA17DF4B2581964533.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456287689C9D53AAA1DC99883DE3AAD22DB1ADAB412030E2.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "US",
              "cost": 50.0,
              "platoon": "1generic",
              "orders": 0.0
            }
          }
        },
        "ft-inf": {
          "1": {
            "18493020013455133309AF1884753C74BF7EBB395EF8ABD450ED501F6A4": {
              "id": "18493020013455133309AF1884753C74BF7EBB395EF8ABD450ED501F6A4",
              "recruit": {
                "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013455133689F8587F4E0B0D425D17C16EC85F7443B489770AA.png",
                "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013455133689F8587F4E0B0D425D17C16EC85F7443B489770AA.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013455132493A98C156065B20822F991C271C0B48A6F0678ADB.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013455132880D9C24DD4FFF0DB89B8E6B7A14AC217781ECE18A.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "US",
              "cost": 15.0,
              "platoon": "1generic",
              "orders": 0.0
            },
            "184930200134561586238857047E5E2767B9D5F1AC6C461B2092461B01E": {
              "id": "184930200134561586238857047E5E2767B9D5F1AC6C461B2092461B01E",
              "recruit": {
                "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345615914A373CA096340D0F11CA32FE66558769ED4E60F02.png",
                "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345615914A373CA096340D0F11CA32FE66558769ED4E60F02.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456157362FA390CCB616744FD9FE6DB14D170ED15388BA9B.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345515633F17C76D7C1E7EC37E2537B1E4B23B529909E1650.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "US",
              "cost": 30.0,
              "platoon": "1generic",
              "orders": 0.0
            },
            "18493020013456159544C257DCD1FDC54C9B27E9C61BB549F6646C96FB5": {
              "id": "18493020013456159544C257DCD1FDC54C9B27E9C61BB549F6646C96FB5",
              "recruit": {
                "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345615998DC045A0E9D7847CC22FEB1409EBDDA5975D0ADE8.png",
                "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345615998DC045A0E9D7847CC22FEB1409EBDDA5975D0ADE8.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456158009CA12818B716069B3185B2F7C704DBC48750E265.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345515633F17C76D7C1E7EC37E2537B1E4B23B529909E1650.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "US",
              "cost": 20.0,
              "platoon": "1generic",
              "orders": 0.0
            },
            "1849302001345616057676EDFEF2F077272072664E35A06FDEF0B311C6D": {
              "id": "1849302001345616057676EDFEF2F077272072664E35A06FDEF0B311C6D",
              "recruit": {
                "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345616115C662C4A4B9494BD42700100752C7112FD6A5B712.png",
                "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345616115C662C4A4B9494BD42700100752C7112FD6A5B712.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456161659E97A8CB5AAB6F3F6409DB8E6B45052A1BE502C6.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013455151994A81A82681D47CDD39603CF4A6EDF6BE5E44E747.png"
                },
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456161659E97A8CB5AAB6F3F6409DB8E6B45052A1BE502C6.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013455151994A81A82681D47CDD39603CF4A6EDF6BE5E44E747.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "US",
              "cost": 10.0,
              "platoon": "1generic",
              "orders": 0.0
            }
          }
        }
      },
      "rangers-yby": {
        "rc-hero": {
          "0": {
            "1849302001345619861B8AD55E5658EC9C9B91952EBE9896B66D0760762": {
              "id": "1849302001345619861B8AD55E5658EC9C9B91952EBE9896B66D0760762",
              "recruit": {
                "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345619922BA063B6B45924921C2B07906333359E40D37220E.png",
                "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345619922BA063B6B45924921C2B07906333359E40D37220E.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456202160F2F3270D8DFBC2E2CC9BB67F986FFFD59557FFC.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc184930200134562028500B3D9FB99255ECEDE68594383CC1B4BC4608F29.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "rc-hero",
              "subtype": "0",
              "size": NaN,
              "slots": "0",
              "source": "HoN-V1",
              "box": "all",
              "faction": "US",
              "cost": 20.0,
              "platoon": "rangers-yby",
              "orders": 0.0
            },
            "1849302001345619614658DFD1A6F76762F5D144B3B78FF5B0CC1AFF630": {
              "id": "1849302001345619614658DFD1A6F76762F5D144B3B78FF5B0CC1AFF630",
              "recruit": {
                "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456197100C2E77ADFE18D0A5333C2AD85F705561D3CFF3AE.png",
                "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456197100C2E77ADFE18D0A5333C2AD85F705561D3CFF3AE.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345620346CF49BD6274B68ECDE45E1507EEE98DFE337D7057.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013455151994A81A82681D47CDD39603CF4A6EDF6BE5E44E747.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "rc-hero",
              "subtype": "0",
              "size": NaN,
              "slots": "0",
              "source": "HoN-V1",
              "box": "all",
              "faction": "US",
              "cost": 20.0,
              "platoon": "rangers-yby",
              "orders": 0.0
            },
            "184930200134561997649A63E658CF212CB159FD113B87EBD5192CB3D38": {
              "id": "184930200134561997649A63E658CF212CB159FD113B87EBD5192CB3D38",
              "recruit": {
                "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345620044E2761F6D46691BC678A5347EC80F5661A120B484.png",
                "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345620044E2761F6D46691BC678A5347EC80F5661A120B484.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc184930200134562009874B2965346675E5876A777A9A573B12802034C3F.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345620155015F327B0F923F5CA64A94D46FFD4FAECBB9AA17.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "rc-hero",
              "subtype": "0",
              "size": NaN,
              "slots": "0",
              "source": "HoN-V1",
              "box": "all",
              "faction": "US",
              "cost": 25.0,
              "platoon": "rangers-yby",
              "orders": 0.0
            }
          }
        },
        "rc-plat": {
          "M2*-D1-0-D1-D2": {
            "1849302001345618219F41A97C074C1355A7285001A1CDA7C866F6AF231": {
              "id": "1849302001345618219F41A97C074C1355A7285001A1CDA7C866F6AF231",
              "recruit": {
                "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc184930200134561832656AD3A31BEE30D98F7188448269030E345926C4E.png",
                "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc184930200134561832656AD3A31BEE30D98F7188448269030E345926C4E.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345618447E085BEB34BD8A567FEB7ADD3CD73AC2412A747C7.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345618506B571A1C418B9F836727303FC603C921720B85E69.png"
                },
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345616730D09B268BBAA8256FC5CFD82E07B1EF6CE1941794.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013455151994A81A82681D47CDD39603CF4A6EDF6BE5E44E747.png"
                },
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc184930200134561680591A3F698437C61A8244E915EC29809EDAF4D1BF7.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456168815486CD2D2A676AF1AEF523BD45A4DC107C462777.png"
                },
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456169441C81B5A60AFDD14C4107568BD5BEC46AFDDC7DE8.png",
                  "back": NaN
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 1,
                "D1": 2,
                "D2": 1,
                "G1": 0,
                "G2": 0
              },
              "type": "rc-plat",
              "subtype": "M2*-D1-0-D1-D2",
              "size": NaN,
              "slots": "M2*-D1-0-D1-D2",
              "source": "HoN-V1",
              "box": "all",
              "faction": "US",
              "cost": 80.0,
              "platoon": "rangers-yby",
              "orders": 2.0
            }
          },
          "D1-M1-0-M2": {
            "1849302001345616395F7F0D09D541FCFDD05F6D00B01B5EE7B56E2CD47": {
              "id": "1849302001345616395F7F0D09D541FCFDD05F6D00B01B5EE7B56E2CD47",
              "recruit": {
                "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456164731247AADFB3C1075034506E86E16693A8BECFDA8A.png",
                "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456164731247AADFB3C1075034506E86E16693A8BECFDA8A.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc184930200134561657546999BF4B4824E29988CA56E08F7386D2175259E.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345616632978AA94012E5EFEC6E29A11C5F4D611218E7DAB7.png"
                },
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345616730D09B268BBAA8256FC5CFD82E07B1EF6CE1941794.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013455151994A81A82681D47CDD39603CF4A6EDF6BE5E44E747.png"
                },
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc184930200134561680591A3F698437C61A8244E915EC29809EDAF4D1BF7.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456168815486CD2D2A676AF1AEF523BD45A4DC107C462777.png"
                },
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456169441C81B5A60AFDD14C4107568BD5BEC46AFDDC7DE8.png",
                  "back": NaN
                }
              ],
              "available_slots": {
                "M1": 1,
                "M2": 1,
                "D1": 1,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "rc-plat",
              "subtype": "D1-M1-0-M2",
              "size": NaN,
              "slots": "D1-M1-0-M2",
              "source": "HoN-V1",
              "box": "all",
              "faction": "US",
              "cost": 85.0,
              "platoon": "rangers-yby",
              "orders": 2.0
            }
          }
        },
        "gear": {
          "1": {
            "18493020013456176966D0B206BE39596B2B4D4D09E8F6093BFD3ED247E": {
              "id": "18493020013456176966D0B206BE39596B2B4D4D09E8F6093BFD3ED247E",
              "recruit": {
                "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456176966D0B206BE39596B2B4D4D09E8F6093BFD3ED247E.png",
                "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456176966D0B206BE39596B2B4D4D09E8F6093BFD3ED247E.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456176966D0B206BE39596B2B4D4D09E8F6093BFD3ED247E.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456176966D0B206BE39596B2B4D4D09E8F6093BFD3ED247E.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "US",
              "cost": 10.0,
              "platoon": "rangers-yby",
              "orders": 0.0
            },
            "18493020013456170626765508A67C6CBE3C63CFA69A0D1F7B47CCEE421": {
              "id": "18493020013456170626765508A67C6CBE3C63CFA69A0D1F7B47CCEE421",
              "recruit": {
                "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456170626765508A67C6CBE3C63CFA69A0D1F7B47CCEE421.png",
                "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456170626765508A67C6CBE3C63CFA69A0D1F7B47CCEE421.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456170626765508A67C6CBE3C63CFA69A0D1F7B47CCEE421.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456170626765508A67C6CBE3C63CFA69A0D1F7B47CCEE421.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "US",
              "cost": 20.0,
              "platoon": "rangers-yby",
              "orders": 0.0
            }
          }
        },
        "ft-inf": {
          "1": {
            "1849302001345619231D0EE831027C10139A4EC8F68F63404F7F85772ED": {
              "id": "1849302001345619231D0EE831027C10139A4EC8F68F63404F7F85772ED",
              "recruit": {
                "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345619299FEB2C5A12066FB7B08C403A49CA3FF0900050D3E.png",
                "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345619299FEB2C5A12066FB7B08C403A49CA3FF0900050D3E.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc184930200134561915015A2D7D86B6929B0B0AA9C66AAC6E9BADB799FF6.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013455151994A81A82681D47CDD39603CF4A6EDF6BE5E44E747.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "US",
              "cost": 15.0,
              "platoon": "rangers-yby",
              "orders": 0.0
            },
            "18493020013456193514F4046BCFC623309E7D86C453D7FEF6DBF88AAEC": {
              "id": "18493020013456193514F4046BCFC623309E7D86C453D7FEF6DBF88AAEC",
              "recruit": {
                "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345619408B74FF309654829B34B46D64DD7655EC7C6E37BAF.png",
                "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345619408B74FF309654829B34B46D64DD7655EC7C6E37BAF.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345618738EB143FBF6E083C8B5F5791FF873C3AD948557363.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345618826D5D165C36441CB2A5CCD1700E6A92C0399DB007E.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "US",
              "cost": 15.0,
              "platoon": "rangers-yby",
              "orders": 0.0
            }
          },
          "2": {
            "18493020013456186159DDE13C27684875FE4D3E5C7D7397D3321B8581F": {
              "id": "18493020013456186159DDE13C27684875FE4D3E5C7D7397D3321B8581F",
              "recruit": {
                "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345618684F57F2E1084E787B1BF4B0D0AFA560012AB38BC19.png",
                "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345618684F57F2E1084E787B1BF4B0D0AFA560012AB38BC19.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345616730D09B268BBAA8256FC5CFD82E07B1EF6CE1941794.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013455151994A81A82681D47CDD39603CF4A6EDF6BE5E44E747.png"
                },
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc184930200134561680591A3F698437C61A8244E915EC29809EDAF4D1BF7.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456168815486CD2D2A676AF1AEF523BD45A4DC107C462777.png"
                },
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456169441C81B5A60AFDD14C4107568BD5BEC46AFDDC7DE8.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345617006805B1EA6EC38870EE1D85E6B7A199A2700DCC241.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "US",
              "cost": 60.0,
              "platoon": "rangers-yby",
              "orders": 0.0
            },
            "1849302001345618888BE2ABFD8F25D52927A9C3F0062E664D96833B04E": {
              "id": "1849302001345618888BE2ABFD8F25D52927A9C3F0062E664D96833B04E",
              "recruit": {
                "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345618950D5AF3E0D72C2776223A2A1F879509022C0240378.png",
                "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345618950D5AF3E0D72C2776223A2A1F879509022C0240378.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc184930200134561680591A3F698437C61A8244E915EC29809EDAF4D1BF7.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456168815486CD2D2A676AF1AEF523BD45A4DC107C462777.png"
                },
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456169441C81B5A60AFDD14C4107568BD5BEC46AFDDC7DE8.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345617006805B1EA6EC38870EE1D85E6B7A199A2700DCC241.png"
                },
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345618738EB143FBF6E083C8B5F5791FF873C3AD948557363.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345618826D5D165C36441CB2A5CCD1700E6A92C0399DB007E.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "US",
              "cost": 60.0,
              "platoon": "rangers-yby",
              "orders": 0.0
            },
            "18493020013456190104638E6B34CF737DE3B177BAB0552BBEC52831367": {
              "id": "18493020013456190104638E6B34CF737DE3B177BAB0552BBEC52831367",
              "recruit": {
                "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc184930200134561907143E8F0411CA8D08DD065D358B9DBA5AA71ABBA4E.png",
                "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc184930200134561907143E8F0411CA8D08DD065D358B9DBA5AA71ABBA4E.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345616730D09B268BBAA8256FC5CFD82E07B1EF6CE1941794.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013455151994A81A82681D47CDD39603CF4A6EDF6BE5E44E747.png"
                },
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345616730D09B268BBAA8256FC5CFD82E07B1EF6CE1941794.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013455151994A81A82681D47CDD39603CF4A6EDF6BE5E44E747.png"
                },
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc184930200134561915015A2D7D86B6929B0B0AA9C66AAC6E9BADB799FF6.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013455151994A81A82681D47CDD39603CF4A6EDF6BE5E44E747.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "US",
              "cost": 50.0,
              "platoon": "rangers-yby",
              "orders": 0.0
            }
          }
        }
      },
      "recon-gyg": {
        "rc-hero": {
          "0": {
            "1849302001345635874641370539EBF2EAE883A7686387CBEDBA76B5C5F": {
              "id": "1849302001345635874641370539EBF2EAE883A7686387CBEDBA76B5C5F",
              "recruit": {
                "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345635939193A7EAAA3B02D3B4EA17969DAE12E8BD4B9DDB8.png",
                "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345635939193A7EAAA3B02D3B4EA17969DAE12E8BD4B9DDB8.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345632703936F14232DA94A5EE935DE8069193FCA949C6789.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013454106526A08E8D91AA8D80F966B634549906066F2419135.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "rc-hero",
              "subtype": "0",
              "size": NaN,
              "slots": "0",
              "source": "HoN-V1",
              "box": "all",
              "faction": "US",
              "cost": 15.0,
              "platoon": "recon-gyg",
              "orders": 0.0
            }
          }
        },
        "rc-plat": {
          "D1-D1-0-D2": {
            "1849302001345636899A880430AA1D6E3D41E76AE61D02B863B8DB3E9CD": {
              "id": "1849302001345636899A880430AA1D6E3D41E76AE61D02B863B8DB3E9CD",
              "recruit": {
                "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345636966A6B94C8202111E8CDE78E95D738C9BD4ABC82125.png",
                "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345636966A6B94C8202111E8CDE78E95D738C9BD4ABC82125.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345624206FB0FBF20DD1F8AC09961D13B78E308783758E282.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013454106526A08E8D91AA8D80F966B634549906066F2419135.png"
                },
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456249556C790E71BA3DBDDE225361B008E92962E45C1329.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456314914A81A82681D47CDD39603CF4A6EDF6BE5E44E747.png"
                },
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc184930200134562349379C84DABEB1FEC3E0E3554FB958F6E28C9AD46AD.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345623559898632CDC03C77A7631E3D8C59D0CAD71E4F7076.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 2,
                "D2": 1,
                "G1": 0,
                "G2": 0
              },
              "type": "rc-plat",
              "subtype": "D1-D1-0-D2",
              "size": NaN,
              "slots": "D1-D1-0-D2",
              "source": "HoN-V1",
              "box": "all",
              "faction": "US",
              "cost": 60.0,
              "platoon": "recon-gyg",
              "orders": 1.0
            }
          }
        },
        "gear": {
          "1": {
            "18493020013456359901C4B82C3E0FA474008A9B3E136E746E32D8EF2FD": {
              "id": "18493020013456359901C4B82C3E0FA474008A9B3E136E746E32D8EF2FD",
              "recruit": {
                "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456359901C4B82C3E0FA474008A9B3E136E746E32D8EF2FD.png",
                "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456359901C4B82C3E0FA474008A9B3E136E746E32D8EF2FD.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345622963CD5F6D0C70D2329C3975F81742F0021F10177E4C.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456314914A81A82681D47CDD39603CF4A6EDF6BE5E44E747.png"
                },
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345622963CD5F6D0C70D2329C3975F81742F0021F10177E4C.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456314914A81A82681D47CDD39603CF4A6EDF6BE5E44E747.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "US",
              "cost": 5.0,
              "platoon": "recon-gyg",
              "orders": 0.0
            }
          }
        },
        "ft-vehicle": {
          "1": {
            "184930200134563640788B40D43581B3B2F7C18AFEFBA11E659FA166C37": {
              "id": "184930200134563640788B40D43581B3B2F7C18AFEFBA11E659FA166C37",
              "recruit": {
                "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345636483727EA60D80DD0E1B5BEFB817B3A964D54BDC2736.png",
                "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345636483727EA60D80DD0E1B5BEFB817B3A964D54BDC2736.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc184930200134563675103E6E44F0586E9CD6B640F74FF08450290DF261F.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345636812D40FDF3FD5F1F4F8ED38B5D2D4F32724B397B4D5.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "US",
              "cost": 25.0,
              "platoon": "recon-gyg",
              "orders": 0.0
            }
          }
        },
        "ft-inf": {
          "2": {
            "1849302001345634383737455F64EB862C36632AB13D58F842EF75CC041": {
              "id": "1849302001345634383737455F64EB862C36632AB13D58F842EF75CC041",
              "recruit": {
                "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345634447A5DD087951EC874D1F36EFFCEB1A9119AB7F96B8.png",
                "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345634447A5DD087951EC874D1F36EFFCEB1A9119AB7F96B8.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456249556C790E71BA3DBDDE225361B008E92962E45C1329.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456314914A81A82681D47CDD39603CF4A6EDF6BE5E44E747.png"
                },
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc184930200134562632612C9E2F877C9116392EA8260CEEB3D176FD9F63A.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456314914A81A82681D47CDD39603CF4A6EDF6BE5E44E747.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "US",
              "cost": 25.0,
              "platoon": "recon-gyg",
              "orders": 0.0
            },
            "18493020013456356459B4CC5B8789DBC3411887EFEF211A0B3FFFE6BC8": {
              "id": "18493020013456356459B4CC5B8789DBC3411887EFEF211A0B3FFFE6BC8",
              "recruit": {
                "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc184930200134563570281243D0C19AD782B7BB445DB39EA5CE8EF9548FB.png",
                "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc184930200134563570281243D0C19AD782B7BB445DB39EA5CE8EF9548FB.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456249556C790E71BA3DBDDE225361B008E92962E45C1329.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456314914A81A82681D47CDD39603CF4A6EDF6BE5E44E747.png"
                },
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345621161991C15AE97CDE798619AC803B7A892B8737CB52F.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345621278D7480DAC4B23596416EC92345EEE1390AC5529FE.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "US",
              "cost": 30.0,
              "platoon": "recon-gyg",
              "orders": 0.0
            }
          }
        }
      },
      "weapon-yrb": {
        "rc-hero": {
          "0": {
            "184930200134562598710A6BBDB3B245759F0B13CAABB6C2EA2FA253967": {
              "id": "184930200134562598710A6BBDB3B245759F0B13CAABB6C2EA2FA253967",
              "recruit": {
                "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456260821D23A1AF1B2C5CAA1954F71F86867830098850E3.png",
                "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456260821D23A1AF1B2C5CAA1954F71F86867830098850E3.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc184930200134562122678A76EC555E45E05A109760330268EB98AB0E33D.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345621278D7480DAC4B23596416EC92345EEE1390AC5529FE.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "rc-hero",
              "subtype": "0",
              "size": NaN,
              "slots": "0",
              "source": "HoN-V1",
              "box": "all",
              "faction": "US",
              "cost": 15.0,
              "platoon": "weapon-yrb",
              "orders": 0.0
            }
          }
        },
        "rc-plat": {
          "M2*-D1-0-D1-D2": {
            "1849302001345516103AE19240C6B6438A6CA9636B0057C19E772AB64E3": {
              "id": "1849302001345516103AE19240C6B6438A6CA9636B0057C19E772AB64E3",
              "recruit": {
                "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345516168CB2E57166ADD8192CC3CD80FEB8F260312DC6672.png",
                "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345516168CB2E57166ADD8192CC3CD80FEB8F260312DC6672.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345629069E32731D9E94E5A182568139D858A9E9C0D66B834.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345629131D93A5EBC0CF44AFAC2CEB6D04918560AC3CCAAA1.png"
                },
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456208164D6977A72CBD93D7517EFFC99ECE5FAEA1BFBB6A.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345620885D08ABFEFE0BD1548A9C190A9E21148E140C345CD.png"
                },
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456256346FF53E2E00146B7E589E79A3FCFA816F20CA26EA.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345625691F24701B5B3664556A28FA0C753870C15A6ACE8E0.png"
                },
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc184930200134562524709276FA206852B05E9F73F1F7664D2BED80A4863.png",
                  "back": NaN
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 1,
                "D1": 2,
                "D2": 1,
                "G1": 0,
                "G2": 0
              },
              "type": "rc-plat",
              "subtype": "M2*-D1-0-D1-D2",
              "size": NaN,
              "slots": "M2*-D1-0-D1-D2",
              "source": "HoN-V1",
              "box": "all",
              "faction": "US",
              "cost": 55.0,
              "platoon": "weapon-yrb",
              "orders": 2.0
            }
          }
        },
        "gear": {
          "1": {
            "1849302001345633844BEB58686C7853289427355B5280AAD3941B7BFB3": {
              "id": "1849302001345633844BEB58686C7853289427355B5280AAD3941B7BFB3",
              "recruit": {
                "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345633844BEB58686C7853289427355B5280AAD3941B7BFB3.png",
                "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345633844BEB58686C7853289427355B5280AAD3941B7BFB3.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345633844BEB58686C7853289427355B5280AAD3941B7BFB3.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345633844BEB58686C7853289427355B5280AAD3941B7BFB3.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "US",
              "cost": 10.0,
              "platoon": "weapon-yrb",
              "orders": 0.0
            },
            "184930200134551681665D8F8C3A5BE76D92CF5373475D7D62F0CFA4B01": {
              "id": "184930200134551681665D8F8C3A5BE76D92CF5373475D7D62F0CFA4B01",
              "recruit": {
                "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc184930200134551685010111CA8C3A1422111B7D09498C72D464FF4305B.png",
                "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc184930200134551685010111CA8C3A1422111B7D09498C72D464FF4305B.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc184930200134563291296BB089537AFCDCBCDB23359310396D82929A1C4.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456329871B20FDC72C29728BDE54A46186E167C2C9E75CEB.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "US",
              "cost": 20.0,
              "platoon": "weapon-yrb",
              "orders": 0.0
            }
          }
        },
        "ft-inf": {
          "1": {
            "18493020013456286048A3B4B45D0E454EB931341B745E08A7B73665D3C": {
              "id": "18493020013456286048A3B4B45D0E454EB931341B745E08A7B73665D3C",
              "recruit": {
                "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345628667B3F14D3B3751A8D8D4F46901FB6E15AE6EF224AE.png",
                "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345628667B3F14D3B3751A8D8D4F46901FB6E15AE6EF224AE.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345622382273F4DBF69BE42A412CC48BFC2BD326398EF0C95.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345622442112344688F77AC22B1F8F3D8F35EF945FC043C83.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "US",
              "cost": 10.0,
              "platoon": "weapon-yrb",
              "orders": 0.0
            }
          },
          "2": {
            "18493020013455168884B3E915D786EA23BA360746834D826F2662C72C2": {
              "id": "18493020013455168884B3E915D786EA23BA360746834D826F2662C72C2",
              "recruit": {
                "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013455169270CF1B24F7B964E9EB49DD382DDE944BF1C80BF77.png",
                "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013455169270CF1B24F7B964E9EB49DD382DDE944BF1C80BF77.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456208164D6977A72CBD93D7517EFFC99ECE5FAEA1BFBB6A.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345620885D08ABFEFE0BD1548A9C190A9E21148E140C345CD.png"
                },
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456208164D6977A72CBD93D7517EFFC99ECE5FAEA1BFBB6A.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345620885D08ABFEFE0BD1548A9C190A9E21148E140C345CD.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "US",
              "cost": 30.0,
              "platoon": "weapon-yrb",
              "orders": 0.0
            },
            "184930200134562920993296639F92890E70CBBC96D0631DE4E7C5D35AF": {
              "id": "184930200134562920993296639F92890E70CBBC96D0631DE4E7C5D35AF",
              "recruit": {
                "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345629264901ABBEDD899238199CBCA8BB1A14E9791415BE7.png",
                "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345629264901ABBEDD899238199CBCA8BB1A14E9791415BE7.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc184930200134562524709276FA206852B05E9F73F1F7664D2BED80A4863.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456314914A81A82681D47CDD39603CF4A6EDF6BE5E44E747.png"
                },
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc184930200134562524709276FA206852B05E9F73F1F7664D2BED80A4863.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456314914A81A82681D47CDD39603CF4A6EDF6BE5E44E747.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "US",
              "cost": 30.0,
              "platoon": "weapon-yrb",
              "orders": 0.0
            },
            "184930200134563527614A4594683730B74F88FF6BF8651DA1ED2C3D261": {
              "id": "184930200134563527614A4594683730B74F88FF6BF8651DA1ED2C3D261",
              "recruit": {
                "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345635329E9F78F746BD925C5DF028DBC22F98752766E5096.png",
                "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345635329E9F78F746BD925C5DF028DBC22F98752766E5096.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456256346FF53E2E00146B7E589E79A3FCFA816F20CA26EA.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345625691F24701B5B3664556A28FA0C753870C15A6ACE8E0.png"
                },
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456256346FF53E2E00146B7E589E79A3FCFA816F20CA26EA.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345625691F24701B5B3664556A28FA0C753870C15A6ACE8E0.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "US",
              "cost": 25.0,
              "platoon": "weapon-yrb",
              "orders": 0.0
            }
          }
        }
      },
      "combateng-yrwry": {
        "rc-plat": {
          "D2-D1-0-D1-M1": {
            "1849302001345630959B270B56DBEF8EDB704E7A2E68597335482AE5069": {
              "id": "1849302001345630959B270B56DBEF8EDB704E7A2E68597335482AE5069",
              "recruit": {
                "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345631053CF7F215D7D253930BDB79237745151840A88DFBE.png",
                "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345631053CF7F215D7D253930BDB79237745151840A88DFBE.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456248225D086F480D2E414B9E5640914F9B9963D03627A6.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345624905DE70BE6F4949624057491D4D582E90C2BD504CD0.png"
                },
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345621925D85A950E7C91AB5814F233FBE2B232E03895E761.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013453784032FD03396D07FB148EAA6165BD9BE359458F0442F.png"
                },
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345621673BD59168C2C7E79826E4183FCC9D39FFE639EAF6A.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345621734DC50EC81BEDD1ED08778893B421E4F874398C3FA.png"
                },
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345621673BD59168C2C7E79826E4183FCC9D39FFE639EAF6A.png",
                  "back": NaN
                }
              ],
              "available_slots": {
                "M1": 1,
                "M2": 0,
                "D1": 2,
                "D2": 1,
                "G1": 0,
                "G2": 0
              },
              "type": "rc-plat",
              "subtype": "D2-D1-0-D1-M1",
              "size": NaN,
              "slots": "D2-D1-0-D1-M1",
              "source": "HoN-V1",
              "box": "all",
              "faction": "US",
              "cost": 100.0,
              "platoon": "combateng-yrwry",
              "orders": 2.0
            }
          }
        },
        "gear": {
          "1": {
            "1849302001345621798AC57D0CBAB2B1701233447E0071D265C11FB69CF": {
              "id": "1849302001345621798AC57D0CBAB2B1701233447E0071D265C11FB69CF",
              "recruit": {
                "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345621798AC57D0CBAB2B1701233447E0071D265C11FB69CF.png",
                "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345621798AC57D0CBAB2B1701233447E0071D265C11FB69CF.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345621798AC57D0CBAB2B1701233447E0071D265C11FB69CF.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345621798AC57D0CBAB2B1701233447E0071D265C11FB69CF.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "US",
              "cost": 5.0,
              "platoon": "combateng-yrwry",
              "orders": 0.0
            },
            "1849302001345622503ACF7306EE96623A868260837E689D1BF240B8D0F": {
              "id": "1849302001345622503ACF7306EE96623A868260837E689D1BF240B8D0F",
              "recruit": {
                "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345622503ACF7306EE96623A868260837E689D1BF240B8D0F.png",
                "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345622503ACF7306EE96623A868260837E689D1BF240B8D0F.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345622503ACF7306EE96623A868260837E689D1BF240B8D0F.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345622503ACF7306EE96623A868260837E689D1BF240B8D0F.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "US",
              "cost": 10.0,
              "platoon": "combateng-yrwry",
              "orders": 0.0
            },
            "1849302001345624717A56D47358A6B9D0F7986F5D57A61DBCDE452FD67": {
              "id": "1849302001345624717A56D47358A6B9D0F7986F5D57A61DBCDE452FD67",
              "recruit": {
                "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345624717A56D47358A6B9D0F7986F5D57A61DBCDE452FD67.png",
                "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345624717A56D47358A6B9D0F7986F5D57A61DBCDE452FD67.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345624717A56D47358A6B9D0F7986F5D57A61DBCDE452FD67.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345624717A56D47358A6B9D0F7986F5D57A61DBCDE452FD67.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "US",
              "cost": 15.0,
              "platoon": "combateng-yrwry",
              "orders": 0.0
            }
          }
        },
        "ft-inf": {
          "2": {
            "18493020013456275033C9D463BDBEE15C717CD765018AA7B16845D4EB3": {
              "id": "18493020013456275033C9D463BDBEE15C717CD765018AA7B16845D4EB3",
              "recruit": {
                "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345627577A8A0CE22E879B36211302EE2F6348DA191C6E8C2.png",
                "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345627577A8A0CE22E879B36211302EE2F6348DA191C6E8C2.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345621673BD59168C2C7E79826E4183FCC9D39FFE639EAF6A.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345621734DC50EC81BEDD1ED08778893B421E4F874398C3FA.png"
                },
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345621925D85A950E7C91AB5814F233FBE2B232E03895E761.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013453784032FD03396D07FB148EAA6165BD9BE359458F0442F.png"
                },
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345622064F4289785EC873744733EC2C0019E5FA26713814A.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345621995EDBA19A365B71A1F2303AA554E8454580895BDFB.png"
                },
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345623635D0ED3772A6A45DE46D67DDCB63D3BB467A0347DC.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345623685F26F97F44D1D579FACFF75476AF1D06A8B1D2049.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "US",
              "cost": 50.0,
              "platoon": "combateng-yrwry",
              "orders": 0.0
            },
            "18493020013456319057D37C580B0109F88A92471D19DAE06518214485D": {
              "id": "18493020013456319057D37C580B0109F88A92471D19DAE06518214485D",
              "recruit": {
                "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456319525AF1174199A45A4DA800FA6F42C99BCF68BB0DEF.png",
                "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456319525AF1174199A45A4DA800FA6F42C99BCF68BB0DEF.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345621673BD59168C2C7E79826E4183FCC9D39FFE639EAF6A.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345621734DC50EC81BEDD1ED08778893B421E4F874398C3FA.png"
                },
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc184930200134563184956B12C3696E10ADF5831C462E42A83813CC76AE0.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456314914A81A82681D47CDD39603CF4A6EDF6BE5E44E747.png"
                },
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345622064F4289785EC873744733EC2C0019E5FA26713814A.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345621995EDBA19A365B71A1F2303AA554E8454580895BDFB.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "US",
              "cost": 50.0,
              "platoon": "combateng-yrwry",
              "orders": 0.0
            }
          }
        }
      },
      "2command-us": {
        "rc-plat": {
          "M2-M1-0-M1-M2": {
            "1849302001345634170F755AE94F396F6EE4CC0038B7120466C78553E14": {
              "id": "1849302001345634170F755AE94F396F6EE4CC0038B7120466C78553E14",
              "recruit": {
                "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456342716EB66C4B156EEBFAA7C61BEED5A69E3186F4196C.png",
                "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456342716EB66C4B156EEBFAA7C61BEED5A69E3186F4196C.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 2,
                "M2": 2,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "rc-plat",
              "subtype": "M2-M1-0-M1-M2",
              "size": NaN,
              "slots": "M2-M1-0-M1-M2",
              "source": "HoN-V1",
              "box": "all",
              "faction": "US",
              "cost": 10.0,
              "platoon": "2command-us",
              "orders": 0.0
            }
          },
          "M1-D1-0-G2": {
            "18493020013456244227BFBD17CB9DC37042E3FAC079702427A52F8C473": {
              "id": "18493020013456244227BFBD17CB9DC37042E3FAC079702427A52F8C473",
              "recruit": {
                "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc184930200134562449220E6C5FA8BA8F22B9A96B465AC2ED383A4574DD1.png",
                "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc184930200134562449220E6C5FA8BA8F22B9A96B465AC2ED383A4574DD1.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc184930200134562702703006ED6690F57C923156C0B7F34B4E800068028.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345627077F7396D0AA0BC1773C93EF5C5FDAD56298D96326E.png"
                }
              ],
              "available_slots": {
                "M1": 1,
                "M2": 0,
                "D1": 1,
                "D2": 0,
                "G1": 0,
                "G2": 1
              },
              "type": "rc-plat",
              "subtype": "M1-D1-0-G2",
              "size": NaN,
              "slots": "M1-D1-0-G2",
              "source": "HoN-V1",
              "box": "all",
              "faction": "US",
              "cost": 30.0,
              "platoon": "2command-us",
              "orders": 1.0
            }
          }
        },
        "gear": {
          "1": {
            "1849302001345617755077A306AFF0BE414CB11D110B0E67D99B01D6F78": {
              "id": "1849302001345617755077A306AFF0BE414CB11D110B0E67D99B01D6F78",
              "recruit": {
                "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345617755077A306AFF0BE414CB11D110B0E67D99B01D6F78.png",
                "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345617755077A306AFF0BE414CB11D110B0E67D99B01D6F78.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc184930200134561806344817DADCEBD46CCC2C9BDD31D9617EC24FB1CAB.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013455151994A81A82681D47CDD39603CF4A6EDF6BE5E44E747.png"
                },
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345618137458D5445A0B765751298C03F1C0792CA71181F84.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013455151994A81A82681D47CDD39603CF4A6EDF6BE5E44E747.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "US",
              "cost": 10.0,
              "platoon": "2command-us",
              "orders": 0.0
            },
            "1849302001345633550FB5593CCC928A9C21FDAD54247211C8BE81F9E22": {
              "id": "1849302001345633550FB5593CCC928A9C21FDAD54247211C8BE81F9E22",
              "recruit": {
                "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345633550FB5593CCC928A9C21FDAD54247211C8BE81F9E22.png",
                "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345633550FB5593CCC928A9C21FDAD54247211C8BE81F9E22.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345633550FB5593CCC928A9C21FDAD54247211C8BE81F9E22.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345633550FB5593CCC928A9C21FDAD54247211C8BE81F9E22.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "US",
              "cost": 10.0,
              "platoon": "2command-us",
              "orders": 0.0
            },
            "184930200134563360063D67ECEA9AC56EE7D46B88A47ACD836D5658674": {
              "id": "184930200134563360063D67ECEA9AC56EE7D46B88A47ACD836D5658674",
              "recruit": {
                "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc184930200134563360063D67ECEA9AC56EE7D46B88A47ACD836D5658674.png",
                "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc184930200134563360063D67ECEA9AC56EE7D46B88A47ACD836D5658674.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc184930200134563360063D67ECEA9AC56EE7D46B88A47ACD836D5658674.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc184930200134563360063D67ECEA9AC56EE7D46B88A47ACD836D5658674.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "US",
              "cost": 10.0,
              "platoon": "2command-us",
              "orders": 0.0
            },
            "18493020013456328580E6D7717BD92382E08349E0AEC0CB7B8A1452CAD": {
              "id": "18493020013456328580E6D7717BD92382E08349E0AEC0CB7B8A1452CAD",
              "recruit": {
                "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456328580E6D7717BD92382E08349E0AEC0CB7B8A1452CAD.png",
                "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456328580E6D7717BD92382E08349E0AEC0CB7B8A1452CAD.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456328580E6D7717BD92382E08349E0AEC0CB7B8A1452CAD.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456328580E6D7717BD92382E08349E0AEC0CB7B8A1452CAD.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "US",
              "cost": 15.0,
              "platoon": "2command-us",
              "orders": 0.0
            },
            "1849302001345632051D8812916B9C39AD510499238100FD0BF33F2EFB7": {
              "id": "1849302001345632051D8812916B9C39AD510499238100FD0BF33F2EFB7",
              "recruit": {
                "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345632051D8812916B9C39AD510499238100FD0BF33F2EFB7.png",
                "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345632051D8812916B9C39AD510499238100FD0BF33F2EFB7.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345632051D8812916B9C39AD510499238100FD0BF33F2EFB7.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345632051D8812916B9C39AD510499238100FD0BF33F2EFB7.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "US",
              "cost": 15.0,
              "platoon": "2command-us",
              "orders": 0.0
            },
            "184930200134562343375CF2AF7A12D56C32D6A60FF21412E53917F0449": {
              "id": "184930200134562343375CF2AF7A12D56C32D6A60FF21412E53917F0449",
              "recruit": {
                "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc184930200134562343375CF2AF7A12D56C32D6A60FF21412E53917F0449.png",
                "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc184930200134562343375CF2AF7A12D56C32D6A60FF21412E53917F0449.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc184930200134562343375CF2AF7A12D56C32D6A60FF21412E53917F0449.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc184930200134562343375CF2AF7A12D56C32D6A60FF21412E53917F0449.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "US",
              "cost": 20.0,
              "platoon": "2command-us",
              "orders": 0.0
            },
            "18493020013456276859D0533C715587307A732E28652F17CC16A3A5A8B": {
              "id": "18493020013456276859D0533C715587307A732E28652F17CC16A3A5A8B",
              "recruit": {
                "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456276859D0533C715587307A732E28652F17CC16A3A5A8B.png",
                "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456276859D0533C715587307A732E28652F17CC16A3A5A8B.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456276859D0533C715587307A732E28652F17CC16A3A5A8B.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456276859D0533C715587307A732E28652F17CC16A3A5A8B.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "US",
              "cost": 10.0,
              "platoon": "2command-us",
              "orders": 0.0
            },
            "18493020013456337903C7629568BC631DA3DE683BA3E6C688F61CE691D": {
              "id": "18493020013456337903C7629568BC631DA3DE683BA3E6C688F61CE691D",
              "recruit": {
                "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456337903C7629568BC631DA3DE683BA3E6C688F61CE691D.png",
                "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456337903C7629568BC631DA3DE683BA3E6C688F61CE691D.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456337903C7629568BC631DA3DE683BA3E6C688F61CE691D.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456337903C7629568BC631DA3DE683BA3E6C688F61CE691D.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "US",
              "cost": 10.0,
              "platoon": "2command-us",
              "orders": 0.0
            },
            "18493020013456363420632A2F4B81ECA4747C3A76E11192AEC1178694E": {
              "id": "18493020013456363420632A2F4B81ECA4747C3A76E11192AEC1178694E",
              "recruit": {
                "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456363420632A2F4B81ECA4747C3A76E11192AEC1178694E.png",
                "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456363420632A2F4B81ECA4747C3A76E11192AEC1178694E.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456363420632A2F4B81ECA4747C3A76E11192AEC1178694E.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456363420632A2F4B81ECA4747C3A76E11192AEC1178694E.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "US",
              "cost": 10.0,
              "platoon": "2command-us",
              "orders": 1.0
            },
            "1849302001345624255F0B5725E7F7FF1EE1C515A4EDDCDAFDE977A762A": {
              "id": "1849302001345624255F0B5725E7F7FF1EE1C515A4EDDCDAFDE977A762A",
              "recruit": {
                "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345624255F0B5725E7F7FF1EE1C515A4EDDCDAFDE977A762A.png",
                "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345624255F0B5725E7F7FF1EE1C515A4EDDCDAFDE977A762A.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345624255F0B5725E7F7FF1EE1C515A4EDDCDAFDE977A762A.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345624255F0B5725E7F7FF1EE1C515A4EDDCDAFDE977A762A.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "US",
              "cost": 10.0,
              "platoon": "2command-us",
              "orders": 1.0
            }
          },
          "2": {
            "184930200134563659737D7E2737A8256A5728452B30AF423A506215A1F": {
              "id": "184930200134563659737D7E2737A8256A5728452B30AF423A506215A1F",
              "recruit": {
                "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc184930200134563659737D7E2737A8256A5728452B30AF423A506215A1F.png",
                "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc184930200134563659737D7E2737A8256A5728452B30AF423A506215A1F.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456362362381E3AB0638689FF9BE119435F819AF888AF7A0.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456314914A81A82681D47CDD39603CF4A6EDF6BE5E44E747.png"
                },
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc184930200134562337610E2200096E2FAD43376AA1B54A229FA93044DD6.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456314914A81A82681D47CDD39603CF4A6EDF6BE5E44E747.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "US",
              "cost": 10.0,
              "platoon": "2command-us",
              "orders": 0.0
            },
            "184930200134563323290D3535AA8A83DBB0965B12E56B83DCC6F3AF122": {
              "id": "184930200134563323290D3535AA8A83DBB0965B12E56B83DCC6F3AF122",
              "recruit": {
                "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc184930200134563323290D3535AA8A83DBB0965B12E56B83DCC6F3AF122.png",
                "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc184930200134563323290D3535AA8A83DBB0965B12E56B83DCC6F3AF122.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc184930200134563323290D3535AA8A83DBB0965B12E56B83DCC6F3AF122.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc184930200134563323290D3535AA8A83DBB0965B12E56B83DCC6F3AF122.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "US",
              "cost": 40.0,
              "platoon": "2command-us",
              "orders": 0.0
            },
            "18493020013456327525C10424A23C41CE8B4C256B5A8420B6FFDDA26E2": {
              "id": "18493020013456327525C10424A23C41CE8B4C256B5A8420B6FFDDA26E2",
              "recruit": {
                "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456327525C10424A23C41CE8B4C256B5A8420B6FFDDA26E2.png",
                "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456327525C10424A23C41CE8B4C256B5A8420B6FFDDA26E2.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456327525C10424A23C41CE8B4C256B5A8420B6FFDDA26E2.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456327525C10424A23C41CE8B4C256B5A8420B6FFDDA26E2.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "US",
              "cost": 30.0,
              "platoon": "2command-us",
              "orders": 0.0
            },
            "1849302001345635218301BF5D617401F8CDACF26386D1E1A28ADE8FA6A": {
              "id": "1849302001345635218301BF5D617401F8CDACF26386D1E1A28ADE8FA6A",
              "recruit": {
                "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345635218301BF5D617401F8CDACF26386D1E1A28ADE8FA6A.png",
                "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345635218301BF5D617401F8CDACF26386D1E1A28ADE8FA6A.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345635218301BF5D617401F8CDACF26386D1E1A28ADE8FA6A.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345635218301BF5D617401F8CDACF26386D1E1A28ADE8FA6A.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "US",
              "cost": 25.0,
              "platoon": "2command-us",
              "orders": 0.0
            },
            "1849302001345634105E7AE44CF332DA8D0F9D82E1670FFDA8271EAE685": {
              "id": "1849302001345634105E7AE44CF332DA8D0F9D82E1670FFDA8271EAE685",
              "recruit": {
                "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345634105E7AE44CF332DA8D0F9D82E1670FFDA8271EAE685.png",
                "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345634105E7AE44CF332DA8D0F9D82E1670FFDA8271EAE685.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345634105E7AE44CF332DA8D0F9D82E1670FFDA8271EAE685.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345634105E7AE44CF332DA8D0F9D82E1670FFDA8271EAE685.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "US",
              "cost": 20.0,
              "platoon": "2command-us",
              "orders": 0.0
            }
          }
        }
      },
      "rifle-bw": {
        "rc-plat": {
          "M2*-G1-0-G1-D2": {
            "1849302001345515777DFCEA273D9F1D0CB8FC48D2CE8B85A4E66A9017D": {
              "id": "1849302001345515777DFCEA273D9F1D0CB8FC48D2CE8B85A4E66A9017D",
              "recruit": {
                "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013455158406A513D5F1ADCA66923D8713903A5AA1647566359.png",
                "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013455158406A513D5F1ADCA66923D8713903A5AA1647566359.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013455158981693B06569CCD5CE3D70C63764EAA46CE581FB40.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc184930200134551593448F70E6EBC0EC33295C1F821759436A6557FD8B5.png"
                },
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013455159722FF8A95753B70186CF37D931700FE011281E0FFB.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345516019A950433DBB7856779DC95EF2445D9EDA213D8C14.png"
                },
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456215226F5F41512CCC51DAA3EE962C365E8D856CD34921.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345621580B1A19125817B8F4593887A910423F191D408B417.png"
                },
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345622858F622B68B52A37E3C54065A151EBF75C5EE5DD736.png",
                  "back": NaN
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 1,
                "D1": 0,
                "D2": 1,
                "G1": 2,
                "G2": 0
              },
              "type": "rc-plat",
              "subtype": "M2*-G1-0-G1-D2",
              "size": NaN,
              "slots": "M2*-G1-0-G1-D2",
              "source": "HoN-V1",
              "box": "all",
              "faction": "US",
              "cost": 70.0,
              "platoon": "rifle-bw",
              "orders": 2.0
            }
          }
        },
        "ft-vehicle": {
          "2": {
            "18493020013456214087D750735DE958220F9F7750BDE5652B5E09E9040": {
              "id": "18493020013456214087D750735DE958220F9F7750BDE5652B5E09E9040",
              "recruit": {
                "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345621467B43E0859CA2A38FEF737967917031B3B6702E23A.png",
                "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345621467B43E0859CA2A38FEF737967917031B3B6702E23A.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345516683F8AA2182F3C14546FC1314BF7EDEF46664755D04.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345516731E639866755108B26F1789BA96FFD7C1F6D3FC6D4.png"
                },
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345516683F8AA2182F3C14546FC1314BF7EDEF46664755D04.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345516731E639866755108B26F1789BA96FFD7C1F6D3FC6D4.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "US",
              "cost": 60.0,
              "platoon": "rifle-bw",
              "orders": 0.0
            }
          }
        },
        "ft-inf": {
          "2": {
            "1849302001345625089BF403B359DCC54C334BFD6933A004C266073435B": {
              "id": "1849302001345625089BF403B359DCC54C334BFD6933A004C266073435B",
              "recruit": {
                "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345625174D7F61544D1A0FD89F8748231501A1EB8F5EB82BD.png",
                "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345625174D7F61544D1A0FD89F8748231501A1EB8F5EB82BD.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013455159722FF8A95753B70186CF37D931700FE011281E0FFB.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345516019A950433DBB7856779DC95EF2445D9EDA213D8C14.png"
                },
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456215226F5F41512CCC51DAA3EE962C365E8D856CD34921.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345621580B1A19125817B8F4593887A910423F191D408B417.png"
                },
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc184930200134562662024D870EFAE073A3EC786BA6601B3F1282B9B7876.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456314914A81A82681D47CDD39603CF4A6EDF6BE5E44E747.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "US",
              "cost": 55.0,
              "platoon": "rifle-bw",
              "orders": 0.0
            },
            "1849302001345625815B913ACCC08FF36CA9C3C02C262EA81EDB4FFB0EE": {
              "id": "1849302001345625815B913ACCC08FF36CA9C3C02C262EA81EDB4FFB0EE",
              "recruit": {
                "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc184930200134562588108B6A35E85842A3A167E6D598F9EE8001DD95979.png",
                "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc184930200134562588108B6A35E85842A3A167E6D598F9EE8001DD95979.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456314411F4DBCD33278E934BF1679F28B783CC0157389EF.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456314914A81A82681D47CDD39603CF4A6EDF6BE5E44E747.png"
                },
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013455159722FF8A95753B70186CF37D931700FE011281E0FFB.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345516019A950433DBB7856779DC95EF2445D9EDA213D8C14.png"
                },
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456215226F5F41512CCC51DAA3EE962C365E8D856CD34921.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345621580B1A19125817B8F4593887A910423F191D408B417.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "US",
              "cost": 50.0,
              "platoon": "rifle-bw",
              "orders": 0.0
            }
          }
        }
      },
      "rifle-yb": {
        "rc-plat": {
          "M2*-D1-0-G1-D2": {
            "184930200134563047031C88FAAC71C8219D6BB06195A02D69B73871127": {
              "id": "184930200134563047031C88FAAC71C8219D6BB06195A02D69B73871127",
              "recruit": {
                "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345630570ECD5E256C1518B0A51D05C8D91B05713A9B7DB7B.png",
                "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345630570ECD5E256C1518B0A51D05C8D91B05713A9B7DB7B.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345637038DDE2EEF807ED9AB5A5302F1AD9E7AA57CBFB3B7C.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345637107E21F72E9A01C134D1C2BFC6D1B1D865B41056E95.png"
                },
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345623741550ECA135DA46236FEA3801A0511C468BC24BE88.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456237964A81A82681D47CDD39603CF4A6EDF6BE5E44E747.png"
                },
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345630218946CAB1851F61AFF49E0162621DD420B634AEB79.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456302783849B57D05208F0B7468AE5F438F9C30FBC1BA0E.png"
                },
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456231982376AA652EE97F202F477D6C663643222E964AED.png",
                  "back": NaN
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 1,
                "D1": 1,
                "D2": 1,
                "G1": 1,
                "G2": 0
              },
              "type": "rc-plat",
              "subtype": "M2*-D1-0-G1-D2",
              "size": NaN,
              "slots": "M2*-D1-0-G1-D2",
              "source": "HoN-V1",
              "box": "all",
              "faction": "US",
              "cost": 70.0,
              "platoon": "rifle-yb",
              "orders": 2.0
            }
          }
        },
        "ft-inf": {
          "2": {
            "1849302001345627889CA1F53FA5445DCC6063E4995859F0EBA5E1CF91D": {
              "id": "1849302001345627889CA1F53FA5445DCC6063E4995859F0EBA5E1CF91D",
              "recruit": {
                "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345627948ADF90EF1E59EEDB480751D02CC99AF60830DAFA3.png",
                "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345627948ADF90EF1E59EEDB480751D02CC99AF60830DAFA3.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345623741550ECA135DA46236FEA3801A0511C468BC24BE88.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456237964A81A82681D47CDD39603CF4A6EDF6BE5E44E747.png"
                },
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345623741550ECA135DA46236FEA3801A0511C468BC24BE88.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456237964A81A82681D47CDD39603CF4A6EDF6BE5E44E747.png"
                },
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc184930200134563576121831638FBD00C70703272429CB3AB2294CAB8B3.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456358124A81A82681D47CDD39603CF4A6EDF6BE5E44E747.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "US",
              "cost": 40.0,
              "platoon": "rifle-yb",
              "orders": 0.0
            },
            "1849302001345631233997B305DC69C9E51E958D7417EE6CE9EC0986086": {
              "id": "1849302001345631233997B305DC69C9E51E958D7417EE6CE9EC0986086",
              "recruit": {
                "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345631281FC533AAEF71B8D97748B1BB510E8EE1B65E6F022.png",
                "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345631281FC533AAEF71B8D97748B1BB510E8EE1B65E6F022.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456231982376AA652EE97F202F477D6C663643222E964AED.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345623258A62A9BD83FF77F087B4F0599699AFE121A9E551A.png"
                },
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456231982376AA652EE97F202F477D6C663643222E964AED.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345623258A62A9BD83FF77F087B4F0599699AFE121A9E551A.png"
                },
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345623635D0ED3772A6A45DE46D67DDCB63D3BB467A0347DC.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345623685F26F97F44D1D579FACFF75476AF1D06A8B1D2049.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "US",
              "cost": 50.0,
              "platoon": "rifle-yb",
              "orders": 0.0
            },
            "18493020013456334306E53A8DAE43438DAA2A66C0C8ABC121666E337B8": {
              "id": "18493020013456334306E53A8DAE43438DAA2A66C0C8ABC121666E337B8",
              "recruit": {
                "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345633495D84A898650EA60AEBA042F51421E496460ABD367.png",
                "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345633495D84A898650EA60AEBA042F51421E496460ABD367.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345623741550ECA135DA46236FEA3801A0511C468BC24BE88.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456237964A81A82681D47CDD39603CF4A6EDF6BE5E44E747.png"
                },
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345630218946CAB1851F61AFF49E0162621DD420B634AEB79.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456302783849B57D05208F0B7468AE5F438F9C30FBC1BA0E.png"
                },
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456231982376AA652EE97F202F477D6C663643222E964AED.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345623258A62A9BD83FF77F087B4F0599699AFE121A9E551A.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "US",
              "cost": 50.0,
              "platoon": "rifle-yb",
              "orders": 0.0
            }
          }
        }
      },
      "rifle-yw": {
        "rc-plat": {
          "M2*-G1-0-G1-D2": {
            "18493020013455150406940AF6ECE90CFECDF1D7A9AF4BDF486199C0A9F": {
              "id": "18493020013455150406940AF6ECE90CFECDF1D7A9AF4BDF486199C0A9F",
              "recruit": {
                "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013455151248AF462C6A73E97EB3C656921B6D6F05E1A64F322.png",
                "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013455151248AF462C6A73E97EB3C656921B6D6F05E1A64F322.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013455146331A252129FE01BA6640CA71B6115D4FA27E768A4A.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345629909E24F078AFC3245EB4CD9F5B561965FE441E94499.png"
                },
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013455119466F0D9C7AB8453C7E86BD1FD54BAADBE14A20AFEB.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013455151994A81A82681D47CDD39603CF4A6EDF6BE5E44E747.png"
                },
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013455145457DE4BB25E22F9D004E03C7AF4A86661B5E6F32D8.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013455145855C3B28121C0D7D076B6506D3E4AEEA89667FEE6F.png"
                },
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc184930200134551445288753C5D1F30666C6B27343E884F2600B452C74B.png",
                  "back": NaN
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 1,
                "D1": 0,
                "D2": 1,
                "G1": 2,
                "G2": 0
              },
              "type": "rc-plat",
              "subtype": "M2*-G1-0-G1-D2",
              "size": NaN,
              "slots": "M2*-G1-0-G1-D2",
              "source": "HoN-V1",
              "box": "all",
              "faction": "US",
              "cost": 70.0,
              "platoon": "rifle-yw",
              "orders": 2.0
            }
          }
        },
        "ft-inf": {
          "2": {
            "1849302001345514730369E068B443A6D527DF89FF27DF505B41C1C58AE": {
              "id": "1849302001345514730369E068B443A6D527DF89FF27DF505B41C1C58AE",
              "recruit": {
                "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345514780ED75C128AAD12FDEA93984D8B5125550477FF241.png",
                "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345514780ED75C128AAD12FDEA93984D8B5125550477FF241.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013455119466F0D9C7AB8453C7E86BD1FD54BAADBE14A20AFEB.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013455151994A81A82681D47CDD39603CF4A6EDF6BE5E44E747.png"
                },
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013455145457DE4BB25E22F9D004E03C7AF4A86661B5E6F32D8.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013455145855C3B28121C0D7D076B6506D3E4AEEA89667FEE6F.png"
                },
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc184930200134551445288753C5D1F30666C6B27343E884F2600B452C74B.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345514504CAC813D8028E90FE91FE9024DE7DDCB5115448E0.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "US",
              "cost": 50.0,
              "platoon": "rifle-yw",
              "orders": 0.0
            },
            "1849302001345514827324D5D78AA184A8DFDC737072D42027181819574": {
              "id": "1849302001345514827324D5D78AA184A8DFDC737072D42027181819574",
              "recruit": {
                "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345514872368CAC9963F9F2216D2CAA8070F6C9E7A5608C84.png",
                "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345514872368CAC9963F9F2216D2CAA8070F6C9E7A5608C84.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013455145457DE4BB25E22F9D004E03C7AF4A86661B5E6F32D8.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013455145855C3B28121C0D7D076B6506D3E4AEEA89667FEE6F.png"
                },
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc184930200134551445288753C5D1F30666C6B27343E884F2600B452C74B.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345514504CAC813D8028E90FE91FE9024DE7DDCB5115448E0.png"
                },
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345514241D45676DDA81CE0B37DB042C52E7DEA9E9D456560.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345514287B076904B05881F7A4F0AE5DEAFCD21BFE3A6EFEA.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "US",
              "cost": 50.0,
              "platoon": "rifle-yw",
              "orders": 0.0
            },
            "1849302001345514926BA9F768B344602D6D68C846AACB0B47A6DF2BA6A": {
              "id": "1849302001345514926BA9F768B344602D6D68C846AACB0B47A6DF2BA6A",
              "recruit": {
                "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013455149881E77699813625D4B2F3C197AA77316F0C0947101.png",
                "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013455149881E77699813625D4B2F3C197AA77316F0C0947101.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013455145457DE4BB25E22F9D004E03C7AF4A86661B5E6F32D8.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013455145855C3B28121C0D7D076B6506D3E4AEEA89667FEE6F.png"
                },
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc184930200134551445288753C5D1F30666C6B27343E884F2600B452C74B.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345514504CAC813D8028E90FE91FE9024DE7DDCB5115448E0.png"
                },
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc184930200134551434367EAFBC8722BA4D2C97FA9804F0FE08107F656D2.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013455144084A81A82681D47CDD39603CF4A6EDF6BE5E44E747.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "US",
              "cost": 55.0,
              "platoon": "rifle-yw",
              "orders": 0.0
            }
          }
        }
      },
      "sherman-ggg": {
        "rc-plat": {
          "D1-D1-0-D2": {
            "1849302001345633283B6E543473AA7C93DD3DD24AF96C212E31A08E8D8": {
              "id": "1849302001345633283B6E543473AA7C93DD3DD24AF96C212E31A08E8D8",
              "recruit": {
                "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345633351E44CBF635BC287EC343956E48089D9B6A39148F1.png",
                "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345633351E44CBF635BC287EC343956E48089D9B6A39148F1.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345630654AAA46C1E50F356E17DFED60349DFC0BA13359123.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345630741F8BD6626DF249B103FA8100A877E1F805EF0C3E4.png"
                },
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345634033264B5E18B6241F01D17374126FF79834991341DB.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345630741F8BD6626DF249B103FA8100A877E1F805EF0C3E4.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 2,
                "D2": 1,
                "G1": 0,
                "G2": 0
              },
              "type": "rc-plat",
              "subtype": "D1-D1-0-D2",
              "size": NaN,
              "slots": "D1-D1-0-D2",
              "source": "HoN-V1",
              "box": "all",
              "faction": "US",
              "cost": 125.0,
              "platoon": "sherman-ggg",
              "orders": 0.0
            }
          }
        },
        "gear": {
          "1": {
            "1849302001345626160BBCBBED8A7FA003DDA13448675C61CE7B0541091": {
              "id": "1849302001345626160BBCBBED8A7FA003DDA13448675C61CE7B0541091",
              "recruit": {
                "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345626160BBCBBED8A7FA003DDA13448675C61CE7B0541091.png",
                "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345626160BBCBBED8A7FA003DDA13448675C61CE7B0541091.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345626160BBCBBED8A7FA003DDA13448675C61CE7B0541091.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345626160BBCBBED8A7FA003DDA13448675C61CE7B0541091.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "US",
              "cost": 5.0,
              "platoon": "sherman-ggg",
              "orders": 0.0
            }
          }
        },
        "ft-vehicle": {
          "2": {
            "18493020013456313431FDD1183006E9B9484B324E62AD76A704D9C8DD3": {
              "id": "18493020013456313431FDD1183006E9B9484B324E62AD76A704D9C8DD3",
              "recruit": {
                "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345631395EA262C08A3EADC848326D4BD0555716CB30E79A5.png",
                "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345631395EA262C08A3EADC848326D4BD0555716CB30E79A5.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc184930200134562942070EDD4238008C8BFB8F287EDA48AF64669ADEC00.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345629490C0E60D72D538C3634B21EB983AE66BCD3A0F5509.png"
                },
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc184930200134562942070EDD4238008C8BFB8F287EDA48AF64669ADEC00.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345629490C0E60D72D538C3634B21EB983AE66BCD3A0F5509.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "US",
              "cost": 120.0,
              "platoon": "sherman-ggg",
              "orders": 0.0
            },
            "1849302001345631657F5B882708717D17C49B65A5E514E7EAE6F414E82": {
              "id": "1849302001345631657F5B882708717D17C49B65A5E514E7EAE6F414E82",
              "recruit": {
                "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456317861E1A31B44E34A22C053860ACCE3C02F533356AC6.png",
                "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456317861E1A31B44E34A22C053860ACCE3C02F533356AC6.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345628200551DAA228758BBF2F760CAE11EF632BB10114438.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345628311A3D7E561297F41F08448604CD3106AAFE9CB133C.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "US",
              "cost": 70.0,
              "platoon": "sherman-ggg",
              "orders": 0.0
            },
            "18493020013456346943527D24FF0EBBEA5DB45CCE41851DA7F0A42C6FD": {
              "id": "18493020013456346943527D24FF0EBBEA5DB45CCE41851DA7F0A42C6FD",
              "recruit": {
                "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc184930200134563478073856ECD51E74683397E230B5D0A6C2FA1E554B3.png",
                "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc184930200134563478073856ECD51E74683397E230B5D0A6C2FA1E554B3.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345636049BC5434975D31B43F1488E59A584BA61E601376AD.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345629490C0E60D72D538C3634B21EB983AE66BCD3A0F5509.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "US",
              "cost": 60.0,
              "platoon": "sherman-ggg",
              "orders": 0.0
            }
          }
        }
      },
      "combateng-yrwry\r\n": {
        "gear": {
          "1": {
            "1849302001345631603E33A09B73FC38DBBC7E36E3A1DE07DF0E1242A89": {
              "id": "1849302001345631603E33A09B73FC38DBBC7E36E3A1DE07DF0E1242A89",
              "recruit": {
                "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345631603E33A09B73FC38DBBC7E36E3A1DE07DF0E1242A89.png",
                "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345631603E33A09B73FC38DBBC7E36E3A1DE07DF0E1242A89.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345631603E33A09B73FC38DBBC7E36E3A1DE07DF0E1242A89.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345631603E33A09B73FC38DBBC7E36E3A1DE07DF0E1242A89.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "US",
              "cost": 10.0,
              "platoon": "combateng-yrwry\r\n",
              "orders": 0.0
            },
            "18493020013456298187DEBBF9AFDBD1578E93D16CFAF24D30E3B8E8073": {
              "id": "18493020013456298187DEBBF9AFDBD1578E93D16CFAF24D30E3B8E8073",
              "recruit": {
                "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456298187DEBBF9AFDBD1578E93D16CFAF24D30E3B8E8073.png",
                "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456298187DEBBF9AFDBD1578E93D16CFAF24D30E3B8E8073.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456298187DEBBF9AFDBD1578E93D16CFAF24D30E3B8E8073.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc18493020013456298187DEBBF9AFDBD1578E93D16CFAF24D30E3B8E8073.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "US",
              "cost": 10.0,
              "platoon": "combateng-yrwry\r\n",
              "orders": 0.0
            },
            "1849302001345636116BD138CCB9FB9DB5C2BF8D78F41B8863A56CF195B": {
              "id": "1849302001345636116BD138CCB9FB9DB5C2BF8D78F41B8863A56CF195B",
              "recruit": {
                "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345636116BD138CCB9FB9DB5C2BF8D78F41B8863A56CF195B.png",
                "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345636116BD138CCB9FB9DB5C2BF8D78F41B8863A56CF195B.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345636116BD138CCB9FB9DB5C2BF8D78F41B8863A56CF195B.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345636116BD138CCB9FB9DB5C2BF8D78F41B8863A56CF195B.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "US",
              "cost": 10.0,
              "platoon": "combateng-yrwry\r\n",
              "orders": 0.0
            }
          }
        }
      },
      "sherman-ggg\r\n": {
        "gear": {
          "1": {
            "1849302001345636675181F7A434BA4975AC754460E4943DC3FF11B4F58": {
              "id": "1849302001345636675181F7A434BA4975AC754460E4943DC3FF11B4F58",
              "recruit": {
                "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345636675181F7A434BA4975AC754460E4943DC3FF11B4F58.png",
                "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345636675181F7A434BA4975AC754460E4943DC3FF11B4F58.png"
              },
              "contents": [
                {
                  "front": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345636675181F7A434BA4975AC754460E4943DC3FF11B4F58.png",
                  "back": "res/tiles/V1-US/httpcloud3steamusercontentcomugc1849302001345636675181F7A434BA4975AC754460E4943DC3FF11B4F58.png"
                }
              ],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "all",
              "faction": "US",
              "cost": 10.0,
              "platoon": "sherman-ggg\r\n",
              "orders": 0.0
            }
          }
        }
      }
    }
  },
  "NaN": {
    "NaN": {
      "NaN": {
        "NaN": {
          "NaN": {
            "#VALUE!": {
              "id": "#VALUE!",
              "recruit": {
                "front": NaN,
                "back": NaN
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": NaN,
              "subtype": NaN,
              "size": NaN,
              "slots": "nan",
              "source": NaN,
              "box": NaN,
              "faction": NaN,
              "cost": NaN,
              "platoon": NaN,
              "orders": NaN
            }
          }
        }
      }
    }
  }
};