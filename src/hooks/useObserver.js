import { useEffect, useRef } from "react"


export const useObserver = ( scroll, element, loadingCondition, isLoading, toDo ) => {
    const observer = useRef();

    useEffect( () => {
        if (isLoading) return;
        if (observer.current) observer.current.disconnect();

        let callback = (entries, observer) => {
          if (entries[0].isIntersecting && loadingCondition)
            toDo();
        }
        observer.current = new IntersectionObserver(callback);
        observer.current.observe(element.current)
      }, [isLoading, scroll])
}