const _0x2ec4d4=_0x13b9;(function(_0x5cadcb,_0x28fbb2){const _0x305d5e=_0x13b9,_0x19f2c0=_0x5cadcb();while(!![]){try{const _0x483b6b=-parseInt(_0x305d5e(0xd1))/0x1+-parseInt(_0x305d5e(0xbe))/0x2+-parseInt(_0x305d5e(0xbf))/0x3+-parseInt(_0x305d5e(0xcf))/0x4+parseInt(_0x305d5e(0xc2))/0x5+-parseInt(_0x305d5e(0xba))/0x6+parseInt(_0x305d5e(0xd7))/0x7;if(_0x483b6b===_0x28fbb2)break;else _0x19f2c0['push'](_0x19f2c0['shift']());}catch(_0x2887e4){_0x19f2c0['push'](_0x19f2c0['shift']());}}}(_0x16e7,0x375e9));let qrGenForm=document['getElementById'](_0x2ec4d4(0xbc)),qrImageBox=document[_0x2ec4d4(0xc4)](_0x2ec4d4(0xd0)),qrImage=document[_0x2ec4d4(0xc4)](_0x2ec4d4(0xc8)),generateQrButton=document[_0x2ec4d4(0xc4)](_0x2ec4d4(0xb8)),sellerName=document[_0x2ec4d4(0xc4)]('seller-name'),taxNumber=document['getElementById']('tax-number'),dataAndTime=document[_0x2ec4d4(0xc4)](_0x2ec4d4(0xcc)),invoiceAmount=document[_0x2ec4d4(0xc4)]('invoice-amount'),taxAmount=document[_0x2ec4d4(0xc4)](_0x2ec4d4(0xd8)),dateTimeInput=document[_0x2ec4d4(0xd5)]('input[type=\x22datetime-local\x22]');function toHex(_0x2733d8){const _0x47bca9=_0x2ec4d4;let _0x4ff36e=_0x2733d8['toString'](0x10);return _0x4ff36e[_0x47bca9(0xc1)]%0x2>0x0&&(_0x4ff36e='0'+_0x4ff36e),Buffer[_0x47bca9(0xb7)](_0x4ff36e,_0x47bca9(0xd3))['toString'](_0x47bca9(0xc3));}function toBase64(_0x26c107){const _0x5a21df=_0x2ec4d4;return Buffer[_0x5a21df(0xb7)](_0x26c107)[_0x5a21df(0xca)]('base64');}function getValueByteLength(_0xf19784){const _0x54a5ed=_0x2ec4d4;return Buffer[_0x54a5ed(0xda)](_0xf19784);}function toTlv(_0x5b997a,_0x2265ec){const _0x20dd59=_0x2ec4d4;return toHex(_0x5b997a)+toHex(this[_0x20dd59(0xce)](_0x2265ec))+_0x2265ec;}function _0x13b9(_0x4823af,_0x2f3f15){const _0x16e7cc=_0x16e7();return _0x13b9=function(_0x13b954,_0x552ca0){_0x13b954=_0x13b954-0xb7;let _0x24b6c1=_0x16e7cc[_0x13b954];return _0x24b6c1;},_0x13b9(_0x4823af,_0x2f3f15);}function _0x16e7(){const _0x4c4fc8=['src','5815138iFVPUu','tax-amount','https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=','byteLength','from','generate-qr-button','classList','314670izfIzE','preventDefault','qr-gen-form','substring','708298fzXTqi','173133uWyJCt','value','length','908400SeRKMS','utf-8','getElementById','addEventListener','toISOString','submit','qrImage','qr-error','toString','onload','data-and-time','active','getValueByteLength','49088woDiYs','qr-image-box','309044spCjmq','add','hex','remove','querySelector'];_0x16e7=function(){return _0x4c4fc8;};return _0x16e7();}function generateQrCode(){const _0x3266e1=_0x2ec4d4;if(sellerName[_0x3266e1(0xc0)][_0x3266e1(0xc1)]>0x0&&taxNumber[_0x3266e1(0xc0)]['length']>0x0&&dataAndTime[_0x3266e1(0xc0)][_0x3266e1(0xc1)]>0x0&&invoiceAmount['value']['length']>0x0&&taxAmount[_0x3266e1(0xc0)][_0x3266e1(0xc1)]>0x0){generateQrButton['value']='Generating\x20QR\x20code...';let _0x16b855=toTlv(0x1,sellerName[_0x3266e1(0xc0)])+toTlv(0x2,taxNumber[_0x3266e1(0xc0)])+toTlv(0x3,dataAndTime[_0x3266e1(0xc0)])+toTlv(0x4,invoiceAmount[_0x3266e1(0xc0)])+toTlv(0x5,taxAmount[_0x3266e1(0xc0)]),_0x40d286=toBase64(_0x16b855);qrImage[_0x3266e1(0xd6)]=_0x3266e1(0xd9)+_0x40d286,qrImage[_0x3266e1(0xc5)]('load',()=>{const _0x3a3b23=_0x3266e1;qrImageBox[_0x3a3b23(0xb9)][_0x3a3b23(0xd2)](_0x3a3b23(0xcd)),generateQrButton['value']='Generate\x20QR\x20code';});}else qrGenForm[_0x3266e1(0xb9)]['add'](_0x3266e1(0xc9)),setTimeout(()=>{const _0xe8e69d=_0x3266e1;qrGenForm[_0xe8e69d(0xb9)][_0xe8e69d(0xd4)](_0xe8e69d(0xc9));},0x3e8);}document['getElementById'](_0x2ec4d4(0xbc))['addEventListener'](_0x2ec4d4(0xc7),function(_0x58959e){const _0x14b42a=_0x2ec4d4;_0x58959e[_0x14b42a(0xbb)](),generateQrCode();}),window[_0x2ec4d4(0xcb)]=_0x72261f=>{const _0x15c525=_0x2ec4d4;var _0x441ece=new Date();dateTimeInput[_0x15c525(0xc0)]=_0x441ece[_0x15c525(0xc6)]()[_0x15c525(0xbd)](0x0,0x10);};