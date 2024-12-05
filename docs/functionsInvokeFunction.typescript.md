# `functionsInvokeFunction` Submodule <a name="`functionsInvokeFunction` Submodule" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FunctionsInvokeFunction <a name="FunctionsInvokeFunction" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function oci_functions_invoke_function}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.Initializer"></a>

```typescript
import { functionsInvokeFunction } from 'rhizo-co-terraform-provider-oci'

new functionsInvokeFunction.FunctionsInvokeFunction(scope: Construct, id: string, config: FunctionsInvokeFunctionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig">FunctionsInvokeFunctionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig">FunctionsInvokeFunctionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.resetBase64EncodeContent">resetBase64EncodeContent</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.resetFnIntent">resetFnIntent</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.resetFnInvokeType">resetFnInvokeType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.resetInputBodySourcePath">resetInputBodySourcePath</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.resetInvokeFunctionBody">resetInvokeFunctionBody</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.resetInvokeFunctionBodyBase64Encoded">resetInvokeFunctionBodyBase64Encoded</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.putTimeouts"></a>

```typescript
public putTimeouts(value: FunctionsInvokeFunctionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeouts">FunctionsInvokeFunctionTimeouts</a>

---

##### `resetBase64EncodeContent` <a name="resetBase64EncodeContent" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.resetBase64EncodeContent"></a>

```typescript
public resetBase64EncodeContent(): void
```

##### `resetFnIntent` <a name="resetFnIntent" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.resetFnIntent"></a>

```typescript
public resetFnIntent(): void
```

##### `resetFnInvokeType` <a name="resetFnInvokeType" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.resetFnInvokeType"></a>

```typescript
public resetFnInvokeType(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInputBodySourcePath` <a name="resetInputBodySourcePath" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.resetInputBodySourcePath"></a>

```typescript
public resetInputBodySourcePath(): void
```

##### `resetInvokeFunctionBody` <a name="resetInvokeFunctionBody" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.resetInvokeFunctionBody"></a>

```typescript
public resetInvokeFunctionBody(): void
```

##### `resetInvokeFunctionBodyBase64Encoded` <a name="resetInvokeFunctionBodyBase64Encoded" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.resetInvokeFunctionBodyBase64Encoded"></a>

```typescript
public resetInvokeFunctionBodyBase64Encoded(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a FunctionsInvokeFunction resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.isConstruct"></a>

```typescript
import { functionsInvokeFunction } from 'rhizo-co-terraform-provider-oci'

functionsInvokeFunction.FunctionsInvokeFunction.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.isTerraformElement"></a>

```typescript
import { functionsInvokeFunction } from 'rhizo-co-terraform-provider-oci'

functionsInvokeFunction.FunctionsInvokeFunction.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.isTerraformResource"></a>

```typescript
import { functionsInvokeFunction } from 'rhizo-co-terraform-provider-oci'

functionsInvokeFunction.FunctionsInvokeFunction.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.generateConfigForImport"></a>

```typescript
import { functionsInvokeFunction } from 'rhizo-co-terraform-provider-oci'

functionsInvokeFunction.FunctionsInvokeFunction.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a FunctionsInvokeFunction resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FunctionsInvokeFunction to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FunctionsInvokeFunction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the FunctionsInvokeFunction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.invokeEndpoint">invokeEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference">FunctionsInvokeFunctionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.base64EncodeContentInput">base64EncodeContentInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.fnIntentInput">fnIntentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.fnInvokeTypeInput">fnInvokeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.functionIdInput">functionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.inputBodySourcePathInput">inputBodySourcePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.invokeFunctionBodyBase64EncodedInput">invokeFunctionBodyBase64EncodedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.invokeFunctionBodyInput">invokeFunctionBodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeouts">FunctionsInvokeFunctionTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.base64EncodeContent">base64EncodeContent</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.fnIntent">fnIntent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.fnInvokeType">fnInvokeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.functionId">functionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.inputBodySourcePath">inputBodySourcePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.invokeFunctionBody">invokeFunctionBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.invokeFunctionBodyBase64Encoded">invokeFunctionBodyBase64Encoded</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `content`<sup>Required</sup> <a name="content" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `invokeEndpoint`<sup>Required</sup> <a name="invokeEndpoint" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.invokeEndpoint"></a>

```typescript
public readonly invokeEndpoint: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.timeouts"></a>

```typescript
public readonly timeouts: FunctionsInvokeFunctionTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference">FunctionsInvokeFunctionTimeoutsOutputReference</a>

---

##### `base64EncodeContentInput`<sup>Optional</sup> <a name="base64EncodeContentInput" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.base64EncodeContentInput"></a>

```typescript
public readonly base64EncodeContentInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `fnIntentInput`<sup>Optional</sup> <a name="fnIntentInput" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.fnIntentInput"></a>

```typescript
public readonly fnIntentInput: string;
```

- *Type:* string

---

##### `fnInvokeTypeInput`<sup>Optional</sup> <a name="fnInvokeTypeInput" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.fnInvokeTypeInput"></a>

```typescript
public readonly fnInvokeTypeInput: string;
```

- *Type:* string

---

##### `functionIdInput`<sup>Optional</sup> <a name="functionIdInput" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.functionIdInput"></a>

```typescript
public readonly functionIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `inputBodySourcePathInput`<sup>Optional</sup> <a name="inputBodySourcePathInput" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.inputBodySourcePathInput"></a>

```typescript
public readonly inputBodySourcePathInput: string;
```

- *Type:* string

---

##### `invokeFunctionBodyBase64EncodedInput`<sup>Optional</sup> <a name="invokeFunctionBodyBase64EncodedInput" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.invokeFunctionBodyBase64EncodedInput"></a>

```typescript
public readonly invokeFunctionBodyBase64EncodedInput: string;
```

- *Type:* string

---

##### `invokeFunctionBodyInput`<sup>Optional</sup> <a name="invokeFunctionBodyInput" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.invokeFunctionBodyInput"></a>

```typescript
public readonly invokeFunctionBodyInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | FunctionsInvokeFunctionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeouts">FunctionsInvokeFunctionTimeouts</a>

---

##### `base64EncodeContent`<sup>Required</sup> <a name="base64EncodeContent" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.base64EncodeContent"></a>

```typescript
public readonly base64EncodeContent: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `fnIntent`<sup>Required</sup> <a name="fnIntent" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.fnIntent"></a>

```typescript
public readonly fnIntent: string;
```

- *Type:* string

---

##### `fnInvokeType`<sup>Required</sup> <a name="fnInvokeType" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.fnInvokeType"></a>

```typescript
public readonly fnInvokeType: string;
```

- *Type:* string

---

##### `functionId`<sup>Required</sup> <a name="functionId" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.functionId"></a>

```typescript
public readonly functionId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `inputBodySourcePath`<sup>Required</sup> <a name="inputBodySourcePath" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.inputBodySourcePath"></a>

```typescript
public readonly inputBodySourcePath: string;
```

- *Type:* string

---

##### `invokeFunctionBody`<sup>Required</sup> <a name="invokeFunctionBody" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.invokeFunctionBody"></a>

```typescript
public readonly invokeFunctionBody: string;
```

- *Type:* string

---

##### `invokeFunctionBodyBase64Encoded`<sup>Required</sup> <a name="invokeFunctionBodyBase64Encoded" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.invokeFunctionBodyBase64Encoded"></a>

```typescript
public readonly invokeFunctionBodyBase64Encoded: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FunctionsInvokeFunctionConfig <a name="FunctionsInvokeFunctionConfig" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.Initializer"></a>

```typescript
import { functionsInvokeFunction } from 'rhizo-co-terraform-provider-oci'

const functionsInvokeFunctionConfig: functionsInvokeFunction.FunctionsInvokeFunctionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.functionId">functionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#function_id FunctionsInvokeFunction#function_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.base64EncodeContent">base64EncodeContent</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#base64_encode_content FunctionsInvokeFunction#base64_encode_content}. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.fnIntent">fnIntent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#fn_intent FunctionsInvokeFunction#fn_intent}. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.fnInvokeType">fnInvokeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#fn_invoke_type FunctionsInvokeFunction#fn_invoke_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#id FunctionsInvokeFunction#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.inputBodySourcePath">inputBodySourcePath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#input_body_source_path FunctionsInvokeFunction#input_body_source_path}. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.invokeFunctionBody">invokeFunctionBody</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#invoke_function_body FunctionsInvokeFunction#invoke_function_body}. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.invokeFunctionBodyBase64Encoded">invokeFunctionBodyBase64Encoded</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#invoke_function_body_base64_encoded FunctionsInvokeFunction#invoke_function_body_base64_encoded}. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeouts">FunctionsInvokeFunctionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `functionId`<sup>Required</sup> <a name="functionId" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.functionId"></a>

```typescript
public readonly functionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#function_id FunctionsInvokeFunction#function_id}.

---

##### `base64EncodeContent`<sup>Optional</sup> <a name="base64EncodeContent" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.base64EncodeContent"></a>

```typescript
public readonly base64EncodeContent: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#base64_encode_content FunctionsInvokeFunction#base64_encode_content}.

---

##### `fnIntent`<sup>Optional</sup> <a name="fnIntent" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.fnIntent"></a>

```typescript
public readonly fnIntent: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#fn_intent FunctionsInvokeFunction#fn_intent}.

---

##### `fnInvokeType`<sup>Optional</sup> <a name="fnInvokeType" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.fnInvokeType"></a>

```typescript
public readonly fnInvokeType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#fn_invoke_type FunctionsInvokeFunction#fn_invoke_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#id FunctionsInvokeFunction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inputBodySourcePath`<sup>Optional</sup> <a name="inputBodySourcePath" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.inputBodySourcePath"></a>

```typescript
public readonly inputBodySourcePath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#input_body_source_path FunctionsInvokeFunction#input_body_source_path}.

---

##### `invokeFunctionBody`<sup>Optional</sup> <a name="invokeFunctionBody" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.invokeFunctionBody"></a>

```typescript
public readonly invokeFunctionBody: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#invoke_function_body FunctionsInvokeFunction#invoke_function_body}.

---

##### `invokeFunctionBodyBase64Encoded`<sup>Optional</sup> <a name="invokeFunctionBodyBase64Encoded" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.invokeFunctionBodyBase64Encoded"></a>

```typescript
public readonly invokeFunctionBodyBase64Encoded: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#invoke_function_body_base64_encoded FunctionsInvokeFunction#invoke_function_body_base64_encoded}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: FunctionsInvokeFunctionTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeouts">FunctionsInvokeFunctionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#timeouts FunctionsInvokeFunction#timeouts}

---

### FunctionsInvokeFunctionTimeouts <a name="FunctionsInvokeFunctionTimeouts" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeouts.Initializer"></a>

```typescript
import { functionsInvokeFunction } from 'rhizo-co-terraform-provider-oci'

const functionsInvokeFunctionTimeouts: functionsInvokeFunction.FunctionsInvokeFunctionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#create FunctionsInvokeFunction#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#delete FunctionsInvokeFunction#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#update FunctionsInvokeFunction#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#create FunctionsInvokeFunction#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#delete FunctionsInvokeFunction#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#update FunctionsInvokeFunction#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FunctionsInvokeFunctionTimeoutsOutputReference <a name="FunctionsInvokeFunctionTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.Initializer"></a>

```typescript
import { functionsInvokeFunction } from 'rhizo-co-terraform-provider-oci'

new functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeouts">FunctionsInvokeFunctionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FunctionsInvokeFunctionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeouts">FunctionsInvokeFunctionTimeouts</a>

---



