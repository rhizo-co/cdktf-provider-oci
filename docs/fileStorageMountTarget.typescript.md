# `fileStorageMountTarget` Submodule <a name="`fileStorageMountTarget` Submodule" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FileStorageMountTarget <a name="FileStorageMountTarget" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target oci_file_storage_mount_target}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer"></a>

```typescript
import { fileStorageMountTarget } from 'rhizo-co-terraform-provider-oci'

new fileStorageMountTarget.FileStorageMountTarget(scope: Construct, id: string, config: FileStorageMountTargetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig">FileStorageMountTargetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig">FileStorageMountTargetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.putKerberos">putKerberos</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.putLdapIdmap">putLdapIdmap</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.putLocks">putLocks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetHostnameLabel">resetHostnameLabel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetIdmapType">resetIdmapType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetIpAddress">resetIpAddress</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetIsLockOverride">resetIsLockOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetKerberos">resetKerberos</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetLdapIdmap">resetLdapIdmap</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetLocks">resetLocks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetNsgIds">resetNsgIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetRequestedThroughput">resetRequestedThroughput</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putKerberos` <a name="putKerberos" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.putKerberos"></a>

```typescript
public putKerberos(value: FileStorageMountTargetKerberos): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.putKerberos.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos">FileStorageMountTargetKerberos</a>

---

##### `putLdapIdmap` <a name="putLdapIdmap" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.putLdapIdmap"></a>

```typescript
public putLdapIdmap(value: FileStorageMountTargetLdapIdmap): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.putLdapIdmap.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap">FileStorageMountTargetLdapIdmap</a>

---

##### `putLocks` <a name="putLocks" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.putLocks"></a>

