import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setLanguageAC } from "../../../Redux/Reducers/language-reducer";
import { useSelector } from "react-redux";
import { fetchShopTC } from "../../../Redux/Reducers/shop-reducer";

export const LanguageSwitch = () => {
  const dispatch = useDispatch();
  const languageMain = useSelector((state) => state.language.language);

  const handleLanguageChange = (language) => {
    dispatch(setLanguageAC(language));
  };

  useEffect(() => {
    dispatch(fetchShopTC(languageMain));
  }, [languageMain]);

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={languageMain === "ru"}
          onChange={() => handleLanguageChange("ru")}
        />
        Ru
      </label>
      <label>
        <input
          type="checkbox"
          checked={languageMain === "en"}
          onChange={() => handleLanguageChange("en")}
        />
        En
      </label>
    </div>
  );
};
