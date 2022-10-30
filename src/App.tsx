import React, { FC, useEffect, useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { renderCond } from "@utils/rendering";
import { storageGetItem, StorageKey } from "@utils/storage";

const App: FC = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    initApplication();
  }, []);

  const initApplication = async () => {
    const data = await storageGetItem(StorageKey.TrackerData);
    console.log(data);
    setIsReady(true);
  };

  return renderCond(isReady, () => (
    <SafeAreaView>
      <View>
        <Text>Hello tracker</Text>
      </View>
    </SafeAreaView>
  ));
};

export default App;
