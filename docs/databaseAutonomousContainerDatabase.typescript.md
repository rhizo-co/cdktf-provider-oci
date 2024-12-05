# `databaseAutonomousContainerDatabase` Submodule <a name="`databaseAutonomousContainerDatabase` Submodule" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseAutonomousContainerDatabase <a name="DatabaseAutonomousContainerDatabase" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database oci_database_autonomous_container_database}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer"></a>

```typescript
import { databaseAutonomousContainerDatabase } from 'rhizo-co-terraform-provider-oci'

new databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase(scope: Construct, id: string, config: DatabaseAutonomousContainerDatabaseConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig">DatabaseAutonomousContainerDatabaseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig">DatabaseAutonomousContainerDatabaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.putBackupConfig">putBackupConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.putMaintenanceWindowDetails">putMaintenanceWindowDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.putPeerAutonomousContainerDatabaseBackupConfig">putPeerAutonomousContainerDatabaseBackupConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetAutonomousExadataInfrastructureId">resetAutonomousExadataInfrastructureId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetAutonomousVmClusterId">resetAutonomousVmClusterId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetBackupConfig">resetBackupConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetCloudAutonomousVmClusterId">resetCloudAutonomousVmClusterId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetDatabaseSoftwareImageId">resetDatabaseSoftwareImageId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetDbName">resetDbName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetDbSplitThreshold">resetDbSplitThreshold</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetDbUniqueName">resetDbUniqueName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetDbVersion">resetDbVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetDistributionAffinity">resetDistributionAffinity</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetFastStartFailOverLagLimitInSeconds">resetFastStartFailOverLagLimitInSeconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetIsAutomaticFailoverEnabled">resetIsAutomaticFailoverEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetIsDstFileUpdateEnabled">resetIsDstFileUpdateEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetKeyStoreId">resetKeyStoreId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetMaintenanceWindowDetails">resetMaintenanceWindowDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetNetServicesArchitecture">resetNetServicesArchitecture</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetPeerAutonomousContainerDatabaseBackupConfig">resetPeerAutonomousContainerDatabaseBackupConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetPeerAutonomousContainerDatabaseCompartmentId">resetPeerAutonomousContainerDatabaseCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetPeerAutonomousContainerDatabaseDisplayName">resetPeerAutonomousContainerDatabaseDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetPeerAutonomousExadataInfrastructureId">resetPeerAutonomousExadataInfrastructureId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetPeerAutonomousVmClusterId">resetPeerAutonomousVmClusterId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetPeerCloudAutonomousVmClusterId">resetPeerCloudAutonomousVmClusterId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetPeerDbUniqueName">resetPeerDbUniqueName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetProtectionMode">resetProtectionMode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetRotateKeyTrigger">resetRotateKeyTrigger</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetServiceLevelAgreementType">resetServiceLevelAgreementType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetStandbyMaintenanceBufferInDays">resetStandbyMaintenanceBufferInDays</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetVaultId">resetVaultId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetVersionPreference">resetVersionPreference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetVmFailoverReservation">resetVmFailoverReservation</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBackupConfig` <a name="putBackupConfig" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.putBackupConfig"></a>

