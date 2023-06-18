import {Injectable, ProviderScope} from "@tsed/di";
import {HTTP_INJECTION_ENGINE} from "../../../model/di/tokens";
import {HttpErrorRenderObj} from "../../../utils/typeings";
import {PlatformResponse} from "@tsed/common";
import {Exception, Unauthorized} from "@tsed/exceptions";
import {AbstractEjsHttpRenderEngine} from "./AbstractEjsHttpRenderEngine";

@Injectable({
    scope: ProviderScope.SINGLETON,
    type: HTTP_INJECTION_ENGINE
})
export class HttpUnauthorizedRenderEngine extends AbstractEjsHttpRenderEngine {
    public render(obj: HttpErrorRenderObj, response: PlatformResponse): Promise<string> {
        return response.render("errorPage.ejs", obj);
    }

    public supportsError(exception: Exception): boolean {
        return exception instanceof Unauthorized;
    }

    public getTitle(): string {
        return "You are not Authorized to view this page.";
    }

}