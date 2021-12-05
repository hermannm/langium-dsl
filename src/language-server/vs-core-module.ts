import {
  createDefaultModule,
  DefaultModuleContext,
  inject,
  LangiumServices,
  Module,
  PartialLangiumServices,
} from "langium";
import { VsCoreGeneratedModule } from "./generated/module";
import { VsCoreValidationRegistry, VsCoreValidator } from "./vs-core-validator";

/**
 * Declaration of custom VSCore services.
 */
export type VsCoreAddedServices = {
  validation: {
    VsCoreValidator: VsCoreValidator;
  };
};

/**
 * Union of Langium default services and custom VSCode services.
 * Used as a constructor parameter for custom service classes.
 */
export type VsCoreServices = LangiumServices & VsCoreAddedServices;

/**
 * Dependency injection module that overrides Langium default services and contributes custom VSCore services.
 */
export const VsCoreModule: Module<
  VsCoreServices,
  PartialLangiumServices & VsCoreAddedServices
> = {
  validation: {
    ValidationRegistry: (injector) => new VsCoreValidationRegistry(injector),
    VsCoreValidator: () => new VsCoreValidator(),
  },
};

/**
 * Injects the full set of language services by merging three modules:
 * - Langium default services
 * - Services generated by `langium-cli`
 * - Custom VSCore services
 */
export function createVsCoreServices(
  context?: DefaultModuleContext
): VsCoreServices {
  return inject(
    createDefaultModule(context),
    VsCoreGeneratedModule,
    VsCoreModule
  );
}
