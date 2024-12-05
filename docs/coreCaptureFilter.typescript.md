# `coreCaptureFilter` Submodule <a name="`coreCaptureFilter` Submodule" id="rhizo-co-terraform-provider-oci.coreCaptureFilter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CoreCaptureFilter <a name="CoreCaptureFilter" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter oci_core_capture_filter}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.Initializer"></a>

```typescript
import { coreCaptureFilter } from 'rhizo-co-terraform-provider-oci'

new coreCaptureFilter.CoreCaptureFilter(scope: Construct, id: string, config: CoreCaptureFilterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig">CoreCaptureFilterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig">CoreCaptureFilterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.putFlowLogCaptureFilterRules">putFlowLogCaptureFilterRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.putVtapCaptureFilterRules">putVtapCaptureFilterRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.resetFlowLogCaptureFilterRules">resetFlowLogCaptureFilterRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.resetVtapCaptureFilterRules">resetVtapCaptureFilterRules</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFlowLogCaptureFilterRules` <a name="putFlowLogCaptureFilterRules" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.putFlowLogCaptureFilterRules"></a>

```typescript
public putFlowLogCaptureFilterRules(value: IResolvable | CoreCaptureFilterFlowLogCaptureFilterRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.putFlowLogCaptureFilterRules.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRules">CoreCaptureFilterFlowLogCaptureFilterRules</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.putTimeouts"></a>

```typescript
public putTimeouts(value: CoreCaptureFilterTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeouts">CoreCaptureFilterTimeouts</a>

---

##### `putVtapCaptureFilterRules` <a name="putVtapCaptureFilterRules" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.putVtapCaptureFilterRules"></a>

```typescript
public putVtapCaptureFilterRules(value: IResolvable | CoreCaptureFilterVtapCaptureFilterRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.putVtapCaptureFilterRules.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRules">CoreCaptureFilterVtapCaptureFilterRules</a>[]

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFlowLogCaptureFilterRules` <a name="resetFlowLogCaptureFilterRules" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.resetFlowLogCaptureFilterRules"></a>

```typescript
public resetFlowLogCaptureFilterRules(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVtapCaptureFilterRules` <a name="resetVtapCaptureFilterRules" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.resetVtapCaptureFilterRules"></a>

```typescript
public resetVtapCaptureFilterRules(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CoreCaptureFilter resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.isConstruct"></a>

```typescript
import { coreCaptureFilter } from 'rhizo-co-terraform-provider-oci'

coreCaptureFilter.CoreCaptureFilter.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.isTerraformElement"></a>

```typescript
import { coreCaptureFilter } from 'rhizo-co-terraform-provider-oci'

coreCaptureFilter.CoreCaptureFilter.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.isTerraformResource"></a>

```typescript
import { coreCaptureFilter } from 'rhizo-co-terraform-provider-oci'

coreCaptureFilter.CoreCaptureFilter.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.generateConfigForImport"></a>

```typescript
import { coreCaptureFilter } from 'rhizo-co-terraform-provider-oci'

coreCaptureFilter.CoreCaptureFilter.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CoreCaptureFilter resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CoreCaptureFilter to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CoreCaptureFilter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CoreCaptureFilter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.flowLogCaptureFilterRules">flowLogCaptureFilterRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesList">CoreCaptureFilterFlowLogCaptureFilterRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference">CoreCaptureFilterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.vtapCaptureFilterRules">vtapCaptureFilterRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesList">CoreCaptureFilterVtapCaptureFilterRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.filterTypeInput">filterTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.flowLogCaptureFilterRulesInput">flowLogCaptureFilterRulesInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRules">CoreCaptureFilterFlowLogCaptureFilterRules</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeouts">CoreCaptureFilterTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.vtapCaptureFilterRulesInput">vtapCaptureFilterRulesInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRules">CoreCaptureFilterVtapCaptureFilterRules</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.filterType">filterType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `flowLogCaptureFilterRules`<sup>Required</sup> <a name="flowLogCaptureFilterRules" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.flowLogCaptureFilterRules"></a>

```typescript
public readonly flowLogCaptureFilterRules: CoreCaptureFilterFlowLogCaptureFilterRulesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesList">CoreCaptureFilterFlowLogCaptureFilterRulesList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.timeouts"></a>

```typescript
public readonly timeouts: CoreCaptureFilterTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference">CoreCaptureFilterTimeoutsOutputReference</a>

---

##### `vtapCaptureFilterRules`<sup>Required</sup> <a name="vtapCaptureFilterRules" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.vtapCaptureFilterRules"></a>

```typescript
public readonly vtapCaptureFilterRules: CoreCaptureFilterVtapCaptureFilterRulesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesList">CoreCaptureFilterVtapCaptureFilterRulesList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterTypeInput`<sup>Optional</sup> <a name="filterTypeInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.filterTypeInput"></a>

```typescript
public readonly filterTypeInput: string;
```

- *Type:* string

---

##### `flowLogCaptureFilterRulesInput`<sup>Optional</sup> <a name="flowLogCaptureFilterRulesInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.flowLogCaptureFilterRulesInput"></a>

```typescript
public readonly flowLogCaptureFilterRulesInput: IResolvable | CoreCaptureFilterFlowLogCaptureFilterRules[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRules">CoreCaptureFilterFlowLogCaptureFilterRules</a>[]

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CoreCaptureFilterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeouts">CoreCaptureFilterTimeouts</a>

---

##### `vtapCaptureFilterRulesInput`<sup>Optional</sup> <a name="vtapCaptureFilterRulesInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.vtapCaptureFilterRulesInput"></a>

```typescript
public readonly vtapCaptureFilterRulesInput: IResolvable | CoreCaptureFilterVtapCaptureFilterRules[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRules">CoreCaptureFilterVtapCaptureFilterRules</a>[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `filterType`<sup>Required</sup> <a name="filterType" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.filterType"></a>

```typescript
public readonly filterType: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CoreCaptureFilterConfig <a name="CoreCaptureFilterConfig" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.Initializer"></a>

```typescript
import { coreCaptureFilter } from 'rhizo-co-terraform-provider-oci'

const coreCaptureFilterConfig: coreCaptureFilter.CoreCaptureFilterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#compartment_id CoreCaptureFilter#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.property.filterType">filterType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#filter_type CoreCaptureFilter#filter_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#defined_tags CoreCaptureFilter#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#display_name CoreCaptureFilter#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.property.flowLogCaptureFilterRules">flowLogCaptureFilterRules</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRules">CoreCaptureFilterFlowLogCaptureFilterRules</a>[]</code> | flow_log_capture_filter_rules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#freeform_tags CoreCaptureFilter#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#id CoreCaptureFilter#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeouts">CoreCaptureFilterTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.property.vtapCaptureFilterRules">vtapCaptureFilterRules</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRules">CoreCaptureFilterVtapCaptureFilterRules</a>[]</code> | vtap_capture_filter_rules block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#compartment_id CoreCaptureFilter#compartment_id}.

---

##### `filterType`<sup>Required</sup> <a name="filterType" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.property.filterType"></a>

```typescript
public readonly filterType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#filter_type CoreCaptureFilter#filter_type}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#defined_tags CoreCaptureFilter#defined_tags}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#display_name CoreCaptureFilter#display_name}.

---

##### `flowLogCaptureFilterRules`<sup>Optional</sup> <a name="flowLogCaptureFilterRules" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.property.flowLogCaptureFilterRules"></a>

```typescript
public readonly flowLogCaptureFilterRules: IResolvable | CoreCaptureFilterFlowLogCaptureFilterRules[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRules">CoreCaptureFilterFlowLogCaptureFilterRules</a>[]

flow_log_capture_filter_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#flow_log_capture_filter_rules CoreCaptureFilter#flow_log_capture_filter_rules}

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#freeform_tags CoreCaptureFilter#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#id CoreCaptureFilter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CoreCaptureFilterTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeouts">CoreCaptureFilterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#timeouts CoreCaptureFilter#timeouts}

---

##### `vtapCaptureFilterRules`<sup>Optional</sup> <a name="vtapCaptureFilterRules" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.property.vtapCaptureFilterRules"></a>

```typescript
public readonly vtapCaptureFilterRules: IResolvable | CoreCaptureFilterVtapCaptureFilterRules[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRules">CoreCaptureFilterVtapCaptureFilterRules</a>[]

vtap_capture_filter_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#vtap_capture_filter_rules CoreCaptureFilter#vtap_capture_filter_rules}

---

### CoreCaptureFilterFlowLogCaptureFilterRules <a name="CoreCaptureFilterFlowLogCaptureFilterRules" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRules.Initializer"></a>

```typescript
import { coreCaptureFilter } from 'rhizo-co-terraform-provider-oci'

const coreCaptureFilterFlowLogCaptureFilterRules: coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRules.property.destinationCidr">destinationCidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#destination_cidr CoreCaptureFilter#destination_cidr}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRules.property.flowLogType">flowLogType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#flow_log_type CoreCaptureFilter#flow_log_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRules.property.icmpOptions">icmpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions">CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions</a></code> | icmp_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRules.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#is_enabled CoreCaptureFilter#is_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRules.property.priority">priority</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#priority CoreCaptureFilter#priority}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRules.property.protocol">protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#protocol CoreCaptureFilter#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRules.property.ruleAction">ruleAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#rule_action CoreCaptureFilter#rule_action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRules.property.samplingRate">samplingRate</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#sampling_rate CoreCaptureFilter#sampling_rate}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRules.property.sourceCidr">sourceCidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#source_cidr CoreCaptureFilter#source_cidr}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRules.property.tcpOptions">tcpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions">CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions</a></code> | tcp_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRules.property.udpOptions">udpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions">CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions</a></code> | udp_options block. |

---

##### `destinationCidr`<sup>Optional</sup> <a name="destinationCidr" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRules.property.destinationCidr"></a>

```typescript
public readonly destinationCidr: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#destination_cidr CoreCaptureFilter#destination_cidr}.

---

##### `flowLogType`<sup>Optional</sup> <a name="flowLogType" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRules.property.flowLogType"></a>

```typescript
public readonly flowLogType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#flow_log_type CoreCaptureFilter#flow_log_type}.

---

##### `icmpOptions`<sup>Optional</sup> <a name="icmpOptions" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRules.property.icmpOptions"></a>

```typescript
public readonly icmpOptions: CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions">CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions</a>

icmp_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#icmp_options CoreCaptureFilter#icmp_options}

---

##### `isEnabled`<sup>Optional</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRules.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#is_enabled CoreCaptureFilter#is_enabled}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRules.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#priority CoreCaptureFilter#priority}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRules.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#protocol CoreCaptureFilter#protocol}.

---

##### `ruleAction`<sup>Optional</sup> <a name="ruleAction" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRules.property.ruleAction"></a>

```typescript
public readonly ruleAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#rule_action CoreCaptureFilter#rule_action}.

---

##### `samplingRate`<sup>Optional</sup> <a name="samplingRate" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRules.property.samplingRate"></a>

```typescript
public readonly samplingRate: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#sampling_rate CoreCaptureFilter#sampling_rate}.

---

##### `sourceCidr`<sup>Optional</sup> <a name="sourceCidr" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRules.property.sourceCidr"></a>

```typescript
public readonly sourceCidr: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#source_cidr CoreCaptureFilter#source_cidr}.

---

##### `tcpOptions`<sup>Optional</sup> <a name="tcpOptions" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRules.property.tcpOptions"></a>

```typescript
public readonly tcpOptions: CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions">CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions</a>

tcp_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#tcp_options CoreCaptureFilter#tcp_options}

---

##### `udpOptions`<sup>Optional</sup> <a name="udpOptions" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRules.property.udpOptions"></a>

```typescript
public readonly udpOptions: CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions">CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions</a>

udp_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#udp_options CoreCaptureFilter#udp_options}

---

### CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions <a name="CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions.Initializer"></a>

```typescript
import { coreCaptureFilter } from 'rhizo-co-terraform-provider-oci'

const coreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions: coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions.property.type">type</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#type CoreCaptureFilter#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions.property.code">code</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#code CoreCaptureFilter#code}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions.property.type"></a>

```typescript
public readonly type: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#type CoreCaptureFilter#type}.

---

##### `code`<sup>Optional</sup> <a name="code" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions.property.code"></a>

```typescript
public readonly code: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#code CoreCaptureFilter#code}.

---

### CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions <a name="CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions.Initializer"></a>

```typescript
import { coreCaptureFilter } from 'rhizo-co-terraform-provider-oci'

const coreCaptureFilterFlowLogCaptureFilterRulesTcpOptions: coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions.property.destinationPortRange">destinationPortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange">CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange</a></code> | destination_port_range block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions.property.sourcePortRange">sourcePortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange">CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange</a></code> | source_port_range block. |

---

##### `destinationPortRange`<sup>Optional</sup> <a name="destinationPortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions.property.destinationPortRange"></a>

```typescript
public readonly destinationPortRange: CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange">CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange</a>

destination_port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#destination_port_range CoreCaptureFilter#destination_port_range}

---

##### `sourcePortRange`<sup>Optional</sup> <a name="sourcePortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions.property.sourcePortRange"></a>

```typescript
public readonly sourcePortRange: CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange">CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange</a>

source_port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#source_port_range CoreCaptureFilter#source_port_range}

---

### CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange <a name="CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange.Initializer"></a>

```typescript
import { coreCaptureFilter } from 'rhizo-co-terraform-provider-oci'

const coreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange: coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange.property.max">max</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#max CoreCaptureFilter#max}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange.property.min">min</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#min CoreCaptureFilter#min}. |

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#max CoreCaptureFilter#max}.

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#min CoreCaptureFilter#min}.

---

### CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange <a name="CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange.Initializer"></a>

```typescript
import { coreCaptureFilter } from 'rhizo-co-terraform-provider-oci'

const coreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange: coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange.property.max">max</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#max CoreCaptureFilter#max}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange.property.min">min</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#min CoreCaptureFilter#min}. |

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#max CoreCaptureFilter#max}.

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#min CoreCaptureFilter#min}.

---

### CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions <a name="CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions.Initializer"></a>

```typescript
import { coreCaptureFilter } from 'rhizo-co-terraform-provider-oci'

const coreCaptureFilterFlowLogCaptureFilterRulesUdpOptions: coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions.property.destinationPortRange">destinationPortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange">CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange</a></code> | destination_port_range block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions.property.sourcePortRange">sourcePortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange">CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange</a></code> | source_port_range block. |

---

##### `destinationPortRange`<sup>Optional</sup> <a name="destinationPortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions.property.destinationPortRange"></a>

```typescript
public readonly destinationPortRange: CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange">CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange</a>

destination_port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#destination_port_range CoreCaptureFilter#destination_port_range}

---

##### `sourcePortRange`<sup>Optional</sup> <a name="sourcePortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions.property.sourcePortRange"></a>

```typescript
public readonly sourcePortRange: CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange">CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange</a>

source_port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#source_port_range CoreCaptureFilter#source_port_range}

---

### CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange <a name="CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange.Initializer"></a>

```typescript
import { coreCaptureFilter } from 'rhizo-co-terraform-provider-oci'

const coreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange: coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange.property.max">max</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#max CoreCaptureFilter#max}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange.property.min">min</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#min CoreCaptureFilter#min}. |

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#max CoreCaptureFilter#max}.

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#min CoreCaptureFilter#min}.

---

### CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange <a name="CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange.Initializer"></a>

```typescript
import { coreCaptureFilter } from 'rhizo-co-terraform-provider-oci'

const coreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange: coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange.property.max">max</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#max CoreCaptureFilter#max}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange.property.min">min</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#min CoreCaptureFilter#min}. |

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#max CoreCaptureFilter#max}.

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#min CoreCaptureFilter#min}.

---

### CoreCaptureFilterTimeouts <a name="CoreCaptureFilterTimeouts" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeouts.Initializer"></a>

```typescript
import { coreCaptureFilter } from 'rhizo-co-terraform-provider-oci'

const coreCaptureFilterTimeouts: coreCaptureFilter.CoreCaptureFilterTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#create CoreCaptureFilter#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#delete CoreCaptureFilter#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#update CoreCaptureFilter#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#create CoreCaptureFilter#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#delete CoreCaptureFilter#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#update CoreCaptureFilter#update}.

---

### CoreCaptureFilterVtapCaptureFilterRules <a name="CoreCaptureFilterVtapCaptureFilterRules" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRules.Initializer"></a>

```typescript
import { coreCaptureFilter } from 'rhizo-co-terraform-provider-oci'

const coreCaptureFilterVtapCaptureFilterRules: coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRules.property.trafficDirection">trafficDirection</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#traffic_direction CoreCaptureFilter#traffic_direction}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRules.property.destinationCidr">destinationCidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#destination_cidr CoreCaptureFilter#destination_cidr}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRules.property.icmpOptions">icmpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptions">CoreCaptureFilterVtapCaptureFilterRulesIcmpOptions</a></code> | icmp_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRules.property.protocol">protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#protocol CoreCaptureFilter#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRules.property.ruleAction">ruleAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#rule_action CoreCaptureFilter#rule_action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRules.property.sourceCidr">sourceCidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#source_cidr CoreCaptureFilter#source_cidr}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRules.property.tcpOptions">tcpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptions">CoreCaptureFilterVtapCaptureFilterRulesTcpOptions</a></code> | tcp_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRules.property.udpOptions">udpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptions">CoreCaptureFilterVtapCaptureFilterRulesUdpOptions</a></code> | udp_options block. |

---

##### `trafficDirection`<sup>Required</sup> <a name="trafficDirection" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRules.property.trafficDirection"></a>

```typescript
public readonly trafficDirection: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#traffic_direction CoreCaptureFilter#traffic_direction}.

---

##### `destinationCidr`<sup>Optional</sup> <a name="destinationCidr" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRules.property.destinationCidr"></a>

```typescript
public readonly destinationCidr: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#destination_cidr CoreCaptureFilter#destination_cidr}.

---

##### `icmpOptions`<sup>Optional</sup> <a name="icmpOptions" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRules.property.icmpOptions"></a>

```typescript
public readonly icmpOptions: CoreCaptureFilterVtapCaptureFilterRulesIcmpOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptions">CoreCaptureFilterVtapCaptureFilterRulesIcmpOptions</a>

icmp_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#icmp_options CoreCaptureFilter#icmp_options}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRules.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#protocol CoreCaptureFilter#protocol}.

---

##### `ruleAction`<sup>Optional</sup> <a name="ruleAction" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRules.property.ruleAction"></a>

```typescript
public readonly ruleAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#rule_action CoreCaptureFilter#rule_action}.

---

##### `sourceCidr`<sup>Optional</sup> <a name="sourceCidr" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRules.property.sourceCidr"></a>

```typescript
public readonly sourceCidr: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#source_cidr CoreCaptureFilter#source_cidr}.

---

##### `tcpOptions`<sup>Optional</sup> <a name="tcpOptions" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRules.property.tcpOptions"></a>

```typescript
public readonly tcpOptions: CoreCaptureFilterVtapCaptureFilterRulesTcpOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptions">CoreCaptureFilterVtapCaptureFilterRulesTcpOptions</a>

tcp_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#tcp_options CoreCaptureFilter#tcp_options}

---

##### `udpOptions`<sup>Optional</sup> <a name="udpOptions" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRules.property.udpOptions"></a>

```typescript
public readonly udpOptions: CoreCaptureFilterVtapCaptureFilterRulesUdpOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptions">CoreCaptureFilterVtapCaptureFilterRulesUdpOptions</a>

udp_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#udp_options CoreCaptureFilter#udp_options}

---

### CoreCaptureFilterVtapCaptureFilterRulesIcmpOptions <a name="CoreCaptureFilterVtapCaptureFilterRulesIcmpOptions" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptions.Initializer"></a>

```typescript
import { coreCaptureFilter } from 'rhizo-co-terraform-provider-oci'

const coreCaptureFilterVtapCaptureFilterRulesIcmpOptions: coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptions.property.type">type</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#type CoreCaptureFilter#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptions.property.code">code</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#code CoreCaptureFilter#code}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptions.property.type"></a>

```typescript
public readonly type: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#type CoreCaptureFilter#type}.

---

##### `code`<sup>Optional</sup> <a name="code" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptions.property.code"></a>

```typescript
public readonly code: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#code CoreCaptureFilter#code}.

---

### CoreCaptureFilterVtapCaptureFilterRulesTcpOptions <a name="CoreCaptureFilterVtapCaptureFilterRulesTcpOptions" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptions.Initializer"></a>

```typescript
import { coreCaptureFilter } from 'rhizo-co-terraform-provider-oci'

const coreCaptureFilterVtapCaptureFilterRulesTcpOptions: coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptions.property.destinationPortRange">destinationPortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange">CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange</a></code> | destination_port_range block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptions.property.sourcePortRange">sourcePortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange">CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange</a></code> | source_port_range block. |

---

##### `destinationPortRange`<sup>Optional</sup> <a name="destinationPortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptions.property.destinationPortRange"></a>

```typescript
public readonly destinationPortRange: CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange">CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange</a>

destination_port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#destination_port_range CoreCaptureFilter#destination_port_range}

---

##### `sourcePortRange`<sup>Optional</sup> <a name="sourcePortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptions.property.sourcePortRange"></a>

```typescript
public readonly sourcePortRange: CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange">CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange</a>

source_port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#source_port_range CoreCaptureFilter#source_port_range}

---

### CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange <a name="CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange.Initializer"></a>

```typescript
import { coreCaptureFilter } from 'rhizo-co-terraform-provider-oci'

const coreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange: coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange.property.max">max</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#max CoreCaptureFilter#max}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange.property.min">min</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#min CoreCaptureFilter#min}. |

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#max CoreCaptureFilter#max}.

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#min CoreCaptureFilter#min}.

---

### CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange <a name="CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange.Initializer"></a>

```typescript
import { coreCaptureFilter } from 'rhizo-co-terraform-provider-oci'

const coreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange: coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange.property.max">max</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#max CoreCaptureFilter#max}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange.property.min">min</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#min CoreCaptureFilter#min}. |

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#max CoreCaptureFilter#max}.

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#min CoreCaptureFilter#min}.

---

### CoreCaptureFilterVtapCaptureFilterRulesUdpOptions <a name="CoreCaptureFilterVtapCaptureFilterRulesUdpOptions" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptions.Initializer"></a>

```typescript
import { coreCaptureFilter } from 'rhizo-co-terraform-provider-oci'

const coreCaptureFilterVtapCaptureFilterRulesUdpOptions: coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptions.property.destinationPortRange">destinationPortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange">CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange</a></code> | destination_port_range block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptions.property.sourcePortRange">sourcePortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange">CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange</a></code> | source_port_range block. |

---

##### `destinationPortRange`<sup>Optional</sup> <a name="destinationPortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptions.property.destinationPortRange"></a>

```typescript
public readonly destinationPortRange: CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange">CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange</a>

destination_port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#destination_port_range CoreCaptureFilter#destination_port_range}

---

##### `sourcePortRange`<sup>Optional</sup> <a name="sourcePortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptions.property.sourcePortRange"></a>

```typescript
public readonly sourcePortRange: CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange">CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange</a>

source_port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#source_port_range CoreCaptureFilter#source_port_range}

---

### CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange <a name="CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange.Initializer"></a>

```typescript
import { coreCaptureFilter } from 'rhizo-co-terraform-provider-oci'

const coreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange: coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange.property.max">max</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#max CoreCaptureFilter#max}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange.property.min">min</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#min CoreCaptureFilter#min}. |

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#max CoreCaptureFilter#max}.

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#min CoreCaptureFilter#min}.

---

### CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange <a name="CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange.Initializer"></a>

```typescript
import { coreCaptureFilter } from 'rhizo-co-terraform-provider-oci'

const coreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange: coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange.property.max">max</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#max CoreCaptureFilter#max}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange.property.min">min</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#min CoreCaptureFilter#min}. |

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#max CoreCaptureFilter#max}.

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#min CoreCaptureFilter#min}.

---

## Classes <a name="Classes" id="Classes"></a>

### CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference <a name="CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.Initializer"></a>

```typescript
import { coreCaptureFilter } from 'rhizo-co-terraform-provider-oci'

new coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.resetCode">resetCode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCode` <a name="resetCode" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.resetCode"></a>

```typescript
public resetCode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.property.codeInput">codeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.property.typeInput">typeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.property.code">code</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.property.type">type</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions">CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `codeInput`<sup>Optional</sup> <a name="codeInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.property.codeInput"></a>

```typescript
public readonly codeInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: number;
```

- *Type:* number

---

##### `code`<sup>Required</sup> <a name="code" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.property.code"></a>

```typescript
public readonly code: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.property.type"></a>

```typescript
public readonly type: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions">CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions</a>

---


### CoreCaptureFilterFlowLogCaptureFilterRulesList <a name="CoreCaptureFilterFlowLogCaptureFilterRulesList" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesList.Initializer"></a>

```typescript
import { coreCaptureFilter } from 'rhizo-co-terraform-provider-oci'

new coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesList.get"></a>

```typescript
public get(index: number): CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRules">CoreCaptureFilterFlowLogCaptureFilterRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CoreCaptureFilterFlowLogCaptureFilterRules[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRules">CoreCaptureFilterFlowLogCaptureFilterRules</a>[]

---


### CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference <a name="CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.Initializer"></a>

```typescript
import { coreCaptureFilter } from 'rhizo-co-terraform-provider-oci'

new coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.putIcmpOptions">putIcmpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.putTcpOptions">putTcpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.putUdpOptions">putUdpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.resetDestinationCidr">resetDestinationCidr</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.resetFlowLogType">resetFlowLogType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.resetIcmpOptions">resetIcmpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.resetIsEnabled">resetIsEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.resetRuleAction">resetRuleAction</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.resetSamplingRate">resetSamplingRate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.resetSourceCidr">resetSourceCidr</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.resetTcpOptions">resetTcpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.resetUdpOptions">resetUdpOptions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIcmpOptions` <a name="putIcmpOptions" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.putIcmpOptions"></a>

```typescript
public putIcmpOptions(value: CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.putIcmpOptions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions">CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions</a>

---

##### `putTcpOptions` <a name="putTcpOptions" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.putTcpOptions"></a>

```typescript
public putTcpOptions(value: CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.putTcpOptions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions">CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions</a>

---

##### `putUdpOptions` <a name="putUdpOptions" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.putUdpOptions"></a>

```typescript
public putUdpOptions(value: CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.putUdpOptions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions">CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions</a>

---

##### `resetDestinationCidr` <a name="resetDestinationCidr" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.resetDestinationCidr"></a>

```typescript
public resetDestinationCidr(): void
```

##### `resetFlowLogType` <a name="resetFlowLogType" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.resetFlowLogType"></a>

```typescript
public resetFlowLogType(): void
```

##### `resetIcmpOptions` <a name="resetIcmpOptions" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.resetIcmpOptions"></a>

```typescript
public resetIcmpOptions(): void
```

##### `resetIsEnabled` <a name="resetIsEnabled" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.resetIsEnabled"></a>

```typescript
public resetIsEnabled(): void
```

##### `resetPriority` <a name="resetPriority" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.resetPriority"></a>

```typescript
public resetPriority(): void
```

##### `resetProtocol` <a name="resetProtocol" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.resetProtocol"></a>

```typescript
public resetProtocol(): void
```

##### `resetRuleAction` <a name="resetRuleAction" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.resetRuleAction"></a>

```typescript
public resetRuleAction(): void
```

##### `resetSamplingRate` <a name="resetSamplingRate" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.resetSamplingRate"></a>

```typescript
public resetSamplingRate(): void
```

##### `resetSourceCidr` <a name="resetSourceCidr" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.resetSourceCidr"></a>

```typescript
public resetSourceCidr(): void
```

##### `resetTcpOptions` <a name="resetTcpOptions" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.resetTcpOptions"></a>

```typescript
public resetTcpOptions(): void
```

##### `resetUdpOptions` <a name="resetUdpOptions" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.resetUdpOptions"></a>

```typescript
public resetUdpOptions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.icmpOptions">icmpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference">CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.tcpOptions">tcpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference">CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.udpOptions">udpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference">CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.destinationCidrInput">destinationCidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.flowLogTypeInput">flowLogTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.icmpOptionsInput">icmpOptionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions">CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.isEnabledInput">isEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.ruleActionInput">ruleActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.samplingRateInput">samplingRateInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.sourceCidrInput">sourceCidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.tcpOptionsInput">tcpOptionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions">CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.udpOptionsInput">udpOptionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions">CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.destinationCidr">destinationCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.flowLogType">flowLogType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.ruleAction">ruleAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.samplingRate">samplingRate</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.sourceCidr">sourceCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRules">CoreCaptureFilterFlowLogCaptureFilterRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `icmpOptions`<sup>Required</sup> <a name="icmpOptions" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.icmpOptions"></a>

```typescript
public readonly icmpOptions: CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference">CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference</a>

---

##### `tcpOptions`<sup>Required</sup> <a name="tcpOptions" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.tcpOptions"></a>

```typescript
public readonly tcpOptions: CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference">CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference</a>

---

##### `udpOptions`<sup>Required</sup> <a name="udpOptions" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.udpOptions"></a>

```typescript
public readonly udpOptions: CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference">CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference</a>

---

##### `destinationCidrInput`<sup>Optional</sup> <a name="destinationCidrInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.destinationCidrInput"></a>

```typescript
public readonly destinationCidrInput: string;
```

- *Type:* string

---

##### `flowLogTypeInput`<sup>Optional</sup> <a name="flowLogTypeInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.flowLogTypeInput"></a>

```typescript
public readonly flowLogTypeInput: string;
```

- *Type:* string

---

##### `icmpOptionsInput`<sup>Optional</sup> <a name="icmpOptionsInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.icmpOptionsInput"></a>

```typescript
public readonly icmpOptionsInput: CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions">CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions</a>

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.isEnabledInput"></a>

```typescript
public readonly isEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `ruleActionInput`<sup>Optional</sup> <a name="ruleActionInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.ruleActionInput"></a>

```typescript
public readonly ruleActionInput: string;
```

- *Type:* string

---

##### `samplingRateInput`<sup>Optional</sup> <a name="samplingRateInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.samplingRateInput"></a>

```typescript
public readonly samplingRateInput: number;
```

- *Type:* number

---

##### `sourceCidrInput`<sup>Optional</sup> <a name="sourceCidrInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.sourceCidrInput"></a>

```typescript
public readonly sourceCidrInput: string;
```

- *Type:* string

---

##### `tcpOptionsInput`<sup>Optional</sup> <a name="tcpOptionsInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.tcpOptionsInput"></a>

```typescript
public readonly tcpOptionsInput: CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions">CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions</a>

---

##### `udpOptionsInput`<sup>Optional</sup> <a name="udpOptionsInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.udpOptionsInput"></a>

```typescript
public readonly udpOptionsInput: CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions">CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions</a>

---

##### `destinationCidr`<sup>Required</sup> <a name="destinationCidr" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.destinationCidr"></a>

```typescript
public readonly destinationCidr: string;
```

- *Type:* string

---

##### `flowLogType`<sup>Required</sup> <a name="flowLogType" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.flowLogType"></a>

```typescript
public readonly flowLogType: string;
```

- *Type:* string

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `priority`<sup>Required</sup> <a name="priority" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `ruleAction`<sup>Required</sup> <a name="ruleAction" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.ruleAction"></a>

```typescript
public readonly ruleAction: string;
```

- *Type:* string

---

##### `samplingRate`<sup>Required</sup> <a name="samplingRate" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.samplingRate"></a>

```typescript
public readonly samplingRate: number;
```

- *Type:* number

---

##### `sourceCidr`<sup>Required</sup> <a name="sourceCidr" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.sourceCidr"></a>

```typescript
public readonly sourceCidr: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CoreCaptureFilterFlowLogCaptureFilterRules;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRules">CoreCaptureFilterFlowLogCaptureFilterRules</a>

---


### CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference <a name="CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.Initializer"></a>

```typescript
import { coreCaptureFilter } from 'rhizo-co-terraform-provider-oci'

new coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.maxInput">maxInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.minInput">minInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange">CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.maxInput"></a>

```typescript
public readonly maxInput: number;
```

- *Type:* number

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.minInput"></a>

```typescript
public readonly minInput: number;
```

- *Type:* number

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange">CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange</a>

---


### CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference <a name="CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.Initializer"></a>

```typescript
import { coreCaptureFilter } from 'rhizo-co-terraform-provider-oci'

new coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.putDestinationPortRange">putDestinationPortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.putSourcePortRange">putSourcePortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.resetDestinationPortRange">resetDestinationPortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.resetSourcePortRange">resetSourcePortRange</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDestinationPortRange` <a name="putDestinationPortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.putDestinationPortRange"></a>

```typescript
public putDestinationPortRange(value: CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.putDestinationPortRange.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange">CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange</a>

---

##### `putSourcePortRange` <a name="putSourcePortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.putSourcePortRange"></a>

```typescript
public putSourcePortRange(value: CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.putSourcePortRange.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange">CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange</a>

---

##### `resetDestinationPortRange` <a name="resetDestinationPortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.resetDestinationPortRange"></a>

```typescript
public resetDestinationPortRange(): void
```

##### `resetSourcePortRange` <a name="resetSourcePortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.resetSourcePortRange"></a>

```typescript
public resetSourcePortRange(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.property.destinationPortRange">destinationPortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference">CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.property.sourcePortRange">sourcePortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference">CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.property.destinationPortRangeInput">destinationPortRangeInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange">CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.property.sourcePortRangeInput">sourcePortRangeInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange">CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions">CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationPortRange`<sup>Required</sup> <a name="destinationPortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.property.destinationPortRange"></a>

```typescript
public readonly destinationPortRange: CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference">CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference</a>

---

##### `sourcePortRange`<sup>Required</sup> <a name="sourcePortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.property.sourcePortRange"></a>

```typescript
public readonly sourcePortRange: CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference">CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference</a>

---

##### `destinationPortRangeInput`<sup>Optional</sup> <a name="destinationPortRangeInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.property.destinationPortRangeInput"></a>

```typescript
public readonly destinationPortRangeInput: CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange">CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange</a>

---

##### `sourcePortRangeInput`<sup>Optional</sup> <a name="sourcePortRangeInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.property.sourcePortRangeInput"></a>

```typescript
public readonly sourcePortRangeInput: CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange">CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions">CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions</a>

---


### CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference <a name="CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.Initializer"></a>

```typescript
import { coreCaptureFilter } from 'rhizo-co-terraform-provider-oci'

new coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.maxInput">maxInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.minInput">minInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange">CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.maxInput"></a>

```typescript
public readonly maxInput: number;
```

- *Type:* number

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.minInput"></a>

```typescript
public readonly minInput: number;
```

- *Type:* number

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange">CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange</a>

---


### CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference <a name="CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.Initializer"></a>

```typescript
import { coreCaptureFilter } from 'rhizo-co-terraform-provider-oci'

new coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.maxInput">maxInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.minInput">minInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange">CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.maxInput"></a>

```typescript
public readonly maxInput: number;
```

- *Type:* number

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.minInput"></a>

```typescript
public readonly minInput: number;
```

- *Type:* number

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange">CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange</a>

---


### CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference <a name="CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.Initializer"></a>

```typescript
import { coreCaptureFilter } from 'rhizo-co-terraform-provider-oci'

new coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.putDestinationPortRange">putDestinationPortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.putSourcePortRange">putSourcePortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.resetDestinationPortRange">resetDestinationPortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.resetSourcePortRange">resetSourcePortRange</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDestinationPortRange` <a name="putDestinationPortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.putDestinationPortRange"></a>

```typescript
public putDestinationPortRange(value: CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.putDestinationPortRange.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange">CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange</a>

---

##### `putSourcePortRange` <a name="putSourcePortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.putSourcePortRange"></a>

```typescript
public putSourcePortRange(value: CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.putSourcePortRange.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange">CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange</a>

---

##### `resetDestinationPortRange` <a name="resetDestinationPortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.resetDestinationPortRange"></a>

```typescript
public resetDestinationPortRange(): void
```

##### `resetSourcePortRange` <a name="resetSourcePortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.resetSourcePortRange"></a>

```typescript
public resetSourcePortRange(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.property.destinationPortRange">destinationPortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference">CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.property.sourcePortRange">sourcePortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference">CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.property.destinationPortRangeInput">destinationPortRangeInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange">CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.property.sourcePortRangeInput">sourcePortRangeInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange">CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions">CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationPortRange`<sup>Required</sup> <a name="destinationPortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.property.destinationPortRange"></a>

```typescript
public readonly destinationPortRange: CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference">CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference</a>

---

##### `sourcePortRange`<sup>Required</sup> <a name="sourcePortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.property.sourcePortRange"></a>

```typescript
public readonly sourcePortRange: CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference">CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference</a>

---

##### `destinationPortRangeInput`<sup>Optional</sup> <a name="destinationPortRangeInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.property.destinationPortRangeInput"></a>

```typescript
public readonly destinationPortRangeInput: CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange">CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange</a>

---

##### `sourcePortRangeInput`<sup>Optional</sup> <a name="sourcePortRangeInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.property.sourcePortRangeInput"></a>

```typescript
public readonly sourcePortRangeInput: CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange">CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions">CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions</a>

---


### CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference <a name="CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.Initializer"></a>

```typescript
import { coreCaptureFilter } from 'rhizo-co-terraform-provider-oci'

new coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.maxInput">maxInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.minInput">minInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange">CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.maxInput"></a>

```typescript
public readonly maxInput: number;
```

- *Type:* number

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.minInput"></a>

```typescript
public readonly minInput: number;
```

- *Type:* number

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange">CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange</a>

---


### CoreCaptureFilterTimeoutsOutputReference <a name="CoreCaptureFilterTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.Initializer"></a>

```typescript
import { coreCaptureFilter } from 'rhizo-co-terraform-provider-oci'

new coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeouts">CoreCaptureFilterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CoreCaptureFilterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeouts">CoreCaptureFilterTimeouts</a>

---


### CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference <a name="CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.Initializer"></a>

```typescript
import { coreCaptureFilter } from 'rhizo-co-terraform-provider-oci'

new coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.resetCode">resetCode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCode` <a name="resetCode" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.resetCode"></a>

```typescript
public resetCode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.property.codeInput">codeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.property.typeInput">typeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.property.code">code</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.property.type">type</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptions">CoreCaptureFilterVtapCaptureFilterRulesIcmpOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `codeInput`<sup>Optional</sup> <a name="codeInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.property.codeInput"></a>

```typescript
public readonly codeInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: number;
```

- *Type:* number

---

##### `code`<sup>Required</sup> <a name="code" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.property.code"></a>

```typescript
public readonly code: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.property.type"></a>

```typescript
public readonly type: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CoreCaptureFilterVtapCaptureFilterRulesIcmpOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptions">CoreCaptureFilterVtapCaptureFilterRulesIcmpOptions</a>

---


### CoreCaptureFilterVtapCaptureFilterRulesList <a name="CoreCaptureFilterVtapCaptureFilterRulesList" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesList.Initializer"></a>

```typescript
import { coreCaptureFilter } from 'rhizo-co-terraform-provider-oci'

new coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesList.get"></a>

```typescript
public get(index: number): CoreCaptureFilterVtapCaptureFilterRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRules">CoreCaptureFilterVtapCaptureFilterRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CoreCaptureFilterVtapCaptureFilterRules[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRules">CoreCaptureFilterVtapCaptureFilterRules</a>[]

---


### CoreCaptureFilterVtapCaptureFilterRulesOutputReference <a name="CoreCaptureFilterVtapCaptureFilterRulesOutputReference" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.Initializer"></a>

```typescript
import { coreCaptureFilter } from 'rhizo-co-terraform-provider-oci'

new coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.putIcmpOptions">putIcmpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.putTcpOptions">putTcpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.putUdpOptions">putUdpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.resetDestinationCidr">resetDestinationCidr</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.resetIcmpOptions">resetIcmpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.resetRuleAction">resetRuleAction</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.resetSourceCidr">resetSourceCidr</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.resetTcpOptions">resetTcpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.resetUdpOptions">resetUdpOptions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIcmpOptions` <a name="putIcmpOptions" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.putIcmpOptions"></a>

```typescript
public putIcmpOptions(value: CoreCaptureFilterVtapCaptureFilterRulesIcmpOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.putIcmpOptions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptions">CoreCaptureFilterVtapCaptureFilterRulesIcmpOptions</a>

---

##### `putTcpOptions` <a name="putTcpOptions" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.putTcpOptions"></a>

```typescript
public putTcpOptions(value: CoreCaptureFilterVtapCaptureFilterRulesTcpOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.putTcpOptions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptions">CoreCaptureFilterVtapCaptureFilterRulesTcpOptions</a>

---

##### `putUdpOptions` <a name="putUdpOptions" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.putUdpOptions"></a>

```typescript
public putUdpOptions(value: CoreCaptureFilterVtapCaptureFilterRulesUdpOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.putUdpOptions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptions">CoreCaptureFilterVtapCaptureFilterRulesUdpOptions</a>

---

##### `resetDestinationCidr` <a name="resetDestinationCidr" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.resetDestinationCidr"></a>

```typescript
public resetDestinationCidr(): void
```

##### `resetIcmpOptions` <a name="resetIcmpOptions" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.resetIcmpOptions"></a>

```typescript
public resetIcmpOptions(): void
```

##### `resetProtocol` <a name="resetProtocol" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.resetProtocol"></a>

```typescript
public resetProtocol(): void
```

##### `resetRuleAction` <a name="resetRuleAction" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.resetRuleAction"></a>

```typescript
public resetRuleAction(): void
```

##### `resetSourceCidr` <a name="resetSourceCidr" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.resetSourceCidr"></a>

```typescript
public resetSourceCidr(): void
```

##### `resetTcpOptions` <a name="resetTcpOptions" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.resetTcpOptions"></a>

```typescript
public resetTcpOptions(): void
```

##### `resetUdpOptions` <a name="resetUdpOptions" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.resetUdpOptions"></a>

```typescript
public resetUdpOptions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.icmpOptions">icmpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference">CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.tcpOptions">tcpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference">CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.udpOptions">udpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference">CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.destinationCidrInput">destinationCidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.icmpOptionsInput">icmpOptionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptions">CoreCaptureFilterVtapCaptureFilterRulesIcmpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.ruleActionInput">ruleActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.sourceCidrInput">sourceCidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.tcpOptionsInput">tcpOptionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptions">CoreCaptureFilterVtapCaptureFilterRulesTcpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.trafficDirectionInput">trafficDirectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.udpOptionsInput">udpOptionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptions">CoreCaptureFilterVtapCaptureFilterRulesUdpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.destinationCidr">destinationCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.ruleAction">ruleAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.sourceCidr">sourceCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.trafficDirection">trafficDirection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRules">CoreCaptureFilterVtapCaptureFilterRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `icmpOptions`<sup>Required</sup> <a name="icmpOptions" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.icmpOptions"></a>

```typescript
public readonly icmpOptions: CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference">CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference</a>

---

##### `tcpOptions`<sup>Required</sup> <a name="tcpOptions" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.tcpOptions"></a>

```typescript
public readonly tcpOptions: CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference">CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference</a>

---

##### `udpOptions`<sup>Required</sup> <a name="udpOptions" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.udpOptions"></a>

```typescript
public readonly udpOptions: CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference">CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference</a>

---

##### `destinationCidrInput`<sup>Optional</sup> <a name="destinationCidrInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.destinationCidrInput"></a>

```typescript
public readonly destinationCidrInput: string;
```

- *Type:* string

---

##### `icmpOptionsInput`<sup>Optional</sup> <a name="icmpOptionsInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.icmpOptionsInput"></a>

```typescript
public readonly icmpOptionsInput: CoreCaptureFilterVtapCaptureFilterRulesIcmpOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptions">CoreCaptureFilterVtapCaptureFilterRulesIcmpOptions</a>

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `ruleActionInput`<sup>Optional</sup> <a name="ruleActionInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.ruleActionInput"></a>

```typescript
public readonly ruleActionInput: string;
```

- *Type:* string

---

##### `sourceCidrInput`<sup>Optional</sup> <a name="sourceCidrInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.sourceCidrInput"></a>

```typescript
public readonly sourceCidrInput: string;
```

- *Type:* string

---

##### `tcpOptionsInput`<sup>Optional</sup> <a name="tcpOptionsInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.tcpOptionsInput"></a>

```typescript
public readonly tcpOptionsInput: CoreCaptureFilterVtapCaptureFilterRulesTcpOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptions">CoreCaptureFilterVtapCaptureFilterRulesTcpOptions</a>

---

##### `trafficDirectionInput`<sup>Optional</sup> <a name="trafficDirectionInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.trafficDirectionInput"></a>

```typescript
public readonly trafficDirectionInput: string;
```

- *Type:* string

---

##### `udpOptionsInput`<sup>Optional</sup> <a name="udpOptionsInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.udpOptionsInput"></a>

```typescript
public readonly udpOptionsInput: CoreCaptureFilterVtapCaptureFilterRulesUdpOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptions">CoreCaptureFilterVtapCaptureFilterRulesUdpOptions</a>

---

##### `destinationCidr`<sup>Required</sup> <a name="destinationCidr" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.destinationCidr"></a>

```typescript
public readonly destinationCidr: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `ruleAction`<sup>Required</sup> <a name="ruleAction" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.ruleAction"></a>

```typescript
public readonly ruleAction: string;
```

- *Type:* string

---

##### `sourceCidr`<sup>Required</sup> <a name="sourceCidr" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.sourceCidr"></a>

```typescript
public readonly sourceCidr: string;
```

- *Type:* string

---

##### `trafficDirection`<sup>Required</sup> <a name="trafficDirection" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.trafficDirection"></a>

```typescript
public readonly trafficDirection: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CoreCaptureFilterVtapCaptureFilterRules;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRules">CoreCaptureFilterVtapCaptureFilterRules</a>

---


### CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference <a name="CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.Initializer"></a>

```typescript
import { coreCaptureFilter } from 'rhizo-co-terraform-provider-oci'

new coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.maxInput">maxInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.minInput">minInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange">CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.maxInput"></a>

```typescript
public readonly maxInput: number;
```

- *Type:* number

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.minInput"></a>

```typescript
public readonly minInput: number;
```

- *Type:* number

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange">CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange</a>

---


### CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference <a name="CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.Initializer"></a>

```typescript
import { coreCaptureFilter } from 'rhizo-co-terraform-provider-oci'

new coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.putDestinationPortRange">putDestinationPortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.putSourcePortRange">putSourcePortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.resetDestinationPortRange">resetDestinationPortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.resetSourcePortRange">resetSourcePortRange</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDestinationPortRange` <a name="putDestinationPortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.putDestinationPortRange"></a>

```typescript
public putDestinationPortRange(value: CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.putDestinationPortRange.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange">CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange</a>

---

##### `putSourcePortRange` <a name="putSourcePortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.putSourcePortRange"></a>

```typescript
public putSourcePortRange(value: CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.putSourcePortRange.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange">CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange</a>

---

##### `resetDestinationPortRange` <a name="resetDestinationPortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.resetDestinationPortRange"></a>

```typescript
public resetDestinationPortRange(): void
```

##### `resetSourcePortRange` <a name="resetSourcePortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.resetSourcePortRange"></a>

```typescript
public resetSourcePortRange(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.property.destinationPortRange">destinationPortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference">CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.property.sourcePortRange">sourcePortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference">CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.property.destinationPortRangeInput">destinationPortRangeInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange">CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.property.sourcePortRangeInput">sourcePortRangeInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange">CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptions">CoreCaptureFilterVtapCaptureFilterRulesTcpOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationPortRange`<sup>Required</sup> <a name="destinationPortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.property.destinationPortRange"></a>

```typescript
public readonly destinationPortRange: CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference">CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference</a>

---

##### `sourcePortRange`<sup>Required</sup> <a name="sourcePortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.property.sourcePortRange"></a>

```typescript
public readonly sourcePortRange: CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference">CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference</a>

---

##### `destinationPortRangeInput`<sup>Optional</sup> <a name="destinationPortRangeInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.property.destinationPortRangeInput"></a>

```typescript
public readonly destinationPortRangeInput: CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange">CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange</a>

---

##### `sourcePortRangeInput`<sup>Optional</sup> <a name="sourcePortRangeInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.property.sourcePortRangeInput"></a>

```typescript
public readonly sourcePortRangeInput: CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange">CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CoreCaptureFilterVtapCaptureFilterRulesTcpOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptions">CoreCaptureFilterVtapCaptureFilterRulesTcpOptions</a>

---


### CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference <a name="CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.Initializer"></a>

```typescript
import { coreCaptureFilter } from 'rhizo-co-terraform-provider-oci'

new coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.maxInput">maxInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.minInput">minInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange">CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.maxInput"></a>

```typescript
public readonly maxInput: number;
```

- *Type:* number

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.minInput"></a>

```typescript
public readonly minInput: number;
```

- *Type:* number

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange">CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange</a>

---


### CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference <a name="CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.Initializer"></a>

```typescript
import { coreCaptureFilter } from 'rhizo-co-terraform-provider-oci'

new coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.maxInput">maxInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.minInput">minInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange">CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.maxInput"></a>

```typescript
public readonly maxInput: number;
```

- *Type:* number

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.minInput"></a>

```typescript
public readonly minInput: number;
```

- *Type:* number

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange">CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange</a>

---


### CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference <a name="CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.Initializer"></a>

```typescript
import { coreCaptureFilter } from 'rhizo-co-terraform-provider-oci'

new coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.putDestinationPortRange">putDestinationPortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.putSourcePortRange">putSourcePortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.resetDestinationPortRange">resetDestinationPortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.resetSourcePortRange">resetSourcePortRange</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDestinationPortRange` <a name="putDestinationPortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.putDestinationPortRange"></a>

```typescript
public putDestinationPortRange(value: CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.putDestinationPortRange.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange">CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange</a>

---

##### `putSourcePortRange` <a name="putSourcePortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.putSourcePortRange"></a>

```typescript
public putSourcePortRange(value: CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.putSourcePortRange.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange">CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange</a>

---

##### `resetDestinationPortRange` <a name="resetDestinationPortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.resetDestinationPortRange"></a>

```typescript
public resetDestinationPortRange(): void
```

##### `resetSourcePortRange` <a name="resetSourcePortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.resetSourcePortRange"></a>

```typescript
public resetSourcePortRange(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.property.destinationPortRange">destinationPortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference">CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.property.sourcePortRange">sourcePortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference">CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.property.destinationPortRangeInput">destinationPortRangeInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange">CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.property.sourcePortRangeInput">sourcePortRangeInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange">CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptions">CoreCaptureFilterVtapCaptureFilterRulesUdpOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationPortRange`<sup>Required</sup> <a name="destinationPortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.property.destinationPortRange"></a>

```typescript
public readonly destinationPortRange: CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference">CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference</a>

---

##### `sourcePortRange`<sup>Required</sup> <a name="sourcePortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.property.sourcePortRange"></a>

```typescript
public readonly sourcePortRange: CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference">CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference</a>

---

##### `destinationPortRangeInput`<sup>Optional</sup> <a name="destinationPortRangeInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.property.destinationPortRangeInput"></a>

```typescript
public readonly destinationPortRangeInput: CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange">CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange</a>

---

##### `sourcePortRangeInput`<sup>Optional</sup> <a name="sourcePortRangeInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.property.sourcePortRangeInput"></a>

```typescript
public readonly sourcePortRangeInput: CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange">CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CoreCaptureFilterVtapCaptureFilterRulesUdpOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptions">CoreCaptureFilterVtapCaptureFilterRulesUdpOptions</a>

---


### CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference <a name="CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.Initializer"></a>

```typescript
import { coreCaptureFilter } from 'rhizo-co-terraform-provider-oci'

new coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.maxInput">maxInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.minInput">minInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange">CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.maxInput"></a>

```typescript
public readonly maxInput: number;
```

- *Type:* number

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.minInput"></a>

```typescript
public readonly minInput: number;
```

- *Type:* number

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange">CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange</a>

---



