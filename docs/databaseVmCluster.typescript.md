# `databaseVmCluster` Submodule <a name="`databaseVmCluster` Submodule" id="rhizo-co-terraform-provider-oci.databaseVmCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseVmCluster <a name="DatabaseVmCluster" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster oci_database_vm_cluster}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer"></a>

```typescript
import { databaseVmCluster } from 'rhizo-co-terraform-provider-oci'

new databaseVmCluster.DatabaseVmCluster(scope: Construct, id: string, config: DatabaseVmClusterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig">DatabaseVmClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig">DatabaseVmClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.putCloudAutomationUpdateDetails">putCloudAutomationUpdateDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.putDataCollectionOptions">putDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.putFileSystemConfigurationDetails">putFileSystemConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetCloudAutomationUpdateDetails">resetCloudAutomationUpdateDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetDataCollectionOptions">resetDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetDataStorageSizeInGb">resetDataStorageSizeInGb</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetDataStorageSizeInTbs">resetDataStorageSizeInTbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetDbNodeStorageSizeInGbs">resetDbNodeStorageSizeInGbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetDbServers">resetDbServers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetFileSystemConfigurationDetails">resetFileSystemConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetIsLocalBackupEnabled">resetIsLocalBackupEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetIsSparseDiskgroupEnabled">resetIsSparseDiskgroupEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetLicenseModel">resetLicenseModel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetMemorySizeInGbs">resetMemorySizeInGbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetOcpuCount">resetOcpuCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetSystemVersion">resetSystemVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetTimeZone">resetTimeZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCloudAutomationUpdateDetails` <a name="putCloudAutomationUpdateDetails" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.putCloudAutomationUpdateDetails"></a>

