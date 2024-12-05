# `functionsFunction` Submodule <a name="`functionsFunction` Submodule" id="rhizo-co-terraform-provider-oci.functionsFunction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FunctionsFunction <a name="FunctionsFunction" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_function oci_functions_function}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.Initializer"></a>

```typescript
import { functionsFunction } from 'rhizo-co-terraform-provider-oci'

new functionsFunction.FunctionsFunction(scope: Construct, id: string, config: FunctionsFunctionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionConfig">FunctionsFunctionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionConfig">FunctionsFunctionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.putProvisionedConcurrencyConfig">putProvisionedConcurrencyConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.putSourceDetails">putSourceDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.putTraceConfig">putTraceConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.resetConfig">resetConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.resetImage">resetImage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.resetImageDigest">resetImageDigest</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.resetProvisionedConcurrencyConfig">resetProvisionedConcurrencyConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.resetSourceDetails">resetSourceDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.resetTimeoutInSeconds">resetTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.resetTraceConfig">resetTraceConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putProvisionedConcurrencyConfig` <a name="putProvisionedConcurrencyConfig" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.putProvisionedConcurrencyConfig"></a>

```typescript
public putProvisionedConcurrencyConfig(value: FunctionsFunctionProvisionedConcurrencyConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.putProvisionedConcurrencyConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfig">FunctionsFunctionProvisionedConcurrencyConfig</a>

---

##### `putSourceDetails` <a name="putSourceDetails" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.putSourceDetails"></a>

```typescript
public putSourceDetails(value: FunctionsFunctionSourceDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.putSourceDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetails">FunctionsFunctionSourceDetails</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.putTimeouts"></a>

```typescript
public putTimeouts(value: FunctionsFunctionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeouts">FunctionsFunctionTimeouts</a>

---

##### `putTraceConfig` <a name="putTraceConfig" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.putTraceConfig"></a>

```typescript
public putTraceConfig(value: FunctionsFunctionTraceConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.putTraceConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfig">FunctionsFunctionTraceConfig</a>

---

##### `resetConfig` <a name="resetConfig" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.resetConfig"></a>

```typescript
public resetConfig(): void
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.resetId"></a>

```typescript
public resetId(): void
```

##### `resetImage` <a name="resetImage" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.resetImage"></a>

```typescript
public resetImage(): void
```

##### `resetImageDigest` <a name="resetImageDigest" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.resetImageDigest"></a>

```typescript
public resetImageDigest(): void
```

##### `resetProvisionedConcurrencyConfig` <a name="resetProvisionedConcurrencyConfig" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.resetProvisionedConcurrencyConfig"></a>

```typescript
public resetProvisionedConcurrencyConfig(): void
```

##### `resetSourceDetails` <a name="resetSourceDetails" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.resetSourceDetails"></a>

```typescript
public resetSourceDetails(): void
```

##### `resetTimeoutInSeconds` <a name="resetTimeoutInSeconds" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.resetTimeoutInSeconds"></a>

```typescript
public resetTimeoutInSeconds(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTraceConfig` <a name="resetTraceConfig" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.resetTraceConfig"></a>

```typescript
public resetTraceConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a FunctionsFunction resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.isConstruct"></a>

```typescript
import { functionsFunction } from 'rhizo-co-terraform-provider-oci'

functionsFunction.FunctionsFunction.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.isTerraformElement"></a>

```typescript
import { functionsFunction } from 'rhizo-co-terraform-provider-oci'

functionsFunction.FunctionsFunction.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.isTerraformResource"></a>

```typescript
import { functionsFunction } from 'rhizo-co-terraform-provider-oci'

functionsFunction.FunctionsFunction.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.generateConfigForImport"></a>

```typescript
import { functionsFunction } from 'rhizo-co-terraform-provider-oci'

functionsFunction.FunctionsFunction.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a FunctionsFunction resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FunctionsFunction to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FunctionsFunction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_function#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the FunctionsFunction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.invokeEndpoint">invokeEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.provisionedConcurrencyConfig">provisionedConcurrencyConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference">FunctionsFunctionProvisionedConcurrencyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.shape">shape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.sourceDetails">sourceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference">FunctionsFunctionSourceDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference">FunctionsFunctionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.traceConfig">traceConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference">FunctionsFunctionTraceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.applicationIdInput">applicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.configInput">configInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.imageDigestInput">imageDigestInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.imageInput">imageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.memoryInMbsInput">memoryInMbsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.provisionedConcurrencyConfigInput">provisionedConcurrencyConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfig">FunctionsFunctionProvisionedConcurrencyConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.sourceDetailsInput">sourceDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetails">FunctionsFunctionSourceDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.timeoutInSecondsInput">timeoutInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeouts">FunctionsFunctionTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.traceConfigInput">traceConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfig">FunctionsFunctionTraceConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.applicationId">applicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.config">config</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.image">image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.imageDigest">imageDigest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.memoryInMbs">memoryInMbs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.timeoutInSeconds">timeoutInSeconds</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `invokeEndpoint`<sup>Required</sup> <a name="invokeEndpoint" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.invokeEndpoint"></a>

```typescript
public readonly invokeEndpoint: string;
```

- *Type:* string

---

##### `provisionedConcurrencyConfig`<sup>Required</sup> <a name="provisionedConcurrencyConfig" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.provisionedConcurrencyConfig"></a>

```typescript
public readonly provisionedConcurrencyConfig: FunctionsFunctionProvisionedConcurrencyConfigOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference">FunctionsFunctionProvisionedConcurrencyConfigOutputReference</a>

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.shape"></a>

```typescript
public readonly shape: string;
```

- *Type:* string

---

##### `sourceDetails`<sup>Required</sup> <a name="sourceDetails" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.sourceDetails"></a>

```typescript
public readonly sourceDetails: FunctionsFunctionSourceDetailsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference">FunctionsFunctionSourceDetailsOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.timeouts"></a>

```typescript
public readonly timeouts: FunctionsFunctionTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference">FunctionsFunctionTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `traceConfig`<sup>Required</sup> <a name="traceConfig" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.traceConfig"></a>

```typescript
public readonly traceConfig: FunctionsFunctionTraceConfigOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference">FunctionsFunctionTraceConfigOutputReference</a>

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.applicationIdInput"></a>

```typescript
public readonly applicationIdInput: string;
```

- *Type:* string

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.configInput"></a>

```typescript
public readonly configInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `imageDigestInput`<sup>Optional</sup> <a name="imageDigestInput" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.imageDigestInput"></a>

```typescript
public readonly imageDigestInput: string;
```

- *Type:* string

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.imageInput"></a>

```typescript
public readonly imageInput: string;
```

- *Type:* string

---

##### `memoryInMbsInput`<sup>Optional</sup> <a name="memoryInMbsInput" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.memoryInMbsInput"></a>

```typescript
public readonly memoryInMbsInput: string;
```

- *Type:* string

---

##### `provisionedConcurrencyConfigInput`<sup>Optional</sup> <a name="provisionedConcurrencyConfigInput" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.provisionedConcurrencyConfigInput"></a>

```typescript
public readonly provisionedConcurrencyConfigInput: FunctionsFunctionProvisionedConcurrencyConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfig">FunctionsFunctionProvisionedConcurrencyConfig</a>

---

##### `sourceDetailsInput`<sup>Optional</sup> <a name="sourceDetailsInput" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.sourceDetailsInput"></a>

```typescript
public readonly sourceDetailsInput: FunctionsFunctionSourceDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetails">FunctionsFunctionSourceDetails</a>

---

##### `timeoutInSecondsInput`<sup>Optional</sup> <a name="timeoutInSecondsInput" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.timeoutInSecondsInput"></a>

```typescript
public readonly timeoutInSecondsInput: number;
```

- *Type:* number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | FunctionsFunctionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeouts">FunctionsFunctionTimeouts</a>

---

##### `traceConfigInput`<sup>Optional</sup> <a name="traceConfigInput" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.traceConfigInput"></a>

```typescript
public readonly traceConfigInput: FunctionsFunctionTraceConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfig">FunctionsFunctionTraceConfig</a>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.config"></a>

```typescript
public readonly config: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `image`<sup>Required</sup> <a name="image" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

---

##### `imageDigest`<sup>Required</sup> <a name="imageDigest" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.imageDigest"></a>

```typescript
public readonly imageDigest: string;
```

- *Type:* string

---

##### `memoryInMbs`<sup>Required</sup> <a name="memoryInMbs" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.memoryInMbs"></a>

```typescript
public readonly memoryInMbs: string;
```

- *Type:* string

---

##### `timeoutInSeconds`<sup>Required</sup> <a name="timeoutInSeconds" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.timeoutInSeconds"></a>

```typescript
public readonly timeoutInSeconds: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunction.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FunctionsFunctionConfig <a name="FunctionsFunctionConfig" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionConfig.Initializer"></a>

```typescript
import { functionsFunction } from 'rhizo-co-terraform-provider-oci'

const functionsFunctionConfig: functionsFunction.FunctionsFunctionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionConfig.property.applicationId">applicationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_function#application_id FunctionsFunction#application_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_function#display_name FunctionsFunction#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionConfig.property.memoryInMbs">memoryInMbs</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_function#memory_in_mbs FunctionsFunction#memory_in_mbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionConfig.property.config">config</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_function#config FunctionsFunction#config}. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_function#defined_tags FunctionsFunction#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_function#freeform_tags FunctionsFunction#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_function#id FunctionsFunction#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionConfig.property.image">image</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_function#image FunctionsFunction#image}. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionConfig.property.imageDigest">imageDigest</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_function#image_digest FunctionsFunction#image_digest}. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionConfig.property.provisionedConcurrencyConfig">provisionedConcurrencyConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfig">FunctionsFunctionProvisionedConcurrencyConfig</a></code> | provisioned_concurrency_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionConfig.property.sourceDetails">sourceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetails">FunctionsFunctionSourceDetails</a></code> | source_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionConfig.property.timeoutInSeconds">timeoutInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_function#timeout_in_seconds FunctionsFunction#timeout_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeouts">FunctionsFunctionTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionConfig.property.traceConfig">traceConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfig">FunctionsFunctionTraceConfig</a></code> | trace_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionConfig.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_function#application_id FunctionsFunction#application_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_function#display_name FunctionsFunction#display_name}.

---

##### `memoryInMbs`<sup>Required</sup> <a name="memoryInMbs" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionConfig.property.memoryInMbs"></a>

```typescript
public readonly memoryInMbs: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_function#memory_in_mbs FunctionsFunction#memory_in_mbs}.

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionConfig.property.config"></a>

```typescript
public readonly config: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_function#config FunctionsFunction#config}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_function#defined_tags FunctionsFunction#defined_tags}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_function#freeform_tags FunctionsFunction#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_function#id FunctionsFunction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `image`<sup>Optional</sup> <a name="image" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionConfig.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_function#image FunctionsFunction#image}.

---

##### `imageDigest`<sup>Optional</sup> <a name="imageDigest" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionConfig.property.imageDigest"></a>

```typescript
public readonly imageDigest: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_function#image_digest FunctionsFunction#image_digest}.

---

##### `provisionedConcurrencyConfig`<sup>Optional</sup> <a name="provisionedConcurrencyConfig" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionConfig.property.provisionedConcurrencyConfig"></a>

```typescript
public readonly provisionedConcurrencyConfig: FunctionsFunctionProvisionedConcurrencyConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfig">FunctionsFunctionProvisionedConcurrencyConfig</a>

provisioned_concurrency_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_function#provisioned_concurrency_config FunctionsFunction#provisioned_concurrency_config}

---

##### `sourceDetails`<sup>Optional</sup> <a name="sourceDetails" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionConfig.property.sourceDetails"></a>

```typescript
public readonly sourceDetails: FunctionsFunctionSourceDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetails">FunctionsFunctionSourceDetails</a>

source_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_function#source_details FunctionsFunction#source_details}

---

##### `timeoutInSeconds`<sup>Optional</sup> <a name="timeoutInSeconds" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionConfig.property.timeoutInSeconds"></a>

```typescript
public readonly timeoutInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_function#timeout_in_seconds FunctionsFunction#timeout_in_seconds}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: FunctionsFunctionTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeouts">FunctionsFunctionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_function#timeouts FunctionsFunction#timeouts}

---

##### `traceConfig`<sup>Optional</sup> <a name="traceConfig" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionConfig.property.traceConfig"></a>

```typescript
public readonly traceConfig: FunctionsFunctionTraceConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfig">FunctionsFunctionTraceConfig</a>

trace_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_function#trace_config FunctionsFunction#trace_config}

---

### FunctionsFunctionProvisionedConcurrencyConfig <a name="FunctionsFunctionProvisionedConcurrencyConfig" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfig.Initializer"></a>

```typescript
import { functionsFunction } from 'rhizo-co-terraform-provider-oci'

const functionsFunctionProvisionedConcurrencyConfig: functionsFunction.FunctionsFunctionProvisionedConcurrencyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfig.property.strategy">strategy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_function#strategy FunctionsFunction#strategy}. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfig.property.count">count</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_function#count FunctionsFunction#count}. |

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfig.property.strategy"></a>

```typescript
public readonly strategy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_function#strategy FunctionsFunction#strategy}.

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_function#count FunctionsFunction#count}.

---

### FunctionsFunctionSourceDetails <a name="FunctionsFunctionSourceDetails" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetails.Initializer"></a>

```typescript
import { functionsFunction } from 'rhizo-co-terraform-provider-oci'

const functionsFunctionSourceDetails: functionsFunction.FunctionsFunctionSourceDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetails.property.pbfListingId">pbfListingId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_function#pbf_listing_id FunctionsFunction#pbf_listing_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetails.property.sourceType">sourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_function#source_type FunctionsFunction#source_type}. |

---

##### `pbfListingId`<sup>Required</sup> <a name="pbfListingId" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetails.property.pbfListingId"></a>

```typescript
public readonly pbfListingId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_function#pbf_listing_id FunctionsFunction#pbf_listing_id}.

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetails.property.sourceType"></a>

```typescript
public readonly sourceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_function#source_type FunctionsFunction#source_type}.

---

### FunctionsFunctionTimeouts <a name="FunctionsFunctionTimeouts" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeouts.Initializer"></a>

```typescript
import { functionsFunction } from 'rhizo-co-terraform-provider-oci'

const functionsFunctionTimeouts: functionsFunction.FunctionsFunctionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_function#create FunctionsFunction#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_function#delete FunctionsFunction#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_function#update FunctionsFunction#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_function#create FunctionsFunction#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_function#delete FunctionsFunction#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_function#update FunctionsFunction#update}.

---

### FunctionsFunctionTraceConfig <a name="FunctionsFunctionTraceConfig" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfig.Initializer"></a>

```typescript
import { functionsFunction } from 'rhizo-co-terraform-provider-oci'

const functionsFunctionTraceConfig: functionsFunction.FunctionsFunctionTraceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfig.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_function#is_enabled FunctionsFunction#is_enabled}. |

---

##### `isEnabled`<sup>Optional</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfig.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_function#is_enabled FunctionsFunction#is_enabled}.

---

## Classes <a name="Classes" id="Classes"></a>

### FunctionsFunctionProvisionedConcurrencyConfigOutputReference <a name="FunctionsFunctionProvisionedConcurrencyConfigOutputReference" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.Initializer"></a>

```typescript
import { functionsFunction } from 'rhizo-co-terraform-provider-oci'

new functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.resetCount">resetCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCount` <a name="resetCount" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.resetCount"></a>

```typescript
public resetCount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.property.countInput">countInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.property.strategyInput">strategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.property.strategy">strategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfig">FunctionsFunctionProvisionedConcurrencyConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.property.countInput"></a>

```typescript
public readonly countInput: number;
```

- *Type:* number

---

##### `strategyInput`<sup>Optional</sup> <a name="strategyInput" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.property.strategyInput"></a>

```typescript
public readonly strategyInput: string;
```

- *Type:* string

---

##### `count`<sup>Required</sup> <a name="count" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.property.strategy"></a>

```typescript
public readonly strategy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FunctionsFunctionProvisionedConcurrencyConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionProvisionedConcurrencyConfig">FunctionsFunctionProvisionedConcurrencyConfig</a>

---


### FunctionsFunctionSourceDetailsOutputReference <a name="FunctionsFunctionSourceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.Initializer"></a>

```typescript
import { functionsFunction } from 'rhizo-co-terraform-provider-oci'

new functionsFunction.FunctionsFunctionSourceDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.property.pbfListingIdInput">pbfListingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.property.sourceTypeInput">sourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.property.pbfListingId">pbfListingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.property.sourceType">sourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetails">FunctionsFunctionSourceDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pbfListingIdInput`<sup>Optional</sup> <a name="pbfListingIdInput" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.property.pbfListingIdInput"></a>

```typescript
public readonly pbfListingIdInput: string;
```

- *Type:* string

---

##### `sourceTypeInput`<sup>Optional</sup> <a name="sourceTypeInput" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.property.sourceTypeInput"></a>

```typescript
public readonly sourceTypeInput: string;
```

- *Type:* string

---

##### `pbfListingId`<sup>Required</sup> <a name="pbfListingId" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.property.pbfListingId"></a>

```typescript
public readonly pbfListingId: string;
```

- *Type:* string

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.property.sourceType"></a>

```typescript
public readonly sourceType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FunctionsFunctionSourceDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionSourceDetails">FunctionsFunctionSourceDetails</a>

---


### FunctionsFunctionTimeoutsOutputReference <a name="FunctionsFunctionTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.Initializer"></a>

```typescript
import { functionsFunction } from 'rhizo-co-terraform-provider-oci'

new functionsFunction.FunctionsFunctionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeouts">FunctionsFunctionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FunctionsFunctionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTimeouts">FunctionsFunctionTimeouts</a>

---


### FunctionsFunctionTraceConfigOutputReference <a name="FunctionsFunctionTraceConfigOutputReference" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.Initializer"></a>

```typescript
import { functionsFunction } from 'rhizo-co-terraform-provider-oci'

new functionsFunction.FunctionsFunctionTraceConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.resetIsEnabled">resetIsEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsEnabled` <a name="resetIsEnabled" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.resetIsEnabled"></a>

```typescript
public resetIsEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.property.isEnabledInput">isEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfig">FunctionsFunctionTraceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.property.isEnabledInput"></a>

```typescript
public readonly isEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FunctionsFunctionTraceConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.functionsFunction.FunctionsFunctionTraceConfig">FunctionsFunctionTraceConfig</a>

---



