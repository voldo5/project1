import { useState, useEffect, ComponentType } from "react";
import { AppState } from "./state/appStateReducer";
import { load } from "./api";
import { appData } from "./state/data";

type InjectedProps = {
  initialState: AppState;
};

type PropsWithoutInjected<TBaseProps> = Omit<TBaseProps, keyof InjectedProps>;

export function withInitialState<TProps>(
  WrappedComponent: ComponentType<PropsWithoutInjected<TProps> & InjectedProps>
) {
  return (props: PropsWithoutInjected<TProps>) => {
    const [initialState, setInitialState] = useState<AppState>(appData);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | undefined>();

    useEffect(() => {
      const fetchInitialState = async () => {
        try {
          const data = await load();
          //console.log("fetchInitialState data = ", data);
          //console.log("fetchInitialState initialState2 = ", initialState);
          data.tasks.length > 0
            ? setInitialState(data)
            : setInitialState(initialState);
        } catch (e) {
          setInitialState(initialState);
          //setError(e as Error);
        }
        setIsLoading(false);
      };

      fetchInitialState();
    }, []);

    // ...
    if (isLoading) {
      return <div>Loading</div>;
    }
    if (error) {
      return <div>{error.message}</div>;
    }

    return <WrappedComponent {...props} initialState={initialState} />;
  };
}
