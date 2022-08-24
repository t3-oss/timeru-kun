import { useTimeout } from "./timer";
import { useQueryParam, useQueryParamAsNumber } from "./utils/queryParams";

import * as dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
dayjs.extend(duration);

function App() {
  const [expiredText] = useQueryParam("expired");
  const [hours] = useQueryParamAsNumber("h");
  const [minutes] = useQueryParamAsNumber("m");
  const { remainingTime, expired } = useTimeout(hours, minutes);

  return (
    <div className="flex w-screen h-screen items-center justify-center">
      {expired ? expiredText : dayjs.duration(remainingTime).format("m:ss")}
    </div>
  );
}

export default App;