```typescript
public putBackupConfig(value: DatabaseAutonomousContainerDatabaseBackupConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.putBackupConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfig">DatabaseAutonomousContainerDatabaseBackupConfig</a>

---

##### `putMaintenanceWindowDetails` <a name="putMaintenanceWindowDetails" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.putMaintenanceWindowDetails"></a>

```typescript
public putMaintenanceWindowDetails(value: DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.putMaintenanceWindowDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails">DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails</a>

---

##### `putPeerAutonomousContainerDatabaseBackupConfig` <a name="putPeerAutonomousContainerDatabaseBackupConfig" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.putPeerAutonomousContainerDatabaseBackupConfig"></a>

```typescript
public putPeerAutonomousContainerDatabaseBackupConfig(value: DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.putPeerAutonomousContainerDatabaseBackupConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfig">DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.putTimeouts"></a>

```typescript
public putTimeouts(value: DatabaseAutonomousContainerDatabaseTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeouts">DatabaseAutonomousContainerDatabaseTimeouts</a>

---

##### `resetAutonomousExadataInfrastructureId` <a name="resetAutonomousExadataInfrastructureId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetAutonomousExadataInfrastructureId"></a>

```typescript
public resetAutonomousExadataInfrastructureId(): void
```

##### `resetAutonomousVmClusterId` <a name="resetAutonomousVmClusterId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetAutonomousVmClusterId"></a>

```typescript
public resetAutonomousVmClusterId(): void
```

##### `resetBackupConfig` <a name="resetBackupConfig" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetBackupConfig"></a>

```typescript
public resetBackupConfig(): void
```

##### `resetCloudAutonomousVmClusterId` <a name="resetCloudAutonomousVmClusterId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetCloudAutonomousVmClusterId"></a>

```typescript
public resetCloudAutonomousVmClusterId(): void
```

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetDatabaseSoftwareImageId` <a name="resetDatabaseSoftwareImageId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetDatabaseSoftwareImageId"></a>

```typescript
public resetDatabaseSoftwareImageId(): void
```

##### `resetDbName` <a name="resetDbName" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetDbName"></a>

```typescript
public resetDbName(): void
```

##### `resetDbSplitThreshold` <a name="resetDbSplitThreshold" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetDbSplitThreshold"></a>

```typescript
public resetDbSplitThreshold(): void
```

##### `resetDbUniqueName` <a name="resetDbUniqueName" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetDbUniqueName"></a>

```typescript
public resetDbUniqueName(): void
```

##### `resetDbVersion` <a name="resetDbVersion" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetDbVersion"></a>

```typescript
public resetDbVersion(): void
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDistributionAffinity` <a name="resetDistributionAffinity" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetDistributionAffinity"></a>

```typescript
public resetDistributionAffinity(): void
```

##### `resetFastStartFailOverLagLimitInSeconds` <a name="resetFastStartFailOverLagLimitInSeconds" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetFastStartFailOverLagLimitInSeconds"></a>

```typescript
public resetFastStartFailOverLagLimitInSeconds(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsAutomaticFailoverEnabled` <a name="resetIsAutomaticFailoverEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetIsAutomaticFailoverEnabled"></a>

```typescript
public resetIsAutomaticFailoverEnabled(): void
```

##### `resetIsDstFileUpdateEnabled` <a name="resetIsDstFileUpdateEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetIsDstFileUpdateEnabled"></a>

```typescript
public resetIsDstFileUpdateEnabled(): void
```

##### `resetKeyStoreId` <a name="resetKeyStoreId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetKeyStoreId"></a>

```typescript
public resetKeyStoreId(): void
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```

##### `resetMaintenanceWindowDetails` <a name="resetMaintenanceWindowDetails" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetMaintenanceWindowDetails"></a>

```typescript
public resetMaintenanceWindowDetails(): void
```

##### `resetNetServicesArchitecture` <a name="resetNetServicesArchitecture" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetNetServicesArchitecture"></a>

```typescript
public resetNetServicesArchitecture(): void
```

##### `resetPeerAutonomousContainerDatabaseBackupConfig` <a name="resetPeerAutonomousContainerDatabaseBackupConfig" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetPeerAutonomousContainerDatabaseBackupConfig"></a>

```typescript
public resetPeerAutonomousContainerDatabaseBackupConfig(): void
```

##### `resetPeerAutonomousContainerDatabaseCompartmentId` <a name="resetPeerAutonomousContainerDatabaseCompartmentId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetPeerAutonomousContainerDatabaseCompartmentId"></a>

```typescript
public resetPeerAutonomousContainerDatabaseCompartmentId(): void
```

##### `resetPeerAutonomousContainerDatabaseDisplayName` <a name="resetPeerAutonomousContainerDatabaseDisplayName" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetPeerAutonomousContainerDatabaseDisplayName"></a>

```typescript
public resetPeerAutonomousContainerDatabaseDisplayName(): void
```

##### `resetPeerAutonomousExadataInfrastructureId` <a name="resetPeerAutonomousExadataInfrastructureId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetPeerAutonomousExadataInfrastructureId"></a>

```typescript
public resetPeerAutonomousExadataInfrastructureId(): void
```

##### `resetPeerAutonomousVmClusterId` <a name="resetPeerAutonomousVmClusterId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetPeerAutonomousVmClusterId"></a>

```typescript
public resetPeerAutonomousVmClusterId(): void
```

##### `resetPeerCloudAutonomousVmClusterId` <a name="resetPeerCloudAutonomousVmClusterId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetPeerCloudAutonomousVmClusterId"></a>

```typescript
public resetPeerCloudAutonomousVmClusterId(): void
```

##### `resetPeerDbUniqueName` <a name="resetPeerDbUniqueName" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetPeerDbUniqueName"></a>

```typescript
public resetPeerDbUniqueName(): void
```

##### `resetProtectionMode` <a name="resetProtectionMode" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetProtectionMode"></a>

```typescript
public resetProtectionMode(): void
```

##### `resetRotateKeyTrigger` <a name="resetRotateKeyTrigger" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetRotateKeyTrigger"></a>

```typescript
public resetRotateKeyTrigger(): void
```

##### `resetServiceLevelAgreementType` <a name="resetServiceLevelAgreementType" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetServiceLevelAgreementType"></a>

```typescript
public resetServiceLevelAgreementType(): void
```

##### `resetStandbyMaintenanceBufferInDays` <a name="resetStandbyMaintenanceBufferInDays" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetStandbyMaintenanceBufferInDays"></a>

```typescript
public resetStandbyMaintenanceBufferInDays(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVaultId` <a name="resetVaultId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetVaultId"></a>

```typescript
public resetVaultId(): void
```

##### `resetVersionPreference` <a name="resetVersionPreference" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetVersionPreference"></a>

```typescript
public resetVersionPreference(): void
```

##### `resetVmFailoverReservation` <a name="resetVmFailoverReservation" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.resetVmFailoverReservation"></a>

```typescript
public resetVmFailoverReservation(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseAutonomousContainerDatabase resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.isConstruct"></a>

```typescript
import { databaseAutonomousContainerDatabase } from 'rhizo-co-terraform-provider-oci'

databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.isTerraformElement"></a>

```typescript
import { databaseAutonomousContainerDatabase } from 'rhizo-co-terraform-provider-oci'

databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.isTerraformResource"></a>

```typescript
import { databaseAutonomousContainerDatabase } from 'rhizo-co-terraform-provider-oci'

databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.generateConfigForImport"></a>

```typescript
import { databaseAutonomousContainerDatabase } from 'rhizo-co-terraform-provider-oci'

databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DatabaseAutonomousContainerDatabase resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseAutonomousContainerDatabase to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseAutonomousContainerDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseAutonomousContainerDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.availableCpus">availableCpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.backupConfig">backupConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference">DatabaseAutonomousContainerDatabaseBackupConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.computeModel">computeModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.dstFileVersion">dstFileVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.infrastructureType">infrastructureType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.keyHistoryEntry">keyHistoryEntry</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryList">DatabaseAutonomousContainerDatabaseKeyHistoryEntryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.keyStoreWalletName">keyStoreWalletName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.largestProvisionableAutonomousDatabaseInCpus">largestProvisionableAutonomousDatabaseInCpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.lastMaintenanceRunId">lastMaintenanceRunId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.listOneOffPatches">listOneOffPatches</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowList">DatabaseAutonomousContainerDatabaseMaintenanceWindowList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.maintenanceWindowDetails">maintenanceWindowDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference">DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.memoryPerOracleComputeUnitInGbs">memoryPerOracleComputeUnitInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.nextMaintenanceRunId">nextMaintenanceRunId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.patchId">patchId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.peerAutonomousContainerDatabaseBackupConfig">peerAutonomousContainerDatabaseBackupConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference">DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.provisionableCpus">provisionableCpus</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.provisionedCpus">provisionedCpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.reclaimableCpus">reclaimableCpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.reservedCpus">reservedCpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.timeOfLastBackup">timeOfLastBackup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference">DatabaseAutonomousContainerDatabaseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.timeSnapshotStandbyRevert">timeSnapshotStandbyRevert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.totalCpus">totalCpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.autonomousExadataInfrastructureIdInput">autonomousExadataInfrastructureIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.autonomousVmClusterIdInput">autonomousVmClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.backupConfigInput">backupConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfig">DatabaseAutonomousContainerDatabaseBackupConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.cloudAutonomousVmClusterIdInput">cloudAutonomousVmClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.databaseSoftwareImageIdInput">databaseSoftwareImageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.dbNameInput">dbNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.dbSplitThresholdInput">dbSplitThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.dbUniqueNameInput">dbUniqueNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.dbVersionInput">dbVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.distributionAffinityInput">distributionAffinityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.fastStartFailOverLagLimitInSecondsInput">fastStartFailOverLagLimitInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.isAutomaticFailoverEnabledInput">isAutomaticFailoverEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.isDstFileUpdateEnabledInput">isDstFileUpdateEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.keyStoreIdInput">keyStoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.maintenanceWindowDetailsInput">maintenanceWindowDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails">DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.netServicesArchitectureInput">netServicesArchitectureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.patchModelInput">patchModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.peerAutonomousContainerDatabaseBackupConfigInput">peerAutonomousContainerDatabaseBackupConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfig">DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.peerAutonomousContainerDatabaseCompartmentIdInput">peerAutonomousContainerDatabaseCompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.peerAutonomousContainerDatabaseDisplayNameInput">peerAutonomousContainerDatabaseDisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.peerAutonomousExadataInfrastructureIdInput">peerAutonomousExadataInfrastructureIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.peerAutonomousVmClusterIdInput">peerAutonomousVmClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.peerCloudAutonomousVmClusterIdInput">peerCloudAutonomousVmClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.peerDbUniqueNameInput">peerDbUniqueNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.protectionModeInput">protectionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.rotateKeyTriggerInput">rotateKeyTriggerInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.serviceLevelAgreementTypeInput">serviceLevelAgreementTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.standbyMaintenanceBufferInDaysInput">standbyMaintenanceBufferInDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeouts">DatabaseAutonomousContainerDatabaseTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.vaultIdInput">vaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.versionPreferenceInput">versionPreferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.vmFailoverReservationInput">vmFailoverReservationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.autonomousExadataInfrastructureId">autonomousExadataInfrastructureId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.autonomousVmClusterId">autonomousVmClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.cloudAutonomousVmClusterId">cloudAutonomousVmClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.databaseSoftwareImageId">databaseSoftwareImageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.dbName">dbName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.dbSplitThreshold">dbSplitThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.dbUniqueName">dbUniqueName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.dbVersion">dbVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.distributionAffinity">distributionAffinity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.fastStartFailOverLagLimitInSeconds">fastStartFailOverLagLimitInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.isAutomaticFailoverEnabled">isAutomaticFailoverEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.isDstFileUpdateEnabled">isDstFileUpdateEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.keyStoreId">keyStoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.netServicesArchitecture">netServicesArchitecture</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.patchModel">patchModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.peerAutonomousContainerDatabaseCompartmentId">peerAutonomousContainerDatabaseCompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.peerAutonomousContainerDatabaseDisplayName">peerAutonomousContainerDatabaseDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.peerAutonomousExadataInfrastructureId">peerAutonomousExadataInfrastructureId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.peerAutonomousVmClusterId">peerAutonomousVmClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.peerCloudAutonomousVmClusterId">peerCloudAutonomousVmClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.peerDbUniqueName">peerDbUniqueName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.protectionMode">protectionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.rotateKeyTrigger">rotateKeyTrigger</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.serviceLevelAgreementType">serviceLevelAgreementType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.standbyMaintenanceBufferInDays">standbyMaintenanceBufferInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.vaultId">vaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.versionPreference">versionPreference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.vmFailoverReservation">vmFailoverReservation</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

---

##### `availableCpus`<sup>Required</sup> <a name="availableCpus" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.availableCpus"></a>

```typescript
public readonly availableCpus: number;
```

- *Type:* number

---

##### `backupConfig`<sup>Required</sup> <a name="backupConfig" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.backupConfig"></a>

```typescript
public readonly backupConfig: DatabaseAutonomousContainerDatabaseBackupConfigOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference">DatabaseAutonomousContainerDatabaseBackupConfigOutputReference</a>

---

##### `computeModel`<sup>Required</sup> <a name="computeModel" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.computeModel"></a>

```typescript
public readonly computeModel: string;
```

- *Type:* string

---

##### `dstFileVersion`<sup>Required</sup> <a name="dstFileVersion" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.dstFileVersion"></a>

```typescript
public readonly dstFileVersion: string;
```

- *Type:* string

---

##### `infrastructureType`<sup>Required</sup> <a name="infrastructureType" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.infrastructureType"></a>

```typescript
public readonly infrastructureType: string;
```

- *Type:* string

---

##### `keyHistoryEntry`<sup>Required</sup> <a name="keyHistoryEntry" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.keyHistoryEntry"></a>

```typescript
public readonly keyHistoryEntry: DatabaseAutonomousContainerDatabaseKeyHistoryEntryList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryList">DatabaseAutonomousContainerDatabaseKeyHistoryEntryList</a>

---

##### `keyStoreWalletName`<sup>Required</sup> <a name="keyStoreWalletName" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.keyStoreWalletName"></a>

```typescript
public readonly keyStoreWalletName: string;
```

- *Type:* string

---

##### `largestProvisionableAutonomousDatabaseInCpus`<sup>Required</sup> <a name="largestProvisionableAutonomousDatabaseInCpus" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.largestProvisionableAutonomousDatabaseInCpus"></a>

```typescript
public readonly largestProvisionableAutonomousDatabaseInCpus: number;
```

- *Type:* number

---

##### `lastMaintenanceRunId`<sup>Required</sup> <a name="lastMaintenanceRunId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.lastMaintenanceRunId"></a>

```typescript
public readonly lastMaintenanceRunId: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `listOneOffPatches`<sup>Required</sup> <a name="listOneOffPatches" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.listOneOffPatches"></a>

```typescript
public readonly listOneOffPatches: string[];
```

- *Type:* string[]

---

##### `maintenanceWindow`<sup>Required</sup> <a name="maintenanceWindow" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.maintenanceWindow"></a>

```typescript
public readonly maintenanceWindow: DatabaseAutonomousContainerDatabaseMaintenanceWindowList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowList">DatabaseAutonomousContainerDatabaseMaintenanceWindowList</a>

---

##### `maintenanceWindowDetails`<sup>Required</sup> <a name="maintenanceWindowDetails" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.maintenanceWindowDetails"></a>

```typescript
public readonly maintenanceWindowDetails: DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference">DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference</a>

---

##### `memoryPerOracleComputeUnitInGbs`<sup>Required</sup> <a name="memoryPerOracleComputeUnitInGbs" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.memoryPerOracleComputeUnitInGbs"></a>

```typescript
public readonly memoryPerOracleComputeUnitInGbs: number;
```

- *Type:* number

---

##### `nextMaintenanceRunId`<sup>Required</sup> <a name="nextMaintenanceRunId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.nextMaintenanceRunId"></a>

```typescript
public readonly nextMaintenanceRunId: string;
```

- *Type:* string

---

##### `patchId`<sup>Required</sup> <a name="patchId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.patchId"></a>

```typescript
public readonly patchId: string;
```

- *Type:* string

---

##### `peerAutonomousContainerDatabaseBackupConfig`<sup>Required</sup> <a name="peerAutonomousContainerDatabaseBackupConfig" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.peerAutonomousContainerDatabaseBackupConfig"></a>

```typescript
public readonly peerAutonomousContainerDatabaseBackupConfig: DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference">DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference</a>

---

##### `provisionableCpus`<sup>Required</sup> <a name="provisionableCpus" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.provisionableCpus"></a>

```typescript
public readonly provisionableCpus: number[];
```

- *Type:* number[]

---

##### `provisionedCpus`<sup>Required</sup> <a name="provisionedCpus" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.provisionedCpus"></a>

```typescript
public readonly provisionedCpus: number;
```

- *Type:* number

---

##### `reclaimableCpus`<sup>Required</sup> <a name="reclaimableCpus" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.reclaimableCpus"></a>

```typescript
public readonly reclaimableCpus: number;
```

- *Type:* number

---

##### `reservedCpus`<sup>Required</sup> <a name="reservedCpus" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.reservedCpus"></a>

```typescript
public readonly reservedCpus: number;
```

- *Type:* number

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeOfLastBackup`<sup>Required</sup> <a name="timeOfLastBackup" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.timeOfLastBackup"></a>

```typescript
public readonly timeOfLastBackup: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.timeouts"></a>

```typescript
public readonly timeouts: DatabaseAutonomousContainerDatabaseTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference">DatabaseAutonomousContainerDatabaseTimeoutsOutputReference</a>

---

##### `timeSnapshotStandbyRevert`<sup>Required</sup> <a name="timeSnapshotStandbyRevert" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.timeSnapshotStandbyRevert"></a>

```typescript
public readonly timeSnapshotStandbyRevert: string;
```

- *Type:* string

---

##### `totalCpus`<sup>Required</sup> <a name="totalCpus" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.totalCpus"></a>

```typescript
public readonly totalCpus: number;
```

- *Type:* number

---

##### `autonomousExadataInfrastructureIdInput`<sup>Optional</sup> <a name="autonomousExadataInfrastructureIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.autonomousExadataInfrastructureIdInput"></a>

```typescript
public readonly autonomousExadataInfrastructureIdInput: string;
```

- *Type:* string

---

##### `autonomousVmClusterIdInput`<sup>Optional</sup> <a name="autonomousVmClusterIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.autonomousVmClusterIdInput"></a>

```typescript
public readonly autonomousVmClusterIdInput: string;
```

- *Type:* string

---

##### `backupConfigInput`<sup>Optional</sup> <a name="backupConfigInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.backupConfigInput"></a>

```typescript
public readonly backupConfigInput: DatabaseAutonomousContainerDatabaseBackupConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfig">DatabaseAutonomousContainerDatabaseBackupConfig</a>

---

##### `cloudAutonomousVmClusterIdInput`<sup>Optional</sup> <a name="cloudAutonomousVmClusterIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.cloudAutonomousVmClusterIdInput"></a>

```typescript
public readonly cloudAutonomousVmClusterIdInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `databaseSoftwareImageIdInput`<sup>Optional</sup> <a name="databaseSoftwareImageIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.databaseSoftwareImageIdInput"></a>

```typescript
public readonly databaseSoftwareImageIdInput: string;
```

- *Type:* string

---

##### `dbNameInput`<sup>Optional</sup> <a name="dbNameInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.dbNameInput"></a>

```typescript
public readonly dbNameInput: string;
```

- *Type:* string

---

##### `dbSplitThresholdInput`<sup>Optional</sup> <a name="dbSplitThresholdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.dbSplitThresholdInput"></a>

```typescript
public readonly dbSplitThresholdInput: number;
```

- *Type:* number

---

##### `dbUniqueNameInput`<sup>Optional</sup> <a name="dbUniqueNameInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.dbUniqueNameInput"></a>

```typescript
public readonly dbUniqueNameInput: string;
```

- *Type:* string

---

##### `dbVersionInput`<sup>Optional</sup> <a name="dbVersionInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.dbVersionInput"></a>

```typescript
public readonly dbVersionInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `distributionAffinityInput`<sup>Optional</sup> <a name="distributionAffinityInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.distributionAffinityInput"></a>

```typescript
public readonly distributionAffinityInput: string;
```

- *Type:* string

---

##### `fastStartFailOverLagLimitInSecondsInput`<sup>Optional</sup> <a name="fastStartFailOverLagLimitInSecondsInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.fastStartFailOverLagLimitInSecondsInput"></a>

```typescript
public readonly fastStartFailOverLagLimitInSecondsInput: number;
```

- *Type:* number

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isAutomaticFailoverEnabledInput`<sup>Optional</sup> <a name="isAutomaticFailoverEnabledInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.isAutomaticFailoverEnabledInput"></a>

```typescript
public readonly isAutomaticFailoverEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isDstFileUpdateEnabledInput`<sup>Optional</sup> <a name="isDstFileUpdateEnabledInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.isDstFileUpdateEnabledInput"></a>

```typescript
public readonly isDstFileUpdateEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `keyStoreIdInput`<sup>Optional</sup> <a name="keyStoreIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.keyStoreIdInput"></a>

```typescript
public readonly keyStoreIdInput: string;
```

- *Type:* string

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `maintenanceWindowDetailsInput`<sup>Optional</sup> <a name="maintenanceWindowDetailsInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.maintenanceWindowDetailsInput"></a>

```typescript
public readonly maintenanceWindowDetailsInput: DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails">DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails</a>

---

##### `netServicesArchitectureInput`<sup>Optional</sup> <a name="netServicesArchitectureInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.netServicesArchitectureInput"></a>

```typescript
public readonly netServicesArchitectureInput: string;
```

- *Type:* string

---

##### `patchModelInput`<sup>Optional</sup> <a name="patchModelInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.patchModelInput"></a>

```typescript
public readonly patchModelInput: string;
```

- *Type:* string

---

##### `peerAutonomousContainerDatabaseBackupConfigInput`<sup>Optional</sup> <a name="peerAutonomousContainerDatabaseBackupConfigInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.peerAutonomousContainerDatabaseBackupConfigInput"></a>

```typescript
public readonly peerAutonomousContainerDatabaseBackupConfigInput: DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfig">DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfig</a>

---

##### `peerAutonomousContainerDatabaseCompartmentIdInput`<sup>Optional</sup> <a name="peerAutonomousContainerDatabaseCompartmentIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.peerAutonomousContainerDatabaseCompartmentIdInput"></a>

```typescript
public readonly peerAutonomousContainerDatabaseCompartmentIdInput: string;
```

- *Type:* string

---

##### `peerAutonomousContainerDatabaseDisplayNameInput`<sup>Optional</sup> <a name="peerAutonomousContainerDatabaseDisplayNameInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.peerAutonomousContainerDatabaseDisplayNameInput"></a>

```typescript
public readonly peerAutonomousContainerDatabaseDisplayNameInput: string;
```

- *Type:* string

---

##### `peerAutonomousExadataInfrastructureIdInput`<sup>Optional</sup> <a name="peerAutonomousExadataInfrastructureIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.peerAutonomousExadataInfrastructureIdInput"></a>

```typescript
public readonly peerAutonomousExadataInfrastructureIdInput: string;
```

- *Type:* string

---

##### `peerAutonomousVmClusterIdInput`<sup>Optional</sup> <a name="peerAutonomousVmClusterIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.peerAutonomousVmClusterIdInput"></a>

```typescript
public readonly peerAutonomousVmClusterIdInput: string;
```

- *Type:* string

---

##### `peerCloudAutonomousVmClusterIdInput`<sup>Optional</sup> <a name="peerCloudAutonomousVmClusterIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.peerCloudAutonomousVmClusterIdInput"></a>

```typescript
public readonly peerCloudAutonomousVmClusterIdInput: string;
```

- *Type:* string

---

##### `peerDbUniqueNameInput`<sup>Optional</sup> <a name="peerDbUniqueNameInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.peerDbUniqueNameInput"></a>

```typescript
public readonly peerDbUniqueNameInput: string;
```

- *Type:* string

---

##### `protectionModeInput`<sup>Optional</sup> <a name="protectionModeInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.protectionModeInput"></a>

```typescript
public readonly protectionModeInput: string;
```

- *Type:* string

---

##### `rotateKeyTriggerInput`<sup>Optional</sup> <a name="rotateKeyTriggerInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.rotateKeyTriggerInput"></a>

```typescript
public readonly rotateKeyTriggerInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `serviceLevelAgreementTypeInput`<sup>Optional</sup> <a name="serviceLevelAgreementTypeInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.serviceLevelAgreementTypeInput"></a>

```typescript
public readonly serviceLevelAgreementTypeInput: string;
```

- *Type:* string

---

##### `standbyMaintenanceBufferInDaysInput`<sup>Optional</sup> <a name="standbyMaintenanceBufferInDaysInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.standbyMaintenanceBufferInDaysInput"></a>

```typescript
public readonly standbyMaintenanceBufferInDaysInput: number;
```

- *Type:* number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DatabaseAutonomousContainerDatabaseTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeouts">DatabaseAutonomousContainerDatabaseTimeouts</a>

---

##### `vaultIdInput`<sup>Optional</sup> <a name="vaultIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.vaultIdInput"></a>

```typescript
public readonly vaultIdInput: string;
```

- *Type:* string

---

##### `versionPreferenceInput`<sup>Optional</sup> <a name="versionPreferenceInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.versionPreferenceInput"></a>

```typescript
public readonly versionPreferenceInput: string;
```

- *Type:* string

---

##### `vmFailoverReservationInput`<sup>Optional</sup> <a name="vmFailoverReservationInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.vmFailoverReservationInput"></a>

```typescript
public readonly vmFailoverReservationInput: number;
```

- *Type:* number

---

##### `autonomousExadataInfrastructureId`<sup>Required</sup> <a name="autonomousExadataInfrastructureId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.autonomousExadataInfrastructureId"></a>

```typescript
public readonly autonomousExadataInfrastructureId: string;
```

- *Type:* string

---

##### `autonomousVmClusterId`<sup>Required</sup> <a name="autonomousVmClusterId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.autonomousVmClusterId"></a>

```typescript
public readonly autonomousVmClusterId: string;
```

- *Type:* string

---

##### `cloudAutonomousVmClusterId`<sup>Required</sup> <a name="cloudAutonomousVmClusterId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.cloudAutonomousVmClusterId"></a>

```typescript
public readonly cloudAutonomousVmClusterId: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `databaseSoftwareImageId`<sup>Required</sup> <a name="databaseSoftwareImageId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.databaseSoftwareImageId"></a>

```typescript
public readonly databaseSoftwareImageId: string;
```

- *Type:* string

---

##### `dbName`<sup>Required</sup> <a name="dbName" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.dbName"></a>

```typescript
public readonly dbName: string;
```

- *Type:* string

---

##### `dbSplitThreshold`<sup>Required</sup> <a name="dbSplitThreshold" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.dbSplitThreshold"></a>

```typescript
public readonly dbSplitThreshold: number;
```

- *Type:* number

---

##### `dbUniqueName`<sup>Required</sup> <a name="dbUniqueName" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.dbUniqueName"></a>

```typescript
public readonly dbUniqueName: string;
```

- *Type:* string

---

##### `dbVersion`<sup>Required</sup> <a name="dbVersion" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.dbVersion"></a>

```typescript
public readonly dbVersion: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `distributionAffinity`<sup>Required</sup> <a name="distributionAffinity" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.distributionAffinity"></a>

```typescript
public readonly distributionAffinity: string;
```

- *Type:* string

---

##### `fastStartFailOverLagLimitInSeconds`<sup>Required</sup> <a name="fastStartFailOverLagLimitInSeconds" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.fastStartFailOverLagLimitInSeconds"></a>

```typescript
public readonly fastStartFailOverLagLimitInSeconds: number;
```

- *Type:* number

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isAutomaticFailoverEnabled`<sup>Required</sup> <a name="isAutomaticFailoverEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.isAutomaticFailoverEnabled"></a>

```typescript
public readonly isAutomaticFailoverEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isDstFileUpdateEnabled`<sup>Required</sup> <a name="isDstFileUpdateEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.isDstFileUpdateEnabled"></a>

```typescript
public readonly isDstFileUpdateEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `keyStoreId`<sup>Required</sup> <a name="keyStoreId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.keyStoreId"></a>

```typescript
public readonly keyStoreId: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `netServicesArchitecture`<sup>Required</sup> <a name="netServicesArchitecture" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.netServicesArchitecture"></a>

```typescript
public readonly netServicesArchitecture: string;
```

- *Type:* string

---

##### `patchModel`<sup>Required</sup> <a name="patchModel" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.patchModel"></a>

```typescript
public readonly patchModel: string;
```

- *Type:* string

---

##### `peerAutonomousContainerDatabaseCompartmentId`<sup>Required</sup> <a name="peerAutonomousContainerDatabaseCompartmentId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.peerAutonomousContainerDatabaseCompartmentId"></a>

```typescript
public readonly peerAutonomousContainerDatabaseCompartmentId: string;
```

- *Type:* string

---

##### `peerAutonomousContainerDatabaseDisplayName`<sup>Required</sup> <a name="peerAutonomousContainerDatabaseDisplayName" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.peerAutonomousContainerDatabaseDisplayName"></a>

```typescript
public readonly peerAutonomousContainerDatabaseDisplayName: string;
```

- *Type:* string

---

##### `peerAutonomousExadataInfrastructureId`<sup>Required</sup> <a name="peerAutonomousExadataInfrastructureId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.peerAutonomousExadataInfrastructureId"></a>

```typescript
public readonly peerAutonomousExadataInfrastructureId: string;
```

- *Type:* string

---

##### `peerAutonomousVmClusterId`<sup>Required</sup> <a name="peerAutonomousVmClusterId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.peerAutonomousVmClusterId"></a>

```typescript
public readonly peerAutonomousVmClusterId: string;
```

- *Type:* string

---

##### `peerCloudAutonomousVmClusterId`<sup>Required</sup> <a name="peerCloudAutonomousVmClusterId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.peerCloudAutonomousVmClusterId"></a>

```typescript
public readonly peerCloudAutonomousVmClusterId: string;
```

- *Type:* string

---

##### `peerDbUniqueName`<sup>Required</sup> <a name="peerDbUniqueName" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.peerDbUniqueName"></a>

```typescript
public readonly peerDbUniqueName: string;
```

- *Type:* string

---

##### `protectionMode`<sup>Required</sup> <a name="protectionMode" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.protectionMode"></a>

```typescript
public readonly protectionMode: string;
```

- *Type:* string

---

##### `rotateKeyTrigger`<sup>Required</sup> <a name="rotateKeyTrigger" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.rotateKeyTrigger"></a>

```typescript
public readonly rotateKeyTrigger: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `serviceLevelAgreementType`<sup>Required</sup> <a name="serviceLevelAgreementType" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.serviceLevelAgreementType"></a>

```typescript
public readonly serviceLevelAgreementType: string;
```

- *Type:* string

---

##### `standbyMaintenanceBufferInDays`<sup>Required</sup> <a name="standbyMaintenanceBufferInDays" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.standbyMaintenanceBufferInDays"></a>

```typescript
public readonly standbyMaintenanceBufferInDays: number;
```

- *Type:* number

---

##### `vaultId`<sup>Required</sup> <a name="vaultId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.vaultId"></a>

```typescript
public readonly vaultId: string;
```

- *Type:* string

---

##### `versionPreference`<sup>Required</sup> <a name="versionPreference" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.versionPreference"></a>

```typescript
public readonly versionPreference: string;
```

- *Type:* string

---

##### `vmFailoverReservation`<sup>Required</sup> <a name="vmFailoverReservation" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.vmFailoverReservation"></a>

```typescript
public readonly vmFailoverReservation: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabase.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseAutonomousContainerDatabaseBackupConfig <a name="DatabaseAutonomousContainerDatabaseBackupConfig" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfig.Initializer"></a>

```typescript
import { databaseAutonomousContainerDatabase } from 'rhizo-co-terraform-provider-oci'

const databaseAutonomousContainerDatabaseBackupConfig: databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfig.property.backupDestinationDetails">backupDestinationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetails">DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetails</a></code> | backup_destination_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfig.property.recoveryWindowInDays">recoveryWindowInDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#recovery_window_in_days DatabaseAutonomousContainerDatabase#recovery_window_in_days}. |

---

##### `backupDestinationDetails`<sup>Optional</sup> <a name="backupDestinationDetails" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfig.property.backupDestinationDetails"></a>

```typescript
public readonly backupDestinationDetails: DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetails">DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetails</a>

backup_destination_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#backup_destination_details DatabaseAutonomousContainerDatabase#backup_destination_details}

---

##### `recoveryWindowInDays`<sup>Optional</sup> <a name="recoveryWindowInDays" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfig.property.recoveryWindowInDays"></a>

```typescript
public readonly recoveryWindowInDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#recovery_window_in_days DatabaseAutonomousContainerDatabase#recovery_window_in_days}.

---

### DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetails <a name="DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetails" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetails.Initializer"></a>

```typescript
import { databaseAutonomousContainerDatabase } from 'rhizo-co-terraform-provider-oci'

const databaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetails: databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetails.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#type DatabaseAutonomousContainerDatabase#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetails.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#id DatabaseAutonomousContainerDatabase#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetails.property.internetProxy">internetProxy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#internet_proxy DatabaseAutonomousContainerDatabase#internet_proxy}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetails.property.vpcPassword">vpcPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#vpc_password DatabaseAutonomousContainerDatabase#vpc_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetails.property.vpcUser">vpcUser</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#vpc_user DatabaseAutonomousContainerDatabase#vpc_user}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetails.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#type DatabaseAutonomousContainerDatabase#type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetails.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#id DatabaseAutonomousContainerDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `internetProxy`<sup>Optional</sup> <a name="internetProxy" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetails.property.internetProxy"></a>

```typescript
public readonly internetProxy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#internet_proxy DatabaseAutonomousContainerDatabase#internet_proxy}.

---

##### `vpcPassword`<sup>Optional</sup> <a name="vpcPassword" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetails.property.vpcPassword"></a>

```typescript
public readonly vpcPassword: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#vpc_password DatabaseAutonomousContainerDatabase#vpc_password}.

---

##### `vpcUser`<sup>Optional</sup> <a name="vpcUser" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetails.property.vpcUser"></a>

```typescript
public readonly vpcUser: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#vpc_user DatabaseAutonomousContainerDatabase#vpc_user}.

---

### DatabaseAutonomousContainerDatabaseConfig <a name="DatabaseAutonomousContainerDatabaseConfig" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.Initializer"></a>

```typescript
import { databaseAutonomousContainerDatabase } from 'rhizo-co-terraform-provider-oci'

const databaseAutonomousContainerDatabaseConfig: databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#display_name DatabaseAutonomousContainerDatabase#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.patchModel">patchModel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#patch_model DatabaseAutonomousContainerDatabase#patch_model}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.autonomousExadataInfrastructureId">autonomousExadataInfrastructureId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#autonomous_exadata_infrastructure_id DatabaseAutonomousContainerDatabase#autonomous_exadata_infrastructure_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.autonomousVmClusterId">autonomousVmClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#autonomous_vm_cluster_id DatabaseAutonomousContainerDatabase#autonomous_vm_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.backupConfig">backupConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfig">DatabaseAutonomousContainerDatabaseBackupConfig</a></code> | backup_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.cloudAutonomousVmClusterId">cloudAutonomousVmClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#cloud_autonomous_vm_cluster_id DatabaseAutonomousContainerDatabase#cloud_autonomous_vm_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#compartment_id DatabaseAutonomousContainerDatabase#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.databaseSoftwareImageId">databaseSoftwareImageId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#database_software_image_id DatabaseAutonomousContainerDatabase#database_software_image_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.dbName">dbName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#db_name DatabaseAutonomousContainerDatabase#db_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.dbSplitThreshold">dbSplitThreshold</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#db_split_threshold DatabaseAutonomousContainerDatabase#db_split_threshold}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.dbUniqueName">dbUniqueName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#db_unique_name DatabaseAutonomousContainerDatabase#db_unique_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.dbVersion">dbVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#db_version DatabaseAutonomousContainerDatabase#db_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#defined_tags DatabaseAutonomousContainerDatabase#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.distributionAffinity">distributionAffinity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#distribution_affinity DatabaseAutonomousContainerDatabase#distribution_affinity}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.fastStartFailOverLagLimitInSeconds">fastStartFailOverLagLimitInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#fast_start_fail_over_lag_limit_in_seconds DatabaseAutonomousContainerDatabase#fast_start_fail_over_lag_limit_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#freeform_tags DatabaseAutonomousContainerDatabase#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#id DatabaseAutonomousContainerDatabase#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.isAutomaticFailoverEnabled">isAutomaticFailoverEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#is_automatic_failover_enabled DatabaseAutonomousContainerDatabase#is_automatic_failover_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.isDstFileUpdateEnabled">isDstFileUpdateEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#is_dst_file_update_enabled DatabaseAutonomousContainerDatabase#is_dst_file_update_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.keyStoreId">keyStoreId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#key_store_id DatabaseAutonomousContainerDatabase#key_store_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#kms_key_id DatabaseAutonomousContainerDatabase#kms_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.maintenanceWindowDetails">maintenanceWindowDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails">DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails</a></code> | maintenance_window_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.netServicesArchitecture">netServicesArchitecture</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#net_services_architecture DatabaseAutonomousContainerDatabase#net_services_architecture}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.peerAutonomousContainerDatabaseBackupConfig">peerAutonomousContainerDatabaseBackupConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfig">DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfig</a></code> | peer_autonomous_container_database_backup_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.peerAutonomousContainerDatabaseCompartmentId">peerAutonomousContainerDatabaseCompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#peer_autonomous_container_database_compartment_id DatabaseAutonomousContainerDatabase#peer_autonomous_container_database_compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.peerAutonomousContainerDatabaseDisplayName">peerAutonomousContainerDatabaseDisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#peer_autonomous_container_database_display_name DatabaseAutonomousContainerDatabase#peer_autonomous_container_database_display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.peerAutonomousExadataInfrastructureId">peerAutonomousExadataInfrastructureId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#peer_autonomous_exadata_infrastructure_id DatabaseAutonomousContainerDatabase#peer_autonomous_exadata_infrastructure_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.peerAutonomousVmClusterId">peerAutonomousVmClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#peer_autonomous_vm_cluster_id DatabaseAutonomousContainerDatabase#peer_autonomous_vm_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.peerCloudAutonomousVmClusterId">peerCloudAutonomousVmClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#peer_cloud_autonomous_vm_cluster_id DatabaseAutonomousContainerDatabase#peer_cloud_autonomous_vm_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.peerDbUniqueName">peerDbUniqueName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#peer_db_unique_name DatabaseAutonomousContainerDatabase#peer_db_unique_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.protectionMode">protectionMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#protection_mode DatabaseAutonomousContainerDatabase#protection_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.rotateKeyTrigger">rotateKeyTrigger</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#rotate_key_trigger DatabaseAutonomousContainerDatabase#rotate_key_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.serviceLevelAgreementType">serviceLevelAgreementType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#service_level_agreement_type DatabaseAutonomousContainerDatabase#service_level_agreement_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.standbyMaintenanceBufferInDays">standbyMaintenanceBufferInDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#standby_maintenance_buffer_in_days DatabaseAutonomousContainerDatabase#standby_maintenance_buffer_in_days}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeouts">DatabaseAutonomousContainerDatabaseTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.vaultId">vaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#vault_id DatabaseAutonomousContainerDatabase#vault_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.versionPreference">versionPreference</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#version_preference DatabaseAutonomousContainerDatabase#version_preference}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.vmFailoverReservation">vmFailoverReservation</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#vm_failover_reservation DatabaseAutonomousContainerDatabase#vm_failover_reservation}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#display_name DatabaseAutonomousContainerDatabase#display_name}.

---

##### `patchModel`<sup>Required</sup> <a name="patchModel" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.patchModel"></a>

```typescript
public readonly patchModel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#patch_model DatabaseAutonomousContainerDatabase#patch_model}.

---

##### `autonomousExadataInfrastructureId`<sup>Optional</sup> <a name="autonomousExadataInfrastructureId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.autonomousExadataInfrastructureId"></a>

```typescript
public readonly autonomousExadataInfrastructureId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#autonomous_exadata_infrastructure_id DatabaseAutonomousContainerDatabase#autonomous_exadata_infrastructure_id}.

---

##### `autonomousVmClusterId`<sup>Optional</sup> <a name="autonomousVmClusterId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.autonomousVmClusterId"></a>

```typescript
public readonly autonomousVmClusterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#autonomous_vm_cluster_id DatabaseAutonomousContainerDatabase#autonomous_vm_cluster_id}.

---

##### `backupConfig`<sup>Optional</sup> <a name="backupConfig" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.backupConfig"></a>

```typescript
public readonly backupConfig: DatabaseAutonomousContainerDatabaseBackupConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfig">DatabaseAutonomousContainerDatabaseBackupConfig</a>

backup_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#backup_config DatabaseAutonomousContainerDatabase#backup_config}

---

##### `cloudAutonomousVmClusterId`<sup>Optional</sup> <a name="cloudAutonomousVmClusterId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.cloudAutonomousVmClusterId"></a>

```typescript
public readonly cloudAutonomousVmClusterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#cloud_autonomous_vm_cluster_id DatabaseAutonomousContainerDatabase#cloud_autonomous_vm_cluster_id}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#compartment_id DatabaseAutonomousContainerDatabase#compartment_id}.

---

##### `databaseSoftwareImageId`<sup>Optional</sup> <a name="databaseSoftwareImageId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.databaseSoftwareImageId"></a>

```typescript
public readonly databaseSoftwareImageId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#database_software_image_id DatabaseAutonomousContainerDatabase#database_software_image_id}.

---

##### `dbName`<sup>Optional</sup> <a name="dbName" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.dbName"></a>

```typescript
public readonly dbName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#db_name DatabaseAutonomousContainerDatabase#db_name}.

---

##### `dbSplitThreshold`<sup>Optional</sup> <a name="dbSplitThreshold" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.dbSplitThreshold"></a>

```typescript
public readonly dbSplitThreshold: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#db_split_threshold DatabaseAutonomousContainerDatabase#db_split_threshold}.

---

##### `dbUniqueName`<sup>Optional</sup> <a name="dbUniqueName" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.dbUniqueName"></a>

```typescript
public readonly dbUniqueName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#db_unique_name DatabaseAutonomousContainerDatabase#db_unique_name}.

---

##### `dbVersion`<sup>Optional</sup> <a name="dbVersion" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.dbVersion"></a>

```typescript
public readonly dbVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#db_version DatabaseAutonomousContainerDatabase#db_version}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#defined_tags DatabaseAutonomousContainerDatabase#defined_tags}.

---

##### `distributionAffinity`<sup>Optional</sup> <a name="distributionAffinity" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.distributionAffinity"></a>

```typescript
public readonly distributionAffinity: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#distribution_affinity DatabaseAutonomousContainerDatabase#distribution_affinity}.

---

##### `fastStartFailOverLagLimitInSeconds`<sup>Optional</sup> <a name="fastStartFailOverLagLimitInSeconds" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.fastStartFailOverLagLimitInSeconds"></a>

```typescript
public readonly fastStartFailOverLagLimitInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#fast_start_fail_over_lag_limit_in_seconds DatabaseAutonomousContainerDatabase#fast_start_fail_over_lag_limit_in_seconds}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#freeform_tags DatabaseAutonomousContainerDatabase#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#id DatabaseAutonomousContainerDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isAutomaticFailoverEnabled`<sup>Optional</sup> <a name="isAutomaticFailoverEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.isAutomaticFailoverEnabled"></a>

```typescript
public readonly isAutomaticFailoverEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#is_automatic_failover_enabled DatabaseAutonomousContainerDatabase#is_automatic_failover_enabled}.

---

##### `isDstFileUpdateEnabled`<sup>Optional</sup> <a name="isDstFileUpdateEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.isDstFileUpdateEnabled"></a>

```typescript
public readonly isDstFileUpdateEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#is_dst_file_update_enabled DatabaseAutonomousContainerDatabase#is_dst_file_update_enabled}.

---

##### `keyStoreId`<sup>Optional</sup> <a name="keyStoreId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.keyStoreId"></a>

```typescript
public readonly keyStoreId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#key_store_id DatabaseAutonomousContainerDatabase#key_store_id}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#kms_key_id DatabaseAutonomousContainerDatabase#kms_key_id}.

---

##### `maintenanceWindowDetails`<sup>Optional</sup> <a name="maintenanceWindowDetails" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.maintenanceWindowDetails"></a>

```typescript
public readonly maintenanceWindowDetails: DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails">DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails</a>

maintenance_window_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#maintenance_window_details DatabaseAutonomousContainerDatabase#maintenance_window_details}

---

##### `netServicesArchitecture`<sup>Optional</sup> <a name="netServicesArchitecture" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.netServicesArchitecture"></a>

```typescript
public readonly netServicesArchitecture: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#net_services_architecture DatabaseAutonomousContainerDatabase#net_services_architecture}.

---

##### `peerAutonomousContainerDatabaseBackupConfig`<sup>Optional</sup> <a name="peerAutonomousContainerDatabaseBackupConfig" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.peerAutonomousContainerDatabaseBackupConfig"></a>

```typescript
public readonly peerAutonomousContainerDatabaseBackupConfig: DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfig">DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfig</a>

peer_autonomous_container_database_backup_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#peer_autonomous_container_database_backup_config DatabaseAutonomousContainerDatabase#peer_autonomous_container_database_backup_config}

---

##### `peerAutonomousContainerDatabaseCompartmentId`<sup>Optional</sup> <a name="peerAutonomousContainerDatabaseCompartmentId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.peerAutonomousContainerDatabaseCompartmentId"></a>

```typescript
public readonly peerAutonomousContainerDatabaseCompartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#peer_autonomous_container_database_compartment_id DatabaseAutonomousContainerDatabase#peer_autonomous_container_database_compartment_id}.

---

##### `peerAutonomousContainerDatabaseDisplayName`<sup>Optional</sup> <a name="peerAutonomousContainerDatabaseDisplayName" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.peerAutonomousContainerDatabaseDisplayName"></a>

```typescript
public readonly peerAutonomousContainerDatabaseDisplayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#peer_autonomous_container_database_display_name DatabaseAutonomousContainerDatabase#peer_autonomous_container_database_display_name}.

---

##### `peerAutonomousExadataInfrastructureId`<sup>Optional</sup> <a name="peerAutonomousExadataInfrastructureId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.peerAutonomousExadataInfrastructureId"></a>

```typescript
public readonly peerAutonomousExadataInfrastructureId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#peer_autonomous_exadata_infrastructure_id DatabaseAutonomousContainerDatabase#peer_autonomous_exadata_infrastructure_id}.

---

##### `peerAutonomousVmClusterId`<sup>Optional</sup> <a name="peerAutonomousVmClusterId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.peerAutonomousVmClusterId"></a>

```typescript
public readonly peerAutonomousVmClusterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#peer_autonomous_vm_cluster_id DatabaseAutonomousContainerDatabase#peer_autonomous_vm_cluster_id}.

---

##### `peerCloudAutonomousVmClusterId`<sup>Optional</sup> <a name="peerCloudAutonomousVmClusterId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.peerCloudAutonomousVmClusterId"></a>

```typescript
public readonly peerCloudAutonomousVmClusterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#peer_cloud_autonomous_vm_cluster_id DatabaseAutonomousContainerDatabase#peer_cloud_autonomous_vm_cluster_id}.

---

##### `peerDbUniqueName`<sup>Optional</sup> <a name="peerDbUniqueName" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.peerDbUniqueName"></a>

```typescript
public readonly peerDbUniqueName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#peer_db_unique_name DatabaseAutonomousContainerDatabase#peer_db_unique_name}.

---

##### `protectionMode`<sup>Optional</sup> <a name="protectionMode" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.protectionMode"></a>

```typescript
public readonly protectionMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#protection_mode DatabaseAutonomousContainerDatabase#protection_mode}.

---

##### `rotateKeyTrigger`<sup>Optional</sup> <a name="rotateKeyTrigger" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.rotateKeyTrigger"></a>

```typescript
public readonly rotateKeyTrigger: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#rotate_key_trigger DatabaseAutonomousContainerDatabase#rotate_key_trigger}.

---

##### `serviceLevelAgreementType`<sup>Optional</sup> <a name="serviceLevelAgreementType" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.serviceLevelAgreementType"></a>

```typescript
public readonly serviceLevelAgreementType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#service_level_agreement_type DatabaseAutonomousContainerDatabase#service_level_agreement_type}.

---

##### `standbyMaintenanceBufferInDays`<sup>Optional</sup> <a name="standbyMaintenanceBufferInDays" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.standbyMaintenanceBufferInDays"></a>

```typescript
public readonly standbyMaintenanceBufferInDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#standby_maintenance_buffer_in_days DatabaseAutonomousContainerDatabase#standby_maintenance_buffer_in_days}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DatabaseAutonomousContainerDatabaseTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeouts">DatabaseAutonomousContainerDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#timeouts DatabaseAutonomousContainerDatabase#timeouts}

---

##### `vaultId`<sup>Optional</sup> <a name="vaultId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.vaultId"></a>

```typescript
public readonly vaultId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#vault_id DatabaseAutonomousContainerDatabase#vault_id}.

---

##### `versionPreference`<sup>Optional</sup> <a name="versionPreference" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.versionPreference"></a>

```typescript
public readonly versionPreference: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#version_preference DatabaseAutonomousContainerDatabase#version_preference}.

---

##### `vmFailoverReservation`<sup>Optional</sup> <a name="vmFailoverReservation" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseConfig.property.vmFailoverReservation"></a>

```typescript
public readonly vmFailoverReservation: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#vm_failover_reservation DatabaseAutonomousContainerDatabase#vm_failover_reservation}.

---

### DatabaseAutonomousContainerDatabaseKeyHistoryEntry <a name="DatabaseAutonomousContainerDatabaseKeyHistoryEntry" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntry"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntry.Initializer"></a>

```typescript
import { databaseAutonomousContainerDatabase } from 'rhizo-co-terraform-provider-oci'

const databaseAutonomousContainerDatabaseKeyHistoryEntry: databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntry = { ... }
```


### DatabaseAutonomousContainerDatabaseMaintenanceWindow <a name="DatabaseAutonomousContainerDatabaseMaintenanceWindow" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindow.Initializer"></a>

```typescript
import { databaseAutonomousContainerDatabase } from 'rhizo-co-terraform-provider-oci'

const databaseAutonomousContainerDatabaseMaintenanceWindow: databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindow = { ... }
```


### DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeek <a name="DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeek" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeek"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeek.Initializer"></a>

```typescript
import { databaseAutonomousContainerDatabase } from 'rhizo-co-terraform-provider-oci'

const databaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeek: databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeek = { ... }
```


### DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails <a name="DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails.Initializer"></a>

```typescript
import { databaseAutonomousContainerDatabase } from 'rhizo-co-terraform-provider-oci'

const databaseAutonomousContainerDatabaseMaintenanceWindowDetails: databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails.property.customActionTimeoutInMins">customActionTimeoutInMins</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#custom_action_timeout_in_mins DatabaseAutonomousContainerDatabase#custom_action_timeout_in_mins}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails.property.daysOfWeek">daysOfWeek</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeek">DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeek</a>[]</code> | days_of_week block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails.property.hoursOfDay">hoursOfDay</a></code> | <code>number[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#hours_of_day DatabaseAutonomousContainerDatabase#hours_of_day}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails.property.isCustomActionTimeoutEnabled">isCustomActionTimeoutEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#is_custom_action_timeout_enabled DatabaseAutonomousContainerDatabase#is_custom_action_timeout_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails.property.isMonthlyPatchingEnabled">isMonthlyPatchingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#is_monthly_patching_enabled DatabaseAutonomousContainerDatabase#is_monthly_patching_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails.property.leadTimeInWeeks">leadTimeInWeeks</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#lead_time_in_weeks DatabaseAutonomousContainerDatabase#lead_time_in_weeks}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails.property.months">months</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonths">DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonths</a>[]</code> | months block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails.property.patchingMode">patchingMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#patching_mode DatabaseAutonomousContainerDatabase#patching_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails.property.preference">preference</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#preference DatabaseAutonomousContainerDatabase#preference}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails.property.skipRu">skipRu</a></code> | <code>cdktf.IResolvable \| boolean \| cdktf.IResolvable[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#skip_ru DatabaseAutonomousContainerDatabase#skip_ru}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails.property.weeksOfMonth">weeksOfMonth</a></code> | <code>number[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#weeks_of_month DatabaseAutonomousContainerDatabase#weeks_of_month}. |

---

##### `customActionTimeoutInMins`<sup>Optional</sup> <a name="customActionTimeoutInMins" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails.property.customActionTimeoutInMins"></a>

```typescript
public readonly customActionTimeoutInMins: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#custom_action_timeout_in_mins DatabaseAutonomousContainerDatabase#custom_action_timeout_in_mins}.

---

##### `daysOfWeek`<sup>Optional</sup> <a name="daysOfWeek" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails.property.daysOfWeek"></a>

```typescript
public readonly daysOfWeek: IResolvable | DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeek[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeek">DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeek</a>[]

days_of_week block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#days_of_week DatabaseAutonomousContainerDatabase#days_of_week}

---

##### `hoursOfDay`<sup>Optional</sup> <a name="hoursOfDay" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails.property.hoursOfDay"></a>

```typescript
public readonly hoursOfDay: number[];
```

- *Type:* number[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#hours_of_day DatabaseAutonomousContainerDatabase#hours_of_day}.

---

##### `isCustomActionTimeoutEnabled`<sup>Optional</sup> <a name="isCustomActionTimeoutEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails.property.isCustomActionTimeoutEnabled"></a>

```typescript
public readonly isCustomActionTimeoutEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#is_custom_action_timeout_enabled DatabaseAutonomousContainerDatabase#is_custom_action_timeout_enabled}.

---

##### `isMonthlyPatchingEnabled`<sup>Optional</sup> <a name="isMonthlyPatchingEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails.property.isMonthlyPatchingEnabled"></a>

```typescript
public readonly isMonthlyPatchingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#is_monthly_patching_enabled DatabaseAutonomousContainerDatabase#is_monthly_patching_enabled}.

---

##### `leadTimeInWeeks`<sup>Optional</sup> <a name="leadTimeInWeeks" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails.property.leadTimeInWeeks"></a>

```typescript
public readonly leadTimeInWeeks: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#lead_time_in_weeks DatabaseAutonomousContainerDatabase#lead_time_in_weeks}.

---

##### `months`<sup>Optional</sup> <a name="months" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails.property.months"></a>

```typescript
public readonly months: IResolvable | DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonths[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonths">DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonths</a>[]

months block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#months DatabaseAutonomousContainerDatabase#months}

---

##### `patchingMode`<sup>Optional</sup> <a name="patchingMode" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails.property.patchingMode"></a>

```typescript
public readonly patchingMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#patching_mode DatabaseAutonomousContainerDatabase#patching_mode}.

---

##### `preference`<sup>Optional</sup> <a name="preference" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails.property.preference"></a>

```typescript
public readonly preference: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#preference DatabaseAutonomousContainerDatabase#preference}.

---

##### `skipRu`<sup>Optional</sup> <a name="skipRu" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails.property.skipRu"></a>

```typescript
public readonly skipRu: IResolvable | boolean | IResolvable[];
```

- *Type:* cdktf.IResolvable | boolean | cdktf.IResolvable[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#skip_ru DatabaseAutonomousContainerDatabase#skip_ru}.

---

##### `weeksOfMonth`<sup>Optional</sup> <a name="weeksOfMonth" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails.property.weeksOfMonth"></a>

```typescript
public readonly weeksOfMonth: number[];
```

- *Type:* number[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#weeks_of_month DatabaseAutonomousContainerDatabase#weeks_of_month}.

---

### DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeek <a name="DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeek" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeek"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeek.Initializer"></a>

```typescript
import { databaseAutonomousContainerDatabase } from 'rhizo-co-terraform-provider-oci'

const databaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeek: databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeek = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeek.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#name DatabaseAutonomousContainerDatabase#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeek.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#name DatabaseAutonomousContainerDatabase#name}.

---

### DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonths <a name="DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonths" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonths"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonths.Initializer"></a>

```typescript
import { databaseAutonomousContainerDatabase } from 'rhizo-co-terraform-provider-oci'

const databaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonths: databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonths = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonths.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#name DatabaseAutonomousContainerDatabase#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonths.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#name DatabaseAutonomousContainerDatabase#name}.

---

### DatabaseAutonomousContainerDatabaseMaintenanceWindowMonths <a name="DatabaseAutonomousContainerDatabaseMaintenanceWindowMonths" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonths"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonths.Initializer"></a>

```typescript
import { databaseAutonomousContainerDatabase } from 'rhizo-co-terraform-provider-oci'

const databaseAutonomousContainerDatabaseMaintenanceWindowMonths: databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonths = { ... }
```


### DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfig <a name="DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfig" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfig.Initializer"></a>

```typescript
import { databaseAutonomousContainerDatabase } from 'rhizo-co-terraform-provider-oci'

const databaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfig: databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfig.property.backupDestinationDetails">backupDestinationDetails</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails">DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails</a>[]</code> | backup_destination_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfig.property.recoveryWindowInDays">recoveryWindowInDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#recovery_window_in_days DatabaseAutonomousContainerDatabase#recovery_window_in_days}. |

---

##### `backupDestinationDetails`<sup>Optional</sup> <a name="backupDestinationDetails" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfig.property.backupDestinationDetails"></a>

```typescript
public readonly backupDestinationDetails: IResolvable | DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails">DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails</a>[]

backup_destination_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#backup_destination_details DatabaseAutonomousContainerDatabase#backup_destination_details}

---

##### `recoveryWindowInDays`<sup>Optional</sup> <a name="recoveryWindowInDays" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfig.property.recoveryWindowInDays"></a>

```typescript
public readonly recoveryWindowInDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#recovery_window_in_days DatabaseAutonomousContainerDatabase#recovery_window_in_days}.

---

### DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails <a name="DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails.Initializer"></a>

```typescript
import { databaseAutonomousContainerDatabase } from 'rhizo-co-terraform-provider-oci'

const databaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails: databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#type DatabaseAutonomousContainerDatabase#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#id DatabaseAutonomousContainerDatabase#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails.property.internetProxy">internetProxy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#internet_proxy DatabaseAutonomousContainerDatabase#internet_proxy}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails.property.vpcPassword">vpcPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#vpc_password DatabaseAutonomousContainerDatabase#vpc_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails.property.vpcUser">vpcUser</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#vpc_user DatabaseAutonomousContainerDatabase#vpc_user}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#type DatabaseAutonomousContainerDatabase#type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#id DatabaseAutonomousContainerDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `internetProxy`<sup>Optional</sup> <a name="internetProxy" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails.property.internetProxy"></a>

```typescript
public readonly internetProxy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#internet_proxy DatabaseAutonomousContainerDatabase#internet_proxy}.

---

##### `vpcPassword`<sup>Optional</sup> <a name="vpcPassword" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails.property.vpcPassword"></a>

```typescript
public readonly vpcPassword: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#vpc_password DatabaseAutonomousContainerDatabase#vpc_password}.

---

##### `vpcUser`<sup>Optional</sup> <a name="vpcUser" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails.property.vpcUser"></a>

```typescript
public readonly vpcUser: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#vpc_user DatabaseAutonomousContainerDatabase#vpc_user}.

---

### DatabaseAutonomousContainerDatabaseTimeouts <a name="DatabaseAutonomousContainerDatabaseTimeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeouts.Initializer"></a>

```typescript
import { databaseAutonomousContainerDatabase } from 'rhizo-co-terraform-provider-oci'

const databaseAutonomousContainerDatabaseTimeouts: databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#create DatabaseAutonomousContainerDatabase#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#delete DatabaseAutonomousContainerDatabase#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#update DatabaseAutonomousContainerDatabase#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#create DatabaseAutonomousContainerDatabase#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#delete DatabaseAutonomousContainerDatabase#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database#update DatabaseAutonomousContainerDatabase#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference <a name="DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer"></a>

```typescript
import { databaseAutonomousContainerDatabase } from 'rhizo-co-terraform-provider-oci'

new databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resetInternetProxy">resetInternetProxy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resetVpcPassword">resetVpcPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resetVpcUser">resetVpcUser</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInternetProxy` <a name="resetInternetProxy" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resetInternetProxy"></a>

```typescript
public resetInternetProxy(): void
```

##### `resetVpcPassword` <a name="resetVpcPassword" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resetVpcPassword"></a>

```typescript
public resetVpcPassword(): void
```

##### `resetVpcUser` <a name="resetVpcUser" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resetVpcUser"></a>

```typescript
public resetVpcUser(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.internetProxyInput">internetProxyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.vpcPasswordInput">vpcPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.vpcUserInput">vpcUserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.internetProxy">internetProxy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.vpcPassword">vpcPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.vpcUser">vpcUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetails">DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `internetProxyInput`<sup>Optional</sup> <a name="internetProxyInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.internetProxyInput"></a>

```typescript
public readonly internetProxyInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `vpcPasswordInput`<sup>Optional</sup> <a name="vpcPasswordInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.vpcPasswordInput"></a>

```typescript
public readonly vpcPasswordInput: string;
```

- *Type:* string

---

##### `vpcUserInput`<sup>Optional</sup> <a name="vpcUserInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.vpcUserInput"></a>

```typescript
public readonly vpcUserInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internetProxy`<sup>Required</sup> <a name="internetProxy" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.internetProxy"></a>

```typescript
public readonly internetProxy: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `vpcPassword`<sup>Required</sup> <a name="vpcPassword" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.vpcPassword"></a>

```typescript
public readonly vpcPassword: string;
```

- *Type:* string

---

##### `vpcUser`<sup>Required</sup> <a name="vpcUser" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.vpcUser"></a>

```typescript
public readonly vpcUser: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetails">DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetails</a>

---


### DatabaseAutonomousContainerDatabaseBackupConfigOutputReference <a name="DatabaseAutonomousContainerDatabaseBackupConfigOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.Initializer"></a>

```typescript
import { databaseAutonomousContainerDatabase } from 'rhizo-co-terraform-provider-oci'

new databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.putBackupDestinationDetails">putBackupDestinationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.resetBackupDestinationDetails">resetBackupDestinationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.resetRecoveryWindowInDays">resetRecoveryWindowInDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBackupDestinationDetails` <a name="putBackupDestinationDetails" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.putBackupDestinationDetails"></a>

```typescript
public putBackupDestinationDetails(value: DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.putBackupDestinationDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetails">DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetails</a>

---

##### `resetBackupDestinationDetails` <a name="resetBackupDestinationDetails" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.resetBackupDestinationDetails"></a>

```typescript
public resetBackupDestinationDetails(): void
```

##### `resetRecoveryWindowInDays` <a name="resetRecoveryWindowInDays" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.resetRecoveryWindowInDays"></a>

```typescript
public resetRecoveryWindowInDays(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.property.backupDestinationDetails">backupDestinationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference">DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.property.backupDestinationDetailsInput">backupDestinationDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetails">DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.property.recoveryWindowInDaysInput">recoveryWindowInDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.property.recoveryWindowInDays">recoveryWindowInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfig">DatabaseAutonomousContainerDatabaseBackupConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backupDestinationDetails`<sup>Required</sup> <a name="backupDestinationDetails" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.property.backupDestinationDetails"></a>

```typescript
public readonly backupDestinationDetails: DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference">DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference</a>

---

##### `backupDestinationDetailsInput`<sup>Optional</sup> <a name="backupDestinationDetailsInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.property.backupDestinationDetailsInput"></a>

```typescript
public readonly backupDestinationDetailsInput: DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetails">DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetails</a>

---

##### `recoveryWindowInDaysInput`<sup>Optional</sup> <a name="recoveryWindowInDaysInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.property.recoveryWindowInDaysInput"></a>

```typescript
public readonly recoveryWindowInDaysInput: number;
```

- *Type:* number

---

##### `recoveryWindowInDays`<sup>Required</sup> <a name="recoveryWindowInDays" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.property.recoveryWindowInDays"></a>

```typescript
public readonly recoveryWindowInDays: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseAutonomousContainerDatabaseBackupConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseBackupConfig">DatabaseAutonomousContainerDatabaseBackupConfig</a>

---


### DatabaseAutonomousContainerDatabaseKeyHistoryEntryList <a name="DatabaseAutonomousContainerDatabaseKeyHistoryEntryList" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryList.Initializer"></a>

```typescript
import { databaseAutonomousContainerDatabase } from 'rhizo-co-terraform-provider-oci'

new databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryList.get"></a>

```typescript
public get(index: number): DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference <a name="DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.Initializer"></a>

```typescript
import { databaseAutonomousContainerDatabase } from 'rhizo-co-terraform-provider-oci'

new databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.property.kmsKeyVersionId">kmsKeyVersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.property.timeActivated">timeActivated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.property.vaultId">vaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntry">DatabaseAutonomousContainerDatabaseKeyHistoryEntry</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kmsKeyVersionId`<sup>Required</sup> <a name="kmsKeyVersionId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.property.kmsKeyVersionId"></a>

```typescript
public readonly kmsKeyVersionId: string;
```

- *Type:* string

---

##### `timeActivated`<sup>Required</sup> <a name="timeActivated" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.property.timeActivated"></a>

```typescript
public readonly timeActivated: string;
```

- *Type:* string

---

##### `vaultId`<sup>Required</sup> <a name="vaultId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.property.vaultId"></a>

```typescript
public readonly vaultId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseAutonomousContainerDatabaseKeyHistoryEntry;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseKeyHistoryEntry">DatabaseAutonomousContainerDatabaseKeyHistoryEntry</a>

---


### DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList <a name="DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList.Initializer"></a>

```typescript
import { databaseAutonomousContainerDatabase } from 'rhizo-co-terraform-provider-oci'

new databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList.get"></a>

```typescript
public get(index: number): DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference <a name="DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.Initializer"></a>

```typescript
import { databaseAutonomousContainerDatabase } from 'rhizo-co-terraform-provider-oci'

new databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeek">DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeek</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeek;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeek">DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeek</a>

---


### DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList <a name="DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList.Initializer"></a>

```typescript
import { databaseAutonomousContainerDatabase } from 'rhizo-co-terraform-provider-oci'

new databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList.get"></a>

```typescript
public get(index: number): DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeek">DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeek</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeek[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeek">DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeek</a>[]

---


### DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference <a name="DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer"></a>

```typescript
import { databaseAutonomousContainerDatabase } from 'rhizo-co-terraform-provider-oci'

new databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeek">DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeek</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeek;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeek">DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeek</a>

---


### DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList <a name="DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList.Initializer"></a>

```typescript
import { databaseAutonomousContainerDatabase } from 'rhizo-co-terraform-provider-oci'

new databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList.get"></a>

```typescript
public get(index: number): DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonths">DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonths</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonths[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonths">DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonths</a>[]

---


### DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference <a name="DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.Initializer"></a>

```typescript
import { databaseAutonomousContainerDatabase } from 'rhizo-co-terraform-provider-oci'

new databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonths">DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonths</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonths;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonths">DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonths</a>

---


### DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference <a name="DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.Initializer"></a>

```typescript
import { databaseAutonomousContainerDatabase } from 'rhizo-co-terraform-provider-oci'

new databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.putDaysOfWeek">putDaysOfWeek</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.putMonths">putMonths</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.resetCustomActionTimeoutInMins">resetCustomActionTimeoutInMins</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.resetDaysOfWeek">resetDaysOfWeek</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.resetHoursOfDay">resetHoursOfDay</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.resetIsCustomActionTimeoutEnabled">resetIsCustomActionTimeoutEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.resetIsMonthlyPatchingEnabled">resetIsMonthlyPatchingEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.resetLeadTimeInWeeks">resetLeadTimeInWeeks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.resetMonths">resetMonths</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.resetPatchingMode">resetPatchingMode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.resetPreference">resetPreference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.resetSkipRu">resetSkipRu</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.resetWeeksOfMonth">resetWeeksOfMonth</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDaysOfWeek` <a name="putDaysOfWeek" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.putDaysOfWeek"></a>

```typescript
public putDaysOfWeek(value: IResolvable | DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeek[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.putDaysOfWeek.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeek">DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeek</a>[]

---

##### `putMonths` <a name="putMonths" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.putMonths"></a>

```typescript
public putMonths(value: IResolvable | DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonths[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.putMonths.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonths">DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonths</a>[]

---

##### `resetCustomActionTimeoutInMins` <a name="resetCustomActionTimeoutInMins" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.resetCustomActionTimeoutInMins"></a>

```typescript
public resetCustomActionTimeoutInMins(): void
```

##### `resetDaysOfWeek` <a name="resetDaysOfWeek" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.resetDaysOfWeek"></a>

```typescript
public resetDaysOfWeek(): void
```

##### `resetHoursOfDay` <a name="resetHoursOfDay" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.resetHoursOfDay"></a>

```typescript
public resetHoursOfDay(): void
```

##### `resetIsCustomActionTimeoutEnabled` <a name="resetIsCustomActionTimeoutEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.resetIsCustomActionTimeoutEnabled"></a>

```typescript
public resetIsCustomActionTimeoutEnabled(): void
```

##### `resetIsMonthlyPatchingEnabled` <a name="resetIsMonthlyPatchingEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.resetIsMonthlyPatchingEnabled"></a>

```typescript
public resetIsMonthlyPatchingEnabled(): void
```

##### `resetLeadTimeInWeeks` <a name="resetLeadTimeInWeeks" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.resetLeadTimeInWeeks"></a>

```typescript
public resetLeadTimeInWeeks(): void
```

##### `resetMonths` <a name="resetMonths" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.resetMonths"></a>

```typescript
public resetMonths(): void
```

##### `resetPatchingMode` <a name="resetPatchingMode" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.resetPatchingMode"></a>

```typescript
public resetPatchingMode(): void
```

##### `resetPreference` <a name="resetPreference" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.resetPreference"></a>

```typescript
public resetPreference(): void
```

##### `resetSkipRu` <a name="resetSkipRu" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.resetSkipRu"></a>

```typescript
public resetSkipRu(): void
```

##### `resetWeeksOfMonth` <a name="resetWeeksOfMonth" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.resetWeeksOfMonth"></a>

```typescript
public resetWeeksOfMonth(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.daysOfWeek">daysOfWeek</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList">DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.months">months</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList">DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.customActionTimeoutInMinsInput">customActionTimeoutInMinsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.daysOfWeekInput">daysOfWeekInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeek">DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeek</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.hoursOfDayInput">hoursOfDayInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.isCustomActionTimeoutEnabledInput">isCustomActionTimeoutEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.isMonthlyPatchingEnabledInput">isMonthlyPatchingEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.leadTimeInWeeksInput">leadTimeInWeeksInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.monthsInput">monthsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonths">DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonths</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.patchingModeInput">patchingModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.preferenceInput">preferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.skipRuInput">skipRuInput</a></code> | <code>cdktf.IResolvable \| boolean \| cdktf.IResolvable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.weeksOfMonthInput">weeksOfMonthInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.customActionTimeoutInMins">customActionTimeoutInMins</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.hoursOfDay">hoursOfDay</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.isCustomActionTimeoutEnabled">isCustomActionTimeoutEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.isMonthlyPatchingEnabled">isMonthlyPatchingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.leadTimeInWeeks">leadTimeInWeeks</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.patchingMode">patchingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.preference">preference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.skipRu">skipRu</a></code> | <code>cdktf.IResolvable \| boolean \| cdktf.IResolvable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.weeksOfMonth">weeksOfMonth</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails">DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `daysOfWeek`<sup>Required</sup> <a name="daysOfWeek" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.daysOfWeek"></a>

```typescript
public readonly daysOfWeek: DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList">DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList</a>

---

##### `months`<sup>Required</sup> <a name="months" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.months"></a>

```typescript
public readonly months: DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList">DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList</a>

---

##### `customActionTimeoutInMinsInput`<sup>Optional</sup> <a name="customActionTimeoutInMinsInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.customActionTimeoutInMinsInput"></a>

```typescript
public readonly customActionTimeoutInMinsInput: number;
```

- *Type:* number

---

##### `daysOfWeekInput`<sup>Optional</sup> <a name="daysOfWeekInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.daysOfWeekInput"></a>

```typescript
public readonly daysOfWeekInput: IResolvable | DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeek[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeek">DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeek</a>[]

---

##### `hoursOfDayInput`<sup>Optional</sup> <a name="hoursOfDayInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.hoursOfDayInput"></a>

```typescript
public readonly hoursOfDayInput: number[];
```

- *Type:* number[]

---

##### `isCustomActionTimeoutEnabledInput`<sup>Optional</sup> <a name="isCustomActionTimeoutEnabledInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.isCustomActionTimeoutEnabledInput"></a>

```typescript
public readonly isCustomActionTimeoutEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isMonthlyPatchingEnabledInput`<sup>Optional</sup> <a name="isMonthlyPatchingEnabledInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.isMonthlyPatchingEnabledInput"></a>

```typescript
public readonly isMonthlyPatchingEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `leadTimeInWeeksInput`<sup>Optional</sup> <a name="leadTimeInWeeksInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.leadTimeInWeeksInput"></a>

```typescript
public readonly leadTimeInWeeksInput: number;
```

- *Type:* number

---

##### `monthsInput`<sup>Optional</sup> <a name="monthsInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.monthsInput"></a>

```typescript
public readonly monthsInput: IResolvable | DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonths[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonths">DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonths</a>[]

---

##### `patchingModeInput`<sup>Optional</sup> <a name="patchingModeInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.patchingModeInput"></a>

```typescript
public readonly patchingModeInput: string;
```

- *Type:* string

---

##### `preferenceInput`<sup>Optional</sup> <a name="preferenceInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.preferenceInput"></a>

```typescript
public readonly preferenceInput: string;
```

- *Type:* string

---

##### `skipRuInput`<sup>Optional</sup> <a name="skipRuInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.skipRuInput"></a>

```typescript
public readonly skipRuInput: IResolvable | boolean | IResolvable[];
```

- *Type:* cdktf.IResolvable | boolean | cdktf.IResolvable[]

---

##### `weeksOfMonthInput`<sup>Optional</sup> <a name="weeksOfMonthInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.weeksOfMonthInput"></a>

```typescript
public readonly weeksOfMonthInput: number[];
```

- *Type:* number[]

---

##### `customActionTimeoutInMins`<sup>Required</sup> <a name="customActionTimeoutInMins" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.customActionTimeoutInMins"></a>

```typescript
public readonly customActionTimeoutInMins: number;
```

- *Type:* number

---

##### `hoursOfDay`<sup>Required</sup> <a name="hoursOfDay" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.hoursOfDay"></a>

```typescript
public readonly hoursOfDay: number[];
```

- *Type:* number[]

---

##### `isCustomActionTimeoutEnabled`<sup>Required</sup> <a name="isCustomActionTimeoutEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.isCustomActionTimeoutEnabled"></a>

```typescript
public readonly isCustomActionTimeoutEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isMonthlyPatchingEnabled`<sup>Required</sup> <a name="isMonthlyPatchingEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.isMonthlyPatchingEnabled"></a>

```typescript
public readonly isMonthlyPatchingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `leadTimeInWeeks`<sup>Required</sup> <a name="leadTimeInWeeks" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.leadTimeInWeeks"></a>

```typescript
public readonly leadTimeInWeeks: number;
```

- *Type:* number

---

##### `patchingMode`<sup>Required</sup> <a name="patchingMode" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.patchingMode"></a>

```typescript
public readonly patchingMode: string;
```

- *Type:* string

---

##### `preference`<sup>Required</sup> <a name="preference" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.preference"></a>

```typescript
public readonly preference: string;
```

- *Type:* string

---

##### `skipRu`<sup>Required</sup> <a name="skipRu" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.skipRu"></a>

```typescript
public readonly skipRu: IResolvable | boolean | IResolvable[];
```

- *Type:* cdktf.IResolvable | boolean | cdktf.IResolvable[]

---

##### `weeksOfMonth`<sup>Required</sup> <a name="weeksOfMonth" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.weeksOfMonth"></a>

```typescript
public readonly weeksOfMonth: number[];
```

- *Type:* number[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails">DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails</a>

---


### DatabaseAutonomousContainerDatabaseMaintenanceWindowList <a name="DatabaseAutonomousContainerDatabaseMaintenanceWindowList" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowList.Initializer"></a>

```typescript
import { databaseAutonomousContainerDatabase } from 'rhizo-co-terraform-provider-oci'

new databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowList.get"></a>

```typescript
public get(index: number): DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList <a name="DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList.Initializer"></a>

```typescript
import { databaseAutonomousContainerDatabase } from 'rhizo-co-terraform-provider-oci'

new databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList.get"></a>

```typescript
public get(index: number): DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference <a name="DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.Initializer"></a>

```typescript
import { databaseAutonomousContainerDatabase } from 'rhizo-co-terraform-provider-oci'

new databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonths">DatabaseAutonomousContainerDatabaseMaintenanceWindowMonths</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseAutonomousContainerDatabaseMaintenanceWindowMonths;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonths">DatabaseAutonomousContainerDatabaseMaintenanceWindowMonths</a>

---


### DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference <a name="DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.Initializer"></a>

```typescript
import { databaseAutonomousContainerDatabase } from 'rhizo-co-terraform-provider-oci'

new databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.property.customActionTimeoutInMins">customActionTimeoutInMins</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.property.daysOfWeek">daysOfWeek</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList">DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.property.hoursOfDay">hoursOfDay</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabled">isCustomActionTimeoutEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.property.isMonthlyPatchingEnabled">isMonthlyPatchingEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.property.leadTimeInWeeks">leadTimeInWeeks</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.property.months">months</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList">DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.property.patchingMode">patchingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.property.preference">preference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.property.skipRu">skipRu</a></code> | <code>cdktf.BooleanList</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.property.weeksOfMonth">weeksOfMonth</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindow">DatabaseAutonomousContainerDatabaseMaintenanceWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customActionTimeoutInMins`<sup>Required</sup> <a name="customActionTimeoutInMins" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.property.customActionTimeoutInMins"></a>

```typescript
public readonly customActionTimeoutInMins: number;
```

- *Type:* number

---

##### `daysOfWeek`<sup>Required</sup> <a name="daysOfWeek" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.property.daysOfWeek"></a>

```typescript
public readonly daysOfWeek: DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList">DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList</a>

---

##### `hoursOfDay`<sup>Required</sup> <a name="hoursOfDay" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.property.hoursOfDay"></a>

```typescript
public readonly hoursOfDay: number[];
```

- *Type:* number[]

---

##### `isCustomActionTimeoutEnabled`<sup>Required</sup> <a name="isCustomActionTimeoutEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabled"></a>

```typescript
public readonly isCustomActionTimeoutEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isMonthlyPatchingEnabled`<sup>Required</sup> <a name="isMonthlyPatchingEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.property.isMonthlyPatchingEnabled"></a>

```typescript
public readonly isMonthlyPatchingEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `leadTimeInWeeks`<sup>Required</sup> <a name="leadTimeInWeeks" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.property.leadTimeInWeeks"></a>

```typescript
public readonly leadTimeInWeeks: number;
```

- *Type:* number

---

##### `months`<sup>Required</sup> <a name="months" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.property.months"></a>

```typescript
public readonly months: DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList">DatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList</a>

---

##### `patchingMode`<sup>Required</sup> <a name="patchingMode" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.property.patchingMode"></a>

```typescript
public readonly patchingMode: string;
```

- *Type:* string

---

##### `preference`<sup>Required</sup> <a name="preference" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.property.preference"></a>

```typescript
public readonly preference: string;
```

- *Type:* string

---

##### `skipRu`<sup>Required</sup> <a name="skipRu" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.property.skipRu"></a>

```typescript
public readonly skipRu: BooleanList;
```

- *Type:* cdktf.BooleanList

---

##### `weeksOfMonth`<sup>Required</sup> <a name="weeksOfMonth" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.property.weeksOfMonth"></a>

```typescript
public readonly weeksOfMonth: number[];
```

- *Type:* number[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseAutonomousContainerDatabaseMaintenanceWindow;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseMaintenanceWindow">DatabaseAutonomousContainerDatabaseMaintenanceWindow</a>

---


### DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList <a name="DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.Initializer"></a>

```typescript
import { databaseAutonomousContainerDatabase } from 'rhizo-co-terraform-provider-oci'

new databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.get"></a>

```typescript
public get(index: number): DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails">DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails">DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails</a>[]

---


### DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference <a name="DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer"></a>

```typescript
import { databaseAutonomousContainerDatabase } from 'rhizo-co-terraform-provider-oci'

new databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resetInternetProxy">resetInternetProxy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resetVpcPassword">resetVpcPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resetVpcUser">resetVpcUser</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInternetProxy` <a name="resetInternetProxy" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resetInternetProxy"></a>

```typescript
public resetInternetProxy(): void
```

##### `resetVpcPassword` <a name="resetVpcPassword" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resetVpcPassword"></a>

```typescript
public resetVpcPassword(): void
```

##### `resetVpcUser` <a name="resetVpcUser" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resetVpcUser"></a>

```typescript
public resetVpcUser(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.internetProxyInput">internetProxyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.vpcPasswordInput">vpcPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.vpcUserInput">vpcUserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.internetProxy">internetProxy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.vpcPassword">vpcPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.vpcUser">vpcUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails">DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `internetProxyInput`<sup>Optional</sup> <a name="internetProxyInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.internetProxyInput"></a>

```typescript
public readonly internetProxyInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `vpcPasswordInput`<sup>Optional</sup> <a name="vpcPasswordInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.vpcPasswordInput"></a>

```typescript
public readonly vpcPasswordInput: string;
```

- *Type:* string

---

##### `vpcUserInput`<sup>Optional</sup> <a name="vpcUserInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.vpcUserInput"></a>

```typescript
public readonly vpcUserInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internetProxy`<sup>Required</sup> <a name="internetProxy" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.internetProxy"></a>

```typescript
public readonly internetProxy: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `vpcPassword`<sup>Required</sup> <a name="vpcPassword" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.vpcPassword"></a>

```typescript
public readonly vpcPassword: string;
```

- *Type:* string

---

##### `vpcUser`<sup>Required</sup> <a name="vpcUser" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.vpcUser"></a>

```typescript
public readonly vpcUser: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails">DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails</a>

---


### DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference <a name="DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.Initializer"></a>

```typescript
import { databaseAutonomousContainerDatabase } from 'rhizo-co-terraform-provider-oci'

new databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.putBackupDestinationDetails">putBackupDestinationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.resetBackupDestinationDetails">resetBackupDestinationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.resetRecoveryWindowInDays">resetRecoveryWindowInDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBackupDestinationDetails` <a name="putBackupDestinationDetails" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.putBackupDestinationDetails"></a>

```typescript
public putBackupDestinationDetails(value: IResolvable | DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.putBackupDestinationDetails.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails">DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails</a>[]

---

##### `resetBackupDestinationDetails` <a name="resetBackupDestinationDetails" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.resetBackupDestinationDetails"></a>

```typescript
public resetBackupDestinationDetails(): void
```

##### `resetRecoveryWindowInDays` <a name="resetRecoveryWindowInDays" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.resetRecoveryWindowInDays"></a>

```typescript
public resetRecoveryWindowInDays(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.property.backupDestinationDetails">backupDestinationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList">DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.property.backupDestinationDetailsInput">backupDestinationDetailsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails">DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.property.recoveryWindowInDaysInput">recoveryWindowInDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.property.recoveryWindowInDays">recoveryWindowInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfig">DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backupDestinationDetails`<sup>Required</sup> <a name="backupDestinationDetails" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.property.backupDestinationDetails"></a>

```typescript
public readonly backupDestinationDetails: DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList">DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList</a>

---

##### `backupDestinationDetailsInput`<sup>Optional</sup> <a name="backupDestinationDetailsInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.property.backupDestinationDetailsInput"></a>

```typescript
public readonly backupDestinationDetailsInput: IResolvable | DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails">DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails</a>[]

---

##### `recoveryWindowInDaysInput`<sup>Optional</sup> <a name="recoveryWindowInDaysInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.property.recoveryWindowInDaysInput"></a>

```typescript
public readonly recoveryWindowInDaysInput: number;
```

- *Type:* number

---

##### `recoveryWindowInDays`<sup>Required</sup> <a name="recoveryWindowInDays" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.property.recoveryWindowInDays"></a>

```typescript
public readonly recoveryWindowInDays: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfig">DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfig</a>

---


### DatabaseAutonomousContainerDatabaseTimeoutsOutputReference <a name="DatabaseAutonomousContainerDatabaseTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.Initializer"></a>

```typescript
import { databaseAutonomousContainerDatabase } from 'rhizo-co-terraform-provider-oci'

new databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeouts">DatabaseAutonomousContainerDatabaseTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseAutonomousContainerDatabaseTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabase.DatabaseAutonomousContainerDatabaseTimeouts">DatabaseAutonomousContainerDatabaseTimeouts</a>

---



