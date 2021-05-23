function regexVar() {
  const re = /^(?=^a.*a$|^e.*e$|^i.*i$|^o.*o$|^u.*u$)(^.{3,}$).*$/;
  // ^a.a$|^e.e$.

  //---------- length check -------
  // (^.{3,}$)

  //------------ OR operator and start aend with same vowel----------
  // (^a.*a$|^e.*e$|^i.*i$|^o.*o$|^u.*u$)

  //--------------AND operator ------------------
  // /^(?=^abc)(?=.*xyz$).*$/
  return re;
}
