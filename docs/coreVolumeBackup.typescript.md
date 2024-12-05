# `coreVolumeBackup` Submodule <a name="`coreVolumeBackup` Submodule" id="rhizo-co-terraform-provider-oci.coreVolumeBackup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CoreVolumeBackup <a name="CoreVolumeBackup" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup oci_core_volume_backup}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.Initializer"></a>

```typescript
import { coreVolumeBackup } from 'rhizo-co-terraform-provider-oci'

new coreVolumeBackup.CoreVolumeBackup(scope: Construct, id: string, config?: CoreVolumeBackupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupConfig">CoreVolumeBackupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupConfig">CoreVolumeBackupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.putSourceDetails">putSourceDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.resetSourceDetails">resetSourceDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.resetType">resetType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.resetVolumeId">resetVolumeId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSourceDetails` <a name="putSourceDetails" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.putSourceDetails"></a>

```typescript
public putSourceDetails(value: CoreVolumeBackupSourceDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.putSourceDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupSourceDetails">CoreVolumeBackupSourceDetails</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.putTimeouts"></a>

```typescript
public putTimeouts(value: CoreVolumeBackupTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupTimeouts">CoreVolumeBackupTimeouts</a>

---

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```

##### `resetSourceDetails` <a name="resetSourceDetails" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.resetSourceDetails"></a>

```typescript
public resetSourceDetails(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetType` <a name="resetType" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.resetType"></a>

```typescript
public resetType(): void
```

##### `resetVolumeId` <a name="resetVolumeId" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.resetVolumeId"></a>

```typescript
public resetVolumeId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CoreVolumeBackup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.isConstruct"></a>

```typescript
import { coreVolumeBackup } from 'rhizo-co-terraform-provider-oci'

coreVolumeBackup.CoreVolumeBackup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.isTerraformElement"></a>

```typescript
import { coreVolumeBackup } from 'rhizo-co-terraform-provider-oci'

coreVolumeBackup.CoreVolumeBackup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.isTerraformResource"></a>

```typescript
import { coreVolumeBackup } from 'rhizo-co-terraform-provider-oci'

coreVolumeBackup.CoreVolumeBackup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.generateConfigForImport"></a>

```typescript
import { coreVolumeBackup } from 'rhizo-co-terraform-provider-oci'

coreVolumeBackup.CoreVolumeBackup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CoreVolumeBackup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CoreVolumeBackup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CoreVolumeBackup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CoreVolumeBackup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.property.expirationTime">expirationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.property.sizeInGbs">sizeInGbs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.property.sizeInMbs">sizeInMbs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.property.sourceDetails">sourceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupSourceDetailsOutputReference">CoreVolumeBackupSourceDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.property.sourceType">sourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.property.sourceVolumeBackupId">sourceVolumeBackupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupTimeoutsOutputReference">CoreVolumeBackupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.property.timeRequestReceived">timeRequestReceived</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.property.uniqueSizeInGbs">uniqueSizeInGbs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.property.uniqueSizeInMbs">uniqueSizeInMbs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.property.sourceDetailsInput">sourceDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupSourceDetails">CoreVolumeBackupSourceDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupTimeouts">CoreVolumeBackupTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.property.volumeIdInput">volumeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.property.volumeId">volumeId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `expirationTime`<sup>Required</sup> <a name="expirationTime" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.property.expirationTime"></a>

```typescript
public readonly expirationTime: string;
```

- *Type:* string

---

##### `sizeInGbs`<sup>Required</sup> <a name="sizeInGbs" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.property.sizeInGbs"></a>

```typescript
public readonly sizeInGbs: string;
```

- *Type:* string

---

##### `sizeInMbs`<sup>Required</sup> <a name="sizeInMbs" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.property.sizeInMbs"></a>

```typescript
public readonly sizeInMbs: string;
```

- *Type:* string

---

##### `sourceDetails`<sup>Required</sup> <a name="sourceDetails" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.property.sourceDetails"></a>

```typescript
public readonly sourceDetails: CoreVolumeBackupSourceDetailsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupSourceDetailsOutputReference">CoreVolumeBackupSourceDetailsOutputReference</a>

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.property.sourceType"></a>

```typescript
public readonly sourceType: string;
```

- *Type:* string

---

##### `sourceVolumeBackupId`<sup>Required</sup> <a name="sourceVolumeBackupId" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.property.sourceVolumeBackupId"></a>

```typescript
public readonly sourceVolumeBackupId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.property.timeouts"></a>

```typescript
public readonly timeouts: CoreVolumeBackupTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupTimeoutsOutputReference">CoreVolumeBackupTimeoutsOutputReference</a>

---

##### `timeRequestReceived`<sup>Required</sup> <a name="timeRequestReceived" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.property.timeRequestReceived"></a>

```typescript
public readonly timeRequestReceived: string;
```

- *Type:* string

---

##### `uniqueSizeInGbs`<sup>Required</sup> <a name="uniqueSizeInGbs" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.property.uniqueSizeInGbs"></a>

```typescript
public readonly uniqueSizeInGbs: string;
```

- *Type:* string

---

##### `uniqueSizeInMbs`<sup>Required</sup> <a name="uniqueSizeInMbs" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.property.uniqueSizeInMbs"></a>

```typescript
public readonly uniqueSizeInMbs: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `sourceDetailsInput`<sup>Optional</sup> <a name="sourceDetailsInput" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.property.sourceDetailsInput"></a>

```typescript
public readonly sourceDetailsInput: CoreVolumeBackupSourceDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupSourceDetails">CoreVolumeBackupSourceDetails</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CoreVolumeBackupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupTimeouts">CoreVolumeBackupTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `volumeIdInput`<sup>Optional</sup> <a name="volumeIdInput" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.property.volumeIdInput"></a>

```typescript
public readonly volumeIdInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.property.volumeId"></a>

```typescript
public readonly volumeId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CoreVolumeBackupConfig <a name="CoreVolumeBackupConfig" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupConfig.Initializer"></a>

```typescript
import { coreVolumeBackup } from 'rhizo-co-terraform-provider-oci'

const coreVolumeBackupConfig: coreVolumeBackup.CoreVolumeBackupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup#compartment_id CoreVolumeBackup#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup#defined_tags CoreVolumeBackup#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup#display_name CoreVolumeBackup#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup#freeform_tags CoreVolumeBackup#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup#id CoreVolumeBackup#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup#kms_key_id CoreVolumeBackup#kms_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupConfig.property.sourceDetails">sourceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupSourceDetails">CoreVolumeBackupSourceDetails</a></code> | source_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupTimeouts">CoreVolumeBackupTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup#type CoreVolumeBackup#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupConfig.property.volumeId">volumeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup#volume_id CoreVolumeBackup#volume_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup#compartment_id CoreVolumeBackup#compartment_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup#defined_tags CoreVolumeBackup#defined_tags}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup#display_name CoreVolumeBackup#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup#freeform_tags CoreVolumeBackup#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup#id CoreVolumeBackup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupConfig.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup#kms_key_id CoreVolumeBackup#kms_key_id}.

---

##### `sourceDetails`<sup>Optional</sup> <a name="sourceDetails" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupConfig.property.sourceDetails"></a>

```typescript
public readonly sourceDetails: CoreVolumeBackupSourceDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupSourceDetails">CoreVolumeBackupSourceDetails</a>

source_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup#source_details CoreVolumeBackup#source_details}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CoreVolumeBackupTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupTimeouts">CoreVolumeBackupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup#timeouts CoreVolumeBackup#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup#type CoreVolumeBackup#type}.

---

##### `volumeId`<sup>Optional</sup> <a name="volumeId" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupConfig.property.volumeId"></a>

```typescript
public readonly volumeId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup#volume_id CoreVolumeBackup#volume_id}.

---

### CoreVolumeBackupSourceDetails <a name="CoreVolumeBackupSourceDetails" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupSourceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupSourceDetails.Initializer"></a>

```typescript
import { coreVolumeBackup } from 'rhizo-co-terraform-provider-oci'

const coreVolumeBackupSourceDetails: coreVolumeBackup.CoreVolumeBackupSourceDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupSourceDetails.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup#region CoreVolumeBackup#region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupSourceDetails.property.volumeBackupId">volumeBackupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup#volume_backup_id CoreVolumeBackup#volume_backup_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupSourceDetails.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup#kms_key_id CoreVolumeBackup#kms_key_id}. |

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupSourceDetails.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup#region CoreVolumeBackup#region}.

---

##### `volumeBackupId`<sup>Required</sup> <a name="volumeBackupId" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupSourceDetails.property.volumeBackupId"></a>

```typescript
public readonly volumeBackupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup#volume_backup_id CoreVolumeBackup#volume_backup_id}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupSourceDetails.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup#kms_key_id CoreVolumeBackup#kms_key_id}.

---

### CoreVolumeBackupTimeouts <a name="CoreVolumeBackupTimeouts" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupTimeouts.Initializer"></a>

```typescript
import { coreVolumeBackup } from 'rhizo-co-terraform-provider-oci'

const coreVolumeBackupTimeouts: coreVolumeBackup.CoreVolumeBackupTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup#create CoreVolumeBackup#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup#delete CoreVolumeBackup#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup#update CoreVolumeBackup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup#create CoreVolumeBackup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup#delete CoreVolumeBackup#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup#update CoreVolumeBackup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CoreVolumeBackupSourceDetailsOutputReference <a name="CoreVolumeBackupSourceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupSourceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupSourceDetailsOutputReference.Initializer"></a>

```typescript
import { coreVolumeBackup } from 'rhizo-co-terraform-provider-oci'

new coreVolumeBackup.CoreVolumeBackupSourceDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupSourceDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupSourceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupSourceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupSourceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupSourceDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupSourceDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupSourceDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupSourceDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupSourceDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupSourceDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupSourceDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupSourceDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupSourceDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupSourceDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupSourceDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupSourceDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupSourceDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupSourceDetailsOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupSourceDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupSourceDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupSourceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupSourceDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupSourceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupSourceDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupSourceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupSourceDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupSourceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupSourceDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupSourceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupSourceDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupSourceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupSourceDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupSourceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupSourceDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupSourceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupSourceDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupSourceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupSourceDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupSourceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupSourceDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupSourceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupSourceDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupSourceDetailsOutputReference.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupSourceDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupSourceDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupSourceDetailsOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupSourceDetailsOutputReference.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupSourceDetailsOutputReference.property.volumeBackupIdInput">volumeBackupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupSourceDetailsOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupSourceDetailsOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupSourceDetailsOutputReference.property.volumeBackupId">volumeBackupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupSourceDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupSourceDetails">CoreVolumeBackupSourceDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupSourceDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupSourceDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupSourceDetailsOutputReference.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupSourceDetailsOutputReference.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `volumeBackupIdInput`<sup>Optional</sup> <a name="volumeBackupIdInput" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupSourceDetailsOutputReference.property.volumeBackupIdInput"></a>

```typescript
public readonly volumeBackupIdInput: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupSourceDetailsOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupSourceDetailsOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `volumeBackupId`<sup>Required</sup> <a name="volumeBackupId" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupSourceDetailsOutputReference.property.volumeBackupId"></a>

```typescript
public readonly volumeBackupId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupSourceDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CoreVolumeBackupSourceDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupSourceDetails">CoreVolumeBackupSourceDetails</a>

---


### CoreVolumeBackupTimeoutsOutputReference <a name="CoreVolumeBackupTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupTimeoutsOutputReference.Initializer"></a>

```typescript
import { coreVolumeBackup } from 'rhizo-co-terraform-provider-oci'

new coreVolumeBackup.CoreVolumeBackupTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupTimeouts">CoreVolumeBackupTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CoreVolumeBackupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreVolumeBackup.CoreVolumeBackupTimeouts">CoreVolumeBackupTimeouts</a>

---



