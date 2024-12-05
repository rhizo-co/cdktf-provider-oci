# `goldenGateDeploymentBackup` Submodule <a name="`goldenGateDeploymentBackup` Submodule" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoldenGateDeploymentBackup <a name="GoldenGateDeploymentBackup" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup oci_golden_gate_deployment_backup}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.Initializer"></a>

```typescript
import { goldenGateDeploymentBackup } from 'rhizo-co-terraform-provider-oci'

new goldenGateDeploymentBackup.GoldenGateDeploymentBackup(scope: Construct, id: string, config: GoldenGateDeploymentBackupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig">GoldenGateDeploymentBackupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig">GoldenGateDeploymentBackupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.putLocks">putLocks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.resetIsLockOverride">resetIsLockOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.resetIsMetadataOnly">resetIsMetadataOnly</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.resetLocks">resetLocks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLocks` <a name="putLocks" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.putLocks"></a>

```typescript
public putLocks(value: IResolvable | GoldenGateDeploymentBackupLocks[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.putLocks.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocks">GoldenGateDeploymentBackupLocks</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.putTimeouts"></a>

```typescript
public putTimeouts(value: GoldenGateDeploymentBackupTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeouts">GoldenGateDeploymentBackupTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsLockOverride` <a name="resetIsLockOverride" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.resetIsLockOverride"></a>

```typescript
public resetIsLockOverride(): void
```

##### `resetIsMetadataOnly` <a name="resetIsMetadataOnly" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.resetIsMetadataOnly"></a>

```typescript
public resetIsMetadataOnly(): void
```

##### `resetLocks` <a name="resetLocks" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.resetLocks"></a>

```typescript
public resetLocks(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoldenGateDeploymentBackup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.isConstruct"></a>

```typescript
import { goldenGateDeploymentBackup } from 'rhizo-co-terraform-provider-oci'

goldenGateDeploymentBackup.GoldenGateDeploymentBackup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.isTerraformElement"></a>

```typescript
import { goldenGateDeploymentBackup } from 'rhizo-co-terraform-provider-oci'

goldenGateDeploymentBackup.GoldenGateDeploymentBackup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.isTerraformResource"></a>

```typescript
import { goldenGateDeploymentBackup } from 'rhizo-co-terraform-provider-oci'

goldenGateDeploymentBackup.GoldenGateDeploymentBackup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.generateConfigForImport"></a>

```typescript
import { goldenGateDeploymentBackup } from 'rhizo-co-terraform-provider-oci'

goldenGateDeploymentBackup.GoldenGateDeploymentBackup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoldenGateDeploymentBackup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoldenGateDeploymentBackup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoldenGateDeploymentBackup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoldenGateDeploymentBackup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.backupType">backupType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.deploymentType">deploymentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.isAutomatic">isAutomatic</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.locks">locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList">GoldenGateDeploymentBackupLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.oggVersion">oggVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.sizeInBytes">sizeInBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.timeBackupFinished">timeBackupFinished</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.timeOfBackup">timeOfBackup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference">GoldenGateDeploymentBackupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.deploymentIdInput">deploymentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.isLockOverrideInput">isLockOverrideInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.isMetadataOnlyInput">isMetadataOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.locksInput">locksInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocks">GoldenGateDeploymentBackupLocks</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.objectInput">objectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeouts">GoldenGateDeploymentBackupTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.deploymentId">deploymentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.isLockOverride">isLockOverride</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.isMetadataOnly">isMetadataOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.object">object</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backupType`<sup>Required</sup> <a name="backupType" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.backupType"></a>

```typescript
public readonly backupType: string;
```

- *Type:* string

---

##### `deploymentType`<sup>Required</sup> <a name="deploymentType" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.deploymentType"></a>

```typescript
public readonly deploymentType: string;
```

- *Type:* string

---

##### `isAutomatic`<sup>Required</sup> <a name="isAutomatic" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.isAutomatic"></a>

```typescript
public readonly isAutomatic: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `locks`<sup>Required</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.locks"></a>

```typescript
public readonly locks: GoldenGateDeploymentBackupLocksList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList">GoldenGateDeploymentBackupLocksList</a>

---

##### `oggVersion`<sup>Required</sup> <a name="oggVersion" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.oggVersion"></a>

```typescript
public readonly oggVersion: string;
```

- *Type:* string

---

##### `sizeInBytes`<sup>Required</sup> <a name="sizeInBytes" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.sizeInBytes"></a>

```typescript
public readonly sizeInBytes: number;
```

- *Type:* number

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeBackupFinished`<sup>Required</sup> <a name="timeBackupFinished" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.timeBackupFinished"></a>

```typescript
public readonly timeBackupFinished: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeOfBackup`<sup>Required</sup> <a name="timeOfBackup" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.timeOfBackup"></a>

```typescript
public readonly timeOfBackup: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.timeouts"></a>

```typescript
public readonly timeouts: GoldenGateDeploymentBackupTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference">GoldenGateDeploymentBackupTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `deploymentIdInput`<sup>Optional</sup> <a name="deploymentIdInput" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.deploymentIdInput"></a>

```typescript
public readonly deploymentIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isLockOverrideInput`<sup>Optional</sup> <a name="isLockOverrideInput" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.isLockOverrideInput"></a>

```typescript
public readonly isLockOverrideInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isMetadataOnlyInput`<sup>Optional</sup> <a name="isMetadataOnlyInput" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.isMetadataOnlyInput"></a>

```typescript
public readonly isMetadataOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `locksInput`<sup>Optional</sup> <a name="locksInput" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.locksInput"></a>

```typescript
public readonly locksInput: IResolvable | GoldenGateDeploymentBackupLocks[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocks">GoldenGateDeploymentBackupLocks</a>[]

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `objectInput`<sup>Optional</sup> <a name="objectInput" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.objectInput"></a>

```typescript
public readonly objectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoldenGateDeploymentBackupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeouts">GoldenGateDeploymentBackupTimeouts</a>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `deploymentId`<sup>Required</sup> <a name="deploymentId" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.deploymentId"></a>

```typescript
public readonly deploymentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isLockOverride`<sup>Required</sup> <a name="isLockOverride" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.isLockOverride"></a>

```typescript
public readonly isLockOverride: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isMetadataOnly`<sup>Required</sup> <a name="isMetadataOnly" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.isMetadataOnly"></a>

```typescript
public readonly isMetadataOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.object"></a>

```typescript
public readonly object: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoldenGateDeploymentBackupConfig <a name="GoldenGateDeploymentBackupConfig" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.Initializer"></a>

```typescript
import { goldenGateDeploymentBackup } from 'rhizo-co-terraform-provider-oci'

const goldenGateDeploymentBackupConfig: goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#bucket GoldenGateDeploymentBackup#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#compartment_id GoldenGateDeploymentBackup#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.deploymentId">deploymentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#deployment_id GoldenGateDeploymentBackup#deployment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#display_name GoldenGateDeploymentBackup#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#namespace GoldenGateDeploymentBackup#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.object">object</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#object GoldenGateDeploymentBackup#object}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#defined_tags GoldenGateDeploymentBackup#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#freeform_tags GoldenGateDeploymentBackup#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#id GoldenGateDeploymentBackup#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.isLockOverride">isLockOverride</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#is_lock_override GoldenGateDeploymentBackup#is_lock_override}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.isMetadataOnly">isMetadataOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#is_metadata_only GoldenGateDeploymentBackup#is_metadata_only}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.locks">locks</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocks">GoldenGateDeploymentBackupLocks</a>[]</code> | locks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeouts">GoldenGateDeploymentBackupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#bucket GoldenGateDeploymentBackup#bucket}.

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#compartment_id GoldenGateDeploymentBackup#compartment_id}.

---

##### `deploymentId`<sup>Required</sup> <a name="deploymentId" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.deploymentId"></a>

```typescript
public readonly deploymentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#deployment_id GoldenGateDeploymentBackup#deployment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#display_name GoldenGateDeploymentBackup#display_name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#namespace GoldenGateDeploymentBackup#namespace}.

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.object"></a>

```typescript
public readonly object: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#object GoldenGateDeploymentBackup#object}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#defined_tags GoldenGateDeploymentBackup#defined_tags}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#freeform_tags GoldenGateDeploymentBackup#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#id GoldenGateDeploymentBackup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isLockOverride`<sup>Optional</sup> <a name="isLockOverride" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.isLockOverride"></a>

```typescript
public readonly isLockOverride: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#is_lock_override GoldenGateDeploymentBackup#is_lock_override}.

---

##### `isMetadataOnly`<sup>Optional</sup> <a name="isMetadataOnly" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.isMetadataOnly"></a>

```typescript
public readonly isMetadataOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#is_metadata_only GoldenGateDeploymentBackup#is_metadata_only}.

---

##### `locks`<sup>Optional</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.locks"></a>

```typescript
public readonly locks: IResolvable | GoldenGateDeploymentBackupLocks[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocks">GoldenGateDeploymentBackupLocks</a>[]

locks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#locks GoldenGateDeploymentBackup#locks}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoldenGateDeploymentBackupTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeouts">GoldenGateDeploymentBackupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#timeouts GoldenGateDeploymentBackup#timeouts}

---

### GoldenGateDeploymentBackupLocks <a name="GoldenGateDeploymentBackupLocks" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocks.Initializer"></a>

```typescript
import { goldenGateDeploymentBackup } from 'rhizo-co-terraform-provider-oci'

const goldenGateDeploymentBackupLocks: goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocks = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocks.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#type GoldenGateDeploymentBackup#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocks.property.message">message</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#message GoldenGateDeploymentBackup#message}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocks.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#type GoldenGateDeploymentBackup#type}.

---

##### `message`<sup>Optional</sup> <a name="message" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocks.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#message GoldenGateDeploymentBackup#message}.

---

### GoldenGateDeploymentBackupTimeouts <a name="GoldenGateDeploymentBackupTimeouts" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeouts.Initializer"></a>

```typescript
import { goldenGateDeploymentBackup } from 'rhizo-co-terraform-provider-oci'

const goldenGateDeploymentBackupTimeouts: goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#create GoldenGateDeploymentBackup#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#delete GoldenGateDeploymentBackup#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#update GoldenGateDeploymentBackup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#create GoldenGateDeploymentBackup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#delete GoldenGateDeploymentBackup#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#update GoldenGateDeploymentBackup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoldenGateDeploymentBackupLocksList <a name="GoldenGateDeploymentBackupLocksList" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.Initializer"></a>

```typescript
import { goldenGateDeploymentBackup } from 'rhizo-co-terraform-provider-oci'

new goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.get"></a>

```typescript
public get(index: number): GoldenGateDeploymentBackupLocksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocks">GoldenGateDeploymentBackupLocks</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoldenGateDeploymentBackupLocks[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocks">GoldenGateDeploymentBackupLocks</a>[]

---


### GoldenGateDeploymentBackupLocksOutputReference <a name="GoldenGateDeploymentBackupLocksOutputReference" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.Initializer"></a>

```typescript
import { goldenGateDeploymentBackup } from 'rhizo-co-terraform-provider-oci'

new goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.resetMessage">resetMessage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMessage` <a name="resetMessage" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.resetMessage"></a>

```typescript
public resetMessage(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.property.relatedResourceId">relatedResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.property.messageInput">messageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocks">GoldenGateDeploymentBackupLocks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `relatedResourceId`<sup>Required</sup> <a name="relatedResourceId" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.property.relatedResourceId"></a>

```typescript
public readonly relatedResourceId: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.property.messageInput"></a>

```typescript
public readonly messageInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoldenGateDeploymentBackupLocks;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocks">GoldenGateDeploymentBackupLocks</a>

---


### GoldenGateDeploymentBackupTimeoutsOutputReference <a name="GoldenGateDeploymentBackupTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.Initializer"></a>

```typescript
import { goldenGateDeploymentBackup } from 'rhizo-co-terraform-provider-oci'

new goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeouts">GoldenGateDeploymentBackupTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoldenGateDeploymentBackupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeouts">GoldenGateDeploymentBackupTimeouts</a>

---



