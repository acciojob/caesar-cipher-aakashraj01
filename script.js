function caesarCipher(message, shift) {
  const A_CODE = "A".charCodeAt(0);
  const Z_CODE = "Z".charCodeAt(0);
  const a_CODE = "a".charCodeAt(0);
  const z_CODE = "z".charCodeAt(0);

  let encodedMessage = "";

  for (let i = 0; i < message.length; i++) {
    const charCode = message.charCodeAt(i);

    if (charCode >= A_CODE && charCode <= Z_CODE) {
      const newCharCode = ((charCode - A_CODE + shift) % 26) + A_CODE;
      encodedMessage += String.fromCharCode(newCharCode);
    } else if (charCode >= a_CODE && charCode <= z_CODE) {
      const newCharCode = ((charCode - a_CODE + shift) % 26) + a_CODE;
      encodedMessage += String.fromCharCode(newCharCode);
    } else {
      encodedMessage += message[i];
    }
  }

  return encodedMessage;
}

window.caesarCipher = caesarCipher;