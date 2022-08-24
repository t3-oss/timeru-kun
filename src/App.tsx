import { useTimeout } from "./timer";
import { useQueryParam, useQueryParamAsNumber } from "./utils/queryParams";

import * as dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
dayjs.extend(duration);

function App() {
  const [expiredText] = useQueryParam("expired");
  const [hours] = useQueryParamAsNumber("h");
  const [minutes] = useQueryParamAsNumber("m");
  const [style, setStyle] = useQueryParam("style");
  const { remainingTime, expired } = useTimeout(hours, minutes);

  return (
    <div className="flex flex-col gap-2 w-screen h-screen items-center justify-center">
      <style dangerouslySetInnerHTML={{ __html: `#timer { ${style} }` }} />
      <h1 id="timer">
        {expired ? expiredText : dayjs.duration(remainingTime).format("m:ss")}
      </h1>
      <textarea
        value={style}
        onChange={({ target }) => setStyle(target.value)}
      />
    </div>
  );
}

export default App;