```typescript
public putLocks(value: IResolvable | FileStorageMountTargetLocks[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.putLocks.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocks">FileStorageMountTargetLocks</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.putTimeouts"></a>

```typescript
public putTimeouts(value: FileStorageMountTargetTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeouts">FileStorageMountTargetTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetHostnameLabel` <a name="resetHostnameLabel" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetHostnameLabel"></a>

```typescript
public resetHostnameLabel(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdmapType` <a name="resetIdmapType" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetIdmapType"></a>

```typescript
public resetIdmapType(): void
```

##### `resetIpAddress` <a name="resetIpAddress" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetIpAddress"></a>

```typescript
public resetIpAddress(): void
```

##### `resetIsLockOverride` <a name="resetIsLockOverride" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetIsLockOverride"></a>

```typescript
public resetIsLockOverride(): void
```

##### `resetKerberos` <a name="resetKerberos" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetKerberos"></a>

```typescript
public resetKerberos(): void
```

##### `resetLdapIdmap` <a name="resetLdapIdmap" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetLdapIdmap"></a>

```typescript
public resetLdapIdmap(): void
```

##### `resetLocks` <a name="resetLocks" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetLocks"></a>

```typescript
public resetLocks(): void
```

##### `resetNsgIds` <a name="resetNsgIds" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetNsgIds"></a>

```typescript
public resetNsgIds(): void
```

##### `resetRequestedThroughput` <a name="resetRequestedThroughput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetRequestedThroughput"></a>

```typescript
public resetRequestedThroughput(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a FileStorageMountTarget resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.isConstruct"></a>

```typescript
import { fileStorageMountTarget } from 'rhizo-co-terraform-provider-oci'

fileStorageMountTarget.FileStorageMountTarget.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.isTerraformElement"></a>

```typescript
import { fileStorageMountTarget } from 'rhizo-co-terraform-provider-oci'

fileStorageMountTarget.FileStorageMountTarget.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.isTerraformResource"></a>

```typescript
import { fileStorageMountTarget } from 'rhizo-co-terraform-provider-oci'

fileStorageMountTarget.FileStorageMountTarget.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.generateConfigForImport"></a>

```typescript
import { fileStorageMountTarget } from 'rhizo-co-terraform-provider-oci'

fileStorageMountTarget.FileStorageMountTarget.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a FileStorageMountTarget resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FileStorageMountTarget to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FileStorageMountTarget that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the FileStorageMountTarget to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.exportSetId">exportSetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.kerberos">kerberos</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference">FileStorageMountTargetKerberosOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.ldapIdmap">ldapIdmap</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference">FileStorageMountTargetLdapIdmapOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.locks">locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList">FileStorageMountTargetLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.observedThroughput">observedThroughput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.privateIpIds">privateIpIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.reservedStorageCapacity">reservedStorageCapacity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.timeBillingCycleEnd">timeBillingCycleEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference">FileStorageMountTargetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.availabilityDomainInput">availabilityDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.hostnameLabelInput">hostnameLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.idmapTypeInput">idmapTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.ipAddressInput">ipAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.isLockOverrideInput">isLockOverrideInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.kerberosInput">kerberosInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos">FileStorageMountTargetKerberos</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.ldapIdmapInput">ldapIdmapInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap">FileStorageMountTargetLdapIdmap</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.locksInput">locksInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocks">FileStorageMountTargetLocks</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.nsgIdsInput">nsgIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.requestedThroughputInput">requestedThroughputInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeouts">FileStorageMountTargetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.hostnameLabel">hostnameLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.idmapType">idmapType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.isLockOverride">isLockOverride</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.nsgIds">nsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.requestedThroughput">requestedThroughput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `exportSetId`<sup>Required</sup> <a name="exportSetId" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.exportSetId"></a>

```typescript
public readonly exportSetId: string;
```

- *Type:* string

---

##### `kerberos`<sup>Required</sup> <a name="kerberos" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.kerberos"></a>

```typescript
public readonly kerberos: FileStorageMountTargetKerberosOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference">FileStorageMountTargetKerberosOutputReference</a>

---

##### `ldapIdmap`<sup>Required</sup> <a name="ldapIdmap" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.ldapIdmap"></a>

```typescript
public readonly ldapIdmap: FileStorageMountTargetLdapIdmapOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference">FileStorageMountTargetLdapIdmapOutputReference</a>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `locks`<sup>Required</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.locks"></a>

```typescript
public readonly locks: FileStorageMountTargetLocksList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList">FileStorageMountTargetLocksList</a>

---

##### `observedThroughput`<sup>Required</sup> <a name="observedThroughput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.observedThroughput"></a>

```typescript
public readonly observedThroughput: string;
```

- *Type:* string

---

##### `privateIpIds`<sup>Required</sup> <a name="privateIpIds" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.privateIpIds"></a>

```typescript
public readonly privateIpIds: string[];
```

- *Type:* string[]

---

##### `reservedStorageCapacity`<sup>Required</sup> <a name="reservedStorageCapacity" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.reservedStorageCapacity"></a>

```typescript
public readonly reservedStorageCapacity: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeBillingCycleEnd`<sup>Required</sup> <a name="timeBillingCycleEnd" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.timeBillingCycleEnd"></a>

```typescript
public readonly timeBillingCycleEnd: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.timeouts"></a>

```typescript
public readonly timeouts: FileStorageMountTargetTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference">FileStorageMountTargetTimeoutsOutputReference</a>

---

##### `availabilityDomainInput`<sup>Optional</sup> <a name="availabilityDomainInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.availabilityDomainInput"></a>

```typescript
public readonly availabilityDomainInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `hostnameLabelInput`<sup>Optional</sup> <a name="hostnameLabelInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.hostnameLabelInput"></a>

```typescript
public readonly hostnameLabelInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `idmapTypeInput`<sup>Optional</sup> <a name="idmapTypeInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.idmapTypeInput"></a>

```typescript
public readonly idmapTypeInput: string;
```

- *Type:* string

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.ipAddressInput"></a>

```typescript
public readonly ipAddressInput: string;
```

- *Type:* string

---

##### `isLockOverrideInput`<sup>Optional</sup> <a name="isLockOverrideInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.isLockOverrideInput"></a>

```typescript
public readonly isLockOverrideInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `kerberosInput`<sup>Optional</sup> <a name="kerberosInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.kerberosInput"></a>

```typescript
public readonly kerberosInput: FileStorageMountTargetKerberos;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos">FileStorageMountTargetKerberos</a>

---

##### `ldapIdmapInput`<sup>Optional</sup> <a name="ldapIdmapInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.ldapIdmapInput"></a>

```typescript
public readonly ldapIdmapInput: FileStorageMountTargetLdapIdmap;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap">FileStorageMountTargetLdapIdmap</a>

---

##### `locksInput`<sup>Optional</sup> <a name="locksInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.locksInput"></a>

```typescript
public readonly locksInput: IResolvable | FileStorageMountTargetLocks[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocks">FileStorageMountTargetLocks</a>[]

---

##### `nsgIdsInput`<sup>Optional</sup> <a name="nsgIdsInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.nsgIdsInput"></a>

```typescript
public readonly nsgIdsInput: string[];
```

- *Type:* string[]

---

##### `requestedThroughputInput`<sup>Optional</sup> <a name="requestedThroughputInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.requestedThroughputInput"></a>

```typescript
public readonly requestedThroughputInput: string;
```

- *Type:* string

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | FileStorageMountTargetTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeouts">FileStorageMountTargetTimeouts</a>

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `hostnameLabel`<sup>Required</sup> <a name="hostnameLabel" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.hostnameLabel"></a>

```typescript
public readonly hostnameLabel: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idmapType`<sup>Required</sup> <a name="idmapType" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.idmapType"></a>

```typescript
public readonly idmapType: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `isLockOverride`<sup>Required</sup> <a name="isLockOverride" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.isLockOverride"></a>

```typescript
public readonly isLockOverride: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.nsgIds"></a>

```typescript
public readonly nsgIds: string[];
```

- *Type:* string[]

---

##### `requestedThroughput`<sup>Required</sup> <a name="requestedThroughput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.requestedThroughput"></a>

```typescript
public readonly requestedThroughput: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FileStorageMountTargetConfig <a name="FileStorageMountTargetConfig" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.Initializer"></a>

```typescript
import { fileStorageMountTarget } from 'rhizo-co-terraform-provider-oci'

const fileStorageMountTargetConfig: fileStorageMountTarget.FileStorageMountTargetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#availability_domain FileStorageMountTarget#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#compartment_id FileStorageMountTarget#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#subnet_id FileStorageMountTarget#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#defined_tags FileStorageMountTarget#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#display_name FileStorageMountTarget#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#freeform_tags FileStorageMountTarget#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.hostnameLabel">hostnameLabel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#hostname_label FileStorageMountTarget#hostname_label}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#id FileStorageMountTarget#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.idmapType">idmapType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#idmap_type FileStorageMountTarget#idmap_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.ipAddress">ipAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#ip_address FileStorageMountTarget#ip_address}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.isLockOverride">isLockOverride</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#is_lock_override FileStorageMountTarget#is_lock_override}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.kerberos">kerberos</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos">FileStorageMountTargetKerberos</a></code> | kerberos block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.ldapIdmap">ldapIdmap</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap">FileStorageMountTargetLdapIdmap</a></code> | ldap_idmap block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.locks">locks</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocks">FileStorageMountTargetLocks</a>[]</code> | locks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.nsgIds">nsgIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#nsg_ids FileStorageMountTarget#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.requestedThroughput">requestedThroughput</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#requested_throughput FileStorageMountTarget#requested_throughput}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeouts">FileStorageMountTargetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#availability_domain FileStorageMountTarget#availability_domain}.

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#compartment_id FileStorageMountTarget#compartment_id}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#subnet_id FileStorageMountTarget#subnet_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#defined_tags FileStorageMountTarget#defined_tags}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#display_name FileStorageMountTarget#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#freeform_tags FileStorageMountTarget#freeform_tags}.

---

##### `hostnameLabel`<sup>Optional</sup> <a name="hostnameLabel" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.hostnameLabel"></a>

```typescript
public readonly hostnameLabel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#hostname_label FileStorageMountTarget#hostname_label}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#id FileStorageMountTarget#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idmapType`<sup>Optional</sup> <a name="idmapType" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.idmapType"></a>

```typescript
public readonly idmapType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#idmap_type FileStorageMountTarget#idmap_type}.

---

##### `ipAddress`<sup>Optional</sup> <a name="ipAddress" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#ip_address FileStorageMountTarget#ip_address}.

---

##### `isLockOverride`<sup>Optional</sup> <a name="isLockOverride" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.isLockOverride"></a>

```typescript
public readonly isLockOverride: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#is_lock_override FileStorageMountTarget#is_lock_override}.

---

##### `kerberos`<sup>Optional</sup> <a name="kerberos" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.kerberos"></a>

```typescript
public readonly kerberos: FileStorageMountTargetKerberos;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos">FileStorageMountTargetKerberos</a>

kerberos block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#kerberos FileStorageMountTarget#kerberos}

---

##### `ldapIdmap`<sup>Optional</sup> <a name="ldapIdmap" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.ldapIdmap"></a>

```typescript
public readonly ldapIdmap: FileStorageMountTargetLdapIdmap;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap">FileStorageMountTargetLdapIdmap</a>

ldap_idmap block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#ldap_idmap FileStorageMountTarget#ldap_idmap}

---

##### `locks`<sup>Optional</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.locks"></a>

```typescript
public readonly locks: IResolvable | FileStorageMountTargetLocks[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocks">FileStorageMountTargetLocks</a>[]

locks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#locks FileStorageMountTarget#locks}

---

##### `nsgIds`<sup>Optional</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.nsgIds"></a>

```typescript
public readonly nsgIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#nsg_ids FileStorageMountTarget#nsg_ids}.

---

##### `requestedThroughput`<sup>Optional</sup> <a name="requestedThroughput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.requestedThroughput"></a>

```typescript
public readonly requestedThroughput: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#requested_throughput FileStorageMountTarget#requested_throughput}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.timeouts"></a>

```typescript
public readonly timeouts: FileStorageMountTargetTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeouts">FileStorageMountTargetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#timeouts FileStorageMountTarget#timeouts}

---

### FileStorageMountTargetKerberos <a name="FileStorageMountTargetKerberos" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos.Initializer"></a>

```typescript
import { fileStorageMountTarget } from 'rhizo-co-terraform-provider-oci'

const fileStorageMountTargetKerberos: fileStorageMountTarget.FileStorageMountTargetKerberos = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos.property.kerberosRealm">kerberosRealm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#kerberos_realm FileStorageMountTarget#kerberos_realm}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos.property.backupKeyTabSecretVersion">backupKeyTabSecretVersion</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#backup_key_tab_secret_version FileStorageMountTarget#backup_key_tab_secret_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos.property.currentKeyTabSecretVersion">currentKeyTabSecretVersion</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#current_key_tab_secret_version FileStorageMountTarget#current_key_tab_secret_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos.property.isKerberosEnabled">isKerberosEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#is_kerberos_enabled FileStorageMountTarget#is_kerberos_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos.property.keyTabSecretId">keyTabSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#key_tab_secret_id FileStorageMountTarget#key_tab_secret_id}. |

---

##### `kerberosRealm`<sup>Required</sup> <a name="kerberosRealm" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos.property.kerberosRealm"></a>

```typescript
public readonly kerberosRealm: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#kerberos_realm FileStorageMountTarget#kerberos_realm}.

---

##### `backupKeyTabSecretVersion`<sup>Optional</sup> <a name="backupKeyTabSecretVersion" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos.property.backupKeyTabSecretVersion"></a>

```typescript
public readonly backupKeyTabSecretVersion: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#backup_key_tab_secret_version FileStorageMountTarget#backup_key_tab_secret_version}.

---

##### `currentKeyTabSecretVersion`<sup>Optional</sup> <a name="currentKeyTabSecretVersion" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos.property.currentKeyTabSecretVersion"></a>

```typescript
public readonly currentKeyTabSecretVersion: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#current_key_tab_secret_version FileStorageMountTarget#current_key_tab_secret_version}.

---

##### `isKerberosEnabled`<sup>Optional</sup> <a name="isKerberosEnabled" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos.property.isKerberosEnabled"></a>

```typescript
public readonly isKerberosEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#is_kerberos_enabled FileStorageMountTarget#is_kerberos_enabled}.

---

##### `keyTabSecretId`<sup>Optional</sup> <a name="keyTabSecretId" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos.property.keyTabSecretId"></a>

```typescript
public readonly keyTabSecretId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#key_tab_secret_id FileStorageMountTarget#key_tab_secret_id}.

---

### FileStorageMountTargetLdapIdmap <a name="FileStorageMountTargetLdapIdmap" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap.Initializer"></a>

```typescript
import { fileStorageMountTarget } from 'rhizo-co-terraform-provider-oci'

const fileStorageMountTargetLdapIdmap: fileStorageMountTarget.FileStorageMountTargetLdapIdmap = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap.property.cacheLifetimeSeconds">cacheLifetimeSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#cache_lifetime_seconds FileStorageMountTarget#cache_lifetime_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap.property.cacheRefreshIntervalSeconds">cacheRefreshIntervalSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#cache_refresh_interval_seconds FileStorageMountTarget#cache_refresh_interval_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap.property.groupSearchBase">groupSearchBase</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#group_search_base FileStorageMountTarget#group_search_base}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap.property.negativeCacheLifetimeSeconds">negativeCacheLifetimeSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#negative_cache_lifetime_seconds FileStorageMountTarget#negative_cache_lifetime_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap.property.outboundConnector1Id">outboundConnector1Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#outbound_connector1id FileStorageMountTarget#outbound_connector1id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap.property.outboundConnector2Id">outboundConnector2Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#outbound_connector2id FileStorageMountTarget#outbound_connector2id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap.property.schemaType">schemaType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#schema_type FileStorageMountTarget#schema_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap.property.userSearchBase">userSearchBase</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#user_search_base FileStorageMountTarget#user_search_base}. |

---

##### `cacheLifetimeSeconds`<sup>Optional</sup> <a name="cacheLifetimeSeconds" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap.property.cacheLifetimeSeconds"></a>

```typescript
public readonly cacheLifetimeSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#cache_lifetime_seconds FileStorageMountTarget#cache_lifetime_seconds}.

---

##### `cacheRefreshIntervalSeconds`<sup>Optional</sup> <a name="cacheRefreshIntervalSeconds" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap.property.cacheRefreshIntervalSeconds"></a>

```typescript
public readonly cacheRefreshIntervalSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#cache_refresh_interval_seconds FileStorageMountTarget#cache_refresh_interval_seconds}.

---

##### `groupSearchBase`<sup>Optional</sup> <a name="groupSearchBase" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap.property.groupSearchBase"></a>

```typescript
public readonly groupSearchBase: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#group_search_base FileStorageMountTarget#group_search_base}.

---

##### `negativeCacheLifetimeSeconds`<sup>Optional</sup> <a name="negativeCacheLifetimeSeconds" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap.property.negativeCacheLifetimeSeconds"></a>

```typescript
public readonly negativeCacheLifetimeSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#negative_cache_lifetime_seconds FileStorageMountTarget#negative_cache_lifetime_seconds}.

---

##### `outboundConnector1Id`<sup>Optional</sup> <a name="outboundConnector1Id" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap.property.outboundConnector1Id"></a>

```typescript
public readonly outboundConnector1Id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#outbound_connector1id FileStorageMountTarget#outbound_connector1id}.

---

##### `outboundConnector2Id`<sup>Optional</sup> <a name="outboundConnector2Id" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap.property.outboundConnector2Id"></a>

```typescript
public readonly outboundConnector2Id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#outbound_connector2id FileStorageMountTarget#outbound_connector2id}.

---

##### `schemaType`<sup>Optional</sup> <a name="schemaType" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap.property.schemaType"></a>

```typescript
public readonly schemaType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#schema_type FileStorageMountTarget#schema_type}.

---

##### `userSearchBase`<sup>Optional</sup> <a name="userSearchBase" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap.property.userSearchBase"></a>

```typescript
public readonly userSearchBase: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#user_search_base FileStorageMountTarget#user_search_base}.

---

### FileStorageMountTargetLocks <a name="FileStorageMountTargetLocks" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocks.Initializer"></a>

```typescript
import { fileStorageMountTarget } from 'rhizo-co-terraform-provider-oci'

const fileStorageMountTargetLocks: fileStorageMountTarget.FileStorageMountTargetLocks = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocks.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#type FileStorageMountTarget#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocks.property.message">message</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#message FileStorageMountTarget#message}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocks.property.relatedResourceId">relatedResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#related_resource_id FileStorageMountTarget#related_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocks.property.timeCreated">timeCreated</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#time_created FileStorageMountTarget#time_created}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocks.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#type FileStorageMountTarget#type}.

---

##### `message`<sup>Optional</sup> <a name="message" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocks.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#message FileStorageMountTarget#message}.

---

##### `relatedResourceId`<sup>Optional</sup> <a name="relatedResourceId" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocks.property.relatedResourceId"></a>

```typescript
public readonly relatedResourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#related_resource_id FileStorageMountTarget#related_resource_id}.

---

##### `timeCreated`<sup>Optional</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocks.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#time_created FileStorageMountTarget#time_created}.

---

### FileStorageMountTargetTimeouts <a name="FileStorageMountTargetTimeouts" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeouts.Initializer"></a>

```typescript
import { fileStorageMountTarget } from 'rhizo-co-terraform-provider-oci'

const fileStorageMountTargetTimeouts: fileStorageMountTarget.FileStorageMountTargetTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#create FileStorageMountTarget#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#delete FileStorageMountTarget#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#update FileStorageMountTarget#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#create FileStorageMountTarget#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#delete FileStorageMountTarget#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#update FileStorageMountTarget#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FileStorageMountTargetKerberosOutputReference <a name="FileStorageMountTargetKerberosOutputReference" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.Initializer"></a>

```typescript
import { fileStorageMountTarget } from 'rhizo-co-terraform-provider-oci'

new fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.resetBackupKeyTabSecretVersion">resetBackupKeyTabSecretVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.resetCurrentKeyTabSecretVersion">resetCurrentKeyTabSecretVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.resetIsKerberosEnabled">resetIsKerberosEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.resetKeyTabSecretId">resetKeyTabSecretId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBackupKeyTabSecretVersion` <a name="resetBackupKeyTabSecretVersion" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.resetBackupKeyTabSecretVersion"></a>

```typescript
public resetBackupKeyTabSecretVersion(): void
```

##### `resetCurrentKeyTabSecretVersion` <a name="resetCurrentKeyTabSecretVersion" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.resetCurrentKeyTabSecretVersion"></a>

```typescript
public resetCurrentKeyTabSecretVersion(): void
```

##### `resetIsKerberosEnabled` <a name="resetIsKerberosEnabled" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.resetIsKerberosEnabled"></a>

```typescript
public resetIsKerberosEnabled(): void
```

##### `resetKeyTabSecretId` <a name="resetKeyTabSecretId" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.resetKeyTabSecretId"></a>

```typescript
public resetKeyTabSecretId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.backupKeyTabSecretVersionInput">backupKeyTabSecretVersionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.currentKeyTabSecretVersionInput">currentKeyTabSecretVersionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.isKerberosEnabledInput">isKerberosEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.kerberosRealmInput">kerberosRealmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.keyTabSecretIdInput">keyTabSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.backupKeyTabSecretVersion">backupKeyTabSecretVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.currentKeyTabSecretVersion">currentKeyTabSecretVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.isKerberosEnabled">isKerberosEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.kerberosRealm">kerberosRealm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.keyTabSecretId">keyTabSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos">FileStorageMountTargetKerberos</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backupKeyTabSecretVersionInput`<sup>Optional</sup> <a name="backupKeyTabSecretVersionInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.backupKeyTabSecretVersionInput"></a>

```typescript
public readonly backupKeyTabSecretVersionInput: number;
```

- *Type:* number

---

##### `currentKeyTabSecretVersionInput`<sup>Optional</sup> <a name="currentKeyTabSecretVersionInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.currentKeyTabSecretVersionInput"></a>

```typescript
public readonly currentKeyTabSecretVersionInput: number;
```

- *Type:* number

---

##### `isKerberosEnabledInput`<sup>Optional</sup> <a name="isKerberosEnabledInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.isKerberosEnabledInput"></a>

```typescript
public readonly isKerberosEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `kerberosRealmInput`<sup>Optional</sup> <a name="kerberosRealmInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.kerberosRealmInput"></a>

```typescript
public readonly kerberosRealmInput: string;
```

- *Type:* string

---

##### `keyTabSecretIdInput`<sup>Optional</sup> <a name="keyTabSecretIdInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.keyTabSecretIdInput"></a>

```typescript
public readonly keyTabSecretIdInput: string;
```

- *Type:* string

---

##### `backupKeyTabSecretVersion`<sup>Required</sup> <a name="backupKeyTabSecretVersion" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.backupKeyTabSecretVersion"></a>

```typescript
public readonly backupKeyTabSecretVersion: number;
```

- *Type:* number

---

##### `currentKeyTabSecretVersion`<sup>Required</sup> <a name="currentKeyTabSecretVersion" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.currentKeyTabSecretVersion"></a>

```typescript
public readonly currentKeyTabSecretVersion: number;
```

- *Type:* number

---

##### `isKerberosEnabled`<sup>Required</sup> <a name="isKerberosEnabled" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.isKerberosEnabled"></a>

```typescript
public readonly isKerberosEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `kerberosRealm`<sup>Required</sup> <a name="kerberosRealm" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.kerberosRealm"></a>

```typescript
public readonly kerberosRealm: string;
```

- *Type:* string

---

##### `keyTabSecretId`<sup>Required</sup> <a name="keyTabSecretId" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.keyTabSecretId"></a>

```typescript
public readonly keyTabSecretId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FileStorageMountTargetKerberos;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos">FileStorageMountTargetKerberos</a>

---


### FileStorageMountTargetLdapIdmapOutputReference <a name="FileStorageMountTargetLdapIdmapOutputReference" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.Initializer"></a>

```typescript
import { fileStorageMountTarget } from 'rhizo-co-terraform-provider-oci'

new fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.resetCacheLifetimeSeconds">resetCacheLifetimeSeconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.resetCacheRefreshIntervalSeconds">resetCacheRefreshIntervalSeconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.resetGroupSearchBase">resetGroupSearchBase</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.resetNegativeCacheLifetimeSeconds">resetNegativeCacheLifetimeSeconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.resetOutboundConnector1Id">resetOutboundConnector1Id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.resetOutboundConnector2Id">resetOutboundConnector2Id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.resetSchemaType">resetSchemaType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.resetUserSearchBase">resetUserSearchBase</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCacheLifetimeSeconds` <a name="resetCacheLifetimeSeconds" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.resetCacheLifetimeSeconds"></a>

```typescript
public resetCacheLifetimeSeconds(): void
```

##### `resetCacheRefreshIntervalSeconds` <a name="resetCacheRefreshIntervalSeconds" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.resetCacheRefreshIntervalSeconds"></a>

```typescript
public resetCacheRefreshIntervalSeconds(): void
```

##### `resetGroupSearchBase` <a name="resetGroupSearchBase" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.resetGroupSearchBase"></a>

```typescript
public resetGroupSearchBase(): void
```

##### `resetNegativeCacheLifetimeSeconds` <a name="resetNegativeCacheLifetimeSeconds" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.resetNegativeCacheLifetimeSeconds"></a>

```typescript
public resetNegativeCacheLifetimeSeconds(): void
```

##### `resetOutboundConnector1Id` <a name="resetOutboundConnector1Id" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.resetOutboundConnector1Id"></a>

```typescript
public resetOutboundConnector1Id(): void
```

##### `resetOutboundConnector2Id` <a name="resetOutboundConnector2Id" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.resetOutboundConnector2Id"></a>

```typescript
public resetOutboundConnector2Id(): void
```

##### `resetSchemaType` <a name="resetSchemaType" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.resetSchemaType"></a>

```typescript
public resetSchemaType(): void
```

##### `resetUserSearchBase` <a name="resetUserSearchBase" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.resetUserSearchBase"></a>

```typescript
public resetUserSearchBase(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.cacheLifetimeSecondsInput">cacheLifetimeSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.cacheRefreshIntervalSecondsInput">cacheRefreshIntervalSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.groupSearchBaseInput">groupSearchBaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.negativeCacheLifetimeSecondsInput">negativeCacheLifetimeSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.outboundConnector1IdInput">outboundConnector1IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.outboundConnector2IdInput">outboundConnector2IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.schemaTypeInput">schemaTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.userSearchBaseInput">userSearchBaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.cacheLifetimeSeconds">cacheLifetimeSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.cacheRefreshIntervalSeconds">cacheRefreshIntervalSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.groupSearchBase">groupSearchBase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.negativeCacheLifetimeSeconds">negativeCacheLifetimeSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.outboundConnector1Id">outboundConnector1Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.outboundConnector2Id">outboundConnector2Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.schemaType">schemaType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.userSearchBase">userSearchBase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap">FileStorageMountTargetLdapIdmap</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cacheLifetimeSecondsInput`<sup>Optional</sup> <a name="cacheLifetimeSecondsInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.cacheLifetimeSecondsInput"></a>

```typescript
public readonly cacheLifetimeSecondsInput: number;
```

- *Type:* number

---

##### `cacheRefreshIntervalSecondsInput`<sup>Optional</sup> <a name="cacheRefreshIntervalSecondsInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.cacheRefreshIntervalSecondsInput"></a>

```typescript
public readonly cacheRefreshIntervalSecondsInput: number;
```

- *Type:* number

---

##### `groupSearchBaseInput`<sup>Optional</sup> <a name="groupSearchBaseInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.groupSearchBaseInput"></a>

```typescript
public readonly groupSearchBaseInput: string;
```

- *Type:* string

---

##### `negativeCacheLifetimeSecondsInput`<sup>Optional</sup> <a name="negativeCacheLifetimeSecondsInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.negativeCacheLifetimeSecondsInput"></a>

```typescript
public readonly negativeCacheLifetimeSecondsInput: number;
```

- *Type:* number

---

##### `outboundConnector1IdInput`<sup>Optional</sup> <a name="outboundConnector1IdInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.outboundConnector1IdInput"></a>

```typescript
public readonly outboundConnector1IdInput: string;
```

- *Type:* string

---

##### `outboundConnector2IdInput`<sup>Optional</sup> <a name="outboundConnector2IdInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.outboundConnector2IdInput"></a>

```typescript
public readonly outboundConnector2IdInput: string;
```

- *Type:* string

---

##### `schemaTypeInput`<sup>Optional</sup> <a name="schemaTypeInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.schemaTypeInput"></a>

```typescript
public readonly schemaTypeInput: string;
```

- *Type:* string

---

##### `userSearchBaseInput`<sup>Optional</sup> <a name="userSearchBaseInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.userSearchBaseInput"></a>

```typescript
public readonly userSearchBaseInput: string;
```

- *Type:* string

---

##### `cacheLifetimeSeconds`<sup>Required</sup> <a name="cacheLifetimeSeconds" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.cacheLifetimeSeconds"></a>

```typescript
public readonly cacheLifetimeSeconds: number;
```

- *Type:* number

---

##### `cacheRefreshIntervalSeconds`<sup>Required</sup> <a name="cacheRefreshIntervalSeconds" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.cacheRefreshIntervalSeconds"></a>

```typescript
public readonly cacheRefreshIntervalSeconds: number;
```

- *Type:* number

---

##### `groupSearchBase`<sup>Required</sup> <a name="groupSearchBase" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.groupSearchBase"></a>

```typescript
public readonly groupSearchBase: string;
```

- *Type:* string

---

##### `negativeCacheLifetimeSeconds`<sup>Required</sup> <a name="negativeCacheLifetimeSeconds" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.negativeCacheLifetimeSeconds"></a>

```typescript
public readonly negativeCacheLifetimeSeconds: number;
```

- *Type:* number

---

##### `outboundConnector1Id`<sup>Required</sup> <a name="outboundConnector1Id" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.outboundConnector1Id"></a>

```typescript
public readonly outboundConnector1Id: string;
```

- *Type:* string

---

##### `outboundConnector2Id`<sup>Required</sup> <a name="outboundConnector2Id" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.outboundConnector2Id"></a>

```typescript
public readonly outboundConnector2Id: string;
```

- *Type:* string

---

##### `schemaType`<sup>Required</sup> <a name="schemaType" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.schemaType"></a>

```typescript
public readonly schemaType: string;
```

- *Type:* string

---

##### `userSearchBase`<sup>Required</sup> <a name="userSearchBase" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.userSearchBase"></a>

```typescript
public readonly userSearchBase: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FileStorageMountTargetLdapIdmap;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap">FileStorageMountTargetLdapIdmap</a>

---


### FileStorageMountTargetLocksList <a name="FileStorageMountTargetLocksList" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.Initializer"></a>

```typescript
import { fileStorageMountTarget } from 'rhizo-co-terraform-provider-oci'

new fileStorageMountTarget.FileStorageMountTargetLocksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.get"></a>

```typescript
public get(index: number): FileStorageMountTargetLocksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocks">FileStorageMountTargetLocks</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FileStorageMountTargetLocks[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocks">FileStorageMountTargetLocks</a>[]

---


### FileStorageMountTargetLocksOutputReference <a name="FileStorageMountTargetLocksOutputReference" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.Initializer"></a>

```typescript
import { fileStorageMountTarget } from 'rhizo-co-terraform-provider-oci'

new fileStorageMountTarget.FileStorageMountTargetLocksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.resetMessage">resetMessage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.resetRelatedResourceId">resetRelatedResourceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.resetTimeCreated">resetTimeCreated</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMessage` <a name="resetMessage" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.resetMessage"></a>

```typescript
public resetMessage(): void
```

##### `resetRelatedResourceId` <a name="resetRelatedResourceId" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.resetRelatedResourceId"></a>

```typescript
public resetRelatedResourceId(): void
```

##### `resetTimeCreated` <a name="resetTimeCreated" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.resetTimeCreated"></a>

```typescript
public resetTimeCreated(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.messageInput">messageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.relatedResourceIdInput">relatedResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.timeCreatedInput">timeCreatedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.relatedResourceId">relatedResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocks">FileStorageMountTargetLocks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.messageInput"></a>

```typescript
public readonly messageInput: string;
```

- *Type:* string

---

##### `relatedResourceIdInput`<sup>Optional</sup> <a name="relatedResourceIdInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.relatedResourceIdInput"></a>

```typescript
public readonly relatedResourceIdInput: string;
```

- *Type:* string

---

##### `timeCreatedInput`<sup>Optional</sup> <a name="timeCreatedInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.timeCreatedInput"></a>

```typescript
public readonly timeCreatedInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `relatedResourceId`<sup>Required</sup> <a name="relatedResourceId" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.relatedResourceId"></a>

```typescript
public readonly relatedResourceId: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FileStorageMountTargetLocks;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocks">FileStorageMountTargetLocks</a>

---


### FileStorageMountTargetTimeoutsOutputReference <a name="FileStorageMountTargetTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.Initializer"></a>

```typescript
import { fileStorageMountTarget } from 'rhizo-co-terraform-provider-oci'

new fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeouts">FileStorageMountTargetTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FileStorageMountTargetTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeouts">FileStorageMountTargetTimeouts</a>

---