```typescript
public putCloudAutomationUpdateDetails(value: DatabaseVmClusterCloudAutomationUpdateDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.putCloudAutomationUpdateDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetails">DatabaseVmClusterCloudAutomationUpdateDetails</a>

---

##### `putDataCollectionOptions` <a name="putDataCollectionOptions" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.putDataCollectionOptions"></a>

```typescript
public putDataCollectionOptions(value: DatabaseVmClusterDataCollectionOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.putDataCollectionOptions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptions">DatabaseVmClusterDataCollectionOptions</a>

---

##### `putFileSystemConfigurationDetails` <a name="putFileSystemConfigurationDetails" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.putFileSystemConfigurationDetails"></a>

```typescript
public putFileSystemConfigurationDetails(value: IResolvable | DatabaseVmClusterFileSystemConfigurationDetails[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.putFileSystemConfigurationDetails.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetails">DatabaseVmClusterFileSystemConfigurationDetails</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.putTimeouts"></a>

```typescript
public putTimeouts(value: DatabaseVmClusterTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeouts">DatabaseVmClusterTimeouts</a>

---

##### `resetCloudAutomationUpdateDetails` <a name="resetCloudAutomationUpdateDetails" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetCloudAutomationUpdateDetails"></a>

```typescript
public resetCloudAutomationUpdateDetails(): void
```

##### `resetDataCollectionOptions` <a name="resetDataCollectionOptions" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetDataCollectionOptions"></a>

```typescript
public resetDataCollectionOptions(): void
```

##### `resetDataStorageSizeInGb` <a name="resetDataStorageSizeInGb" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetDataStorageSizeInGb"></a>

```typescript
public resetDataStorageSizeInGb(): void
```

##### `resetDataStorageSizeInTbs` <a name="resetDataStorageSizeInTbs" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetDataStorageSizeInTbs"></a>

```typescript
public resetDataStorageSizeInTbs(): void
```

##### `resetDbNodeStorageSizeInGbs` <a name="resetDbNodeStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetDbNodeStorageSizeInGbs"></a>

```typescript
public resetDbNodeStorageSizeInGbs(): void
```

##### `resetDbServers` <a name="resetDbServers" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetDbServers"></a>

```typescript
public resetDbServers(): void
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetFileSystemConfigurationDetails` <a name="resetFileSystemConfigurationDetails" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetFileSystemConfigurationDetails"></a>

```typescript
public resetFileSystemConfigurationDetails(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsLocalBackupEnabled` <a name="resetIsLocalBackupEnabled" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetIsLocalBackupEnabled"></a>

```typescript
public resetIsLocalBackupEnabled(): void
```

##### `resetIsSparseDiskgroupEnabled` <a name="resetIsSparseDiskgroupEnabled" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetIsSparseDiskgroupEnabled"></a>

```typescript
public resetIsSparseDiskgroupEnabled(): void
```

##### `resetLicenseModel` <a name="resetLicenseModel" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetLicenseModel"></a>

```typescript
public resetLicenseModel(): void
```

##### `resetMemorySizeInGbs` <a name="resetMemorySizeInGbs" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetMemorySizeInGbs"></a>

```typescript
public resetMemorySizeInGbs(): void
```

##### `resetOcpuCount` <a name="resetOcpuCount" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetOcpuCount"></a>

```typescript
public resetOcpuCount(): void
```

##### `resetSystemVersion` <a name="resetSystemVersion" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetSystemVersion"></a>

```typescript
public resetSystemVersion(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTimeZone` <a name="resetTimeZone" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.resetTimeZone"></a>

```typescript
public resetTimeZone(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseVmCluster resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.isConstruct"></a>

```typescript
import { databaseVmCluster } from 'rhizo-co-terraform-provider-oci'

databaseVmCluster.DatabaseVmCluster.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.isTerraformElement"></a>

```typescript
import { databaseVmCluster } from 'rhizo-co-terraform-provider-oci'

databaseVmCluster.DatabaseVmCluster.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.isTerraformResource"></a>

```typescript
import { databaseVmCluster } from 'rhizo-co-terraform-provider-oci'

databaseVmCluster.DatabaseVmCluster.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.generateConfigForImport"></a>

```typescript
import { databaseVmCluster } from 'rhizo-co-terraform-provider-oci'

databaseVmCluster.DatabaseVmCluster.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DatabaseVmCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseVmCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseVmCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseVmCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.cloudAutomationUpdateDetails">cloudAutomationUpdateDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference">DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.cpusEnabled">cpusEnabled</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.dataCollectionOptions">dataCollectionOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference">DatabaseVmClusterDataCollectionOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.fileSystemConfigurationDetails">fileSystemConfigurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsList">DatabaseVmClusterFileSystemConfigurationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.lastPatchHistoryEntryId">lastPatchHistoryEntryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.ocpusEnabled">ocpusEnabled</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.shape">shape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference">DatabaseVmClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.cloudAutomationUpdateDetailsInput">cloudAutomationUpdateDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetails">DatabaseVmClusterCloudAutomationUpdateDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.cpuCoreCountInput">cpuCoreCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.dataCollectionOptionsInput">dataCollectionOptionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptions">DatabaseVmClusterDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.dataStorageSizeInGbInput">dataStorageSizeInGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.dataStorageSizeInTbsInput">dataStorageSizeInTbsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.dbNodeStorageSizeInGbsInput">dbNodeStorageSizeInGbsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.dbServersInput">dbServersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.exadataInfrastructureIdInput">exadataInfrastructureIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.fileSystemConfigurationDetailsInput">fileSystemConfigurationDetailsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetails">DatabaseVmClusterFileSystemConfigurationDetails</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.giVersionInput">giVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.isLocalBackupEnabledInput">isLocalBackupEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.isSparseDiskgroupEnabledInput">isSparseDiskgroupEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.licenseModelInput">licenseModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.memorySizeInGbsInput">memorySizeInGbsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.ocpuCountInput">ocpuCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.sshPublicKeysInput">sshPublicKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.systemVersionInput">systemVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeouts">DatabaseVmClusterTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.timeZoneInput">timeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.vmClusterNetworkIdInput">vmClusterNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.cpuCoreCount">cpuCoreCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.dataStorageSizeInGb">dataStorageSizeInGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.dataStorageSizeInTbs">dataStorageSizeInTbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.dbNodeStorageSizeInGbs">dbNodeStorageSizeInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.dbServers">dbServers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.exadataInfrastructureId">exadataInfrastructureId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.giVersion">giVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.isLocalBackupEnabled">isLocalBackupEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.isSparseDiskgroupEnabled">isSparseDiskgroupEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.licenseModel">licenseModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.memorySizeInGbs">memorySizeInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.ocpuCount">ocpuCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.sshPublicKeys">sshPublicKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.systemVersion">systemVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.timeZone">timeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.vmClusterNetworkId">vmClusterNetworkId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

---

##### `cloudAutomationUpdateDetails`<sup>Required</sup> <a name="cloudAutomationUpdateDetails" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.cloudAutomationUpdateDetails"></a>

```typescript
public readonly cloudAutomationUpdateDetails: DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference">DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference</a>

---

##### `cpusEnabled`<sup>Required</sup> <a name="cpusEnabled" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.cpusEnabled"></a>

```typescript
public readonly cpusEnabled: number;
```

- *Type:* number

---

##### `dataCollectionOptions`<sup>Required</sup> <a name="dataCollectionOptions" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.dataCollectionOptions"></a>

```typescript
public readonly dataCollectionOptions: DatabaseVmClusterDataCollectionOptionsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference">DatabaseVmClusterDataCollectionOptionsOutputReference</a>

---

##### `fileSystemConfigurationDetails`<sup>Required</sup> <a name="fileSystemConfigurationDetails" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.fileSystemConfigurationDetails"></a>

```typescript
public readonly fileSystemConfigurationDetails: DatabaseVmClusterFileSystemConfigurationDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsList">DatabaseVmClusterFileSystemConfigurationDetailsList</a>

---

##### `lastPatchHistoryEntryId`<sup>Required</sup> <a name="lastPatchHistoryEntryId" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.lastPatchHistoryEntryId"></a>

```typescript
public readonly lastPatchHistoryEntryId: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `ocpusEnabled`<sup>Required</sup> <a name="ocpusEnabled" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.ocpusEnabled"></a>

```typescript
public readonly ocpusEnabled: number;
```

- *Type:* number

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.shape"></a>

```typescript
public readonly shape: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.timeouts"></a>

```typescript
public readonly timeouts: DatabaseVmClusterTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference">DatabaseVmClusterTimeoutsOutputReference</a>

---

##### `cloudAutomationUpdateDetailsInput`<sup>Optional</sup> <a name="cloudAutomationUpdateDetailsInput" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.cloudAutomationUpdateDetailsInput"></a>

```typescript
public readonly cloudAutomationUpdateDetailsInput: DatabaseVmClusterCloudAutomationUpdateDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetails">DatabaseVmClusterCloudAutomationUpdateDetails</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `cpuCoreCountInput`<sup>Optional</sup> <a name="cpuCoreCountInput" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.cpuCoreCountInput"></a>

```typescript
public readonly cpuCoreCountInput: number;
```

- *Type:* number

---

##### `dataCollectionOptionsInput`<sup>Optional</sup> <a name="dataCollectionOptionsInput" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.dataCollectionOptionsInput"></a>

```typescript
public readonly dataCollectionOptionsInput: DatabaseVmClusterDataCollectionOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptions">DatabaseVmClusterDataCollectionOptions</a>

---

##### `dataStorageSizeInGbInput`<sup>Optional</sup> <a name="dataStorageSizeInGbInput" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.dataStorageSizeInGbInput"></a>

```typescript
public readonly dataStorageSizeInGbInput: number;
```

- *Type:* number

---

##### `dataStorageSizeInTbsInput`<sup>Optional</sup> <a name="dataStorageSizeInTbsInput" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.dataStorageSizeInTbsInput"></a>

```typescript
public readonly dataStorageSizeInTbsInput: number;
```

- *Type:* number

---

##### `dbNodeStorageSizeInGbsInput`<sup>Optional</sup> <a name="dbNodeStorageSizeInGbsInput" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.dbNodeStorageSizeInGbsInput"></a>

```typescript
public readonly dbNodeStorageSizeInGbsInput: number;
```

- *Type:* number

---

##### `dbServersInput`<sup>Optional</sup> <a name="dbServersInput" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.dbServersInput"></a>

```typescript
public readonly dbServersInput: string[];
```

- *Type:* string[]

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `exadataInfrastructureIdInput`<sup>Optional</sup> <a name="exadataInfrastructureIdInput" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.exadataInfrastructureIdInput"></a>

```typescript
public readonly exadataInfrastructureIdInput: string;
```

- *Type:* string

---

##### `fileSystemConfigurationDetailsInput`<sup>Optional</sup> <a name="fileSystemConfigurationDetailsInput" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.fileSystemConfigurationDetailsInput"></a>

```typescript
public readonly fileSystemConfigurationDetailsInput: IResolvable | DatabaseVmClusterFileSystemConfigurationDetails[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetails">DatabaseVmClusterFileSystemConfigurationDetails</a>[]

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `giVersionInput`<sup>Optional</sup> <a name="giVersionInput" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.giVersionInput"></a>

```typescript
public readonly giVersionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isLocalBackupEnabledInput`<sup>Optional</sup> <a name="isLocalBackupEnabledInput" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.isLocalBackupEnabledInput"></a>

```typescript
public readonly isLocalBackupEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isSparseDiskgroupEnabledInput`<sup>Optional</sup> <a name="isSparseDiskgroupEnabledInput" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.isSparseDiskgroupEnabledInput"></a>

```typescript
public readonly isSparseDiskgroupEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `licenseModelInput`<sup>Optional</sup> <a name="licenseModelInput" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.licenseModelInput"></a>

```typescript
public readonly licenseModelInput: string;
```

- *Type:* string

---

##### `memorySizeInGbsInput`<sup>Optional</sup> <a name="memorySizeInGbsInput" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.memorySizeInGbsInput"></a>

```typescript
public readonly memorySizeInGbsInput: number;
```

- *Type:* number

---

##### `ocpuCountInput`<sup>Optional</sup> <a name="ocpuCountInput" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.ocpuCountInput"></a>

```typescript
public readonly ocpuCountInput: number;
```

- *Type:* number

---

##### `sshPublicKeysInput`<sup>Optional</sup> <a name="sshPublicKeysInput" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.sshPublicKeysInput"></a>

```typescript
public readonly sshPublicKeysInput: string[];
```

- *Type:* string[]

---

##### `systemVersionInput`<sup>Optional</sup> <a name="systemVersionInput" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.systemVersionInput"></a>

```typescript
public readonly systemVersionInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DatabaseVmClusterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeouts">DatabaseVmClusterTimeouts</a>

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.timeZoneInput"></a>

```typescript
public readonly timeZoneInput: string;
```

- *Type:* string

---

##### `vmClusterNetworkIdInput`<sup>Optional</sup> <a name="vmClusterNetworkIdInput" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.vmClusterNetworkIdInput"></a>

```typescript
public readonly vmClusterNetworkIdInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `cpuCoreCount`<sup>Required</sup> <a name="cpuCoreCount" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.cpuCoreCount"></a>

```typescript
public readonly cpuCoreCount: number;
```

- *Type:* number

---

##### `dataStorageSizeInGb`<sup>Required</sup> <a name="dataStorageSizeInGb" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.dataStorageSizeInGb"></a>

```typescript
public readonly dataStorageSizeInGb: number;
```

- *Type:* number

---

##### `dataStorageSizeInTbs`<sup>Required</sup> <a name="dataStorageSizeInTbs" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.dataStorageSizeInTbs"></a>

```typescript
public readonly dataStorageSizeInTbs: number;
```

- *Type:* number

---

##### `dbNodeStorageSizeInGbs`<sup>Required</sup> <a name="dbNodeStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.dbNodeStorageSizeInGbs"></a>

```typescript
public readonly dbNodeStorageSizeInGbs: number;
```

- *Type:* number

---

##### `dbServers`<sup>Required</sup> <a name="dbServers" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.dbServers"></a>

```typescript
public readonly dbServers: string[];
```

- *Type:* string[]

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `exadataInfrastructureId`<sup>Required</sup> <a name="exadataInfrastructureId" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.exadataInfrastructureId"></a>

```typescript
public readonly exadataInfrastructureId: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `giVersion`<sup>Required</sup> <a name="giVersion" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.giVersion"></a>

```typescript
public readonly giVersion: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isLocalBackupEnabled`<sup>Required</sup> <a name="isLocalBackupEnabled" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.isLocalBackupEnabled"></a>

```typescript
public readonly isLocalBackupEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isSparseDiskgroupEnabled`<sup>Required</sup> <a name="isSparseDiskgroupEnabled" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.isSparseDiskgroupEnabled"></a>

```typescript
public readonly isSparseDiskgroupEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `licenseModel`<sup>Required</sup> <a name="licenseModel" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.licenseModel"></a>

```typescript
public readonly licenseModel: string;
```

- *Type:* string

---

##### `memorySizeInGbs`<sup>Required</sup> <a name="memorySizeInGbs" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.memorySizeInGbs"></a>

```typescript
public readonly memorySizeInGbs: number;
```

- *Type:* number

---

##### `ocpuCount`<sup>Required</sup> <a name="ocpuCount" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.ocpuCount"></a>

```typescript
public readonly ocpuCount: number;
```

- *Type:* number

---

##### `sshPublicKeys`<sup>Required</sup> <a name="sshPublicKeys" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.sshPublicKeys"></a>

```typescript
public readonly sshPublicKeys: string[];
```

- *Type:* string[]

---

##### `systemVersion`<sup>Required</sup> <a name="systemVersion" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.systemVersion"></a>

```typescript
public readonly systemVersion: string;
```

- *Type:* string

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

---

##### `vmClusterNetworkId`<sup>Required</sup> <a name="vmClusterNetworkId" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.vmClusterNetworkId"></a>

```typescript
public readonly vmClusterNetworkId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmCluster.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseVmClusterCloudAutomationUpdateDetails <a name="DatabaseVmClusterCloudAutomationUpdateDetails" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetails.Initializer"></a>

```typescript
import { databaseVmCluster } from 'rhizo-co-terraform-provider-oci'

const databaseVmClusterCloudAutomationUpdateDetails: databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetails.property.applyUpdateTimePreference">applyUpdateTimePreference</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference">DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference</a></code> | apply_update_time_preference block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetails.property.freezePeriod">freezePeriod</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriod">DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriod</a></code> | freeze_period block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetails.property.isEarlyAdoptionEnabled">isEarlyAdoptionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#is_early_adoption_enabled DatabaseVmCluster#is_early_adoption_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetails.property.isFreezePeriodEnabled">isFreezePeriodEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#is_freeze_period_enabled DatabaseVmCluster#is_freeze_period_enabled}. |

---

##### `applyUpdateTimePreference`<sup>Optional</sup> <a name="applyUpdateTimePreference" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetails.property.applyUpdateTimePreference"></a>

```typescript
public readonly applyUpdateTimePreference: DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference">DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference</a>

apply_update_time_preference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#apply_update_time_preference DatabaseVmCluster#apply_update_time_preference}

---

##### `freezePeriod`<sup>Optional</sup> <a name="freezePeriod" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetails.property.freezePeriod"></a>

```typescript
public readonly freezePeriod: DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriod;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriod">DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriod</a>

freeze_period block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#freeze_period DatabaseVmCluster#freeze_period}

---

##### `isEarlyAdoptionEnabled`<sup>Optional</sup> <a name="isEarlyAdoptionEnabled" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetails.property.isEarlyAdoptionEnabled"></a>

```typescript
public readonly isEarlyAdoptionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#is_early_adoption_enabled DatabaseVmCluster#is_early_adoption_enabled}.

---

##### `isFreezePeriodEnabled`<sup>Optional</sup> <a name="isFreezePeriodEnabled" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetails.property.isFreezePeriodEnabled"></a>

```typescript
public readonly isFreezePeriodEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#is_freeze_period_enabled DatabaseVmCluster#is_freeze_period_enabled}.

---

### DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference <a name="DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference.Initializer"></a>

```typescript
import { databaseVmCluster } from 'rhizo-co-terraform-provider-oci'

const databaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference: databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference.property.applyUpdatePreferredEndTime">applyUpdatePreferredEndTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#apply_update_preferred_end_time DatabaseVmCluster#apply_update_preferred_end_time}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference.property.applyUpdatePreferredStartTime">applyUpdatePreferredStartTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#apply_update_preferred_start_time DatabaseVmCluster#apply_update_preferred_start_time}. |

---

##### `applyUpdatePreferredEndTime`<sup>Optional</sup> <a name="applyUpdatePreferredEndTime" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference.property.applyUpdatePreferredEndTime"></a>

```typescript
public readonly applyUpdatePreferredEndTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#apply_update_preferred_end_time DatabaseVmCluster#apply_update_preferred_end_time}.

---

##### `applyUpdatePreferredStartTime`<sup>Optional</sup> <a name="applyUpdatePreferredStartTime" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference.property.applyUpdatePreferredStartTime"></a>

```typescript
public readonly applyUpdatePreferredStartTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#apply_update_preferred_start_time DatabaseVmCluster#apply_update_preferred_start_time}.

---

### DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriod <a name="DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriod" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriod"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriod.Initializer"></a>

```typescript
import { databaseVmCluster } from 'rhizo-co-terraform-provider-oci'

const databaseVmClusterCloudAutomationUpdateDetailsFreezePeriod: databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriod = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriod.property.freezePeriodEndTime">freezePeriodEndTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#freeze_period_end_time DatabaseVmCluster#freeze_period_end_time}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriod.property.freezePeriodStartTime">freezePeriodStartTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#freeze_period_start_time DatabaseVmCluster#freeze_period_start_time}. |

---

##### `freezePeriodEndTime`<sup>Optional</sup> <a name="freezePeriodEndTime" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriod.property.freezePeriodEndTime"></a>

```typescript
public readonly freezePeriodEndTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#freeze_period_end_time DatabaseVmCluster#freeze_period_end_time}.

---

##### `freezePeriodStartTime`<sup>Optional</sup> <a name="freezePeriodStartTime" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriod.property.freezePeriodStartTime"></a>

```typescript
public readonly freezePeriodStartTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#freeze_period_start_time DatabaseVmCluster#freeze_period_start_time}.

---

### DatabaseVmClusterConfig <a name="DatabaseVmClusterConfig" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.Initializer"></a>

```typescript
import { databaseVmCluster } from 'rhizo-co-terraform-provider-oci'

const databaseVmClusterConfig: databaseVmCluster.DatabaseVmClusterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#compartment_id DatabaseVmCluster#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.cpuCoreCount">cpuCoreCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#cpu_core_count DatabaseVmCluster#cpu_core_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#display_name DatabaseVmCluster#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.exadataInfrastructureId">exadataInfrastructureId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#exadata_infrastructure_id DatabaseVmCluster#exadata_infrastructure_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.giVersion">giVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#gi_version DatabaseVmCluster#gi_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.sshPublicKeys">sshPublicKeys</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#ssh_public_keys DatabaseVmCluster#ssh_public_keys}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.vmClusterNetworkId">vmClusterNetworkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#vm_cluster_network_id DatabaseVmCluster#vm_cluster_network_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.cloudAutomationUpdateDetails">cloudAutomationUpdateDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetails">DatabaseVmClusterCloudAutomationUpdateDetails</a></code> | cloud_automation_update_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.dataCollectionOptions">dataCollectionOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptions">DatabaseVmClusterDataCollectionOptions</a></code> | data_collection_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.dataStorageSizeInGb">dataStorageSizeInGb</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#data_storage_size_in_gb DatabaseVmCluster#data_storage_size_in_gb}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.dataStorageSizeInTbs">dataStorageSizeInTbs</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#data_storage_size_in_tbs DatabaseVmCluster#data_storage_size_in_tbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.dbNodeStorageSizeInGbs">dbNodeStorageSizeInGbs</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#db_node_storage_size_in_gbs DatabaseVmCluster#db_node_storage_size_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.dbServers">dbServers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#db_servers DatabaseVmCluster#db_servers}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#defined_tags DatabaseVmCluster#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.fileSystemConfigurationDetails">fileSystemConfigurationDetails</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetails">DatabaseVmClusterFileSystemConfigurationDetails</a>[]</code> | file_system_configuration_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#freeform_tags DatabaseVmCluster#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#id DatabaseVmCluster#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.isLocalBackupEnabled">isLocalBackupEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#is_local_backup_enabled DatabaseVmCluster#is_local_backup_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.isSparseDiskgroupEnabled">isSparseDiskgroupEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#is_sparse_diskgroup_enabled DatabaseVmCluster#is_sparse_diskgroup_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.licenseModel">licenseModel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#license_model DatabaseVmCluster#license_model}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.memorySizeInGbs">memorySizeInGbs</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#memory_size_in_gbs DatabaseVmCluster#memory_size_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.ocpuCount">ocpuCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#ocpu_count DatabaseVmCluster#ocpu_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.systemVersion">systemVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#system_version DatabaseVmCluster#system_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeouts">DatabaseVmClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.timeZone">timeZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#time_zone DatabaseVmCluster#time_zone}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#compartment_id DatabaseVmCluster#compartment_id}.

---

##### `cpuCoreCount`<sup>Required</sup> <a name="cpuCoreCount" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.cpuCoreCount"></a>

```typescript
public readonly cpuCoreCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#cpu_core_count DatabaseVmCluster#cpu_core_count}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#display_name DatabaseVmCluster#display_name}.

---

##### `exadataInfrastructureId`<sup>Required</sup> <a name="exadataInfrastructureId" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.exadataInfrastructureId"></a>

```typescript
public readonly exadataInfrastructureId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#exadata_infrastructure_id DatabaseVmCluster#exadata_infrastructure_id}.

---

##### `giVersion`<sup>Required</sup> <a name="giVersion" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.giVersion"></a>

```typescript
public readonly giVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#gi_version DatabaseVmCluster#gi_version}.

---

##### `sshPublicKeys`<sup>Required</sup> <a name="sshPublicKeys" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.sshPublicKeys"></a>

```typescript
public readonly sshPublicKeys: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#ssh_public_keys DatabaseVmCluster#ssh_public_keys}.

---

##### `vmClusterNetworkId`<sup>Required</sup> <a name="vmClusterNetworkId" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.vmClusterNetworkId"></a>

```typescript
public readonly vmClusterNetworkId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#vm_cluster_network_id DatabaseVmCluster#vm_cluster_network_id}.

---

##### `cloudAutomationUpdateDetails`<sup>Optional</sup> <a name="cloudAutomationUpdateDetails" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.cloudAutomationUpdateDetails"></a>

```typescript
public readonly cloudAutomationUpdateDetails: DatabaseVmClusterCloudAutomationUpdateDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetails">DatabaseVmClusterCloudAutomationUpdateDetails</a>

cloud_automation_update_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#cloud_automation_update_details DatabaseVmCluster#cloud_automation_update_details}

---

##### `dataCollectionOptions`<sup>Optional</sup> <a name="dataCollectionOptions" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.dataCollectionOptions"></a>

```typescript
public readonly dataCollectionOptions: DatabaseVmClusterDataCollectionOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptions">DatabaseVmClusterDataCollectionOptions</a>

data_collection_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#data_collection_options DatabaseVmCluster#data_collection_options}

---

##### `dataStorageSizeInGb`<sup>Optional</sup> <a name="dataStorageSizeInGb" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.dataStorageSizeInGb"></a>

```typescript
public readonly dataStorageSizeInGb: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#data_storage_size_in_gb DatabaseVmCluster#data_storage_size_in_gb}.

---

##### `dataStorageSizeInTbs`<sup>Optional</sup> <a name="dataStorageSizeInTbs" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.dataStorageSizeInTbs"></a>

```typescript
public readonly dataStorageSizeInTbs: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#data_storage_size_in_tbs DatabaseVmCluster#data_storage_size_in_tbs}.

---

##### `dbNodeStorageSizeInGbs`<sup>Optional</sup> <a name="dbNodeStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.dbNodeStorageSizeInGbs"></a>

```typescript
public readonly dbNodeStorageSizeInGbs: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#db_node_storage_size_in_gbs DatabaseVmCluster#db_node_storage_size_in_gbs}.

---

##### `dbServers`<sup>Optional</sup> <a name="dbServers" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.dbServers"></a>

```typescript
public readonly dbServers: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#db_servers DatabaseVmCluster#db_servers}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#defined_tags DatabaseVmCluster#defined_tags}.

---

##### `fileSystemConfigurationDetails`<sup>Optional</sup> <a name="fileSystemConfigurationDetails" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.fileSystemConfigurationDetails"></a>

```typescript
public readonly fileSystemConfigurationDetails: IResolvable | DatabaseVmClusterFileSystemConfigurationDetails[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetails">DatabaseVmClusterFileSystemConfigurationDetails</a>[]

file_system_configuration_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#file_system_configuration_details DatabaseVmCluster#file_system_configuration_details}

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#freeform_tags DatabaseVmCluster#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#id DatabaseVmCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isLocalBackupEnabled`<sup>Optional</sup> <a name="isLocalBackupEnabled" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.isLocalBackupEnabled"></a>

```typescript
public readonly isLocalBackupEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#is_local_backup_enabled DatabaseVmCluster#is_local_backup_enabled}.

---

##### `isSparseDiskgroupEnabled`<sup>Optional</sup> <a name="isSparseDiskgroupEnabled" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.isSparseDiskgroupEnabled"></a>

```typescript
public readonly isSparseDiskgroupEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#is_sparse_diskgroup_enabled DatabaseVmCluster#is_sparse_diskgroup_enabled}.

---

##### `licenseModel`<sup>Optional</sup> <a name="licenseModel" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.licenseModel"></a>

```typescript
public readonly licenseModel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#license_model DatabaseVmCluster#license_model}.

---

##### `memorySizeInGbs`<sup>Optional</sup> <a name="memorySizeInGbs" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.memorySizeInGbs"></a>

```typescript
public readonly memorySizeInGbs: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#memory_size_in_gbs DatabaseVmCluster#memory_size_in_gbs}.

---

##### `ocpuCount`<sup>Optional</sup> <a name="ocpuCount" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.ocpuCount"></a>

```typescript
public readonly ocpuCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#ocpu_count DatabaseVmCluster#ocpu_count}.

---

##### `systemVersion`<sup>Optional</sup> <a name="systemVersion" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.systemVersion"></a>

```typescript
public readonly systemVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#system_version DatabaseVmCluster#system_version}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DatabaseVmClusterTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeouts">DatabaseVmClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#timeouts DatabaseVmCluster#timeouts}

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterConfig.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#time_zone DatabaseVmCluster#time_zone}.

---

### DatabaseVmClusterDataCollectionOptions <a name="DatabaseVmClusterDataCollectionOptions" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptions.Initializer"></a>

```typescript
import { databaseVmCluster } from 'rhizo-co-terraform-provider-oci'

const databaseVmClusterDataCollectionOptions: databaseVmCluster.DatabaseVmClusterDataCollectionOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptions.property.isDiagnosticsEventsEnabled">isDiagnosticsEventsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#is_diagnostics_events_enabled DatabaseVmCluster#is_diagnostics_events_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptions.property.isHealthMonitoringEnabled">isHealthMonitoringEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#is_health_monitoring_enabled DatabaseVmCluster#is_health_monitoring_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptions.property.isIncidentLogsEnabled">isIncidentLogsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#is_incident_logs_enabled DatabaseVmCluster#is_incident_logs_enabled}. |

---

##### `isDiagnosticsEventsEnabled`<sup>Optional</sup> <a name="isDiagnosticsEventsEnabled" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptions.property.isDiagnosticsEventsEnabled"></a>

```typescript
public readonly isDiagnosticsEventsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#is_diagnostics_events_enabled DatabaseVmCluster#is_diagnostics_events_enabled}.

---

##### `isHealthMonitoringEnabled`<sup>Optional</sup> <a name="isHealthMonitoringEnabled" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptions.property.isHealthMonitoringEnabled"></a>

```typescript
public readonly isHealthMonitoringEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#is_health_monitoring_enabled DatabaseVmCluster#is_health_monitoring_enabled}.

---

##### `isIncidentLogsEnabled`<sup>Optional</sup> <a name="isIncidentLogsEnabled" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptions.property.isIncidentLogsEnabled"></a>

```typescript
public readonly isIncidentLogsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#is_incident_logs_enabled DatabaseVmCluster#is_incident_logs_enabled}.

---

### DatabaseVmClusterFileSystemConfigurationDetails <a name="DatabaseVmClusterFileSystemConfigurationDetails" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetails.Initializer"></a>

```typescript
import { databaseVmCluster } from 'rhizo-co-terraform-provider-oci'

const databaseVmClusterFileSystemConfigurationDetails: databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetails.property.fileSystemSizeGb">fileSystemSizeGb</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#file_system_size_gb DatabaseVmCluster#file_system_size_gb}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetails.property.mountPoint">mountPoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#mount_point DatabaseVmCluster#mount_point}. |

---

##### `fileSystemSizeGb`<sup>Optional</sup> <a name="fileSystemSizeGb" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetails.property.fileSystemSizeGb"></a>

```typescript
public readonly fileSystemSizeGb: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#file_system_size_gb DatabaseVmCluster#file_system_size_gb}.

---

##### `mountPoint`<sup>Optional</sup> <a name="mountPoint" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetails.property.mountPoint"></a>

```typescript
public readonly mountPoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#mount_point DatabaseVmCluster#mount_point}.

---

### DatabaseVmClusterTimeouts <a name="DatabaseVmClusterTimeouts" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeouts.Initializer"></a>

```typescript
import { databaseVmCluster } from 'rhizo-co-terraform-provider-oci'

const databaseVmClusterTimeouts: databaseVmCluster.DatabaseVmClusterTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#create DatabaseVmCluster#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#delete DatabaseVmCluster#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#update DatabaseVmCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#create DatabaseVmCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#delete DatabaseVmCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster#update DatabaseVmCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference <a name="DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer"></a>

```typescript
import { databaseVmCluster } from 'rhizo-co-terraform-provider-oci'

new databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.resetApplyUpdatePreferredEndTime">resetApplyUpdatePreferredEndTime</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.resetApplyUpdatePreferredStartTime">resetApplyUpdatePreferredStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApplyUpdatePreferredEndTime` <a name="resetApplyUpdatePreferredEndTime" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.resetApplyUpdatePreferredEndTime"></a>

```typescript
public resetApplyUpdatePreferredEndTime(): void
```

##### `resetApplyUpdatePreferredStartTime` <a name="resetApplyUpdatePreferredStartTime" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.resetApplyUpdatePreferredStartTime"></a>

```typescript
public resetApplyUpdatePreferredStartTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.applyUpdatePreferredEndTimeInput">applyUpdatePreferredEndTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.applyUpdatePreferredStartTimeInput">applyUpdatePreferredStartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.applyUpdatePreferredEndTime">applyUpdatePreferredEndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.applyUpdatePreferredStartTime">applyUpdatePreferredStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference">DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `applyUpdatePreferredEndTimeInput`<sup>Optional</sup> <a name="applyUpdatePreferredEndTimeInput" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.applyUpdatePreferredEndTimeInput"></a>

```typescript
public readonly applyUpdatePreferredEndTimeInput: string;
```

- *Type:* string

---

##### `applyUpdatePreferredStartTimeInput`<sup>Optional</sup> <a name="applyUpdatePreferredStartTimeInput" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.applyUpdatePreferredStartTimeInput"></a>

```typescript
public readonly applyUpdatePreferredStartTimeInput: string;
```

- *Type:* string

---

##### `applyUpdatePreferredEndTime`<sup>Required</sup> <a name="applyUpdatePreferredEndTime" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.applyUpdatePreferredEndTime"></a>

```typescript
public readonly applyUpdatePreferredEndTime: string;
```

- *Type:* string

---

##### `applyUpdatePreferredStartTime`<sup>Required</sup> <a name="applyUpdatePreferredStartTime" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.applyUpdatePreferredStartTime"></a>

```typescript
public readonly applyUpdatePreferredStartTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference">DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference</a>

---


### DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference <a name="DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer"></a>

```typescript
import { databaseVmCluster } from 'rhizo-co-terraform-provider-oci'

new databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.resetFreezePeriodEndTime">resetFreezePeriodEndTime</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.resetFreezePeriodStartTime">resetFreezePeriodStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFreezePeriodEndTime` <a name="resetFreezePeriodEndTime" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.resetFreezePeriodEndTime"></a>

```typescript
public resetFreezePeriodEndTime(): void
```

##### `resetFreezePeriodStartTime` <a name="resetFreezePeriodStartTime" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.resetFreezePeriodStartTime"></a>

```typescript
public resetFreezePeriodStartTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.freezePeriodEndTimeInput">freezePeriodEndTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.freezePeriodStartTimeInput">freezePeriodStartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.freezePeriodEndTime">freezePeriodEndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.freezePeriodStartTime">freezePeriodStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriod">DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriod</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `freezePeriodEndTimeInput`<sup>Optional</sup> <a name="freezePeriodEndTimeInput" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.freezePeriodEndTimeInput"></a>

```typescript
public readonly freezePeriodEndTimeInput: string;
```

- *Type:* string

---

##### `freezePeriodStartTimeInput`<sup>Optional</sup> <a name="freezePeriodStartTimeInput" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.freezePeriodStartTimeInput"></a>

```typescript
public readonly freezePeriodStartTimeInput: string;
```

- *Type:* string

---

##### `freezePeriodEndTime`<sup>Required</sup> <a name="freezePeriodEndTime" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.freezePeriodEndTime"></a>

```typescript
public readonly freezePeriodEndTime: string;
```

- *Type:* string

---

##### `freezePeriodStartTime`<sup>Required</sup> <a name="freezePeriodStartTime" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.freezePeriodStartTime"></a>

```typescript
public readonly freezePeriodStartTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriod;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriod">DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriod</a>

---


### DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference <a name="DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.Initializer"></a>

```typescript
import { databaseVmCluster } from 'rhizo-co-terraform-provider-oci'

new databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.putApplyUpdateTimePreference">putApplyUpdateTimePreference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.putFreezePeriod">putFreezePeriod</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.resetApplyUpdateTimePreference">resetApplyUpdateTimePreference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.resetFreezePeriod">resetFreezePeriod</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.resetIsEarlyAdoptionEnabled">resetIsEarlyAdoptionEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.resetIsFreezePeriodEnabled">resetIsFreezePeriodEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putApplyUpdateTimePreference` <a name="putApplyUpdateTimePreference" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.putApplyUpdateTimePreference"></a>

```typescript
public putApplyUpdateTimePreference(value: DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.putApplyUpdateTimePreference.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference">DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference</a>

---

##### `putFreezePeriod` <a name="putFreezePeriod" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.putFreezePeriod"></a>

```typescript
public putFreezePeriod(value: DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriod): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.putFreezePeriod.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriod">DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriod</a>

---

##### `resetApplyUpdateTimePreference` <a name="resetApplyUpdateTimePreference" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.resetApplyUpdateTimePreference"></a>

```typescript
public resetApplyUpdateTimePreference(): void
```

##### `resetFreezePeriod` <a name="resetFreezePeriod" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.resetFreezePeriod"></a>

```typescript
public resetFreezePeriod(): void
```

##### `resetIsEarlyAdoptionEnabled` <a name="resetIsEarlyAdoptionEnabled" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.resetIsEarlyAdoptionEnabled"></a>

```typescript
public resetIsEarlyAdoptionEnabled(): void
```

##### `resetIsFreezePeriodEnabled` <a name="resetIsFreezePeriodEnabled" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.resetIsFreezePeriodEnabled"></a>

```typescript
public resetIsFreezePeriodEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.property.applyUpdateTimePreference">applyUpdateTimePreference</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference">DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.property.freezePeriod">freezePeriod</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference">DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.property.applyUpdateTimePreferenceInput">applyUpdateTimePreferenceInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference">DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.property.freezePeriodInput">freezePeriodInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriod">DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriod</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.property.isEarlyAdoptionEnabledInput">isEarlyAdoptionEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.property.isFreezePeriodEnabledInput">isFreezePeriodEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.property.isEarlyAdoptionEnabled">isEarlyAdoptionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.property.isFreezePeriodEnabled">isFreezePeriodEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetails">DatabaseVmClusterCloudAutomationUpdateDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `applyUpdateTimePreference`<sup>Required</sup> <a name="applyUpdateTimePreference" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.property.applyUpdateTimePreference"></a>

```typescript
public readonly applyUpdateTimePreference: DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference">DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference</a>

---

##### `freezePeriod`<sup>Required</sup> <a name="freezePeriod" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.property.freezePeriod"></a>

```typescript
public readonly freezePeriod: DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference">DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference</a>

---

##### `applyUpdateTimePreferenceInput`<sup>Optional</sup> <a name="applyUpdateTimePreferenceInput" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.property.applyUpdateTimePreferenceInput"></a>

```typescript
public readonly applyUpdateTimePreferenceInput: DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference">DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference</a>

---

##### `freezePeriodInput`<sup>Optional</sup> <a name="freezePeriodInput" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.property.freezePeriodInput"></a>

```typescript
public readonly freezePeriodInput: DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriod;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriod">DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriod</a>

---

##### `isEarlyAdoptionEnabledInput`<sup>Optional</sup> <a name="isEarlyAdoptionEnabledInput" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.property.isEarlyAdoptionEnabledInput"></a>

```typescript
public readonly isEarlyAdoptionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isFreezePeriodEnabledInput`<sup>Optional</sup> <a name="isFreezePeriodEnabledInput" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.property.isFreezePeriodEnabledInput"></a>

```typescript
public readonly isFreezePeriodEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isEarlyAdoptionEnabled`<sup>Required</sup> <a name="isEarlyAdoptionEnabled" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.property.isEarlyAdoptionEnabled"></a>

```typescript
public readonly isEarlyAdoptionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isFreezePeriodEnabled`<sup>Required</sup> <a name="isFreezePeriodEnabled" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.property.isFreezePeriodEnabled"></a>

```typescript
public readonly isFreezePeriodEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseVmClusterCloudAutomationUpdateDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterCloudAutomationUpdateDetails">DatabaseVmClusterCloudAutomationUpdateDetails</a>

---


### DatabaseVmClusterDataCollectionOptionsOutputReference <a name="DatabaseVmClusterDataCollectionOptionsOutputReference" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.Initializer"></a>

```typescript
import { databaseVmCluster } from 'rhizo-co-terraform-provider-oci'

new databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.resetIsDiagnosticsEventsEnabled">resetIsDiagnosticsEventsEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.resetIsHealthMonitoringEnabled">resetIsHealthMonitoringEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.resetIsIncidentLogsEnabled">resetIsIncidentLogsEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsDiagnosticsEventsEnabled` <a name="resetIsDiagnosticsEventsEnabled" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.resetIsDiagnosticsEventsEnabled"></a>

```typescript
public resetIsDiagnosticsEventsEnabled(): void
```

##### `resetIsHealthMonitoringEnabled` <a name="resetIsHealthMonitoringEnabled" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.resetIsHealthMonitoringEnabled"></a>

```typescript
public resetIsHealthMonitoringEnabled(): void
```

##### `resetIsIncidentLogsEnabled` <a name="resetIsIncidentLogsEnabled" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.resetIsIncidentLogsEnabled"></a>

```typescript
public resetIsIncidentLogsEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabledInput">isDiagnosticsEventsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabledInput">isHealthMonitoringEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.property.isIncidentLogsEnabledInput">isIncidentLogsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled">isDiagnosticsEventsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabled">isHealthMonitoringEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled">isIncidentLogsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptions">DatabaseVmClusterDataCollectionOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isDiagnosticsEventsEnabledInput`<sup>Optional</sup> <a name="isDiagnosticsEventsEnabledInput" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabledInput"></a>

```typescript
public readonly isDiagnosticsEventsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isHealthMonitoringEnabledInput`<sup>Optional</sup> <a name="isHealthMonitoringEnabledInput" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabledInput"></a>

```typescript
public readonly isHealthMonitoringEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isIncidentLogsEnabledInput`<sup>Optional</sup> <a name="isIncidentLogsEnabledInput" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.property.isIncidentLogsEnabledInput"></a>

```typescript
public readonly isIncidentLogsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isDiagnosticsEventsEnabled`<sup>Required</sup> <a name="isDiagnosticsEventsEnabled" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled"></a>

```typescript
public readonly isDiagnosticsEventsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isHealthMonitoringEnabled`<sup>Required</sup> <a name="isHealthMonitoringEnabled" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabled"></a>

```typescript
public readonly isHealthMonitoringEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isIncidentLogsEnabled`<sup>Required</sup> <a name="isIncidentLogsEnabled" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled"></a>

```typescript
public readonly isIncidentLogsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseVmClusterDataCollectionOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterDataCollectionOptions">DatabaseVmClusterDataCollectionOptions</a>

---


### DatabaseVmClusterFileSystemConfigurationDetailsList <a name="DatabaseVmClusterFileSystemConfigurationDetailsList" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsList.Initializer"></a>

```typescript
import { databaseVmCluster } from 'rhizo-co-terraform-provider-oci'

new databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsList.get"></a>

```typescript
public get(index: number): DatabaseVmClusterFileSystemConfigurationDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetails">DatabaseVmClusterFileSystemConfigurationDetails</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseVmClusterFileSystemConfigurationDetails[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetails">DatabaseVmClusterFileSystemConfigurationDetails</a>[]

---


### DatabaseVmClusterFileSystemConfigurationDetailsOutputReference <a name="DatabaseVmClusterFileSystemConfigurationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.Initializer"></a>

```typescript
import { databaseVmCluster } from 'rhizo-co-terraform-provider-oci'

new databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.resetFileSystemSizeGb">resetFileSystemSizeGb</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.resetMountPoint">resetMountPoint</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFileSystemSizeGb` <a name="resetFileSystemSizeGb" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.resetFileSystemSizeGb"></a>

```typescript
public resetFileSystemSizeGb(): void
```

##### `resetMountPoint` <a name="resetMountPoint" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.resetMountPoint"></a>

```typescript
public resetMountPoint(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.property.fileSystemSizeGbInput">fileSystemSizeGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.property.mountPointInput">mountPointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.property.fileSystemSizeGb">fileSystemSizeGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.property.mountPoint">mountPoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetails">DatabaseVmClusterFileSystemConfigurationDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fileSystemSizeGbInput`<sup>Optional</sup> <a name="fileSystemSizeGbInput" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.property.fileSystemSizeGbInput"></a>

```typescript
public readonly fileSystemSizeGbInput: number;
```

- *Type:* number

---

##### `mountPointInput`<sup>Optional</sup> <a name="mountPointInput" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.property.mountPointInput"></a>

```typescript
public readonly mountPointInput: string;
```

- *Type:* string

---

##### `fileSystemSizeGb`<sup>Required</sup> <a name="fileSystemSizeGb" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.property.fileSystemSizeGb"></a>

```typescript
public readonly fileSystemSizeGb: number;
```

- *Type:* number

---

##### `mountPoint`<sup>Required</sup> <a name="mountPoint" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.property.mountPoint"></a>

```typescript
public readonly mountPoint: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseVmClusterFileSystemConfigurationDetails;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterFileSystemConfigurationDetails">DatabaseVmClusterFileSystemConfigurationDetails</a>

---


### DatabaseVmClusterTimeoutsOutputReference <a name="DatabaseVmClusterTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.Initializer"></a>

```typescript
import { databaseVmCluster } from 'rhizo-co-terraform-provider-oci'

new databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeouts">DatabaseVmClusterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseVmClusterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseVmCluster.DatabaseVmClusterTimeouts">DatabaseVmClusterTimeouts</a>

---



