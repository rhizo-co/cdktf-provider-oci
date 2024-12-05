# `kmsVault` Submodule <a name="`kmsVault` Submodule" id="rhizo-co-terraform-provider-oci.kmsVault"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KmsVault <a name="KmsVault" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault oci_kms_vault}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.Initializer"></a>

```typescript
import { kmsVault } from 'rhizo-co-terraform-provider-oci'

new kmsVault.KmsVault(scope: Construct, id: string, config: KmsVaultConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig">KmsVaultConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig">KmsVaultConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.putExternalKeyManagerMetadata">putExternalKeyManagerMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.putRestoreFromFile">putRestoreFromFile</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.putRestoreFromObjectStore">putRestoreFromObjectStore</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.resetExternalKeyManagerMetadata">resetExternalKeyManagerMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.resetRestoreFromFile">resetRestoreFromFile</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.resetRestoreFromObjectStore">resetRestoreFromObjectStore</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.resetRestoreTrigger">resetRestoreTrigger</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.resetTimeOfDeletion">resetTimeOfDeletion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putExternalKeyManagerMetadata` <a name="putExternalKeyManagerMetadata" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.putExternalKeyManagerMetadata"></a>

```typescript
public putExternalKeyManagerMetadata(value: KmsVaultExternalKeyManagerMetadata): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.putExternalKeyManagerMetadata.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadata">KmsVaultExternalKeyManagerMetadata</a>

---

##### `putRestoreFromFile` <a name="putRestoreFromFile" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.putRestoreFromFile"></a>

```typescript
public putRestoreFromFile(value: KmsVaultRestoreFromFile): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.putRestoreFromFile.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFile">KmsVaultRestoreFromFile</a>

---

##### `putRestoreFromObjectStore` <a name="putRestoreFromObjectStore" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.putRestoreFromObjectStore"></a>

