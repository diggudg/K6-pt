import { IQueryParamPayload } from "../types/http-utility.type";

export function queryBuilder(queryParamPayload: IQueryParamPayload): string {
    const parts = queryParamPayload.value.map((param) => {
        return (
            encodeURIComponent(queryParamPayload.key) + '=' +
            encodeURIComponent(param)
        );
    });

    return parts.join('&');
}