# `coreCrossConnect` Submodule <a name="`coreCrossConnect` Submodule" id="rhizo-co-terraform-provider-oci.coreCrossConnect"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CoreCrossConnect <a name="CoreCrossConnect" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect oci_core_cross_connect}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.Initializer"></a>

```typescript
import { coreCrossConnect } from 'rhizo-co-terraform-provider-oci'

new coreCrossConnect.CoreCrossConnect(scope: Construct, id: string, config: CoreCrossConnectConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig">CoreCrossConnectConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig">CoreCrossConnectConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.putMacsecProperties">putMacsecProperties</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.resetCrossConnectGroupId">resetCrossConnectGroupId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.resetCustomerReferenceName">resetCustomerReferenceName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.resetFarCrossConnectOrCrossConnectGroupId">resetFarCrossConnectOrCrossConnectGroupId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.resetIsActive">resetIsActive</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.resetMacsecProperties">resetMacsecProperties</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.resetNearCrossConnectOrCrossConnectGroupId">resetNearCrossConnectOrCrossConnectGroupId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMacsecProperties` <a name="putMacsecProperties" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.putMacsecProperties"></a>

```typescript
public putMacsecProperties(value: CoreCrossConnectMacsecProperties): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.putMacsecProperties.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecProperties">CoreCrossConnectMacsecProperties</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.putTimeouts"></a>

```typescript
public putTimeouts(value: CoreCrossConnectTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeouts">CoreCrossConnectTimeouts</a>

---

##### `resetCrossConnectGroupId` <a name="resetCrossConnectGroupId" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.resetCrossConnectGroupId"></a>

```typescript
public resetCrossConnectGroupId(): void
```

##### `resetCustomerReferenceName` <a name="resetCustomerReferenceName" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.resetCustomerReferenceName"></a>

```typescript
public resetCustomerReferenceName(): void
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFarCrossConnectOrCrossConnectGroupId` <a name="resetFarCrossConnectOrCrossConnectGroupId" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.resetFarCrossConnectOrCrossConnectGroupId"></a>

```typescript
public resetFarCrossConnectOrCrossConnectGroupId(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsActive` <a name="resetIsActive" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.resetIsActive"></a>

```typescript
public resetIsActive(): void
```

##### `resetMacsecProperties` <a name="resetMacsecProperties" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.resetMacsecProperties"></a>

```typescript
public resetMacsecProperties(): void
```

##### `resetNearCrossConnectOrCrossConnectGroupId` <a name="resetNearCrossConnectOrCrossConnectGroupId" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.resetNearCrossConnectOrCrossConnectGroupId"></a>

```typescript
public resetNearCrossConnectOrCrossConnectGroupId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CoreCrossConnect resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.isConstruct"></a>

```typescript
import { coreCrossConnect } from 'rhizo-co-terraform-provider-oci'

coreCrossConnect.CoreCrossConnect.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.isTerraformElement"></a>

```typescript
import { coreCrossConnect } from 'rhizo-co-terraform-provider-oci'

coreCrossConnect.CoreCrossConnect.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.isTerraformResource"></a>

```typescript
import { coreCrossConnect } from 'rhizo-co-terraform-provider-oci'

coreCrossConnect.CoreCrossConnect.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.generateConfigForImport"></a>

```typescript
import { coreCrossConnect } from 'rhizo-co-terraform-provider-oci'

coreCrossConnect.CoreCrossConnect.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CoreCrossConnect resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CoreCrossConnect to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CoreCrossConnect that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CoreCrossConnect to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.macsecProperties">macsecProperties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference">CoreCrossConnectMacsecPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.ociLogicalDeviceName">ociLogicalDeviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.ociPhysicalDeviceName">ociPhysicalDeviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.portName">portName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference">CoreCrossConnectTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.crossConnectGroupIdInput">crossConnectGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.customerReferenceNameInput">customerReferenceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.farCrossConnectOrCrossConnectGroupIdInput">farCrossConnectOrCrossConnectGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.isActiveInput">isActiveInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.locationNameInput">locationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.macsecPropertiesInput">macsecPropertiesInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecProperties">CoreCrossConnectMacsecProperties</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.nearCrossConnectOrCrossConnectGroupIdInput">nearCrossConnectOrCrossConnectGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.portSpeedShapeNameInput">portSpeedShapeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeouts">CoreCrossConnectTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.crossConnectGroupId">crossConnectGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.customerReferenceName">customerReferenceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.farCrossConnectOrCrossConnectGroupId">farCrossConnectOrCrossConnectGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.isActive">isActive</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.locationName">locationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.nearCrossConnectOrCrossConnectGroupId">nearCrossConnectOrCrossConnectGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.portSpeedShapeName">portSpeedShapeName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `macsecProperties`<sup>Required</sup> <a name="macsecProperties" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.macsecProperties"></a>

```typescript
public readonly macsecProperties: CoreCrossConnectMacsecPropertiesOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference">CoreCrossConnectMacsecPropertiesOutputReference</a>

---

##### `ociLogicalDeviceName`<sup>Required</sup> <a name="ociLogicalDeviceName" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.ociLogicalDeviceName"></a>

```typescript
public readonly ociLogicalDeviceName: string;
```

- *Type:* string

---

##### `ociPhysicalDeviceName`<sup>Required</sup> <a name="ociPhysicalDeviceName" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.ociPhysicalDeviceName"></a>

```typescript
public readonly ociPhysicalDeviceName: string;
```

- *Type:* string

---

##### `portName`<sup>Required</sup> <a name="portName" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.portName"></a>

```typescript
public readonly portName: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.timeouts"></a>

```typescript
public readonly timeouts: CoreCrossConnectTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference">CoreCrossConnectTimeoutsOutputReference</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `crossConnectGroupIdInput`<sup>Optional</sup> <a name="crossConnectGroupIdInput" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.crossConnectGroupIdInput"></a>

```typescript
public readonly crossConnectGroupIdInput: string;
```

- *Type:* string

---

##### `customerReferenceNameInput`<sup>Optional</sup> <a name="customerReferenceNameInput" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.customerReferenceNameInput"></a>

```typescript
public readonly customerReferenceNameInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `farCrossConnectOrCrossConnectGroupIdInput`<sup>Optional</sup> <a name="farCrossConnectOrCrossConnectGroupIdInput" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.farCrossConnectOrCrossConnectGroupIdInput"></a>

```typescript
public readonly farCrossConnectOrCrossConnectGroupIdInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isActiveInput`<sup>Optional</sup> <a name="isActiveInput" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.isActiveInput"></a>

```typescript
public readonly isActiveInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `locationNameInput`<sup>Optional</sup> <a name="locationNameInput" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.locationNameInput"></a>

```typescript
public readonly locationNameInput: string;
```

- *Type:* string

---

##### `macsecPropertiesInput`<sup>Optional</sup> <a name="macsecPropertiesInput" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.macsecPropertiesInput"></a>

```typescript
public readonly macsecPropertiesInput: CoreCrossConnectMacsecProperties;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecProperties">CoreCrossConnectMacsecProperties</a>

---

##### `nearCrossConnectOrCrossConnectGroupIdInput`<sup>Optional</sup> <a name="nearCrossConnectOrCrossConnectGroupIdInput" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.nearCrossConnectOrCrossConnectGroupIdInput"></a>

```typescript
public readonly nearCrossConnectOrCrossConnectGroupIdInput: string;
```

- *Type:* string

---

##### `portSpeedShapeNameInput`<sup>Optional</sup> <a name="portSpeedShapeNameInput" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.portSpeedShapeNameInput"></a>

```typescript
public readonly portSpeedShapeNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CoreCrossConnectTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeouts">CoreCrossConnectTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `crossConnectGroupId`<sup>Required</sup> <a name="crossConnectGroupId" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.crossConnectGroupId"></a>

```typescript
public readonly crossConnectGroupId: string;
```

- *Type:* string

---

##### `customerReferenceName`<sup>Required</sup> <a name="customerReferenceName" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.customerReferenceName"></a>

```typescript
public readonly customerReferenceName: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `farCrossConnectOrCrossConnectGroupId`<sup>Required</sup> <a name="farCrossConnectOrCrossConnectGroupId" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.farCrossConnectOrCrossConnectGroupId"></a>

```typescript
public readonly farCrossConnectOrCrossConnectGroupId: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isActive`<sup>Required</sup> <a name="isActive" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.isActive"></a>

```typescript
public readonly isActive: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `locationName`<sup>Required</sup> <a name="locationName" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.locationName"></a>

```typescript
public readonly locationName: string;
```

- *Type:* string

---

##### `nearCrossConnectOrCrossConnectGroupId`<sup>Required</sup> <a name="nearCrossConnectOrCrossConnectGroupId" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.nearCrossConnectOrCrossConnectGroupId"></a>

```typescript
public readonly nearCrossConnectOrCrossConnectGroupId: string;
```

- *Type:* string

---

##### `portSpeedShapeName`<sup>Required</sup> <a name="portSpeedShapeName" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.portSpeedShapeName"></a>

```typescript
public readonly portSpeedShapeName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CoreCrossConnectConfig <a name="CoreCrossConnectConfig" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.Initializer"></a>

```typescript
import { coreCrossConnect } from 'rhizo-co-terraform-provider-oci'

const coreCrossConnectConfig: coreCrossConnect.CoreCrossConnectConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#compartment_id CoreCrossConnect#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.locationName">locationName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#location_name CoreCrossConnect#location_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.portSpeedShapeName">portSpeedShapeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#port_speed_shape_name CoreCrossConnect#port_speed_shape_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.crossConnectGroupId">crossConnectGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#cross_connect_group_id CoreCrossConnect#cross_connect_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.customerReferenceName">customerReferenceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#customer_reference_name CoreCrossConnect#customer_reference_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#defined_tags CoreCrossConnect#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#display_name CoreCrossConnect#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.farCrossConnectOrCrossConnectGroupId">farCrossConnectOrCrossConnectGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#far_cross_connect_or_cross_connect_group_id CoreCrossConnect#far_cross_connect_or_cross_connect_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#freeform_tags CoreCrossConnect#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#id CoreCrossConnect#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.isActive">isActive</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#is_active CoreCrossConnect#is_active}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.macsecProperties">macsecProperties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecProperties">CoreCrossConnectMacsecProperties</a></code> | macsec_properties block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.nearCrossConnectOrCrossConnectGroupId">nearCrossConnectOrCrossConnectGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#near_cross_connect_or_cross_connect_group_id CoreCrossConnect#near_cross_connect_or_cross_connect_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeouts">CoreCrossConnectTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#compartment_id CoreCrossConnect#compartment_id}.

---

##### `locationName`<sup>Required</sup> <a name="locationName" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.locationName"></a>

```typescript
public readonly locationName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#location_name CoreCrossConnect#location_name}.

---

##### `portSpeedShapeName`<sup>Required</sup> <a name="portSpeedShapeName" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.portSpeedShapeName"></a>

```typescript
public readonly portSpeedShapeName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#port_speed_shape_name CoreCrossConnect#port_speed_shape_name}.

---

##### `crossConnectGroupId`<sup>Optional</sup> <a name="crossConnectGroupId" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.crossConnectGroupId"></a>

```typescript
public readonly crossConnectGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#cross_connect_group_id CoreCrossConnect#cross_connect_group_id}.

---

##### `customerReferenceName`<sup>Optional</sup> <a name="customerReferenceName" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.customerReferenceName"></a>

```typescript
public readonly customerReferenceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#customer_reference_name CoreCrossConnect#customer_reference_name}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#defined_tags CoreCrossConnect#defined_tags}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#display_name CoreCrossConnect#display_name}.

---

##### `farCrossConnectOrCrossConnectGroupId`<sup>Optional</sup> <a name="farCrossConnectOrCrossConnectGroupId" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.farCrossConnectOrCrossConnectGroupId"></a>

```typescript
public readonly farCrossConnectOrCrossConnectGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#far_cross_connect_or_cross_connect_group_id CoreCrossConnect#far_cross_connect_or_cross_connect_group_id}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#freeform_tags CoreCrossConnect#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#id CoreCrossConnect#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isActive`<sup>Optional</sup> <a name="isActive" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.isActive"></a>

```typescript
public readonly isActive: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#is_active CoreCrossConnect#is_active}.

---

##### `macsecProperties`<sup>Optional</sup> <a name="macsecProperties" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.macsecProperties"></a>

```typescript
public readonly macsecProperties: CoreCrossConnectMacsecProperties;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecProperties">CoreCrossConnectMacsecProperties</a>

macsec_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#macsec_properties CoreCrossConnect#macsec_properties}

---

##### `nearCrossConnectOrCrossConnectGroupId`<sup>Optional</sup> <a name="nearCrossConnectOrCrossConnectGroupId" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.nearCrossConnectOrCrossConnectGroupId"></a>

```typescript
public readonly nearCrossConnectOrCrossConnectGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#near_cross_connect_or_cross_connect_group_id CoreCrossConnect#near_cross_connect_or_cross_connect_group_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CoreCrossConnectTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeouts">CoreCrossConnectTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#timeouts CoreCrossConnect#timeouts}

---

### CoreCrossConnectMacsecProperties <a name="CoreCrossConnectMacsecProperties" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecProperties"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecProperties.Initializer"></a>

```typescript
import { coreCrossConnect } from 'rhizo-co-terraform-provider-oci'

const coreCrossConnectMacsecProperties: coreCrossConnect.CoreCrossConnectMacsecProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecProperties.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#state CoreCrossConnect#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecProperties.property.encryptionCipher">encryptionCipher</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#encryption_cipher CoreCrossConnect#encryption_cipher}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecProperties.property.isUnprotectedTrafficAllowed">isUnprotectedTrafficAllowed</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#is_unprotected_traffic_allowed CoreCrossConnect#is_unprotected_traffic_allowed}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecProperties.property.primaryKey">primaryKey</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKey">CoreCrossConnectMacsecPropertiesPrimaryKey</a></code> | primary_key block. |

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecProperties.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#state CoreCrossConnect#state}.

---

##### `encryptionCipher`<sup>Optional</sup> <a name="encryptionCipher" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecProperties.property.encryptionCipher"></a>

```typescript
public readonly encryptionCipher: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#encryption_cipher CoreCrossConnect#encryption_cipher}.

---

##### `isUnprotectedTrafficAllowed`<sup>Optional</sup> <a name="isUnprotectedTrafficAllowed" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecProperties.property.isUnprotectedTrafficAllowed"></a>

```typescript
public readonly isUnprotectedTrafficAllowed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#is_unprotected_traffic_allowed CoreCrossConnect#is_unprotected_traffic_allowed}.

---

##### `primaryKey`<sup>Optional</sup> <a name="primaryKey" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecProperties.property.primaryKey"></a>

```typescript
public readonly primaryKey: CoreCrossConnectMacsecPropertiesPrimaryKey;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKey">CoreCrossConnectMacsecPropertiesPrimaryKey</a>

primary_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#primary_key CoreCrossConnect#primary_key}

---

### CoreCrossConnectMacsecPropertiesPrimaryKey <a name="CoreCrossConnectMacsecPropertiesPrimaryKey" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKey"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKey.Initializer"></a>

```typescript
import { coreCrossConnect } from 'rhizo-co-terraform-provider-oci'

const coreCrossConnectMacsecPropertiesPrimaryKey: coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKey = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKey.property.connectivityAssociationKeySecretId">connectivityAssociationKeySecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#connectivity_association_key_secret_id CoreCrossConnect#connectivity_association_key_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKey.property.connectivityAssociationNameSecretId">connectivityAssociationNameSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#connectivity_association_name_secret_id CoreCrossConnect#connectivity_association_name_secret_id}. |

---

##### `connectivityAssociationKeySecretId`<sup>Required</sup> <a name="connectivityAssociationKeySecretId" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKey.property.connectivityAssociationKeySecretId"></a>

```typescript
public readonly connectivityAssociationKeySecretId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#connectivity_association_key_secret_id CoreCrossConnect#connectivity_association_key_secret_id}.

---

##### `connectivityAssociationNameSecretId`<sup>Required</sup> <a name="connectivityAssociationNameSecretId" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKey.property.connectivityAssociationNameSecretId"></a>

```typescript
public readonly connectivityAssociationNameSecretId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#connectivity_association_name_secret_id CoreCrossConnect#connectivity_association_name_secret_id}.

---

### CoreCrossConnectTimeouts <a name="CoreCrossConnectTimeouts" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeouts.Initializer"></a>

```typescript
import { coreCrossConnect } from 'rhizo-co-terraform-provider-oci'

const coreCrossConnectTimeouts: coreCrossConnect.CoreCrossConnectTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#create CoreCrossConnect#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#delete CoreCrossConnect#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#update CoreCrossConnect#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#create CoreCrossConnect#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#delete CoreCrossConnect#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#update CoreCrossConnect#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CoreCrossConnectMacsecPropertiesOutputReference <a name="CoreCrossConnectMacsecPropertiesOutputReference" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.Initializer"></a>

```typescript
import { coreCrossConnect } from 'rhizo-co-terraform-provider-oci'

new coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.putPrimaryKey">putPrimaryKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.resetEncryptionCipher">resetEncryptionCipher</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.resetIsUnprotectedTrafficAllowed">resetIsUnprotectedTrafficAllowed</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.resetPrimaryKey">resetPrimaryKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPrimaryKey` <a name="putPrimaryKey" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.putPrimaryKey"></a>

```typescript
public putPrimaryKey(value: CoreCrossConnectMacsecPropertiesPrimaryKey): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.putPrimaryKey.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKey">CoreCrossConnectMacsecPropertiesPrimaryKey</a>

---

##### `resetEncryptionCipher` <a name="resetEncryptionCipher" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.resetEncryptionCipher"></a>

```typescript
public resetEncryptionCipher(): void
```

##### `resetIsUnprotectedTrafficAllowed` <a name="resetIsUnprotectedTrafficAllowed" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.resetIsUnprotectedTrafficAllowed"></a>

```typescript
public resetIsUnprotectedTrafficAllowed(): void
```

##### `resetPrimaryKey` <a name="resetPrimaryKey" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.resetPrimaryKey"></a>

```typescript
public resetPrimaryKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.property.primaryKey">primaryKey</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference">CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.property.encryptionCipherInput">encryptionCipherInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.property.isUnprotectedTrafficAllowedInput">isUnprotectedTrafficAllowedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.property.primaryKeyInput">primaryKeyInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKey">CoreCrossConnectMacsecPropertiesPrimaryKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.property.encryptionCipher">encryptionCipher</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.property.isUnprotectedTrafficAllowed">isUnprotectedTrafficAllowed</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecProperties">CoreCrossConnectMacsecProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `primaryKey`<sup>Required</sup> <a name="primaryKey" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.property.primaryKey"></a>

```typescript
public readonly primaryKey: CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference">CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference</a>

---

##### `encryptionCipherInput`<sup>Optional</sup> <a name="encryptionCipherInput" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.property.encryptionCipherInput"></a>

```typescript
public readonly encryptionCipherInput: string;
```

- *Type:* string

---

##### `isUnprotectedTrafficAllowedInput`<sup>Optional</sup> <a name="isUnprotectedTrafficAllowedInput" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.property.isUnprotectedTrafficAllowedInput"></a>

```typescript
public readonly isUnprotectedTrafficAllowedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `primaryKeyInput`<sup>Optional</sup> <a name="primaryKeyInput" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.property.primaryKeyInput"></a>

```typescript
public readonly primaryKeyInput: CoreCrossConnectMacsecPropertiesPrimaryKey;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKey">CoreCrossConnectMacsecPropertiesPrimaryKey</a>

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `encryptionCipher`<sup>Required</sup> <a name="encryptionCipher" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.property.encryptionCipher"></a>

```typescript
public readonly encryptionCipher: string;
```

- *Type:* string

---

##### `isUnprotectedTrafficAllowed`<sup>Required</sup> <a name="isUnprotectedTrafficAllowed" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.property.isUnprotectedTrafficAllowed"></a>

```typescript
public readonly isUnprotectedTrafficAllowed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CoreCrossConnectMacsecProperties;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecProperties">CoreCrossConnectMacsecProperties</a>

---


### CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference <a name="CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.Initializer"></a>

```typescript
import { coreCrossConnect } from 'rhizo-co-terraform-provider-oci'

new coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationKeySecretVersion">connectivityAssociationKeySecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationNameSecretVersion">connectivityAssociationNameSecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationKeySecretIdInput">connectivityAssociationKeySecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationNameSecretIdInput">connectivityAssociationNameSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationKeySecretId">connectivityAssociationKeySecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationNameSecretId">connectivityAssociationNameSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKey">CoreCrossConnectMacsecPropertiesPrimaryKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connectivityAssociationKeySecretVersion`<sup>Required</sup> <a name="connectivityAssociationKeySecretVersion" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationKeySecretVersion"></a>

```typescript
public readonly connectivityAssociationKeySecretVersion: string;
```

- *Type:* string

---

##### `connectivityAssociationNameSecretVersion`<sup>Required</sup> <a name="connectivityAssociationNameSecretVersion" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationNameSecretVersion"></a>

```typescript
public readonly connectivityAssociationNameSecretVersion: string;
```

- *Type:* string

---

##### `connectivityAssociationKeySecretIdInput`<sup>Optional</sup> <a name="connectivityAssociationKeySecretIdInput" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationKeySecretIdInput"></a>

```typescript
public readonly connectivityAssociationKeySecretIdInput: string;
```

- *Type:* string

---

##### `connectivityAssociationNameSecretIdInput`<sup>Optional</sup> <a name="connectivityAssociationNameSecretIdInput" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationNameSecretIdInput"></a>

```typescript
public readonly connectivityAssociationNameSecretIdInput: string;
```

- *Type:* string

---

##### `connectivityAssociationKeySecretId`<sup>Required</sup> <a name="connectivityAssociationKeySecretId" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationKeySecretId"></a>

```typescript
public readonly connectivityAssociationKeySecretId: string;
```

- *Type:* string

---

##### `connectivityAssociationNameSecretId`<sup>Required</sup> <a name="connectivityAssociationNameSecretId" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationNameSecretId"></a>

```typescript
public readonly connectivityAssociationNameSecretId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CoreCrossConnectMacsecPropertiesPrimaryKey;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKey">CoreCrossConnectMacsecPropertiesPrimaryKey</a>

---


### CoreCrossConnectTimeoutsOutputReference <a name="CoreCrossConnectTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.Initializer"></a>

```typescript
import { coreCrossConnect } from 'rhizo-co-terraform-provider-oci'

new coreCrossConnect.CoreCrossConnectTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeouts">CoreCrossConnectTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CoreCrossConnectTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeouts">CoreCrossConnectTimeouts</a>

---