```typescript
public putRestoreFromObjectStore(value: KmsVaultRestoreFromObjectStore): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.putRestoreFromObjectStore.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStore">KmsVaultRestoreFromObjectStore</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.putTimeouts"></a>

```typescript
public putTimeouts(value: KmsVaultTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeouts">KmsVaultTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetExternalKeyManagerMetadata` <a name="resetExternalKeyManagerMetadata" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.resetExternalKeyManagerMetadata"></a>

```typescript
public resetExternalKeyManagerMetadata(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRestoreFromFile` <a name="resetRestoreFromFile" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.resetRestoreFromFile"></a>

```typescript
public resetRestoreFromFile(): void
```

##### `resetRestoreFromObjectStore` <a name="resetRestoreFromObjectStore" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.resetRestoreFromObjectStore"></a>

```typescript
public resetRestoreFromObjectStore(): void
```

##### `resetRestoreTrigger` <a name="resetRestoreTrigger" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.resetRestoreTrigger"></a>

```typescript
public resetRestoreTrigger(): void
```

##### `resetTimeOfDeletion` <a name="resetTimeOfDeletion" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.resetTimeOfDeletion"></a>

```typescript
public resetTimeOfDeletion(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a KmsVault resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.isConstruct"></a>

```typescript
import { kmsVault } from 'rhizo-co-terraform-provider-oci'

kmsVault.KmsVault.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.isTerraformElement"></a>

```typescript
import { kmsVault } from 'rhizo-co-terraform-provider-oci'

kmsVault.KmsVault.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.isTerraformResource"></a>

```typescript
import { kmsVault } from 'rhizo-co-terraform-provider-oci'

kmsVault.KmsVault.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.generateConfigForImport"></a>

```typescript
import { kmsVault } from 'rhizo-co-terraform-provider-oci'

kmsVault.KmsVault.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a KmsVault resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the KmsVault to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing KmsVault that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the KmsVault to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.cryptoEndpoint">cryptoEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.externalKeyManagerMetadata">externalKeyManagerMetadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference">KmsVaultExternalKeyManagerMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.externalKeyManagerMetadataSummary">externalKeyManagerMetadataSummary</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryList">KmsVaultExternalKeyManagerMetadataSummaryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.isPrimary">isPrimary</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.isVaultReplicable">isVaultReplicable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.managementEndpoint">managementEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.replicaDetails">replicaDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsList">KmsVaultReplicaDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.restoredFromVaultId">restoredFromVaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.restoreFromFile">restoreFromFile</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference">KmsVaultRestoreFromFileOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.restoreFromObjectStore">restoreFromObjectStore</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference">KmsVaultRestoreFromObjectStoreOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference">KmsVaultTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.externalKeyManagerMetadataInput">externalKeyManagerMetadataInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadata">KmsVaultExternalKeyManagerMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.restoreFromFileInput">restoreFromFileInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFile">KmsVaultRestoreFromFile</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.restoreFromObjectStoreInput">restoreFromObjectStoreInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStore">KmsVaultRestoreFromObjectStore</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.restoreTriggerInput">restoreTriggerInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.timeOfDeletionInput">timeOfDeletionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeouts">KmsVaultTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.vaultTypeInput">vaultTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.restoreTrigger">restoreTrigger</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.timeOfDeletion">timeOfDeletion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.vaultType">vaultType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `cryptoEndpoint`<sup>Required</sup> <a name="cryptoEndpoint" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.cryptoEndpoint"></a>

```typescript
public readonly cryptoEndpoint: string;
```

- *Type:* string

---

##### `externalKeyManagerMetadata`<sup>Required</sup> <a name="externalKeyManagerMetadata" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.externalKeyManagerMetadata"></a>

```typescript
public readonly externalKeyManagerMetadata: KmsVaultExternalKeyManagerMetadataOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference">KmsVaultExternalKeyManagerMetadataOutputReference</a>

---

##### `externalKeyManagerMetadataSummary`<sup>Required</sup> <a name="externalKeyManagerMetadataSummary" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.externalKeyManagerMetadataSummary"></a>

```typescript
public readonly externalKeyManagerMetadataSummary: KmsVaultExternalKeyManagerMetadataSummaryList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryList">KmsVaultExternalKeyManagerMetadataSummaryList</a>

---

##### `isPrimary`<sup>Required</sup> <a name="isPrimary" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.isPrimary"></a>

```typescript
public readonly isPrimary: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isVaultReplicable`<sup>Required</sup> <a name="isVaultReplicable" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.isVaultReplicable"></a>

```typescript
public readonly isVaultReplicable: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `managementEndpoint`<sup>Required</sup> <a name="managementEndpoint" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.managementEndpoint"></a>

```typescript
public readonly managementEndpoint: string;
```

- *Type:* string

---

##### `replicaDetails`<sup>Required</sup> <a name="replicaDetails" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.replicaDetails"></a>

```typescript
public readonly replicaDetails: KmsVaultReplicaDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsList">KmsVaultReplicaDetailsList</a>

---

##### `restoredFromVaultId`<sup>Required</sup> <a name="restoredFromVaultId" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.restoredFromVaultId"></a>

```typescript
public readonly restoredFromVaultId: string;
```

- *Type:* string

---

##### `restoreFromFile`<sup>Required</sup> <a name="restoreFromFile" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.restoreFromFile"></a>

```typescript
public readonly restoreFromFile: KmsVaultRestoreFromFileOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference">KmsVaultRestoreFromFileOutputReference</a>

---

##### `restoreFromObjectStore`<sup>Required</sup> <a name="restoreFromObjectStore" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.restoreFromObjectStore"></a>

```typescript
public readonly restoreFromObjectStore: KmsVaultRestoreFromObjectStoreOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference">KmsVaultRestoreFromObjectStoreOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.timeouts"></a>

```typescript
public readonly timeouts: KmsVaultTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference">KmsVaultTimeoutsOutputReference</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `externalKeyManagerMetadataInput`<sup>Optional</sup> <a name="externalKeyManagerMetadataInput" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.externalKeyManagerMetadataInput"></a>

```typescript
public readonly externalKeyManagerMetadataInput: KmsVaultExternalKeyManagerMetadata;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadata">KmsVaultExternalKeyManagerMetadata</a>

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `restoreFromFileInput`<sup>Optional</sup> <a name="restoreFromFileInput" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.restoreFromFileInput"></a>

```typescript
public readonly restoreFromFileInput: KmsVaultRestoreFromFile;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFile">KmsVaultRestoreFromFile</a>

---

##### `restoreFromObjectStoreInput`<sup>Optional</sup> <a name="restoreFromObjectStoreInput" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.restoreFromObjectStoreInput"></a>

```typescript
public readonly restoreFromObjectStoreInput: KmsVaultRestoreFromObjectStore;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStore">KmsVaultRestoreFromObjectStore</a>

---

##### `restoreTriggerInput`<sup>Optional</sup> <a name="restoreTriggerInput" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.restoreTriggerInput"></a>

```typescript
public readonly restoreTriggerInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeOfDeletionInput`<sup>Optional</sup> <a name="timeOfDeletionInput" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.timeOfDeletionInput"></a>

```typescript
public readonly timeOfDeletionInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | KmsVaultTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeouts">KmsVaultTimeouts</a>

---

##### `vaultTypeInput`<sup>Optional</sup> <a name="vaultTypeInput" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.vaultTypeInput"></a>

```typescript
public readonly vaultTypeInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `restoreTrigger`<sup>Required</sup> <a name="restoreTrigger" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.restoreTrigger"></a>

```typescript
public readonly restoreTrigger: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeOfDeletion`<sup>Required</sup> <a name="timeOfDeletion" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.timeOfDeletion"></a>

```typescript
public readonly timeOfDeletion: string;
```

- *Type:* string

---

##### `vaultType`<sup>Required</sup> <a name="vaultType" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.vaultType"></a>

```typescript
public readonly vaultType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KmsVaultConfig <a name="KmsVaultConfig" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.Initializer"></a>

```typescript
import { kmsVault } from 'rhizo-co-terraform-provider-oci'

const kmsVaultConfig: kmsVault.KmsVaultConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#compartment_id KmsVault#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#display_name KmsVault#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.vaultType">vaultType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#vault_type KmsVault#vault_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#defined_tags KmsVault#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.externalKeyManagerMetadata">externalKeyManagerMetadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadata">KmsVaultExternalKeyManagerMetadata</a></code> | external_key_manager_metadata block. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#freeform_tags KmsVault#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#id KmsVault#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.restoreFromFile">restoreFromFile</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFile">KmsVaultRestoreFromFile</a></code> | restore_from_file block. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.restoreFromObjectStore">restoreFromObjectStore</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStore">KmsVaultRestoreFromObjectStore</a></code> | restore_from_object_store block. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.restoreTrigger">restoreTrigger</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#restore_trigger KmsVault#restore_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.timeOfDeletion">timeOfDeletion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#time_of_deletion KmsVault#time_of_deletion}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeouts">KmsVaultTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#compartment_id KmsVault#compartment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#display_name KmsVault#display_name}.

---

##### `vaultType`<sup>Required</sup> <a name="vaultType" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.vaultType"></a>

```typescript
public readonly vaultType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#vault_type KmsVault#vault_type}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#defined_tags KmsVault#defined_tags}.

---

##### `externalKeyManagerMetadata`<sup>Optional</sup> <a name="externalKeyManagerMetadata" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.externalKeyManagerMetadata"></a>

```typescript
public readonly externalKeyManagerMetadata: KmsVaultExternalKeyManagerMetadata;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadata">KmsVaultExternalKeyManagerMetadata</a>

external_key_manager_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#external_key_manager_metadata KmsVault#external_key_manager_metadata}

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#freeform_tags KmsVault#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#id KmsVault#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `restoreFromFile`<sup>Optional</sup> <a name="restoreFromFile" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.restoreFromFile"></a>

```typescript
public readonly restoreFromFile: KmsVaultRestoreFromFile;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFile">KmsVaultRestoreFromFile</a>

restore_from_file block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#restore_from_file KmsVault#restore_from_file}

---

##### `restoreFromObjectStore`<sup>Optional</sup> <a name="restoreFromObjectStore" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.restoreFromObjectStore"></a>

```typescript
public readonly restoreFromObjectStore: KmsVaultRestoreFromObjectStore;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStore">KmsVaultRestoreFromObjectStore</a>

restore_from_object_store block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#restore_from_object_store KmsVault#restore_from_object_store}

---

##### `restoreTrigger`<sup>Optional</sup> <a name="restoreTrigger" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.restoreTrigger"></a>

```typescript
public readonly restoreTrigger: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#restore_trigger KmsVault#restore_trigger}.

---

##### `timeOfDeletion`<sup>Optional</sup> <a name="timeOfDeletion" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.timeOfDeletion"></a>

```typescript
public readonly timeOfDeletion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#time_of_deletion KmsVault#time_of_deletion}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.timeouts"></a>

```typescript
public readonly timeouts: KmsVaultTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeouts">KmsVaultTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#timeouts KmsVault#timeouts}

---

### KmsVaultExternalKeyManagerMetadata <a name="KmsVaultExternalKeyManagerMetadata" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadata.Initializer"></a>

```typescript
import { kmsVault } from 'rhizo-co-terraform-provider-oci'

const kmsVaultExternalKeyManagerMetadata: kmsVault.KmsVaultExternalKeyManagerMetadata = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadata.property.externalVaultEndpointUrl">externalVaultEndpointUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#external_vault_endpoint_url KmsVault#external_vault_endpoint_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadata.property.oauthMetadata">oauthMetadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadata">KmsVaultExternalKeyManagerMetadataOauthMetadata</a></code> | oauth_metadata block. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadata.property.privateEndpointId">privateEndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#private_endpoint_id KmsVault#private_endpoint_id}. |

---

##### `externalVaultEndpointUrl`<sup>Required</sup> <a name="externalVaultEndpointUrl" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadata.property.externalVaultEndpointUrl"></a>

```typescript
public readonly externalVaultEndpointUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#external_vault_endpoint_url KmsVault#external_vault_endpoint_url}.

---

##### `oauthMetadata`<sup>Required</sup> <a name="oauthMetadata" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadata.property.oauthMetadata"></a>

```typescript
public readonly oauthMetadata: KmsVaultExternalKeyManagerMetadataOauthMetadata;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadata">KmsVaultExternalKeyManagerMetadataOauthMetadata</a>

oauth_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#oauth_metadata KmsVault#oauth_metadata}

---

##### `privateEndpointId`<sup>Required</sup> <a name="privateEndpointId" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadata.property.privateEndpointId"></a>

```typescript
public readonly privateEndpointId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#private_endpoint_id KmsVault#private_endpoint_id}.

---

### KmsVaultExternalKeyManagerMetadataOauthMetadata <a name="KmsVaultExternalKeyManagerMetadataOauthMetadata" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadata.Initializer"></a>

```typescript
import { kmsVault } from 'rhizo-co-terraform-provider-oci'

const kmsVaultExternalKeyManagerMetadataOauthMetadata: kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadata = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadata.property.clientAppId">clientAppId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#client_app_id KmsVault#client_app_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadata.property.clientAppSecret">clientAppSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#client_app_secret KmsVault#client_app_secret}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadata.property.idcsAccountNameUrl">idcsAccountNameUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#idcs_account_name_url KmsVault#idcs_account_name_url}. |

---

##### `clientAppId`<sup>Required</sup> <a name="clientAppId" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadata.property.clientAppId"></a>

```typescript
public readonly clientAppId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#client_app_id KmsVault#client_app_id}.

---

##### `clientAppSecret`<sup>Required</sup> <a name="clientAppSecret" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadata.property.clientAppSecret"></a>

```typescript
public readonly clientAppSecret: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#client_app_secret KmsVault#client_app_secret}.

---

##### `idcsAccountNameUrl`<sup>Required</sup> <a name="idcsAccountNameUrl" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadata.property.idcsAccountNameUrl"></a>

```typescript
public readonly idcsAccountNameUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#idcs_account_name_url KmsVault#idcs_account_name_url}.

---

### KmsVaultExternalKeyManagerMetadataSummary <a name="KmsVaultExternalKeyManagerMetadataSummary" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummary"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummary.Initializer"></a>

```typescript
import { kmsVault } from 'rhizo-co-terraform-provider-oci'

const kmsVaultExternalKeyManagerMetadataSummary: kmsVault.KmsVaultExternalKeyManagerMetadataSummary = { ... }
```


### KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummary <a name="KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummary" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummary"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummary.Initializer"></a>

```typescript
import { kmsVault } from 'rhizo-co-terraform-provider-oci'

const kmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummary: kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummary = { ... }
```


### KmsVaultReplicaDetails <a name="KmsVaultReplicaDetails" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetails.Initializer"></a>

```typescript
import { kmsVault } from 'rhizo-co-terraform-provider-oci'

const kmsVaultReplicaDetails: kmsVault.KmsVaultReplicaDetails = { ... }
```


### KmsVaultRestoreFromFile <a name="KmsVaultRestoreFromFile" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFile"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFile.Initializer"></a>

```typescript
import { kmsVault } from 'rhizo-co-terraform-provider-oci'

const kmsVaultRestoreFromFile: kmsVault.KmsVaultRestoreFromFile = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFile.property.contentLength">contentLength</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#content_length KmsVault#content_length}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFile.property.restoreVaultFromFileDetails">restoreVaultFromFileDetails</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#restore_vault_from_file_details KmsVault#restore_vault_from_file_details}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFile.property.contentMd5">contentMd5</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#content_md5 KmsVault#content_md5}. |

---

##### `contentLength`<sup>Required</sup> <a name="contentLength" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFile.property.contentLength"></a>

```typescript
public readonly contentLength: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#content_length KmsVault#content_length}.

---

##### `restoreVaultFromFileDetails`<sup>Required</sup> <a name="restoreVaultFromFileDetails" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFile.property.restoreVaultFromFileDetails"></a>

```typescript
public readonly restoreVaultFromFileDetails: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#restore_vault_from_file_details KmsVault#restore_vault_from_file_details}.

---

##### `contentMd5`<sup>Optional</sup> <a name="contentMd5" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFile.property.contentMd5"></a>

```typescript
public readonly contentMd5: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#content_md5 KmsVault#content_md5}.

---

### KmsVaultRestoreFromObjectStore <a name="KmsVaultRestoreFromObjectStore" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStore"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStore.Initializer"></a>

```typescript
import { kmsVault } from 'rhizo-co-terraform-provider-oci'

const kmsVaultRestoreFromObjectStore: kmsVault.KmsVaultRestoreFromObjectStore = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStore.property.destination">destination</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#destination KmsVault#destination}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStore.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#bucket KmsVault#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStore.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#namespace KmsVault#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStore.property.object">object</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#object KmsVault#object}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStore.property.uri">uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#uri KmsVault#uri}. |

---

##### `destination`<sup>Required</sup> <a name="destination" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStore.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#destination KmsVault#destination}.

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStore.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#bucket KmsVault#bucket}.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStore.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#namespace KmsVault#namespace}.

---

##### `object`<sup>Optional</sup> <a name="object" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStore.property.object"></a>

```typescript
public readonly object: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#object KmsVault#object}.

---

##### `uri`<sup>Optional</sup> <a name="uri" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStore.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#uri KmsVault#uri}.

---

### KmsVaultTimeouts <a name="KmsVaultTimeouts" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeouts.Initializer"></a>

```typescript
import { kmsVault } from 'rhizo-co-terraform-provider-oci'

const kmsVaultTimeouts: kmsVault.KmsVaultTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#create KmsVault#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#delete KmsVault#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#update KmsVault#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#create KmsVault#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#delete KmsVault#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#update KmsVault#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference <a name="KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.Initializer"></a>

```typescript
import { kmsVault } from 'rhizo-co-terraform-provider-oci'

new kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.property.clientAppIdInput">clientAppIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.property.clientAppSecretInput">clientAppSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.property.idcsAccountNameUrlInput">idcsAccountNameUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.property.clientAppId">clientAppId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.property.clientAppSecret">clientAppSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.property.idcsAccountNameUrl">idcsAccountNameUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadata">KmsVaultExternalKeyManagerMetadataOauthMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientAppIdInput`<sup>Optional</sup> <a name="clientAppIdInput" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.property.clientAppIdInput"></a>

```typescript
public readonly clientAppIdInput: string;
```

- *Type:* string

---

##### `clientAppSecretInput`<sup>Optional</sup> <a name="clientAppSecretInput" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.property.clientAppSecretInput"></a>

```typescript
public readonly clientAppSecretInput: string;
```

- *Type:* string

---

##### `idcsAccountNameUrlInput`<sup>Optional</sup> <a name="idcsAccountNameUrlInput" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.property.idcsAccountNameUrlInput"></a>

```typescript
public readonly idcsAccountNameUrlInput: string;
```

- *Type:* string

---

##### `clientAppId`<sup>Required</sup> <a name="clientAppId" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.property.clientAppId"></a>

```typescript
public readonly clientAppId: string;
```

- *Type:* string

---

##### `clientAppSecret`<sup>Required</sup> <a name="clientAppSecret" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.property.clientAppSecret"></a>

```typescript
public readonly clientAppSecret: string;
```

- *Type:* string

---

##### `idcsAccountNameUrl`<sup>Required</sup> <a name="idcsAccountNameUrl" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.property.idcsAccountNameUrl"></a>

```typescript
public readonly idcsAccountNameUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KmsVaultExternalKeyManagerMetadataOauthMetadata;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadata">KmsVaultExternalKeyManagerMetadataOauthMetadata</a>

---


### KmsVaultExternalKeyManagerMetadataOutputReference <a name="KmsVaultExternalKeyManagerMetadataOutputReference" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.Initializer"></a>

```typescript
import { kmsVault } from 'rhizo-co-terraform-provider-oci'

new kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.putOauthMetadata">putOauthMetadata</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOauthMetadata` <a name="putOauthMetadata" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.putOauthMetadata"></a>

```typescript
public putOauthMetadata(value: KmsVaultExternalKeyManagerMetadataOauthMetadata): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.putOauthMetadata.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadata">KmsVaultExternalKeyManagerMetadataOauthMetadata</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.property.oauthMetadata">oauthMetadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference">KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.property.externalVaultEndpointUrlInput">externalVaultEndpointUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.property.oauthMetadataInput">oauthMetadataInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadata">KmsVaultExternalKeyManagerMetadataOauthMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.property.privateEndpointIdInput">privateEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.property.externalVaultEndpointUrl">externalVaultEndpointUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.property.privateEndpointId">privateEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadata">KmsVaultExternalKeyManagerMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `oauthMetadata`<sup>Required</sup> <a name="oauthMetadata" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.property.oauthMetadata"></a>

```typescript
public readonly oauthMetadata: KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference">KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference</a>

---

##### `externalVaultEndpointUrlInput`<sup>Optional</sup> <a name="externalVaultEndpointUrlInput" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.property.externalVaultEndpointUrlInput"></a>

```typescript
public readonly externalVaultEndpointUrlInput: string;
```

- *Type:* string

---

##### `oauthMetadataInput`<sup>Optional</sup> <a name="oauthMetadataInput" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.property.oauthMetadataInput"></a>

```typescript
public readonly oauthMetadataInput: KmsVaultExternalKeyManagerMetadataOauthMetadata;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadata">KmsVaultExternalKeyManagerMetadataOauthMetadata</a>

---

##### `privateEndpointIdInput`<sup>Optional</sup> <a name="privateEndpointIdInput" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.property.privateEndpointIdInput"></a>

```typescript
public readonly privateEndpointIdInput: string;
```

- *Type:* string

---

##### `externalVaultEndpointUrl`<sup>Required</sup> <a name="externalVaultEndpointUrl" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.property.externalVaultEndpointUrl"></a>

```typescript
public readonly externalVaultEndpointUrl: string;
```

- *Type:* string

---

##### `privateEndpointId`<sup>Required</sup> <a name="privateEndpointId" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.property.privateEndpointId"></a>

```typescript
public readonly privateEndpointId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KmsVaultExternalKeyManagerMetadata;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadata">KmsVaultExternalKeyManagerMetadata</a>

---


### KmsVaultExternalKeyManagerMetadataSummaryList <a name="KmsVaultExternalKeyManagerMetadataSummaryList" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryList.Initializer"></a>

```typescript
import { kmsVault } from 'rhizo-co-terraform-provider-oci'

new kmsVault.KmsVaultExternalKeyManagerMetadataSummaryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryList.get"></a>

```typescript
public get(index: number): KmsVaultExternalKeyManagerMetadataSummaryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList <a name="KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList.Initializer"></a>

```typescript
import { kmsVault } from 'rhizo-co-terraform-provider-oci'

new kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList.get"></a>

```typescript
public get(index: number): KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference <a name="KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.Initializer"></a>

```typescript
import { kmsVault } from 'rhizo-co-terraform-provider-oci'

new kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.property.clientAppId">clientAppId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.property.idcsAccountNameUrl">idcsAccountNameUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummary">KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummary</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientAppId`<sup>Required</sup> <a name="clientAppId" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.property.clientAppId"></a>

```typescript
public readonly clientAppId: string;
```

- *Type:* string

---

##### `idcsAccountNameUrl`<sup>Required</sup> <a name="idcsAccountNameUrl" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.property.idcsAccountNameUrl"></a>

```typescript
public readonly idcsAccountNameUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummary;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummary">KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummary</a>

---


### KmsVaultExternalKeyManagerMetadataSummaryOutputReference <a name="KmsVaultExternalKeyManagerMetadataSummaryOutputReference" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.Initializer"></a>

```typescript
import { kmsVault } from 'rhizo-co-terraform-provider-oci'

new kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.property.externalVaultEndpointUrl">externalVaultEndpointUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.property.oauthMetadataSummary">oauthMetadataSummary</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList">KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.property.privateEndpointId">privateEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.property.vendor">vendor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummary">KmsVaultExternalKeyManagerMetadataSummary</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `externalVaultEndpointUrl`<sup>Required</sup> <a name="externalVaultEndpointUrl" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.property.externalVaultEndpointUrl"></a>

```typescript
public readonly externalVaultEndpointUrl: string;
```

- *Type:* string

---

##### `oauthMetadataSummary`<sup>Required</sup> <a name="oauthMetadataSummary" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.property.oauthMetadataSummary"></a>

```typescript
public readonly oauthMetadataSummary: KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList">KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList</a>

---

##### `privateEndpointId`<sup>Required</sup> <a name="privateEndpointId" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.property.privateEndpointId"></a>

```typescript
public readonly privateEndpointId: string;
```

- *Type:* string

---

##### `vendor`<sup>Required</sup> <a name="vendor" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.property.vendor"></a>

```typescript
public readonly vendor: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KmsVaultExternalKeyManagerMetadataSummary;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummary">KmsVaultExternalKeyManagerMetadataSummary</a>

---


### KmsVaultReplicaDetailsList <a name="KmsVaultReplicaDetailsList" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsList.Initializer"></a>

```typescript
import { kmsVault } from 'rhizo-co-terraform-provider-oci'

new kmsVault.KmsVaultReplicaDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsList.get"></a>

```typescript
public get(index: number): KmsVaultReplicaDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### KmsVaultReplicaDetailsOutputReference <a name="KmsVaultReplicaDetailsOutputReference" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.Initializer"></a>

```typescript
import { kmsVault } from 'rhizo-co-terraform-provider-oci'

new kmsVault.KmsVaultReplicaDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.property.replicationId">replicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetails">KmsVaultReplicaDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `replicationId`<sup>Required</sup> <a name="replicationId" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.property.replicationId"></a>

```typescript
public readonly replicationId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KmsVaultReplicaDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetails">KmsVaultReplicaDetails</a>

---


### KmsVaultRestoreFromFileOutputReference <a name="KmsVaultRestoreFromFileOutputReference" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.Initializer"></a>

```typescript
import { kmsVault } from 'rhizo-co-terraform-provider-oci'

new kmsVault.KmsVaultRestoreFromFileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.resetContentMd5">resetContentMd5</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContentMd5` <a name="resetContentMd5" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.resetContentMd5"></a>

```typescript
public resetContentMd5(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.property.contentLengthInput">contentLengthInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.property.contentMd5Input">contentMd5Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.property.restoreVaultFromFileDetailsInput">restoreVaultFromFileDetailsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.property.contentLength">contentLength</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.property.contentMd5">contentMd5</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.property.restoreVaultFromFileDetails">restoreVaultFromFileDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFile">KmsVaultRestoreFromFile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentLengthInput`<sup>Optional</sup> <a name="contentLengthInput" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.property.contentLengthInput"></a>

```typescript
public readonly contentLengthInput: string;
```

- *Type:* string

---

##### `contentMd5Input`<sup>Optional</sup> <a name="contentMd5Input" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.property.contentMd5Input"></a>

```typescript
public readonly contentMd5Input: string;
```

- *Type:* string

---

##### `restoreVaultFromFileDetailsInput`<sup>Optional</sup> <a name="restoreVaultFromFileDetailsInput" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.property.restoreVaultFromFileDetailsInput"></a>

```typescript
public readonly restoreVaultFromFileDetailsInput: string;
```

- *Type:* string

---

##### `contentLength`<sup>Required</sup> <a name="contentLength" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.property.contentLength"></a>

```typescript
public readonly contentLength: string;
```

- *Type:* string

---

##### `contentMd5`<sup>Required</sup> <a name="contentMd5" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.property.contentMd5"></a>

```typescript
public readonly contentMd5: string;
```

- *Type:* string

---

##### `restoreVaultFromFileDetails`<sup>Required</sup> <a name="restoreVaultFromFileDetails" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.property.restoreVaultFromFileDetails"></a>

```typescript
public readonly restoreVaultFromFileDetails: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KmsVaultRestoreFromFile;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFile">KmsVaultRestoreFromFile</a>

---


### KmsVaultRestoreFromObjectStoreOutputReference <a name="KmsVaultRestoreFromObjectStoreOutputReference" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.Initializer"></a>

```typescript
import { kmsVault } from 'rhizo-co-terraform-provider-oci'

new kmsVault.KmsVaultRestoreFromObjectStoreOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.resetObject">resetObject</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.resetUri">resetUri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.resetBucket"></a>

```typescript
public resetBucket(): void
```

##### `resetNamespace` <a name="resetNamespace" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetObject` <a name="resetObject" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.resetObject"></a>

```typescript
public resetObject(): void
```

##### `resetUri` <a name="resetUri" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.resetUri"></a>

```typescript
public resetUri(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.property.destinationInput">destinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.property.objectInput">objectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.property.uriInput">uriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.property.destination">destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.property.object">object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStore">KmsVaultRestoreFromObjectStore</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.property.destinationInput"></a>

```typescript
public readonly destinationInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `objectInput`<sup>Optional</sup> <a name="objectInput" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.property.objectInput"></a>

```typescript
public readonly objectInput: string;
```

- *Type:* string

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.property.uriInput"></a>

```typescript
public readonly uriInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `destination`<sup>Required</sup> <a name="destination" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.property.object"></a>

```typescript
public readonly object: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KmsVaultRestoreFromObjectStore;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStore">KmsVaultRestoreFromObjectStore</a>

---


### KmsVaultTimeoutsOutputReference <a name="KmsVaultTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.Initializer"></a>

```typescript
import { kmsVault } from 'rhizo-co-terraform-provider-oci'

new kmsVault.KmsVaultTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeouts">KmsVaultTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KmsVaultTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeouts">KmsVaultTimeouts</a>

---



