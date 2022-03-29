import { useState } from "react";

export const useToggle = (value: boolean) => {
    const [state, setState] = useState(value);
    const hide = () => setState(false);
    const show = () => setState(true);

    return [state, show, hide] as const;
}